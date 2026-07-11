import { NextResponse } from "next/server";
import type { GeneratedPlan, PlanInput, Place } from "@/lib/types";
import { budgetLabel, tripTypeLabel, vehicleLabel } from "@/lib/travel-data";
import { chat } from "@/lib/llm";

export const runtime = "nodejs";
export const maxDuration = 120;

/** Fetch a real photo for a place via the Wikipedia API (free, no key). */
async function fetchPlaceImage(placeName: string, destination: string): Promise<string | undefined> {
  const query = `${placeName} ${destination}`.trim();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const apiUrl =
      "https://en.wikipedia.org/w/api.php?" +
      new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        generator: "search",
        gsrsearch: query,
        gsrlimit: "1",
        prop: "pageimages",
        pithumbsize: "800",
        pilicense: "any",
      }).toString();
    const res = await fetch(apiUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "TripPlanify/1.0 (https://trip-planify.app; contact@trip-planify.app)" },
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return undefined;
    const firstPage = Object.values(pages)[0] as any;
    const thumb = firstPage?.thumbnail?.source;
    return typeof thumb === "string" && thumb.startsWith("http") ? thumb : undefined;
  } catch {
    return undefined;
  } finally {
    clearTimeout(timeout);
  }
}

/** Attach real photos to the top place picks (parallel, bounded). */
async function attachPlaceImages(plan: GeneratedPlan): Promise<void> {
  const picks = plan.placesToVisit?.topPicks;
  if (!picks || picks.length === 0) return;
  const destination = plan.summary?.destination || "";
  const results = await Promise.allSettled(
    picks.map((p: Place) => fetchPlaceImage(p.name, destination))
  );
  results.forEach((r, i) => {
    if (r.status === "fulfilled" && r.value) {
      picks[i].image = r.value;
    }
  });
}

function buildPrompt(input: PlanInput): { system: string; user: string } {
  const budget = budgetLabel(input.budgetStyle);
  const ttLabel = tripTypeLabel(input.tripType);
  const travelers = input.travelers || 1;
  const interests = input.interests?.trim() || "general sightseeing and local culture";
  const startDateTxt = input.startDate
    ? `starting ${input.startDate}`
    : "dates flexible (treat as starting soon)";

  let tripDescription = "";
  let totalDays = 0;

  const vehicle = vehicleLabel(input.vehicle || "car");

  if (input.tripType === "national") {
    totalDays = input.duration || 3;
    const origin = input.originCity?.trim();
    tripDescription = `A national (domestic) trip${origin ? ` from ${origin} to ${input.city}` : ` to ${input.city}`} in ${input.country}. Duration: ${totalDays} days, ${startDateTxt}. Mode of transport: ${vehicle}.${origin ? ` The traveler departs from ${origin}.` : ""}`;
  } else if (input.tripType === "international") {
    totalDays = input.duration || 5;
    const origin = input.originCity?.trim();
    tripDescription = `An international trip${origin ? ` from ${origin} to ${input.city}` : ` to ${input.city}`}, ${input.country}. Duration: ${totalDays} days, ${startDateTxt}. Mode of transport: ${vehicle}.${origin ? ` The traveler departs from ${origin}.` : ""} This crosses an international border, so include visa/passport guidance and local-currency cost estimates.`;
  } else {
    const legs = input.legs ?? [];
    totalDays = legs.reduce((s, l) => s + (l.duration || 0), 0);
    const origin = input.originCity?.trim();
    const legLines = legs
      .map(
        (l, i) =>
          `Leg ${i + 1}: ${l.country} — ${l.city}, ${l.duration} days, local transport: ${vehicleLabel(
            l.vehicle || "car"
          )}${
            l.transportToNext
              ? `, then ${vehicleLabel(l.transportToNext)} to the next country`
              : ""
          }`
      )
      .join("\n");
    tripDescription = `A multi-country journey${origin ? ` starting from ${origin}` : ""} across ${legs.length} countries over ${totalDays} days total, ${startDateTxt}.\n${legLines}\nProvide a combined day-by-day itinerary spanning all legs, per-country expense breakdown plus a grand total, and inter-country transport suggestions (mode, estimated time, rough cost) between consecutive countries.${origin ? ` The traveler departs from ${origin}.` : ""}`;
  }

  const system = `You are Trip Planify, an expert travel planner AI. You produce detailed, realistic, well-structured travel plans.
You MUST respond with a single valid JSON object and NOTHING else — no markdown, no code fences, no commentary.

CRITICAL RULES FOR DEPARTURE & TRAVEL TIMES:
- The "departure" field on Day 1 (and any travel day) MUST reflect REALISTIC travel times between the origin and destination cities.
- Estimate the real road distance and driving/transit time. For example: a car trip from Jacobabad to Islamabad is ~1,000 km and takes about 12-14 hours; a bus from Lahore to Karachi is ~1,300 km and takes ~18 hours; a flight from New York to Los Angeles takes ~6 hours.
- Typical speeds: Car/Bike ~70 km/h, Bus ~60 km/h, Train ~80 km/h, Flight ~800 km/h (plus 2h airport time).
- The departure note MUST state the estimated travel time, e.g. "12-hour drive (~1,000 km)" or "2-hour flight".
- The departure time + travel duration must make sense together (e.g. depart 6:00 AM, arrive ~6:00 PM for a 12hr drive).
- If the journey is long (>6 hours), the arrival city activities should start in the afternoon/evening, not the morning.

CRITICAL RULES FOR CURRENCY:
- ALL cost amounts (accommodations, expenses, per-country totals) MUST be expressed in ${input.homeCurrency} — that is the trip's official expense currency.
- Use REALISTIC LOCAL price levels for the destination country. For example, a mid-range hotel in Pakistan costs ₨8,000-15,000/night, not $150. A meal in Pakistan is ₨500-2,000, not $20. Adjust prices to local purchasing power.
- Do NOT use US Dollar amounts unless the currency is explicitly USD.

Use concrete, well-known places and reasonable prices for a "${budget}" budget style.
Keep descriptions concise (1 short sentence each). Every field in the schema below must be present and correctly typed.`;

  const schema = `{
  "summary": {
    "destination": string,   // the destination CITY only, e.g. "San Francisco" (NOT "Origin to Destination")
    "destinations": string[],
    "duration": number,
    "durationLabel": string,
    "dates": string,
    "vehicle": string,
    "budgetStyle": string,
    "tripTypeLabel": string,
    "travelers": number
  },
  "accommodations": [   // EXACTLY 3 items
    {
      "name": string,
      "type": string,
      "pricePerNight": string,
      "pricePerNightLow": number,
      "pricePerNightHigh": number,
      "rating": number,
      "description": string,
      "highlights": string[]   // 2-3 items
    }
  ],
  "placesToVisit": {
    "topPicks": [   // EXACTLY 4 items
      { "name": string, "type": string, "description": string, "duration": string, "bestTime": string }
    ],
    "hiddenGems": [   // EXACTLY 2 items
      { "name": string, "type": string, "description": string, "why": string }
    ]
  },
  "itinerary": [
    {
      "day": number,
      "title": string,
      "location": string,
      "departure": { "time": string, "from": string, "note": string },   // when/where you depart that day — Day 1 MUST depart from the origin city. "note" MUST include the realistic travel time + distance, e.g. "12-hour drive (~1,000 km)" or "2-hour flight"
      "morning": { "time": string, "activity": string, "description": string },
      "afternoon": { "time": string, "activity": string, "description": string },
      "evening": { "time": string, "activity": string, "description": string },
      "meals": { "breakfast": string, "lunch": string, "dinner": string }   // recommended meal stops with restaurant/area names
    }
  ],
  "expenses": {
    "categories": [
      { "category": string, "amount": number, "percentage": number, "note": string }
    ],
    "total": number,
    "currency": "${input.homeCurrency}"
  },
  "weather": { "condition": string, "tempRange": string, "note": string },
  "tips": string[]
  // INTERNATIONAL ONLY: also include "visaNote": string, "currencyNote": string,
  //   and inside expenses: "localCurrency": string, "exchangeRate": number, "totalLocal": number
  // MULTI-COUNTRY ONLY: also include "visaNote": string, "currencyNote": string,
  //   "countryBreakdown": [{ "country": string, "total": number, "days": number }],
  //   "interCountryTransport": [{ "from": string, "to": string, "mode": string, "estTime": string, "estCost": string }],
  //   and inside expenses: "localCurrency": string, "exchangeRate": number, "totalLocal": number
}`;

  const user = `Create a complete travel plan for the following request. Travelers: ${travelers}. Budget style: ${budget}. Interests/preferences: ${interests}. Home currency: ${input.homeCurrency}.

${tripDescription}

Return ONLY a JSON object matching this schema (omit optional international/multi-country fields that do not apply, but ALWAYS include summary, accommodations, placesToVisit, itinerary, expenses, weather, tips). The itinerary MUST contain exactly ${totalDays} day entries.

${schema}`;

  return { system, user };
}

function extractJson(text: string): string {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const first = t.indexOf("{");
  const last = t.lastIndexOf("}");
  if (first !== -1 && last !== -1 && last > first) {
    t = t.slice(first, last + 1);
  }
  return t;
}

function normalizePlan(raw: Record<string, unknown>, input: PlanInput): GeneratedPlan {
  const expenses = (raw.expenses as GeneratedPlan["expenses"]) ?? {
    categories: [],
    total: 0,
    currency: input.homeCurrency,
  };
  const cats: any[] = Array.isArray(expenses.categories) ? expenses.categories : [];
  const total = cats.reduce((s, c) => s + (Number(c?.amount) || 0), 0) || expenses.total || 0;
  expenses.categories = cats.map((c) => ({
    category: c?.category ?? "Misc",
    amount: Number(c?.amount) || 0,
    percentage: total > 0 ? Math.round(((Number(c?.amount) || 0) / total) * 100) : 0,
    note: c?.note ?? "",
  }));
  expenses.total = total;
  // Force the expense currency to the one requested for this trip
  // (national = destination country's currency, international/multi = USD).
  expenses.currency = input.homeCurrency;

  const plan = {
    ...raw,
    tripType: input.tripType,
    expenses,
    input,
    createdAt: new Date().toISOString(),
  } as unknown as GeneratedPlan;

  if (!plan.summary) plan.summary = {} as GeneratedPlan["summary"];
  plan.summary.travelers = input.travelers || 1;
  plan.summary.duration = plan.summary.duration || input.duration || 0;
  if (input.originCity) {
    plan.summary.origin = input.originCity;
  }
  return plan;
}

export async function POST(req: Request) {
  let input: PlanInput;
  try {
    input = (await req.json()) as PlanInput;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!input.tripType) {
    return NextResponse.json({ error: "Missing tripType." }, { status: 400 });
  }

  const { system, user } = buildPrompt(input);

  try {
    const content = await chat([
      { role: "system", content: system },
      { role: "user", content: user },
    ]);

    const jsonText = extractJson(content);
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(jsonText);
    } catch {
      return NextResponse.json(
        { error: "Could not parse the AI plan. Please try again.", raw: content.slice(0, 500) },
        { status: 502 }
      );
    }

    const plan = normalizePlan(parsed, input);
    // Attach real photos to places via Wikipedia API (parallel, ~1-2s, bounded).
    try {
      const budget = new Promise((resolve) => setTimeout(resolve, 10000, "timeout"));
      await Promise.race([attachPlaceImages(plan), budget]);
    } catch {
      // ignore — UI has gradient fallbacks
    }
    return NextResponse.json({ plan });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    // Detect rate-limiting from the upstream LLM API.
    if (message.includes("429") || message.toLowerCase().includes("too many requests")) {
      return NextResponse.json(
        {
          error:
            "The AI service is busy right now. Please wait a minute and try again.",
        },
        { status: 429 }
      );
    }
    return NextResponse.json({ error: `Plan generation failed: ${message}` }, { status: 500 });
  }
}
