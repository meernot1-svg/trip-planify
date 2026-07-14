import type { MetadataRoute } from "next";

/**
 * Generates /sitemap.xml for Google Search Console.
 * Lists the root wizard plus all guide and trust/legal pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trip-planify.vercel.app";
  const now = new Date();

  const routes: { path: string; freq: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "", freq: "weekly", priority: 1.0 },
    // Keyword-targeted landing pages
    { path: "/pakistan-trip-planner", freq: "monthly", priority: 0.9 },
    { path: "/tour-planner", freq: "monthly", priority: 0.9 },
    { path: "/free-ai-trip-planner", freq: "monthly", priority: 0.9 },
    // Guide pages (content that ranks in search)
    { path: "/guides", freq: "weekly", priority: 0.8 },
    { path: "/guides/best-5-day-trip-ideas-within-pakistan", freq: "monthly", priority: 0.8 },
    { path: "/guides/how-to-plan-international-trip-with-ai", freq: "monthly", priority: 0.8 },
    { path: "/guides/pakistan-to-dubai-trip-guide", freq: "monthly", priority: 0.8 },
    { path: "/guides/multi-country-trip-planning-guide", freq: "monthly", priority: 0.8 },
    // Trust pages
    { path: "/about", freq: "monthly", priority: 0.6 },
    { path: "/contact", freq: "monthly", priority: 0.5 },
    { path: "/privacy-policy", freq: "yearly", priority: 0.4 },
    { path: "/disclaimer", freq: "yearly", priority: 0.4 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
