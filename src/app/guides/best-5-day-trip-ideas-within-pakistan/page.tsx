import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const SLUG = "/guides/best-5-day-trip-ideas-within-pakistan";

export function generateMetadata(): Metadata {
  return {
    title: "Best 5-Day Trip Ideas Within Pakistan | Trip Planify",
    description:
      "Discover the best 5-day trip routes within Pakistan — from Hunza Valley to Swat to Lahore. Get AI-generated itineraries with stays, places, and expenses in PKR.",
    alternates: { canonical: `${SITE_URL}${SLUG}` },
    keywords: [
      "5 day trip Pakistan",
      "Pakistan trip ideas",
      "Hunza Valley itinerary",
      "Swat Kalam trip",
      "Lahore travel guide",
      "Murree Nathiagali trip",
      "Pakistan tourism",
      "Pakistan travel budget PKR",
      "northern Pakistan trip",
      "5 day Pakistan itinerary",
    ],
    openGraph: {
      title: "Best 5-Day Trip Ideas Within Pakistan | Trip Planify",
      description:
        "Discover the best 5-day trip routes within Pakistan — from Hunza Valley to Swat to Lahore. Get AI-generated itineraries with stays, places, and expenses in PKR.",
      url: `${SITE_URL}${SLUG}`,
      siteName: "Trip Planify",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best 5-Day Trip Ideas Within Pakistan",
      description:
        "Hunza, Swat, Lahore, Murree — 4 detailed 5-day Pakistan trip routes with PKR budgets, attractions, and travel tips.",
    },
  };
}

export default function Best5DayPakistanTripsPage() {
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
          Best 5-Day Trip Ideas Within Pakistan
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Pakistan packs an extraordinary range of landscapes into one country —
          the Karakoram giants of the north, the alpine meadows of Swat, the
          Mughal heritage of Lahore, and the pine-clad hills an hour out of
          Islamabad. Five days is enough to do any one of these regions
          justice if you plan the route well. Below are four proven 5-day
          itineraries, each with key attractions, the best season to go, a
          realistic budget in PKR for two travelers, and on-the-ground travel
          tips. Pick the one that matches your season and energy level, then
          generate a full AI itinerary with stays, day-by-day timings, and an
          expense breakdown.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          1. Hunza Valley (Depart from Gilgit or Islamabad)
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-3">
          The classic Karakoram loop. Fly Islamabad → Gilgit (90 min, weather
          permitting) and drive the Karakoram Highway to Karimabad, or drive
          the whole way from Islamabad via Babusar Top in summer. Must-see
          stops: <strong>Attabad Lake</strong> (turquoise glacial lake, jet
          boating available), <strong>Pasu Cones</strong> (the iconic cathedral
          peaks), <strong>Karakoram Highway viewpoint at Ganish</strong>,{" "}
          <strong>Altit and Baltit Forts</strong> (700-year-old Hunza
          heritage), and a side trip up the Hopar Glacier. Extend to{" "}
          <strong>Khunjerab Pass</strong> (Pakistan-China border, 4,693 m) if
          you have an extra day.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Best season:</strong> Mid-April to mid-October. April–May
          for blossom (cherry and apricot); September–October for golden
          autumn and clear skies. Avoid December–February — Babusar closes and
          flights cancel often.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Budget (5 days, 2 people, mid-range):</strong> PKR
          180,000–250,000. Breakdown: Gilgit flight PKR 28,000/round trip per
          person, private car with driver PKR 12,000/day, hotel PKR
          8,000–15,000/night, food PKR 3,000–5,000/day for two, fort and lake
          activities PKR 10,000 total.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          <strong>Travel tips:</strong> Acclimatize slowly — Karimabad sits at
          2,400 m. Carry original CNIC and a photocopy; checkpoints are
          frequent on the KKH. Hunza water is safe, but stick to bottled
          beyond Karimabad. Book Gilgit flights weeks ahead — they fill fast
          in season and cancel when clouds roll into the valley.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          2. Swat Valley &amp; Kalam
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-3">
          The closest Himalayan-type scenery to Islamabad — Swat is reachable
          in 4–5 hours from the capital via the Islamabad–Mardan motorway
          (M-1) and Swat Motorway (Swat Expressway). Start in Mingora, head up
          to <strong>Malam Jabba</strong> (Pakistan&apos;s only ski resort with
          a chairlift running year-round), then push north to Kalam. From
          Kalam, day-trip to <strong>Mahodand Lake</strong> (jeep + 1 hour
          trek), <strong>Ushu Forest</strong>, and{" "}
          <strong>Matiltan</strong> for views of Mount Falaksair. White-water
          rafting on the Swat River near Madyan is excellent in May–June.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Best season:</strong> May to September. Skiers come
          January–March. Avoid the monsoon tail in late July — landslides can
          close the Kalam road for a day.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Budget (5 days, 2 people, mid-range):</strong> PKR
          90,000–130,000. Self-drive round trip from Islamabad PKR 15,000 fuel,
          hotels in Madyan/Kalam PKR 5,000–9,000/night, food PKR
          2,500–4,000/day, Malam Jabba chairlift PKR 1,500/person, Mahodand
          jeep PKR 6,000–8,000 round trip.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          <strong>Travel tips:</strong> The road beyond Bahrain narrows and
          drivers from the plains often struggle — hire a local Kalam driver
          for the upper stretch. ATMs in Kalam run dry; carry PKR 30,000+ in
          cash. Network signal dies north of Madyan, so download offline maps.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          3. Lahore &amp; Northern Punjab Heritage Loop
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-3">
          The cultural heart of Pakistan — a 5-day loop covering Lahore, the
          Mughal-era <strong>Rohtas Fort</strong> near Dina, and the Sikh
          pilgrimage site of <strong>Nankana Sahib</strong>. In Lahore, spend
          Day 1 at the <strong>Badshahi Mosque</strong>,{" "}
          <strong>Lahore Fort</strong> (UNESCO), and{" "}
          <strong>Sheesh Mahal</strong>; Day 2 at the{" "}
          <strong>Wagah Border ceremony</strong> (4:30 PM in winter, 5:30 PM
          in summer) and <strong>Shalimar Gardens</strong>; Day 3 walking the
          16th-century <strong>Walled City</strong> and Delhi Gate food street
          (try nihari at waris and phajjay ke paye). Day 4: drive to Rohtas
          Fort (2 hours), then back via Khewra Salt Mine. Day 5: Lahore Museum
          and Anarkali bazaar before departure.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Best season:</strong> November to March. Lahore hits
          45 °C+ in June; monsoon in July–August floods the old city streets.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Budget (5 days, 2 people, mid-range):</strong> PKR
          70,000–110,000. Hotel in Gulberg PKR 8,000–12,000/night, Careem/InDriver
          PKR 2,000–3,000/day, food PKR 3,000–5,000/day (Lahori portions are
          generous), fort and museum entry PKR 1,500 total, Rohtas day-trip
          car PKR 12,000.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          <strong>Travel tips:</strong> Lahore Fort is half-priced on Sundays
          for locals — carry CNIC. The Wagah ceremony requires arriving 90
          minutes early to get a front-row seat. Don&apos;t skip the food
          street behind Badshahi Mosque at night — it&apos;s where the real
          Lahori breakfast-for-dinner culture lives.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          4. Islamabad – Murree – Nathiagali – Abbottabad Loop
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-3">
          The easiest mountain escape from the capital — a relaxed loop doable
          by sedan in summer and SUV in winter. Day 1 in Islamabad:{" "}
          <strong>Faisal Mosque</strong>, <strong>Daman-e-Koh</strong>{" "}
          viewpoint, and <strong>Saidpur Village</strong> for dinner. Day 2:
          drive up to Murree (1.5 hours), walk Mall Road, take the Patriata
          chairlift. Day 3: continue to <strong>Nathiagali</strong> via the
          Galliyat — hike the <strong>Mushkpuri Peak</strong> track (2 hours
          up, 360° views). Day 4: <strong>Ayubia National Park</strong>{" "}
          pipeline walk (4 km, family-friendly) and down to Abbottabad. Day 5:
          <strong>St. Luke&apos;s Church</strong> in Abbottabad and return to
          Islamabad.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Best season:</strong> April to October for clear skies;
          December–February for snow (Murree gets 2–3 feet; Nathiagali more).
          Avoid the Eid holidays — Murree gridlocks for hours.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-3">
          <strong>Budget (5 days, 2 people, mid-range):</strong> PKR
          55,000–85,000. Self-drive fuel PKR 10,000, hotels PKR
          6,000–10,000/night, food PKR 2,500–4,000/day, chairlift and park
          entry PKR 2,000 total.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          <strong>Travel tips:</strong> The Murree–Nathiagali road is single
          lane in places — leave Islamabad by 7 AM to beat day-tripper
          traffic. In winter, snow chains are mandatory above Ghora Gali;
          check the Punjab Highway Authority twitter handle for closures. The
          Mushkpuri track starts from Donga Gali, not Nathiagali itself — a
          common first-timer mistake.
        </p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
          Generate Your Own Pakistan Itinerary
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Each route above can be turned into a complete, day-by-day AI
          itinerary in seconds. Tell Trip Planify your departure city, vehicle
          type, budget style, and start date — you&apos;ll get a 5-day plan
          with hotels, attractions, departure times, meal stops, and a
          PKR-denominated expense breakdown you can save, share, or export to
          PDF.
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

        <Link
          href="/"
          className="inline-flex items-center font-display text-lg font-semibold text-primary hover:underline"
        >
          Plan your Pakistan trip with AI →
        </Link>
      </article>
    </main>
  );
}
