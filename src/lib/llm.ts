/**
 * Shared LLM chat helper.
 *
 * Priority:
 * 1. OpenRouter (OpenAI-compatible) if OPENROUTER_API_KEY is set — fast & reliable.
 * 2. Groq if GROQ_API_KEY is set — very fast.
 * 3. z-ai-web-dev-sdk (platform built-in) as the final fallback.
 *
 * All providers retry on 429 with exponential backoff. On any error, the next
 * provider is tried. Both paths return the raw assistant text content.
 */

import ZAI from "z-ai-web-dev-sdk";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

export function isGroqConfigured(): boolean {
  return Boolean(process.env.GROQ_API_KEY);
}
export function isOpenRouterConfigured(): boolean {
  return Boolean(process.env.OPENROUTER_API_KEY);
}

/** Call the LLM with the given messages and return the assistant's text. */
export async function chat(messages: ChatMessage[]): Promise<string> {
  const errors: string[] = [];

  if (isOpenRouterConfigured()) {
    // OpenRouter is the primary provider. Try it twice (1 retry) — qwen-2.5-7b
    // usually finishes in 12-20s, and a second attempt often succeeds when the
    // first was a transient timeout. With a 45s timeout, worst case is ~95s.
    try {
      return await chatWithRetry(() => chatWithOpenRouter(messages), 1);
    } catch (err) {
      errors.push(`OpenRouter: ${err instanceof Error ? err.message : String(err)}`);
      console.warn("OpenRouter failed after retry, trying fallback:", errors[errors.length - 1]);
    }
  }

  if (isGroqConfigured()) {
    try {
      return await chatWithRetry(() => chatWithGroq(messages));
    } catch (err) {
      errors.push(`Groq: ${err instanceof Error ? err.message : String(err)}`);
      console.warn("Groq failed, trying fallback:", errors[errors.length - 1]);
    }
  }

  try {
    // z-ai is the final fallback. Don't retry it on 429 — the rate-limit
    // window is long, so retrying just wastes time. Try once and surface
    // the error immediately.
    return await chatWithZai(messages);
  } catch (err) {
    errors.push(`z-ai: ${err instanceof Error ? err.message : String(err)}`);
    const allErrors = errors.join(" | ");
    // If z-ai is rate-limited, give a clear actionable message.
    if (allErrors.includes("429") || allErrors.toLowerCase().includes("too many requests")) {
      throw new Error("The AI service is busy right now. Please wait a minute and try again.");
    }
    throw new Error(`All LLM providers failed — ${allErrors}`);
  }
}

/** Retry an LLM call on 429 (rate-limit) or timeouts, with backoff. */
async function chatWithRetry(fn: () => Promise<string>, maxRetries = 2): Promise<string> {
  const delays = [3000, 6000, 8000, 10000].slice(0, maxRetries);
  let lastErr: unknown;
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const msg = err instanceof Error ? err.message : String(err);
      const isRetryable =
        msg.includes("429") ||
        msg.includes("502") ||
        msg.includes("503") ||
        msg.toLowerCase().includes("too many requests") ||
        msg.toLowerCase().includes("rate limit") ||
        msg.toLowerCase().includes("timed out") ||
        msg.toLowerCase().includes("timeout") ||
        msg.toLowerCase().includes("unavailable");
      if (!isRetryable || attempt === delays.length) throw err;
      await new Promise((r) => setTimeout(r, delays[attempt]));
    }
  }
  throw lastErr;
}

async function chatWithOpenRouter(messages: ChatMessage[]): Promise<string> {
  const controller = new AbortController();
  // Hard 45s timeout — qwen-2.5-7b usually finishes in 12-20s for the full
  // plan JSON; 45s gives headroom for OpenRouter's occasional slowdowns.
  const timeout = setTimeout(() => controller.abort(), 45000);

  try {
    const res = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://trip-planify.app",
        "X-Title": "Trip Planify",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 4000,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      if (res.status === 429) {
        throw new Error("Too many requests to OpenRouter.");
      }
      // 502/503 = OpenRouter's upstream provider is unavailable — retryable.
      if (res.status === 502 || res.status === 503) {
        throw new Error(`OpenRouter provider unavailable (${res.status}).`);
      }
      throw new Error(`OpenRouter API error ${res.status}: ${body.slice(0, 200)}`);
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error("OpenRouter returned an empty response.");
    return content as string;
  } catch (err) {
    // Convert AbortError into a clear message so the retry logic can handle it.
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("OpenRouter request timed out after 45s.");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

async function chatWithGroq(messages: ChatMessage[]): Promise<string> {
  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 8000,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    if (res.status === 429) {
      throw new Error("Too many requests to the Groq API.");
    }
    throw new Error(`Groq API error ${res.status}: ${body.slice(0, 200)}`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error("Groq returned an empty response.");
  return content as string;
}

async function chatWithZai(messages: ChatMessage[]): Promise<string> {
  const zai = await ZAI.create();
  const completion = await zai.chat.completions.create({
    messages,
    thinking: { type: "disabled" },
  });
  const content = completion.choices[0]?.message?.content;
  if (!content) throw new Error("The AI returned an empty response.");
  return content as string;
}
