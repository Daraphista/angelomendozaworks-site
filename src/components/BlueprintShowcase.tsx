"use client";

import { useEffect, useState } from "react";
import type { BlueprintCard } from "@/data/blueprints";

// Front card is white; the two behind it become solid brand plates
// (cobalt, lagoon) with their content hidden, like the Services visuals.
const DEPTH_STYLES = [
  "translate-x-0 translate-y-0 rotate-0 scale-100 z-30 bg-white",
  "translate-x-[-16px] translate-y-[12px] -rotate-6 scale-95 z-20 bg-cobalt",
  "translate-x-[18px] translate-y-[22px] rotate-7 scale-90 z-10 bg-lagoon",
];

export default function BlueprintShowcase({
  cards,
  kicker = "Built from my",
  titleSuffix,
  description,
  intervalMs = 3500,
  variant = "dark",
}: {
  cards: BlueprintCard[];
  kicker?: string;
  /** Heading reads "{niche} {titleSuffix}", e.g. "Law Website Blueprint". */
  titleSuffix: string;
  description?: string;
  intervalMs?: number;
  variant?: "dark" | "light";
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % cards.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [cards.length, intervalMs]);

  const active = cards[index];
  const dark = variant === "dark";
  const kickerColor = dark ? "text-white/60" : "text-secondary/60";
  const headingColor = dark ? "text-white" : "text-secondary";
  const accentColor = dark ? "text-lagoon" : "text-cobalt";
  const bodyColor = dark ? "text-white/75" : "text-on-surface-variant";

  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <div className="max-w-xl space-y-4">
        <p
          className={`font-mono text-[12px] uppercase tracking-widest ${kickerColor}`}
        >
          {kicker}
        </p>
        <h3
          className={`font-headline font-bold text-headline-md leading-tight ${headingColor}`}
        >
          <span
            key={index}
            className={`blueprint-fade inline-block ${accentColor}`}
          >
            {active.niche}
          </span>{" "}
          {titleSuffix}
        </h3>
        {description && (
          <p className={`font-body-md ${bodyColor}`}>{description}</p>
        )}
      </div>

      <div className="relative w-full max-w-sm aspect-[4/5.4]">
        {cards.map((card, i) => {
          const depth = (i - index + cards.length) % cards.length;
          const isFront = depth === 0;
          return (
            <div
              key={card.cardTitle}
              aria-hidden={!isFront}
              className={`absolute inset-0 overflow-hidden rounded-2xl shadow-2xl shadow-ink/30 transition-all duration-700 ease-in-out motion-reduce:transition-none ${DEPTH_STYLES[depth]}`}
            >
              <div
                className={`flex h-full flex-col gap-4 p-6 text-left text-secondary transition-opacity duration-500 motion-reduce:transition-none ${
                  isFront ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt">
                    <span className="material-symbols-outlined text-white">
                      {card.icon}
                    </span>
                  </span>
                  <span className="font-headline text-lg font-semibold leading-tight">
                    {card.cardTitle}
                  </span>
                </div>

                <ol className="flex-1 space-y-1.5">
                  {card.sections.map((section, n) => (
                    <li
                      key={section}
                      className="flex items-center gap-3 rounded-lg bg-cloud px-3 py-2 font-label-sm text-label-sm text-secondary"
                    >
                      <span className="w-5 font-mono text-[11px] text-cobalt">
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{section}</span>
                      <span className="h-1.5 w-8 rounded-full bg-lagoon" />
                    </li>
                  ))}
                </ol>

                <div className="relative overflow-hidden rounded-xl bg-ink p-4 text-white">
                  <span className="absolute inset-x-0 top-0 h-1 bg-lagoon" />
                  <p className="font-headline text-label-bold font-bold leading-snug">
                    {card.previewHeadline}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
