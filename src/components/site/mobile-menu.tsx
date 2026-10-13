"use client";

import { useState } from "react";

/**
 * The phone menu for an app page header: a round button that drops the page's links below the header. Hidden from
 * 820px, where the header shows the links inline. The header needs `relative`, `sticky` or `fixed` positioning.
 */
export function MobileMenu({ id, items }: { id: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
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
      {open ? (
        <nav
          id={id}
          aria-label="Mobile"
          className="absolute inset-x-0 top-full flex flex-col gap-0.5 bg-[rgba(254,248,243,0.97)] px-[clamp(16px,4vw,40px)] pb-3.5 pt-1 shadow-[0_12px_24px_rgba(90,60,20,0.08)] backdrop-blur-[10px] [animation:tm-rise_.25s_ease_both] min-[820px]:hidden"
        >
          {items.map((item) => (
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
    </>
  );
}
