"use client";

import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowRight, Coins, Plane } from "lucide-react";
import { FormShell } from "./FormShell";
import { CityInput, CountrySelect, FieldLabel, FieldWrap, VehicleSelect } from "./shared";
import { NumberStepper } from "../NumberStepper";
import type { PlanInput } from "@/lib/types";

interface Props {
  onBack: () => void;
  onGenerate: (input: PlanInput) => void;
  submitting?: boolean;
}

export function InternationalForm({ onBack, onGenerate, submitting }: Props) {
  const [country, setCountry] = React.useState("");
  const [originCity, setOriginCity] = React.useState("");
  const [city, setCity] = React.useState("");
  const [duration, setDuration] = React.useState(5);
  const [vehicle, setVehicle] = React.useState("");

  const isValid =
    country !== "" && originCity.trim().length > 1 && city.trim().length > 1 && vehicle !== "";

  return (
    <FormShell
      tripType="international"
      onBack={onBack}
      isValid={isValid}
      submitting={submitting}
      currency="USD"
      showCurrencySelector={false}
      onSubmit={(common) =>
        onGenerate({
          tripType: "international",
          ...common,
          homeCurrency: "USD", // expenses shown in USD for international trips
          country,
          originCity: originCity.trim(),
          city: city.trim(),
          duration,
          vehicle,
        })
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {/* From → To */}
        <FieldWrap>
          <FieldLabel hint="where from?">From city</FieldLabel>
          <CityInput value={originCity} onChange={setOriginCity} placeholder="e.g. New York" />
        </FieldWrap>
        <FieldWrap>
          <FieldLabel hint="where to?">To city</FieldLabel>
          <CityInput value={city} onChange={setCity} placeholder="e.g. Paris" country={country} />
        </FieldWrap>

        {/* Route preview */}
        {originCity.trim() && city.trim() ? (
          <div className="sm:col-span-2">
            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm">
              <span className="font-semibold text-primary">{originCity.trim()}</span>
              <ArrowRight className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">{city.trim()}</span>
              {country ? <span className="text-xs text-muted-foreground">· {country}</span> : null}
              <span className="ml-auto text-xs text-muted-foreground">
                {duration} day{duration === 1 ? "" : "s"} · {vehicle || "—"}
              </span>
            </div>
          </div>
        ) : null}

        <FieldWrap>
          <FieldLabel>Destination country</FieldLabel>
          <CountrySelect value={country} onChange={setCountry} placeholder="Select a country" />
        </FieldWrap>
        <FieldWrap>
          <FieldLabel>Duration</FieldLabel>
          <NumberStepper value={duration} onChange={setDuration} min={1} max={30} suffix="days" />
        </FieldWrap>
        <FieldWrap className="sm:col-span-2">
          <FieldLabel>Vehicle / Mode of travel</FieldLabel>
          <VehicleSelect value={vehicle} onChange={setVehicle} />
        </FieldWrap>
      </div>

      <Alert className="mt-5 border-amber-200 bg-amber-50 text-amber-900">
        <Plane className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-900">Heads up for international travel</AlertTitle>
        <AlertDescription className="text-amber-800">
          Your plan will include a visa & passport reminder. Estimated costs are shown in US Dollars
          (USD), with a conversion to the destination&apos;s local currency.
        </AlertDescription>
        <div className="col-start-2 mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-amber-200/70 px-2 py-0.5 text-[11px] font-medium text-amber-900">
          <Coins className="h-3 w-3" />
          Expenses in USD
        </div>
      </Alert>
    </FormShell>
  );
}
