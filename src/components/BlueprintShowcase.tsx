"use client";

import { useEffect, useState } from "react";
import { BLUEPRINTS } from "@/data/blueprints";

export default function BlueprintShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % BLUEPRINTS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const blueprint = BLUEPRINTS[index];

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div>
        <p className="font-label-bold text-label-bold uppercase tracking-widest text-white/50">
          Made with Our Masterfully Crafted
        </p>
        <h3
          key={index}
          className="blueprint-fade font-headline text-headline-md text-primary"
        >
          {blueprint.industry} Website Blueprint!
        </h3>
      </div>

      <div className="relative w-full max-w-sm aspect-[4/5]">
        <div className="absolute inset-0 translate-x-3 translate-y-4 -rotate-3 rounded-2xl bg-white/10 border border-white/10" />
        <div className="absolute inset-0 -translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-white/20 border border-white/10" />

        <div
          key={index}
          className="blueprint-fade absolute inset-0 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white p-6 text-left text-secondary shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              {blueprint.icon}
            </span>
            <span className="font-headline text-label-bold font-semibold">
              {blueprint.industry} Website Design Blueprint
            </span>
          </div>

          <ul className="space-y-1.5">
            {blueprint.sections.map((section) => (
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
              {blueprint.previewHeadline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
