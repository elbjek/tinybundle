"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";

const navLinks = [
  { label: "Our Apps", href: "/#apps" },
  { label: "For Parents", href: "/#for-parents" },
  { label: "About", href: "/#about" },
  { label: "Journal", href: "/#journal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-amber-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#apps"
          className="hidden rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-amber-deep hover:text-cream md:inline-block"
        >
          Explore the apps
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-cream px-5 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-sand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#apps"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-amber px-5 py-3 text-center text-sm font-bold text-navy"
          >
            Explore the apps
          </Link>
        </nav>
      )}
    </header>
  );
}
