import { NextResponse } from "next/server";
import type { GeneratedPlan, ItineraryDay } from "@/lib/types";
import { chat } from "@/lib/llm";

export const runtime = "nodejs";
export const maxDuration = 120;

function extractJson(text: string): string {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const first = t.indexOf("{");
  const last = t.lastIndexOf("}");
  if (first !== -1 && last !== -1 && last > first) t = t.slice(first, last + 1);
  return t;
}

export async function POST(req: Request) {
  let body: { plan: GeneratedPlan; day: number };
  try {
    body = (await req.json()) as { plan: GeneratedPlan; day: number };
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { plan, day } = body;
  if (!plan || !day) {
    return NextResponse.json({ error: "Missing plan or day." }, { status: 400 });
  }

  const existing = (plan.itinerary || []).find((d) => d.day === day);
  if (!existing) {
    return NextResponse.json({ error: "Day not found." }, { status: 400 });
  }

  const system = `You are Trip Planify, an expert travel planner. Regenerate a single day of an existing itinerary with fresh activities.
Respond with ONLY a valid JSON object and nothing else.`;

  const user = `Trip destination: ${plan.summary.destination}
Budget style: ${plan.summary.budgetStyle}
Interests: ${plan.input.interests || "general sightseeing"}

Regenerate Day ${existing.day} (${existing.title}) in ${existing.location || plan.summary.destination}.
Avoid repeating these previous activities: "${existing.morning?.activity}", "${existing.afternoon?.activity}", "${existing.evening?.activity}".
Suggest different, equally appealing things to do that day.

Return JSON exactly in this shape:
{
  "title": string,
  "morning": { "time": string, "activity": string, "description": string },
  "afternoon": { "time": string, "activity": string, "description": string },
  "evening": { "time": string, "activity": string, "description": string }
}`;

  try {
    const content = await chat([
      { role: "system", content: system },
      { role: "user", content: user },
    ]);

    const parsed = JSON.parse(extractJson(content)) as Pick<
      ItineraryDay,
      "title" | "morning" | "afternoon" | "evening"
    >;

    const updatedDay: ItineraryDay = {
      ...existing,
      title: parsed.title || existing.title,
      morning: { ...existing.morning, ...parsed.morning },
      afternoon: { ...existing.afternoon, ...parsed.afternoon },
      evening: { ...existing.evening, ...parsed.evening },
    };

    return NextResponse.json({ day: updatedDay });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: `Could not regenerate day: ${message}` }, { status: 500 });
  }
}
