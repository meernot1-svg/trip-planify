import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/guides";

export function generateMetadata(): Metadata {
  return {
    title: "Travel Planning Guides & Tips",
    description:
      "Browse Trip Planify's travel planning guides — Pakistan trip ideas, international trip planning, Pakistan to Dubai guide, multi-country tours, and more. Free AI-generated itineraries.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "travel guides",
      "trip planning guides",
      "Pakistan travel guide",
      "international trip guide",
      "multi-country tour guide",
      "AI travel planning tips",
    ],
    openGraph: {
      title: "Travel Planning Guides & Tips | Trip Planify",
      description:
        "Browse all Trip Planify travel guides — Pakistan trips, international planning, Dubai guide, multi-country tours.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "website",
      locale: "en_US",
    },
  };
}

const GUIDES = [
  {
    href: "/guides/best-5-day-trip-ideas-within-pakistan",
    title: "Best 5-Day Trip Ideas Within Pakistan",
    desc: "Four proven 5-day routes — Hunza Valley, Swat & Kalam, Lahore & Northern Punjab, Islamabad-Murree-Nathiagali. With PKR budgets, attractions, and seasonal tips.",
    keywords: "Hunza, Swat, Lahore, Murree, 5-day Pakistan trip",
  },
  {
    href: "/guides/how-to-plan-international-trip-with-ai",
    title: "How to Plan an International Trip Using AI",
    desc: "Step-by-step guide to AI trip planning — choosing destinations, budget styles, reading itineraries, currency considerations, visa reminders, and booking tips.",
    keywords: "international trip planner, AI travel, visa, booking",
  },
  {
    href: "/guides/pakistan-to-dubai-trip-guide",
    title: "Pakistan to Dubai: Complete Trip Planning Guide",
    desc: "Everything Pakistanis need to plan a Dubai trip — visa process, flights from KHI/LHE/ISB, best areas to stay, top attractions, and a 5-day AED budget breakdown.",
    keywords: "Pakistan to Dubai, Dubai visa, flights, Burj Khalifa",
  },
  {
    href: "/guides/multi-country-trip-planning-guide",
    title: "Multi-Country Trip Planning Guide",
    desc: "How to plan a trip across multiple countries — popular routes (Europe, SE Asia, GCC), transport between countries, multi-currency budgeting, and visa considerations.",
    keywords: "multi-country trip, Europe tour, Southeast Asia, GCC tour",
  },
];

const LANDING_PAGES = [
  {
    href: "/pakistan-trip-planner",
    title: "Trip Planner in Pakistan",
    desc: "Plan any trip within Pakistan with AI — Karachi to Islamabad, Hunza, Swat & more. Get PKR expenses and realistic drive times.",
  },
  {
    href: "/tour-planner",
    title: "AI Tour Planner",
    desc: "Plan multi-city and multi-country tours with AI. Get inter-city transport, per-stop expenses, and a combined day-by-day itinerary.",
  },
  {
    href: "/free-ai-trip-planner",
    title: "Free AI Trip Planner",
    desc: "100% free AI trip planner — no login, no fees, no hidden charges. Generate unlimited travel plans with stays, sights, itinerary & expenses.",
  },
];

export default function GuidesIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          ← Back to Trip Planify home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Travel Planning Guides &amp; Tips
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Browse our collection of travel planning guides. Whether you&apos;re planning a trip
          within Pakistan, an international tour, or a multi-country journey, these guides offer
          specific routes, budgets, and tips — then use our free AI planner to generate a complete
          itinerary in seconds.
        </p>

        {/* Landing pages */}
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-4">
          Plan your trip
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {LANDING_PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="font-display font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </Link>
          ))}
        </div>

        {/* Guide articles */}
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-4">
          In-depth guides
        </h2>
        <div className="space-y-4">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold text-foreground">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              <p className="mt-2 text-xs text-primary">{g.keywords}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="font-semibold text-foreground">Ready to plan your trip?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Generate a complete AI itinerary in seconds — free, no login.
          </p>
          <Link
            href="/"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Start planning →
          </Link>
        </div>
      </article>
    </main>
  );
}
