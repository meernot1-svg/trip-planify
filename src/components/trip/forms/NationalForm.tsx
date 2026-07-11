"use client";

import * as React from "react";
import { ArrowRight, Coins } from "lucide-react";
import { FormShell } from "./FormShell";
import { CityInput, CountrySelect, FieldLabel, FieldWrap, VehicleSelect } from "./shared";
import { NumberStepper } from "../NumberStepper";
import { currencyForCountry, currencyLabel } from "@/lib/travel-data";
import type { PlanInput, TripType } from "@/lib/types";

interface Props {
  onBack: () => void;
  onGenerate: (input: PlanInput) => void;
  submitting?: boolean;
}

export function NationalForm({ onBack, onGenerate, submitting }: Props) {
  const [country, setCountry] = React.useState("United States");
  const [originCity, setOriginCity] = React.useState("");
  const [city, setCity] = React.useState("");
  const [duration, setDuration] = React.useState(3);
  const [vehicle, setVehicle] = React.useState("");

  const currency = currencyForCountry(country);
  const isValid =
    country !== "" && originCity.trim().length > 1 && city.trim().length > 1 && vehicle !== "";

  return (
    <FormShell
      tripType="national"
      onBack={onBack}
      isValid={isValid}
      submitting={submitting}
      currency={currency}
      showCurrencySelector={false}
      onSubmit={(common) =>
        onGenerate({
          tripType: "national" as TripType,
          ...common,
          homeCurrency: currency, // expenses shown in the destination country's currency
          country,
          originCity: originCity.trim(),
          city: city.trim(),
          duration,
          vehicle,
        })
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Country the trip takes place in */}
        <FieldWrap className="sm:col-span-2">
          <FieldLabel hint="where is the trip?">Country</FieldLabel>
          <CountrySelect value={country} onChange={setCountry} placeholder="Select a country" />
        </FieldWrap>

        {/* From → To */}
        <FieldWrap>
          <FieldLabel hint="where from?">From city</FieldLabel>
          <CityInput
            value={originCity}
            onChange={setOriginCity}
            placeholder="e.g. Los Angeles"
            country={country}
          />
        </FieldWrap>
        <FieldWrap>
          <FieldLabel hint="where to?">To city / Destination</FieldLabel>
          <CityInput
            value={city}
            onChange={setCity}
            placeholder="e.g. San Francisco"
            country={country}
          />
        </FieldWrap>

        {/* Route preview + currency note */}
        {originCity.trim() && city.trim() ? (
          <div className="sm:col-span-2">
            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm">
              <span className="font-semibold text-primary">{originCity.trim()}</span>
              <ArrowRight className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">{city.trim()}</span>
              <span className="text-xs text-muted-foreground">
                · {duration} day{duration === 1 ? "" : "s"} · {vehicle || "—"}
              </span>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800">
                <Coins className="h-3 w-3" />
                Expenses in {currencyLabel(currency)}
              </span>
            </div>
          </div>
        ) : (
          <div className="sm:col-span-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-medium text-amber-800">
              <Coins className="h-3 w-3" />
              Expenses will be shown in {currencyLabel(currency)}
            </div>
          </div>
        )}

        <FieldWrap>
          <FieldLabel>Duration</FieldLabel>
          <NumberStepper value={duration} onChange={setDuration} min={1} max={30} suffix="days" />
        </FieldWrap>
        <FieldWrap>
          <FieldLabel>Vehicle / Mode of travel</FieldLabel>
          <VehicleSelect value={vehicle} onChange={setVehicle} />
        </FieldWrap>
      </div>
    </FormShell>
  );
}
