"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, History, MapPin, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TRIP_TYPES } from "@/lib/travel-data";
import {
  FEATURED_DESTINATIONS,
  HERO_IMAGES,
  TRIP_CARD_IMAGES,
} from "@/lib/destination-images";
import type { TripType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface HomeScreenProps {
  onSelect: (type: TripType) => void;
  onOpenHistory: () => void;
  historyCount: number;
  onPickDestination?: (city: string, country: string) => void;
}

export function HomeScreen({ onSelect, onOpenHistory, historyCount }: HomeScreenProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      {/* ===== HERO ===== */}
      <section className="relative mt-4 overflow-hidden rounded-3xl border border-teal-100 shadow-xl sm:mt-6">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGES[0].url}
            alt={HERO_IMAGES[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/75 to-cyan-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Animated floating accents */}
        <motion.div
          className="absolute right-8 top-10 text-5xl drop-shadow-lg sm:text-6xl"
          animate={{ y: [0, -12, 0], rotate: [-6, 4, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✈️
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-3xl opacity-80"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🧳
        </motion.div>

        {/* Content */}
        <div className="relative px-6 py-14 text-white sm:px-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered itineraries in seconds
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-6xl"
          >
            <span className="font-display">Free AI Trip Planner</span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
              for Pakistan &amp; the World
            </span>
            <span className="ml-2">🌍</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-xl text-sm text-white/90 sm:text-lg"
          >
            Plan your perfect trip in seconds with AI. National, international, and country-to-country
            itineraries — complete with where to stay, where to visit, a day-by-day schedule with
            departure times and meal stops, and an expense breakdown in your local currency. Free,
            no login required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              onClick={() => onSelect("national")}
              className="bg-white text-teal-900 hover:bg-white/90"
            >
              <Compass className="mr-2 h-4 w-4" />
              Start planning
            </Button>
            {historyCount > 0 ? (
              <Button
                variant="outline"
                size="lg"
                onClick={onOpenHistory}
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <History className="mr-2 h-4 w-4" />
                Saved trips ({historyCount})
              </Button>
            ) : null}
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-2 text-xs text-white/85"
          >
            {["🏨 Stays", "📍 Attractions", "🗓️ Day-by-day", "💰 Expenses", "🌤️ Weather"].map((t) => (
              <span key={t} className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TRIP TYPE SELECTOR ===== */}
      <section className="mt-12 sm:mt-16">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Choose your trip type</h2>
            <p className="text-sm text-muted-foreground">Each path generates a tailored plan.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRIP_TYPES.map((t, idx) => {
            const img =
              t.value === "national"
                ? TRIP_CARD_IMAGES.national
                : t.value === "international"
                ? TRIP_CARD_IMAGES.international
                : TRIP_CARD_IMAGES.multi;
            return (
              <motion.button
                key={t.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelect(t.value)}
                className="group relative block overflow-hidden rounded-2xl text-left shadow-md"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden sm:h-60">
                  <Image
                    src={img}
                    alt={t.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-t opacity-80", t.gradient)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Emoji badge */}
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-2xl backdrop-blur-md">
                    {t.emoji}
                  </div>
                </div>
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold">{t.label}</h3>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-sm text-white/90">{t.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section className="mt-14 sm:mt-20">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Popular destinations</h2>
            <p className="text-sm text-muted-foreground">
              Need inspiration? Tap a place to start a national-style plan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURED_DESTINATIONS.map((d, idx) => (
            <motion.button
              key={d.city}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => onSelect("national")}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl text-left shadow-sm"
            >
              <Image
                src={d.image}
                alt={`${d.city}, ${d.country}`}
                fill
                sizes="(max-width: 640px) 50vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <div className="flex items-center gap-1 text-[10px] text-white/80">
                  <MapPin className="h-2.5 w-2.5" /> {d.country}
                </div>
                <div className="font-display text-base font-bold leading-tight">{d.city}</div>
                <div className="mt-0.5 text-[10px] text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                  {d.blurb}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="mt-14 sm:mt-20">
        <h2 className="font-display mb-2 text-center text-2xl font-bold sm:text-3xl">
          How it works
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-center text-sm text-muted-foreground">
          Plan a complete trip in three simple steps — no signup, no fees, no data stored.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              n: "1",
              t: "Pick a trip type",
              d: "Choose National (within your country), International (one foreign country), or Country-to-Country (multiple countries in one journey). Each mode is tailored to the kind of trip you're planning.",
              icon: "🧭",
            },
            {
              n: "2",
              t: "Fill a short form",
              d: "Enter your origin and destination cities, trip duration, mode of transport, and budget style (Budget, Mid-range, or Luxury). The currency is auto-detected from your destination country.",
              icon: "📝",
            },
            {
              n: "3",
              t: "Get your plan",
              d: "Receive a complete plan in ~15 seconds: hotel suggestions, places to visit with real photos, a day-by-day itinerary with departure times and meal stops, and a full expense breakdown. Download as PDF or share.",
              icon: "✨",
            },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full gap-0 p-5">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {s.icon}
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <span className="font-semibold">{s.t}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FAQ SECTION (SEO) ===== */}
      <section className="mt-14 sm:mt-20">
        <h2 className="font-display mb-6 text-center text-2xl font-bold sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mx-auto max-w-2xl space-y-4">
          {[
            {
              q: "Is Trip Planify free?",
              a: "Yes — Trip Planify is 100% free. There are no fees, no subscriptions, and no hidden charges. You can generate unlimited travel plans without paying anything.",
            },
            {
              q: "Do I need to sign up or create an account?",
              a: "No. Trip Planify requires no login and no account. Just pick a trip type, fill the form, and get your plan. Your saved trips are stored in your browser's local storage, not on a server.",
            },
            {
              q: "How does the AI generate my travel plan?",
              a: "We send your form inputs (cities, dates, budget, vehicle) to an AI model that generates a structured plan — including accommodations, attractions, a day-by-day itinerary with realistic travel times and meal stops, and an expense breakdown in your local currency.",
            },
            {
              q: "Are the prices and timings accurate?",
              a: "The AI provides realistic estimates based on general knowledge, but prices, timings, and availability can change. Always verify details independently before booking. See our Disclaimer for more.",
            },
            {
              q: "Can I plan a trip within Pakistan?",
              a: "Yes! Trip Planify supports all 204 countries including Pakistan. Select 'National Trip', choose Pakistan, enter your from/to cities (e.g. Karachi to Islamabad), and get a plan with expenses in Pakistani Rupee (₨).",
            },
            {
              q: "Does it work on mobile?",
              a: "Yes, Trip Planify is fully mobile-responsive. You can plan trips on your phone or tablet — the layout adapts to any screen size.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Card className="gap-0 p-4">
                <h3 className="font-semibold text-foreground">{item.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="mt-14 mb-8 sm:mt-20">
        <Card className="gap-0 border-0 bg-gradient-to-r from-teal-50 to-amber-50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-around gap-6 text-center">
            <Stat value="3" label="Trip types" />
            <Stat value="50+" label="Destinations" />
            <Stat value="< 30s" label="Plan generation" />
            <Stat value="∞" label="Saved trips" />
          </div>
        </Card>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold text-teal-700 sm:text-4xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
