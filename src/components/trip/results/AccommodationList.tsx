"use client";

import { BedDouble, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Accommodation } from "@/lib/types";
import { formatMoney } from "@/lib/format";

export function AccommodationList({ items }: { items: Accommodation[] }) {
  return (
    <section>
      <SectionHeader icon={<BedDouble className="h-5 w-5" />} title="Where to Stay" subtitle="Hand-picked stays for your budget" />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((a, i) => (
          <Card key={i} className="gap-0 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-semibold">{a.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{a.type}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-primary">
                  {a.pricePerNight ||
                    `${formatMoney(a.pricePerNightLow)} – ${formatMoney(a.pricePerNightHigh)}`}
                </div>
                <div className="text-[11px] text-muted-foreground">per night</div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium">{Number(a.rating).toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">/ 5</span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>

            {a.highlights?.length ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {a.highlights.map((h, j) => (
                  <Badge key={j} variant="secondary" className="bg-muted font-normal">
                    {h}
                  </Badge>
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({
  icon,
  title,
  subtitle,
  right,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </span>
        <div>
          <h2 className="text-lg font-bold leading-tight sm:text-xl">{title}</h2>
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
        </div>
      </div>
      {right}
    </div>
  );
}
