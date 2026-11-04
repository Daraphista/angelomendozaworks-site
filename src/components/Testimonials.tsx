import Image from "next/image";
import VideoTestimonial from "@/components/VideoTestimonial";
import Wave from "@/components/Wave";

// TODO: placeholder copy. Replace names, roles and quotes with real client
// testimonials before launch. Photos live in /public/testimonials.
const TESTIMONIALS: {
  name: string;
  role: string;
  quote: string;
  photo?: string;
  alt: string;
  position?: string;
}[] = [
  {
    name: "Dan K.",
    role: "Owner, roofing company",
    quote:
      "my phone started ringing with real roof replacement jobs, not tire-kickers. He built it and it just works.",
    photo: "/testimonials/roofer.png",
    alt: "Roofer hammering flashing into place on a shingled roof",
    position: "object-center",
  },
  {
    name: "Marcus T.",
    role: "Attorney",
    quote:
      "he understood how clients actually find a lawyer and rebuilt our site around it. Consultation requests doubled.",
    photo: "/testimonials/lawyer-office.png",
    alt: "Attorney on the phone at his desk",
    position: "object-center",
  },
];

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="relative pb-6 md:pb-0">
      <div className="relative w-full md:w-[84%] aspect-[5/4] rounded-2xl overflow-hidden bg-cobalt">
        <Image
          src={t.photo!}
          alt={t.alt}
          fill
          sizes="(min-width: 768px) 30vw, 90vw"
          className={`object-cover ${t.position ?? ""}`}
        />
      </div>
      <figcaption className="relative -mt-10 mx-4 md:mx-0 md:mt-0 md:absolute md:right-0 md:bottom-6 md:w-[46%] rounded-xl bg-white p-5">
        <span
          aria-hidden
          className="block font-headline font-bold text-5xl leading-none text-coral"
        >
          &ldquo;
        </span>
        <blockquote className="mt-1 text-base leading-6 text-secondary">
          {t.quote}
        </blockquote>
        <p className="mt-4 font-headline font-semibold text-secondary">
          {t.name}
        </p>
        <p className="font-body-md text-on-surface-variant">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink py-section-gap" id="testimonials">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col xl:flex-row xl:items-end gap-8 mb-16">
          <h2 className="font-headline font-bold text-headline-lg md:text-headline-xl text-cloud xl:whitespace-nowrap">
            What my clients are saying
          </h2>
          <div className="hidden xl:flex flex-1 items-center pb-4">
            <Wave className="h-4 w-full max-w-32 text-lagoon" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-gutter gap-y-12 items-start">
          <div className="space-y-12">
            <Card t={TESTIMONIALS[0]} />
            <Card t={TESTIMONIALS[1]} />
          </div>
          <div className="md:mt-12">
            <VideoTestimonial
              name="Roman Lopez"
              role="Real Estate Broker"
              quote="Angelo Mendoza completely blew my expectations away by automating a complex multi-system workflow I thought was impossible, freeing up over an hour and a half of my time every single day. I strongly recommend working with him if you want to reclaim your schedule and focus on high-value, money-making activities"
            />
          </div>
        </div>
        <div className="mt-16 flex md:justify-end">
          <a
            href="#contact"
            className="bg-lagoon text-ink px-8 py-4 rounded-full font-label-bold text-label-bold hover:-translate-y-0.5 transition-transform motion-reduce:transition-none"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
