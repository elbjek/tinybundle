"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AppMark, BundleArcs } from "@/components/app-identity";
import { MOMENTS } from "@/components/home/moments";

const NAV = [
  { href: "#apps", label: "Our apps" },
  { href: "#how", label: "How it works" },
  { href: "#guides", label: "Guides" },
  { href: "#faq", label: "FAQ" },
  { href: "#articles", label: "Tiny tips" },
];

/** Where the sun dot sits on the arc for each moment (0 to 1 along the curve). */
const ARC_T = [0.074, 0.358, 0.642, 0.926];
const STARS = [
  ["12%", "14%", 4, "2.6s", "0s"],
  ["22%", "82%", 5, "3s", ".6s"],
  ["38%", "7%", 3, "2.2s", "1.1s"],
  ["9%", "62%", 3, "2.8s", ".3s"],
  ["30%", "92%", 3, "2.4s", "1.6s"],
  ["16%", "36%", 4, "3.2s", ".9s"],
] as const;

function useViewport() {
  const [size, setSize] = useState({ vw: 1200, ih: 900 });
  useEffect(() => {
    const read = () => setSize({ vw: window.innerWidth, ih: window.innerHeight });
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);
  return size;
}

/** Navigation and the scroll-driven hero, which walk through a parent's day: playtime, lunch, bedtime, 2 am. */
export function HomeTop() {
  const { vw, ih } = useViewport();
  const wide = vw >= 700;
  const heroRef = useRef<HTMLElement>(null);
  const [hero, setHero] = useState(0);
  const [dotT, setDotT] = useState(ARC_T[0]);
  const [heroX, setHeroX] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const paused = useRef(false);
  const manual = useRef(false);
  const raf = useRef(0);

  const scrub = useCallback(() => {
    const el = heroRef.current;
    setScrolled(window.scrollY > 24);
    if (!el || window.innerWidth < 700) return;
    const span = el.offsetHeight - window.innerHeight;
    const p = span > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span)) : 0;
    const x = p * 3;
    const seg = Math.min(2, Math.floor(x));
    const k = Math.min(1, Math.max(0, (x - seg - 0.2) / 0.6));
    const e = k * k * (3 - 2 * k);
    setDotT(ARC_T[seg] + (ARC_T[seg + 1] - ARC_T[seg]) * e);
    setHero(Math.min(3, Math.round(x)));
    setHeroX(x);
  }, []);

  useEffect(() => {
    scrub();
    window.addEventListener("scroll", scrub, { passive: true });
    return () => window.removeEventListener("scroll", scrub);
  }, [scrub]);

  /** Phones: animate the sun to a moment instead of scrolling to it. */
  const glideTo = useCallback((i: number) => {
    cancelAnimationFrame(raf.current);
    setHero(i);
    const from = ARC_T[hero];
    const to = ARC_T[i];
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / 1100);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      setDotT(from + (to - from) * e);
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, [hero]);

  useEffect(() => {
    if (wide) return;
    const tick = setInterval(() => {
      if (!paused.current && !manual.current) glideTo((hero + 1) % MOMENTS.length);
    }, 4600);
    return () => clearInterval(tick);
  }, [wide, hero, glideTo]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const pick = (i: number) => {
    if (wide) {
      const el = heroRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (el.offsetHeight - window.innerHeight) * (i / 3), behavior: "smooth" });
    } else {
      manual.current = true;
      glideTo(i);
    }
  };

  const cur = MOMENTS[hero];
  const night = cur.night;
  const atTop = !scrolled && !menu;
  const navDark = atTop && night;
  const y = 190 * (1 - dotT) * (1 - dotT) - 140 * dotT * (1 - dotT) + 190 * dotT * dotT;
    const body = night ? "#CFCBD8" : "#5A5245";
  const showSub = !wide || ih >= 640;
  const showTileMeta = !wide || ih >= 700;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-20 transition-[background,box-shadow,border-color] duration-500"
        style={{
          background: atTop ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.94)",
          backdropFilter: atTop ? "none" : "blur(12px)",
          borderBottom: `1px solid ${atTop ? "rgba(243,231,211,0)" : "#F3E7D3"}`,
          boxShadow: atTop ? "none" : "0 4px 18px rgba(90,60,20,0.06)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-[7px]">
          <a href="#top" className="flex flex-none items-center gap-2 transition-colors" style={{ color: navDark ? "#FFFFFF" : "#2E2E2E" }}>
            <svg viewBox="0 0 64 64" fill="none" className="h-7 w-7 overflow-visible" aria-hidden="true">
              <BundleArcs />
            </svg>
            <span className="text-[17px] font-extrabold tracking-[-0.01em]">TinyBundle</span>
          </a>
          <nav aria-label="Main" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[13.5px] font-bold transition-colors hover:opacity-70"
                style={{ color: navDark ? "#E6E3EC" : "#5A5245" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex-1 min-[820px]:hidden" />
          <a
            href="#apps"
            className="flex h-[38px] flex-none items-center whitespace-nowrap rounded-[19px] px-[clamp(14px,1.8vw,18px)] text-[13.5px] font-extrabold transition-colors duration-700 hover:brightness-95 active:scale-[0.97]"
            style={{ background: cur.main, color: cur.btnInk }}
          >
            Explore the apps
          </a>
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-controls="home-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(90,60,20,0.08)] active:scale-95 min-[820px]:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d={menu ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="#2E2E2E" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {menu ? (
          <nav
            id="home-menu"
            aria-label="Main"
            className="flex flex-col border-t border-tb-border bg-tb px-[clamp(16px,4vw,40px)] pb-3.5 pt-1.5 [animation:tm-rise_.25s_ease_both] min-[820px]:hidden"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="flex h-12 items-center border-b border-tb-border text-base font-extrabold text-tb-ink last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <section id="top" ref={heroRef} className="relative" style={{ height: wide ? "calc(100svh + 210vh)" : "auto" }}>
        <div
          className="sticky top-0 flex flex-col overflow-hidden transition-[background] duration-[900ms]"
          style={{ background: cur.heroBg, minHeight: wide ? "100svh" : "auto" }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 transition-opacity duration-[900ms]" style={{ opacity: night ? 1 : 0 }}>
            {STARS.map(([top, left, size, dur, delay]) => (
              <span
                key={`${top}-${left}`}
                className="absolute rounded-full bg-[#F2C98B]"
                style={{ top, left, width: size, height: size, animation: `tm-twinkle ${dur} ease-in-out ${delay} infinite` }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-[120px] h-80 w-80 rounded-full transition-[background,opacity] duration-[900ms]"
            style={{ background: cur.tint, opacity: night ? 0.35 : 0.7 }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[210px] top-[30%] h-[300px] w-[300px] rounded-full transition-[background,opacity] duration-[900ms]"
            style={{ background: cur.tint, opacity: night ? 0.35 : 0.7 }}
          />

          <div className="relative mx-auto box-border flex w-full max-w-[1120px] flex-1 flex-col items-center justify-center px-[clamp(18px,4vw,40px)] pb-[clamp(28px,5vh,64px)] pt-[calc(52px+clamp(40px,10vh,110px))] text-center">
            <h1
              className="inline-flex min-h-8 items-center gap-2.5 rounded-2xl py-1.5 pl-2.5 pr-3.5 text-xs font-extrabold tracking-[0.02em] transition-colors duration-[900ms] [animation:tm-rise_.5s_ease_both]"
              style={{ background: night ? "rgba(255,255,255,0.08)" : "#FFFFFF", color: body }}
            >
              <span className="flex gap-[3px]" aria-hidden="true">
                {["#55915E", "#D17A2A", "#3D6DA8", "#6F64A8"].map((c) => (
                  <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
                ))}
              </span>
              Calm parenting apps for baby sleep, first foods, play and daily care
            </h1>
            <p
              className="mt-4 min-h-[2.04em] max-w-[20ch] text-balance text-[clamp(34px,min(5.6vw,8vh),72px)] font-extrabold leading-[1.02] tracking-[-0.035em] transition-colors duration-[900ms]"
              style={{ color: night ? "#FFFFFF" : "#2E2E2E" }}
            >
              <span key={`t${hero}`} className="block [animation:tb-swap_.5s_ease_both]">
                {cur.title}
                <br />
                <span className="transition-colors duration-[900ms]" style={{ color: cur.main }}>
                  {cur.title2}
                </span>
              </span>
            </p>
            {showSub ? (
              <p className="mt-3.5 max-w-[58ch] text-pretty text-[clamp(15px,1.4vw,18px)] leading-[1.55] transition-colors duration-[900ms]" style={{ color: body }}>
                <span key={`s${hero}`} className="block [animation:tb-swap_.5s_ease_both]">
                  {cur.line}
                </span>
              </p>
            ) : null}
            <div className="mt-[22px] flex flex-wrap items-center justify-center gap-x-[22px] gap-y-3">
              <a
                href="#apps"
                className="flex h-[54px] items-center gap-2.5 rounded-[18px] px-[26px] text-base font-extrabold transition-[background,color,box-shadow] duration-[900ms] hover:brightness-95 active:scale-[0.97]"
                style={{ background: cur.main, color: cur.btnInk, boxShadow: `0 8px 20px ${cur.mainGlow}` }}
              >
                Explore the Bundle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#apps"
                onClick={() => window.dispatchEvent(new CustomEvent("tb:pick-app", { detail: cur.app }))}
                className="border-b-2 pb-0.5 text-[15px] font-extrabold transition-colors duration-[900ms]"
                style={{ color: cur.main, borderColor: cur.mainGlow }}
              >
                Try {cur.name} &rarr;
              </a>
            </div>

            <div
              className="mt-[clamp(10px,2vh,22px)] w-full"
              onMouseEnter={() => (paused.current = true)}
              onMouseLeave={() => (paused.current = false)}
            >
              {wide ? (
                <div aria-hidden="true" className="relative -mb-[1.2%] aspect-[8/1] w-full">
                  <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                    <path
                      d="M60 190Q500-70 940 190"
                      fill="none"
                      strokeWidth="2.5"
                      strokeDasharray="2 10"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      style={{ stroke: night ? "rgba(201,192,230,0.45)" : "rgba(154,108,30,0.35)", transition: "stroke .9s ease" }}
                    />
                  </svg>
                  <div
                    className="absolute -ml-[15px] -mt-[15px] h-[30px] w-[30px] rounded-full bg-tb-amber shadow-[0_0_0_8px_rgba(226,160,63,0.18),0_0_34px_6px_rgba(226,160,63,0.45)]"
                    style={{ left: `${(60 + 880 * dotT) / 10}%`, top: `${y / 2}%` }}
                  />
                </div>
              ) : null}
              <div className="grid gap-[clamp(10px,1.4vw,14px)] text-left" style={{ gridTemplateColumns: `repeat(${wide ? 4 : 2},minmax(0,1fr))` }}>
                {MOMENTS.map((m, i) => {
                  const on = i === hero;
                  const dark = (on && m.night) || (night && !on);
                  const fill = !on
                    ? 0
                    : wide
                      ? Math.round(100 * Math.min(1, Math.max(0, i === 0 ? heroX / 0.5 : i === 3 ? (heroX - 2.5) / 0.5 : heroX - i + 0.5)))
                      : 100;
                  return (
                    <button
                      key={m.app}
                      type="button"
                      onClick={() => pick(i)}
                      aria-pressed={on}
                      className="min-w-0 rounded-3xl p-[clamp(13px,1.5vw,17px)] text-left transition-[background,transform,box-shadow] duration-500 active:scale-[0.98]"
                      style={{
                        background: on ? m.tile : night ? "#2B2843" : "#FFFFFF",
                        transform: on ? "translateY(-8px)" : "none",
                        boxShadow: on ? (m.night ? "0 18px 36px rgba(0,0,0,0.35)" : "0 18px 36px rgba(90,60,20,0.14)") : "none",
                      }}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className={`flex h-[38px] w-[38px] items-center justify-center rounded-xl ${m.night ? "bg-naps-lavender" : ""}`}>
                          <AppMark app={m.app} className="h-[34px] w-[34px]" />
                        </span>
                        <span className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: dark ? "#C9C0E6" : m.soft }}>
                          {m.tileTime}
                        </span>
                      </span>
                      <span className="mt-2.5 block text-[clamp(15px,1.5vw,17px)] font-extrabold" style={{ color: dark ? "#FFFFFF" : "#2E2E2E" }}>
                        {m.tileTitle}
                      </span>
                      {showTileMeta ? (
                        <>
                          <span className="mt-[3px] block text-[13px] leading-[1.45]" style={{ color: dark ? "#CFCBD8" : "#5A5245" }}>
                            {m.tileSub}
                          </span>
                          <span className="mt-2.5 flex items-center gap-[7px]">
                            <span className="h-1 flex-1 overflow-hidden rounded-sm" style={{ background: dark ? "rgba(255,255,255,0.14)" : "rgba(46,46,46,0.08)" }}>
                              <span
                                className="block h-full rounded-sm"
                                style={{ width: `${fill}%`, background: m.main, transition: wide ? "width .12s linear" : "width 4.4s linear" }}
                              />
                            </span>
                            <span className="whitespace-nowrap text-[11.5px] font-extrabold" style={{ color: dark ? "#C9C0E6" : m.soft }}>
                              {m.name}
                            </span>
                          </span>
                        </>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
