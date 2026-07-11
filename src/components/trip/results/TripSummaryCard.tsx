"use client";

import {
  CalendarDays,
  Car,
  MapPin,
  Moon,
  Users,
  Wallet,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRIP_TYPES } from "@/lib/travel-data";
import { formatDateRange, formatMoney } from "@/lib/format";
import type { GeneratedPlan } from "@/lib/types";
import { cn } from "@/lib/utils";

export function TripSummaryCard({ plan }: { plan: GeneratedPlan }) {
  const meta = TRIP_TYPES.find((t) => t.value === plan.tripType)!;
  const s = plan.summary;
  const dates = s.dates || formatDateRange(plan.input.startDate, s.duration);

  return (
    <Card className="overflow-hidden border-0 p-0 shadow-md">
      <div className={cn("relative bg-gradient-to-br p-6 text-white sm:p-8", meta.gradient)}>
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute -bottom-10 right-10 text-7xl opacity-20">{meta.emoji}</div>
        <div className="relative">
          <Badge className="mb-3 border-0 bg-white/25 text-white hover:bg-white/25">
            {meta.emoji} {meta.label}
          </Badge>
          <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
            {s.origin ? (
              <>
                {s.origin} <span className="text-white/70">→</span> {s.destination}
              </>
            ) : (
              s.destination
            )}
          </h2>
          {s.destinations && s.destinations.length > 1 ? (
            <p className="mt-1 text-sm text-white/90">
              {s.destinations.join("  ·  ")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:p-6">
        <Stat icon={<CalendarDays className="h-4 w-4" />} label="Duration" value={s.durationLabel || `${s.duration} days`} />
        <Stat icon={<Moon className="h-4 w-4" />} label="Dates" value={dates} />
        <Stat icon={<Car className="h-4 w-4" />} label="Transport" value={s.vehicle} />
        <Stat icon={<Users className="h-4 w-4" />} label="Travelers" value={`${s.travelers}`} />
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t bg-muted/40 px-4 py-3 sm:px-6">
        <Wallet className="h-4 w-4 shrink-0 text-primary" />
        <span className="text-xs font-medium sm:text-sm">Total cost</span>
        <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary">
          {formatMoney(plan.expenses.total, plan.expenses.currency)}
        </Badge>
        <Badge variant="outline" className="hidden sm:inline-flex">{plan.expenses.currency}</Badge>
        <Badge variant="outline">{s.budgetStyle}</Badge>
      </div>
    </Card>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
