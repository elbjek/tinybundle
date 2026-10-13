"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppMark } from "@/components/app-identity";
import { getApp } from "@/lib/apps";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#guides", label: "Guides" },
  { href: "#faq", label: "FAQ" },
  { href: "#family", label: "Other apps" },
];

/** Fixed navigation: clear over the hero, frosted white once the page scrolls. */
export function BloomsHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const read = () => setScrolled(window.scrollY > 24);
    read();
    window.addEventListener("scroll", read, { passive: true });
    return () => window.removeEventListener("scroll", read);
  }, []);
  const app = getApp("tinyblooms");
  const cta = app.live && app.appStoreUrl ? { href: app.appStoreUrl, label: "Get the app" } : { href: "#get", label: "Get early access" };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-[background-color,box-shadow,backdrop-filter] duration-[400ms] ${
        scrolled ? "bg-white/[0.94] shadow-[0_4px_18px_rgba(90,60,20,0.06)] backdrop-blur-[12px]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto box-border flex max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-2">
        <Link href="/" aria-label="TinyBundle home" className="flex flex-none items-center gap-2 text-tb-ink">
          <AppMark app="tinybundle" className="h-[26px] w-[26px]" />
          <span className="hidden text-base font-extrabold min-[420px]:inline">TinyBundle</span>
        </Link>
        <span aria-hidden="true" className="h-5 w-px flex-none bg-[#E8DCC8]" />
        <span className="flex-none text-[15px] font-extrabold">TinyBlooms</span>
        <nav aria-label="Page" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,28px)] min-[820px]:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap text-[13.5px] font-bold text-tb-body hover:opacity-70">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <a
          href={cta.href}
          rel={app.live ? "noopener" : undefined}
          className="flex h-[38px] flex-none items-center whitespace-nowrap rounded-[19px] bg-[#55915E] px-4 text-[13.5px] font-extrabold text-white hover:brightness-[0.93]"
        >
          {cta.label}
        </a>
      </div>
    </header>
  );
}
