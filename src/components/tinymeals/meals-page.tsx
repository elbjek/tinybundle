import Image from "next/image";
import { AppStoreCta } from "@/components/site/app-store-cta";
import { Faq, type FaqItem } from "@/components/site/faq";
import { GuidesTeaser } from "@/components/site/guides-teaser";
import { FirstFoodsPlan } from "@/components/tinymeals/first-foods-plan";
import { MealsMark } from "@/components/tinymeals/mark";
import { FavouritesCard, FirstFoodCard, TriedCard } from "@/components/tinymeals/share-card";
import { TryToday } from "@/components/tinymeals/try-today";
import { getApp } from "@/lib/apps";

const BABY = "Mila";
const app = getApp("tinymeals");

export const MEALS_FAQS: FaqItem[] = [
  {
    q: "What does TinyMeals actually do?",
    a: "It suggests one meal a day that suits your baby’s age, texture stage and the foods they’ve already tried. Log how it went with one tap, and the history builds itself: first tried, last served, favourites.",
  },
  {
    q: "How much does it cost?",
    a: "Start with 7 days free, then $29.99 a year or $6.99 a month. Cancel anytime. Family Sharing is included, so a partner or grandparent can see the same plan.",
  },
  {
    q: "What ages is it for?",
    a: "From getting ready for solids at around 4 months through to toddler family meals. The plan and textures change as your baby grows.",
  },
  {
    q: "Do I need to follow a schedule?",
    a: "No. The first-foods plan is grouped by week, not by day. Miss a few days and you simply carry on where you were.",
  },
  {
    q: "How does it handle allergens?",
    a: "The common allergens are introduced one at a time, a few days apart, once first tastes are going well. TinyMeals keeps a clear record but never diagnoses or assesses reactions. Always speak to your doctor if you’re worried.",
  },
  {
    q: "Can the rest of the family follow along?",
    a: "Yes. Everyone in your household sees the same food history and gets a gentle note at milestones, like the first food or the tenth.",
  },
];

const CHIPS = [
  { label: "First spoons", className: "bg-meals-peach text-meals-orange-ink" },
  { label: "Finger foods", className: "bg-meals-sage-tint text-meals-sage-ink" },
  { label: "First allergens", className: "bg-meals-sand text-meals-orange-ink" },
  { label: "Family meals", className: "bg-meals-sage-tint text-meals-sage-ink" },
];

const VALUES = [
  {
    title: "One meal, not a hundred",
    body: "Open the app and today’s idea is already there, sized to their age and the textures they can manage.",
    tile: "bg-meals-sage-tint",
    icon: (
      <path
        d="M4 11h16a8 8 0 0 1-16 0ZM9 7c0-1.5 3-1.5 3-3M14 7c0-1 1.5-1.2 1.5-2.5"
        stroke="#5F6F4B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Remembers what they loved",
    body: "One tap after a meal. The next ideas lean on favourites and gently bring back the “not yet” foods.",
    tile: "bg-meals-peach",
    icon: (
      <path
        d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z"
        stroke="#B45F1F"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Allergens, calmly",
    body: "The common allergens introduced one at a time, with a record you can show your health visitor.",
    tile: "bg-meals-sand",
    icon: (
      <>
        <path d="M12 3.5 19 6v5.5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-2.5Z" stroke="#B45F1F" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m9 12 2.2 2.2L15.5 10" stroke="#B45F1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const STEPS = [
  { title: "Tell us about your baby", body: "Age, how they eat, anything to work around. Two minutes, once.", dot: "bg-meals-sage", blob: "bg-meals-mint rounded-[42px]" },
  {
    title: "Cook today’s meal",
    body: "One clear idea with a familiarity badge, so you know when something new is in it.",
    dot: "bg-meals-orange",
    blob: "bg-meals-apricot rounded-[24px]",
  },
  { title: "Tap how it went", body: "Loved, liked or not yet. Optional, and it shapes tomorrow’s idea.", dot: "bg-meals-sage", blob: "bg-meals-sage-tint rounded-[42px]" },
];

const SECTION = "mx-auto box-border w-full max-w-[1180px] px-[clamp(18px,4vw,40px)]";

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-meals-muted">{children}</p>;
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-2.5 text-balance text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.12] ${className}`}>{children}</h2>
  );
}

function AppleLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 18 22" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.7 11.6c0-2.3 1.9-3.5 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0 0-2.4-.9-2.4-3.6ZM12.5 4.3c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" />
    </svg>
  );
}

function HomeCardPreview() {
  return (
    <div className="relative box-border min-w-0 pb-16 pl-[clamp(0px,1.6vw,18px)] pr-[clamp(0px,1vw,8px)] pt-7">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-3.5 -top-2 h-[150px] w-[150px] rotate-[14deg] rounded-[40px] bg-meals-apricot [animation:tm-float-a_7s_ease-in-out_infinite]" />
        <div className="absolute -left-[34px] bottom-0 h-[200px] w-[200px] rounded-full bg-meals-mint [animation:tm-float-b_8s_ease-in-out_infinite]" />
        <div className="absolute -right-[22px] top-[44%] h-[58px] w-[58px] rounded-full bg-meals-sage-tint [animation:tm-float-b_6s_ease-in-out_1s_infinite]" />
        <div className="absolute left-[30%] top-1.5 h-[9px] w-[9px] rounded-full bg-meals-amber [animation:tm-twinkle_2.2s_ease-in-out_infinite]" />
        <div className="absolute bottom-6 right-[30%] h-2 w-2 rounded-full bg-meals-moss [animation:tm-twinkle_2.2s_ease-in-out_.7s_infinite]" />
      </div>
      <figure
        aria-label="The TinyMeals Home screen"
        className="relative mx-auto max-w-[400px] rounded-[34px] bg-meals px-[18px] pb-[18px] pt-5 shadow-[0_18px_40px_rgba(120,80,40,0.14)] [animation:tm-screen-in_.6s_cubic-bezier(.34,1.2,.64,1)_.1s_both]"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex flex-none items-center gap-1.5">
            <MealsMark className="h-[22px] w-[22px]" />
            <span className="text-[15px] font-extrabold">TinyMeals</span>
          </div>
          <div className="flex min-w-0 flex-1 justify-end">
            <span className="flex h-[34px] items-center gap-[7px] rounded-[17px] bg-white px-3 text-[12.5px] font-extrabold shadow-[0_2px_8px_rgba(90,60,20,0.06)]">
              <span className="h-[7px] w-[7px] flex-none rounded-full bg-meals-sage" />
              {BABY} · 7 mo
              <svg width="10" height="7" viewBox="0 0 12 8" fill="none" className="flex-none" aria-hidden="true">
                <path d="m1 1.5 5 5 5-5" stroke="#8C8676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
        <div className="mt-3.5 rounded-2xl bg-meals-peach px-3.5 py-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="whitespace-nowrap text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-meals-orange-deep">
              First foods · Week 3 of 10
            </span>
            <span className="whitespace-nowrap text-[11.5px] font-extrabold text-[#8A4513]">7 of 30</span>
          </div>
          <div className="mt-[7px] h-1.5 overflow-hidden rounded-[3px] bg-[#EFD3B4]">
            <div className="h-full w-[23%] rounded-[3px] bg-meals-orange" />
          </div>
          <p className="mt-1.5 truncate text-xs text-[#7A5230]">Next up: Pear</p>
        </div>
        <div className="mt-3 rounded-[22px] bg-white px-[18px] pt-[18px] shadow-[0_8px_22px_rgba(120,80,40,0.07)]">
          <div className="flex gap-3.5">
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-meals-orange-deep">Today for {BABY} · 7 mo</p>
              <p className="mt-[7px] text-balance text-[22px] font-extrabold leading-[1.18]">Courgette &amp; carrot fritters</p>
              <p className="mt-[5px] text-pretty text-[13.5px] leading-normal text-meals-sage">Soft, grippable and ready in 15 minutes.</p>
              <p className="mt-2 text-[12.5px] font-bold text-meals-orange-deep">All familiar foods</p>
            </div>
            <div className="relative h-24 w-24 flex-none overflow-hidden rounded-[20px] bg-meals-sage-tint">
              <Image
                src="/tinymeals/hero-fritters.png"
                alt="Courgette and carrot fritters"
                fill
                sizes="96px"
                priority
                className="object-cover object-[42%_50%]"
              />
            </div>
          </div>
          <a
            href="#try"
            className="mt-4 flex h-[50px] items-center justify-center rounded-[18px] bg-meals-sage text-[15.5px] font-extrabold text-white transition-colors hover:bg-meals-sage-deep active:scale-[0.97]"
          >
            Cook this today
          </a>
          <p className="mt-3 flex items-center justify-center gap-1.5">
            <span className="text-[13px] text-meals-muted">Not feeling it?</span>
            <a href="#try" className="text-[13.5px] font-extrabold text-meals-orange">
              See more suggestions &rarr;
            </a>
          </p>
          <a href="#try" className="mt-3.5 flex h-[50px] items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 5v14M5 12h14" stroke="#D17A2A" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-extrabold text-meals-orange-deep">Log what {BABY} ate</span>
          </a>
        </div>
      </figure>
      <div aria-hidden="true" className="absolute bottom-1 left-0 [animation:tm-float-in_.6s_cubic-bezier(.34,1.3,.64,1)_.6s_both]">
        <div className="flex items-center gap-2.5 rounded-[20px] bg-white py-2.5 pl-2.5 pr-4 shadow-[0_12px_28px_rgba(120,80,40,0.14)] [animation:tm-float-a_7s_ease-in-out_1.2s_infinite]">
          <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-xl bg-meals-peach">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" fill="#D17A2A" />
            </svg>
          </span>
          <span className="block">
            <span className="block text-[13.5px] font-extrabold text-meals-orange-ink">{BABY} loved it</span>
            <span className="block text-[11px] font-bold text-meals-muted">Saved to food history</span>
          </span>
        </div>
      </div>
      <div aria-hidden="true" className="absolute -right-2.5 top-[42%] z-[2] hidden [animation:tm-float-in_.6s_cubic-bezier(.34,1.3,.64,1)_1s_both] min-[560px]:block">
        <div className="flex items-center gap-2.5 rounded-[20px] bg-white py-2.5 pl-2.5 pr-4 shadow-[0_12px_28px_rgba(120,80,40,0.14)] [animation:tm-float-b_6.5s_ease-in-out_1.6s_infinite]">
          <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-xl bg-meals-sage-tint text-sm font-extrabold text-meals-sage-ink">
            24
          </span>
          <span className="block">
            <span className="block text-[13.5px] font-extrabold text-meals-sage-ink">Foods tried</span>
            <span className="block text-[11px] font-bold text-meals-muted">3 new this week</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto box-border grid max-w-[1240px] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(18px,4vw,40px)] pb-[clamp(48px,6vw,88px)] pt-[clamp(36px,5vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        <div className="z-[1] min-w-0 [animation:tm-rise_.5s_ease_both]">
          <p className="inline-flex min-h-8 items-center gap-2 rounded-2xl bg-meals-sage-tint px-3.5 py-1.5 text-xs font-extrabold tracking-[0.02em] text-meals-sage-ink">
            <span className="h-[7px] w-[7px] rounded-full bg-meals-sage" />
            Built on NHS, WHO &amp; CDC weaning guidance
          </p>
          <h1 className="mt-[18px] max-w-[14ch] text-balance text-[clamp(38px,5.4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            Today&rsquo;s meal, worked out for you.
          </h1>
          <p className="mt-4 max-w-[42ch] text-pretty text-[clamp(16px,1.5vw,19px)] leading-relaxed text-meals-body">
            One gentle recipe a day, matched to your baby&rsquo;s age and texture stage, from first spoons to family meals.
            No food journal to keep.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-5">
            {app.live && app.appStoreUrl ? (
              <a
                href={app.appStoreUrl}
                rel="noopener"
                className="flex h-[54px] items-center gap-[11px] rounded-[18px] bg-meals-sage px-6 text-white transition-colors hover:bg-meals-sage-deep hover:text-white active:scale-[0.97]"
              >
                <AppleLogo className="h-6 w-5" />
                <span className="block">
                  <span className="block text-[11px] font-bold leading-[1.1] opacity-85">Download on the</span>
                  <span className="block text-[17px] font-extrabold leading-[1.2]">App Store</span>
                </span>
              </a>
            ) : (
              <a
                href="#get"
                className="flex h-[54px] items-center rounded-[18px] bg-meals-sage px-6 text-[17px] font-extrabold text-white transition-colors hover:bg-meals-sage-deep hover:text-white active:scale-[0.97]"
              >
                Get early access
              </a>
            )}
            <a
              href="#try"
              className="pb-0.5 text-[15px] font-extrabold text-meals-orange-deep underline decoration-meals-orange-deep/30 decoration-2 underline-offset-[6px] transition-colors hover:text-meals-orange hover:decoration-meals-orange"
            >
              Try today&rsquo;s meal &rarr;
            </a>
          </div>
          <ul className="mt-[26px] flex flex-wrap gap-2">
            {CHIPS.map((chip, i) => (
              <li
                key={chip.label}
                className={`inline-flex h-8 items-center rounded-2xl px-3.5 text-[12.5px] font-extrabold ${chip.className}`}
                style={{ animation: `tm-chip .5s cubic-bezier(.34,1.4,.64,1) ${0.5 + i * 0.08}s both` }}
              >
                {chip.label}
              </li>
            ))}
          </ul>
        </div>
        <HomeCardPreview />
      </div>
    </section>
  );
}

function Values() {
  return (
    <section
      aria-label="Why TinyMeals"
      className={`${SECTION} grid gap-3.5 pb-[clamp(40px,6vw,72px)] pt-[clamp(16px,3vw,32px)] min-[760px]:grid-cols-3`}
    >
      {VALUES.map((card) => (
        <div key={card.title} className="rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
          <div className={`flex h-[46px] w-[46px] items-center justify-center rounded-2xl ${card.tile}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {card.icon}
            </svg>
          </div>
          <h2 className="mt-4 text-[19px] font-extrabold">{card.title}</h2>
          <p className="mt-[7px] text-pretty text-[14.5px] leading-relaxed text-meals-body">{card.body}</p>
        </div>
      ))}
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className={`${SECTION} scroll-mt-20 pb-[clamp(20px,3vw,32px)] pt-[clamp(48px,7vw,88px)]`}>
      <Kicker>How it works</Kicker>
      <SectionTitle className="max-w-[20ch]">A food history that writes itself.</SectionTitle>
      <p className="mt-3.5 max-w-[58ch] text-pretty text-base leading-relaxed text-meals-body">
        TinyMeals is built for one-handed, half-asleep parents. You never fill in a journal. The history builds from the
        meals you cook.
      </p>
      <ol className="mt-7 grid gap-3.5 min-[760px]:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative overflow-hidden rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
            <div aria-hidden="true" className={`absolute -right-[26px] -top-[26px] h-[84px] w-[84px] rotate-[14deg] ${step.blob}`} />
            <span className={`relative flex h-[30px] w-[30px] items-center justify-center rounded-full text-[13px] font-extrabold text-white ${step.dot}`}>
              {i + 1}
            </span>
            <h3 className="relative mt-3.5 text-[19px] font-extrabold">{step.title}</h3>
            <p className="relative mt-[7px] text-pretty text-[14.5px] leading-relaxed text-meals-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SplitHeading({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
      <div className="min-w-0 flex-[1_1_min(100%,440px)]">
        <Kicker>{kicker}</Kicker>
        <SectionTitle className="max-w-[18ch]">{title}</SectionTitle>
      </div>
      <p className="max-w-[42ch] flex-[0_1_400px] text-pretty text-base leading-relaxed text-meals-body">{body}</p>
    </div>
  );
}

function Plan() {
  return (
    <section id="plan" className={`${SECTION} scroll-mt-20 pb-[clamp(20px,3vw,32px)] pt-[clamp(48px,7vw,88px)]`}>
      <SplitHeading
        kicker="The first-foods plan"
        title="Ten calm weeks, from first spoon to allergens."
        body="About three new foods a week, grouped so a missed day never puts you behind. Tap a week to see what’s in it."
      />
      <FirstFoodsPlan />
    </section>
  );
}

function Notification({ badge, badgeClass, time, text }: { badge: React.ReactNode; badgeClass: string; time: string; text: string }) {
  return (
    <div className="flex min-w-0 flex-[1_1_300px] items-center gap-3 rounded-[20px] bg-white/85 px-4 py-3 shadow-[0_2px_10px_rgba(90,60,20,0.06)] backdrop-blur-sm">
      <span className={`flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[11px] ${badgeClass}`}>{badge}</span>
      <span className="min-w-0 flex-1">
        <span className="flex justify-between gap-2 text-xs font-extrabold text-meals-muted">
          <span>TINYMEALS</span>
          <span>{time}</span>
        </span>
        <span className="mt-px block text-[14.5px] font-extrabold">{text}</span>
      </span>
    </div>
  );
}

function Sharing() {
  const cards = [
    { key: "first", tilt: "-rotate-[1.5deg]", card: <FirstFoodCard baby={BABY} title="Sweet Potato Mash" date="9 October" /> },
    { key: "tried", tilt: "", card: <TriedCard baby={BABY} count={24} theme="dark" /> },
    { key: "favs", tilt: "rotate-[1.5deg]", card: <FavouritesCard baby={BABY} /> },
  ];
  return (
    <section id="share" className="relative scroll-mt-20 overflow-hidden">
      <div className={`${SECTION} pb-[clamp(20px,3vw,32px)] pt-[clamp(52px,7vw,96px)]`}>
        <SplitHeading
          kicker="Moments worth sharing"
          title="First foods deserve a little fanfare."
          body="Milestones turn into cards you can post or send to the grandparents. Everyone in the household gets a gentle note when they happen."
        />
        <ul
          aria-label="Example milestone cards"
          className="-mx-[clamp(18px,4vw,40px)] mt-[18px] flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-[clamp(18px,4vw,40px)] pb-7 pt-3.5 [scroll-padding:0_clamp(18px,4vw,40px)] [scrollbar-width:none]"
        >
          {cards.map(({ key, tilt, card }) => (
            <li
              key={key}
              className={`flex-[1_0_min(78%,300px)] snap-start overflow-hidden rounded-3xl shadow-[0_14px_32px_rgba(120,80,40,0.12)] ${tilt}`}
            >
              {card}
            </li>
          ))}
        </ul>
        <div className="mt-1 flex flex-wrap gap-3" aria-label="Example household notifications">
          <Notification
            badge={<MealsMark className="h-[22px] w-[22px]" />}
            badgeClass="bg-meals-peach"
            time="now"
            text={`${BABY} just had her first food`}
          />
          <Notification
            badge={<span className="text-sm font-extrabold text-meals-sage-ink">10</span>}
            badgeClass="bg-meals-sage-tint"
            time="2h ago"
            text={`${BABY} just tried her 10th food`}
          />
        </div>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section id="safety" className={`${SECTION} scroll-mt-20 pt-[clamp(40px,6vw,64px)]`}>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-3xl bg-meals-sage-tint p-[clamp(22px,3vw,32px)]">
        <div className="min-w-0 flex-[1_1_min(100%,380px)]">
          <h2 className="text-[19px] font-extrabold text-[#3F4A33]">Every safety tip shows its source.</h2>
          <p className="mt-1.5 max-w-[64ch] text-pretty text-[14.5px] font-bold leading-relaxed text-meals-sage-ink">
            Serving and allergen guidance is written from NHS, WHO, CDC and national paediatric sources, with the date we
            last reviewed it. TinyMeals never diagnoses allergies or replaces advice from your health visitor or
            paediatrician.
          </p>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {["NHS", "WHO", "CDC"].map((source) => (
            <li key={source} className="flex h-[30px] items-center rounded-[15px] bg-white px-3 text-[12.5px] font-extrabold text-meals-sage-ink">
              {source}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GetTheApp() {
  return (
    <section id="get" className={`${SECTION} scroll-mt-20 pb-[clamp(48px,6vw,80px)]`}>
      <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[28px] bg-meals-sage p-[clamp(30px,4vw,52px)]">
        <div aria-hidden="true" className="pointer-events-none absolute -top-[50px] right-[18%] h-[140px] w-[140px] rotate-[16deg] rounded-[38px] bg-[#6E7F59]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-[70px] -right-10 h-[180px] w-[180px] rounded-full bg-[#55643F]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[34%] top-7 h-[9px] w-[9px] rounded-full bg-meals-amber [animation:tm-twinkle_2.4s_ease-in-out_infinite]" />
        <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
          <h2 className="text-balance text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.14] text-white">
            Know what&rsquo;s for lunch before they&rsquo;re hungry.
          </h2>
          <p className="mt-3 max-w-[46ch] text-pretty text-base leading-relaxed text-white">
            7 days free, then $29.99 a year. Family Sharing included, so everyone who feeds your baby sees the same plan.
          </p>
        </div>
        <AppStoreCta app={app} waitlistHref="/#join" />
      </div>
    </section>
  );
}

export function MealsPage() {
  return (
    <>
      <Hero />
      <Values />
      <section id="try" className="scroll-mt-20 bg-[rgba(241,234,224,0.72)]">
        <div className={`${SECTION} py-[clamp(40px,6vw,76px)]`}>
          <TryToday baby={BABY} />
        </div>
      </section>
      <HowItWorks />
      <Plan />
      <Sharing />
      <GuidesTeaser
        app="tinymeals"
        eyebrow="TinyMeals guides"
        heading="Calm answers for the weaning months."
        slugs={["first-baby-foods", "baby-led-weaning-meal-ideas", "allergen-introduction-meal-ideas"]}
      />
      <Safety />
      <Faq faqs={MEALS_FAQS} accent="#D17A2A" />
      <GetTheApp />
    </>
  );
}
