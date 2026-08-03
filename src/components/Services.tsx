const SERVICES = [
  {
    icon: "language",
    title: "Websites",
    description:
      "Hard-coded for speed, security, and conversion. No bloated builders, no guesswork.",
  },
  {
    icon: "search",
    title: "SEO",
    description:
      "No shortcuts or gimmicks. Straightforward strategy based on what's actually working for top competitors.",
  },
  {
    icon: "ads_click",
    title: "Ad Strategy",
    description:
      "Research-driven campaign strategy, built on real competitive data, not assumptions.",
  },
  {
    icon: "support_agent",
    title: "Ongoing Support",
    description:
      "Direct access to me, not a support queue. Your business priority is my work priority.",
  },
];

function ServiceCard({ icon, title, description }: (typeof SERVICES)[number]) {
  return (
    <div className="p-8 bg-white border border-outline-variant/40 rounded-xl hover:border-primary transition-colors space-y-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
