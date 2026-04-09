"use client";

interface MarketplaceBadgeProps {
  name: string;
  estimatedPrice: number;
  netPrice: number;
  feePct: number;
}

const marketplaceColors: Record<string, string> = {
  eBay: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Amazon: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  Etsy: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  Chairish: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  Reverb: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  "1stDibs": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Poshmark: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  Mercari: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  "Ruby Lane": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  Invaluable: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  "Heritage Auctions": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  AbeBooks: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  Discogs: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-300",
  StockX: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Grailed: "bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-300",
};

const defaultColor = "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";

export default function MarketplaceBadge({ name, estimatedPrice, netPrice, feePct }: MarketplaceBadgeProps) {
  const colorClass = marketplaceColors[name] || defaultColor;

  return (
    <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-stone-50 dark:bg-stone-800/50">
      <div className="flex items-center gap-2">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colorClass}`}>
          {name}
        </span>
        <span className="text-xs text-stone-400 dark:text-stone-500">
          {feePct}% fee
        </span>
      </div>
      <div className="text-right">
        <span className="text-base font-bold text-stone-900 dark:text-stone-100">
          ${netPrice.toFixed(0)}
        </span>
        <span className="text-xs text-stone-400 dark:text-stone-500 ml-1.5">
          net of ${estimatedPrice.toFixed(0)}
        </span>
      </div>
    </div>
  );
}
