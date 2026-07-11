"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TripSummaryCard } from "./TripSummaryCard";
import { AccommodationList } from "./AccommodationList";
import { PlacesToVisit } from "./PlacesToVisit";
import { ItineraryTimeline } from "./ItineraryTimeline";
import { ExpenseBreakdown } from "./ExpenseBreakdown";
import { TripNotes } from "./TripNotes";
import { PlanActions } from "./PlanActions";
import type { GeneratedPlan } from "@/lib/types";

interface Props {
  plan: GeneratedPlan;
  onNewTrip: () => void;
  onSaved: () => void;
  onRegenerateDay: (dayNumber: number) => void;
  regeneratingDay: number | null;
}

export function PlanResults({
  plan,
  onNewTrip,
  onSaved,
  onRegenerateDay,
  regeneratingDay,
}: Props) {
  const ex = plan.expenses;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Top actions */}
        <div className="no-print">
          <PlanActions plan={plan} onNewTrip={onNewTrip} onSaved={onSaved} />
        </div>

        <TripSummaryCard plan={plan} />

        <AccommodationList items={plan.accommodations ?? []} />

        <PlacesToVisit
          topPicks={plan.placesToVisit?.topPicks ?? []}
          hiddenGems={plan.placesToVisit?.hiddenGems ?? []}
          destination={plan.summary?.destination}
        />

        <ItineraryTimeline
          days={plan.itinerary ?? []}
          onRegenerate={onRegenerateDay}
          regeneratingDay={regeneratingDay}
        />

        <TripNotes plan={plan} />

        <ExpenseBreakdown
          categories={ex.categories ?? []}
          total={ex.total ?? 0}
          currency={ex.currency}
          localCurrency={ex.localCurrency}
          exchangeRate={ex.exchangeRate}
          totalLocal={ex.totalLocal}
        />

        {/* Bottom actions */}
        <div className="no-print border-t pt-6">
          <PlanActions plan={plan} onNewTrip={onNewTrip} onSaved={onSaved} />
        </div>
      </motion.div>
    </div>
  );
}
