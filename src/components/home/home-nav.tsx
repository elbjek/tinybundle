"use client";

import { useEffect, useState } from "react";
import { BundleQuads } from "@/components/app-identity";
import { useMedia } from "@/components/home/interaction";

const LINKS = [
  { href: "#apps", label: "Our apps" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "#guides", label: "Guides" },
];

/** Fixed top bar: clear over the hero, frosted once the page scrolls or the phone menu opens. */
export function HomeNav({ btn }: { btn: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const wide = useMedia("(min-width: 820px)");
  const open = menu && !wide;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-[background-color,backdrop-filter,box-shadow] duration-[400ms] ${
        solid ? "bg-white/94 shadow-[0_4px_18px_rgba(90,60,20,0.06)] backdrop-blur-[12px]" : "bg-white/0"
      }`}
    >
      <div className="mx-auto box-border flex max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-[7px]">
        <a href="#top" className="flex flex-none items-center gap-2 text-tb-ink">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <BundleQuads />
          </svg>
          <span className="text-[17px] font-extrabold">TinyBundle</span>
        </a>
        <nav aria-label="Main" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap text-[13.5px] font-bold text-tb-body hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <a
          href="#apps"
          className="flex h-10 flex-none items-center whitespace-nowrap rounded-2xl px-[clamp(14px,1.8vw,18px)] text-[13.5px] font-extrabold text-white transition-[background-color] duration-[900ms] hover:text-white hover:brightness-[0.93] active:scale-[0.97]"
          style={{ background: btn }}
        >
          Explore the apps
        </a>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="home-menu"
          onClick={() => setMenu((m) => !m)}
          className="flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(90,60,20,0.08)] active:scale-95 min-[820px]:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="#2E2E2E" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open ? (
        <nav
          id="home-menu"
          aria-label="Menu"
          className="flex flex-col bg-tb px-[clamp(16px,4vw,40px)] pb-3.5 pt-1.5 [animation:tm-rise_.25s_ease_both]"
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenu(false)} className="flex h-12 items-center text-base font-extrabold text-tb-ink">
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
