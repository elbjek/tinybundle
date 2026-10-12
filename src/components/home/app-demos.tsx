"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { AppMark } from "@/components/app-identity";
import type { MomentApp } from "@/components/home/moments";
import { outdoorOutfitFor, sleepOutfitFor } from "@/lib/guides/outfits";

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 20.5c-4.4 0-8-3.4-8-8.5s3.6-8.5 8-8.5 8 3.4 8 8.5-3.6 8.5-8 8.5Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="m8.4 12.2 2.5 2.5 4.7-5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const MOON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.5 13.8A8.5 8.5 0 1 1 10.2 3.5a7 7 0 0 0 10.3 10.3Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
  </svg>
);
const SUN = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
    <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
);

function Phone({ app, shadow, dark = false, children }: { app: MomentApp; shadow: string; dark?: boolean; children: ReactNode }) {
  return (
    <div
      className={`box-border flex h-[560px] w-full max-w-[340px] flex-col overflow-hidden rounded-[34px] px-4 pb-4 pt-5 font-nunito ${
        dark ? "bg-naps-night text-white" : "bg-tb text-tb-ink"
      }`}
      style={{ boxShadow: shadow }}
    >
      <div className="flex items-center justify-between gap-2.5">
        <span className="flex items-center gap-[7px]">
          <AppMark app={app} className="h-6 w-6" />
          <span className="text-[15px] font-extrabold">{appName(app)}</span>
        </span>
        <span
          className={`flex h-8 items-center gap-[7px] rounded-2xl px-[11px] text-xs font-extrabold ${
            dark ? "bg-white/10" : "bg-white shadow-[0_2px_8px_rgba(90,60,20,0.06)]"
          }`}
        >
          <span className="h-[7px] w-[7px] rounded-full" style={{ background: CHIP_DOT[app] }} />
          Mila · 7 mo
        </span>
      </div>
      {children}
    </div>
  );
}

const CHIP_DOT: Record<MomentApp, string> = { tinylayers: "#3D6DA8", tinymeals: "#5F6F4B", tinyblooms: "#55915E", tinynaps: "#C9C0E6" };

function appName(app: MomentApp) {
  return { tinylayers: "TinyLayers", tinymeals: "TinyMeals", tinyblooms: "TinyBlooms", tinynaps: "TinyNaps" }[app];
}

function Segment({ options, value, onPick }: { options: { id: string; label: string; icon: ReactNode }[]; value: string; onPick: (id: string) => void }) {
  return (
    <div className="mt-3 flex rounded-[13px] bg-tb-sand p-[3px]" role="group">
      {options.map((o) => {
        const on = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onPick(o.id)}
            className={`flex h-[34px] flex-1 items-center justify-center gap-1.5 rounded-[11px] text-[12.5px] font-extrabold transition-colors active:scale-[0.97] ${
              on ? "bg-white text-tb-ink shadow-[0_2px_6px_rgba(90,60,20,0.08)]" : "text-tb-muted"
            }`}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Stepper({ label, value, word, color, onMinus, onPlus }: { label: string; value: string; word: string; color: string; onMinus: () => void; onPlus: () => void }) {
  const button = "flex h-[38px] w-[38px] flex-none select-none items-center justify-center rounded-full bg-tb-sand text-[21px] font-bold active:scale-[0.92]";
  return (
    <div className="mt-2.5 flex items-center gap-3 rounded-2xl bg-white px-[11px] py-[9px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
      <button type="button" onClick={onMinus} aria-label={`Lower ${label.toLowerCase()}`} className={button} style={{ color }}>
        &minus;
      </button>
      <div className="min-w-0 flex-1 text-center" aria-live="polite">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">{label}</p>
        <p className="mt-px flex items-baseline justify-center gap-[7px]">
          <span className="text-2xl font-extrabold leading-[1.1]">{value}</span>
          <span className="text-[11.5px] font-bold text-tb-muted">{word}</span>
        </p>
      </div>
      <button type="button" onClick={onPlus} aria-label={`Raise ${label.toLowerCase()}`} className={button} style={{ color }}>
        +
      </button>
    </div>
  );
}

function Rows({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-2.5 flex flex-col">
      {rows.map(([role, name], i) => (
        <div key={`${role}-${name}`} className={`flex items-baseline gap-3 py-2 ${i ? "border-t border-tb-border" : ""}`}>
          <span className="w-[50px] flex-none text-[10px] font-extrabold uppercase tracking-[0.06em] text-tb-muted">{role}</span>
          <span className="min-w-0 text-pretty text-sm font-extrabold leading-[1.35]">{name}</span>
        </div>
      ))}
    </div>
  );
}

function tempWord(c: number, sleep: boolean) {
  if (sleep) return c >= 25 ? "warm for sleeping" : c >= 20 ? "comfortable" : c >= 16 ? "cool" : "cold for the room";
  return c >= 25 ? "warm" : c >= 18 ? "mild" : c >= 10 ? "cool" : c >= 3 ? "cold" : "freezing";
}

/** TinyLayers: room or outdoor temperature in, outfit out, from the same logic as the temperature guides. */
export function LayersDemo() {
  const [ctx, setCtx] = useState<"sleep" | "out">("sleep");
  const [room, setRoom] = useState(18);
  const [out, setOut] = useState(12);
  const sleep = ctx === "sleep";
  const c = sleep ? room : out;
  const sleepOutfit = sleepOutfitFor(room);
  const outdoor = outdoorOutfitFor(out);
  const rows: [string, string][] = (sleep ? sleepOutfit.list : outdoor.layers).slice(0, 4).map((item, i) => [i === 0 ? "Wear" : "Then", item]);
  return (
    <Phone app="tinylayers" shadow="0 18px 40px rgba(47,91,138,0.18)">
      <Segment
        value={ctx}
        onPick={(id) => setCtx(id as "sleep" | "out")}
        options={[
          { id: "sleep", label: "Sleep in the room", icon: MOON },
          { id: "out", label: "Going outside", icon: SUN },
        ]}
      />
      <Stepper
        label={sleep ? "Room temperature" : "Outside · now"}
        value={`${c}°C`}
        word={tempWord(c, sleep)}
        color="#3D6DA8"
        onMinus={() => (sleep ? setRoom((v) => Math.max(14, v - 1)) : setOut((v) => Math.max(-6, v - 1)))}
        onPlus={() => (sleep ? setRoom((v) => Math.min(28, v + 1)) : setOut((v) => Math.min(32, v + 1)))}
      />
      <div className="mt-2.5 rounded-[22px] bg-white p-4 shadow-[0_8px_22px_rgba(120,80,40,0.07)]">
        <div className="flex items-center justify-between gap-2.5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-[#2F5B8A]">{sleep ? "For sleep" : "Going outside"} · Mila</p>
          {sleep ? (
            <span className="inline-flex h-[22px] flex-none items-center rounded-[11px] bg-[#DCE6F2] px-[9px] text-[10.5px] font-extrabold text-[#2F5B8A]">
              {sleepOutfit.tog} TOG
            </span>
          ) : null}
        </div>
        <p className="mt-1.5 line-clamp-3 text-balance text-[15px] font-extrabold leading-[1.3]">{sleep ? sleepOutfit.summary : outdoor.summary}</p>
        <Rows rows={rows} />
        <p className="mt-2 text-[11.5px] font-bold leading-snug text-tb-muted">A starting point: check your baby&rsquo;s chest or the back of their neck.</p>
      </div>
    </Phone>
  );
}

const ACTIVITIES = {
  awake5: { t: "Peekaboo with a twist", cat: "Play", dur: "5 min", need: "A muslin cloth", steps: ["Drape it over your face", "Wait for a wriggle or reach", "Lift it and say hello"], why: "Waiting before the reveal builds anticipation, an early step towards knowing things still exist when hidden." },
  awake10: { t: "Mirror hello", cat: "Talking", dur: "7 min", need: "Any mirror", steps: ["Sit cheek to cheek", "Name their eyes and hands", "Copy their sounds, then wait"], why: "Copy-and-wait is a real conversation to a baby. Turn-taking comes long before words do." },
  calm5: { t: "Song and sway", cat: "Music", dur: "6 min", need: "Nothing at all", steps: ["Hold them chest to chest", "Sway slower than feels natural", "Sing the last line softer"], why: "Your voice plus gentle movement is a calming way to help a wound-up baby settle." },
  calm10: { t: "Window watching", cat: "Calm", dur: "10 min", need: "A window", steps: ["Hold them up to the glass", "Name what moves outside", "Go quiet when they do"], why: "Slow narration gives them words for what they see, at a pace they can follow." },
};

/** TinyBlooms: mood and time in, one activity out. */
export function BloomsDemo() {
  const [mood, setMood] = useState<"awake" | "calm">("awake");
  const [long, setLong] = useState(false);
  const [tried, setTried] = useState(false);
  const [why, setWhy] = useState(false);
  const act = ACTIVITIES[`${mood}${long ? 10 : 5}` as keyof typeof ACTIVITIES];
  const reset = () => {
    setTried(false);
    setWhy(false);
  };
  return (
    <Phone app="tinyblooms" shadow="0 18px 40px rgba(56,98,63,0.18)">
      <Segment
        value={mood}
        onPick={(id) => {
          setMood(id as "awake" | "calm");
          reset();
        }}
        options={[
          { id: "awake", label: "Wide awake", icon: SUN },
          { id: "calm", label: "Winding down", icon: MOON },
        ]}
      />
      <Stepper
        label="Time you have · now"
        value={long ? "10 min" : "5 min"}
        word={long ? "a little while" : "a quick one"}
        color="#55915E"
        onMinus={() => {
          setLong(false);
          reset();
        }}
        onPlus={() => {
          setLong(true);
          reset();
        }}
      />
      <div className="mt-2.5 rounded-[22px] bg-white p-4 shadow-[0_8px_22px_rgba(120,80,40,0.07)]">
        <div className="flex items-center justify-between gap-2.5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-[#38623F]">Today&rsquo;s idea · Mila</p>
          <span className="inline-flex h-[22px] flex-none items-center rounded-[11px] bg-[#E3EBDC] px-[9px] text-[10.5px] font-extrabold text-[#38623F]">
            {act.cat} · {act.dur}
          </span>
        </div>
        <p className="mt-1.5 text-balance text-[19px] font-extrabold leading-[1.2]">{act.t}</p>
        {why ? (
          <div className="mt-2.5 rounded-2xl bg-[#E3EBDC] px-4 py-3.5 [animation:tb-swap_.3s_ease_both]">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-[#38623F]">Why it helps</p>
            <p className="mt-1.5 text-pretty text-sm font-bold leading-normal text-[#38623F]">{act.why}</p>
          </div>
        ) : (
          <Rows rows={[["Need", act.need], ["First", act.steps[0]], ["Then", act.steps[1]], ["Last", act.steps[2]]]} />
        )}
        <button
          type="button"
          onClick={() => setTried((v) => !v)}
          className={`mt-3 flex h-[46px] w-full items-center justify-center gap-2 rounded-2xl text-[14.5px] font-extrabold transition-colors active:scale-[0.97] ${
            tried ? "bg-[#E3EBDC] text-[#38623F]" : "bg-[#55915E] text-white"
          }`}
        >
          {CHECK}
          {tried ? "Saved to Mila’s favourites" : "We tried it"}
        </button>
        <button type="button" onClick={() => setWhy((v) => !v)} className="mt-2.5 block w-full text-center text-[12.5px] font-extrabold text-meals-orange active:opacity-60">
          {why ? "Back to the steps" : "Why it helps?"}
        </button>
      </div>
    </Phone>
  );
}

/** TinyMeals: today's meal and the first-foods plan; logging moves the plan on. */
export function MealsDemo() {
  const [logged, setLogged] = useState(false);
  return (
    <Phone app="tinymeals" shadow="0 18px 40px rgba(120,80,40,0.16)">
      <div className="mt-3 rounded-2xl bg-meals-peach px-3.5 py-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <span className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.07em] text-meals-orange-deep">First foods · Week 3 of 10</span>
          <span className="whitespace-nowrap text-[11px] font-extrabold text-[#8A4513]">{logged ? 8 : 7} of 30</span>
        </div>
        <div className="mt-[7px] h-1.5 overflow-hidden rounded-[3px] bg-[#EFD3B4]">
          <div className="h-full rounded-[3px] bg-meals-orange transition-[width] duration-500" style={{ width: logged ? "27%" : "23%" }} />
        </div>
        <p className="mt-1.5 text-[11.5px] text-[#7A5230]">Next up: Pear</p>
      </div>
      <div className="mt-2.5 rounded-[22px] bg-white px-4 pt-4 shadow-[0_8px_22px_rgba(120,80,40,0.07)]">
        <div className="flex gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-meals-orange-deep">Today for Mila · 7 mo</p>
            <p className="mt-1.5 text-balance text-[19px] font-extrabold leading-[1.18]">Courgette &amp; carrot fritters</p>
            <p className="mt-[5px] text-pretty text-[12.5px] leading-normal text-meals-sage">Soft, grippable and ready in 15 minutes.</p>
          </div>
          <div className="relative h-20 w-20 flex-none overflow-hidden rounded-[18px] bg-meals-sage-tint">
            <Image src="/tinymeals/hero-fritters.png" alt="Courgette and carrot fritters" fill sizes="80px" className="object-cover object-[42%_50%]" />
          </div>
        </div>
        <p className="mt-3.5 flex h-[46px] items-center justify-center rounded-2xl bg-meals-sage text-[14.5px] font-extrabold text-white">Cook this today</p>
        <p className="mt-2.5 flex items-center justify-center gap-1.5">
          <span className="text-[12.5px] text-tb-muted">Not feeling it?</span>
          <span className="text-[13px] font-extrabold text-meals-orange">See more suggestions &rarr;</span>
        </p>
        <button
          type="button"
          onClick={() => setLogged((v) => !v)}
          className="mt-3 flex h-12 w-full items-center justify-center gap-2 border-t border-meals-line active:opacity-70"
        >
          {logged ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" fill="#D17A2A" />
              </svg>
              <span className="text-[13.5px] font-extrabold text-meals-orange-ink">Mila loved it · saved</span>
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="#D17A2A" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              <span className="text-[13.5px] font-extrabold text-meals-orange-deep">Log what Mila ate</span>
            </>
          )}
        </button>
      </div>
    </Phone>
  );
}

/** TinyNaps: a dim 2 am dashboard; quick log buttons update it. */
export function NapsDemo() {
  const [fed, setFed] = useState(false);
  const [nappies, setNappies] = useState(4);
  const [asleep, setAsleep] = useState(false);
  const tiles = [
    { label: "Last sleep", value: asleep ? "Asleep" : "1h 25m", sub: asleep ? "Timer running" : "Awake for 2h 10m" },
    { label: "Last feed", value: fed ? "Just now" : "10:35", sub: fed ? "Left side, 14 min" : "Breastfeeding" },
    { label: "Nappies", value: `${nappies} today`, sub: `${nappies - 1} wet · 1 dirty` },
    { label: "Total sleep", value: "8h 40m", sub: "Last 24 hours" },
  ];
  const log = [
    { label: "Sleep", on: asleep, act: () => setAsleep((v) => !v) },
    { label: "Feed", on: fed, act: () => setFed((v) => !v) },
    { label: "Nappy", on: nappies > 4, act: () => setNappies((n) => (n > 4 ? 4 : n + 1)) },
  ];
  return (
    <Phone app="tinynaps" dark shadow="0 18px 40px rgba(35,32,56,0.35)">
      <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.07em] text-naps-lavender-mid">Tonight · 2:14 am</p>
      <div className="mt-2.5 grid grid-cols-2 gap-2" aria-live="polite">
        {tiles.map((tile) => (
          <div key={tile.label} className="rounded-[18px] bg-white/[0.07] px-3.5 py-3">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.06em] text-naps-lavender-mid">{tile.label}</p>
            <p className="mt-1 text-[19px] font-extrabold leading-none">{tile.value}</p>
            <p className="mt-1 text-[11.5px] font-bold text-white/60">{tile.sub}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-white/50">Quick log</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {log.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={item.on}
              onClick={item.act}
              className={`flex h-16 items-center justify-center rounded-[20px] text-[15px] font-extrabold transition-colors active:scale-[0.96] ${
                item.on ? "bg-naps-lavender-mid text-naps-night" : "bg-white/10 text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-2.5 text-center text-[11.5px] font-bold text-white/50">Big buttons, dim screen, one thumb.</p>
      </div>
    </Phone>
  );
}
