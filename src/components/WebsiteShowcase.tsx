import BlueprintShowcase from "@/components/BlueprintShowcase";
import { WEBSITE_BLUEPRINTS } from "@/data/blueprints";
import { WEBSITE_POINTS } from "@/data/propositionPoints";

export default function WebsiteShowcase() {
  return (
    <section className="py-section-gap bg-secondary text-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg md:gap-16 items-center">
          <BlueprintShowcase
            cards={WEBSITE_BLUEPRINTS}
            variant="dark"
            titleSuffix="Website Blueprint"
            description="Each website blueprint is built from analyzing at least a hundred websites for that niche and taking all the best parts, turning it into a formula for creating you the ultimate website for your industry."
          />
          <div className="space-y-stack-lg">
            <h2 className="font-headline text-headline-lg text-primary flex items-center gap-4">
              <span className="material-symbols-outlined text-5xl">web</span>
              Better Websites
            </h2>
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
            {/* TODO: restore once the Portfolio section is re-enabled
            <a
              className="inline-block bg-coral text-white px-8 py-4 rounded-lg font-label-bold text-label-bold shadow-lg shadow-coral/25 hover:-translate-y-0.5 transition-transform"
              href="#portfolio"
            >
              See the Work
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
