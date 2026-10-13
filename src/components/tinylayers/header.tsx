"use client";

import Link from "next/link";
import { useState } from "react";
import { LayersMark } from "@/components/tinylayers/mark";
import { getApp } from "@/lib/apps";

const NAV = [
  { href: "/tinylayers#how", label: "How it works" },
  { href: "/tinylayers#checkin", label: "Check-in" },
  { href: "/tinylayers#modes", label: "Modes" },
  { href: "/tinylayers#guides", label: "Guides" },
  { href: "/tinylayers#faq", label: "FAQ" },
];

const app = getApp("tinylayers");
const cta =
  app.live && app.appStoreUrl
    ? { href: app.appStoreUrl, label: "Get the app" }
    : { href: "/tinylayers#get", label: "Get early access" };

export function LayersHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-[rgba(254,248,243,0.92)] font-nunito text-tb-ink backdrop-blur-[10px]">
      <div className="mx-auto box-border flex w-full max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-3.5">
        <Link href="/tinylayers" className="flex flex-none items-center gap-2.5 text-tb-ink hover:text-tb-ink" aria-label="TinyLayers home">
          <LayersMark className="h-8 w-8" animated />
          <span className="text-lg font-extrabold tracking-[-0.01em]">TinyLayers</span>
        </Link>
        <nav aria-label="TinyLayers" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[860px]:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-bold text-tb-body transition-colors hover:text-tb-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 min-[860px]:hidden" />
        <a
          href={cta.href}
          rel={app.live ? "noopener" : undefined}
          className="flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] bg-[#3D6DA8] px-[clamp(16px,2vw,22px)] text-[14.5px] font-extrabold text-white transition-colors hover:bg-[#35608F] hover:text-white active:scale-[0.97]"
        >
          {cta.label}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="layers-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(90,60,20,0.08)] active:scale-95 min-[860px]:hidden"
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
          id="layers-menu"
          aria-label="TinyLayers menu"
          className="flex flex-col px-[clamp(16px,4vw,40px)] pb-3.5 pt-1.5 [animation:tm-rise_.25s_ease_both] min-[860px]:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center text-base font-extrabold text-tb-ink hover:text-tb-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
