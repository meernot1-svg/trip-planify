"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  COUNTRY_DATA,
  POPULAR_CITIES,
  VEHICLES,
  CURRENCIES,
  citiesForCountry,
} from "@/lib/travel-data";
import { cn } from "@/lib/utils";

/** Convert an ISO 3166-1 alpha-2 code (e.g. "IN") into a flag emoji (🇮🇳). */
function flagEmoji(iso2: string): string {
  if (!iso2 || iso2.length !== 2) return "🏳️";
  const A = 0x1f1e6;
  const base = "A".charCodeAt(0);
  return String.fromCodePoint(
    A + (iso2.toUpperCase().charCodeAt(0) - base),
    A + (iso2.toUpperCase().charCodeAt(1) - base)
  );
}

export function FieldLabel({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <Label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium">
      {children}
      {hint ? <span className="text-xs font-normal text-muted-foreground">· {hint}</span> : null}
    </Label>
  );
}

/** City input with a native datalist autocomplete — free text allowed.
 *  When `country` is provided, that country's cities are suggested first. */
export function CityInput({
  value,
  onChange,
  placeholder = "Search a city",
  id,
  country,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  id?: string;
  country?: string;
}) {
  const listId = React.useId();
  const suggestions = React.useMemo(() => {
    if (!country) return POPULAR_CITIES;
    const local = citiesForCountry(country);
    // Country's cities first, then the rest of the world.
    const rest = POPULAR_CITIES.filter((c) => !local.includes(c));
    return [...local, ...rest];
  }, [country]);
  return (
    <>
      <Input
        id={id}
        list={listId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
      <datalist id={listId}>
        {suggestions.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </>
  );
}

export function CountrySelect({
  value,
  onChange,
  placeholder = "Select a country",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const selected = COUNTRY_DATA.find((c) => c.name === value);
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRY_DATA;
    return COUNTRY_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso2.toLowerCase().includes(q) ||
        c.currency.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <span className="flex items-center gap-2 truncate">
            {selected ? (
              <>
                <span className="text-base leading-none">{flagEmoji(selected.iso2)}</span>
                <span className="truncate">{selected.name}</span>
              </>
            ) : (
              placeholder
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <Command shouldFilter={false}>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Search 195 countries…"
              value={query}
              onValueChange={setQuery}
              className="h-9 border-0 ring-0 focus-visible:ring-0"
            />
          </div>
          <CommandList className="max-h-72">
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {filtered.map((c) => (
                <CommandItem
                  key={c.iso2}
                  value={c.name}
                  onSelect={() => {
                    onChange(c.name);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="gap-2"
                >
                  <span className="text-base leading-none">{flagEmoji(c.iso2)}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-[10px] font-medium text-muted-foreground">{c.currency}</span>
                  <Check
                    className={cn(
                      "h-4 w-4",
                      value === c.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function VehicleSelect({
  value,
  onChange,
  placeholder = "Select mode of travel",
  options = VEHICLES,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  options?: typeof VEHICLES;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((v) => (
          <SelectItem key={v.value} value={v.value}>
            <span className="mr-2">{v.icon}</span>
            {v.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function CurrencySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {CURRENCIES.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            {c.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function InterestsInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="e.g. food tours, museums, hiking, photography, nightlife…"
      className="min-h-[72px] resize-none"
    />
  );
}

export function FieldWrap({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("space-y-1.5", className)}>{children}</div>;
}
