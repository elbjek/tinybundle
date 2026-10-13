"use client";

import { useState, type ReactNode } from "react";
import { AppMark } from "@/components/app-identity";

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

function Phone({ shadow, children }: { shadow: string; children: ReactNode }) {
  return (
    <div
      className="box-border flex h-[560px] w-full max-w-[340px] flex-col overflow-hidden rounded-[34px] bg-tb px-4 pb-4 pt-5 font-nunito text-tb-ink"
      style={{ boxShadow: shadow }}
    >
      <div className="flex items-center justify-between gap-2.5">
        <span className="flex items-center gap-[7px]">
          <AppMark app="tinyblooms" className="h-6 w-6" />
          <span className="text-[15px] font-extrabold">TinyBlooms</span>
        </span>
        <span className="flex h-8 items-center gap-[7px] rounded-2xl bg-white px-[11px] text-xs font-extrabold shadow-[0_2px_8px_rgba(90,60,20,0.06)]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#55915E]" />
          Mila · 7 mo
        </span>
      </div>
      {children}
    </div>
  );
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
    <Phone shadow="0 18px 40px rgba(56,98,63,0.18)">
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
