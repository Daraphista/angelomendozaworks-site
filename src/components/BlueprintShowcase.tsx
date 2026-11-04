"use client";

import { useEffect, useState } from "react";
import type { BlueprintCard } from "@/data/blueprints";

const DEPTH_STYLES = [
  "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 z-30",
  "translate-x-[-16px] translate-y-[12px] -rotate-6 scale-95 opacity-70 z-20",
  "translate-x-[18px] translate-y-[22px] rotate-7 scale-90 opacity-40 z-10",
];

export default function BlueprintShowcase({
  cards,
  kicker = "Built from my blueprints",
  intervalMs = 3500,
  variant = "dark",
}: {
  cards: BlueprintCard[];
  kicker?: string;
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
  const kickerColor =
    variant === "dark" ? "text-white/60" : "text-secondary/60";
  const headingColor = variant === "dark" ? "text-primary" : "text-cobalt";
  const cardBorder =
    variant === "dark" ? "border-white/10" : "border-secondary/10";

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div>
        <p
          className={`font-mono text-[12px] uppercase tracking-widest ${kickerColor}`}
        >
          {kicker}
        </p>
        <h3
          key={index}
          className={`blueprint-fade font-headline text-headline-md ${headingColor}`}
        >
          {active.heading}
        </h3>
      </div>

      <div className="relative w-full max-w-sm aspect-[4/5]">
        {cards.map((card, i) => {
          const depth = (i - index + cards.length) % cards.length;
          return (
            <div
              key={card.cardTitle}
              className={`absolute inset-0 flex flex-col gap-4 rounded-2xl border ${cardBorder} bg-white p-6 text-left text-secondary shadow-2xl transition-all duration-700 ease-in-out ${DEPTH_STYLES[depth]}`}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cobalt">
                  {card.icon}
                </span>
                <span className="font-headline text-label-bold font-semibold">
                  {card.cardTitle}
                </span>
              </div>

              <ul className="space-y-1.5">
                {card.sections.map((section) => (
                  <li
                    key={section}
                    className="rounded-md bg-surface-container px-3 py-1.5 text-center font-label-sm text-label-sm text-on-surface-variant"
                  >
                    {section}
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-lg bg-secondary p-4 text-white">
                <p className="font-headline text-label-bold font-bold leading-snug">
                  {card.previewHeadline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
