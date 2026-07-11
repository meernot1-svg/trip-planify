// Core type definitions for Trip Planify

export type TripType = "national" | "international" | "multi-country";

export type BudgetStyle = "budget" | "mid-range" | "luxury";

export interface TripLeg {
  id: string;
  country: string;
  city: string;
  duration: number;
  vehicle: string;
  transportToNext?: string; // mode of transport to the next leg
}

export interface PlanInput {
  tripType: TripType;
  budgetStyle: BudgetStyle;
  travelers: number;
  startDate: string; // ISO date string or ""
  interests: string; // free text preferences
  homeCurrency: string; // e.g. "USD"
  // national / international
  city?: string;
  country?: string;
  duration?: number;
  vehicle?: string;
  // national: origin city (traveling FROM origin TO destination)
  originCity?: string;
  // multi-country
  legs?: TripLeg[];
}

export interface Accommodation {
  name: string;
  type: string; // Hotel, Guesthouse, Hostel, Resort...
  pricePerNight: string; // e.g. "$80-$120"
  pricePerNightLow: number; // USD low
  pricePerNightHigh: number; // USD high
  rating: number; // 0-5
  description: string;
  highlights: string[];
}

export interface Place {
  name: string;
  type: string; // Landmark, Museum, Nature...
  description: string;
  duration: string; // e.g. "2-3 hrs"
  bestTime?: string; // e.g. "Morning"
  image?: string; // real photo URL (added post-generation)
}

export interface HiddenGem {
  name: string;
  type: string;
  description: string;
  why: string;
}

export interface ItinerarySlot {
  time: string; // e.g. "9:00 AM"
  activity: string;
  description: string;
}

export interface DepartureInfo {
  time: string; // e.g. "8:00 AM"
  from: string; // e.g. "Los Angeles" (origin city)
  note: string; // e.g. "3hr drive to San Francisco"
}

export interface MealStops {
  breakfast: string; // e.g. "Blue Bottle Coffee — downtown"
  lunch: string; // e.g. " Ferry Building Marketplace"
  dinner: string; // e.g. "Fisherman's Wharf seafood"
}

export interface ItineraryDay {
  day: number;
  title: string;
  location?: string; // country/city for multi-country
  departure?: DepartureInfo; // when/where you depart that day (esp. Day 1 from origin)
  morning: ItinerarySlot;
  afternoon: ItinerarySlot;
  evening: ItinerarySlot;
  meals?: MealStops; // recommended breakfast/lunch/dinner stops
}

export interface ExpenseCategory {
  category: string; // Travel, Stay, Food, Activities, Misc
  amount: number; // home currency (USD)
  percentage: number;
  note?: string;
}

export interface InterCountryTransport {
  from: string;
  to: string;
  mode: string;
  estTime: string;
  estCost: string;
}

export interface CountryExpense {
  country: string;
  total: number;
  days: number;
}

export interface WeatherInfo {
  condition: string;
  tempRange: string;
  note: string;
}

export interface GeneratedPlan {
  tripType: TripType;
  summary: {
    destination: string;
    destinations?: string[];
    duration: number;
    durationLabel: string;
    dates: string;
    vehicle: string;
    budgetStyle: string;
    tripTypeLabel: string;
    travelers: number;
    origin?: string; // for national: the origin city
  };
  accommodations: Accommodation[];
  placesToVisit: {
    topPicks: Place[];
    hiddenGems: HiddenGem[];
  };
  itinerary: ItineraryDay[];
  expenses: {
    categories: ExpenseCategory[];
    total: number;
    currency: string;
    localCurrency?: string;
    exchangeRate?: number;
    totalLocal?: number;
  };
  // international extras
  visaNote?: string;
  currencyNote?: string;
  // multi-country extras
  countryBreakdown?: CountryExpense[];
  interCountryTransport?: InterCountryTransport[];
  // nice-to-have
  weather?: WeatherInfo;
  tips?: string[];
  // meta
  input: PlanInput;
  createdAt: string;
}

export interface SavedTrip {
  id: string;
  plan: GeneratedPlan;
  savedAt: string;
}
