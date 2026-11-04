import Image from "next/image";
import Logo from "@/components/Logo";
import Wave from "@/components/Wave";

// TODO: placeholder copy. Replace names, quotes and photos with real client
// testimonials (drop photos in /public/testimonials and set `photo`) before launch.
const TESTIMONIALS: {
  name: string;
  quote: string;
  photo?: string;
  tall?: boolean;
}[] = [
  {
    name: "Client Name",
    quote:
      "Placeholder: he didn't just build our site, he became part of our team.",
  },
  {
    name: "Client Name",
    quote:
      "Placeholder: the end result was creative, strategic, and way beyond expectations.",
    tall: true,
  },
  {
    name: "Client Name",
    quote:
      "Placeholder: from day one, he understood our business better than we did.",
  },
];

const FIELDS = ["bg-cobalt", "bg-lagoon", "bg-sand"];

function Card({ t, field }: { t: (typeof TESTIMONIALS)[number]; field: string }) {
  const initial = t.name.charAt(0);
  return (
    <figure className="relative pb-6 md:pb-0">
      <div
        className={`relative w-full md:w-[76%] rounded-2xl overflow-hidden ${field} ${
          t.tall ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        {t.photo ? (
          <Image
            src={t.photo}
            alt={t.name}
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="object-cover"
          />
        ) : (
          <>
            <Logo
              className="absolute -right-8 -bottom-8 w-56 text-ink/10"
              paddleClassName="fill-ink/10"
            />
            <div className="absolute inset-0 flex items-center justify-center font-headline font-bold text-9xl text-ink">
              {initial}
            </div>
          </>
        )}
      </div>
      <figcaption className="relative -mt-10 mx-4 md:mx-0 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[52%] rounded-xl bg-white p-6">
        <span
          aria-hidden
          className="block font-headline font-bold text-5xl leading-none text-coral"
        >
          &ldquo;
        </span>
        <blockquote className="mt-1 text-lg leading-7 text-secondary">
          {t.quote}
        </blockquote>
        <p className="mt-4 font-headline font-semibold text-secondary">
          {t.name}
        </p>
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
            Voices of my partners
          </h2>
          <div className="hidden xl:flex flex-1 items-center pb-4">
            <Wave className="h-4 w-full max-w-32 text-lagoon" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-gutter gap-y-12 items-start">
          <div className="space-y-12">
            <Card t={TESTIMONIALS[0]} field={FIELDS[0]} />
            <Card t={TESTIMONIALS[2]} field={FIELDS[2]} />
          </div>
          <div className="md:mt-24">
            <Card t={TESTIMONIALS[1]} field={FIELDS[1]} />
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
