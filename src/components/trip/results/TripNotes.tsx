"use client";

import {
  CloudSun,
  Coins,
  Globe2,
  Lightbulb,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type {
  CountryExpense,
  GeneratedPlan,
  InterCountryTransport,
} from "@/lib/types";
import { formatMoney } from "@/lib/format";
import { SectionHeader } from "./AccommodationList";

export function TripNotes({ plan }: { plan: GeneratedPlan }) {
  const isIntl = plan.tripType !== "national";
  const hasMulti = plan.tripType === "multi-country";

  return (
    <div className="space-y-6">
      {/* Weather */}
      {plan.weather ? (
        <section>
          <SectionHeader
            icon={<CloudSun className="h-5 w-5" />}
            title="Weather Forecast"
            subtitle="What to expect at your destination"
          />
          <Card className="gap-0 p-5">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-4xl">🌤️</span>
              <div>
                <div className="text-lg font-bold">{plan.weather.condition}</div>
                <div className="text-sm text-muted-foreground">{plan.weather.tempRange}</div>
              </div>
              <p className="ml-auto max-w-sm text-sm text-muted-foreground">{plan.weather.note}</p>
            </div>
          </Card>
        </section>
      ) : null}

      {/* International notes */}
      {isIntl ? (
        <section>
          <SectionHeader
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Visa & Travel Documents"
            subtitle="Reminders for crossing borders"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="gap-0 border-amber-200 bg-amber-50/50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <Plane className="h-4 w-4 text-amber-600" />
                <h3 className="font-semibold text-amber-900">Visa & Passport</h3>
              </div>
              <p className="text-sm text-amber-800">{plan.visaNote || "Check passport validity (6+ months) and visa requirements for your destination well in advance."}</p>
            </Card>
            <Card className="gap-0 border-teal-200 bg-teal-50/50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <Coins className="h-4 w-4 text-teal-600" />
                <h3 className="font-semibold text-teal-900">Currency</h3>
              </div>
              <p className="text-sm text-teal-800">
                {plan.currencyNote ||
                  `Costs are shown in ${plan.expenses.currency}${
                    plan.expenses.localCurrency ? ` and ${plan.expenses.localCurrency}` : ""
                  }. Notify your bank and carry a small amount of local cash.`}
              </p>
            </Card>
          </div>
        </section>
      ) : null}

      {/* Multi-country: inter-country transport + per-country breakdown */}
      {hasMulti ? (
        <>
          {plan.interCountryTransport?.length ? (
            <section>
              <SectionHeader
                icon={<Globe2 className="h-5 w-5" />}
                title="Inter-Country Transport"
                subtitle="How to move between countries"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {plan.interCountryTransport.map((t: InterCountryTransport, i) => (
                  <Card key={i} className="gap-0 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span>{t.from}</span>
                      <span className="text-muted-foreground">→</span>
                      <span>{t.to}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="bg-primary/10 font-normal text-primary">
                        ✈️ {t.mode}
                      </Badge>
                      <Badge variant="outline" className="font-normal">⏱ {t.estTime}</Badge>
                      <Badge variant="outline" className="font-normal">💰 {t.estCost}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ) : null}

          {plan.countryBreakdown?.length ? (
            <section>
              <SectionHeader
                icon={<Coins className="h-5 w-5" />}
                title="Per-Country Expenses"
                subtitle="Cost split across each country"
              />
              <Card className="gap-0 overflow-hidden p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead className="text-right">Days</TableHead>
                      <TableHead className="text-right">Estimated cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {plan.countryBreakdown.map((c: CountryExpense, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{c.country}</TableCell>
                        <TableCell className="text-right tabular-nums">{c.days}</TableCell>
                        <TableCell className="text-right font-semibold tabular-nums">
                          {formatMoney(c.total, plan.expenses.currency)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </section>
          ) : null}
        </>
      ) : null}

      {/* Tips */}
      {plan.tips?.length ? (
        <section>
          <SectionHeader
            icon={<Lightbulb className="h-5 w-5" />}
            title="Travel Tips"
            subtitle="Make the most of your trip"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {plan.tips.map((tip, i) => (
              <Card key={i} className="gap-0 p-4">
                <div className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
