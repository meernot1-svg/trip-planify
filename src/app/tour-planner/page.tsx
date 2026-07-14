import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/tour-planner";

export function generateMetadata(): Metadata {
  return {
    title: "AI Tour Planner — Plan Multi-City Tours Free | Trip Planify",
    description:
      "Free AI tour planner for multi-city and multi-country tours. Plan stops, transport, stays, and expenses for any tour — from Pakistan to Europe to Southeast Asia. No login.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "tour planner",
      "AI tour planner",
      "free tour planner",
      "multi-city tour planner",
      "tour planner Pakistan",
      "tour itinerary generator",
      "multi-country tour planner",
      "tour planning tool",
      "AI tour itinerary",
      "plan a tour with AI",
    ],
    openGraph: {
      title: "AI Tour Planner — Plan Multi-City Tours Free | Trip Planify",
      description:
        "Free AI tour planner for multi-city and multi-country tours. Plan stops, transport, stays, and expenses for any tour — from Pakistan to Europe to Southeast Asia. No login.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Tour Planner — Plan Multi-City Tours Free | Trip Planify",
      description:
        "Plan multi-city and multi-country tours with AI. Get day-by-day stops, transport, stays & expenses in seconds. Free, no login.",
    },
  };
}

export default function TourPlannerPage() {
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
          AI Tour Planner — Plan Multi-City Tours Free
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-8">
          A tour is more than a trip — it&apos;s a journey with multiple stops, cities, and
          sometimes multiple countries strung together into one itinerary. Trip Planify is a free
          AI tour planner that handles the logistics of multi-stop tours for you. Tell it where
          you&apos;re starting, which cities or countries you want to visit, how many days you
          have, and your budget — and it builds a realistic, day-by-day tour plan with inter-city
          and inter-country transport, recommended stays, must-see attractions with real photos,
          and a full expense breakdown in your currency. No login, no fees, no data stored. From
          a Pakistan northern areas tour to a Europe grand tour to a Southeast Asia loop, this AI
          tour itinerary generator gets you from idea to itinerary in seconds.
        </p>

        {/* CTA */}
        <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="font-semibold text-foreground">Ready to plan your tour?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Generate a complete multi-city AI tour itinerary in seconds — free, no login.
          </p>
          <Link
            href="/"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Plan your tour with AI →
          </Link>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          What is an AI tour planner?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          A <strong>tour planner</strong> differs from a simple trip planner in one key way: tours
          involve multiple stops. A trip is usually origin → destination. A tour is origin → stop
          1 → stop 2 → stop 3 → … → home, often across multiple cities and sometimes multiple
          countries. That makes planning a tour much harder — you have to juggle inter-city
          transport (flights, trains, buses, ferries), realistic travel times between each stop,
          where to sleep each night, and how much each leg costs.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          An <strong>AI tour planner</strong> automates all of that. Instead of stitching
          together information from a dozen tabs — Google Maps for distances, Skyscanner for
          flights, Booking.com for hotels, blogs for attractions, a spreadsheet for budget — you
          describe your tour in plain language and the AI returns a single, cohesive itinerary.
          Trip Planify&apos;s tour planner is built specifically for this: it understands that a
          Europe tour means Paris → Lyon → Geneva → Milan → Rome, not just &ldquo;Europe,&rdquo;
          and it plans each leg with realistic timing.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Why use AI for tour planning?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>It saves hours of work.</strong> Planning a 10-city tour manually can take
            days. An AI tour planner compresses that into 15–30 seconds.
          </li>
          <li>
            <strong>It handles logistics automatically.</strong> Inter-city transport, travel
            times, transfer days, and overnight stops are all slotted in without you having to
            calculate each one.
          </li>
          <li>
            <strong>It gives realistic travel times.</strong> The AI knows that the drive from
            Islamabad to Hunza is two long days on the Karakoram Highway, not a one-hour hop —
            and plans accordingly.
          </li>
          <li>
            <strong>It balances your budget across stops.</strong> Instead of overspending in one
            city and running out in the next, the planner allocates per-day and per-stop budgets
            sensibly.
          </li>
          <li>
            <strong>It surfaces places you&apos;d miss.</strong> A good AI tour planner suggests
            attractions, meal stops, and overnight towns based on the route, not just the
            headline destinations.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          How Trip Planify works as a tour planner
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Trip Planify supports two planning modes that cover every kind of tour:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>Multi-country mode (for multi-stop tours):</strong> Add as many legs as you
            want — e.g. Pakistan → UAE → Oman → Qatar, or France → Italy → Spain → Portugal. The
            tour planner generates a combined itinerary with inter-country flights, ferry, or land
            crossings, visa reminders, and a per-country expense breakdown in USD with conversion
            to local currency.
          </li>
          <li>
            <strong>National mode (for single-country tours):</strong> For tours within one
            country — like a Pakistan northern areas tour (Islamabad → Naran → Hunza → Skardu), a
            Vietnam tour (Hanoi → Da Nang → Ho Chi Minh City), or a Japan tour (Tokyo → Kyoto →
            Osaka) — pick your country, enter your stops, and get realistic road/rail travel
            times, transport options, and expenses in the local currency.
          </li>
        </ul>
        <p className="text-foreground/80 leading-relaxed mb-4">
          For step-by-step instructions, see our{" "}
          <Link href="/guides/multi-country-trip-planning-guide" className="text-primary hover:underline">
            Multi-Country Trip Planning Guide
          </Link>{" "}
          and{" "}
          <Link href="/guides/how-to-plan-international-trip-with-ai" className="text-primary hover:underline">
            How to Plan an International Trip Using AI
          </Link>.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Popular tour types to plan with AI
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Here are some of the most popular multi-stop tours travelers plan with Trip Planify:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>Europe tours</strong> — France → Italy → Spain (or add Portugal, Switzerland,
            Greece). 2–4 weeks, mostly by train or budget flights. The planner suggests rail
            passes, EuroCity trains, and budget airlines like Ryanair and EasyJet.
          </li>
          <li>
            <strong>Southeast Asia tours</strong> — Thailand → Vietnam → Cambodia (or add Laos,
            Malaysia, Indonesia). 3–4 weeks, mostly by budget flights and overnight buses. Visa
            rules and border crossings are flagged automatically.
          </li>
          <li>
            <strong>Pakistan northern areas tours</strong> — Islamabad → Naran → Babusar → Hunza
            → Passu → Skardu. 10–14 days by car on the Karakoram Highway, best May–October.
            Includes realistic drive times, fuel costs in PKR, and guesthouse suggestions.
          </li>
          <li>
            <strong>GCC tours</strong> — UAE → Oman → Qatar (or add Saudi Arabia, Bahrain). 1–2
            weeks, mostly by short flights or land crossings. Costs in USD with AED/OMR/QAR
            conversion, visa-on-arrival notes per nationality.
          </li>
          <li>
            <strong>Pakistan to Dubai tours</strong> — Combine a domestic Pakistan leg with a UAE
            stopover. See our{" "}
            <Link href="/guides/pakistan-to-dubai-trip-guide" className="text-primary hover:underline">
              Pakistan to Dubai Trip Guide
            </Link>{" "}
            for the full route.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          What you get from the tour planner
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Every tour itinerary generated by Trip Planify includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            A <strong>day-by-day itinerary</strong> covering every stop on your tour, with
            morning, afternoon, and evening activities.
          </li>
          <li>
            <strong>Inter-city and inter-country transport</strong> — recommended flights,
            trains, buses, ferries, or driving legs between each stop, with realistic travel
            times and departure suggestions.
          </li>
          <li>
            <strong>Per-stop expenses</strong> — accommodation, transport, food, and activities
            broken out for each city or country, plus a tour total in your currency.
          </li>
          <li>
            <strong>Real place images</strong> — every suggested attraction and stay comes with
            an actual photo, so you can see where you&apos;re going before you book.
          </li>
          <li>
            <strong>Download, share, and save</strong> — export your tour as a PDF, share a link
            with travel companions, or save it in your browser for later. No account required.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Plan a tour from Pakistan or anywhere
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          If you&apos;re starting your tour from Pakistan, the planner handles visa rules, flight
          routes from Karachi/Lahore/Islamabad, and PKR-based budgeting automatically. Pair this
          page with our{" "}
          <Link href="/pakistan-trip-planner" className="text-primary hover:underline">
            Pakistan trip planner
          </Link>{" "}
          for trips that begin or end domestically, and use this tour planner for the
          multi-country legs in between.
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
            <Link href="/guides/multi-country-trip-planning-guide" className="text-primary hover:underline">
              Multi-Country Trip Planning Guide
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

        {/* Bottom CTA */}
        <div className="not-prose mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Plan your tour with AI →
          </Link>
        </div>
      </article>
    </main>
  );
}
