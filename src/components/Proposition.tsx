import { WEBSITE_POINTS, AD_POINTS } from "@/data/propositionPoints";

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
