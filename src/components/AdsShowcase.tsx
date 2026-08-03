import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AdsShowcase() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder label="Campaign Preview" />
          </div>
          <div className="order-1 lg:order-2 space-y-stack-md">
            <h2 className="font-headline text-headline-lg text-secondary flex items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary">
                trending_up
              </span>
              Better Ads
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Campaigns are built on historical winning patterns, not
              guesswork, with laser-focused audience segments based on
              actual intent data. Psychology-driven creative demands
              attention, and every dollar is spent with the same intensity
              as if it were mine.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Weekly reporting and around-the-clock monitoring mean you
              always know exactly where your budget is going, and exactly
              what it&apos;s returning.
            </p>
            <a
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-label-bold text-label-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform"
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
