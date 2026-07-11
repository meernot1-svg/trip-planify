import type { GeneratedPlan, SavedTrip } from "./types";

const STORAGE_KEY = "trip-planify:history";
const MAX_HISTORY = 12;

export function loadSavedTrips(): SavedTrip[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedTrip[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveTrip(plan: GeneratedPlan): SavedTrip {
  if (typeof window === "undefined") {
    return { id: "", plan, savedAt: new Date().toISOString() };
  }
  const trips = loadSavedTrips();
  const entry: SavedTrip = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    plan,
    savedAt: new Date().toISOString(),
  };
  const next = [entry, ...trips].slice(0, MAX_HISTORY);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return entry;
}

export function deleteTrip(id: string): SavedTrip[] {
  if (typeof window === "undefined") return [];
  const trips = loadSavedTrips().filter((t) => t.id !== id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  return trips;
}

export function clearTrips(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

// Keep the alias used across components
export { saveTrip as savePlan, loadSavedTrips as loadTrips };
