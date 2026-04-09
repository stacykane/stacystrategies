"use client";

import { useState } from "react";
import CameraInput from "./components/camera-input";
import ScanningOverlay from "./components/scanning-overlay";
import ResultsList from "./components/results-list";
import type { ItemData } from "./components/item-card";

interface AnalyzeResponse {
  items: ItemData[];
  summary: {
    totalItems: number;
    totalEstimatedMargin: number;
    topPick: string;
  };
}

type AppState = "idle" | "scanning" | "results";

export default function ArbitragePage() {
  const [state, setState] = useState<AppState>("idle");
  const [results, setResults] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleCapture = async (base64: string, mediaType: string) => {
    setError(null);
    setPreview(`data:${mediaType};base64,${base64}`);
    setState("scanning");

    try {
      const res = await fetch("/api/arbitrage/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, mediaType }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Analysis failed (${res.status})`);
      }

      const data: AnalyzeResponse = await res.json();
      setResults(data);
      setState("results");
    } catch (err) {
      console.error("Scan error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setState("idle");
    }
  };

  const handleScanAgain = () => {
    setState("idle");
    setResults(null);
    setPreview(null);
    setError(null);
  };

  return (
    <div className="flex flex-col min-h-dvh">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">$</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-none">
                Arbitrage
              </h1>
              <p className="text-[10px] text-stone-400 dark:text-stone-500 tracking-wide">
                Snap. Price. Profit.
              </p>
            </div>
          </div>

          {state === "results" && (
            <button
              onClick={handleScanAgain}
              className="text-sm font-medium text-green-600 dark:text-green-400 py-1.5 px-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors"
            >
              New Scan
            </button>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
        {/* Scanning overlay */}
        {state === "scanning" && <ScanningOverlay />}

        {/* Idle state - camera input */}
        {state === "idle" && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
            {/* Hero text */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                Find Hidden Treasure
              </h2>
              <p className="text-stone-500 dark:text-stone-400 max-w-xs mx-auto leading-relaxed">
                Take a photo of any items and instantly see what they&apos;re worth on eBay, Amazon, and specialty marketplaces.
              </p>
            </div>

            <CameraInput onCapture={handleCapture} />

            {/* Error message */}
            {error && (
              <div className="w-full max-w-sm rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 p-4">
                <p className="text-sm text-red-700 dark:text-red-400 text-center">
                  {error}
                </p>
              </div>
            )}

            {/* How it works */}
            <div className="w-full max-w-sm pt-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-4 text-center">
                How It Works
              </h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 dark:text-green-400 text-lg">1</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">Snap a photo</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 dark:text-green-400 text-lg">2</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">AI identifies items</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 dark:text-green-400 text-lg">3</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">See profit margins</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results state */}
        {state === "results" && results && (
          <div>
            {/* Photo preview */}
            {preview && (
              <div className="mb-4 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800">
                <img
                  src={preview}
                  alt="Scanned items"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            <ResultsList data={results} onScanAgain={handleScanAgain} />
          </div>
        )}
      </main>
    </div>
  );
}
