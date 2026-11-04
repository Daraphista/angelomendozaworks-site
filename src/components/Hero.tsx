import Image from "next/image";
import Logo from "@/components/Logo";
import Wave from "@/components/Wave";

// 6 per column, looped so the grid always fills the section
const SITES = [1, 2, 3, 4, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 2];

function SiteGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute -right-[15%] -top-[45%] h-[190%] w-[105%] lg:w-[80%] origin-center rotate-[14deg] grid grid-cols-3 gap-2 lg:gap-3 opacity-50 lg:opacity-100">
        {[0, 1, 2].map((col) => (
          <div key={col} className="h-full overflow-y-clip">
            <div
              className={`flex flex-col ${
                col === 1 ? "animate-grid-up" : "animate-grid-down"
              }`}
            >
              {/* two copies so the -50% translate loops seamlessly */}
              {[0, 1].flatMap((copy) =>
                SITES.slice(col * 6, col * 6 + 6).map((n, i) => (
                  <Image
                    key={`${copy}-${i}`}
                    src={`/portfolio/site-${n}.jpg`}
                    alt=""
                    width={1100}
                    height={552}
                    sizes="(min-width: 1024px) 25vw, 40vw"
                    className="w-full h-auto rounded-xl mb-2 lg:mb-3 shadow-xl shadow-ink/20 border border-ink/10"
                  />
                )),
              )}
            </div>
          </div>
        ))}
      </div>
      {/* gradient: solid cloud on the text side, fading to the grid */}
      <div className="absolute inset-0 bg-gradient-to-r from-cloud from-35% via-cloud/80 lg:via-cloud/60 to-cloud/0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cloud to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cloud to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-section-gap">
      <SiteGrid />
      <div
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-lagoon/15 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center relative z-10">
        <div className="space-y-stack-lg">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-cloud font-mono text-[12px] tracking-widest uppercase">
            Digital strategist · Full-stack developer
          </div>
          <h1 className="font-headline font-extrabold text-headline-lg md:text-headline-xl text-secondary">
            Strategy you can{" "}
            <span className="bg-coral px-[0.12em] rounded-md box-decoration-clone">
              see through.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            I build the websites, systems, and growth strategies behind
            businesses that actually perform. Backed by hundreds of hours of
            research into what the best in each industry are doing, not
            guesswork.
          </p>
          <div className="flex flex-wrap gap-stack-md pt-4">
            {/* TODO: restore once the Portfolio section is re-enabled
            <a
              className="bg-secondary text-cloud px-8 py-4 rounded-full font-label-bold text-label-bold hover:-translate-y-0.5 transition-transform"
              href="#portfolio"
            >
              View My Work
            </a>
            */}
            <a
              className="bg-coral text-white px-8 py-4 rounded-full font-label-bold text-label-bold shadow-lg shadow-coral/25 hover:-translate-y-0.5 transition-transform"
              href="#contact"
            >
              Let&apos;s talk
            </a>
          </div>
          <Wave className="h-4 w-32 text-lagoon" />
        </div>
        <div className="relative mt-stack-lg lg:mt-0">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
            <Image
              alt="Angelo paddling a clear kayak over a turquoise lagoon"
              className="w-full h-full object-cover"
              src="/brand/kayak.jpg"
              width={810}
              height={1080}
              sizes="(min-width: 1024px) 448px, 90vw"
              preload
            />
            <Logo
              className="absolute left-4 top-4 z-10 w-14 text-white drop-shadow-sm"
              paddleClassName="fill-coral"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
