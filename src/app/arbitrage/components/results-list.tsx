"use client";

import ItemCard from "./item-card";
import type { ItemData } from "./item-card";

interface AnalyzeResponse {
  items: ItemData[];
  summary: {
    totalItems: number;
    totalEstimatedMargin: number;
    topPick: string;
  };
}

interface ResultsListProps {
  data: AnalyzeResponse;
  onScanAgain: () => void;
}

export default function ResultsList({ data, onScanAgain }: ResultsListProps) {
  const { items, summary } = data;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-12 px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
          <svg className="w-10 h-10 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-2">
            No sellable items found
          </h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xs leading-relaxed">
            Try a clearer photo with visible items like books, art, jewelry, electronics, or collectibles.
          </p>
        </div>
        <button
          onClick={onScanAgain}
          className="mt-2 px-8 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-base transition-colors"
        >
          Scan Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Summary header */}
      <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-green-700 dark:text-green-400 font-medium">
              Found {summary.totalItems} item{summary.totalItems !== 1 ? "s" : ""}
            </p>
            <p className="text-2xl font-bold text-green-800 dark:text-green-300 mt-0.5">
              ${summary.totalEstimatedMargin.toFixed(0)} potential profit
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-green-600 dark:text-green-500">Top pick</p>
            <p className="text-sm font-bold text-green-800 dark:text-green-300 max-w-[140px] truncate">
              {summary.topPick}
            </p>
          </div>
        </div>
      </div>

      {/* Item cards */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} rank={index + 1} />
        ))}
      </div>

      {/* Scan again */}
      <div className="pt-4 pb-8">
        <button
          onClick={onScanAgain}
          className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-lg transition-colors shadow-lg shadow-green-600/20"
        >
          Scan More Items
        </button>
      </div>
    </div>
  );
}
