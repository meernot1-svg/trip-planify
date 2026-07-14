import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/pakistan-trip-planner";

export function generateMetadata(): Metadata {
  return {
    title: "Trip Planner in Pakistan — Free AI Itinerary Generator",
    description:
      "Free AI trip planner for Pakistan. Plan trips within Pakistan or tours from Pakistan to any country — get stays, attractions, day-by-day itinerary, and expenses in PKR. No login required.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "trip planner in Pakistan",
      "tour planner Pakistan",
      "trip in Pakistan",
      "Pakistan trip planner",
      "AI trip planner Pakistan",
      "best trip planner",
      "Pakistan tour planner",
      "trip planner Pakistan free",
      "Pakistan itinerary generator",
      "plan trip Pakistan",
    ],
    openGraph: {
      title: "Trip Planner in Pakistan — Free AI Itinerary Generator | Trip Planify",
      description:
        "Plan any trip in Pakistan with AI — from Karachi to Islamabad, Hunza to Swat. Get complete itineraries with PKR expenses in seconds. Free, no login.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Trip Planner in Pakistan — Free AI Itinerary Generator",
      description:
        "Plan trips within Pakistan or tours abroad with AI. Get stays, sights, day-by-day itinerary & PKR expenses in seconds.",
    },
  };
}

export default function PakistanTripPlannerPage() {
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
          Trip Planner in Pakistan — Free AI Itinerary Generator
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Looking for a trip planner in Pakistan that actually understands local routes, real
          travel times, and prices in rupees? Trip Planify is a free AI-powered trip planner and
          tour planner built for Pakistani travelers. Whether you&apos;re planning a trip within
          Pakistan — from Karachi to Islamabad, Lahore to Murree, or a northern areas tour to
          Hunza and Swat — or a tour from Pakistan to Dubai, Malaysia, or anywhere else in the
          world, this tool generates a complete itinerary in seconds. No login, no fees, no data
          stored. Just enter your cities, dates, and budget, and get a day-by-day plan with where
          to stay, where to visit, departure times, meal stops, and a full expense breakdown in
          PKR or your destination&apos;s local currency.
        </p>

        {/* CTA */}
        <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="font-semibold text-foreground">Ready to plan your trip?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Generate a complete AI itinerary in seconds — free, no login.
          </p>
          <Link
            href="/"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Plan your trip now →
          </Link>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Why use an AI trip planner for Pakistan?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Planning a trip in Pakistan traditionally means juggling a dozen browser tabs —
          Google Maps for distances, hotel booking sites for stays, blogs for attraction
          recommendations, and a spreadsheet for budgeting. A Pakistan trip planner powered by
          AI condenses all of that into one step. You tell it where you&apos;re starting from,
          where you want to go, how many days you have, and your budget style — and it builds
          a realistic, day-by-day plan that accounts for actual road travel times (not just
          straight-line distances), local transport options, and prices in Pakistani Rupee.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          For example, if you&apos;re driving from Jacobabad to Islamabad, the AI knows
          that&apos;s roughly a 12-hour, 1,000 km journey — not a one-hour hop. It&apos;ll set
          your departure time at 6 AM and plan arrival activities for the evening, not the
          morning. That level of realism is what makes a dedicated tour planner valuable
          compared to generic travel templates.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          What can this trip planner do?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Trip Planify works as both a trip planner and a tour planner — supporting three types
          of journeys:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>National trips within Pakistan:</strong> Enter your origin city and
            destination city (e.g. Karachi to Lahore, Islamabad to Hunza), pick your vehicle
            (car, bus, train, flight), and get a plan with realistic drive times, PKR expenses,
            and local meal recommendations.
          </li>
          <li>
            <strong>International tours from Pakistan:</strong> Planning a trip from Pakistan to
            Dubai, Turkey, Malaysia, or any other country? The tour planner generates visa
            reminders, flight suggestions, and costs in USD with a conversion to the local
            currency.
          </li>
          <li>
            <strong>Multi-country tours:</strong> Visiting several countries in one trip? Add
            multiple legs (e.g. Pakistan → UAE → Oman → Qatar) and get a combined itinerary with
            inter-country transport suggestions and a per-country expense breakdown.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Popular trips to plan in Pakistan
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Here are some of the most popular routes Pakistani travelers plan with Trip Planify:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>Karachi to Islamabad</strong> — ~1,400 km, 2-day drive or 2-hour flight.
            Plan a stopover in Multan or Lahore.
          </li>
          <li>
            <strong>Islamabad to Hunza Valley</strong> — ~600 km on the Karakoram Highway,
            2-day drive with stops in Naran and Gilgit. Best May–October.
          </li>
          <li>
            <strong>Lahore to Swat &amp; Kalam</strong> — ~600 km, 10-hour drive. Alpine
            meadows, waterfalls, and budget-friendly stays.
          </li>
          <li>
            <strong>Karachi to Gwadar</strong> — ~650 km on the Makran Coastal Highway,
            8-hour drive. Emerging beach destination.
          </li>
          <li>
            <strong>Pakistan to Dubai</strong> — 2–3 hour flight from Karachi/Lahore/Islamabad.
            Visa-on-arrival for Pakistanis with a valid US visa/residency, or e-visa.
          </li>
        </ul>
        <p className="text-foreground/80 leading-relaxed mb-4">
          For detailed route guides with day-by-day breakdowns, see our{" "}
          <Link href="/guides/best-5-day-trip-ideas-within-pakistan" className="text-primary hover:underline">
            Best 5-Day Trip Ideas Within Pakistan
          </Link>{" "}
          and{" "}
          <Link href="/guides/pakistan-to-dubai-trip-guide" className="text-primary hover:underline">
            Pakistan to Dubai Trip Guide
          </Link>.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          How to use this Pakistan trip planner
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>Choose &ldquo;National Trip&rdquo;</strong> on the homepage — this is for
            trips within Pakistan (or any single country).
          </li>
          <li>
            <strong>Select Pakistan</strong> as the country, then enter your from-city and
            to-city. The currency automatically switches to Pakistani Rupee (₨).
          </li>
          <li>
            <strong>Set your duration</strong> (1–30 days), vehicle (car, bus, train, flight,
            bike, or own vehicle), and budget style (Budget, Mid-range, or Luxury).
          </li>
          <li>
            <strong>Click &ldquo;Generate my plan.&rdquo;</strong> In about 15 seconds,
            you&apos;ll get hotel suggestions, places to visit with real photos, a day-by-day
            itinerary with departure times and meal stops, and a full expense breakdown in PKR.
          </li>
          <li>
            <strong>Download, share, or save</strong> your plan. Your trips are stored in your
            browser — no account needed.
          </li>
        </ol>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Is Trip Planify free to use?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Yes — Trip Planify is 100% free. There are no subscriptions, no hidden fees, and no
          login required. You can generate unlimited trip plans within Pakistan and
          internationally. The tool is supported by ads, which is why it stays free for
          everyone. Your trip inputs are not stored on any server — they exist only in your
          browser session and are used solely to generate your itinerary.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Related guides
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
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
          <li>
            <Link href="/guides/multi-country-trip-planning-guide" className="text-primary hover:underline">
              Multi-Country Trip Planning Guide
            </Link>
          </li>
        </ul>

        {/* Bottom CTA */}
        <div className="not-prose mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Start planning your Pakistan trip →
          </Link>
        </div>
      </article>
    </main>
  );
}
