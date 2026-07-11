import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/guides/how-to-plan-international-trip-with-ai";

export function generateMetadata(): Metadata {
  return {
    title: "How to Plan an International Trip Using AI | Trip Planify",
    description:
      "Step-by-step guide to planning an international trip with AI. Learn how to use Trip Planify to generate itineraries, find stays, and estimate expenses in USD for any country.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "plan international trip with AI",
      "AI trip planner",
      "international travel planning",
      "how to plan a trip abroad",
      "AI itinerary generator",
      "Trip Planify guide",
      "international trip budget",
      "visa and passport tips",
      "booking flights and hotels",
      "AI travel assistant",
    ],
    openGraph: {
      title: "How to Plan an International Trip Using AI | Trip Planify",
      description:
        "Step-by-step guide to planning an international trip with AI. Learn how to use Trip Planify to generate itineraries, find stays, and estimate expenses in USD for any country.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "How to Plan an International Trip Using AI",
      description:
        "A practical 7-step walkthrough of using an AI planner for trips abroad — destinations, budgets, currencies, visas, and booking.",
    },
  };
}

export default function HowToPlanInternationalTripPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 py-10 sm:py-14 prose-sm">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          ← Back to Trip Planify home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          How to Plan an International Trip Using AI
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Planning a trip abroad used to mean a dozen browser tabs —
          Skyscanner, TripAdvisor, Reddit, a currency converter, and three
          spreadsheet columns that never quite reconciled. An AI trip planner
          collapses all of that into one step: you give it a destination,
          dates, and budget style, and it returns a complete plan you can
          actually use. This guide walks through how to do it well — not just
          how to click the button, but how to read the output, sanity-check
          the numbers, and avoid the two or three mistakes first-timers make.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          1. Why use AI for trip planning?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The honest answer is that AI is faster at the boring 80% of
          planning — choosing a neighborhood to stay in, sequencing
          attractions by geography, estimating realistic travel times between
          them — and lets you spend your time on the fun 20% (where to eat,
          what to skip, what to splurge on). A good AI planner also catches
          things first-timers miss: that your hotel is 40 minutes from the
          old town, that the museum is closed on Mondays, that the ferry to
          the island you wanted stops running at 6 PM. The output is a
          starting point, not gospel — but it&apos;s a far better starting
          point than a blank document.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          2. Choose your destination country
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Start with the country, not the city — most visa rules apply at the
          country level, and inter-city travel inside one country is far
          simpler than crossing borders. If you have 5–7 days, pick one
          country and 1–2 cities inside it. If you have 12+ days, you can
          consider two neighboring countries. The single most common mistake
          is trying to cram four countries into a week — you spend more time
          in airports than attractions. Be honest with the trip type: pick
          &quot;International&quot; for one country, &quot;Multi-country&quot;
          only if you genuinely plan to cross borders.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          3. Set your budget style honestly
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Trip Planify uses three budget styles — <strong>budget</strong>,{" "}
          <strong>mid-range</strong>, and <strong>luxury</strong> — and the AI
          tunes every recommendation to match. &quot;Budget&quot; means
          hostels, street food, and public transport (think $30–60/day in
          Southeast Asia, $60–90/day in Europe). &quot;Mid-range&quot; means
          3-star hotels, sit-down dinners, occasional taxis ($80–150/day in
          SE Asia, $150–250/day in Europe). &quot;Luxury&quot; means 4–5
          star, fine dining, private transfers ($300+/day). Pick the one that
          matches your real wallet — a plan built for mid-range is useless if
          you can only afford budget, and vice versa.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          4. Read the generated itinerary carefully
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Each day in an AI itinerary has three parts you should actually
          read: <strong>departure notes</strong> (what time you leave, how
          long the drive/flight takes, the distance), <strong>activity
          blocks</strong> (morning, afternoon, evening with timed slots), and{" "}
          <strong>meal stops</strong> (named restaurants or food streets, not
          just &quot;lunch in town&quot;). Pay special attention to travel
          times — a 300 km drive through the Alps is not 3 hours, it&apos;s
          5–6, and a good AI planner will say so. If the plan says
          &quot;8 AM: visit museum, 9 AM: cross town to next museum,&quot;
          that&apos;s a flag to question it. Regenerate any single day that
          feels off rather than redoing the whole trip.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          5. Currency: USD vs local
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Trip Planify lets you pick the currency for your expense
          breakdown. For international trips, you have two reasonable
          choices: USD (good for comparing across countries and for a rough
          sense of total spend) or the destination&apos;s local currency
          (good for actually paying on the ground and matching what you see
          on menus and hotel rates). If you&apos;re a Pakistani or Indian
          traveler, picking your home currency is fine for budgeting at home,
          but switch to local for the trip itself — converting PKR 4,000 to
          THB every time you look at a menu is exhausting. The AI uses
          realistic local prices (a mid-range Bangkok hotel is THB
          1,200–2,000/night, not $200) so the totals are trustworthy.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          6. Visa &amp; passport reminders
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          No AI plan replaces actual visa homework. Before you book anything,
          check three things: (a) does your passport need a visa for this
          country? — start at the destination&apos;s official immigration
          website, not a blog; (b) does your passport have 6+ months validity
          past your return date? — most countries reject anything shorter;
          (c) do you have at least 2 blank pages? Many visa-on-arrival
          schemes require this. E-visas for Turkey, UAE, Cambodia, Vietnam,
          and Sri Lanka are genuinely quick (24–72 hours); Schengen and US
          visas are not — apply 6–8 weeks ahead minimum. The AI planner
          works whether or not you have the visa yet, but do not book
          non-refundable flights before the visa is in hand.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          7. Tips for actually booking
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Once the itinerary looks right, book in this order: flights first
          (prices move most), then accommodations (cancelable rates until the
          visa is confirmed), then activities and trains. Use the AI&apos;s
          expense breakdown as your ceiling, not your floor — if it says a
          mid-range Bangkok hotel should be THB 1,500/night and you see one
          for THB 900 with good reviews, book it; the savings go to food.
          For inter-city trains in Europe and Japan, book the moment sales
          open (usually 90–120 days out) — the cheap fares vanish in hours.
          Always screenshot or PDF the AI itinerary before you travel; data
          roaming is unreliable and you&apos;ll want the offline version.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          Ready to plan?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Open the planner, pick International, choose your country and
          currency, and you&apos;ll have a usable itinerary in under 30
          seconds — one you can edit day-by-day, export to PDF, or share with
          travel partners.
        </p>

        <Link
          href="/"
          className="inline-flex items-center font-display text-lg font-semibold text-primary hover:underline"
        >
          Plan your international trip with AI →
        </Link>
      </article>
    </main>
  );
}
