"use client";

import * as React from "react";
import { History, MapPin, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { deleteTrip } from "@/lib/plan-storage";
import type { SavedTrip } from "@/lib/types";
import { formatMoney } from "@/lib/format";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trips: SavedTrip[];
  onTripsChange: (trips: SavedTrip[]) => void;
  onLoad: (trip: SavedTrip) => void;
}

export function TripHistorySheet({
  open,
  onOpenChange,
  trips,
  onTripsChange,
  onLoad,
}: Props) {
  const handleDelete = (id: string) => {
    onTripsChange(deleteTrip(id));
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center gap-2">
            <History className="h-4 w-4" /> Saved trips
          </SheetTitle>
          <SheetDescription>
            Your recently generated plans, stored on this device.
          </SheetDescription>
        </SheetHeader>

        {trips.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center">
            <span className="text-4xl">🧳</span>
            <p className="text-sm font-medium">No saved trips yet</p>
            <p className="text-xs text-muted-foreground">
              Generate a plan and tap “Save trip” to keep it here.
            </p>
          </div>
        ) : (
          <ScrollArea className="flex-1">
            <div className="space-y-3 p-4">
              {trips.map((t) => (
                <div
                  key={t.id}
                  className="rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-2">
                    <button
                      onClick={() => onLoad(t)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="truncate font-semibold">
                          {t.plan.summary.destination}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t.plan.summary.tripTypeLabel} · {t.plan.summary.durationLabel || `${t.plan.summary.duration} days`}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="bg-primary/10 font-normal text-primary">
                          {formatMoney(t.plan.expenses.total, t.plan.expenses.currency)}
                        </Badge>
                        <Badge variant="outline" className="font-normal">
                          {t.plan.summary.budgetStyle}
                        </Badge>
                      </div>
                      <p className="mt-2 text-[11px] text-muted-foreground">
                        Saved {new Date(t.savedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                      onClick={() => handleDelete(t.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  );
}
