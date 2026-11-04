import Image from "next/image";

const socials = [
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

const roles = [
  { title: "Web Developer", company: "Modiphy", from: "2022", to: "2024" },
  { title: "Web Developer", company: "Freelance", from: "2024", to: "2025" },
  { title: "Web Developer", company: "Eversite", from: "2025", to: "2026" },
  {
    title: "Chief Technology Officer",
    company: "Acuris Med AI",
    from: "2026",
    to: "Now",
  },
  {
    title: "Chief Technology Officer",
    company: "Bloom Devlabs",
    from: "2026",
    to: "Now",
  },
];

export default function About() {
  return (
    <section className="bg-surface-container py-section-gap" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr] gap-stack-lg lg:gap-x-20 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-ink/20 ring-4 ring-lagoon max-w-[200px] lg:max-w-none">
              <Image
                alt="Angelo smiling at his desk with a podcast microphone"
                className="w-full h-auto object-cover"
                src="/brand/image.png"
                width={1028}
                height={1728}
                sizes="(min-width: 1024px) 25vw, 200px"
              />
            </div>
            <div className="mt-6 flex flex-col items-center gap-4 text-center text-secondary">
              <div>
                <p className="font-headline font-semibold leading-tight">
                  Angelo Mendoza
                </p>
                <p className="text-sm text-on-surface-variant">
                  Developer, Digital Marketer
                </p>
              </div>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="hover:text-cobalt transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-stack-md text-secondary font-body-lg">
            <h2 className="font-headline text-headline-lg text-secondary">
              The person behind the paddle
            </h2>
            <p>
              Hi, I&apos;m Angelo. For the past five years I&apos;ve worked
              across digital marketing and web development, building websites
              and growth systems for clinics, home service contractors, and
              professional firms across North America.
            </p>
            <p>
              In that time, I&apos;ve seen exactly what separates the winners
              from the rest: it&apos;s not a bigger budget or a flashier logo.
              It&apos;s a relentless commitment to analyzing what works,
              discarding what doesn&apos;t, and building systems that convert
              visitors into clients with surgical precision.
            </p>
            <p>
              I don&apos;t just &quot;make websites.&quot; I engineer
              high-performance digital assets that serve as the 24/7 sales force
              for your business. Whether it&apos;s a hard-coded site built for
              lightning speed or a deep-dive competitor analysis to steal market
              share, my approach is rooted in data, not hope.
            </p>
            <p>
              When you work with me, you&apos;re not just hiring a freelancer;
              you&apos;re gaining a partner who treats your business growth with
              the same intensity as your own. Let&apos;s stop guessing and start
              building what performs.
            </p>
            <ul className="mt-16 border-l-2 border-lagoon pl-6">
              {roles.map((r) => (
                <li
                  key={r.title + r.company}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-0.5 border-b border-outline-variant py-2.5 first:pt-0 last:border-b-0 sm:grid-cols-[1.4fr_1fr_auto]"
                >
                  <span className="font-headline font-semibold tracking-tight text-secondary">
                    {r.title}
                  </span>
                  <span className="order-3 col-span-2 text-sm italic text-on-surface-variant sm:order-none sm:col-span-1">
                    {r.company}
                  </span>
                  <span className="whitespace-nowrap text-right tracking-tight text-cobalt">
                    {r.from} → {r.to}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
