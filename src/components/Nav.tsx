"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Usluge", href: "#kako-mogu-pomoci" },
  { label: "Rad", href: "#automatizacija" },
  { label: "Case Studies", href: "#case-study-regge" },
  { label: "O meni", href: "#o-meni" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(124,58,237,0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-playfair text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          DP
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-gray-400 transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-gray-400 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-gray-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(10,10,10,0.95)",
            borderColor: "rgba(124,58,237,0.2)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-widest uppercase text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
