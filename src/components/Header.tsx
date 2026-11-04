"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  // TODO: restore once the Portfolio section is re-enabled
  // { href: "#portfolio", label: "Portfolio" },
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
          <Logo className="w-11 h-9 text-ink" />
          <span className="font-headline text-xl font-bold text-secondary tracking-tight hidden sm:inline">
            Angelo Mendoza
          </span>
        </div>
        <nav className="hidden md:flex gap-stack-lg items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="font-label-bold text-label-bold text-secondary hover:text-cobalt transition-all duration-300 relative"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-bold text-label-bold hover:bg-coral hover:text-white transition-all duration-200"
          href="#contact"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
