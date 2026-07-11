"use client";

import * as React from "react";

/**
 * Lazily fetch a real photo for a place via /api/place-image.
 * Returns { url, loading }. Falls back to undefined when no image is found
 * (the UI then shows a gradient placeholder).
 *
 * The fetch only fires when `enabled` is true (e.g. when the card is on
 * screen), so we don't hammer the image-search API for off-screen cards.
 */
export function usePlaceImage(query: string | undefined, enabled = true) {
  const [url, setUrl] = React.useState<string | undefined>(undefined);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!enabled || !query || query.length < 2) return;
    let cancelled = false;

    // If the place already has an image (e.g. from a saved trip), skip.
    setLoading(true);
    fetch(`/api/place-image?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setUrl(data?.url ?? null);
      })
      .catch(() => {
        if (!cancelled) setUrl(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query, enabled]);

  return { url, loading };
}
