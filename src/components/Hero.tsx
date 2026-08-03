import Image from "next/image";

const PORTRAIT_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZnYS3j17bgP1fsXxmTUKHx6pSmTLwZHO6haTEP3JbBGYX9isVXdB_v_7Br41P6S5Dm8zogpkN00zjdWErRXwvW-GiSn3HxQqW4tiilGDpYWQZ5FTLfBfzbkDRwOaZLgiTMPvi8SNpdPSMO9fWcJcwp9URqcxqyOmIzSq-ltOM1FurqttsqqyBRNK1ZIpZ9mwBfCQbdEhhwUoZgfhGZwQvegMLL8k_8XWic8T2DPTJ1xkEi-ZQxTe26JGIOr3Slj_LgSXaAGxXAckn";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-section-gap">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center relative z-10">
        <div className="space-y-stack-lg">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white font-label-bold text-[12px] tracking-widest uppercase">
            Digital Strategy • Development
          </div>
          <h1 className="font-headline md:text-headline-xl text-secondary leading-tight">
            Digital Strategist Full-Stack Developer
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            I build the websites, systems, and growth strategies behind
            businesses that actually perform. Backed by hundreds of hours of
            research into what the best in each industry are doing, not
            guesswork.
          </p>
          <div className="flex flex-wrap gap-stack-md pt-4">
            <a
              className="bg-primary text-white px-8 py-4 rounded-lg font-label-bold text-label-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform"
              href="#portfolio"
            >
              View My Work
            </a>
            <a
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-label-bold text-label-bold hover:bg-secondary/5 transition-colors"
              href="#contact"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="relative mt-stack-lg lg:mt-0">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] max-w-md mx-auto">
            <Image
              alt="Angelo Mendoza"
              className="w-full h-full object-cover"
              src={PORTRAIT_SRC}
              width={500}
              height={625}
              preload
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-xl -z-10 animate-pulse" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-secondary/10 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
