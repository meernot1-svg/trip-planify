"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, History, Plane, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { HomeScreen } from "./HomeScreen";
import { NationalForm } from "./forms/NationalForm";
import { InternationalForm } from "./forms/InternationalForm";
import { MultiCountryForm } from "./forms/MultiCountryForm";
import { LoadingScreen } from "./LoadingScreen";
import { PlanResults } from "./results/PlanResults";
import { TripHistorySheet } from "./TripHistorySheet";
import { loadSavedTrips } from "@/lib/plan-storage";
import { TRIP_TYPES } from "@/lib/travel-data";
import type { GeneratedPlan, ItineraryDay, PlanInput, SavedTrip, TripType } from "@/lib/types";

type Step = "home" | "form" | "loading" | "results";

/** Safely parse a fetch response as JSON, even when the server returns an HTML
 *  error page (e.g. a 500/504 from a timeout). Returns {ok:false,error} then. */
async function parseJsonSafe<T = any>(res: Response): Promise<{ ok: true; data: T } | { ok: false; error: string; status: number }> {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();
  if (!ct.includes("application/json") || !text.trim().startsWith("{")) {
    // HTML error page or empty body — surface a friendly message.
    if (res.status === 504 || res.status === 502) {
      return { ok: false, status: res.status, error: "The plan took too long to generate. Please try again — it's often faster on the second attempt." };
    }
    return {
      ok: false,
      status: res.status,
      error: res.ok
        ? "Received an unexpected response from the server. Please try again."
        : `Server error (${res.status}). Please try again in a moment.`,
    };
  }
  try {
    const data = JSON.parse(text) as T;
    return { ok: true, data };
  } catch {
    return { ok: false, status: res.status, error: "Could not read the server response. Please try again." };
  }
}

export function TripPlanifyApp() {
  const [step, setStep] = React.useState<Step>("home");
  const [tripType, setTripType] = React.useState<TripType>("national");
  const [plan, setPlan] = React.useState<GeneratedPlan | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [regeneratingDay, setRegeneratingDay] = React.useState<number | null>(null);

  const [history, setHistory] = React.useState<SavedTrip[]>([]);
  const [historyOpen, setHistoryOpen] = React.useState(false);

  React.useEffect(() => {
    setHistory(loadSavedTrips());
  }, []);

  const handleSelectType = (type: TripType) => {
    setTripType(type);
    setError(null);
    setStep("form");
  };

  const handleGenerate = async (input: PlanInput) => {
    setSubmitting(true);
    setError(null);
    setStep("loading");
    // Abort if the request takes longer than 100s. The server retries on
    // timeouts/rate-limits, so we allow generous time before aborting.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 100000);
    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
        signal: controller.signal,
      });
      const parsed = await parseJsonSafe<{ plan?: GeneratedPlan; error?: string }>(res);
      if (!parsed.ok || !parsed.data.plan) {
        const msg = parsed.ok ? parsed.data.error || "Could not generate your plan." : parsed.error;
        throw new Error(msg || "Could not generate your plan. Please try again.");
      }
      setPlan(parsed.data.plan);
      setStep("results");
    } catch (err) {
      const aborted = err instanceof DOMException && err.name === "AbortError";
      const msg = aborted
        ? "The AI is taking longer than usual. Please try again — it's often faster on the second attempt."
        : err instanceof Error
        ? err.message
        : "Something went wrong.";
      setError(msg);
      setStep("form");
    } finally {
      clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  const handleRegenerateDay = async (day: number) => {
    if (!plan) return;
    setRegeneratingDay(day);
    try {
      const res = await fetch("/api/regenerate-day", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, day }),
      });
      const parsed = await parseJsonSafe<{ day?: ItineraryDay; error?: string }>(res);
      if (!parsed.ok || !parsed.data.day) {
        toast({ title: "Could not refresh that day", description: parsed.ok ? parsed.data.error : parsed.error });
        return;
      }
      setPlan({
        ...plan,
        itinerary: plan.itinerary.map((d) => (d.day === day ? parsed.data.day! : d)),
      });
    } catch {
      toast({ title: "Could not refresh that day", description: "Please try again." });
    } finally {
      setRegeneratingDay(null);
    }
  };

  const handleNewTrip = () => {
    setPlan(null);
    setError(null);
    setStep("home");
  };

  const handleLoadTrip = (t: SavedTrip) => {
    setPlan(t.plan);
    setTripType(t.plan.tripType);
    setHistoryOpen(false);
    setStep("results");
  };

  const meta = TRIP_TYPES.find((t) => t.value === tripType);

  return (
    <div className="flex min-h-screen flex-col travel-bg">
      {/* Header */}
      <header className="no-print sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <button onClick={handleNewTrip} className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-sm">
              <Plane className="h-4 w-4" />
            </span>
            <div className="text-left">
              <div className="font-display text-sm font-extrabold leading-none tracking-tight">Trip Planify</div>
              <div className="text-[10px] text-muted-foreground">AI travel planner</div>
            </div>
          </button>
          {meta && step !== "home" ? (
            <span className="hidden items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
              {meta.emoji} {meta.label}
            </span>
          ) : null}
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHistoryOpen(true)}
              disabled={history.length === 0}
            >
              <History className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">Saved</span>
              {history.length > 0 ? (
                <span className="ml-1 rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground">
                  {history.length}
                </span>
              ) : null}
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {step === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HomeScreen
                onSelect={handleSelectType}
                onOpenHistory={() => setHistoryOpen(true)}
                historyCount={history.length}
              />
            </motion.div>
          ) : step === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {error ? (
                <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6">
                  <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold">Couldn&apos;t generate your plan</p>
                      <p className="mt-0.5 text-destructive/90">{error}</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 shrink-0 text-destructive hover:text-destructive"
                      onClick={() => setError(null)}
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ) : null}
              {tripType === "national" ? (
                <NationalForm onBack={handleNewTrip} onGenerate={handleGenerate} submitting={submitting} />
              ) : tripType === "international" ? (
                <InternationalForm onBack={handleNewTrip} onGenerate={handleGenerate} submitting={submitting} />
              ) : (
                <MultiCountryForm onBack={handleNewTrip} onGenerate={handleGenerate} submitting={submitting} />
              )}
            </motion.div>
          ) : step === "loading" ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <LoadingScreen />
            </motion.div>
          ) : plan ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PlanResults
                plan={plan}
                onNewTrip={handleNewTrip}
                onSaved={() => setHistory(loadSavedTrips())}
                onRegenerateDay={handleRegenerateDay}
                regeneratingDay={regeneratingDay}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      {/* Footer (sticky to bottom) */}
      <footer className="no-print mt-auto border-t border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            {/* Brand + disclaimer */}
            <div className="max-w-md">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <strong className="text-foreground">Trip Planify</strong>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                AI-generated travel plans — stays, sights, day-by-day itinerary & expenses in seconds.
                Verify prices &amp; timings before booking. See{" "}
                <a href="/disclaimer" className="text-primary hover:underline">Disclaimer</a>.
              </p>
            </div>
            {/* Trust + content links */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
              <a href="/pakistan-trip-planner" className="text-muted-foreground hover:text-foreground hover:underline">Pakistan Trip Planner</a>
              <a href="/about" className="text-muted-foreground hover:text-foreground hover:underline">About</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground hover:underline">Contact</a>
              <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground hover:underline">Privacy Policy</a>
              <a href="/disclaimer" className="text-muted-foreground hover:text-foreground hover:underline">Disclaimer</a>
              <a href="/guides/best-5-day-trip-ideas-within-pakistan" className="text-muted-foreground hover:text-foreground hover:underline">Pakistan Trips</a>
              <a href="/guides/how-to-plan-international-trip-with-ai" className="text-muted-foreground hover:text-foreground hover:underline">International Guide</a>
              <a href="/guides/pakistan-to-dubai-trip-guide" className="text-muted-foreground hover:text-foreground hover:underline">Pakistan to Dubai</a>
              <a href="/guides/multi-country-trip-planning-guide" className="text-muted-foreground hover:text-foreground hover:underline">Multi-Country Guide</a>
            </div>
          </div>
          <div className="mt-4 border-t border-border/40 pt-3 text-center text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Trip Planify — Free AI Travel Planner · No login required
          </div>
        </div>
      </footer>

      <TripHistorySheet
        open={historyOpen}
        onOpenChange={setHistoryOpen}
        trips={history}
        onTripsChange={setHistory}
        onLoad={handleLoadTrip}
      />
    </div>
  );
}
