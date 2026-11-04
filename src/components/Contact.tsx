export default function Contact() {
  return (
    <section className="py-section-gap relative" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-white border border-outline-variant/30 rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-margin-mobile md:p-16 bg-secondary text-white space-y-stack-lg">
            <h2 className="font-headline text-headline-lg">
              Have a project in mind?
            </h2>
            <p className="font-body-lg text-body-lg opacity-80 leading-relaxed">
              Have a project in mind, or looking to bring someone onto your
              team? Let&apos;s talk. I&apos;m always open to discussing new
              challenges and how my data-driven approach can help your
              business.
            </p>
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined p-3 bg-primary rounded-full text-secondary">
                  location_on
                </span>
                <span className="text-lg">Available Worldwide (Remote)</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-margin-mobile md:p-16">
            <form className="space-y-8">
              <div className="space-y-2">
                <label
                  className="font-mono text-secondary uppercase tracking-widest text-[11px]"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full border-b-2 border-outline-variant/30 focus:border-cobalt focus:ring-0 px-0 py-3 outline-none transition-colors"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-mono text-secondary uppercase tracking-widest text-[11px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border-b-2 border-outline-variant/30 focus:border-cobalt focus:ring-0 px-0 py-3 outline-none transition-colors"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-mono text-secondary uppercase tracking-widest text-[11px]"
                  htmlFor="details"
                >
                  Project Details
                </label>
                <textarea
                  className="w-full border-b-2 border-outline-variant/30 focus:border-cobalt focus:ring-0 px-0 py-3 outline-none transition-colors resize-none"
                  id="details"
                  placeholder="Tell me about your goals..."
                  rows={4}
                />
              </div>
              <button
                className="w-full bg-coral text-white py-5 rounded-full font-headline font-bold text-lg hover:-translate-y-0.5 transition-all shadow-lg shadow-coral/25"
                type="submit"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
