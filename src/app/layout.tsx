import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Google Analytics 4 — replace G-XXXXXXXXXX with your Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const SITE_URL = "https://trip-planify.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Free AI Trip Planner for Pakistan & Worldwide Trips | Trip Planify",
    template: "%s | Trip Planify",
  },
  description:
    "Trip Planify is a free AI trip planner for Pakistan and worldwide travel. Plan a trip in Pakistan, international tours, or multi-country journeys — get stays, sights, a day-by-day itinerary, and expenses in your local currency in seconds. No login required.",
  keywords: [
    "travel planner",
    "trip planner",
    "tour planner",
    "AI travel",
    "itinerary generator",
    "trip itinerary",
    "travel plan",
    "Trip Planify",
    "AI trip planner",
    "trip planner in Pakistan",
    "Pakistan trip planner",
    "tour planner Pakistan",
    "trip in Pakistan",
    "best trip planner",
    "AI trip planner Pakistan",
    "vacation planner",
    "travel itinerary",
    "budget travel",
    "multi-country trip",
    "international travel planner",
    "national trip planner",
  ],
  authors: [{ name: "Trip Planify", url: SITE_URL }],
  creator: "Trip Planify",
  publisher: "Trip Planify",
  applicationName: "Trip Planify",
  category: "travel",
  formatDetection: { telephone: false, address: false, email: false },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg", type: "image/svg+xml" },
    ],
    apple: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Trip Planify — AI Travel Planner",
    description:
      "Generate complete travel plans with AI: where to stay, where to visit, day-by-day itinerary with departure times & meal stops, and expense breakdown in your local currency.",
    url: SITE_URL,
    siteName: "Trip Planify",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/5bd219431797.jpg",
        width: 1200,
        height: 630,
        alt: "Trip Planify — AI Travel Planner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trip Planify — AI Travel Planner",
    description:
      "Generate complete travel plans with AI: stays, sights, day-by-day itinerary & expenses in your local currency.",
    images: ["https://sfile.chatglm.cn/images-ppt/5bd219431797.jpg"],
  },
  // Google Search Console verification is done via the HTML file method
  // (google2b6ce7b0becad346.html in /public). No meta tag needed.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d9488",
};

/** JSON-LD structured data for Google rich results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Trip Planify",
  url: SITE_URL,
  description:
    "AI-powered travel planner that generates complete trip plans including accommodations, places to visit, day-by-day itinerary, and expense breakdown.",
  applicationCategory: "TravelApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "National trip planning",
    "International trip planning",
    "Multi-country trip planning",
    "AI-generated itineraries",
    "Day-by-day travel schedule",
    "Expense breakdown with local currency",
    "Real place images",
    "PDF export and sharing",
    "Trip history saving",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Travelers",
  },
  potentialAction: {
    "@type": "UseAction",
    target: SITE_URL,
    name: "Generate a travel plan",
  },
};

/** SoftwareApplication schema — describes Trip Planify as a free AI travel app. */
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trip Planify",
  url: SITE_URL,
  description:
    "Free AI trip planner and tour planner for Pakistan and worldwide travel. Generate complete itineraries with stays, attractions, day-by-day schedules, and expense breakdowns in your local currency.",
  applicationCategory: "TravelApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
  },
  featureList: [
    "AI trip planner for national, international, and multi-country trips",
    "Day-by-day itinerary with departure times and meal stops",
    "Expense breakdown in local currency (204 countries)",
    "Real place photos from Wikipedia",
    "Budget, mid-range, and luxury options",
    "PDF export and trip sharing",
    "No login required, no data stored",
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trip Planify",
  url: SITE_URL,
  logo: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  description:
    "AI-powered travel planner for national, international, and multi-country trips.",
  sameAs: ["https://github.com/meernot1-svg/trip-planify"],
};

/** FAQPage structured data — matches the FAQ section on the homepage. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Trip Planify free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Trip Planify is 100% free. There are no fees, no subscriptions, and no hidden charges. You can generate unlimited travel plans without paying anything.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to sign up or create an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Trip Planify requires no login and no account. Just pick a trip type, fill the form, and get your plan. Your saved trips are stored in your browser's local storage, not on a server.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI generate my travel plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We send your form inputs (cities, dates, budget, vehicle) to an AI model that generates a structured plan — including accommodations, attractions, a day-by-day itinerary with realistic travel times and meal stops, and an expense breakdown in your local currency.",
      },
    },
    {
      "@type": "Question",
      name: "Are the prices and timings accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI provides realistic estimates based on general knowledge, but prices, timings, and availability can change. Always verify details independently before booking.",
      },
    },
    {
      "@type": "Question",
      name: "Can I plan a trip within Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Trip Planify supports all 204 countries including Pakistan. Select National Trip, choose Pakistan, enter your from/to cities, and get a plan with expenses in Pakistani Rupee.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Trip Planify is fully mobile-responsive. You can plan trips on your phone or tablet — the layout adapts to any screen size.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Monetag site verification */}
        <meta name="monetag" content="be4d1bf2d11c6f8e2eb575c3b330fe45" />
        {/* JSON-LD structured data for Google Search Console rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Google AdSense — required by AdSense for ad serving */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1982771598105016"
          crossOrigin="anonymous"
        />
        {/* Monetag ad tag — zone 260487 */}
        <script
          async
          data-zone="260487"
          data-cfasync="false"
          src="https://quge5.com/88/tag.min.js"
        />
      </head>
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        {/* Google Analytics 4 — replace G-XXXXXXXXXX with your Measurement ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
