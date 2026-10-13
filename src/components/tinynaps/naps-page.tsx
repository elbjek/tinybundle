import type { ReactNode } from "react";
import { AppTile } from "@/components/app-identity";
import { AppStoreCta } from "@/components/site/app-store-cta";
import { Faq, type FaqItem } from "@/components/site/faq";
import { GuidesTeaser } from "@/components/site/guides-teaser";
import { WaitlistForm } from "@/components/site/waitlist-form";
import { QuickLog } from "@/components/tinynaps/quick-log";
import { appCta, getApp } from "@/lib/apps";

const app = getApp("tinynaps");
const cta = appCta(app, "#get");

/** Where every TinyNaps button goes and what it says: the App Store once live, the launch list until then. */
export const NAPS_CTA = cta.live
  ? {
      ...cta,
      nav: "Get the app",
      hero: "Download on the App Store",
      text: "Free to download on iPhone. Share it with everyone who looks after your baby.",
    }
  : {
      ...cta,
      nav: "Get early access",
      hero: "Get early access",
      text: "TinyNaps is coming to iPhone soon. Leave your email and we’ll tell you the day it’s out.",
    };

export const NAPS_FAQS: FaqItem[] = [
  {
    q: "What does TinyNaps track?",
    a: "Sleep, feeds and diapers. For feeds you can log breast side and length or a bottle amount. For diapers, wet, dirty or both. Everything adds up on the home screen so you can see the day at a glance.",
  },
  {
    q: "Can my partner use it too?",
    a: "Yes. Invite a partner, grandparent or nanny and you’ll all see the same log. Whoever does the next feed can see what happened at the last one.",
  },
  {
    q: "Does it work in the dark?",
    a: "That’s what it’s built for. Night mode dims the screen to warm, low-glare colours, and the logging buttons sit low enough to reach with one thumb.",
  },
  {
    q: "Will it tell me if something’s wrong?",
    a: "No. TinyNaps is a log, not a medical device. It helps you remember what happened so you can answer questions at check-ups. If you’re worried, call your midwife, health visitor or doctor.",
  },
  {
    q: "When can I get TinyNaps?",
    a: cta.live
      ? "TinyNaps is free to download on iPhone now. Use the App Store button below."
      : "TinyNaps is coming to iPhone soon. Leave your email below and we’ll tell you the day it’s out.",
  },
  {
    q: "What happens to my baby’s data?",
    a: "It’s yours. We don’t show ads and we never sell your data. You can export or delete everything at any time.",
  },
];

const BABY = "Mila";
const EYEBROW = "text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted";
const CARD = "rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]";
const CHIP_ANIMATION = "[animation:tm-chip_.5s_cubic-bezier(.34,1.4,.64,1)_both]";

const HERO_CHIPS = [
  { label: "One-tap logging", bg: "#DCE6F2", ink: "#2F5B8A", delay: ".5s" },
  { label: "Remembers the side", bg: "#FBEEDC", ink: "#8A4F14", delay: ".58s" },
  { label: "Night mode", bg: "#E6E9F0", ink: "#232F48", delay: ".66s" },
  { label: "Shared with your partner", bg: "#E3EBDC", ink: "#3F6E47", delay: ".74s" },
];

const HERO_TILES = [
  { label: "Last sleep", dot: "#7FA8CF", value: "1h 25m", sub: "Awake for 29m", pulse: false },
  { label: "Feeding", dot: "#E2A03F", value: "Now", sub: "Left side", pulse: true },
  { label: "Diapers", dot: "#7FA88C", value: "4 today", sub: "3 wet · 1 dirty", pulse: false },
  { label: "Total sleep", dot: "#7FA8CF", value: "8h 40m", sub: "Last 24 hours", pulse: false },
];

const HERO_BUTTONS = [
  { label: "Sleep", dot: "#7FA8CF", bg: "#243344", ink: "#E9F0F5" },
  { label: "End feed", dot: "#16202A", bg: "#F0B66E", ink: "#16202A" },
  { label: "Diaper", dot: "#7FA88C", bg: "#243344", ink: "#E9F0F5" },
];

const VALUES = [
  {
    title: "One tap, any hour",
    body: "Big buttons you can hit with a thumb while holding a baby. No forms, no typing, no fiddly times to set.",
    tile: "#DCE6F2",
    icon: (
      <path
        d="M9 11V5.5a1.8 1.8 0 0 1 3.6 0V10l4.3.9a2 2 0 0 1 1.6 2.3l-.8 4.6a2.6 2.6 0 0 1-2.6 2.2h-4.4a3 3 0 0 1-2.4-1.2L5.4 15a1.6 1.6 0 0 1 2.4-2.1L9 14"
        stroke="#2F5B8A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "The whole day, one screen",
    body: "Last feed, last sleep and today’s diapers are there the moment you open it. Nothing to scroll back through.",
    tile: "#FBEEDC",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="#A0521A" strokeWidth="1.8" />
        <path d="M12 8v4.2l2.8 1.8" stroke="#A0521A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Everyone on the same page",
    body: "Share with a partner, grandparent or nanny. Whoever does the next feed can see what happened at the last one.",
    tile: "#E3EBDC",
    icon: (
      <>
        <circle cx="9" cy="9" r="3.2" stroke="#3F6E47" strokeWidth="1.8" />
        <circle cx="16.5" cy="10" r="2.6" stroke="#3F6E47" strokeWidth="1.8" />
        <path
          d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8M14.5 15c2.6-.4 5 .9 5.8 4"
          stroke="#3F6E47"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

const STEPS = [
  {
    title: "Add your baby",
    body: "A name and a birthday. That’s the whole setup, and you can invite a partner straight away.",
    num: "#3D6DA8",
    shape: "#DCE6F2",
    shapeClass: "rounded-[28px] rotate-[14deg]",
  },
  {
    title: "Tap when it happens",
    body: "Sleep, feed or diaper. The time fills itself in, and you can fix it later if you forgot to tap.",
    num: "#C77E22",
    shape: "#FBEEDC",
    shapeClass: "rounded-[42px]",
  },
  {
    title: "Glance, don’t scroll",
    body: "The home screen answers “when did they last…?” before you’ve finished asking.",
    num: "#47794F",
    shape: "#E3EBDC",
    shapeClass: "rounded-[28px] -rotate-12",
  },
];

const NIGHT_POINTS = [
  {
    title: "Dims itself after dark",
    body: "Warm, low-glare screens that won’t wake you up properly, or them.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M19 14.5A7.5 7.5 0 1 1 9.5 5a6 6 0 0 0 9.5 9.5Z" stroke="#F0B66E" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Thumb-sized buttons",
    body: "Everything you need sits low on the screen, in reach of one hand.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="3" stroke="#7FA8CF" strokeWidth="1.8" />
        <circle cx="12" cy="16.5" r="1.6" fill="#7FA8CF" />
      </svg>
    ),
  },
  {
    title: "Remembers the side",
    body: "Breastfeeding? It tells you which side is next, so you don’t have to.",
    icon: (
      <span aria-hidden="true" className="text-sm font-extrabold text-[#F0B66E]">
        L/R
      </span>
    ),
  },
];

function FloatingChip({
  title,
  sub,
  icon,
  wrapClass,
  floatClass,
}: {
  title: string;
  sub: string;
  icon: ReactNode;
  wrapClass: string;
  floatClass: string;
}) {
  return (
    <div aria-hidden="true" className={`absolute ${wrapClass}`}>
      <div
        className={`flex items-center gap-2.5 rounded-[20px] bg-white py-2.5 pl-2.5 pr-4 shadow-[0_12px_28px_rgba(35,47,72,0.14)] ${floatClass}`}
      >
        {icon}
        <span className="block">
          <span className="block text-[13.5px] font-extrabold text-tb-ink">{title}</span>
          <span className="block text-[11px] font-bold text-tb-muted">{sub}</span>
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative scroll-mt-16">
      <div className="mx-auto box-border grid max-w-[1240px] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(18px,4vw,40px)] pb-[clamp(48px,6vw,88px)] pt-[clamp(36px,5vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        <div className="min-w-0 [animation:tm-rise_.5s_ease_both]">
          <p className="box-border inline-flex min-h-8 items-center gap-2 rounded-2xl bg-[#E6E9F0] px-3.5 py-1.5 text-xs font-extrabold tracking-[0.02em] text-[#232F48]">
            <span className="h-[7px] w-[7px] rounded-full bg-tb-amber" />
            Sleep · Feeds · Diapers
          </p>
          <h1 className="mt-[18px] max-w-[15ch] text-balance text-[clamp(38px,5.4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            Everything since the last feed, at a glance.
          </h1>
          <p className="mt-4 max-w-[44ch] text-pretty text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-tb-body">
            Log sleep, feeds and diapers in one tap, even one-handed in the dark. TinyNaps keeps the day on one calm
            screen, for you and whoever’s on the next shift.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-5">
            <a
              href={NAPS_CTA.href}
              rel={NAPS_CTA.live ? "noopener" : undefined}
              className="flex h-[54px] items-center gap-[11px] rounded-[18px] bg-[#232F48] px-6 text-base font-extrabold text-white hover:bg-[#1A2337] hover:text-white active:scale-[0.97]"
            >
              {NAPS_CTA.live ? (
                <svg width="20" height="24" viewBox="0 0 18 22" fill="#FFFFFF" aria-hidden="true">
                  <path d="M14.7 11.6c0-2.3 1.9-3.5 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0 0-2.4-.9-2.4-3.6ZM12.5 4.3c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" />
                </svg>
              ) : null}
              <span>{NAPS_CTA.hero}</span>
            </a>
            <a
              href="#try"
              className="pb-0.5 text-[15px] font-extrabold text-[#2F5B8A] underline decoration-[rgba(47,91,138,0.3)] decoration-2 underline-offset-[5px] hover:text-[#3D6DA8] hover:decoration-[#3D6DA8]"
            >
              Try the quick log &rarr;
            </a>
          </div>
          <ul className="mt-[26px] flex list-none flex-wrap gap-2 p-0">
            {HERO_CHIPS.map((chip) => (
              <li
                key={chip.label}
                className={`inline-flex h-8 items-center rounded-2xl px-3.5 text-[12.5px] font-extrabold ${CHIP_ANIMATION}`}
                style={{ background: chip.bg, color: chip.ink, animationDelay: chip.delay }}
              >
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative box-border min-w-0 pb-16 pl-[clamp(0px,1.6vw,18px)] pr-[clamp(0px,1vw,8px)] pt-7">
          <div
            role="img"
            aria-label={`The TinyNaps home screen at night: ${BABY} is feeding on the left side, with last sleep, diapers and total sleep for today.`}
            className="relative mx-auto box-border flex max-w-[400px] flex-col gap-3.5 rounded-[34px] bg-[#16202A] px-5 pb-5 pt-[22px] text-[#E9F0F5] shadow-[0_18px_40px_rgba(35,47,72,0.24)] [animation:tm-screen-in_.6s_cubic-bezier(.34,1.2,.64,1)_both_.1s]"
          >
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <AppTile app="tinynaps" className="h-[30px] w-[30px] rounded-[10px]" markClassName="h-6 w-6" />
                <span className="text-base font-extrabold">TinyNaps</span>
              </div>
              <div className="flex h-[34px] items-center rounded-[17px] bg-[#243344] px-[13px] text-[12.5px] font-extrabold text-[#93A7B6]">
                {BABY} · 6 wk
              </div>
            </div>
            <div>
              <div className="text-[30px] font-extrabold leading-[1.1]">Today</div>
              <div className="mt-[3px] text-sm font-bold text-[#93A7B6]">2:14 am · Night mode</div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {HERO_TILES.map((tile) => (
                <div key={tile.label} className="rounded-[18px] bg-[#243344] px-3.5 py-[13px]">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${tile.pulse ? "[animation:tn-pulse_1.6s_ease-in-out_infinite]" : ""}`}
                      style={{ background: tile.dot }}
                    />
                    <span className="text-xs font-extrabold text-[#93A7B6]">{tile.label}</span>
                  </div>
                  <div className="mt-1.5 text-2xl font-extrabold">{tile.value}</div>
                  <div className="mt-px text-xs font-bold text-[#93A7B6]">{tile.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-1 text-[11.5px] font-extrabold uppercase tracking-[0.08em] text-[#93A7B6]">Quick log</div>
            <div className="grid grid-cols-3 gap-[9px]">
              {HERO_BUTTONS.map((b) => (
                <div
                  key={b.label}
                  className="flex h-[72px] flex-col items-center justify-center gap-[7px] rounded-[18px]"
                  style={{ background: b.bg, color: b.ink }}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: b.dot }} />
                  <span className="text-[13.5px] font-extrabold">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          <FloatingChip
            title="Next feed: right side"
            sub="Worked out for you"
            wrapClass="bottom-1 left-0 [animation:tm-float-in_.6s_cubic-bezier(.34,1.3,.64,1)_both_.6s]"
            floatClass="[animation:tm-float-a_7s_ease-in-out_infinite_1.2s]"
            icon={
              <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-xl bg-[#FBEEDC] text-sm font-extrabold text-[#8A4F14]">
                R
              </span>
            }
          />
          <FloatingChip
            title="Synced with Sam"
            sub="On the 6 am shift"
            wrapClass="right-[-10px] top-[40%] z-[2] hidden min-[520px]:block [animation:tm-float-in_.6s_cubic-bezier(.34,1.3,.64,1)_both_1s]"
            floatClass="[animation:tm-float-b_6.5s_ease-in-out_infinite_1.6s]"
            icon={
              <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-xl bg-[#E3EBDC]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m5 12.5 4.2 4.2L19 7"
                    stroke="#3F6E47"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section
      aria-label="Why TinyNaps"
      className="mx-auto box-border grid max-w-[1180px] gap-3.5 px-[clamp(18px,4vw,40px)] pb-[clamp(40px,6vw,72px)] pt-[clamp(16px,3vw,32px)] md:grid-cols-3"
    >
      {VALUES.map((v) => (
        <div key={v.title} className={CARD}>
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl" style={{ background: v.tile }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {v.icon}
            </svg>
          </div>
          <h2 className="mt-4 text-[19px] font-extrabold">{v.title}</h2>
          <p className="mt-[7px] text-pretty text-[14.5px] leading-[1.6] text-tb-body">{v.body}</p>
        </div>
      ))}
    </section>
  );
}

function TryIt() {
  return (
    <section id="try" aria-labelledby="try-h" className="scroll-mt-16 bg-[rgba(230,233,240,0.62)]">
      <QuickLog baby={BABY}>
        <p className={EYEBROW}>Try it here</p>
        <h2
          id="try-h"
          className="mt-2.5 max-w-[18ch] text-balance text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.14]"
        >
          Tap a button. Watch the day fill in.
        </h2>
        <p className="mt-3 max-w-[44ch] text-pretty text-base leading-[1.6] text-tb-body">
          This is the TinyNaps home screen. Log a feed, a nap or a diaper and see the summary update. The clock runs
          fast here: one second is one minute.
        </p>
      </QuickLog>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-h"
      className="mx-auto box-border max-w-[1180px] scroll-mt-16 px-[clamp(18px,4vw,40px)] pt-[clamp(56px,7vw,96px)]"
    >
      <p className={EYEBROW}>How it works</p>
      <h2 id="how-h" className="mt-2.5 max-w-[20ch] text-balance text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.12]">
        A baby log that keeps itself.
      </h2>
      <p className="mt-3.5 max-w-[58ch] text-pretty text-base leading-[1.6] text-tb-body">
        No spreadsheets and no daily diary. You tap when something happens, and TinyNaps does the adding up.
      </p>
      <ol className="mt-7 grid list-none gap-3.5 p-0 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className={`relative overflow-hidden ${CARD}`}>
            <div
              aria-hidden="true"
              className={`absolute -right-[26px] -top-[26px] h-[84px] w-[84px] ${step.shapeClass}`}
              style={{ background: step.shape }}
            />
            <div
              aria-hidden="true"
              className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full text-[13px] font-extrabold text-white"
              style={{ background: step.num }}
            >
              {i + 1}
            </div>
            <h3 className="relative mt-3.5 text-[19px] font-extrabold">{step.title}</h3>
            <p className="relative mt-[7px] text-pretty text-[14.5px] leading-[1.6] text-tb-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function NightMode() {
  return (
    <section
      id="night"
      aria-labelledby="night-h"
      className="mx-auto box-border max-w-[1180px] scroll-mt-16 px-[clamp(18px,4vw,40px)] pt-[clamp(56px,7vw,96px)]"
    >
      <div className="relative box-border grid items-center gap-[clamp(28px,4vw,56px)] overflow-hidden rounded-[32px] bg-[#16202A] p-[clamp(30px,5vw,60px)] text-[#E9F0F5] [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div aria-hidden="true" className="absolute -right-[50px] -top-[60px] h-[220px] w-[220px] rounded-full bg-[#232F48]" />
        <div
          aria-hidden="true"
          className="absolute -bottom-[70px] left-[30%] h-[150px] w-[150px] rotate-[18deg] rounded-[42px] bg-[#1C2836]"
        />
        <div
          aria-hidden="true"
          className="absolute left-[46%] top-9 h-2 w-2 rounded-full bg-[#F0B66E] [animation:tm-twinkle_2.4s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[52px] right-[18%] h-1.5 w-1.5 rounded-full bg-[#7FA8CF] [animation:tm-twinkle_2.4s_ease-in-out_infinite_.9s]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[8%] top-[44%] h-[5px] w-[5px] rounded-full bg-[#E9F0F5] [animation:tm-twinkle_2.4s_ease-in-out_infinite_1.5s]"
        />
        <div className="relative min-w-0">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#F0B66E]">Night mode</p>
          <h2
            id="night-h"
            className="mt-2.5 max-w-[14ch] text-balance text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08]"
          >
            Made for 2 am.
          </h2>
          <p className="mt-3.5 max-w-[42ch] text-pretty text-base leading-[1.6] text-[#C9D4DE]">
            The hours you’ll use it most are the darkest ones, so the whole app is built around them.
          </p>
        </div>
        <ul className="relative m-0 flex list-none flex-col gap-2.5 p-0">
          {NIGHT_POINTS.map((point) => (
            <li key={point.title} className="flex items-start gap-3.5 rounded-[20px] bg-[#243344] p-[18px]">
              <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[13px] bg-[#2E3F55]">
                {point.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[16.5px] font-extrabold">{point.title}</span>
                <span className="mt-[3px] block text-pretty text-sm leading-[1.55] text-[#C9D4DE]">{point.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(40px,6vw,64px)]">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-3xl bg-[#E6E9F0] p-[clamp(22px,3vw,32px)]">
        <div className="min-w-0 flex-[1_1_min(100%,380px)]">
          <h2 className="text-[19px] font-extrabold text-[#232F48]">A log, not a diagnosis.</h2>
          <p className="mt-1.5 max-w-[66ch] text-pretty text-[14.5px] font-bold leading-[1.6] text-[#33405A]">
            TinyNaps helps you remember what happened. It doesn’t judge it. If you’re worried about feeding, sleep or
            diapers, call your midwife, health visitor or doctor. Our guides cite the sources they’re based on.
          </p>
        </div>
        <ul aria-label="Sources" className="m-0 flex list-none flex-wrap gap-1.5 p-0">
          {["NHS", "WHO", "AAP"].map((source) => (
            <li
              key={source}
              className="flex h-[30px] items-center rounded-[15px] bg-white px-3 text-[12.5px] font-extrabold text-[#232F48]"
            >
              {source}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GetTinyNaps() {
  return (
    <section
      id="get"
      aria-labelledby="get-h"
      className="mx-auto box-border max-w-[1180px] scroll-mt-16 px-[clamp(18px,4vw,40px)] pb-[clamp(48px,6vw,80px)]"
    >
      <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[28px] bg-[#232F48] p-[clamp(30px,4vw,52px)]">
        <div
          aria-hidden="true"
          className="absolute -top-[50px] right-[18%] h-[140px] w-[140px] rotate-[16deg] rounded-[38px] bg-[#2C3A57]"
        />
        <div aria-hidden="true" className="absolute -bottom-[70px] -right-10 h-[180px] w-[180px] rounded-full bg-[#1A2337]" />
        <div
          aria-hidden="true"
          className="absolute right-[34%] top-7 h-[9px] w-[9px] rounded-full bg-tb-amber [animation:tm-twinkle_2.4s_ease-in-out_infinite]"
        />
        <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
          <h2
            id="get-h"
            className="m-0 max-w-[18ch] text-balance text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.14] text-white"
          >
            When did they last eat? Sleep? Need a change?
          </h2>
          <p className="mt-3 max-w-[46ch] text-pretty text-base leading-[1.6] text-white">{NAPS_CTA.text}</p>
        </div>
        {NAPS_CTA.live ? (
          <AppStoreCta app={app} waitlistHref="#get" liveLabel="Download on the App Store" />
        ) : (
          <div className="relative min-w-0 max-w-[440px] flex-[1_1_min(100%,360px)]">
            <WaitlistForm list="TinyNaps launch" button="Tell me at launch" />
          </div>
        )}
      </div>
    </section>
  );
}

/** The TinyNaps landing page, from the hero to the launch band. */
export function NapsPage() {
  return (
    <>
      <Hero />
      <Values />
      <TryIt />
      <HowItWorks />
      <NightMode />
      <GuidesTeaser
        app="tinynaps"
        eyebrow="TinyNaps guides"
        heading="Make sense of what you’re logging."
        slugs={["is-this-normal-baby", "baby-wakes-every-hour", "4-month-sleep-regression"]}
      />
      <Safety />
      <Faq faqs={NAPS_FAQS} />
      <GetTinyNaps />
    </>
  );
}
