"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLyqGTL3si82QJ2FnPcAXjVInhpnA_-tHsto1BfHc2uB7L7N8fzh7yQdA2bdRogcB_DU3yhpmkzCdVBjl3TyWy0wr9W_49zEaZQEE3sBWLISJGLt3dPg8V0DNmFrbQjgbK9fKgxSumbf9BCUNX45n4GBu6pCGgU6rMuIGllczD5nlAThhs5987BgHEylLgrR0o2qJSryVZqsHRzHqTDbgvGq_CSYD5M9Y0PpDdieyPVTugFrKqrZ3Wz-U8lpUNzYDvDKekxLoQfGRt";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 glass border-b border-outline-variant/30 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <Image
            alt="AM Logo"
            className="w-10 h-10 object-contain rounded-full"
            src={LOGO_SRC}
            width={40}
            height={40}
          />
          <span className="font-headline text-xl font-bold text-secondary tracking-tight hidden sm:inline">
            Angelo Mendoza
          </span>
        </div>
        <nav className="hidden md:flex gap-stack-lg items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="font-label-bold text-label-bold text-secondary hover:text-primary transition-all duration-300 relative"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-bold text-label-bold hover:bg-primary hover:text-white transition-all duration-200"
          href="#contact"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
