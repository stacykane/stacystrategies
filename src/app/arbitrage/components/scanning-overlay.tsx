"use client";

import { useState, useEffect } from "react";

export default function ScanningOverlay() {
  const [phase, setPhase] = useState(0);

  const phases = [
    "Identifying items...",
    "Estimating values...",
    "Finding best marketplaces...",
    "Calculating margins...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p < phases.length - 1 ? p + 1 : p));
    }, 1800);
    return () => clearInterval(interval);
  }, [phases.length]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 dark:bg-stone-950/95 backdrop-blur-sm">
      {/* Pulsing scanner animation */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 rounded-full bg-green-200 dark:bg-green-800/40 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-700 dark:text-green-400">$</span>
          </div>
        </div>
        {/* Scanning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-green-500/30 animate-ping" />
      </div>

      {/* Phase text */}
      <p className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-3">
        {phases[phase]}
      </p>

      {/* Progress dots */}
      <div className="flex gap-2">
        {phases.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
              i <= phase
                ? "bg-green-500"
                : "bg-stone-200 dark:bg-stone-700"
            }`}
          />
        ))}
      </div>

      <p className="mt-6 text-sm text-stone-400 dark:text-stone-500">
        This usually takes 3-5 seconds
      </p>
    </div>
  );
}
