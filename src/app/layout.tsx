import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Trip Planify — AI Travel Planner",
  description: "Plan national, international, and multi-country trips with AI. Get where to stay, where to visit, a day-by-day itinerary, and an expense breakdown in seconds.",
  keywords: ["travel planner", "trip planner", "AI travel", "itinerary", "Trip Planify", "Next.js"],
  authors: [{ name: "Trip Planify" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Trip Planify — AI Travel Planner",
    description: "Generate complete travel plans with AI: stays, sights, day-by-day itinerary & expenses.",
    url: "https://chat.z.ai",
    siteName: "Trip Planify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trip Planify — AI Travel Planner",
    description: "Generate complete travel plans with AI: stays, sights, day-by-day itinerary & expenses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
