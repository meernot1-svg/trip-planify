"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MESSAGES = [
  "Packing your itinerary…",
  "Finding the best stays…",
  "Mapping out attractions…",
  "Plotting each day…",
  "Tallying up expenses…",
  "Adding a few hidden gems…",
  "Almost there…",
];

export function LoadingScreen() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % MESSAGES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center px-6 py-24 text-center">
      {/* Animated plane over a dashed route */}
      <div className="relative mb-8 h-28 w-full">
        <svg viewBox="0 0 300 120" className="h-full w-full">
          <path
            d="M20 90 Q 90 10 150 60 T 280 40"
            fill="none"
            stroke="oklch(0.78 0.08 190)"
            strokeWidth="2.5"
            className="animate-dash"
          />
          <circle cx="20" cy="90" r="5" fill="oklch(0.6 0.13 190)" />
          <circle cx="280" cy="40" r="5" fill="oklch(0.7 0.16 80)" />
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl"
          animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ✈️
        </motion.div>
      </div>

      <motion.h2
        key={idx}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold text-foreground"
      >
        {MESSAGES[idx]}
      </motion.h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Our AI travel planner is crafting your perfect trip. This usually takes 20–30 seconds
        — a little longer if the AI service is busy.
      </p>

      <div className="mt-6 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-primary"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
