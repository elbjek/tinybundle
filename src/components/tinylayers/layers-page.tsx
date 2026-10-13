import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AppStoreCta } from "@/components/site/app-store-cta";
import { Faq, type FaqItem } from "@/components/site/faq";
import { GuidesTeaser } from "@/components/site/guides-teaser";
import { DEMO_TEMP, outfitAnswer } from "@/components/tinylayers/outfit";
import { TryIt } from "@/components/tinylayers/try-it";
import { appCta, getApp } from "@/lib/apps";

const app = getApp("tinylayers");

export const LAYERS_FAQS: FaqItem[] = [
  {
    q: "What does TinyLayers actually do?",
    a: "You tell it the room temperature or the outdoor conditions, your baby’s age, and the situation. It returns one plain-English outfit, layers first with TOG as a helper, plus the chest check that confirms it.",
  },
  {
    q: "Is TinyLayers free?",
    a: "TinyLayers is free to download, and setup shows your baby’s first sleep plan before you pay. To keep using it you need a plan: monthly, with a 7-day free trial where the App Store offers one, or a one-time lifetime unlock. Either one includes every situation, unlimited check-ins, history, multiple children, and sync. You create an account with Apple, Google, or an email code after you choose a plan.",
  },
  {
    q: "What is TOG?",
    a: "TOG measures how much warmth a sleep sack traps. 0.5 is summer-light, 1.0 is the everyday middle, 2.5 is for cool rooms, and it never goes above 3.5. TinyLayers gives you layers first and treats TOG as the label on the sack you already own.",
  },
  {
    q: "What ages is it for?",
    a: "Newborn to 2 years and up, in five age bands. Age changes the notes rather than the TOG: swaddling advice, sun protection under six months, and garment tips differ by stage, while no hats indoors and no loose blankets apply at every age.",
  },
  {
    q: "Does it track my location?",
    a: "Only if you allow location access, and only coarse location to fetch outdoor weather. You can type the outdoor temperature instead, and sleep guidance never uses location: it runs on the room temperature you give it.",
  },
  {
    q: "Is this medical advice?",
    a: "No. TinyLayers gives general dressing guidance built on published safe-sleep recommendations. Always check with your health visitor or paediatrician for your child’s specific needs.",
  },
];

const tonight = outfitAnswer("sleep", DEMO_TEMP);
const tonightPlan = tonight.rows.filter((r) => r.wearable);

const CHIPS = [
  { label: "Sleep", bg: "#DCE6F2", ink: "#2F5B8A" },
  { label: "Naps", bg: "#EEF3E8", ink: "#4F5D3E" },
  { label: "In arms", bg: "#F3EADF", ink: "#8A4F14" },
  { label: "Stroller", bg: "#DCE6F2", ink: "#2F5B8A" },
  { label: "Carrier", bg: "#EEF3E8", ink: "#4F5D3E" },
  { label: "Car seat", bg: "#F3EADF", ink: "#8A4F14" },
];

const VALUES: { title: string; body: string; tint: string; icon: ReactNode }[] = [
  {
    title: "Know, don’t guess",
    body: "Room is 24° tonight? You’ll know it’s the light sack with a short-sleeve bodysuit and nothing else.",
    tint: "#EEF3E8",
    icon: (
      <path
        d="M20.5 13.8A8.5 8.5 0 1 1 10.2 3.5a7 7 0 0 0 10.3 10.3Z"
        stroke="#5F6F4B"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "It learns your baby",
    body: "Say whether they run warm or cool, then check in. When the same answer repeats at a similar temperature, the starting layers move one step.",
    tint: "#DCE6F2",
    icon: <path d="M12 3.5c1 3.4 2.6 5 6 6-3.4 1-5 2.6-6 6-1-3.4-2.6-5-6-6 3.4-1 5-2.6 6-6Z" stroke="#2F5B8A" strokeWidth="1.8" strokeLinejoin="round" />,
  },
  {
    title: "Every situation",
    body: "Sleep, naps, in arms, stroller, carrier, and car seat: one calm answer for each, in one glance.",
    tint: "#F3EADF",
    icon: (
      <>
        <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" stroke="#D17A2A" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m3.5 12 8.5 4.3 8.5-4.3M3.5 16.5 12 20.8l8.5-4.3" stroke="#D17A2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const STEPS = [
  { n: "01", title: "Choose the situation", body: "Sleep, or outside in arms, in the stroller, in a carrier, or in the car seat: pick the moment you are dressing for." },
  {
    n: "02",
    title: "Add age and temperature",
    body: "Room temperature for sleep and naps. Local weather, or a temperature you type, for outings. Age shapes the notes.",
  },
  {
    n: "03",
    title: "Get a calm answer",
    body: "Plain-English layers first, TOG as a helper second. Then confirm with the chest check after settling.",
  },
];

const MODES = [
  { mark: "01", tint: "#DCE6F2", ink: "#2F5B8A", title: "Sleep", body: "Room temperature in, plain-English layers and TOG out, so you can close the nursery door calm." },
  { mark: "02", tint: "#EEF3E8", ink: "#5F6F4B", title: "Naps", body: "Daytime settles need the same care as night. The sleep card covers naps: set the room they nap in." },
  {
    mark: "03",
    tint: "#F3EADF",
    ink: "#D17A2A",
    title: "In arms",
    body: "Outdoor weather for walks and errands in your arms, without using the forecast to guess how warm the nursery is.",
  },
  {
    mark: "04",
    tint: "#EEF3E8",
    ink: "#5F6F4B",
    title: "Stroller",
    body: "Layering for fresh-air rides: warm enough outside, without overheating under blankets or a draped cover.",
  },
  {
    mark: "05",
    tint: "#E7EFF7",
    ink: "#2F5B8A",
    title: "Carrier",
    body: "Close-contact warmth is different. TinyLayers accounts for shared body heat when baby is on you.",
  },
  { mark: "06", tint: "#F3EADF", ink: "#D17A2A", title: "Car seat", body: "Safer dressing for the ride, including why bulky coats and harnesses do not mix." },
];

const EYEBROW = "text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted";
const SECTION_H2 = "mt-2.5 text-balance text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.12]";
const CARD = "rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]";

function Tick({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Hero() {
  const cta = appCta(app, "#get");
  return (
    <section id="top" aria-labelledby="hero-h" className="relative overflow-hidden">
      <div className="mx-auto box-border grid max-w-[1240px] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(18px,4vw,40px)] pb-[clamp(48px,6vw,88px)] pt-[clamp(36px,5vw,72px)] min-[880px]:grid-cols-2">
        <div className="z-[1] min-w-0 [animation:tm-rise_.5s_ease_both]">
          <p className="inline-flex h-8 items-center gap-2 rounded-2xl bg-[#DCE6F2] px-3.5 text-xs font-extrabold tracking-[0.02em] text-[#2F5B8A]">
            <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[#3D6DA8]" />
            Built on published safe-sleep guidance
          </p>
          <h1
            id="hero-h"
            className="mt-[18px] max-w-[15ch] text-balance text-[clamp(38px,5.4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.025em]"
          >
            Dress your baby with confidence.
          </h1>
          <p className="mt-4 max-w-[42ch] text-pretty text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-tb-body">
            Know what your baby should wear for tonight’s room, today’s walk, and every nap in between. Close the nursery door
            calm.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-5">
            {cta.live ? (
              <a
                href={cta.href}
                rel="noopener"
                className="flex h-[54px] items-center gap-[11px] rounded-[18px] bg-[#3D6DA8] px-6 text-white hover:bg-[#35608F] hover:text-white active:scale-[0.97]"
              >
                <svg width="20" height="24" viewBox="0 0 18 22" fill="#FFFFFF" aria-hidden="true">
                  <path d="M14.7 11.6c0-2.3 1.9-3.5 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0 0-2.4-.9-2.4-3.6ZM12.5 4.3c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" />
                </svg>
                <span className="block">
                  <span className="block text-[11px] font-bold leading-[1.1] opacity-85">Download on the</span>
                  <span className="block text-[17px] font-extrabold leading-[1.2]">App Store</span>
                </span>
              </a>
            ) : (
              <a
                href={cta.href}
                className="flex h-[54px] items-center rounded-[18px] bg-[#3D6DA8] px-6 text-base font-extrabold text-white hover:bg-[#35608F] hover:text-white active:scale-[0.97]"
              >
                {cta.label}
              </a>
            )}
            <a
              href="#how"
              className="pb-0.5 text-[15px] font-extrabold text-[#D17A2A] underline decoration-[rgba(209,122,42,0.32)] decoration-2 underline-offset-[6px] hover:text-[#B0631D] hover:decoration-[#B0631D]"
            >
              See how it decides &rarr;
            </a>
          </div>
          <ul aria-label="Situations covered" className="mt-[26px] flex list-none flex-wrap gap-2 p-0">
            {CHIPS.map((chip, i) => (
              <li
                key={chip.label}
                className="inline-flex h-8 items-center rounded-2xl px-3.5 text-[12.5px] font-extrabold"
                style={{
                  background: chip.bg,
                  color: chip.ink,
                  animation: `tm-chip .5s cubic-bezier(.34,1.4,.64,1) both ${0.5 + i * 0.08}s`,
                }}
              >
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative box-border min-w-0 pb-14 pl-[18px] pr-2 pt-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-14px] top-[-8px] h-[150px] w-[150px] rotate-[14deg] rounded-[40px] bg-[#F6D9A8] [animation:tm-float-a_7s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-[-34px] h-[200px] w-[200px] rounded-full bg-[#DCE6F2] [animation:tm-float-b_8s_ease-in-out_infinite]" />
            <div className="absolute right-[-22px] top-[44%] h-[58px] w-[58px] rounded-full bg-[#E3EBDC] [animation:tm-float-b_6s_ease-in-out_infinite_1s]" />
            <div className="absolute left-[30%] top-1.5 h-[9px] w-[9px] rounded-full bg-[#E2A03F] [animation:tm-twinkle_2.2s_ease-in-out_infinite]" />
            <div className="absolute bottom-6 right-[30%] h-2 w-2 rounded-full bg-[#7FA8CF] [animation:tm-twinkle_2.2s_ease-in-out_infinite_.7s]" />
            <div className="absolute left-1 top-[30%] h-[7px] w-[7px] rounded-full bg-[#3D6DA8] [animation:tm-twinkle_2.2s_ease-in-out_infinite_1.3s]" />
          </div>
          <div className="relative overflow-hidden rounded-[36px] shadow-[0_18px_40px_rgba(120,80,40,0.14)] [animation:tm-screen-in_.6s_cubic-bezier(.34,1.2,.64,1)_both_.1s]">
            <Image
              src="/tinylayers/hero-nursery.jpg"
              alt="A sleeping baby in a cream sleep sack, with two outfits on a wooden rail, a nightlight and wooden toys around the crib"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1240px) 560px, (min-width: 880px) 46vw, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[min(270px,78%)] [animation:tm-float-in_.6s_cubic-bezier(.34,1.3,.64,1)_both_.6s]">
            <div className="rounded-[22px] bg-white px-[18px] py-4 shadow-[0_14px_32px_rgba(120,80,40,0.16)] [animation:tm-float-a_7s_ease-in-out_infinite_1.2s]">
              <div className="flex items-center justify-between gap-2.5">
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-[#2F5B8A]">Tonight &middot; {DEMO_TEMP}&deg;C</span>
                <span className="inline-flex h-[22px] flex-none items-center rounded-[11px] bg-[#DCE6F2] px-[9px] text-[10.5px] font-extrabold text-[#2F5B8A]">
                  {tonight.pill}
                </span>
              </div>
              <p className="mt-1.5 text-base font-extrabold leading-[1.25]">{tonight.title}</p>
              {tonightPlan.map((row, i) => (
                <p
                  key={row.name}
                  className={`flex items-baseline gap-2.5 pt-[7px] shadow-[inset_0_1px_0_#F3E7D3] ${i === 0 ? "mt-2" : "mt-[7px]"}`}
                >
                  <span className="w-10 flex-none text-[9.5px] font-extrabold uppercase tracking-[0.06em] text-tb-muted">{row.role}</span>
                  <span className="text-[13px] font-extrabold">{row.name}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 [animation:tm-float-in_.6s_cubic-bezier(.34,1.3,.64,1)_both_1s]">
            <div className="flex items-center gap-2.5 rounded-[20px] bg-white py-2.5 pl-2.5 pr-4 shadow-[0_12px_28px_rgba(120,80,40,0.14)] [animation:tm-float-b_6.5s_ease-in-out_infinite_1.6s]">
              <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-xl bg-[#EEF3E8]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 12.5 4 4 8-9" stroke="#4F5D3E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="block">
                <span className="block text-[13.5px] font-extrabold text-[#4F5D3E]">Comfortable</span>
                <span className="block text-[11px] font-bold text-tb-muted">Chest check &middot; 8:12pm</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <ul className="mx-auto box-border grid max-w-[1180px] list-none gap-3.5 px-[clamp(18px,4vw,40px)] pb-[clamp(40px,6vw,72px)] pt-[clamp(16px,3vw,32px)] min-[860px]:grid-cols-3">
      {VALUES.map((v) => (
        <li key={v.title} className={CARD}>
          <span className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl" style={{ background: v.tint }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {v.icon}
            </svg>
          </span>
          <h2 className="mt-4 text-[19px] font-extrabold">{v.title}</h2>
          <p className="mt-[7px] text-pretty text-[14.5px] leading-[1.6] text-tb-body">{v.body}</p>
        </li>
      ))}
    </ul>
  );
}

function TryItBand() {
  return (
    <section id="try" aria-labelledby="try-h" className="scroll-mt-[72px] bg-[rgba(241,234,224,0.72)]">
      <TryIt>
        <p className={EYEBROW}>Try it here</p>
        <h2 id="try-h" className="mt-2.5 text-balance text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.14]">
          Set the room. See the answer.
        </h2>
        <p className="mt-3 max-w-[44ch] text-pretty text-base leading-[1.6] text-tb-body">
          A simplified version of the app’s Home card. Pick sleep or going out, nudge the temperature, then do a pretend
          check-in, the same three taps you do at 2am.
        </p>
      </TryIt>
    </section>
  );
}

function StepCard({ n, badge, title, decor, children, foot }: { n: number; badge: string; title: string; decor: ReactNode; children: ReactNode; foot: string }) {
  return (
    <li className="relative overflow-hidden rounded-[26px] bg-white p-[22px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
      <div aria-hidden="true">{decor}</div>
      <h3 className="relative flex items-center gap-2.5 text-lg font-extrabold">
        <span
          className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full text-[13px] font-extrabold text-white"
          style={{ background: badge }}
        >
          {n}
        </span>
        {title}
      </h3>
      <div className="relative mt-[18px]">{children}</div>
      <p className="relative mt-3.5 text-pretty text-sm leading-[1.55] text-tb-body">{foot}</p>
    </li>
  );
}

const FEEL_ROWS = [
  {
    label: "Cool",
    bg: "#E7EFF7",
    ink: "#2F5B8A",
    picked: false,
    icon: <path d="M12 3.5v17M4.6 7.8l14.8 8.4M19.4 7.8 4.6 16.2" stroke="#2F5B8A" strokeWidth="2" strokeLinecap="round" />,
  },
  {
    label: "Comfortable",
    bg: "#EEF3E8",
    ink: "#4F5D3E",
    picked: true,
    icon: <path d="m6 12.5 4 4 8-9" stroke="#4F5D3E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    label: "Warm",
    bg: "#F3EADF",
    ink: "#8A4F14",
    picked: false,
    icon: (
      <>
        <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" stroke="#B0651A" strokeWidth="2" />
        <path d="M12 3.6v2.1M12 18.3v2.1M3.6 12h2.1M18.3 12h2.1" stroke="#B0651A" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

function CheckIn() {
  return (
    <section id="checkin" aria-labelledby="checkin-h" className="relative scroll-mt-[72px] overflow-hidden">
      <div className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pb-[clamp(12px,2vw,20px)] pt-[clamp(52px,7vw,96px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="min-w-0 flex-[1_1_440px]">
            <p className={EYEBROW}>The dressing check-in</p>
            <h2 id="checkin-h" className={`${SECTION_H2} max-w-[18ch]`}>
              Ten minutes after they settle. Ten seconds to log.
            </h2>
          </div>
          <p className="max-w-[42ch] flex-[0_1_400px] text-pretty text-base leading-[1.6] text-tb-body">
            Feel the chest, tap how it felt. When the same answer keeps coming back at a similar temperature, TinyLayers moves the starting layers one step.
          </p>
        </div>

        <ol className="mt-8 grid list-none gap-4 p-0 min-[880px]:grid-cols-3">
          <StepCard
            n={1}
            badge="#3D6DA8"
            title="Dress from the plan"
            decor={<div className="absolute right-[-30px] top-[-30px] h-[100px] w-[100px] rounded-full bg-[#DCE6F2] [animation:tm-float-b_8s_ease-in-out_infinite]" />}
            foot="Wore something different? Swap a chip and the check-in logs what was really on."
          >
            <div className="rounded-[18px] bg-tb px-4 py-3.5">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">Tonight’s plan</p>
              <ul className="mt-2.5 flex list-none flex-col gap-2 p-0">
                {tonightPlan.map((row) => (
                  <li key={row.name} className="flex items-center gap-2.5">
                    <span className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-[#3D6DA8]">
                      <Tick size={9} />
                    </span>
                    <span className="text-sm font-bold">{row.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StepCard>

          <StepCard
            n={2}
            badge="#5F6F4B"
            title="Feel the chest"
            decor={
              <div className="absolute bottom-[-26px] left-[-26px] h-[90px] w-[90px] rotate-[18deg] rounded-[26px] bg-[#E3EBDC] [animation:tm-float-a_7s_ease-in-out_infinite]" />
            }
            foot="Chest or back of the neck, never hands or feet. Cool hands are normal."
          >
            <ul className="flex list-none flex-col gap-[7px] p-0">
              {FEEL_ROWS.map((f) => (
                <li
                  key={f.label}
                  className={`flex items-center gap-[11px] rounded-[15px] px-3 py-2.5 ${
                    f.picked ? "shadow-[inset_0_0_0_2px_#A9C08A] [animation:tm-chip_.6s_cubic-bezier(.34,1.4,.64,1)_both_.3s]" : ""
                  }`}
                  style={{ background: f.bg }}
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[10px] bg-white">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {f.icon}
                    </svg>
                  </span>
                  <span className="text-sm font-extrabold" style={{ color: f.ink }}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </StepCard>

          <StepCard
            n={3}
            badge="#D17A2A"
            title="It adjusts on a pattern"
            decor={
              <>
                <div className="absolute right-[-22px] top-[-22px] h-[86px] w-[86px] rotate-[14deg] rounded-[26px] bg-[#F6D9A8] [animation:tm-float-a_6.5s_ease-in-out_infinite]" />
                <div className="absolute right-10 top-[70px] h-2 w-2 rounded-full bg-[#E2A03F] [animation:tm-twinkle_2.2s_ease-in-out_infinite]" />
                <div className="absolute right-[18px] top-24 h-1.5 w-1.5 rounded-full bg-[#7FA8CF] [animation:tm-twinkle_2.2s_ease-in-out_infinite_.8s]" />
              </>
            }
            foot="One check-in never changes the plan. Repeated answers at a similar room temperature move it one step, never more."
          >
            <div className="rounded-[18px] bg-tb-sand px-4 py-3.5">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-[#8A4F14]">Running warm</p>
              <p className="mt-[5px] text-base font-extrabold leading-[1.3]">Warm again and again</p>
              <div className="mt-2.5 rounded-[14px] bg-tb px-3 py-2.5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">Next time at {DEMO_TEMP}&deg;C</p>
                <p className="mt-[3px] text-[13.5px] font-bold">One base layer lighter, same TOG</p>
              </div>
            </div>
          </StepCard>
        </ol>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-h"
      className="mx-auto box-border max-w-[1180px] scroll-mt-[72px] px-[clamp(18px,4vw,40px)] pb-[clamp(20px,3vw,32px)] pt-[clamp(48px,7vw,88px)]"
    >
      <p className={EYEBROW}>How it works</p>
      <h2 id="how-h" className={`${SECTION_H2} max-w-[20ch]`}>
        One practical question. A calm answer in three steps.
      </h2>
      <p className="mt-3.5 max-w-[58ch] text-pretty text-base leading-[1.6] text-tb-body">
        TinyLayers is a baby outfit guide for real nights and real outings, built for tired parents who need plain English,
        not another chart to memorise.
      </p>
      <ol className="mt-7 grid list-none gap-3.5 p-0 min-[880px]:grid-cols-3">
        {STEPS.map((s) => (
          <li key={s.n} className={CARD}>
            <p className="text-xs font-extrabold tracking-[0.08em] text-[#2F5B8A]">{s.n}</p>
            <h3 className="mt-3.5 text-[19px] font-extrabold">{s.title}</h3>
            <p className="mt-[7px] text-pretty text-[14.5px] leading-[1.6] text-tb-body">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Modes() {
  return (
    <section
      id="modes"
      aria-labelledby="modes-h"
      className="mx-auto box-border max-w-[1180px] scroll-mt-[72px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,76px)]"
    >
      <p className={EYEBROW}>Six situations</p>
      <h2 id="modes-h" className={`${SECTION_H2} max-w-[20ch]`}>
        Guidance for the moments that keep you guessing.
      </h2>
      <ul className="mt-7 grid list-none gap-3.5 p-0 min-[620px]:grid-cols-2 min-[920px]:grid-cols-3">
        {MODES.map((m) => (
          <li key={m.title} className={`${CARD} flex flex-col gap-1.5`}>
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-[15px] text-[19px] font-extrabold"
              style={{ background: m.tint, color: m.ink }}
            >
              {m.mark}
            </span>
            <h3 className="mt-2.5 text-[19px] font-extrabold">{m.title}</h3>
            <p className="text-pretty text-[14.5px] leading-[1.6] text-tb-body">{m.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GetTheApp() {
  return (
    <section id="get" aria-labelledby="get-h" className="mx-auto box-border max-w-[1180px] scroll-mt-[72px] px-[clamp(18px,4vw,40px)] pb-[clamp(48px,6vw,80px)]">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-[#3D6DA8] p-[clamp(30px,4vw,52px)]">
        <div className="min-w-0 flex-[1_1_380px]">
          <h2 id="get-h" className="text-balance text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.14] text-white">
            Close the nursery door calm tonight.
          </h2>
          <p className="mt-3 max-w-[44ch] text-pretty text-base leading-[1.6] text-white">
            Download TinyLayers for iOS for plain-English outfit guidance for sleep, naps, and every outing. Monthly starts with a 7-day free trial where the App Store offers it.
          </p>
        </div>
        <AppStoreCta app={app} waitlistHref="/#join" liveLabel="Download on the App Store" />
      </div>
    </section>
  );
}

export function LayersPage() {
  return (
    <>
      <Hero />
      <Values />
      <TryItBand />
      <CheckIn />
      <HowItWorks />
      <Modes />
      <GuidesTeaser
        app="tinylayers"
        eyebrow="The TinyLayers guide"
        heading="Calm answers for the questions parents google at 2am."
        slugs={["how-many-layers-should-baby-wear", "feel-baby-neck-to-check-temperature", "baby-car-seat-clothing"]}
        className="bg-[rgba(241,234,224,0.72)] pb-[clamp(44px,6vw,80px)]"
      >
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[20px] bg-[#EEF3E8] px-[22px] py-[18px]">
          <p className="max-w-[90ch] flex-[1_1_420px] text-pretty text-sm font-bold leading-[1.6] text-[#47523B]">
            TinyLayers is built on common TOG sleepwear guidance and safe-sleep recommendations from trusted public health
            sources, including AAP guidance. It provides general dressing guidance only and does not replace medical advice.
          </p>
          <Link href="/guides/tog-guide-for-baby-sleep" className="flex-none text-sm font-extrabold text-[#2F5B8A] hover:opacity-80">
            TOG ratings explained &rarr;
          </Link>
        </div>
      </GuidesTeaser>
      <Faq faqs={LAYERS_FAQS} />
      <GetTheApp />
    </>
  );
}
