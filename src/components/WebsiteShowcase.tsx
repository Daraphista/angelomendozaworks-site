import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function WebsiteShowcase() {
  return (
    <section className="py-section-gap bg-secondary text-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md">
            <h2 className="font-headline text-headline-lg text-primary flex items-center gap-4">
              <span className="material-symbols-outlined text-5xl">web</span>
              Better Websites
            </h2>
            <p className="font-body-lg text-body-lg text-white/85">
              Every site I ship is hard-coded from scratch, no bloated
              page builders slowing you down. That means load times that
              keep visitors on the page, security that holds up under real
              threats, and Lighthouse scores that prove it.
            </p>
            <p className="font-body-lg text-body-lg text-white/85">
              Design isn&apos;t an afterthought either. Modern,
              conversion-focused UI paired with the structural SEO
              advantages that come from clean, purposeful code, so your site
              works as hard as you do.
            </p>
            <a
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-label-bold text-label-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform"
              href="#portfolio"
            >
              See the Work
            </a>
          </div>
          <ImagePlaceholder label="Website Preview" variant="dark" />
        </div>
      </div>
    </section>
  );
}
