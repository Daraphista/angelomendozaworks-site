import BlueprintShowcase from "@/components/BlueprintShowcase";
import Image from "next/image";
import LoopingPreview from "@/components/LoopingPreview";
import { WEBSITE_BLUEPRINTS } from "@/data/blueprints";
import { WEBSITE_POINTS } from "@/data/propositionPoints";
import { WEBSITE_PORTFOLIO } from "@/data/websitePortfolio";

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

        <div className="mt-section-gap">
          <div className="mt-stack-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            {WEBSITE_PORTFOLIO.map((site) => (
              <a
                key={site.slug}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:-translate-y-0.5 transition-transform motion-reduce:transition-none"
              >
                <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-ink ring-1 ring-white/10 shadow-xl shadow-black/30">
                  {site.video ? (
                    <LoopingPreview
                      {...site.video}
                      poster={site.poster}
                      label={`${site.name} website preview`}
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={site.poster}
                        alt={`${site.name} website preview`}
                        fill
                        sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-3 font-headline font-label-bold text-label-bold text-white">
                  {site.name}
                </div>
                <div className="text-label-sm text-white/60">{site.niche}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
