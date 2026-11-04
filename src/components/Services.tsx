"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Wave from "@/components/Wave";

const SERVICES = [
  {
    visual: "sites",
    title: "Websites & Web Apps",
    description:
      "Custom-built, not templated. Fast, conversion-focused sites and web apps designed to work as hard as you do. No drag-and-drop shortcuts, no bloated page builders.",
  },
  {
    visual: "ads",
    title: "Paid Ads & Growth",
    description:
      "Google and Meta campaigns built on data, not guesswork. I manage spend like it's mine, tracking what actually drives revenue instead of vanity metrics.",
  },
  {
    visual: "seo",
    title: "SEO & Content Systems",
    description:
      "Organic growth engineered for the long game. Technical SEO, content strategy, and systems that compound instead of resetting every month.",
  },
  {
    visual: "automation",
    title: "Automation & AI Systems",
    description:
      "Custom pipelines that do the work most agencies can't. Competitive intelligence, lead routing, and reporting automated end-to-end, built with the same tools shaping how businesses operate now.",
  },
  {
    visual: "strategy",
    title: "Growth Strategy",
    description:
      "Diagnosing bottlenecks before prescribing solutions. I tell you what's actually broken, even if the fix isn't something I sell.",
  },
] as const;

type VisualKey = (typeof SERVICES)[number]["visual"];

function SitesVisual() {
  const frames = [
    { src: "/portfolio/site-1.jpg", h: 553, pos: "left-[6%] top-[7%] w-[68%] z-10" },
    { src: "/portfolio/site-2.jpg", h: 552, pos: "right-[5%] top-[33%] w-[62%] z-20" },
    { src: "/portfolio/site-3.jpg", h: 552, pos: "left-[10%] bottom-[6%] w-[58%] z-30" },
  ];
  return (
    <div className="absolute inset-0 bg-lagoon overflow-hidden">
      <Logo
        className="absolute -right-10 -top-10 w-72 text-ink/10"
        paddleClassName="fill-ink/10"
      />
      {frames.map((f) => (
        <div
          key={f.src}
          className={`absolute overflow-hidden rounded-xl bg-white shadow-2xl shadow-ink/30 ring-1 ring-ink/10 ${f.pos}`}
        >
          <div className="flex h-[7%] min-h-4 items-center gap-1.5 bg-cloud px-3 py-1.5">
            <span className="size-2 rounded-full bg-coral" />
            <span className="size-2 rounded-full bg-sand" />
            <span className="size-2 rounded-full bg-lagoon" />
          </div>
          <Image
            src={f.src}
            alt=""
            width={1100}
            height={f.h}
            sizes="(min-width: 1024px) 400px, 70vw"
            className="block w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

function AdsVisual() {
  return (
    <div className="absolute inset-0 bg-cobalt flex items-center justify-center p-8">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl shadow-ink/20 space-y-5">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-cobalt text-3xl">
            campaign
          </span>
          <div className="h-3 w-32 rounded-full bg-secondary/80" />
        </div>
        {[85, 62, 40].map((w) => (
          <div key={w} className="h-2.5 rounded-full bg-secondary/10">
            <div
              className="h-full rounded-full bg-lagoon"
              style={{ width: `${w}%` }}
            />
          </div>
        ))}
        <svg viewBox="0 0 200 60" className="w-full text-coral" fill="none">
          <path
            d="M0 50 L35 40 L70 44 L110 22 L150 28 L200 6"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="absolute inset-0 bg-ink flex items-center justify-center p-8">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
          <span className="material-symbols-outlined text-lagoon">search</span>
          <div className="h-2.5 w-40 rounded-full bg-white/40" />
        </div>
        <svg viewBox="0 0 240 120" className="w-full text-lagoon" fill="none">
          <path
            d="M0 110 H240"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
          <path
            d="M0 100 C40 96 60 80 90 70 S150 50 180 30 S220 12 240 6"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="240" cy="6" r="6" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function AutomationVisual() {
  const node = "rounded-xl border-2 border-ink bg-cloud h-14 flex items-center justify-center";
  return (
    <div className="absolute inset-0 bg-lagoon flex items-center justify-center p-8">
      <div className="relative w-full max-w-sm space-y-8">
        <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-ink/60" />
        <div className={`relative w-2/5 ${node}`}>
          <div className="h-2.5 w-16 rounded-full bg-ink/70" />
        </div>
        <div className={`relative mx-auto w-2/5 ${node}`}>
          <span className="material-symbols-outlined text-ink text-3xl">
            smart_toy
          </span>
        </div>
        <div className={`relative ml-auto w-2/5 ${node}`}>
          <div className="h-2.5 w-16 rounded-full bg-ink/70" />
        </div>
      </div>
    </div>
  );
}

function StrategyVisual() {
  return (
    <div className="absolute inset-0 bg-tertiary-fixed flex items-center justify-center">
      <Logo
        className="absolute -right-8 -bottom-8 w-64 text-ink/10"
        paddleClassName="fill-ink/10"
      />
      <span className="material-symbols-outlined text-ink !text-[10rem] leading-none">
        explore
      </span>
    </div>
  );
}

const VISUALS: Record<VisualKey, () => React.JSX.Element> = {
  sites: SitesVisual,
  ads: AdsVisual,
  seo: SeoVisual,
  automation: AutomationVisual,
  strategy: StrategyVisual,
};

export default function Services() {
  const [open, setOpen] = useState(0);
  const [shown, setShown] = useState(0);

  const toggle = (i: number) => {
    if (open === i) {
      setOpen(-1);
    } else {
      setOpen(i);
      setShown(i);
    }
  };

  return (
    <section className="py-section-gap bg-surface-container" id="services">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col xl:flex-row xl:items-end gap-8 mb-16">
          <h2 className="font-headline font-bold text-headline-lg md:text-headline-xl text-secondary xl:whitespace-nowrap">
            What I build for you
          </h2>
          <div className="hidden xl:flex flex-1 items-center pb-4">
            <Wave className="h-4 w-full max-w-32 text-lagoon" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          <div
            aria-hidden
            className="relative aspect-[4/3] lg:aspect-auto lg:self-stretch lg:min-h-[520px] rounded-2xl overflow-hidden shadow-xl shadow-ink/10"
          >
            {SERVICES.map((s, i) => {
              const Visual = VISUALS[s.visual];
              return (
                <div
                  key={s.visual}
                  className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
                    shown === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Visual />
                </div>
              );
            })}
          </div>

          <div>
            {SERVICES.map((s, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={s.title}
                  className={`border-b transition-colors ${
                    isOpen ? "border-secondary" : "border-secondary/15"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`service-panel-${i}`}
                      id={`service-trigger-${i}`}
                      onClick={() => toggle(i)}
                      className="group flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-cobalt focus-visible:outline-offset-2"
                    >
                      <span className="font-headline font-semibold text-3xl md:text-4xl text-secondary transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
                        {s.title}
                      </span>
                      <span
                        aria-hidden
                        className={`material-symbols-outlined text-4xl shrink-0 transition-all group-hover:text-cobalt motion-reduce:transition-none ${
                          isOpen ? "rotate-45 text-cobalt" : "text-secondary"
                        }`}
                      >
                        north_east
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`service-panel-${i}`}
                    role="region"
                    aria-labelledby={`service-trigger-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body-md text-on-surface-variant pb-6 max-w-prose">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
