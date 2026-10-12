"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppMark } from "@/components/app-identity";
import { BloomsDemo, LayersDemo, MealsDemo, NapsDemo } from "@/components/home/app-demos";
import { MOMENTS, type MomentApp } from "@/components/home/moments";
import { getApp } from "@/lib/apps";

const DEMOS: Record<MomentApp, () => React.ReactNode> = {
  tinyblooms: BloomsDemo,
  tinymeals: MealsDemo,
  tinylayers: LayersDemo,
  tinynaps: NapsDemo,
};

/** The four apps as a list on the left and a working demo of the selected one on the right. */
export function AppsSection() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const onPick = (event: Event) => {
      const i = MOMENTS.findIndex((m) => m.app === (event as CustomEvent<MomentApp>).detail);
      if (i >= 0) setSelected(i);
    };
    window.addEventListener("tb:pick-app", onPick);
    return () => window.removeEventListener("tb:pick-app", onPick);
  }, []);

  const current = MOMENTS[selected];
  const Demo = DEMOS[current.app];

  return (
    <section id="apps" className="mx-auto box-border max-w-[1180px] scroll-mt-16 px-[clamp(18px,4vw,40px)] pt-[clamp(64px,9vw,120px)]">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3.5">
        <div className="min-w-0 flex-[1_1_min(100%,520px)]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">The bundle</p>
          <h2 className="mt-2.5 text-balance text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Four little apps. Try each one right here.
          </h2>
        </div>
        <p className="max-w-[40ch] flex-[1_1_min(100%,320px)] text-pretty text-[clamp(15px,1.4vw,17px)] leading-relaxed text-tb-body">
          Each one does a single job, gently. Tap the screens: they work like the real thing.
        </p>
      </div>
      <div className="mt-[clamp(28px,4vw,44px)] grid items-stretch gap-[clamp(18px,3vw,32px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
        <ul className="flex min-w-0 flex-col gap-2.5">
          {MOMENTS.map((m, i) => {
            const on = i === selected;
            const info = getApp(m.app);
            const live = !info?.comingSoon;
            return (
              <li
                key={m.app}
                className={`rounded-3xl border-[1.5px] px-5 py-[18px] transition-[background,box-shadow,border-color] duration-300 ${
                  on ? "border-white bg-white shadow-[0_12px_28px_rgba(90,60,20,0.08)]" : "border-[#F0E4D2] hover:border-[#E2CFB2]"
                }`}
              >
                <button type="button" onClick={() => setSelected(i)} aria-pressed={on} className="flex w-full items-center gap-3.5 text-left">
                  <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-2xl" style={{ background: m.night ? "#EBE6F5" : m.tile }}>
                    <AppMark app={m.app} className="h-[34px] w-[34px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="text-lg font-extrabold text-tb-ink">{m.name}</span>
                      <span
                        className={`inline-flex h-6 items-center whitespace-nowrap rounded-xl px-2.5 text-[11.5px] font-extrabold ${
                          live ? "bg-[#EEF3E8] text-[#47523B]" : "bg-tb-sand text-[#8A6A3C]"
                        }`}
                      >
                        {live ? "Available" : "Coming soon"}
                      </span>
                    </span>
                    <span className="mt-[3px] block text-pretty text-sm leading-normal text-tb-body">{info?.card}</span>
                  </span>
                </button>
                {on ? (
                  <div className="mt-4 flex flex-wrap items-center gap-x-[18px] gap-y-3 pl-[66px] [animation:tb-swap_.35s_ease_both]">
                    <Link
                      href={`/${m.app}`}
                      className="inline-flex h-11 items-center rounded-[22px] px-5 text-[14.5px] font-extrabold active:scale-[0.97]"
                      style={{ background: m.night ? "#6F64A8" : m.main, color: "#FFFFFF" }}
                    >
                      See {m.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSelected((selected + 1) % MOMENTS.length)}
                      className="text-[13.5px] font-extrabold"
                      style={{ color: m.soft }}
                    >
                      Next app &rarr;
                    </button>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div
          className="relative flex min-w-0 items-center justify-center overflow-hidden rounded-[34px] p-[clamp(20px,3vw,40px)] transition-[background] duration-500"
          style={{ background: current.panel }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full opacity-50 transition-[background] duration-500"
            style={{ background: current.night ? "#C9C0E6" : current.tint }}
          />
          <div key={current.app} className="relative flex w-full justify-center [animation:tb-swap_.45s_cubic-bezier(.34,1.2,.64,1)_both]">
            <Demo />
          </div>
        </div>
      </div>
    </section>
  );
}
