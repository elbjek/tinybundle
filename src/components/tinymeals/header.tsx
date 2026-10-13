"use client";

import Link from "next/link";
import { useState } from "react";
import { MealsMark } from "@/components/tinymeals/mark";
import { getApp } from "@/lib/apps";

const NAV = [
  { href: "/tinymeals#how", label: "How it works" },
  { href: "/tinymeals#try", label: "Try it" },
  { href: "/tinymeals#plan", label: "First foods" },
  { href: "/tinymeals#share", label: "Sharing" },
  { href: "/tinymeals#guides", label: "Guides" },
  { href: "/tinymeals#faq", label: "FAQ" },
];

const app = getApp("tinymeals");
const cta = app.live && app.appStoreUrl ? { href: app.appStoreUrl, label: "Get the app" } : { href: "/tinymeals#get", label: "Get early access" };

export function MealsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-[rgba(254,248,243,0.92)] backdrop-blur-[10px]">
      <div className="mx-auto box-border flex w-full max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-3">
        <Link href="/tinymeals" className="flex flex-none items-center gap-2.5 text-meals-ink hover:text-meals-ink" aria-label="TinyMeals home">
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
          href={cta.href}
          rel={app.live ? "noopener" : undefined}
          className="flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] bg-meals-sage px-[clamp(16px,2vw,22px)] text-[14.5px] font-extrabold text-white transition-colors hover:bg-meals-sage-deep hover:text-white active:scale-[0.97]"
        >
          {cta.label}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="meals-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(90,60,20,0.08)] active:scale-95 min-[820px]:hidden"
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
          aria-label="TinyMeals menu"
          className="flex flex-col px-[clamp(16px,4vw,40px)] pb-3.5 pt-1.5 [animation:tm-rise_.25s_ease_both] min-[820px]:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center text-base font-extrabold text-meals-ink hover:text-meals-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
