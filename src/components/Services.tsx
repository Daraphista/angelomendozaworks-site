const SERVICES = [
  {
    icon: "code",
    title: "Websites & Web Apps",
    description:
      "Custom-built, not templated. Fast, conversion-focused sites and web apps designed to work as hard as you do. No drag-and-drop shortcuts, no bloated page builders.",
  },
  {
    icon: "campaign",
    title: "Paid Ads & Growth",
    description:
      "Google and Meta campaigns built on data, not guesswork. I manage spend like it's mine, tracking what actually drives revenue instead of vanity metrics.",
  },
  {
    icon: "query_stats",
    title: "SEO & Content Systems",
    description:
      "Organic growth engineered for the long game. Technical SEO, content strategy, and systems that compound instead of resetting every month.",
  },
  {
    icon: "smart_toy",
    title: "Automation & AI Systems",
    description:
      "Custom pipelines that do the work most agencies can't. Competitive intelligence, lead routing, and reporting automated end-to-end, built with the same tools shaping how businesses operate now.",
  },
  {
    icon: "explore",
    title: "Growth Strategy",
    description:
      "Diagnosing bottlenecks before prescribing solutions. I tell you what's actually broken, even if the fix isn't something I sell.",
  },
];

function ServiceCard({ icon, title, description }: (typeof SERVICES)[number]) {
  return (
    <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 bg-white border border-outline-variant/40 rounded-xl hover:border-primary transition-colors space-y-4">
      <span className="material-symbols-outlined text-primary text-5xl">
        {icon}
      </span>
      <h3 className="font-headline text-2xl font-bold text-secondary">
        {title}
      </h3>
      <p className="font-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-section-gap bg-surface-container" id="services">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-lg text-secondary">
            Engineered For Performance
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto mt-4" />
        </div>
        <div className="flex flex-wrap justify-center gap-gutter">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
