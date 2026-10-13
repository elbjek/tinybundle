"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { DEMO_TEMP, outfitAnswer, type OutfitContext } from "@/components/tinylayers/outfit";

type Face = "layers" | "wore" | "feel" | "result";
type Feel = "cool" | "ok" | "warm";

type State = {
  temps: Record<OutfitContext, number>;
  ctx: OutfitContext;
  age: number;
  face: Face;
  feel: Feel | null;
  flip: number;
  burst: boolean;
  off: Record<string, boolean>;
  extra: Record<string, boolean>;
  editing: boolean;
};

const AGES = ["0–3 mo", "3–12 mo", "1 yr +"];
const RANGE: Record<OutfitContext, [number, number]> = { sleep: [14, 28], out: [-4, 30] };
const EXTRAS: Record<OutfitContext, string[]> = { sleep: ["Socks", "Scratch mittens"], out: ["Stroller blanket", "Mittens"] };
const CONFETTI_COLORS = ["#E2A03F", "#7FA8CF", "#3D6DA8", "#A9C08A", "#F6D9A8", "#D17A2A"];
const CONFETTI = Array.from({ length: 16 }, (_, i) => ({
  rotate: `rotate(${i * 22.5 - 170}deg)`,
  size: 6 + (i % 3) * 2,
  radius: i % 2 ? "2px" : "50%",
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  rise: `${[-110, -150, -80][i % 3]}px`,
  delay: `${(i % 4) * 0.04}s`,
}));

const INITIAL: State = {
  temps: { sleep: DEMO_TEMP, out: 12 },
  ctx: "sleep",
  age: 1,
  face: "layers",
  feel: null,
  flip: 0,
  burst: false,
  off: {},
  extra: {},
  editing: false,
};

const lc = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

function tempWord(ctx: OutfitContext, t: number) {
  if (ctx === "sleep") return t >= 24 ? "Warm room" : t >= 20 ? "Comfortable" : t >= 17 ? "Cool room" : "Cold room";
  return t >= 24 ? "Hot & sunny" : t >= 17 ? "Mild" : t >= 9 ? "Chilly" : "Cold";
}

const PRIMARY =
  "flex h-[50px] w-full cursor-pointer items-center justify-center gap-[9px] rounded-[18px] bg-[#3D6DA8] text-[15px] font-extrabold text-white hover:bg-[#35608F] active:scale-[0.98]";
const LINK = "cursor-pointer font-extrabold text-[#D17A2A] active:opacity-60";

function Tick({ size, stroke }: { size: number; stroke: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEELS: { feel: Feel; label: string; hint: string; bg: string; ring: string; ink: string; icon: ReactNode }[] = [
  {
    feel: "cool",
    label: "Cool",
    hint: "Chest felt cool to the touch",
    bg: "#E7EFF7",
    ring: "#7FA8CF",
    ink: "#2F5B8A",
    icon: <path d="M12 3.5v17M4.6 7.8l14.8 8.4M19.4 7.8 4.6 16.2" stroke="#2F5B8A" strokeWidth="1.9" strokeLinecap="round" />,
  },
  {
    feel: "ok",
    label: "Comfortable",
    hint: "Warm and settled, just right",
    bg: "#EEF3E8",
    ring: "#A9C08A",
    ink: "#4F5D3E",
    icon: <path d="m6 12.5 4 4 8-9" stroke="#4F5D3E" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    feel: "warm",
    label: "Warm",
    hint: "Sweaty neck or flushed chest",
    bg: "#F3EADF",
    ring: "#F6D9A8",
    ink: "#8A4F14",
    icon: (
      <>
        <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" stroke="#B0651A" strokeWidth="1.9" />
        <path
          d="M12 3.6v2.1M12 18.3v2.1M3.6 12h2.1M18.3 12h2.1M6.1 6.1 7.5 7.5M16.5 16.5l1.4 1.4M17.9 6.1 16.5 7.5M7.5 16.5l-1.4 1.4"
          stroke="#B0651A"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

/** The app's Home card as a demo: pick sleep or going out, nudge the temperature, then run a pretend check-in. */
export function TryIt({ children }: { children: ReactNode }) {
  const [s, setS] = useState<State>(INITIAL);
  const burstTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cardRef = useRef<HTMLDivElement>(null);
  const focusCard = useRef(false);

  useEffect(() => () => clearTimeout(burstTimer.current), []);
  useEffect(() => {
    if (!focusCard.current) return;
    focusCard.current = false;
    cardRef.current?.focus({ preventScroll: true });
  }, [s.flip]);

  const flipTo = (face: Face, patch: Partial<State> = {}) => setS((p) => ({ ...p, ...patch, face, flip: p.flip + 1 }));
  const step = (face: Face, patch: Partial<State> = {}) => {
    focusCard.current = true;
    flipTo(face, patch);
  };
  const setCtx = (ctx: OutfitContext) => {
    if (ctx !== s.ctx) flipTo("layers", { ctx, feel: null, off: {}, extra: {}, editing: false });
  };
  const bump = (d: number) =>
    setS((p) => {
      const [min, max] = RANGE[p.ctx];
      const next = { ...p, temps: { ...p.temps, [p.ctx]: Math.min(max, Math.max(min, p.temps[p.ctx] + d)) }, off: {}, extra: {}, editing: false };
      return p.face === "layers" ? next : { ...next, face: "layers", feel: null, flip: p.flip + 1 };
    });
  const pickFeel = (feel: Feel) => {
    const burst = feel === "ok" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    step("result", { feel, burst });
    clearTimeout(burstTimer.current);
    if (burst) burstTimer.current = setTimeout(() => setS((p) => ({ ...p, burst: false })), 1500);
  };

  const isSleep = s.ctx === "sleep";
  const t = s.temps[s.ctx];
  const [min, max] = RANGE[s.ctx];
  const tempLabel = `${t}°C`;
  const answer = outfitAnswer(s.ctx, t);
  const warmer = outfitAnswer(s.ctx, t - 3);
  const cooler = outfitAnswer(s.ctx, t + 3);

  const plan = answer.rows.filter((r) => r.wearable).map((r) => r.name);
  const worn = plan.filter((n) => !s.off[n]);
  const skipped = plan.filter((n) => s.off[n]);
  const added = EXTRAS[s.ctx].filter((n) => s.extra[n]);
  const changed = skipped.length + added.length > 0;
  const woreLine = changed
    ? `Wore ${skipped.length ? `the plan minus ${skipped.map(lc).join(", ")}` : "the plan"}${added.length ? ` + ${added.map(lc).join(", ")}` : ""}`
    : "Wore tonight’s plan as suggested";

  const results = {
    cool: {
      bg: "#E7EFF7",
      ink: "#2F5B8A",
      kicker: "A little cool",
      title: "Add one layer next time",
      body: "Cool chest, settled baby? Easy fix. We’ll nudge the outfit one step warmer.",
      change: warmer.title === answer.title ? "Add a light layer on top" : warmer.title,
    },
    ok: {
      bg: "#EEF3E8",
      ink: "#4F5D3E",
      kicker: "Just right",
      title: "That’s a win. Saved.",
      body: "We’ll remember this outfit works for your baby at this temperature.",
      change: `Keep it: ${lc(answer.title)}`,
    },
    warm: {
      bg: "#F3EADF",
      ink: "#8A4F14",
      kicker: "Running warm",
      title: "Try one layer lighter",
      body: "A sweaty neck means too much. Take a layer off now, and we’ll adjust next time.",
      change: cooler.title === answer.title ? "Drop the outer layer" : cooler.title,
    },
  };
  let result = results[s.feel ?? "ok"];
  if (s.feel === "cool" && skipped.length)
    result = { ...result, title: "Keep the full plan next time", change: `Don’t skip the ${skipped.map(lc).join(" or ")}: ${lc(answer.title)}` };
  if (s.feel === "warm" && added.length)
    result = { ...result, title: "Skip the extras next time", change: `Stick to the plan, without ${added.map(lc).join(" or ")}` };
  if (s.feel === "ok" && changed) result = { ...result, change: `Saved your version: ${worn.concat(added).map(lc).join(", ")}` };

  const stepIx = s.face === "wore" ? 0 : s.face === "feel" ? 1 : 2;
  const wearChips = [
    ...plan.map((n) => ({
      key: n,
      label: n,
      on: !s.off[n],
      toggle: () => setS((p) => ({ ...p, off: { ...p.off, [n]: !p.off[n] } })),
    })),
    ...EXTRAS[s.ctx].map((n) => ({
      key: `extra-${n}`,
      label: `+ ${n}`,
      on: !!s.extra[n],
      toggle: () => setS((p) => ({ ...p, extra: { ...p.extra, [n]: !p.extra[n] } })),
    })),
  ];

  const segment = (on: boolean) =>
    on
      ? "bg-white text-[#2F5B8A] shadow-[0_1px_4px_rgba(90,60,20,0.10)]"
      : "bg-transparent text-tb-muted shadow-none";

  return (
    <div className="mx-auto box-border grid max-w-[1180px] items-center gap-[clamp(24px,4vw,48px)] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,76px)] min-[720px]:grid-cols-2">
      <div className="min-w-0">
        {children}
        <div className="mt-5 flex items-center gap-2.5">
          <span id="tl-age" className="text-[13px] font-extrabold text-tb-muted">
            Age
          </span>
          <div role="group" aria-labelledby="tl-age" className="flex rounded-[13px] bg-white p-[3px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
            {AGES.map((label, i) => (
              <button
                key={label}
                type="button"
                aria-pressed={s.age === i}
                onClick={() => setS((p) => ({ ...p, age: i }))}
                className={`cursor-pointer rounded-[10px] px-3.5 py-2 text-[12.5px] font-extrabold ${
                  s.age === i ? "bg-[#DCE6F2] text-[#2F5B8A] shadow-[0_1px_4px_rgba(90,60,20,0.10)]" : "bg-transparent text-tb-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-w-0 py-[18px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10px] top-[-6px] h-[120px] w-[120px] rotate-[-12deg] rounded-[34px] bg-[#F6D9A8] [animation:tm-float-a_7s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-4px] right-[-16px] h-[170px] w-[170px] rounded-[85px] bg-[#DCE6F2] [animation:tm-float-b_8s_ease-in-out_infinite]" />
          <div className="absolute right-[22%] top-3 h-2 w-2 rounded-full bg-[#E2A03F] [animation:tm-twinkle_2.2s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-[10%] h-[7px] w-[7px] rounded-full bg-[#3D6DA8] [animation:tm-twinkle_2.2s_ease-in-out_infinite_1s]" />
        </div>
        <div className="relative mx-auto box-border max-w-[440px] rounded-[32px] bg-tb p-[18px] shadow-[0_18px_40px_rgba(120,80,40,0.12)]">
          <div role="group" aria-label="Situation" className="flex rounded-[13px] bg-tb-sand p-[3px]">
            <button
              type="button"
              aria-pressed={isSleep}
              onClick={() => setCtx("sleep")}
              className={`flex h-[38px] flex-1 cursor-pointer items-center justify-center gap-[7px] rounded-[11px] text-[13px] font-extrabold active:scale-[0.97] ${segment(isSleep)}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.5 13.8A8.5 8.5 0 1 1 10.2 3.5a7 7 0 0 0 10.3 10.3Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sleep in the room
            </button>
            <button
              type="button"
              aria-pressed={!isSleep}
              onClick={() => setCtx("out")}
              className={`flex h-[38px] flex-1 cursor-pointer items-center justify-center gap-[7px] rounded-[11px] text-[13px] font-extrabold active:scale-[0.97] ${segment(!isSleep)}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="currentColor" strokeWidth="1.9" />
                <path
                  d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                />
              </svg>
              Going outside
            </button>
          </div>

          <div className="mt-2.5 flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
            <button
              type="button"
              onClick={() => bump(-1)}
              disabled={t <= min}
              aria-label="One degree cooler"
              className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full bg-tb-sand text-[22px] font-bold text-[#3D6DA8] active:scale-[0.92] disabled:cursor-default disabled:opacity-40"
            >
              &minus;
            </button>
            <div className="min-w-0 flex-1 text-center" aria-live="polite">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">
                {isSleep ? "Room temperature" : "Outside now"}
              </p>
              <p className="mt-px flex items-baseline justify-center gap-2">
                <span className="text-[28px] font-extrabold leading-[1.1]">{tempLabel}</span>
                <span className="text-xs font-bold text-tb-muted">{tempWord(s.ctx, t)}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => bump(1)}
              disabled={t >= max}
              aria-label="One degree warmer"
              className="flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full bg-tb-sand text-[22px] font-bold text-[#3D6DA8] active:scale-[0.92] disabled:cursor-default disabled:opacity-40"
            >
              +
            </button>
          </div>

          <div className="relative">
            {s.burst ? (
              <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[55%] z-[5] h-0 w-0">
                {CONFETTI.map((c, i) => (
                  <div key={i} className="absolute left-0 top-0 h-0 w-0" style={{ transform: c.rotate }}>
                    <div
                      className="absolute left-[-5px] top-[-5px] opacity-0"
                      style={
                        {
                          width: c.size,
                          height: c.size,
                          borderRadius: c.radius,
                          background: c.color,
                          "--tm-burst-y": c.rise,
                          animation: `tm-burst 1.1s cubic-bezier(.2,.7,.3,1) both ${c.delay}`,
                        } as CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <div
              key={s.flip}
              ref={cardRef}
              tabIndex={-1}
              className="mt-2.5 rounded-[22px] bg-white p-[18px] shadow-[0_8px_22px_rgba(120,80,40,0.07)] outline-none"
              style={{ animation: s.flip ? "tm-flip .5s cubic-bezier(.34,1.2,.64,1) both" : undefined }}
            >
              {s.face === "layers" ? (
                <>
                  <div className="flex items-center justify-between gap-2.5">
                    <p className="min-w-0 text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-[#2F5B8A]">
                      {isSleep ? "Tonight" : "Going out"} &middot; {AGES[s.age]}
                    </p>
                    <span className="inline-flex h-[22px] flex-none items-center rounded-[11px] bg-[#DCE6F2] px-[9px] text-[10.5px] font-extrabold text-[#2F5B8A]">
                      {answer.pill}
                    </span>
                  </div>
                  <p className="mt-[7px] text-balance text-[21px] font-extrabold leading-[1.2]">{answer.title}</p>
                  <ul className="mt-3 flex list-none flex-col p-0">
                    {answer.rows.map((row) => (
                      <li
                        key={row.name}
                        className="flex items-baseline gap-3 py-[9px] shadow-[inset_0_1px_0_#F3E7D3] [animation:tm-rise_.35s_ease_both]"
                      >
                        <span className="w-[52px] flex-none text-[10px] font-extrabold uppercase tracking-[0.06em] text-tb-muted">{row.role}</span>
                        <span className="min-w-0 text-[14.5px] font-extrabold leading-[1.35]">{row.name}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => step("wore", { editing: false })} className={`${PRIMARY} mt-3.5`}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 20.5c-4.4 0-8-3.4-8-8.5s3.6-8.5 8-8.5 8 3.4 8 8.5-3.6 8.5-8 8.5Z" stroke="#FFFFFF" strokeWidth="1.8" />
                      <path d="m8.4 12.2 2.5 2.5 4.7-5.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Try the check-in
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <button
                      type="button"
                      aria-label="Back"
                      onClick={() => step(s.face === "result" ? "feel" : s.face === "feel" ? "wore" : "layers")}
                      className="flex h-[34px] w-[34px] flex-none cursor-pointer items-center justify-center rounded-full bg-tb-sand active:scale-[0.94]"
                    >
                      <svg width="8" height="14" viewBox="0 0 9 16" fill="none" aria-hidden="true">
                        <path d="M8 1 2 8l6 7" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-[#2F5B8A]">
                      Check-in &middot; {stepIx + 1} of 3
                    </p>
                  </div>
                  <div aria-hidden="true" className="flex flex-none items-center gap-[5px]">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 rounded-[3px] transition-[width] duration-300"
                        style={{ width: stepIx === i ? 18 : 6, background: stepIx >= i ? "#3D6DA8" : "#E5DCCD" }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {s.face === "wore" ? (
                <div className="[animation:tm-rise_.3s_ease_both]">
                  <p className="mt-3 text-balance text-xl font-extrabold leading-[1.25]">What did they wear?</p>
                  {s.editing ? (
                    <>
                      <p className="mt-1.5 text-[13px] leading-normal text-tb-muted">Tap to untick anything they didn’t have on.</p>
                      <div className="mt-3 flex flex-wrap gap-[7px] [animation:tm-rise_.3s_ease_both]">
                        {wearChips.map((c) => (
                          <button
                            key={c.key}
                            type="button"
                            aria-pressed={c.on}
                            onClick={c.toggle}
                            className={`box-border flex cursor-pointer items-center gap-2 rounded-[15px] py-2 pl-[9px] pr-3 text-left active:scale-[0.97] ${
                              c.on ? "bg-white shadow-[inset_0_0_0_2px_#3D6DA8]" : "bg-[#F6F1EA]"
                            }`}
                          >
                            <span
                              className={`box-border flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                                c.on ? "bg-[#3D6DA8] shadow-[inset_0_0_0_2px_#3D6DA8]" : "bg-white shadow-[inset_0_0_0_2px_#D8CDBC]"
                              }`}
                            >
                              <Tick size={10} stroke={c.on ? "#FFFFFF" : "transparent"} />
                            </span>
                            <span className={`text-[13px] font-extrabold leading-[1.3] ${c.on ? "text-tb-ink" : "text-tb-muted"}`}>{c.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mt-3 rounded-[18px] bg-tb px-4 py-3.5 [animation:tm-rise_.3s_ease_both]">
                        <p className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">
                          {isSleep ? "Tonight’s plan" : "The outing plan"}
                        </p>
                        <ul className="mt-[9px] flex list-none flex-col gap-2 p-0">
                          {worn.concat(added).map((w) => (
                            <li key={w} className="flex items-center gap-2.5">
                              <span className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-[#3D6DA8]">
                                <Tick size={9} stroke="#FFFFFF" />
                              </span>
                              <span className="text-sm font-bold leading-[1.35]">{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="mt-3 text-center">
                        <button type="button" onClick={() => setS((p) => ({ ...p, editing: true }))} className={`${LINK} text-[13px]`}>
                          Something was different
                        </button>
                      </p>
                    </>
                  )}
                  <button type="button" onClick={() => step("feel", { editing: false })} className={`${PRIMARY} mt-3.5`}>
                    {s.editing ? "Done, next" : "Yes, that’s what they wore"}
                  </button>
                </div>
              ) : null}

              {s.face === "feel" ? (
                <div className="[animation:tm-rise_.3s_ease_both]">
                  <p className="mt-3 text-balance text-xl font-extrabold leading-[1.25]">How did they feel after settling?</p>
                  <div className="mt-2.5 flex items-center justify-between gap-2.5 rounded-[14px] bg-tb px-3.5 py-2.5">
                    <span className="min-w-0 text-pretty text-[12.5px] font-bold text-tb-body">{woreLine}</span>
                    <button type="button" onClick={() => step("wore", { editing: true })} className={`${LINK} flex-none text-[12.5px]`}>
                      Change
                    </button>
                  </div>
                  <div className="mt-3 flex items-start gap-[11px] rounded-[18px] bg-[#EEF3E8] px-[15px] py-[13px]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-px flex-none text-[#5F6F4B]">
                      <path
                        d="M12 20.5s-7.5-4.5-7.5-10a4.4 4.4 0 0 1 7.5-3 4.4 4.4 0 0 1 7.5 3c0 5.5-7.5 10-7.5 10Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-pretty text-[13px] font-bold leading-normal text-[#47523B]">
                      Feel the chest or the back of the neck, not hands or feet. Cool hands are normal.
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col gap-[9px]">
                    {FEELS.map((f) => (
                      <button
                        key={f.feel}
                        type="button"
                        onClick={() => pickFeel(f.feel)}
                        className="flex cursor-pointer items-center gap-[13px] rounded-[18px] px-[15px] py-[13px] text-left hover:shadow-[inset_0_0_0_2px_var(--ring)] active:scale-[0.98]"
                        style={{ background: f.bg, "--ring": f.ring } as CSSProperties}
                      >
                        <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[13px] bg-white">
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            {f.icon}
                          </svg>
                        </span>
                        <span className="block min-w-0" style={{ color: f.ink }}>
                          <span className="block text-[15.5px] font-extrabold">{f.label}</span>
                          <span className="mt-px block text-xs font-bold">{f.hint}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {s.face === "result" ? (
                <>
                  <div className="mt-3.5 rounded-[20px] p-[18px] [animation:tm-rise_.3s_ease_both]" style={{ background: result.bg }}>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.07em]" style={{ color: result.ink }}>
                      {result.kicker}
                    </p>
                    <p className="mt-[7px] text-balance text-xl font-extrabold leading-[1.24]">{result.title}</p>
                    <p className="mt-1.5 text-pretty text-[13.5px] leading-[1.55] text-tb-body">{result.body}</p>
                    <div className="mt-3 rounded-2xl bg-tb px-[15px] py-[13px]">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">Next time at {tempLabel}</p>
                      <p className="mt-[5px] text-pretty text-[14.5px] font-bold leading-[1.45]">{result.change}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => step("layers", { feel: null, off: {}, extra: {}, editing: false })}
                    className={`${PRIMARY} mt-3.5`}
                  >
                    Try another temperature
                  </button>
                  <button
                    type="button"
                    onClick={() => step("feel", { feel: null })}
                    className={`${LINK} block w-full pb-0.5 pt-3.5 text-center text-[13.5px]`}
                  >
                    Pick a different answer
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
