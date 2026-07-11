"use client";

import * as React from "react";
import { Calendar, Clock, Coffee, MapPin, Moon, RefreshCw, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ItineraryDay } from "@/lib/types";
import { SectionHeader } from "./AccommodationList";
import { cn } from "@/lib/utils";

const SLOTS = [
  { key: "morning", label: "Morning", emoji: "🌅", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { key: "afternoon", label: "Afternoon", emoji: "☀️", color: "bg-teal-100 text-teal-700 border-teal-200" },
  { key: "evening", label: "Evening", emoji: "🌙", color: "bg-violet-100 text-violet-700 border-violet-200" },
] as const;

export function ItineraryTimeline({
  days,
  onRegenerate,
  regeneratingDay,
}: {
  days: ItineraryDay[];
  onRegenerate?: (day: number) => void;
  regeneratingDay?: number | null;
}) {
  return (
    <section>
      <SectionHeader
        icon={<Calendar className="h-5 w-5" />}
        title="Day-by-day Itinerary"
        subtitle={`${days.length} day${days.length === 1 ? "" : "s"} · morning · afternoon · evening`}
        right={
          onRegenerate ? (
            <span className="hidden text-xs text-muted-foreground sm:inline">
              ✨ Tap “Refresh” on any day to regenerate just that day
            </span>
          ) : null
        }
      />
      <div className="relative space-y-4 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border sm:before:left-[27px]">
        {days.map((d) => (
          <DayCard
            key={d.day}
            day={d}
            onRegenerate={onRegenerate}
            busy={regeneratingDay === d.day}
          />
        ))}
      </div>
    </section>
  );
}

function DayCard({
  day,
  onRegenerate,
  busy,
}: {
  day: ItineraryDay;
  onRegenerate?: (day: number) => void;
  busy?: boolean;
}) {
  return (
    <div className="relative pl-12 sm:pl-16">
      {/* node */}
      <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm sm:h-14 sm:w-14 sm:text-sm">
        D{day.day}
      </div>
      <Card className={cn("gap-0 p-4 transition-opacity", busy && "opacity-60")}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-bold">Day {day.day}: {day.title}</h3>
            {day.location ? (
              <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {day.location}
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-muted font-normal">
              <Clock className="mr-1 h-3 w-3" /> Full day
            </Badge>
            {onRegenerate ? (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-7 gap-1.5 px-2 text-xs no-print"
                disabled={busy}
                onClick={() => onRegenerate(day.day)}
              >
                <RefreshCw className={cn("h-3 w-3", busy && "animate-spin")} />
                {busy ? "Refreshing" : "Refresh"}
              </Button>
            ) : null}
          </div>
        </div>

        {/* Departure banner — when/where you depart that day */}
        {day.departure?.from ? (
          <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs">🚗</span>
            <span className="font-semibold text-primary">
              Depart from {day.departure.from}
              {day.departure.time ? ` at ${day.departure.time}` : ""}
            </span>
            {day.departure.note ? (
              <span className="text-xs text-muted-foreground">— {day.departure.note}</span>
            ) : null}
          </div>
        ) : null}

        <div className="grid gap-2 sm:grid-cols-3">
          {SLOTS.map((slot) => {
            const data = day[slot.key];
            return (
              <div key={slot.key} className={cn("rounded-lg border p-3", slot.color)}>
                <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold">
                  <span>{slot.emoji}</span> {slot.label}
                  {data?.time ? <span className="ml-auto opacity-70">{data.time}</span> : null}
                </div>
                <div className="text-sm font-medium text-foreground">{data?.activity || "—"}</div>
                {data?.description ? (
                  <p className="mt-0.5 text-xs text-muted-foreground">{data.description}</p>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Meal stops — breakfast / lunch / dinner */}
        {day.meals ? (
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <MealChip icon={<Coffee className="h-3 w-3" />} label="Breakfast" value={day.meals.breakfast} />
            <MealChip icon={<Sun className="h-3 w-3" />} label="Lunch" value={day.meals.lunch} />
            <MealChip icon={<Moon className="h-3 w-3" />} label="Dinner" value={day.meals.dinner} />
          </div>
        ) : null}
      </Card>
    </div>
  );
}

function MealChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
      <span className="mt-0.5 text-muted-foreground">{icon}</span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="text-xs text-foreground">{value}</div>
      </div>
    </div>
  );
}
