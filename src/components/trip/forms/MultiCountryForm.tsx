"use client";

import * as React from "react";
import { ArrowRight, GripVertical, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormShell } from "./FormShell";
import {
  CityInput,
  CountrySelect,
  FieldLabel,
  FieldWrap,
  VehicleSelect,
} from "./shared";
import { NumberStepper } from "../NumberStepper";
import { INTER_LEG_TRANSPORT } from "@/lib/travel-data";
import type { PlanInput, TripLeg } from "@/lib/types";

interface Props {
  onBack: () => void;
  onGenerate: (input: PlanInput) => void;
  submitting?: boolean;
}

function newLeg(): TripLeg {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    country: "",
    city: "",
    duration: 3,
    vehicle: "",
    transportToNext: "",
  };
}

export function MultiCountryForm({ onBack, onGenerate, submitting }: Props) {
  const [originCity, setOriginCity] = React.useState("");
  const [legs, setLegs] = React.useState<TripLeg[]>([newLeg(), newLeg()]);

  const update = (id: string, patch: Partial<TripLeg>) =>
    setLegs((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));

  const addLeg = () => setLegs((prev) => [...prev, newLeg()]);
  const removeLeg = (id: string) =>
    setLegs((prev) => (prev.length > 1 ? prev.filter((l) => l.id !== id) : prev));

  const isValid =
    originCity.trim().length > 1 &&
    legs.length >= 2 &&
    legs.every((l) => l.country !== "" && l.city.trim().length > 1 && l.vehicle !== "");

  const totalDays = legs.reduce((s, l) => s + l.duration, 0);

  return (
    <FormShell
      tripType="multi-country"
      onBack={onBack}
      isValid={isValid}
      submitting={submitting}
      submitLabel={`Generate ${legs.length}-country plan`}
      onSubmit={(common) =>
        onGenerate({
          tripType: "multi-country",
          ...common,
          originCity: originCity.trim(),
          legs: legs.map((l, i) => ({
            ...l,
            // only keep transportToNext if there's a next leg
            transportToNext: i < legs.length - 1 ? l.transportToNext : undefined,
          })),
        })
      }
    >
      <div className="space-y-4">
        {/* Origin city */}
        <FieldWrap>
          <FieldLabel hint="where does the journey start?">Departing from</FieldLabel>
          <CityInput value={originCity} onChange={setOriginCity} placeholder="e.g. New York" />
        </FieldWrap>

        {/* Route preview */}
        {originCity.trim() && legs.every((l) => l.city.trim()) ? (
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-xs">
            <span className="font-semibold text-primary">{originCity.trim()}</span>
            {legs.map((l, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ArrowRight className="h-3 w-3 text-primary" />
                <span className="font-semibold text-primary">{l.city.trim()}</span>
              </span>
            ))}
          </div>
        ) : null}

        {legs.map((leg, idx) => (
          <Card key={leg.id} className="gap-0 border-dashed bg-muted/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold">
                  {leg.country ? `${leg.city || "—"}, ${leg.country}` : `Country ${idx + 1}`}
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeLeg(leg.id)}
                disabled={legs.length <= 1}
                className="h-8 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="mr-1 h-3.5 w-3.5" />
                Remove
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <FieldWrap>
                <FieldLabel>Country</FieldLabel>
                <CountrySelect
                  value={leg.country}
                  onChange={(v) => update(leg.id, { country: v })}
                  placeholder="Select"
                />
              </FieldWrap>
              <FieldWrap>
                <FieldLabel>City</FieldLabel>
                <CityInput
                  value={leg.city}
                  onChange={(v) => update(leg.id, { city: v })}
                  placeholder="e.g. Paris"
                  country={leg.country}
                />
              </FieldWrap>
              <FieldWrap>
                <FieldLabel>Duration</FieldLabel>
                <NumberStepper
                  value={leg.duration}
                  onChange={(v) => update(leg.id, { duration: v })}
                  min={1}
                  max={30}
                  suffix="d"
                />
              </FieldWrap>
              <FieldWrap>
                <FieldLabel>Local transport</FieldLabel>
                <VehicleSelect
                  value={leg.vehicle}
                  onChange={(v) => update(leg.id, { vehicle: v })}
                  placeholder="Mode"
                />
              </FieldWrap>
            </div>

            {idx < legs.length - 1 ? (
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3 py-2">
                <span className="text-xs font-medium text-primary">➜ To next country</span>
                <div className="ml-auto w-full max-w-[220px]">
                  <VehicleSelect
                    value={leg.transportToNext ?? ""}
                    onChange={(v) => update(leg.id, { transportToNext: v })}
                    placeholder="How to travel next"
                    options={INTER_LEG_TRANSPORT}
                  />
                </div>
              </div>
            ) : null}
          </Card>
        ))}

        <Button type="button" variant="outline" onClick={addLeg} className="w-full border-dashed">
          <Plus className="mr-2 h-4 w-4" />
          Add another country
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          {legs.length} legs · {totalDays} days total
        </p>
      </div>
    </FormShell>
  );
}
