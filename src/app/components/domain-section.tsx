"use client";

import type { ThreatDomain } from "../data/threats";
import RiskCard from "./risk-card";

const domainIcons: Record<string, string> = {
  scales: "\u2696\uFE0F",
  building: "\uD83C\uDFDB\uFE0F",
  shield: "\uD83D\uDEE1\uFE0F",
  megaphone: "\uD83D\uDCE2",
  gavel: "\u2692\uFE0F",
  flag: "\uD83D\uDEA9",
};

export default function DomainSection({ domain }: { domain: ThreatDomain }) {
  const threatCount = domain.threats.length;
  const criticalCount = domain.threats.filter((t) => t.riskLevel === "CRITICAL").length;
  const veryHighCount = domain.threats.filter((t) => t.riskLevel === "VERY HIGH").length;

  return (
    <section id={domain.id} className="scroll-mt-20">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{domainIcons[domain.icon] || ""}</span>
          <div>
            <span className="text-xs font-mono text-stone-400 tracking-wider">
              DOMAIN {domain.number} &middot; {domain.phase.toUpperCase()}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
              {domain.title}
            </h2>
          </div>
        </div>
        <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed max-w-3xl mt-2">
          {domain.description}
        </p>
        <div className="flex gap-3 mt-3 text-xs">
          <span className="text-stone-400">
            {threatCount} threat{threatCount !== 1 ? "s" : ""}
          </span>
          {criticalCount > 0 && (
            <span className="text-red-600 dark:text-red-400 font-medium">
              {criticalCount} critical
            </span>
          )}
          {veryHighCount > 0 && (
            <span className="text-red-500 dark:text-red-400 font-medium">
              {veryHighCount} very high
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {domain.threats.map((threat) => (
          <RiskCard key={threat.id} threat={threat} />
        ))}
      </div>
    </section>
  );
}
