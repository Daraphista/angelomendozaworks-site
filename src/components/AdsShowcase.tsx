import BlueprintShowcase from "@/components/BlueprintShowcase";
import { AD_BLUEPRINTS } from "@/data/adBlueprints";
import { AD_POINTS } from "@/data/propositionPoints";

export default function AdsShowcase() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <BlueprintShowcase
              cards={AD_BLUEPRINTS}
              variant="light"
              titleSuffix="Ad Blueprint"
            />
          </div>
          <div className=" space-y-stack-lg">
            <h2 className="font-headline text-headline-lg text-secondary flex items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-cobalt">
                trending_up
              </span>
              Better Ads
            </h2>
            <ul className="space-y-6">
              {AD_POINTS.map((point) => (
                <li key={point.strong} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt">
                    verified
                  </span>
                  <div>
                    <strong className="text-secondary">{point.strong}</strong>{" "}
                    {point.text}
                  </div>
                </li>
              ))}
            </ul>
            <a
              className="inline-block bg-coral text-white px-8 py-4 rounded-full font-label-bold text-label-bold shadow-lg shadow-coral/25 hover:-translate-y-0.5 transition-transform"
              href="#contact"
            >
              Start a Campaign
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
