"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AppTile } from "@/components/app-identity";
import type { HeroPanel } from "@/components/home/hero-moments";
import { HomeNav } from "@/components/home/home-nav";
import { onTabKeys, REDUCED_MOTION, useMedia } from "@/components/home/interaction";
import { QrLink } from "@/components/home/qr-link";

const ADVANCE_MS = 5200;
const QUAD_RADII = ["3px 1.5px 1.5px 1.5px", "1.5px 3px 1.5px 1.5px", "1.5px 1.5px 1.5px 3px", "1.5px 1.5px 3px 1.5px"];
const QUAD_COLORS = ["#55915E", "#D17A2A", "#3D6DA8", "#232F48"];
const PHONE_FRAME = "absolute h-[520px] w-[260px] overflow-hidden rounded-[40px] origin-top";

function StatusPill({ live }: { live: boolean }) {
  return (
    <span
      className="inline-flex h-6 flex-none items-center rounded-xl px-2.5 text-[11.5px] font-extrabold"
      style={live ? { background: "#EEF3E8", color: "#47523B" } : { background: "#FFFFFF", color: "#8A6A3C" }}
    >
      {live ? "Available now" : "Coming soon"}
    </span>
  );
}

/** Links every app panel carries: the app's guides hub and its page. */
function PanelLinks({ p, className }: { p: HeroPanel; className: string }) {
  return (
    <span className={`flex flex-wrap gap-2 font-extrabold ${className}`}>
      <Link
        href={`/${p.app}`}
        className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-[14px] px-4 text-white hover:text-white hover:brightness-[0.92] active:scale-[0.97]"
        style={{ background: p.btn }}
      >
        {`Check out ${p.name}`}
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link
        href={`/guides/${p.app}`}
        className="inline-flex h-10 items-center whitespace-nowrap rounded-[14px] bg-white px-4 shadow-[0_2px_10px_rgba(90,60,20,0.08)] hover:shadow-[0_6px_18px_rgba(90,60,20,0.12)] active:scale-[0.97]"
        style={{ color: p.deep }}
      >
        {p.guideLabel}
      </Link>
    </span>
  );
}

/** One hero action: the filled main button or the white secondary one. Internal pages use Link. */
function HeroAction({
  action,
  filled,
  hero,
  btn,
  deep,
  className,
}: {
  action: { href: string; label: string; external: boolean; download: boolean };
  filled: boolean;
  hero: number;
  btn: string;
  deep: string;
  className: string;
}) {
  const look = filled
    ? `${className} text-white hover:text-white hover:brightness-[0.92] transition-[background-color] duration-[600ms]`
    : `${className} bg-white shadow-[0_2px_10px_rgba(90,60,20,0.08)] transition-[color,box-shadow] duration-[600ms] hover:shadow-[0_6px_18px_rgba(90,60,20,0.12)]`;
  const style = filled ? { background: btn } : { color: deep };
  const content = (
    <>
      {action.download ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none">
          <path d="M12 4v11M7 10l5 5 5-5M5 20h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
      <span key={hero} className="[animation:tb-swap_.4s_ease_both]">
        {action.label}
      </span>
      {action.external || action.href.startsWith("#") ? null : <span aria-hidden="true">&rarr;</span>}
    </>
  );
  return action.external || action.href.startsWith("#") ? (
    <a href={action.href} rel={action.external ? "noopener" : undefined} className={look} style={style}>
      {content}
    </a>
  ) : (
    <Link href={action.href} className={look} style={style}>
      {content}
    </Link>
  );
}

/**
 * Navigation and the "day of doors" hero: four moments of a parent's day, one app each. Under 1100px it is a tab bar
 * with a stack of cards you can swipe; from 1100px it is a row of doors that widen when picked and advance on their own
 * until the visitor picks one, hovers them, or prefers reduced motion.
 */
export function HomeTop({ panels, outNow, moreSoon }: { panels: HeroPanel[]; outNow: string; moreSoon: string }) {
  const [hero, setHero] = useState(0);
  const [manual, setManual] = useState(false);
  const [paused, setPaused] = useState(false);
  const wide = useMedia("(min-width: 1100px)");
  const reduce = useMedia(REDUCED_MOTION);
  const touchX = useRef(0);
  const count = panels.length;
  const cur = panels[hero];
  // A live app leads with the App Store; an app that is not out yet leads with its own page.
  const store = { href: cur.ctaHref, label: cur.ctaLabel, external: cur.live, download: cur.live };
  const page = { href: `/${cur.app}`, label: `Check out ${cur.name}`, external: false, download: false };
  const [primary, secondary] = cur.live ? [store, page] : [page, store];

  useEffect(() => {
    if (manual || paused || !wide || reduce) return;
    const tick = setTimeout(() => setHero((h) => (h + 1) % count), ADVANCE_MS);
    return () => clearTimeout(tick);
  }, [hero, manual, paused, wide, reduce, count]);

  const pick = (i: number) => {
    setManual(true);
    setHero(i);
  };

  return (
    <>
      <HomeNav btn={cur.btn} />
      <section id="top" aria-label="TinyBundle apps" className="relative overflow-hidden bg-tb">
        <div className="relative mx-auto box-border grid max-w-[1180px] grid-cols-[minmax(0,1fr)] items-center gap-[26px] px-[clamp(18px,4vw,40px)] pb-10 pt-[78px] min-[760px]:grid-cols-[minmax(0,1fr)_minmax(300px,400px)] min-[760px]:gap-11 min-[1100px]:h-[max(100svh,700px)] min-[1100px]:grid-cols-[minmax(0,1fr)_440px] min-[1100px]:grid-rows-[auto_minmax(0,1fr)] min-[1100px]:items-end min-[1100px]:gap-x-[clamp(20px,3vw,48px)] min-[1100px]:gap-y-0 min-[1100px]:pb-0 min-[1100px]:pt-[calc(52px+clamp(28px,5vh,60px))]">
          <div className="flex min-w-0 flex-col items-start">
            <p className="m-0 mb-2.5 flex items-center gap-2 text-[12.5px] font-bold text-tb-muted">
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-[#5F6F4B]" />
              {moreSoon ? `${outNow} · ${moreSoon}` : outNow}
            </p>
            <h1
              className="m-0 box-border inline-flex items-center gap-2.5 text-balance text-[11.5px] font-extrabold uppercase leading-[1.5] tracking-[0.07em] transition-[color,background-color] duration-[900ms] min-[1100px]:min-h-8 min-[1100px]:rounded-2xl min-[1100px]:bg-(--chip) min-[1100px]:py-1.5 min-[1100px]:pl-2 min-[1100px]:pr-3.5 min-[1100px]:text-xs min-[1100px]:normal-case min-[1100px]:leading-[1.35] min-[1100px]:tracking-[0.02em] min-[1100px]:[animation:tm-rise_.5s_ease_both]"
              style={{ color: cur.deep, "--chip": cur.tile } as CSSProperties}
            >
              <span aria-hidden="true" className="hidden flex-none -rotate-[8deg] grid-cols-[7px_7px] gap-0.5 min-[1100px]:grid">
                {QUAD_COLORS.map((color, i) => (
                  <span key={color} className="h-[7px]" style={{ background: color, borderRadius: QUAD_RADII[i] }} />
                ))}
              </span>
              Calm parenting apps for baby sleep, first foods, play and daily care
            </h1>
            <p className="m-0 mt-3 min-h-[2.16em] max-w-[15ch] text-balance text-[clamp(32px,8.2vw,46px)] font-extrabold leading-[1.08] text-tb-ink min-[1100px]:mt-[18px] min-[1100px]:min-h-[2.1em] min-[1100px]:max-w-[20ch] min-[1100px]:text-[clamp(36px,min(4.3vw,7vh),56px)] min-[1100px]:leading-[1.05]">
              <span key={hero} className="block [animation:tb-swap_.45s_ease_both]">
                <span className="block min-[1100px]:whitespace-nowrap">{cur.title}</span>
                <span className="block transition-colors duration-[800ms] min-[1100px]:whitespace-nowrap" style={{ color: cur.deep }}>
                  {cur.title2}
                </span>
              </span>
            </p>
            <p className="m-0 mt-3 max-w-[44ch] text-pretty text-base leading-[1.55] text-tb-body min-[1100px]:min-h-[3.1em] min-[1100px]:max-w-[46ch] min-[1100px]:text-[clamp(15.5px,1.4vw,18px)]">
              <span key={hero} className="block [animation:tb-swap_.45s_ease_.05s_both]">
                {cur.sub}
              </span>
            </p>
            <div className="mt-[22px] flex w-full max-w-[420px] items-center gap-3 min-[1100px]:hidden">
              {cur.live ? (
                <QrLink
                  key={hero}
                  app={cur.app}
                  name={cur.name}
                  href={cur.ctaHref}
                  className="h-[72px] w-[72px] rounded-2xl p-2 [animation:tb-swap_.4s_ease_both]"
                />
              ) : null}
              <HeroAction
                action={primary}
                filled
                hero={hero}
                btn={cur.btn}
                deep={cur.deep}
                className="flex h-[54px] min-w-0 flex-1 items-center justify-center gap-2.5 rounded-[18px] px-[18px] text-center text-[15.5px] font-extrabold active:scale-[0.97]"
              />
            </div>
            <HeroAction
              action={secondary}
              filled={false}
              hero={hero}
              btn={cur.btn}
              deep={cur.deep}
              className="mt-2.5 box-border flex h-[52px] w-full max-w-[420px] items-center justify-center gap-2 rounded-[18px] text-[15.5px] font-extrabold active:scale-[0.98] min-[1100px]:hidden"
            />
            <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 min-[1100px]:hidden">
              <a href="#apps" className="text-[14.5px] font-extrabold text-[#D17A2A] hover:text-[#B45F1F] active:opacity-60">
                Explore all four apps &rarr;
              </a>
            </div>
          </div>

          <div className="hidden min-w-0 flex-col gap-3 min-[1100px]:mt-[78px] min-[1100px]:flex min-[1100px]:self-start">
            <div className="flex min-w-0 items-stretch gap-3">
              <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                <HeroAction
                  action={primary}
                  filled
                  hero={hero}
                  btn={cur.btn}
                  deep={cur.deep}
                  className="flex h-14 items-center justify-center gap-2.5 whitespace-nowrap rounded-[18px] px-4 text-center text-[15.5px] font-extrabold active:scale-[0.97]"
                />
                <HeroAction
                  action={secondary}
                  filled={false}
                  hero={hero}
                  btn={cur.btn}
                  deep={cur.deep}
                  className="flex h-[54px] items-center justify-center gap-2 whitespace-nowrap rounded-[18px] px-4 text-[15px] font-extrabold active:scale-[0.98]"
                />
              </div>
              {cur.live ? (
                <QrLink
                  key={hero}
                  app={cur.app}
                  name={cur.name}
                  href={cur.ctaHref}
                  className="h-[120px] w-[120px] rounded-[18px] p-2.5 [animation:tb-swap_.4s_ease_both]"
                />
              ) : null}
            </div>
            {cur.live ? <p className="m-0 text-[13px] font-bold text-tb-body">Scan the code with your iPhone camera</p> : null}
          </div>

          <div className="w-full min-w-0 max-w-[420px] justify-self-center min-[1100px]:hidden">
            <div
              role="tablist"
              aria-label="The four TinyBundle apps"
              onKeyDown={(e) => onTabKeys(e, hero, count, pick)}
              className="grid grid-cols-4 gap-0.5 rounded-[18px] bg-[#F3EADF] p-1"
            >
              {panels.map((p, i) => {
                const on = i === hero;
                return (
                  <button
                    key={p.app}
                    type="button"
                    role="tab"
                    id={`hero-tab-${p.app}`}
                    aria-selected={on}
                    aria-controls={`hero-card-${p.app}`}
                    aria-label={`${p.name}, ${p.time}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => pick(i)}
                    className={`flex h-14 min-w-0 cursor-pointer flex-col items-center justify-center gap-[3px] rounded-[14px] transition-[background-color,box-shadow] duration-[250ms] active:scale-95 ${
                      on ? "bg-white shadow-[0_2px_8px_rgba(90,60,20,0.10)]" : "bg-transparent"
                    }`}
                  >
                    <AppTile app={p.app} className="h-[26px] w-[26px] rounded-[9px]" markClassName="h-[22px] w-[22px]" bg="transparent" />
                    <span className="text-[11px] font-extrabold transition-colors duration-[250ms]" style={{ color: on ? p.deep : "#8C8676" }}>
                      {p.time}
                    </span>
                  </button>
                );
              })}
            </div>
            <div
              className="mt-2.5 grid"
              onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 40) pick((hero + (dx < 0 ? 1 : count - 1)) % count);
              }}
            >
              {panels.map((p, i) => {
                const on = i === hero;
                return (
                  <article
                    key={p.app}
                    id={`hero-card-${p.app}`}
                    role="tabpanel"
                    aria-labelledby={`hero-tab-${p.app}`}
                    className="relative h-[450px] overflow-hidden rounded-[28px] [grid-area:1/1] max-[379px]:h-[480px] min-[760px]:h-[470px]"
                    style={{
                      background: p.tile,
                      opacity: on ? 1 : 0,
                      visibility: on ? "visible" : "hidden",
                      transform: on ? "none" : `translateX(${i < hero ? -18 : 18}px) scale(0.98)`,
                      transition: "opacity .45s ease, transform .55s cubic-bezier(.34,1.2,.64,1), visibility .45s",
                    }}
                  >
                    <div className="relative z-[2] px-5 pt-5">
                      <div className="flex items-center gap-2.5">
                        <AppTile app={p.app} className="h-[42px] w-[42px] rounded-[14px]" markClassName="h-[26px] w-[26px]" bg="#FFFFFF" />
                        <div className="min-w-0 flex-1">
                          <h2 className="m-0 text-base font-extrabold leading-[1.25] text-tb-ink">{p.name}</h2>
                          <span className="text-[12.5px] font-bold text-tb-body">{p.tag}</span>
                        </div>
                        <StatusPill live={p.live} />
                      </div>
                      <p className="m-0 mt-4 text-balance text-lg font-extrabold leading-[1.3] text-tb-ink">{p.head}</p>
                      <p className="m-0 mt-1.5 text-pretty text-[14.5px] leading-[1.55] text-tb-body">{p.text}</p>
                      <PanelLinks p={p} className="mt-3 text-[13.5px]" />
                    </div>
                    <div className="relative mt-[22px] h-0">
                      <div
                        aria-hidden="true"
                        className={`${PHONE_FRAME} left-1/2 top-0 -ml-[130px] rotate-[4deg] scale-[0.72] shadow-[0_18px_40px_rgba(35,47,72,0.2)]`}
                        style={{ background: p.screenBg }}
                      >
                        {p.screen}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div aria-hidden="true" className="mt-3 flex justify-center gap-1.5">
              {panels.map((p, i) => (
                <span
                  key={p.app}
                  className="h-2 rounded-full transition-[width,background-color] duration-300"
                  style={{ width: i === hero ? 22 : 8, background: i === hero ? p.btn : "#E0D6C6" }}
                />
              ))}
            </div>
          </div>

          <div
            role="tablist"
            aria-label="The four TinyBundle apps"
            onKeyDown={(e) => onTabKeys(e, hero, count, pick)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="col-span-full mt-[clamp(24px,4vh,36px)] hidden h-full min-h-0 gap-3 overflow-hidden min-[1100px]:flex"
          >
            {panels.map((p, i) => {
              const on = i === hero;
              return (
                <div
                  key={p.app}
                  onClick={() => pick(i)}
                  className="relative box-border min-w-0 cursor-pointer overflow-hidden rounded-t-[28px]"
                  style={{ flex: on ? "3.8 1 0%" : "1 1 0%", background: p.tile, transition: "flex .7s cubic-bezier(.34,1.1,.64,1)" }}
                >
                  <div
                    aria-hidden="true"
                    className={`${PHONE_FRAME} pointer-events-none`}
                    style={{
                      background: p.screenBg,
                      left: on ? "calc(100% - 262px)" : "calc(50% - 130px)",
                      top: on ? 30 : 178,
                      transform: on ? "scale(0.84)" : "rotate(5deg) scale(0.6)",
                      boxShadow: on ? "0 26px 50px rgba(35,47,72,0.24)" : "0 12px 26px rgba(35,47,72,0.14)",
                      transition:
                        "left .7s cubic-bezier(.34,1.1,.64,1), top .7s cubic-bezier(.34,1.1,.64,1), transform .7s cubic-bezier(.34,1.2,.64,1), box-shadow .5s ease",
                    }}
                  >
                    {p.screen}
                  </div>
                  <div className="relative z-[2] box-border px-5 py-[22px]" style={{ maxWidth: on ? 320 : "none" }}>
                    <div className={`flex gap-2.5 ${on ? "flex-row items-center" : "flex-col items-start"}`}>
                      <AppTile app={p.app} className="h-[42px] w-[42px] rounded-[14px]" markClassName="h-[26px] w-[26px]" bg="#FFFFFF" />
                      <div className="flex min-w-0 flex-col">
                        <span className="text-[11.5px] font-extrabold uppercase tracking-[0.07em]" style={{ color: p.deep }}>
                          {p.time}
                        </span>
                        <button
                          type="button"
                          role="tab"
                          id={`hero-door-tab-${p.app}`}
                          aria-selected={on}
                          aria-controls={`hero-door-${p.app}`}
                          tabIndex={on ? 0 : -1}
                          onClick={() => pick(i)}
                          className="cursor-pointer p-0 text-left text-base font-extrabold leading-[1.25] text-tb-ink"
                        >
                          {p.name}
                        </button>
                        <span className="text-[12.5px] font-bold text-tb-body">{p.tag}</span>
                      </div>
                    </div>
                    <div
                      id={`hero-door-${p.app}`}
                      role="tabpanel"
                      aria-labelledby={`hero-door-tab-${p.app}`}
                      className={on ? "block [animation:tb-swap_.5s_ease_.12s_both]" : "hidden"}
                    >
                      <span className="mt-4 inline-flex">
                        <StatusPill live={p.live} />
                      </span>
                      <p className="m-0 mt-3 text-balance text-[clamp(17px,1.6vw,20px)] font-extrabold leading-[1.3] text-tb-ink">{p.head}</p>
                      <p className="m-0 mt-2 text-pretty text-[15px] leading-[1.55] text-tb-body">{p.text}</p>
                      <PanelLinks p={p} className="mt-4 text-[14px]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
