"use client";

import { useState } from "react";
import { AppTile } from "@/components/app-identity";

const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#try", label: "Try it" },
  { href: "#night", label: "Night mode" },
  { href: "#guides", label: "Guides" },
  { href: "#faq", label: "FAQ" },
];

/** TinyNaps nav. The button goes to the App Store once the app is live, otherwise to the launch list. */
export function NapsHeader({ ctaHref, ctaLabel, external }: { ctaHref: string; ctaLabel: string; external: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-[rgba(254,248,243,0.92)] backdrop-blur-[10px]">
      <div className="mx-auto box-border flex max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-3">
        <a href="#top" className="flex flex-none items-center gap-2.5 text-tb-ink">
          <AppTile app="tinynaps" className="h-[34px] w-[34px] rounded-[11px]" markClassName="h-[26px] w-[26px]" />
          <span className="text-lg font-extrabold tracking-[-0.01em]">TinyNaps</span>
        </a>
        <nav aria-label="Main" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap text-sm font-bold text-tb-body hover:text-tb-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <a
          href={ctaHref}
          rel={external ? "noopener" : undefined}
          className="flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] bg-[#232F48] px-[clamp(16px,2vw,22px)] text-[14.5px] font-extrabold text-white hover:bg-[#1A2337] hover:text-white active:scale-[0.97]"
        >
          {ctaLabel}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="naps-menu"
          aria-label="Menu"
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
          id="naps-menu"
          aria-label="Mobile"
          className="flex flex-col gap-0.5 px-[clamp(16px,4vw,40px)] pb-3.5 pt-1 [animation:tm-rise_.25s_ease_both] min-[820px]:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center text-base font-extrabold text-tb-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
