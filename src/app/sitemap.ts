import type { MetadataRoute } from "next";

/**
 * Generates /sitemap.xml for Google Search Console.
 * The app is a single-page wizard, so we just list the root URL.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trip-planify.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
