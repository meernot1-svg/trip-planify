import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
    default: "Trip Planify — AI Travel Planner | Free Trip Itinerary Generator",
    template: "%s | Trip Planify",
  },
  description:
    "Plan national, international, and multi-country trips with AI. Get where to stay, where to visit, a day-by-day itinerary with departure times & meal stops, and an expense breakdown in your local currency — all in seconds. Free AI travel planner.",
  keywords: [
    "travel planner",
    "trip planner",
    "AI travel",
    "itinerary generator",
    "trip itinerary",
    "travel plan",
    "Trip Planify",
    "AI trip planner",
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
  // === Google Search Console verification ===
  // Replace the content below with your own verification code from Google
  // Search Console (Search Console → Settings → Ownership verification →
  // HTML tag). The format is: <meta name="google-site-verification"
  // content="YOUR_CODE_HERE" />
  verification: {
    google: "GOOGLE_VERIFICATION_CODE_HERE",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data for Google Search Console rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
