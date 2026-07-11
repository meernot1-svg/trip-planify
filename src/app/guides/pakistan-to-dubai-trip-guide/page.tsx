import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/guides/pakistan-to-dubai-trip-guide";

export function generateMetadata(): Metadata {
  return {
    title: "Pakistan to Dubai: Complete Trip Planning Guide | Trip Planify",
    description:
      "Complete guide for planning a Pakistan to Dubai trip — visa requirements, flights, best areas to stay, top attractions, and estimated costs in AED and PKR.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "Pakistan to Dubai trip",
      "Dubai visa for Pakistanis",
      "Dubai travel guide",
      "Karachi to Dubai flights",
      "Lahore to Dubai flights",
      "Islamabad to Dubai",
      "Dubai itinerary 5 days",
      "Dubai budget AED PKR",
      "Burj Khalifa tickets",
      "Dubai desert safari",
    ],
    openGraph: {
      title: "Pakistan to Dubai: Complete Trip Planning Guide | Trip Planify",
      description:
        "Complete guide for planning a Pakistan to Dubai trip — visa requirements, flights, best areas to stay, top attractions, and estimated costs in AED and PKR.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Pakistan to Dubai: Complete Trip Planning Guide",
      description:
        "Visa, flights, stays, attractions, food, transport, and a 5-day budget breakdown for Pakistanis visiting Dubai.",
    },
  };
}

export default function PakistanToDubaiGuidePage() {
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
          Pakistan to Dubai: Complete Trip Planning Guide
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Dubai is the most popular international destination for Pakistani
          travelers — and for good reason. It&apos;s a 2–3 hour flight from
          Karachi, Lahore, and Islamabad; the e-visa process takes 24–72
          hours; English is universally spoken; and the city is built for
          short, high-impact visits. Whether you&apos;re going for 4 days of
          shopping or a 7-day family holiday, this guide covers the visa
          process, flight options, where to stay, what to actually do, how to
          get around, and what it costs — in both AED and PKR, since
          you&apos;ll think in PKR but pay in AED.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          1. Visa requirements for Pakistani passport holders
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Pakistanis need a visa to enter the UAE, but the process is now
          largely digital. The most common route is a{" "}
          <strong>30-day single-entry tourist visa</strong>, arranged through
          a UAE-based sponsor — usually the hotel you book, an airline
          (Emirates, flydubai, Air Arabia all offer visa-on-booking), or a
          travel agency. Required documents: passport scan with 6+ months
          validity, passport-size photo on white background, confirmed
          return ticket, and hotel booking. Cost is roughly AED 650–900 (PKR
          49,000–68,000) for a 30-day single entry. A 60-day visa costs
          about AED 1,400. Apply 7–10 days before travel; the &quot;express
          24-hour&quot; service costs AED 100 extra. Do not book non-refundable
          flights until the visa is approved.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          2. Flight options and rough costs
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Three Pakistani cities fly direct to Dubai (DXB) or Sharjah (SHJ):
          <strong> Karachi</strong> (~2 hours), <strong>Lahore</strong> (~3
          hours), and <strong>Islamabad</strong> (~3 hours 15 min). Airlines
          and typical round-trip economy fares in season: flydubai and Air
          Arabia (Sharjah) PKR 85,000–120,000; Emirates PKR 180,000–260,000
          (premium product); PIA PKR 110,000–160,000; SereneAir and Airblue
          PKR 100,000–140,000. Cheapest if you fly mid-week (Tue–Thu) and
          avoid the Eid and December school-holiday peaks. Booking 6–8 weeks
          ahead usually beats last-minute prices by 20–30%.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          3. Best areas to stay (with AED price ranges)
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Dubai&apos;s neighborhoods are quite distinct — pick the wrong one
          and you&apos;ll spend an hour in taxis every day.
        </p>
        <ul className="text-foreground/80 leading-relaxed mb-6 space-y-2 list-disc pl-6">
          <li>
            <strong>Downtown / Business Bay</strong> — Walking distance to
            Burj Khalifa and Dubai Mall. AED 600–1,200/night mid-range; AED
            1,800–4,000 luxury. Best for first-timers with a 3–4 day
            itinerary.
          </li>
          <li>
            <strong>Dubai Marina &amp; JBR</strong> — Beach + Marina vibe,
            great restaurants, on the Metro Red Line. AED 500–900/night
            mid-range serviced apartments; AED 1,500–3,000 luxury. Best for
            families who want beach time.
          </li>
          <li>
            <strong>Deira &amp; Bur Dubai (Old Dubai)</strong> — Half the
            price of Downtown, walking distance to gold souk, abra rides, and
            the best Pakistani and Indian food. AED 250–500/night. Best for
            budget travelers who don&apos;t mind 30 minutes on the Metro to
            reach the modern sights.
          </li>
          <li>
            <strong>Palm Jumeirah</strong> — Resort territory; only worth it
            if you&apos;ll actually use the beach and pool. AED 1,500–5,000.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          4. Top attractions (with realistic timing &amp; costs)
        </h2>
        <ul className="text-foreground/80 leading-relaxed mb-6 space-y-2 list-disc pl-6">
          <li>
            <strong>Burj Khalifa At the Top</strong> — Book the sunset slot
            (around 4:30 PM in winter, 5:30 PM in summer) 5+ days ahead.
            AED 169–269 for standard, AED 459 for SKY lounge. Skip the
            frame; it&apos;s underwhelming.
          </li>
          <li>
            <strong>Dubai Mall &amp; Fountain Show</strong> — Free entry,
            fountain show runs every 30 min from 6 PM. Allow 3 hours minimum.
          </li>
          <li>
            <strong>Palm Jumeirah &amp; The View</strong> — Take the monorail
            from Gateway station (AED 10 one-way). The View at the Palm
            observation deck is AED 100–175.
          </li>
          <li>
            <strong>Desert Safari</strong> — Book a 4 PM–9 PM package with
            dune bashing, camel ride, BBQ dinner, and belly dance. AED
            150–250 budget; AED 350–550 for a small-group premium version.
            Do not skip this — it&apos;s the one thing you can&apos;t get
            inside the city.
          </li>
          <li>
            <strong>Old Dubai (Al Fahidi, Creek, Gold Souk)</strong> — Take
            an abra across the creek for AED 1. Free to wander; the coffee
            museum and Sheikh Mohammed Centre for Cultural Understanding
            (lunch tour AED 110) are highlights.
          </li>
          <li>
            <strong>Museum of the Future</strong> — AED 149; book online
            days ahead, it sells out.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          5. Food &amp; transport
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          <strong>Transport:</strong> The Dubai Metro (Red and Green lines)
          is the single best value in the city — buy a Nol card at any
          station (AED 25 for the card with AED 19 credit), each ride is AED
          3–7.5 depending on zones. Taxis start at AED 12 (day) and AED 12
          (night), roughly AED 1.97/km; a Marina-to-Downtown taxi is AED
          45–55. Careem and Uber operate; Careem is usually cheaper. Avoid
          driving — parking is expensive and traffic in Business Bay is
          brutal at rush hour.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          <strong>Food:</strong> Street and food-court meals AED 25–45
          (Ravi Restaurant in Satwa, Al Ustad Special Kabab in Bur Dubai);
          mid-range restaurants AED 80–150/person; fine dining in Downtown
          and Marina AED 350–800/person. Pakistani food in Dubai is excellent
          and cheap — try Ravi, Student Biryani, and Al Madina in Deira.
          Alcohol is only served in hotel bars and licensed restaurants;
          a pint is AED 45–65.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          6. Estimated 5-day budget (per person, mid-range, from Pakistan)
        </h2>
        <ul className="text-foreground/80 leading-relaxed mb-6 space-y-2 list-disc pl-6">
          <li>Visa (30-day single entry): AED 750 (≈ PKR 57,000)</li>
          <li>Round-trip flight (flydubai/Pk mid-week): AED 950 (≈ PKR 72,000)</li>
          <li>Hotel (5 nights, shared mid-range in Marina): AED 2,000 (≈ PKR 152,000)</li>
          <li>Food (5 days, mix of street and mid-range): AED 600 (≈ PKR 45,000)</li>
          <li>Metro + taxis + 1 Careem/day: AED 250 (≈ PKR 19,000)</li>
          <li>Attractions (Burj Khalifa, Palm View, Museum of Future): AED 450 (≈ PKR 34,000)</li>
          <li>Desert safari (premium small-group): AED 450 (≈ PKR 34,000)</li>
          <li>Miscellaneous (shopping, SIM, tips): AED 500 (≈ PKR 38,000)</li>
          <li>
            <strong>Total per person: ~AED 5,950 (≈ PKR 451,000)</strong> for
            a comfortable 5-day mid-range trip. Budget travelers can do it
            for AED 3,800 (PKR 288,000); luxury starts at AED 12,000+.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          Generate a custom Dubai itinerary
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Want this turned into a day-by-day plan with hotels, timed
          attractions, meal stops, and an expense breakdown in AED or PKR?
          Open Trip Planify, pick International, choose United Arab Emirates
          as the country, and you&apos;ll have a full itinerary in under a
          minute.
        </p>

        <Link
          href="/"
          className="inline-flex items-center font-display text-lg font-semibold text-primary hover:underline"
        >
          Plan your Pakistan to Dubai trip with AI →
        </Link>
      </article>
    </main>
  );
}
