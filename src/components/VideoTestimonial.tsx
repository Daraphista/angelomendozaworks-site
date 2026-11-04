"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

// YouTube Short (vertical 9:16). If VIDEO_ID is ever empty the play button is inert.
const VIDEO_ID = "qqyICIHdbnU";

export default function VideoTestimonial({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="relative pb-6 md:pb-0">
      <div className="relative w-full md:w-[62%] md:ml-[6%] aspect-[9/16] rounded-2xl overflow-hidden bg-cobalt">
        {playing && VIDEO_ID ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`Video testimonial from ${name}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <Logo
              className="absolute -right-10 -bottom-10 w-72 text-ink/10"
              paddleClassName="fill-ink/10"
            />
            <button
              type="button"
              disabled={!VIDEO_ID}
              onClick={() => setPlaying(true)}
              aria-label={`Play video testimonial from ${name}`}
              className="absolute inset-0 flex items-center justify-center md:pr-24 md:pb-24 group cursor-pointer disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-[-8px] focus-visible:outline-cloud"
            >
              <span className="flex size-24 items-center justify-center rounded-full bg-coral text-white transition-transform group-hover:scale-105 group-active:scale-95 motion-reduce:transition-none">
                <span className="material-symbols-outlined !text-6xl leading-none">
                  play_arrow
                </span>
              </span>
            </button>
          </>
        )}
      </div>
      <figcaption className="relative -mt-10 mx-4 md:mx-0 md:mt-0 md:absolute md:right-0 md:bottom-6 md:w-[46%] rounded-xl bg-white p-5">
        <span
          aria-hidden
          className="block font-headline font-bold text-5xl leading-none text-coral"
        >
          &ldquo;
        </span>
        <blockquote className="mt-1 text-base leading-6 text-secondary">
          {quote}
        </blockquote>
        <p className="mt-4 font-headline font-semibold text-secondary">
          {name}
        </p>
        <p className="font-body-md text-on-surface-variant">{role}</p>
      </figcaption>
    </figure>
  );
}
