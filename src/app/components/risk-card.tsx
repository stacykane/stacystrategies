"use client";

import { useState } from "react";
import type { Threat } from "../data/threats";

const riskColors = {
  CRITICAL: {
    badge: "bg-red-700 text-white",
    accent: "text-red-700 dark:text-red-400",
  },
  "VERY HIGH": {
    badge: "bg-red-600 text-white",
    accent: "text-red-600 dark:text-red-400",
  },
  HIGH: {
    badge: "bg-orange-600 text-white",
    accent: "text-orange-600 dark:text-orange-400",
  },
  "MEDIUM-HIGH": {
    badge: "bg-amber-600 text-white",
    accent: "text-amber-600 dark:text-amber-400",
  },
};

export default function RiskCard({ threat }: { threat: Threat }) {
  const [expanded, setExpanded] = useState(false);
  const colors = riskColors[threat.riskLevel];

  return (
    <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden risk-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 md:p-6 cursor-pointer"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="text-base md:text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight">
                {threat.title}
              </h4>
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider ${colors.badge}`}
              >
                {threat.riskLevel}
              </span>
            </div>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              {threat.description}
            </p>
          </div>
          <svg
            className={`w-5 h-5 text-stone-400 flex-shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-5 border-t border-stone-100 dark:border-stone-800 pt-5">
          {/* Evidence */}
          <div>
            <h5 className={`text-[11px] font-bold tracking-widest uppercase mb-3 ${colors.accent}`}>
              Evidence & Direct Quotes
            </h5>
            <ul className="space-y-2">
              {threat.evidence.map((e, i) => (
                <li key={i} className="flex gap-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  <span className="text-stone-300 dark:text-stone-600 mt-0.5 flex-shrink-0">&bull;</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h5 className={`text-[11px] font-bold tracking-widest uppercase mb-3 ${colors.accent}`}>
              Sources — Click to Verify
            </h5>
            <div className="flex flex-wrap gap-2">
              {threat.sources.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
                >
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div>
            <h5 className={`text-[11px] font-bold tracking-widest uppercase mb-3 ${colors.accent}`}>
              Who Is Fighting This
            </h5>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {threat.organizations.map((org) => (
                <a
                  key={org.name}
                  href={`https://${org.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 p-3 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{org.name}</span>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{org.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Gaps */}
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 p-4">
            <h5 className="text-[11px] font-bold tracking-widest uppercase mb-3 text-red-700 dark:text-red-400">
              What&apos;s Still Missing — The Gaps
            </h5>
            <ul className="space-y-2">
              {threat.gaps.map((g, i) => (
                <li key={i} className="flex gap-2 text-sm text-red-800 dark:text-red-300 leading-relaxed">
                  <span className="text-red-400 dark:text-red-600 mt-0.5 flex-shrink-0">&#x26A0;</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
