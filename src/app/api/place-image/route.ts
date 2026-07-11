import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 20;

/** In-memory cache: query -> image URL (survives across requests in dev). */
const cache = new Map<string, string | null>();
const CACHE_MAX = 300;

/** Fetch a real photo for a place via the Wikipedia/Wikimedia API.
 *  Free, no API key required, has images for virtually every notable landmark. */
async function searchImage(query: string): Promise<string | undefined> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    // Use Wikipedia's generator=search + prop=pageimages to find the best-
    // matching article and get its main thumbnail in one call.
    const apiUrl =
      "https://en.wikipedia.org/w/api.php?" +
      new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        generator: "search",
        gsrsearch: query,
        gsrlimit: "1",
        prop: "pageimages",
        pithumbsize: "800",
        pilicense: "any",
      }).toString();

    const res = await fetch(apiUrl, {
      signal: controller.signal,
      headers: {
        // Wikipedia requires a descriptive User-Agent with contact info.
        "User-Agent":
          "TripPlanify/1.0 (https://trip-planify.app; contact@trip-planify.app)",
      },
    });

    if (!res.ok) return undefined;
    const data = await res.json();

    // The pages object keys are page IDs; grab the first one's thumbnail.
    const pages = data?.query?.pages;
    if (!pages) return undefined;

    const firstPage = Object.values(pages)[0] as any;
    const thumb = firstPage?.thumbnail?.source;
    if (typeof thumb === "string" && thumb.startsWith("http")) {
      return thumb;
    }

    // Fallback: try the original image URL if no thumbnail.
    const original = firstPage?.imageinfo?.[0]?.url;
    if (typeof original === "string" && original.startsWith("http")) {
      return original;
    }

    return undefined;
  } catch {
    return undefined;
  } finally {
    clearTimeout(timeout);
  }
}

/** GET /api/place-image?q=<place name + destination>
 *  Returns { url } or { url: null } if no image found. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q")?.trim();

  if (!q || q.length < 2) {
    return NextResponse.json({ url: null }, { status: 400 });
  }

  // Cache hit?
  if (cache.has(q)) {
    const cached = cache.get(q);
    return NextResponse.json(
      { url: cached ?? null },
      { headers: { "cache-control": "public, max-age=86400" } }
    );
  }

  const found = await searchImage(q);

  // Evict oldest entries if cache is full.
  if (cache.size >= CACHE_MAX) {
    const firstKey = cache.keys().next().value;
    if (firstKey) cache.delete(firstKey);
  }
  cache.set(q, found ?? null);

  return NextResponse.json(
    { url: found ?? null },
    { headers: { "cache-control": "public, max-age=86400" } }
  );
}
