import type { BudgetStyle, TripType } from "./types";

// Comprehensive world data (all ~195 countries, currencies, and cities) lives
// in ./countries.ts. It is re-exported here so the rest of the app can keep
// importing everything from "@/lib/travel-data".
export {
  COUNTRIES,
  COUNTRY_CURRENCY,
  ALL_CITIES,
  COUNTRY_DATA,
  currencyForCountry,
  citiesForCountry,
  type CountryEntry,
} from "./countries";

// Backwards-compatible alias: city autocomplete imports POPULAR_CITIES.
export { ALL_CITIES as POPULAR_CITIES } from "./countries";

export interface VehicleOption {
  value: string;
  label: string;
  icon: string; // emoji
}

export const VEHICLES: VehicleOption[] = [
  { value: "car", label: "Car", icon: "🚗" },
  { value: "bike", label: "Bike", icon: "🛵" },
  { value: "bus", label: "Bus", icon: "🚌" },
  { value: "train", label: "Train", icon: "🚆" },
  { value: "flight", label: "Flight", icon: "✈️" },
  { value: "own-vehicle", label: "Own Vehicle", icon: "🚙" },
];

export const INTER_LEG_TRANSPORT: VehicleOption[] = [
  { value: "flight", label: "Flight", icon: "✈️" },
  { value: "train", label: "Train", icon: "🚆" },
  { value: "bus", label: "Bus", icon: "🚌" },
  { value: "car", label: "Car / Road", icon: "🚗" },
  { value: "ferry", label: "Ferry / Boat", icon: "⛴️" },
];

export interface BudgetOption {
  value: BudgetStyle;
  label: string;
  icon: string;
  description: string;
}

export const BUDGET_STYLES: BudgetOption[] = [
  {
    value: "budget",
    label: "Budget",
    icon: "🎒",
    description: "Hostels, street food, free attractions",
  },
  {
    value: "mid-range",
    label: "Mid-range",
    icon: "🧳",
    description: "Comfortable hotels, sit-down meals",
  },
  {
    value: "luxury",
    label: "Luxury",
    icon: "💎",
    description: "Premium stays, fine dining, private tours",
  },
];

export interface TripTypeOption {
  value: TripType;
  label: string;
  emoji: string;
  description: string;
  gradient: string; // tailwind gradient classes
  ring: string; // ring/border color on hover
  accent: string; // accent text/bg
}

export const TRIP_TYPES: TripTypeOption[] = [
  {
    value: "national",
    label: "National Trip",
    emoji: "🏠",
    description: "Traveling within your own country",
    gradient: "from-emerald-400 to-teal-500",
    ring: "hover:border-emerald-400 hover:shadow-emerald-200",
    accent: "emerald",
  },
  {
    value: "international",
    label: "International Trip",
    emoji: "🌍",
    description: "Traveling to one foreign country",
    gradient: "from-amber-400 to-orange-500",
    ring: "hover:border-amber-400 hover:shadow-amber-200",
    accent: "amber",
  },
  {
    value: "multi-country",
    label: "Country-to-Country",
    emoji: "🗺️",
    description: "A multi-country journey across borders",
    gradient: "from-rose-400 to-pink-500",
    ring: "hover:border-rose-400 hover:shadow-rose-200",
    accent: "rose",
  },
];

// Display list for the (optional) editable currency selector.
export const CURRENCIES = [
  { code: "USD", label: "US Dollar ($)" },
  { code: "EUR", label: "Euro (€)" },
  { code: "GBP", label: "British Pound (£)" },
  { code: "INR", label: "Indian Rupee (₹)" },
  { code: "PKR", label: "Pakistani Rupee (₨)" },
  { code: "BDT", label: "Bangladeshi Taka (৳)" },
  { code: "AUD", label: "Australian Dollar (A$)" },
  { code: "CAD", label: "Canadian Dollar (C$)" },
  { code: "JPY", label: "Japanese Yen (¥)" },
  { code: "CNY", label: "Chinese Yuan (¥)" },
  { code: "CHF", label: "Swiss Franc (CHF)" },
  { code: "THB", label: "Thai Baht (฿)" },
  { code: "AED", label: "UAE Dirham (د.إ)" },
  { code: "SAR", label: "Saudi Riyal (﷼)" },
  { code: "MXN", label: "Mexican Peso ($)" },
  { code: "BRL", label: "Brazilian Real (R$)" },
  { code: "ZAR", label: "South African Rand (R)" },
  { code: "NGN", label: "Nigerian Naira (₦)" },
  { code: "EGP", label: "Egyptian Pound (£)" },
  { code: "TRY", label: "Turkish Lira (₺)" },
  { code: "RUB", label: "Russian Ruble (₽)" },
  { code: "IDR", label: "Indonesian Rupiah (Rp)" },
  { code: "MYR", label: "Malaysian Ringgit (RM)" },
  { code: "PHP", label: "Philippine Peso (₱)" },
  { code: "VND", label: "Vietnamese Dong (₫)" },
  { code: "KRW", label: "South Korean Won (₩)" },
  { code: "SGD", label: "Singapore Dollar (S$)" },
  { code: "NZD", label: "New Zealand Dollar (NZ$)" },
  { code: "SEK", label: "Swedish Krona (kr)" },
  { code: "NOK", label: "Norwegian Krone (kr)" },
  { code: "DKK", label: "Danish Krone (kr)" },
  { code: "PLN", label: "Polish Złoty (zł)" },
  { code: "CZK", label: "Czech Koruna (Kč)" },
  { code: "HUF", label: "Hungarian Forint (Ft)" },
  { code: "ILS", label: "Israeli Shekel (₪)" },
  { code: "ARS", label: "Argentine Peso ($)" },
  { code: "CLP", label: "Chilean Peso ($)" },
  { code: "COP", label: "Colombian Peso ($)" },
  { code: "PEN", label: "Peruvian Sol (S/)" },
];

/** Human-friendly label for a currency code, e.g. "Indian Rupee (₹)" or "BTN". */
export function currencyLabel(code: string): string {
  const found = CURRENCIES.find((c) => c.code === code);
  if (found) return found.label;
  // For currencies not in the curated list, derive a clean symbol via Intl.
  try {
    const parts = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
    }).formatToParts(0);
    const sym = parts.find((p) => p.type === "currency")?.value ?? "";
    // Intl returns the code itself (e.g. "BTN") when it has no symbol — avoid "BTN (BTN)".
    return sym && sym !== code ? `${code} (${sym})` : code;
  } catch {
    return code;
  }
}

export function vehicleLabel(value: string): string {
  return VEHICLES.find((v) => v.value === value)?.label ?? value;
}

export function vehicleIcon(value: string): string {
  return VEHICLES.find((v) => v.value === value)?.icon ?? "🧭";
}

export function budgetLabel(value: BudgetStyle): string {
  return BUDGET_STYLES.find((b) => b.value === value)?.label ?? value;
}

export function tripTypeLabel(value: TripType): string {
  return TRIP_TYPES.find((t) => t.value === value)?.label ?? value;
}
