import Link from "next/link";
import { NapsMark } from "@/components/tinynaps/mark";

export const NAPS_FAQS = [
  {
    q: "What does TinyNaps track?",
    a: "At launch: naps and night sleep with timers, breastfeeding (left or right), bottles of breast milk or formula, pumping, and wet or dirty nappies, all on one daily timeline. Growth charts, health records and shared caregivers follow soon after.",
  },
  {
    q: "Is TinyNaps only for sleep?",
    a: "No. Despite the name, it is an everyday care tracker. It answers the questions you ask most: when did my baby last eat, sleep or have a change, and how has today been going.",
  },
  {
    q: "Will it tell me when my baby should sleep?",
    a: "TinyNaps shows your own records, such as how long your baby has been awake. Any age-based wake window guidance is optional and only ever a rough guide, never a prediction or a rule.",
  },
  {
    q: "Does TinyNaps give medical advice?",
    a: "No. It helps you keep clear records you can share with your health visitor, GP or paediatrician. If you are worried about your baby, contact your GP or NHS 111, or call 999 in an emergency.",
  },
  {
    q: "Does it log solid food?",
    a: "Only simply. TinyMeals is the TinyBundle app for starting solids, with first foods and recipes. TinyNaps keeps a basic note of meals so your daily timeline stays complete.",
  },
  {
    q: "When is TinyNaps available?",
    a: "TinyNaps is coming soon to iPhone. Join the TinyBundle newsletter and we will let you know the day it launches.",
  },
];

const TILES = [
  { label: "Last sleep", value: "1h 25m", sub: "Awake for 2h 10m", tint: "bg-naps-lavender", ink: "text-naps-lavender-ink" },
  { label: "Last feed", value: "10:35", sub: "Breastfeeding", tint: "bg-naps-powder", ink: "text-naps-powder-deep" },
  { label: "Nappies", value: "4 today", sub: "3 wet · 1 dirty", tint: "bg-naps-sage", ink: "text-naps-sage-deep" },
  { label: "Total sleep", value: "8h 40m", sub: "Last 24 hours", tint: "bg-naps-lavender", ink: "text-naps-lavender-ink" },
];

const QUICK_LOG = ["Sleep", "Feed", "Nappy", "More"];

const FEATURES = [
  {
    title: "Sleep",
    body: "Start and stop a timer, or add a nap afterwards. See total sleep today and how long your baby has been awake.",
    tint: "bg-naps-lavender",
    soon: false,
  },
  {
    title: "Feeds",
    body: "Breastfeeding timer with left or right side, bottles of breast milk or formula, and pumping. Time since the last feed is always on show.",
    tint: "bg-naps-powder",
    soon: false,
  },
  {
    title: "Nappies",
    body: "Wet, dirty or both in one tap, with a daily count and an optional note when something looks different.",
    tint: "bg-naps-sage",
    soon: false,
  },
  {
    title: "Growth",
    body: "Weight, length and head size on WHO growth charts, so you can see the trend between health visitor checks.",
    tint: "bg-naps-powder",
    soon: true,
  },
  {
    title: "Health records",
    body: "Temperatures, symptoms, medicines and appointments in one place, ready to share at your next appointment.",
    tint: "bg-naps-sage",
    soon: true,
  },
  {
    title: "Shared caregiving",
    body: "Partners, grandparents and childminders log to the same timeline, and you can see who logged what.",
    tint: "bg-naps-lavender",
    soon: true,
  },
];

const NIGHT = [
  "Big buttons you can reach with one thumb while you hold your baby.",
  "A dark, dim design that will not light up the room at 3am.",
  "Timers keep running if you lock your phone or switch apps.",
  "Almost no typing: most logs take a single tap.",
];

const SECTION = "mx-auto box-border w-full max-w-[1180px] px-[clamp(18px,4vw,40px)]";

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">{children}</p>;
}

function Dashboard() {
  return (
    <figure className="relative min-w-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-3 -top-3 h-[140px] w-[140px] rotate-[14deg] rounded-[40px] bg-naps-lavender" />
        <div className="absolute -bottom-4 -left-6 h-[180px] w-[180px] rounded-full bg-naps-powder" />
      </div>
      <div className="relative mx-auto max-w-[400px] rounded-[34px] bg-tb p-5 shadow-[0_18px_40px_rgba(80,70,140,0.14)]">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-naps-lavender-deep">Today</p>
        <p className="mt-1 text-[22px] font-extrabold">Monday, 12 October</p>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {TILES.map((tile) => (
            <div key={tile.label} className={`rounded-[20px] px-4 py-3.5 ${tile.tint}`}>
              <p className={`text-[11px] font-extrabold uppercase tracking-[0.06em] ${tile.ink}`}>{tile.label}</p>
              <p className="mt-1.5 text-[22px] font-extrabold leading-none">{tile.value}</p>
              <p className="mt-1.5 text-xs font-bold text-tb-body">{tile.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[22px] bg-white p-3 shadow-[0_8px_22px_rgba(80,70,140,0.07)]">
          <p className="px-1 text-[11px] font-extrabold uppercase tracking-[0.07em] text-tb-muted">Quick log</p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {QUICK_LOG.map((item) => (
              <span
                key={item}
                className="flex h-14 items-center justify-center rounded-2xl bg-naps-lavender text-[13px] font-extrabold text-naps-lavender-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="relative mt-3 text-center text-xs font-bold text-tb-muted">
        Illustrative dashboard with sample data.
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto box-border grid max-w-[1240px] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(18px,4vw,40px)] pb-[clamp(48px,6vw,88px)] pt-[clamp(36px,5vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        <div className="min-w-0">
          <p className="inline-flex min-h-8 items-center gap-2 rounded-2xl bg-naps-lavender px-3.5 py-1.5 text-xs font-extrabold tracking-[0.02em] text-naps-lavender-ink">
            <span className="h-[7px] w-[7px] rounded-full bg-naps-lavender-deep" />
            Coming soon to iOS
          </p>
          <h1 className="mt-[18px] max-w-[14ch] text-balance text-[clamp(38px,5.4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            All the little things, in one place.
          </h1>
          <p className="mt-4 max-w-[44ch] text-pretty text-[clamp(16px,1.5vw,19px)] leading-relaxed text-tb-body">
            Sleep, feeds, nappies, growth and health in one calm tracker. See when your baby last ate, slept or had a
            change, at a glance.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-5">
            <Link
              href="/#tips"
              className="flex h-[54px] items-center rounded-[18px] bg-naps-lavender-deep px-6 text-base font-extrabold text-white transition-colors hover:bg-naps-lavender-ink active:scale-[0.97]"
            >
              Get notified at launch
            </Link>
            <a href="#features" className="border-b-2 border-naps-lavender-deep/30 pb-0.5 text-[15px] font-extrabold text-naps-lavender-deep">
              See what it tracks &rarr;
            </a>
          </div>
        </div>
        <Dashboard />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className={`${SECTION} scroll-mt-20 py-[clamp(40px,6vw,72px)]`}>
      <Kicker>What it tracks</Kicker>
      <h2 className="mt-2.5 max-w-[20ch] text-balance text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.12]">
        One timeline for every feed, nap and change.
      </h2>
      <ul className="mt-8 grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {FEATURES.map((feature) => (
          <li key={feature.title} className="rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
            <div className="flex items-center justify-between gap-3">
              <span className={`flex h-[46px] w-[46px] items-center justify-center rounded-2xl ${feature.tint}`}>
                <NapsMark className="h-7 w-7" />
              </span>
              <span
                className={`rounded-[11px] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] ${
                  feature.soon ? "bg-tb-border text-tb-body" : "bg-naps-sage text-naps-sage-deep"
                }`}
              >
                {feature.soon ? "Coming next" : "At launch"}
              </span>
            </div>
            <h3 className="mt-4 text-[19px] font-extrabold">{feature.title}</h3>
            <p className="mt-[7px] text-pretty text-[14.5px] leading-relaxed text-tb-body">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Night() {
  return (
    <section id="night" className={`${SECTION} scroll-mt-20 pb-[clamp(40px,6vw,72px)]`}>
      <div className="grid gap-8 rounded-[32px] bg-naps-night p-[clamp(26px,4vw,52px)] text-white [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-naps-lavender-mid">Built for 3am</p>
          <h2 className="mt-2.5 text-balance text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.14]">
            Log it in the dark, with one hand, half asleep.
          </h2>
          <p className="mt-3 max-w-[44ch] text-pretty text-base leading-relaxed text-white/80">
            TinyNaps is made for the moments you actually log things: mid-feed, in a dim room, with a baby on your
            shoulder.
          </p>
        </div>
        <ul className="flex flex-col gap-3 self-center">
          {NIGHT.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl bg-white/8 px-4 py-3.5 text-[15px] font-bold leading-snug">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 flex-none rounded-full bg-tb-amber" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Boundaries() {
  return (
    <section className={`${SECTION} pb-[clamp(40px,6vw,72px)]`}>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-3xl bg-naps-sage p-[clamp(22px,3vw,32px)]">
        <div className="min-w-0 flex-[1_1_min(100%,380px)]">
          <h2 className="text-[19px] font-extrabold text-naps-sage-deep">Your records, your call.</h2>
          <p className="mt-1.5 max-w-[64ch] text-pretty text-[14.5px] font-bold leading-relaxed text-naps-sage-deep">
            TinyNaps helps you understand your own baby&rsquo;s patterns. It never diagnoses, and it never presents a
            sleep window as a guarantee. Growth charts will use the WHO child growth standards, and your health visitor
            or GP is always the one to ask about your baby&rsquo;s health.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto box-border max-w-[840px] scroll-mt-20 px-[clamp(18px,4vw,40px)] pb-[clamp(48px,7vw,88px)]">
      <h2 className="text-balance text-center text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.12]">Questions, answered</h2>
      <div className="mt-7 flex flex-col gap-2.5">
        {NAPS_FAQS.map((item) => (
          <details key={item.q} className="group rounded-[20px] bg-white px-[22px] py-[18px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span className="text-pretty text-base font-extrabold">{item.q}</span>
              <span aria-hidden="true" className="flex-none text-xl font-bold leading-none text-naps-lavender-deep">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">&minus;</span>
              </span>
            </summary>
            <p className="mt-2.5 max-w-[64ch] text-pretty text-[14.5px] leading-[1.65] text-tb-body">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function NapsPage() {
  return (
    <>
      <Hero />
      <Features />
      <Night />
      <Boundaries />
      <Faq />
    </>
  );
}
