const WEBSITE_POINTS = [
  {
    strong: "Hard-Coded Speed:",
    text: "Lightning-fast load times for SEO and user experience.",
  },
  {
    strong: "Website Security Guarantee:",
    text: "Bulletproof code designed to withstand modern threats.",
  },
  {
    strong: "Better Designs:",
    text: "Modern, conversion-focused UI that builds immediate trust.",
  },
  {
    strong: "Perfect Performance Scores:",
    text: "100/100 Lighthouse audits for technical excellence.",
  },
  {
    strong: "Satisfaction Guarantee:",
    text: "I don't stop until the project meets the performance benchmarks.",
  },
  {
    strong: "Unmatched Support:",
    text: "Direct communication for updates and ongoing management.",
  },
  {
    strong: "Better SEO:",
    text: "Built-in structural advantages for organic ranking growth.",
  },
];

const AD_POINTS = [
  {
    strong: "Ad Spend Protection Guarantee:",
    text: "Strategies designed to minimize waste and maximize ROI.",
  },
  {
    strong: "Better Creative:",
    text: "Psychology-driven ad copy and visuals that demand attention.",
  },
  {
    strong: "Proven Performance Data:",
    text: "Campaigns optimized based on historical winning patterns.",
  },
  {
    strong: "Satisfaction Guarantee:",
    text: "Result-focused management with clear transparency.",
  },
  {
    strong: "Unmatched Support:",
    text: "Weekly reporting and 24/7 campaign monitoring.",
  },
  {
    strong: "Better Targeting:",
    text: "Laser-focused audience segments based on actual intent data.",
  },
  {
    strong: "Comprehensive Strategy:",
    text: "Holistic approach integrating cross-channel performance.",
  },
];

export default function Proposition() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
          <div className="bg-secondary text-white p-margin-mobile md:p-12 rounded-3xl space-y-stack-lg shadow-xl">
            <h3 className="font-headline text-headline-md text-primary flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl">web</span>
              Better Websites
            </h3>
            <ul className="space-y-6">
              {WEBSITE_POINTS.map((point) => (
                <li key={point.strong} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <div>
                    <strong className="text-white">{point.strong}</strong>{" "}
                    {point.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-outline-variant/40 p-margin-mobile md:p-12 rounded-3xl space-y-stack-lg shadow-sm">
            <h3 className="font-headline text-headline-md text-secondary flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                trending_up
              </span>
              Better Ads
            </h3>
            <ul className="space-y-6">
              {AD_POINTS.map((point) => (
                <li key={point.strong} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <div>
                    <strong className="text-secondary">{point.strong}</strong>{" "}
                    {point.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
