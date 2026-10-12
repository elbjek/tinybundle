"use client";

import Link from "next/link";
import { useState } from "react";
import { MealsMark } from "@/components/tinymeals/mark";
import { MEALS_APP_STORE_URL } from "@/lib/tinymeals";

const NAV = [
  { href: "/tinymeals#how", label: "How it works" },
  { href: "/tinymeals#try", label: "Try it" },
  { href: "/tinymeals#plan", label: "First foods" },
  { href: "/tinymeals#share", label: "Sharing" },
  { href: "/tinymeals#faq", label: "FAQ" },
];

export function MealsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-meals-border bg-meals/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-3">
        <Link href="/tinymeals" className="flex flex-none items-center gap-2.5 text-meals-ink" aria-label="TinyMeals home">
          <MealsMark className="h-8 w-8" animated />
          <span className="text-lg font-extrabold tracking-[-0.01em]">TinyMeals</span>
        </Link>
        <nav aria-label="TinyMeals" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-bold text-meals-body transition-colors hover:text-meals-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <a
          href={MEALS_APP_STORE_URL}
          className="flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] bg-meals-sage px-[clamp(16px,2vw,22px)] text-[14.5px] font-extrabold text-white transition-colors hover:bg-meals-sage-deep active:scale-[0.97]"
        >
          Get the app
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="meals-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(90,60,20,0.08)] active:scale-95 min-[820px]:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="#2E2E2E"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {open ? (
        <nav
          id="meals-menu"
          aria-label="TinyMeals"
          className="flex flex-col border-t border-meals-border px-[clamp(16px,4vw,40px)] pb-3.5 pt-1.5 [animation:tm-rise_.25s_ease_both] min-[820px]:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center border-b border-meals-border text-base font-extrabold text-meals-ink last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { href: "/tinymeals#how", label: "How it works" },
      { href: "/tinymeals#plan", label: "First foods" },
      { href: "/tinymeals#faq", label: "FAQ" },
    ],
  },
  {
    title: "Reading",
    links: [
      { href: "/tinymeals#safety", label: "Sources & safety" },
      { href: "/guides#hub-tinymeals", label: "Weaning guides" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/", label: "All apps" },
      { href: "mailto:support@twobricklabs.com", label: "Contact" },
      { href: "/tinymeals/privacy", label: "Privacy" },
      { href: "/tinymeals/terms", label: "Terms" },
    ],
  },
];

export function MealsFooter() {
  return (
    <footer className="border-t border-meals-border">
      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-start justify-between gap-6 px-[clamp(18px,4vw,40px)] pb-12 pt-9">
        <div className="min-w-0 flex-[1_1_min(100%,320px)]">
          <div className="flex items-center gap-2.5">
            <MealsMark className="h-7 w-7" />
            <span className="text-base font-extrabold">TinyMeals</span>
          </div>
          <p className="mt-3 max-w-[46ch] text-pretty text-sm leading-relaxed text-meals-body">
            Part of{" "}
            <Link href="/" className="font-extrabold text-meals-ink hover:text-meals-orange-deep">
              TinyBundle
            </Link>
            : apps for the tiny moments of parenting, from late nights to first foods.
          </p>
        </div>
        <div className="flex flex-wrap gap-7">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-2.5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-meals-muted">{group.title}</p>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-bold text-meals-body hover:text-meals-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto w-full max-w-[1180px] px-[clamp(18px,4vw,40px)] pb-10 text-[12.5px] font-bold text-meals-muted">
        &copy; 2026 TinyMeals. General feeding guidance only, not medical advice.
      </p>
    </footer>
  );
}
