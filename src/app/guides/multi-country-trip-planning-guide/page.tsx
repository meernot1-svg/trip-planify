import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/guides/multi-country-trip-planning-guide";

export function generateMetadata(): Metadata {
  return {
    title:
      "Multi-Country Trip Planning Guide: Visit Multiple Countries in One Trip | Trip Planify",
    description:
      "Learn how to plan a multi-country trip with AI — combine 2-5 countries in one journey with inter-country transport, per-country budgets, and a combined itinerary.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "multi-country trip planner",
      "plan multiple countries in one trip",
      "Europe multi-country itinerary",
      "Southeast Asia backpacking route",
      "GCC travel itinerary",
      "inter-country transport",
      "Schengen visa multiple countries",
      "multi-currency travel budget",
      "Trip Planify multi-country mode",
      "two country trip planning",
    ],
    openGraph: {
      title:
        "Multi-Country Trip Planning Guide: Visit Multiple Countries in One Trip | Trip Planify",
      description:
        "Learn how to plan a multi-country trip with AI — combine 2-5 countries in one journey with inter-country transport, per-country budgets, and a combined itinerary.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Multi-Country Trip Planning Guide",
      description:
        "Routes, transport, visas, multi-currency budgets, and how AI multi-country trip mode works.",
    },
  };
}

export default function MultiCountryTripGuidePage() {
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
          Multi-Country Trip Planning Guide
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          A multi-country trip — two to five countries stitched into one
          journey — is one of the most rewarding ways to travel. It trades
          the depth of a single-country visit for the contrast of seeing how
          landscapes, food, and language shift across a border you can
          sometimes cross in 90 minutes by train. But it&apos;s also the
          trip type most likely to go wrong: visas stack up, currencies
          multiply, and a single missed connection can unravel three days of
          plans. This guide covers the routes that actually work, how to
          choose transport between countries, how to budget across
          currencies, and how to use Trip Planify&apos;s multi-country mode
          so you get a usable plan instead of a stressful one.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          1. What is a multi-country trip (and when does it make sense)?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          A multi-country trip is exactly what it sounds like: a single
          itinerary with overnight stays in two or more countries. It makes
          sense when (a) the countries are genuinely close — a few hours by
          flight, train, or bus; (b) you have at least 10–14 days, since
          each country needs a minimum of 3 nights to be worth the border
          crossing; and (c) the visa situation allows it. It does not make
          sense to fly Pakistan → France → Thailand → USA on one trip,
          despite what round-the-world bucket-list blogs suggest — that is
          four trips squeezed into one exhausting fortnight. The sweet spot
          is 2–3 neighboring countries over 12–18 days.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          2. Popular multi-country routes that actually work
        </h2>
        <ul className="text-foreground/80 leading-relaxed mb-6 space-y-3 list-disc pl-6">
          <li>
            <strong>Western Europe: France → Italy → Spain</strong> (or any
            permutation). 14–18 days. Paris → Milan (TGV, 7 hrs), Milan →
            Rome (Frecciarossa, 3 hrs), Rome → Barcelona (flight, 2 hrs),
            Barcelona → Madrid (AVE, 2.5 hrs). One Schengen visa covers all
            three. Budget: €1,800–€3,200 per person mid-range, depending on
            city mix.
          </li>
          <li>
            <strong>Southeast Asia: Thailand → Vietnam → Cambodia</strong>.
            14–21 days. Bangkok → Siem Reap (flight, 1 hr), Siem Reap →
            Phnom Penh → Ho Chi Minh City (bus or flight), HCMC → Hanoi
            (flight, 2 hrs). Three separate visas but all easy e-visas or
            visa-on-arrival. Budget: $700–$1,400 per person mid-range —
            Southeast Asia is the cheapest region in the world for
            multi-country travel.
          </li>
          <li>
            <strong>GCC: UAE → Oman → Qatar</strong>. 10–14 days. Dubai →
            Muscat (flight, 1 hr) or bus via Hatta border (4 hrs, scenic),
            Muscat → Doha (flight, 1.5 hrs). All three are visa-on-arrival
            or e-visa for most South Asian passport holders, though rules
            shift — check before booking. Budget: $1,500–$2,800 per person
            mid-range; the GCC is not a budget region.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          3. Choosing transport between countries
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The general rule: trains beat flights for journeys under 6 hours,
          flights beat trains for anything over 8. In Europe, high-speed
          rail (TGV, Frecciarossa, ICE, AVE, Eurostar) is usually faster
          door-to-door than flying once you factor in airport transit and
          security — and trains drop you in city centers. Book 60–90 days
          ahead for the cheapest fares; the cheapest TGV Paris–Milan is €35
          if booked early, €180 if booked the week of. In Southeast Asia,
          budget airlines (AirAsia, VietJet, Scoot, Lion) dominate — a
          Bangkok–Hanoi flight is $60–110. Buses are viable for short hops
          (Phnom Penh–Ho Chi Minh is $15, 6 hours) but skip overnight
          sleeper buses if you&apos;re over 30 — the roads are rough. In the
          GCC, flights are essentially the only option between Oman and
          Qatar; the UAE–Oman land border at Hatta is open but slow.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          4. Budgeting across multiple currencies
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Multi-country trips force you to juggle 2–4 currencies. Two
          practical approaches: (1) Keep each country&apos;s budget in its
          local currency — €800 for France, €700 for Italy, €600 for Spain
          — and only convert to your home currency for the total. This keeps
          numbers realistic because prices are set locally. (2) Track
          everything in USD (or your home currency) and accept a 3–5% FX
          conversion cost on every card transaction. Trip Planify handles
          this by giving you a per-country breakdown in the local currency
          and a combined total in your chosen reporting currency. The
          per-country view is the one to actually use on the ground — the
          combined total is just for your own budget sanity. Carry a Wise or
          Revolut card to avoid the 3% bank FX fee; it pays for itself after
          2–3 transactions.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          5. Visa considerations for multi-country travel
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          This is where most multi-country trips die on the planning table.
          Three rules: (a) <strong>One visa per country</strong>, unless a
          regional scheme applies — Schengen covers 27 European countries
          with one visa, the GCC is moving toward a unified visa but
          isn&apos;t there yet, East Africa has an EAC tourist visa covering
          Kenya, Uganda, and Rwanda. (b) <strong>Apply in order of
          entry</strong> — most embassies want to see the first-country
          visa before issuing the next. (c) <strong>Check validity
          windows</strong> — a Schengen visa is valid 90 days in any 180;
          an Indian e-visa is single or double entry; Vietnam&apos;s
          e-visa is single entry and you&apos;ll need a fresh one if you
          exit and re-enter. Build a small table: country, visa type, cost,
          processing time, entry count. If any row has &gt;2 weeks
          processing, start it 8 weeks before departure.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          6. How Trip Planify&apos;s multi-country mode works
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          On the home screen, choose &quot;Multi-country trip&quot; instead
          of National or International. You add legs — one leg per country —
          and for each leg you specify the country, the cities you want to
          visit, number of days, and an inter-country transport hint
          (flight / train / bus / ferry) describing how you arrive from the
          previous leg. The AI then generates:
        </p>
        <ul className="text-foreground/80 leading-relaxed mb-6 space-y-2 list-disc pl-6">
          <li>
            A <strong>per-leg day-by-day itinerary</strong> with stays,
            attractions, departure times, and meal stops in each
            country&apos;s context.
          </li>
          <li>
            An <strong>inter-country transport suggestion</strong> for each
            border crossing — recommended route, rough travel time, and
            indicative cost in the relevant currency.
          </li>
          <li>
            A <strong>per-country expense breakdown</strong> (food,
            accommodation, transport, activities, misc) so you can see
            which leg is the most expensive and adjust days accordingly.
          </li>
          <li>
            A <strong>combined trip total</strong> in your chosen reporting
            currency, with each country&apos;s contribution shown as a
            percentage.
          </li>
        </ul>
        <p className="text-foreground/80 leading-relaxed mb-6">
          You can regenerate any single day or any single leg without
          touching the rest — useful when the AI suggests a museum
          that&apos;s closed on your chosen day, or when you want to swap a
          beach day for a city walk.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          Ready to plan a multi-country trip?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Open the planner, pick Multi-country, add 2–5 legs, and
          you&apos;ll have a combined itinerary with inter-country
          transport, per-country budgets, and a single total in under a
          minute.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Related guides
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <Link href="/pakistan-trip-planner" className="text-primary hover:underline">
              Trip Planner in Pakistan — Free AI Itinerary Generator
            </Link>
          </li>
          <li>
            <Link href="/guides/best-5-day-trip-ideas-within-pakistan" className="text-primary hover:underline">
              Best 5-Day Trip Ideas Within Pakistan
            </Link>
          </li>
          <li>
            <Link href="/guides/how-to-plan-international-trip-with-ai" className="text-primary hover:underline">
              How to Plan an International Trip Using AI
            </Link>
          </li>
          <li>
            <Link href="/guides/pakistan-to-dubai-trip-guide" className="text-primary hover:underline">
              Pakistan to Dubai: Complete Trip Planning Guide
            </Link>
          </li>
        </ul>

        <Link
          href="/"
          className="inline-flex items-center font-display text-lg font-semibold text-primary hover:underline"
        >
          Plan your multi-country trip with AI →
        </Link>
      </article>
    </main>
  );
}
