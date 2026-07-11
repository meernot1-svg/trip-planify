"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { NumberStepper } from "../NumberStepper";
import {
  CurrencySelect,
  FieldLabel,
  FieldWrap,
  InterestsInput,
} from "./shared";
import { BUDGET_STYLES, TRIP_TYPES, currencyLabel } from "@/lib/travel-data";
import type { BudgetStyle, TripType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FormShellProps {
  tripType: TripType;
  children: React.ReactNode;
  onBack: () => void;
  onSubmit: (common: {
    budgetStyle: BudgetStyle;
    travelers: number;
    startDate: string;
    interests: string;
    homeCurrency: string;
  }) => void;
  submitLabel?: string;
  isValid: boolean;
  submitting?: boolean;
  /** Resolved currency used for the plan (drives expense currency). */
  currency?: string;
  /** Show the editable currency selector (default true). When false, the
   *  resolved `currency` is shown as a read-only badge. */
  showCurrencySelector?: boolean;
}

export function FormShell({
  tripType,
  children,
  onBack,
  onSubmit,
  submitLabel = "Generate my plan",
  isValid,
  submitting,
  currency: currencyProp = "USD",
  showCurrencySelector = true,
}: FormShellProps) {
  const meta = TRIP_TYPES.find((t) => t.value === tripType)!;
  const [budgetStyle, setBudgetStyle] = React.useState<BudgetStyle>("mid-range");
  const [travelers, setTravelers] = React.useState(2);
  const [startDate, setStartDate] = React.useState("");
  const [interests, setInterests] = React.useState("");
  const [homeCurrency, setHomeCurrency] = React.useState(currencyProp);

  // Keep the editable selector in sync if the resolved currency changes.
  React.useEffect(() => {
    setHomeCurrency(currencyProp);
  }, [currencyProp]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="no-print" disabled={submitting}>
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow-sm",
                meta.gradient
              )}
            >
              {meta.emoji}
            </span>
            <div>
              <h1 className="font-display text-lg font-bold leading-tight sm:text-xl">{meta.label}</h1>
              <p className="text-xs text-muted-foreground">{meta.description}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!isValid || submitting) return;
            const resolvedCurrency = showCurrencySelector ? homeCurrency : currencyProp;
            onSubmit({ budgetStyle, travelers, startDate, interests, homeCurrency: resolvedCurrency });
          }}
          className="space-y-5"
        >
          {/* Trip-specific fields */}
          <Card className="gap-0 p-5 sm:p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Trip details
            </h2>
            {children}
          </Card>

          {/* Budget style */}
          <Card className="gap-0 p-5 sm:p-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Budget style
            </h2>
            <RadioGroup
              value={budgetStyle}
              onValueChange={(v) => setBudgetStyle(v as BudgetStyle)}
              className="grid gap-3 sm:grid-cols-3"
            >
              {BUDGET_STYLES.map((b) => (
                <label
                  key={b.value}
                  htmlFor={`budget-${b.value}`}
                  className={cn(
                    "flex cursor-pointer flex-col gap-1 rounded-xl border-2 p-3 transition-all",
                    budgetStyle === b.value
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value={b.value} id={`budget-${b.value}`} />
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-sm font-semibold">{b.label}</span>
                  </div>
                  <span className="pl-7 text-xs text-muted-foreground">{b.description}</span>
                </label>
              ))}
            </RadioGroup>
          </Card>

          {/* Travelers, dates, currency */}
          <Card className="gap-0 p-5 sm:p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Travelers & dates
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <FieldWrap>
                <FieldLabel>Travelers</FieldLabel>
                <NumberStepper value={travelers} onChange={setTravelers} min={1} max={20} suffix="ppl" />
              </FieldWrap>
              <FieldWrap>
                <FieldLabel hint="optional">Start date</FieldLabel>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FieldWrap>
              <FieldWrap>
                <FieldLabel>
                  {showCurrencySelector ? "Home currency" : "Expense currency"}
                </FieldLabel>
                {showCurrencySelector ? (
                  <CurrencySelect value={homeCurrency} onChange={setHomeCurrency} />
                ) : (
                  <div className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-muted/40 px-3 text-sm font-semibold text-foreground">
                    <span>{currencyLabel(currencyProp)}</span>
                    <span className="text-[11px] font-normal text-muted-foreground">auto</span>
                  </div>
                )}
              </FieldWrap>
            </div>
            <FieldWrap className="mt-4">
              <FieldLabel hint="optional">Interests & preferences</FieldLabel>
              <InterestsInput value={interests} onChange={setInterests} />
            </FieldWrap>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Plans are generated by AI. Double-check prices and timings before booking.
            </p>
            <Button type="submit" size="lg" disabled={!isValid || submitting} className="sm:min-w-[220px]">
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  {submitLabel}
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
