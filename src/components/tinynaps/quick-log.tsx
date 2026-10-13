"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AppTile } from "@/components/app-identity";

type Kind = "feed" | "diaper" | "wake" | "sleep";
type Entry = { id: number; k: Kind; title: string; sub: string; t: number };
type Side = "Left" | "Right";

type State = {
  /** Minutes since midnight. The demo runs one minute per second. */
  clock: number;
  night: boolean;
  asleep: boolean;
  sleepStart: number;
  wakeT: number;
  nextSide: Side;
  diaperOpen: boolean;
  log: Entry[];
  nextId: number;
  status: string;
};

const START = 134;
const DOTS: Record<Kind, string> = { feed: "#E2A03F", sleep: "#7FA8CF", wake: "#7FA8CF", diaper: "#7FA88C" };

const SEED: Entry[] = [
  { id: 4, k: "feed", title: "Fed · Left side", sub: "14 min", t: 120 },
  { id: 3, k: "diaper", title: "Wet diaper", sub: "", t: 110 },
  { id: 2, k: "wake", title: "Woke up", sub: "Slept 1h 25m", t: 105 },
  { id: 1, k: "sleep", title: "Fell asleep", sub: "", t: 20 },
];

const RESET = {
  clock: START,
  asleep: false,
  sleepStart: 20,
  wakeT: 105,
  nextSide: "Right",
  diaperOpen: false,
  log: SEED,
  nextId: 5,
  status: "Feed logged at 2:00 am",
} satisfies Omit<State, "night">;

function fmt(t: number) {
  const m = ((t % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  return `${h % 12 || 12}:${String(m % 60).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`;
}

function dur(minutes: number) {
  const m = Math.max(0, minutes);
  const h = Math.floor(m / 60);
  return h ? `${h}h ${m % 60}m` : `${m % 60}m`;
}

function ago(m: number) {
  return m < 1 ? "Just now" : `${dur(m)} ago`;
}

/** Adds an entry stamped with the current demo time and announces it in the status line. */
function logEntry(s: State, entry: Pick<Entry, "k" | "title" | "sub">, extra: Partial<State>): State {
  return {
    ...s,
    ...extra,
    log: [{ ...entry, id: s.nextId, t: s.clock }, ...s.log].slice(0, 30),
    nextId: s.nextId + 1,
    status: `${entry.title} · logged at ${fmt(s.clock)}`,
  };
}

/**
 * The "Try it here" section: the TinyNaps home screen as a working demo. Sleep, feed and diaper taps update the
 * summary, timeline and status line; the side to feed on next alternates and the clock runs fast.
 */
export function QuickLog({ baby, children }: { baby: string; children: ReactNode }) {
  const [s, setS] = useState<State>({ ...RESET, night: true });

  useEffect(() => {
    const id = setInterval(() => {
      if (!document.hidden) setS((q) => ({ ...q, clock: q.clock + 1 }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const n = s.night;
  const tc = n
    ? { bg: "#16202A", ink: "#E9F0F5", card: "#243344", muted: "#93A7B6", shadow: "0 18px 40px rgba(22,32,42,0.28)" }
    : { bg: "#FFFFFF", ink: "#2E2E2E", card: "#F1F3F7", muted: "#5D6470", shadow: "0 18px 40px rgba(35,47,72,0.12)" };
  const sec = n ? { bg: "#243344", ink: "#E9F0F5" } : { bg: "#E6E9F0", ink: "#232F48" };
  const pri = n ? { bg: "#F0B66E", ink: "#16202A" } : { bg: "#232F48", ink: "#FFFFFF" };

  const lastFeed = s.log.find((e) => e.k === "feed");
  const diapers = s.log.filter((e) => e.k === "diaper");
  const wet = 2 + diapers.filter((e) => /Wet|Both/.test(e.title)).length;
  const dirty = 1 + diapers.filter((e) => /Dirty|Both/.test(e.title)).length;
  const feeds = 3 + s.log.filter((e) => e.k === "feed").length;

  const summary = [
    {
      label: "Last feed",
      dot: "#E2A03F",
      value: lastFeed ? ago(s.clock - lastFeed.t) : "None yet",
      sub: `Next: ${s.nextSide} side`,
    },
    s.asleep
      ? { label: "Asleep", dot: "#7FA8CF", value: dur(s.clock - s.sleepStart), sub: `Since ${fmt(s.sleepStart)}` }
      : { label: "Awake", dot: "#7FA8CF", value: dur(s.clock - s.wakeT), sub: `Since ${fmt(s.wakeT)}` },
    { label: "Diapers", dot: "#7FA88C", value: `${wet + dirty} today`, sub: `${wet} wet · ${dirty} dirty` },
    { label: "Feeds", dot: "#E2A03F", value: `${feeds} today`, sub: "Since midnight" },
  ];

  const buttons = [
    {
      id: "sleep",
      label: s.asleep ? "Woke up" : "Sleep",
      sub: s.asleep ? "End nap" : "Start nap",
      dot: "#7FA8CF",
      pressed: s.asleep,
      bg: s.asleep ? "#7FA8CF" : sec.bg,
      ink: s.asleep ? "#16202A" : sec.ink,
      onClick: () =>
        setS((q) =>
          q.asleep
            ? logEntry(
                q,
                { k: "wake", title: "Woke up", sub: `Slept ${dur(q.clock - q.sleepStart)}` },
                { asleep: false, wakeT: q.clock, diaperOpen: false },
              )
            : logEntry(q, { k: "sleep", title: "Fell asleep", sub: "" }, { asleep: true, sleepStart: q.clock, diaperOpen: false }),
        ),
    },
    {
      id: "feed",
      label: "Feed",
      sub: `${s.nextSide} side`,
      dot: n ? "#16202A" : "#E2A03F",
      pressed: false,
      bg: pri.bg,
      ink: pri.ink,
      onClick: () =>
        setS((q) =>
          logEntry(
            q,
            { k: "feed", title: `Fed · ${q.nextSide} side`, sub: "" },
            { nextSide: q.nextSide === "Left" ? "Right" : "Left", diaperOpen: false },
          ),
        ),
    },
    {
      id: "diaper",
      label: "Diaper",
      sub: s.diaperOpen ? "Pick one" : "Wet or dirty",
      dot: "#7FA88C",
      pressed: s.diaperOpen,
      bg: sec.bg,
      ink: sec.ink,
      onClick: () => setS((q) => ({ ...q, diaperOpen: !q.diaperOpen })),
    },
  ];

  const timeline = s.log.slice(0, 4).map((e) => ({
    id: e.id,
    title: e.title,
    sub: e.sub || (e.k === "diaper" ? "Changed" : e.k === "sleep" ? "Nap started" : "Logged"),
    time: fmt(e.t),
    dot: DOTS[e.k],
  }));

  return (
    <div className="mx-auto box-border grid max-w-[1180px] items-center gap-[clamp(28px,4vw,56px)] px-[clamp(18px,4vw,40px)] py-[clamp(48px,7vw,88px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
      <div className="min-w-0">
        {children}
        <div className="mt-[22px] flex flex-wrap items-center gap-2.5">
          <span className="text-[13px] font-extrabold text-tb-muted">Screen</span>
          <div
            role="group"
            aria-label="Screen theme"
            className="flex gap-1 rounded-[22px] bg-white p-1 shadow-[0_2px_10px_rgba(90,60,20,0.06)]"
          >
            {(
              [
                ["Night", true],
                ["Day", false],
              ] as const
            ).map(([label, value]) => {
              const on = n === value;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setS((q) => ({ ...q, night: value }))}
                  className="h-9 cursor-pointer rounded-[18px] px-4 text-[13.5px] font-extrabold transition-[background-color,color] duration-[250ms] active:scale-[0.96]"
                  style={{ background: on ? "#232F48" : "transparent", color: on ? "#FFFFFF" : "#5A5245" }}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setS((q) => ({ ...q, ...RESET }))}
            className="h-9 cursor-pointer rounded-[18px] bg-transparent px-3.5 text-[13.5px] font-extrabold text-[#2F5B8A] hover:text-[#3D6DA8]"
          >
            Start over
          </button>
        </div>
      </div>

      <div className="min-w-0">
        <div
          className="mx-auto box-border flex max-w-[420px] flex-col gap-3.5 rounded-[34px] px-5 pb-5 pt-[22px] transition-[background-color,color,box-shadow] duration-500"
          style={{ background: tc.bg, color: tc.ink, boxShadow: tc.shadow }}
        >
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <AppTile app="tinynaps" className="h-[30px] w-[30px] rounded-[10px]" markClassName="h-6 w-6" />
              <span className="text-base font-extrabold">{baby}</span>
            </div>
            <div
              aria-live="off"
              className="flex h-[34px] items-center gap-[7px] rounded-[17px] px-[13px] text-[13px] font-extrabold tabular-nums transition-[background-color] duration-500"
              style={{ background: tc.card, color: tc.muted }}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#E2A03F] [animation:tn-pulse_2s_ease-in-out_infinite]" />
              {fmt(s.clock)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {summary.map((c) => (
              <div
                key={c.label}
                className="rounded-[18px] px-3.5 py-[13px] transition-[background-color] duration-500"
                style={{ background: tc.card }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.dot }} />
                  <span className="text-xs font-extrabold" style={{ color: tc.muted }}>
                    {c.label}
                  </span>
                </div>
                <div className="mt-1.5 text-[22px] font-extrabold tabular-nums">{c.value}</div>
                <div className="mt-px text-xs font-bold" style={{ color: tc.muted }}>
                  {c.sub}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-0.5 text-[11.5px] font-extrabold uppercase tracking-[0.08em]" style={{ color: tc.muted }}>
            Quick log
          </p>
          <div className="grid grid-cols-3 gap-[9px]">
            {buttons.map((b) => (
              <button
                key={b.id}
                type="button"
                aria-pressed={b.pressed}
                onClick={b.onClick}
                className="flex min-h-[78px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[18px] px-1.5 py-2.5 transition-[background-color,color,transform] duration-300 active:scale-95"
                style={{ background: b.bg, color: b.ink }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: b.dot }} />
                <span className="text-sm font-extrabold">{b.label}</span>
                <span className="text-[11.5px] font-bold opacity-80">{b.sub}</span>
              </button>
            ))}
          </div>

          {s.diaperOpen ? (
            <div className="flex gap-2 [animation:tm-rise_.2s_ease_both]">
              {(["Wet", "Dirty", "Both"] as const).map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() =>
                    setS((q) => logEntry(q, { k: "diaper", title: `${label} diaper`, sub: "" }, { diaperOpen: false }))
                  }
                  className="h-11 flex-1 cursor-pointer rounded-[14px] bg-[#7FA88C] text-[13.5px] font-extrabold text-[#16202A] active:scale-[0.96]"
                >
                  {label}
                </button>
              ))}
            </div>
          ) : null}

          <div role="status" className="min-h-[18px] text-center text-[13px] font-bold" style={{ color: tc.muted }}>
            {s.status}
          </div>

          <ul
            className="m-0 list-none rounded-[20px] px-3.5 py-1.5 transition-[background-color] duration-500"
            style={{ background: tc.card }}
          >
            {timeline.map((e) => (
              <li key={e.id} className="flex items-center gap-3 py-2.5">
                <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: e.dot }} />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-sm font-extrabold">{e.title}</span>
                  <span className="text-xs font-bold" style={{ color: tc.muted }}>
                    {e.sub}
                  </span>
                </span>
                <span className="flex-none text-[12.5px] font-extrabold tabular-nums" style={{ color: tc.muted }}>
                  {e.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
