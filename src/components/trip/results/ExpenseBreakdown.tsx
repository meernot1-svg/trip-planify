"use client";

import { Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ExpenseCategory } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import { currencyLabel } from "@/lib/travel-data";
import { SectionHeader } from "./AccommodationList";

const BAR_COLORS = [
  "bg-teal-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-cyan-500",
];

export function ExpenseBreakdown({
  categories,
  total,
  currency,
  localCurrency,
  exchangeRate,
  totalLocal,
}: {
  categories: ExpenseCategory[];
  total: number;
  currency: string;
  localCurrency?: string;
  exchangeRate?: number;
  totalLocal?: number;
}) {
  return (
    <section>
      <SectionHeader
        icon={<Wallet className="h-5 w-5" />}
        title="Expense Breakdown"
        subtitle={`Estimated costs for the whole trip · ${currencyLabel(currency)}`}
      />

      {/* Bar chart */}
      <Card className="mb-4 gap-0 p-5">
        <div className="flex h-4 w-full overflow-hidden rounded-full bg-muted">
          {categories.map((c, i) => (
            <div
              key={i}
              className={`${BAR_COLORS[i % BAR_COLORS.length]} h-full transition-all`}
              style={{ width: `${Math.max(c.percentage, 2)}%` }}
              title={`${c.category}: ${c.percentage}%`}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {categories.map((c, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs">
              <span className={`h-2.5 w-2.5 rounded-sm ${BAR_COLORS[i % BAR_COLORS.length]}`} />
              <span className="text-muted-foreground">{c.category}</span>
              <span className="font-semibold">{c.percentage}%</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="gap-0 overflow-hidden p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="hidden text-right sm:table-cell">% of total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((c, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="font-medium">{c.category}</div>
                  {c.note ? <div className="text-xs text-muted-foreground">{c.note}</div> : null}
                </TableCell>
                <TableCell className="text-right font-semibold tabular-nums whitespace-nowrap">
                  <div>{formatMoney(c.amount, currency)}</div>
                  <div className="text-[11px] font-normal text-muted-foreground sm:hidden">{c.percentage}%</div>
                </TableCell>
                <TableCell className="hidden text-right tabular-nums text-muted-foreground sm:table-cell">
                  {c.percentage}%
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="border-t-2 bg-muted/40">
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="text-right text-base font-extrabold tabular-nums text-primary whitespace-nowrap">
                {formatMoney(total, currency)}
              </TableCell>
              <TableCell className="hidden text-right sm:table-cell">100%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {localCurrency && totalLocal && exchangeRate ? (
        <Card className="mt-4 gap-0 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <span className="text-muted-foreground">
              Local currency estimate ({localCurrency}, ~{exchangeRate} {localCurrency}/USD)
            </span>
            <span className="font-bold text-foreground">
              {formatMoney(totalLocal, localCurrency)}
            </span>
          </div>
        </Card>
      ) : null}
    </section>
  );
}
