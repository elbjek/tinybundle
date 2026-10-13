import Link from "next/link";
import { AppTile } from "@/components/app-identity";
import { BloomsDemo } from "@/components/home/app-demos";
import { StoreLabel } from "@/components/app-store-badge";
import { AppStoreCta } from "@/components/site/app-store-cta";
import { Faq, type FaqItem } from "@/components/site/faq";
import { GuidesTeaser } from "@/components/site/guides-teaser";
import { appCta, apps, getApp, type AppSlug } from "@/lib/apps";

const APP = getApp("tinyblooms");
const WAITLIST = "/#join";
const SECTION = "mx-auto box-border max-w-[1180px] scroll-mt-16 px-[clamp(18px,4vw,40px)]";
const EYEBROW = "text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted";

export const BLOOMS_FAQS: FaqItem[] = [
  {
    q: "How much tummy time does my baby need?",
    a: "The WHO recommends at least 30 minutes of tummy time a day, spread out while your baby is awake, for babies who aren’t crawling yet. Start with a minute or two at a time and build up. TinyBlooms suggests tummy time ideas that make it more fun.",
  },
  {
    q: "What activities can I do with my 4-month-old?",
    a: "At around 4 months, babies love mirror play, reaching for toys, tummy time with something interesting to look at, and simple songs. TinyBlooms suggests one idea at a time based on your baby’s age and how much time you have.",
  },
  {
    q: "Do I need special toys?",
    a: "No. Most TinyBlooms ideas use what you already have at home: a muslin, a mirror, a window, your voice.",
  },
  {
    q: "Does TinyBlooms track milestones?",
    a: "Yes, gently. Note each milestone when it happens and keep it with your memories. There are no scores, streaks or “behind schedule” messages: every child gets there in their own time.",
  },
  {
    q: "What ages is TinyBlooms for?",
    a: "TinyBlooms grows with your child from newborn to age 5, with activities and milestones that change as they do.",
  },
  {
    q: "Can I keep photos and memories?",
    a: "Yes. Memories is a private journal for first words, funny moments and photos, kept alongside the milestones you’ve noted.",
  },
  {
    q: "Do the apps give medical advice?",
    a: "No. If you have any concerns about your baby’s development, talk to your health visitor or paediatrician.",
  },
];

const FEATURES = [
  "Age-right activities from newborn to age 5",
  "Tummy time, sensory play, music and talking games",
  "Gentle milestones, with no scores or “behind” messages",
  "A memory journal for the moments you want to keep",
];

const AGES = [
  ["0–3 mo", "Face-to-face chats, high-contrast pictures and short bursts of tummy time."],
  ["4–6 mo", "Mirror play, reaching for toys and rolling practice on the floor."],
  ["7–12 mo", "Peekaboo, stacking cups, cruising games and songs with actions."],
  ["1–2 yrs", "Pouring and posting, first scribbles and naming everything on a walk."],
  ["3–5 yrs", "Pretend play, simple crafts, counting games and stories they help tell."],
] as const;

/** Each sibling app's one-line pitch on this page. */
const FAMILY_LINES: Partial<Record<AppSlug, string>> = {
  tinylayers: "What should my baby wear to sleep?",
  tinymeals: "Starting solids, one bite at a time",
  tinynaps: "Sleep, feeds and nappies at a glance",
};

function Hero() {
  const cta = appCta(APP, WAITLIST);
  return (
    <section className="bg-[#EAF1E5]">
      <div className="mx-auto box-border grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(18px,4vw,40px)] pb-[clamp(48px,7vw,96px)] pt-[calc(54px+clamp(36px,7vw,90px))]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <AppTile
              app="tinyblooms"
              bg="#FFFFFF"
              className="h-14 w-14 rounded-[18px] shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
              markClassName="h-[34px] w-[34px]"
            />
            <h1 className="m-0 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#3F6E47]">
              TinyBlooms &middot; Activities, milestones and memories
            </h1>
          </div>
          <p className="mt-[18px] text-balance text-[clamp(38px,5.4vw,64px)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Five spare minutes?
            <br />
            <span className="text-[#55915E]">Here’s what to play.</span>
          </p>
          <p className="mt-[18px] max-w-[46ch] text-pretty text-[clamp(16px,1.5vw,18px)] leading-[1.6] text-[#4F5848]">
            TinyBlooms suggests one small, age-right activity for whatever time you have, follows milestones gently and
            keeps the moments you want to remember. From newborn to five, with no scores and no “behind” messages.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-[22px] gap-y-3.5">
            <a
              href={cta.href}
              rel={cta.live ? "noopener" : undefined}
              className="flex h-[54px] items-center gap-2.5 rounded-[18px] bg-[#55915E] px-6 text-base font-extrabold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:brightness-[0.93] active:scale-[0.97]"
            >
              {cta.live ? <StoreLabel /> : cta.label}
            </a>
            <a
              href="#features"
              className="text-[15px] font-extrabold text-[#3F6E47] underline decoration-2 underline-offset-[6px] hover:opacity-75"
            >
              See what it does
            </a>
          </div>
        </div>
        <div className="box-border flex min-w-0 justify-center rounded-[34px] bg-[#E3EBDC] p-[clamp(20px,3vw,36px)]">
          <BloomsDemo />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cta = appCta(APP, WAITLIST);
  return (
    <section id="features" className={`${SECTION} pt-[clamp(72px,10vw,130px)]`}>
      <p className={EYEBROW}>What it does</p>
      <h2 className="mt-2.5 max-w-[22ch] text-balance text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
        Play ideas that fit real days.
      </h2>
      <article className="mt-[clamp(28px,4vw,44px)] box-border grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-[clamp(22px,4vw,48px)] rounded-[32px] bg-white p-[clamp(22px,3.4vw,40px)] shadow-[0_10px_28px_rgba(120,80,40,0.06)]">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <AppTile app="tinyblooms" className="h-11 w-11 rounded-[14px]" markClassName="h-[30px] w-[30px]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.06em] text-[#3F6E47]">
              TinyBlooms &middot; Activities, milestones and memories
            </span>
          </div>
          <h3 className="mt-4 text-balance text-[clamp(24px,2.8vw,32px)] font-extrabold leading-[1.15] tracking-[-0.015em]">
            Activities, milestones and memories in one calm place
          </h3>
          <p className="mt-3 max-w-[52ch] text-pretty text-[15.5px] leading-[1.65] text-tb-body">
            TinyBlooms gives you one small, age-right activity at a time, from tummy time for a newborn to pretend play
            for a four-year-old. Note milestones when they happen and keep the little moments in a private journal.
          </p>
          <ul className="mt-4 flex list-none flex-col gap-[9px] p-0">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-[14.5px] font-bold leading-[1.45]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none">
                  <circle cx="12" cy="12" r="10" fill="#55915E" opacity="0.14" />
                  <path d="m7.5 12.3 3 3 6-6.3" stroke="#55915E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={cta.href}
            rel={cta.live ? "noopener" : undefined}
            className="mt-[22px] inline-flex h-11 items-center gap-2 rounded-[22px] bg-tb-ink px-[18px] text-sm font-extrabold text-white hover:bg-black"
          >
            {cta.live ? <StoreLabel /> : cta.label}
          </a>
        </div>
        <div className="box-border min-w-0 rounded-[24px] bg-[#E3EBDC] p-5">
          <h4 className="m-0 text-base font-extrabold text-[#3F6E47]">Play ideas by age</h4>
          <div className="mt-2.5 rounded-2xl bg-white px-4 py-0.5">
            <dl className="mt-3 flex flex-col">
              {AGES.map(([age, idea]) => (
                <div key={age} className="flex gap-3.5 py-[11px]">
                  <dt className="w-[92px] flex-none text-[13.5px] font-extrabold text-[#3F6E47]">{age}</dt>
                  <dd className="m-0 text-pretty text-sm leading-normal text-[#3F3A33]">{idea}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>
    </section>
  );
}

function StatusPill({ live }: { live: boolean }) {
  return (
    <span
      className="inline-flex h-[22px] flex-none items-center rounded-[11px] px-[9px] text-[10.5px] font-extrabold"
      style={live ? { background: "#EEF3E8", color: "#47523B" } : { background: "#F3EADF", color: "#8A6A3C" }}
    >
      {live ? "Available" : "Coming soon"}
    </span>
  );
}

const FAMILY_CARD =
  "flex w-full flex-col rounded-[26px] p-[22px] transition-transform duration-200 hover:-translate-y-[3px] active:scale-[0.99]";

/** The other three apps plus the bundle. TinyNaps sits on its navy band colour, which its light moon needs. */
function Family() {
  return (
    <section id="family" className={`${SECTION} pt-[clamp(72px,10vw,130px)]`}>
      <p className={EYEBROW}>Part of TinyBundle</p>
      <h2 className="mt-2.5 max-w-[22ch] text-balance text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
        Four small apps for the whole day.
      </h2>
      <ul className="mt-[clamp(24px,4vw,40px)] grid list-none gap-3.5 p-0 min-[560px]:grid-cols-2 min-[1000px]:grid-cols-4">
        {apps
          .filter((app) => app.slug !== APP.slug)
          .map((app) => {
            const night = app.slug === "tinynaps";
            const accent = night ? "#F0B66E" : app.colors.deep;
            return (
              <li key={app.slug} className="flex min-w-0">
                <Link
                  href={`/${app.slug}`}
                  className={FAMILY_CARD}
                  style={{ background: night ? app.colors.band : app.colors.tile, color: night ? "#FFFFFF" : "#2E2E2E" }}
                >
                  <span className="flex items-center justify-between gap-2.5">
                    <AppTile app={app.slug} bg="#FFFFFF" className="h-11 w-11 rounded-[14px]" markClassName="h-7 w-7" />
                    <StatusPill live={app.live} />
                  </span>
                  <span className="mt-4 text-xs font-extrabold uppercase tracking-[0.07em]" style={{ color: accent }}>
                    {app.name}
                  </span>
                  <span className="mt-2 text-[19px] font-extrabold leading-[1.25]">{FAMILY_LINES[app.slug] ?? app.tagline}</span>
                  <span className="mt-auto pt-3.5 text-sm font-extrabold" style={{ color: accent }}>
                    Learn more &rarr;
                  </span>
                </Link>
              </li>
            );
          })}
        <li className="flex min-w-0">
          <Link href="/" className={`${FAMILY_CARD} bg-white text-tb-ink shadow-[0_8px_22px_rgba(120,80,40,0.06)]`}>
            <AppTile app="tinybundle" bg="#F3EADF" className="h-11 w-11 rounded-[14px]" markClassName="h-7 w-7" />
            <span className="mt-4 text-xs font-extrabold uppercase tracking-[0.07em] text-tb-amber-ink">TinyBundle</span>
            <span className="mt-2 text-[19px] font-extrabold leading-[1.25]">See all four apps together</span>
            <span className="mt-auto pt-3.5 text-sm font-extrabold text-tb-amber-ink">Explore the bundle &rarr;</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

function GetTheApp() {
  return (
    <section id="get" className={`${SECTION} pt-[clamp(56px,7vw,88px)]`}>
      <div
        className="relative box-border flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[28px] p-[clamp(30px,4vw,52px)]"
        style={{ background: APP.colors.band }}
      >
        <div aria-hidden="true" className="absolute -top-[50px] right-[22%] h-[140px] w-[140px] rotate-[16deg] rounded-[38px] bg-white opacity-[0.08]" />
        <div aria-hidden="true" className="absolute -bottom-20 -right-10 h-[200px] w-[200px] rounded-full bg-black opacity-10" />
        <div aria-hidden="true" className="absolute right-[40%] top-[30px] h-[9px] w-[9px] rounded-full bg-tb-amber [animation:tm-twinkle_2.4s_ease-in-out_infinite]" />
        <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
          <h2 className="text-balance text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.14] text-white">
            One small idea for right now.
          </h2>
          <p className="mt-3 max-w-[44ch] text-pretty text-base leading-[1.6] text-white">
            Age-right play, gentle milestones and the memories you want to keep. No flashcards, no scores.
          </p>
        </div>
        <AppStoreCta app={APP} waitlistHref={WAITLIST} />
      </div>
    </section>
  );
}

export function BloomsPage() {
  return (
    <>
      <Hero />
      <Features />
      <GuidesTeaser
        app="tinyblooms"
        eyebrow="TinyBlooms guides"
        heading="More ideas for the in-between minutes."
        slugs={["tummy-time-ideas", "what-do-i-do-with-my-baby", "baby-sensory-activities"]}
        className="pt-[clamp(24px,3vw,42px)]"
      />
      <Faq faqs={BLOOMS_FAQS} />
      <Family />
      <GetTheApp />
    </>
  );
}
