"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NumberStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  className?: string;
}

export function NumberStepper({
  value,
  onChange,
  min = 1,
  max = 60,
  step = 1,
  suffix,
  className,
}: NumberStepperProps) {
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-input bg-background overflow-hidden",
        className
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none text-muted-foreground hover:text-foreground"
        onClick={() => onChange(clamp(value - step))}
        disabled={value <= min}
        aria-label="Decrease"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <div className="min-w-[3.5rem] text-center text-sm font-semibold tabular-nums">
        {value}
        {suffix ? <span className="ml-1 text-xs font-normal text-muted-foreground">{suffix}</span> : null}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none text-muted-foreground hover:text-foreground"
        onClick={() => onChange(clamp(value + step))}
        disabled={value >= max}
        aria-label="Increase"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
