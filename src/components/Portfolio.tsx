import Image from "next/image";

const CASE_STUDIES = [
  {
    tag: "Development",
    title: "Website Build - Elite Dental Clinic",
    description:
      "A ground-up website build combining performance, design, and conversion strategy.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWMRwYvnmGQPQ4JWZ_rFDiaGGCh2Cd2BP4AwmRoyAUOSnzNGsvQtOdzshXVSvvZAHGlJZsK7kJy_TdKpNL8nRax_Raff4jvQqd10olUxc_faE4C23DtwRUhMp7RV4scEc8_Tx9zxJ3ZAoWfXEVDSD5f9_2LMvqwetB0m6jRORaZx17-x1tiCpm7ZccMqcpCc5x6fNinS6FTZo3KheKFgkFd2pw3wmuzJeIo5xnzLp61dSStzHtbJtWrtaU5R346lUWgXLBNfTV-kw4",
  },
  {
    tag: "Analysis",
    title: "Ad Competitor Analysis - Nexa Homes",
    description:
      "Deep-dive analysis of top-performing ad campaigns to identify what's actually driving conversions.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Swiux-QKKdniYp3awBh3eihNvQp8Pc8QYgMD9prFOjD1lo4UNSVXbLgA-_DM-myByQ1ybd-T1b4vP0hpNftQIVjijopbh-iwUF_EetAoryQx_X4I0V99CifNR9ERJkooIaiEt60STCU-dxFp6T3KHgDvQG8_ISda-WucSQnVgwQDw-X6HN9d_A69-aKpdzAqTXr9HPRYEL3U4tPdA6sAFGGpzp0JKd5OuJLPDKHAVqeO_JlkDNzALN2bl6wgE5P6WkRiwkxwteyJ",
  },
  {
    tag: "Strategy",
    title: "Ad Competitor Analysis - Legal Group",
    description:
      "A second competitive teardown, isolating winning patterns across dozens of live campaigns.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOjj5y9PzQgKE6ujYIiNPgO_4NVw3humCu2b1FkxJpEZBhvp7TPEBlL2v6ogkzy3AN7epmh_iYMryxmH7BS8hoOqk9Bn5QZAXsjShy_mgdlWmFSl6AosOM8k0795c08iYD-tLheoJnuQljln83pf9Kg1Bd1ZGSTvBGe9-kvZY7v5J64x6ObavZ-RxTxb7bs1vATQ9VfHSO9V12fyj-PKRODAvP1Xnr6V4336g62jP-VWxCIh7UqPVh8JyiHFKM7Bk1iwpxPak7ukBy",
  },
];

function PortfolioCard({
  tag,
  title,
  description,
  imageSrc,
}: (typeof CASE_STUDIES)[number]) {
  return (
    <div className="group bento-card bg-white border border-outline-variant/40 rounded-xl overflow-hidden transition-all duration-300">
      <div className="h-48 bg-surface-container overflow-hidden">
        <Image
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imageSrc}
          width={400}
          height={192}
        />
      </div>
      <div className="p-6 space-y-3">
        <span className="inline-block px-3 py-1 bg-secondary text-cloud font-label-sm rounded-full">
          {tag}
        </span>
        <h3 className="font-headline text-xl font-bold text-secondary">
          {title}
        </h3>
        <p className="font-body-md text-on-surface-variant">{description}</p>
        <a
          className="inline-flex items-center gap-2 text-cobalt font-label-bold group/link"
          href="#"
        >
          View Case Study
          <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="py-section-gap" id="portfolio">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-stack-lg flex flex-col items-start">
          <span className="text-cobalt font-mono uppercase tracking-[0.2em] mb-2">
            Portfolio / Case Studies
          </span>
          <h2 className="font-headline text-headline-lg text-secondary">
            Evidence of Impact
          </h2>
          <div className="h-1.5 w-20 bg-primary mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {CASE_STUDIES.map((study) => (
            <PortfolioCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
