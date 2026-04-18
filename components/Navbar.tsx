"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation"},
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 shadow-md shadow-orange-900/10 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <a href="#hero" className="inline-flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="Restaurant Elite logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-red-950">
            Restaurant Elite
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-orange-900/80 transition-colors hover:bg-orange-100 hover:text-orange-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-800 md:inline-flex"
        >
          Reserve Table
        </a>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-lg p-2 text-orange-900 md:hidden"
        >
          <span className={`hamburger ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-orange-200/80 bg-white/95 px-6 pb-4 pt-2 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-orange-900 hover:bg-orange-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-red-700 px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Reserve Table
          </a>
        </nav>
      )}
    </header>
  );
}
