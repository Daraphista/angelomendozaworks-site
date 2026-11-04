"use client";

import { useEffect, useRef } from "react";

type Props = {
  mp4: string;
  webm: string;
  poster: string;
  label: string;
};

export default function LoopingPreview({ mp4, webm, poster, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't reliably reflect `muted` to the DOM; autoplay needs it.
    video.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      video.pause();
      return;
    }
    // Only play while on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="block w-full h-full object-cover object-top"
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-label={label}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
      {label}
    </video>
  );
}
