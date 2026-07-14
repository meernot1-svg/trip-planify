import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/free-ai-trip-planner";

export function generateMetadata(): Metadata {
  return {
    title: "Free AI Trip Planner — No Login, No Fees | Trip Planify",
    description:
      "100% free AI trip planner. Generate complete travel itineraries with stays, attractions, day-by-day schedule, and expenses in your currency. No login, no signup, no hidden fees.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "free AI trip planner",
      "free trip planner",
      "AI trip planner free",
      "best free trip planner",
      "free itinerary generator",
      "free travel planner",
      "free AI itinerary",
      "trip planner no login",
      "free trip planning tool",
      "AI travel planner free",
    ],
    openGraph: {
      title: "Free AI Trip Planner — No Login, No Fees | Trip Planify",
      description:
        "100% free AI trip planner. Generate complete travel itineraries with stays, attractions, day-by-day schedule, and expenses in your currency. No login, no signup, no hidden fees.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Free AI Trip Planner — No Login, No Fees | Trip Planify",
      description:
        "100% free AI trip planner. No login, no fees, no account. Generate full itineraries with stays, attractions, day-by-day plan & expenses in seconds.",
    },
  };
}

export default function FreeAiTripPlannerPage() {
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
          Free AI Trip Planner — No Login, No Fees
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Trip Planify is a 100% free AI trip planner. There are no subscriptions, no paywalls, no
          trial limits, and no login required. You can generate as many complete travel
          itineraries as you want — with stays, attractions, day-by-day schedules, transport, and
          expenses in your currency — without creating an account, entering an email, or pulling
          out a credit card. This page explains exactly what &ldquo;free&rdquo; means here, what
          you get, what you don&apos;t need, and how it compares to paid trip planners.
        </p>

        {/* CTA */}
        <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="font-semibold text-foreground">Ready to plan your trip?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Generate a complete AI itinerary in seconds — free, no login, no account.
          </p>
          <Link
            href="/"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Start planning free →
          </Link>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Why is Trip Planify free?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Trip Planify is free because it&apos;s ad-supported, not user-supported. The small,
          non-intrusive ads you see on the site cover the cost of running the AI model, hosting,
          and the place-image API. That&apos;s the entire business model. There are no premium
          tiers, no &ldquo;pro&rdquo; upsells, no locked features behind a paywall, and no
          artificial limits on how many plans you can generate. Every feature is available to
          every visitor, free, forever.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          This is intentional. Trip planning is something most people only do a few times a year,
          and asking them to commit to a $10–50/month subscription for a tool they&apos;ll use
          occasionally never felt right. Ads make the tool accessible to everyone — including
          students, backpackers, and travelers in countries where subscription pricing in USD is a
          real barrier.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          What you get for free
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Everything. There are no gated features on Trip Planify. Specifically, you get:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>Unlimited trip plans.</strong> Generate as many itineraries as you want, as
            often as you want. No daily cap, no monthly cap.
          </li>
          <li>
            <strong>All three trip types.</strong> National trips (within one country),
            international trips (origin country → destination country), and multi-country tours
            (multiple countries in one itinerary).
          </li>
          <li>
            <strong>Full itineraries.</strong> Day-by-day schedule with morning, afternoon, and
            evening activities, recommended stays, attractions with real photos, transport
            options, and meal stops.
          </li>
          <li>
            <strong>Expense breakdowns in your currency.</strong> PKR for Pakistan, USD with
            local-currency conversion for international tours, and local currency for national
            trips in other countries.
          </li>
          <li>
            <strong>PDF export.</strong> Download any plan as a PDF for offline use, printing, or
            sharing with travel companions.
          </li>
          <li>
            <strong>Sharing.</strong> Send a plan link to friends and family so they can view it
            without an account.
          </li>
          <li>
            <strong>Saving.</strong> Your trips are saved in your browser, so you can revisit and
            regenerate them later. No login required.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          What you don&apos;t need
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>No login.</strong> There is no sign-in flow on Trip Planify. You land on the
            homepage, enter your trip details, and get a plan.
          </li>
          <li>
            <strong>No account.</strong> No username, no password, no profile. Your trips are
            stored locally in your browser, not in a user account on a server.
          </li>
          <li>
            <strong>No credit card.</strong> Nothing on the site ever asks for payment
            information, because nothing is ever charged.
          </li>
          <li>
            <strong>No email.</strong> We don&apos;t ask for your email to &ldquo;send you the
            plan&rdquo; or put you on a mailing list. The plan is generated and shown to you
            immediately on the page.
          </li>
          <li>
            <strong>No app install.</strong> Trip Planify runs in any modern browser on desktop
            and mobile. There&apos;s nothing to download.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          How free AI trip planning works
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          The flow is deliberately short. You open the homepage, choose a trip type (national,
          international, or multi-country), enter your origin and destination, set your dates and
          budget style, and click generate. The AI reads your inputs, builds a realistic
          day-by-day itinerary that accounts for actual travel times between cities, and returns
          it in about 15 seconds. You can then regenerate any day, swap suggested stays, adjust
          the budget, export to PDF, or share the link. None of these steps require an account.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          For deeper walkthroughs, see our{" "}
          <Link href="/guides/how-to-plan-international-trip-with-ai" className="text-primary hover:underline">
            How to Plan an International Trip Using AI
          </Link>{" "}
          and{" "}
          <Link href="/guides/multi-country-trip-planning-guide" className="text-primary hover:underline">
            Multi-Country Trip Planning Guide
          </Link>.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Free vs paid trip planners
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Many AI trip planners charge $10–50 per month — sometimes more for &ldquo;pro&rdquo;
          features like PDF export, multi-country tours, or unlimited generations. Trip Planify
          includes all of those for $0. Here&apos;s the honest comparison:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed mb-4">
          <li>
            <strong>Paid planners:</strong> $10–50/month subscription, login required, often a
            credit card needed for the free trial, exported PDFs watermarked unless you upgrade,
            multi-stop tours sometimes a premium feature.
          </li>
          <li>
            <strong>Trip Planify:</strong> $0 forever, no login, no trial, no credit card,
            unlimited plans, all trip types including multi-country tours, clean PDF export,
            sharing and saving included.
          </li>
        </ul>
        <p className="text-foreground/80 leading-relaxed mb-4">
          If you only travel a few times a year, a recurring subscription rarely pays for itself.
          A free AI trip planner that gives you the same output — without the recurring charge —
          is the better deal for the vast majority of travelers.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Privacy: your data isn&apos;t stored or sold
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          &ldquo;If it&apos;s free, you&apos;re the product&rdquo; is a fair concern with most
          free apps. Trip Planify is different. Your trip inputs (cities, dates, budget) are sent
          to the AI only to generate your itinerary and are not stored on our servers, sold to
          third parties, or used to build an advertising profile. Your saved trips live in your
          browser&apos;s local storage, under your control — clear them anytime. The ads on the
          site are generic and not personalized based on your trip data. If you want the full
          details, read our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            privacy policy
          </Link>.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-3">
          Start planning — free, right now
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          You don&apos;t need to read another page to get started. Open the planner, enter where
          you&apos;re going, and have a full itinerary in under a minute. If you&apos;re planning
          a tour from Pakistan specifically, our{" "}
          <Link href="/pakistan-trip-planner" className="text-primary hover:underline">
            Pakistan trip planner
          </Link>{" "}
          and{" "}
          <Link href="/tour-planner" className="text-primary hover:underline">
            AI tour planner
          </Link>{" "}
          pages have more targeted guidance.
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
            Start planning free →
          </Link>
        </div>
      </article>
    </main>
  );
}
