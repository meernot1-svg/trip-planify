"use client";

import * as React from "react";
import { Gem, MapPin, ImageIcon, Loader2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { HiddenGem, Place } from "@/lib/types";
import { SectionHeader } from "./AccommodationList";
import { usePlaceImage } from "./usePlaceImage";
import { cn } from "@/lib/utils";

const FALLBACK_GRADIENTS = [
  "from-teal-400 to-cyan-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-violet-400 to-purple-500",
  "from-emerald-400 to-green-500",
  "from-sky-400 to-blue-500",
];

export function PlacesToVisit({
  topPicks,
  hiddenGems,
  destination,
}: {
  topPicks: Place[];
  hiddenGems: HiddenGem[];
  destination?: string;
}) {
  return (
    <section>
      <SectionHeader
        icon={<MapPin className="h-5 w-5" />}
        title="Where to Visit"
        subtitle="Top attractions plus a couple of hidden gems"
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Top picks with images */}
        <div className="grid gap-4 sm:grid-cols-2">
          {topPicks.map((p, i) => (
            <PlaceCard
              key={`${p.name}-${i}`}
              place={p}
              index={i}
              destination={destination}
            />
          ))}
        </div>

        {/* Hidden gems */}
        {hiddenGems?.length ? (
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-600">
              <Gem className="h-4 w-4" />
              Hidden gems
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="space-y-3">
              {hiddenGems.map((g, i) => (
                <Card key={i} className="gap-0 border-amber-200 bg-amber-50/40 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💎</span>
                    <h3 className="font-semibold">{g.name}</h3>
                    <Badge variant="outline" className="ml-auto border-amber-300 font-normal text-amber-700">
                      {g.type}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
                  <p className="mt-2 text-xs text-amber-800">
                    <span className="font-semibold">Why go:</span> {g.why}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PlaceCard({
  place,
  index,
  destination,
}: {
  place: Place;
  index: number;
  destination?: string;
}) {
  // If the place already has an image (saved trip), use it; otherwise lazy-load.
  const query = place.image ? undefined : `${place.name} ${destination || ""}`.trim();
  const { url, loading } = usePlaceImage(query, Boolean(query));
  const imgSrc = place.image || url;

  return (
    <Card className="group gap-0 overflow-hidden p-0">
      {/* Image */}
      <div className="relative h-36 w-full overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={place.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // Hide broken images so the fallback gradient shows.
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : loading ? (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br text-white/80",
              FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]
            )}
          >
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br",
              FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]
            )}
          >
            <ImageIcon className="h-8 w-8 text-white/70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-primary shadow-sm">
          {index + 1}
        </span>
        <Badge
          variant="secondary"
          className="absolute right-2 top-2 bg-white/90 font-normal text-foreground"
        >
          {place.type}
        </Badge>
      </div>
      {/* Body */}
      <div className="p-3">
        <h3 className="font-semibold leading-tight">{place.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{place.description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
          {place.duration ? <span className="rounded-md bg-muted px-2 py-0.5">⏱ {place.duration}</span> : null}
          {place.bestTime ? <span className="rounded-md bg-muted px-2 py-0.5">🌅 {place.bestTime}</span> : null}
        </div>
      </div>
    </Card>
  );
}
