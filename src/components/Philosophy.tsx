export default function Philosophy() {
  return (
    <section className="bg-secondary text-white py-section-gap overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col items-center text-center space-y-stack-lg max-w-4xl mx-auto">
          <h2 className="font-headline text-headline-lg text-primary">
            Why Choose Me
          </h2>
          <blockquote className="font-headline text-2xl md:text-headline-md italic opacity-95 border-l-4 border-primary pl-6 py-2 text-left">
            &ldquo;Absorb what is useful. Discard what is not. Add what is
            uniquely your own.&rdquo; - Bruce Lee
          </blockquote>
          <p className="font-body-lg text-body-lg opacity-85 leading-relaxed">
            I count in hundreds. Which means hundreds of hours were spent
            researching hundreds of the top-ranking websites in almost every
            industry. My methodology is built on evidence, ensuring every
            pixel and every line of code has a purpose.
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-[0.03] -translate-x-1/4 translate-y-1/4 pointer-events-none">
        <span className="font-headline text-[300px] md:text-[500px] leading-none select-none">
          AM
        </span>
      </div>
    </section>
  );
}
