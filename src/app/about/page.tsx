import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const PAGE_URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: "About Trip Planify — Free AI Travel Planner",
  description:
    "Trip Planify is a free AI-powered travel planner that creates complete trip itineraries in seconds — no login, no fees, no stored data.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "about Trip Planify",
    "AI travel planner",
    "free trip planner",
    "itinerary generator",
    "AI trip planner",
    "travel planning tool",
    "no login trip planner",
  ],
  openGraph: {
    title: "About Trip Planify — Free AI Travel Planner | Trip Planify",
    description:
      "Trip Planify is a free AI-powered travel planner that creates complete trip itineraries in seconds — no login, no fees, no stored data.",
    url: PAGE_URL,
    type: "website",
    siteName: "Trip Planify",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About Trip Planify — Free AI Travel Planner",
    description:
      "Trip Planify is a free AI-powered travel planner that creates complete trip itineraries in seconds — no login, no fees, no stored data.",
  },
};

export default function AboutPage() {
  return (
    <main className="travel-bg min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-foreground">
          About Trip Planify — Free AI Travel Planner
        </h1>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              What is Trip Planify
            </h2>
            <p>
              Trip Planify is a free AI-powered travel planner that generates
              complete trip plans in seconds. Pick a destination, fill in a
              short form, and you&rsquo;ll get a full itinerary — where to
              stay, where to visit, a day-by-day schedule with departure times
              and meal stops, and an expense breakdown in your local currency.
              It works for national, international, and multi-country trips, and
              every plan is illustrated with real place images sourced from
              Wikipedia and Wikimedia Commons.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              The problem it solves
            </h2>
            <p>
              Planning a trip the traditional way takes hours. You open dozens
              of tabs — one for hotels, one for attractions, another for
              restaurants, yet another to figure out travel times between
              cities. By the time you piece it all together, the excitement of
              the trip is already drained by the logistics. Trip Planify
              condenses all of that research into a single AI-powered step,
              handing you a structured, ready-to-use plan in seconds.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              How it works
            </h2>
            <p>
              Start by choosing a trip type — national, international, or
              multi-country. Fill out a short form with your origin, destination,
              dates, budget, vehicle, and interests. Trip Planify sends your
              request to an AI model that returns a complete plan: recommended
              accommodations, top places to visit with photos, a day-by-day
              itinerary with realistic departure times and meal stops, and a
              detailed expense breakdown in your local currency. You can export
              the plan as a PDF, share it with friends, or save it to your
              browser for later.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Why it&rsquo;s trustworthy
            </h2>
            <p>
              Trip Planify is 100% free with no paywalls and no login required.
              We don&rsquo;t store your trip inputs on our servers — they exist
              only in your browser session and are sent to the AI provider
              solely to generate your plan. Saved trips live in your
              browser&rsquo;s local storage, not in a database we control. What
              you enter stays yours.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              A note from the founder
            </h2>
            <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/90">
              &ldquo;I built Trip Planify because I was tired of spending hours
              planning trips across dozens of tabs. I wanted something that
              just gives you a complete plan — stays, sights, schedule, costs —
              in seconds. No signups, no paywalls, just a useful tool. I hope
              it saves you as much time as it has saved me.&rdquo;
            </blockquote>
          </section>

          <p>
            Ready to try it?{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
              Plan your first trip →
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
