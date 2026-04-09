"use client";

import { useState } from "react";
import MarketplaceBadge from "./marketplace-badge";

interface Marketplace {
  name: string;
  estimatedPrice: number;
  feePct: number;
  netPrice: number;
}

export interface ItemData {
  name: string;
  category: string;
  condition: string;
  description: string;
  estimatedPurchasePrice: number;
  marketplaces: Marketplace[];
  bestMarketplace: string;
  bestNetPrice: number;
  margin: number;
  marginPct: number;
  quickTip: string;
}

function getMarginColor(marginPct: number) {
  if (marginPct >= 200) return { bg: "bg-green-50 dark:bg-green-950/30", text: "text-green-700 dark:text-green-400", badge: "bg-green-600 text-white" };
  if (marginPct >= 100) return { bg: "bg-green-50/60 dark:bg-green-950/20", text: "text-green-600 dark:text-green-400", badge: "bg-green-500 text-white" };
  if (marginPct >= 50) return { bg: "bg-emerald-50/40 dark:bg-emerald-950/15", text: "text-emerald-600 dark:text-emerald-400", badge: "bg-emerald-500 text-white" };
  if (marginPct > 0) return { bg: "", text: "text-yellow-600 dark:text-yellow-400", badge: "bg-yellow-500 text-white" };
  return { bg: "", text: "text-red-500 dark:text-red-400", badge: "bg-red-500 text-white" };
}

const conditionColors: Record<string, string> = {
  Excellent: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "Very Good": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Good: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Fair: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  Poor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

export default function ItemCard({ item, rank }: { item: ItemData; rank: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors = getMarginColor(item.marginPct);
  const conditionColor = conditionColors[item.condition] || conditionColors["Good"];

  return (
    <div className={`rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden ${colors.bg}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 cursor-pointer"
      >
        <div className="flex items-start gap-3">
          {/* Rank number */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
            <span className="text-sm font-bold text-stone-500 dark:text-stone-400">
              {rank}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Item name + condition */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 leading-tight">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${conditionColor}`}>
                    {item.condition}
                  </span>
                  <span className="text-xs text-stone-400 dark:text-stone-500">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Chevron */}
              <svg
                className={`w-5 h-5 text-stone-400 flex-shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Key numbers */}
            <div className="mt-3 flex items-center gap-4">
              <div>
                <span className="text-xs text-stone-400 dark:text-stone-500 block">Buy for</span>
                <span className="text-lg font-bold text-stone-700 dark:text-stone-300">
                  ${item.estimatedPurchasePrice.toFixed(0)}
                </span>
              </div>
              <div className="text-stone-300 dark:text-stone-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div>
                <span className="text-xs text-stone-400 dark:text-stone-500 block">Sell on {item.bestMarketplace}</span>
                <span className={`text-lg font-bold ${colors.text}`}>
                  ${item.bestNetPrice.toFixed(0)}
                </span>
              </div>
              <div className="ml-auto">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${colors.badge}`}>
                  +${item.margin.toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-stone-100 dark:border-stone-800 pt-4 ml-11">
          {/* Description */}
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {item.description}
          </p>

          {/* All marketplace prices */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase mb-2 text-stone-400 dark:text-stone-500">
              Where to Sell
            </h4>
            <div className="space-y-1.5">
              {item.marketplaces.map((mp) => (
                <MarketplaceBadge
                  key={mp.name}
                  name={mp.name}
                  estimatedPrice={mp.estimatedPrice}
                  netPrice={mp.netPrice}
                  feePct={mp.feePct}
                />
              ))}
            </div>
          </div>

          {/* Margin breakdown */}
          <div className="rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/40 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-800 dark:text-green-300">
                Profit Margin
              </span>
              <span className={`text-lg font-bold ${colors.text}`}>
                {item.marginPct.toFixed(0)}%
              </span>
            </div>
            <div className="mt-1 text-xs text-green-600 dark:text-green-400">
              Buy at ${item.estimatedPurchasePrice.toFixed(0)} &rarr; Sell for ${item.bestNetPrice.toFixed(0)} net on {item.bestMarketplace}
            </div>
          </div>

          {/* Quick tip */}
          <div className="flex gap-2 items-start">
            <span className="text-amber-500 flex-shrink-0 mt-0.5">&#x1F4A1;</span>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {item.quickTip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
