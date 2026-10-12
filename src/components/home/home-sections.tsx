import Link from "next/link";
import type { ReactNode } from "react";
import { APP_IDENTITY, AppMark, BundleArcs } from "@/components/app-identity";
import type { MomentApp } from "@/components/home/moments";
import { getApp } from "@/lib/apps";
import { SLEEP_BANDS, getGuide } from "@/lib/guides/catalog";
import { sleepOutfitFor } from "@/lib/guides/outfits";
import type { GuidePage } from "@/lib/guides/types";

const SECTION = "mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(80px,11vw,150px)]";
const CONTACT = "contact@twobricklabs.com";

function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">{children}</p>;
}

function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mt-2.5 max-w-[22ch] text-balance text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em] ${className}`}>
      {children}
    </h2>
  );
}

const STEPS = [
  { title: "Add your baby", body: "Their name and age. Each app uses it to match advice to this month, not last month." },
  { title: "Pick the moment", body: "Getting dressed for bed, lunchtime, playtime or the 2 am feed. Each app does one job." },
  { title: "Get one clear answer", body: "What to put on, what to cook, what to play, or when they last fed. Then back to your day." },
];

export function HowItWorks() {
  return (
    <section id="how" className={`${SECTION} scroll-mt-16`}>
      <Kicker>How it works</Kicker>
      <Title>Set up once. Open the app for the moment you&rsquo;re in.</Title>
      <ol className="mt-[clamp(28px,4vw,44px)] grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {STEPS.map((step, i) => (
          <li key={step.title} className="rounded-[26px] bg-white p-6 shadow-[0_8px_22px_rgba(120,80,40,0.06)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tb-amber text-[17px] font-extrabold text-tb-ink">{i + 1}</span>
            <h3 className="mt-4 text-[19px] font-extrabold">{step.title}</h3>
            <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-tb-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

type Spotlight = {
  app: MomentApp;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  accent: string;
  side: ReactNode;
};

function AgeTable({ title, rows, ink, tint, note }: { title: string; rows: [string, string][]; ink: string; tint: string; note?: string }) {
  return (
    <div className="rounded-3xl p-5" style={{ background: tint }}>
      <h4 className="text-base font-extrabold" style={{ color: ink }}>
        {title}
      </h4>
      <dl className="mt-2.5 rounded-2xl bg-white px-4 py-0.5">
        {rows.map(([age, text], i) => (
          <div key={age} className={`flex gap-3.5 py-[11px] ${i ? "border-t border-[rgba(46,46,46,0.08)]" : ""}`}>
            <dt className="w-[92px] flex-none text-[13.5px] font-extrabold" style={{ color: ink }}>
              {age}
            </dt>
            <dd className="text-pretty text-sm leading-normal text-[#3F3A33]">{text}</dd>
          </div>
        ))}
      </dl>
      {note ? (
        <p className="mt-3 text-[13px] leading-normal" style={{ color: ink }}>
          {note}
        </p>
      ) : null}
    </div>
  );
}

function TogChart() {
  return (
    <div className="rounded-3xl bg-[#DCE6F2] p-5">
      <h4 className="text-base font-extrabold text-[#2F5B8A]">Baby sleep TOG chart</h4>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full overflow-hidden rounded-2xl bg-white">
          <thead>
            <tr>
              {["Room", "TOG", "What to wear"].map((h) => (
                <th key={h} scope="col" className="px-3 py-2.5 text-left text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2F5B8A]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SLEEP_BANDS.map((band) => {
              const outfit = sleepOutfitFor(band.mid);
              return (
                <tr key={band.slug} className="border-t border-[rgba(46,46,46,0.08)]">
                  <th scope="row" className="whitespace-nowrap px-3 py-[11px] text-left text-sm font-extrabold">
                    <Link href={`/guides/${band.slug}`} className="hover:text-[#2F5B8A]">
                      {band.label}
                    </Link>
                  </th>
                  <td className="px-3 py-[11px] text-sm text-[#3F3A33]">{outfit.tog}</td>
                  <td className="px-3 py-[11px] text-sm leading-[1.45] text-[#3F3A33] first-letter:uppercase">{outfit.layers}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[13px] leading-normal text-[#2F5B8A]">
        TinyLayers starting points, not NHS rules: check your sleeping bag&rsquo;s chart and feel the back of your baby&rsquo;s neck. No hats or loose
        blankets for sleep, and the NHS suggests a room of 16&ndash;20&deg;C.
      </p>
    </div>
  );
}

function NightCard() {
  return (
    <div className="rounded-3xl bg-naps-night p-6 text-white">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-naps-lavender-mid">Tonight</p>
      <p className="mt-2.5 text-[44px] font-extrabold leading-none">
        2:14<span className="ml-1.5 text-lg text-white/60">AM</span>
      </p>
      <ul className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["Last feed", "Just now"],
          ["Awake for", "25 min"],
          ["Nappies", "5 today"],
        ].map(([label, value]) => (
          <li key={label} className="rounded-2xl bg-white/[0.07] px-2 py-3">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.06em] text-naps-lavender-mid">{label}</span>
            <span className="mt-1 block text-[15px] font-extrabold">{value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[13px] leading-[1.55] text-white/70">
        Illustrative. TinyNaps never diagnoses: if you are worried about feeding, nappies or sleep, talk to your health visitor or GP.
      </p>
    </div>
  );
}

const SPOTLIGHTS: Spotlight[] = [
  {
    app: "tinylayers",
    kicker: "Baby sleepwear and TOG guide",
    title: "What should my baby wear to sleep?",
    body: "TinyLayers turns your nursery’s room temperature into one clear answer: which vest, which sleepsuit and which TOG sleeping bag. It works for going outside too, from a hot summer walk to a cold pram ride, so you can dress your baby for the weather without guessing.",
    points: [
      "A baby TOG guide for every room temperature",
      "What to dress your baby in for walks, car rides and the pram",
      "A quick safe-sleep check before naps and bedtime",
      "Adjusts as your baby grows, from newborn to toddler",
    ],
    accent: "#3D6DA8",
    side: <TogChart />,
  },
  {
    app: "tinymeals",
    kicker: "Baby-led weaning and first foods",
    title: "Starting solids, one bite at a time",
    body: "TinyMeals is a calm baby-led weaning and purée planner. It gives you one meal a day matched to your baby’s age and texture stage, a 10-week first foods plan, and a simple log of every food your baby has tried, including common allergens.",
    points: [
      "A 10-week first foods plan from around 6 months",
      "Baby-led weaning, purées or a mix of both",
      "Easy baby food recipes with no added salt or sugar",
      "Track foods tried and allergen introduction",
    ],
    accent: "#D17A2A",
    side: (
      <AgeTable
        title="First foods by age"
        ink="#A0521A"
        tint="#FBEEDC"
        rows={[
          ["Around 6 mo", "Smooth or mashed vegetables and fruit, plus soft finger foods like steamed carrot sticks and ripe banana."],
          ["7–9 mo", "Lumpier mashes and soft chopped foods, building to three meals a day."],
          ["10–12 mo", "Chopped family foods, three meals a day plus healthy snacks."],
        ]}
        note="Every baby is different. Talk to your health visitor before starting, especially if allergies run in the family."
      />
    ),
  },
  {
    app: "tinyblooms",
    kicker: "Baby activities, milestones and memories",
    title: "Play ideas for every age and every spare five minutes",
    body: "TinyBlooms gives you age-right activities for babies and young children, from tummy time for a newborn to messy play for a toddler. Record milestones when they happen, with no scores, and keep the moments you want to remember in a simple photo journal.",
    points: [
      "Activities by age, from newborn to five",
      "Gentle milestones with no scores or warnings",
      "A memory journal for photos and first words",
      "Ideas that need nothing more than what’s at home",
    ],
    accent: "#55915E",
    side: (
      <AgeTable
        title="Play ideas by age"
        ink="#3F6E47"
        tint="#E3EBDC"
        rows={[
          ["0–3 mo", "Face-to-face chats, high-contrast pictures and short bursts of supervised tummy time."],
          ["4–6 mo", "Mirror play, reaching for toys and rolling practice on the floor."],
          ["7–9 mo", "Peekaboo, dropping and banging games, and sitting-up play."],
          ["10–12 mo", "Stacking cups, cruising games and songs with actions."],
        ]}
      />
    ),
  },
  {
    app: "tinynaps",
    kicker: "Baby sleep, feeding and nappy tracker",
    title: "When did my baby last eat or sleep?",
    body: "TinyNaps keeps sleep, feeds and nappies on one calm timeline, so you can answer the question in a glance, even at 2 am. Big buttons, a dim screen and one-tap logging make it easy with a baby in your arms.",
    points: [
      "Sleep timers for naps and nights",
      "Breastfeeding timer with left or right side, bottles and pumping",
      "Wet and dirty nappies in one tap, with a daily count",
      "Growth charts, health records and shared caregivers coming next",
    ],
    accent: "#6F64A8",
    side: <NightCard />,
  },
];

function Tick({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none">
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.14" />
      <path d="m7.5 12.3 3 3 6-6.3" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GuidesSpotlight() {
  return (
    <section id="guides" className={`${SECTION} scroll-mt-16`}>
      <Kicker>Parent guides</Kicker>
      <Title>Answers parents search for, built into each app.</Title>
      <div className="mt-[clamp(28px,4vw,44px)] flex flex-col gap-[18px]">
        {SPOTLIGHTS.map((s) => {
          const identity = APP_IDENTITY[s.app];
          const info = getApp(s.app);
          const live = info && !info.comingSoon && info.appStoreUrl;
          return (
            <article
              key={s.app}
              id={`guide-${s.app}`}
              className="grid items-center gap-[clamp(22px,4vw,48px)] rounded-[32px] bg-white p-[clamp(22px,3.4vw,40px)] shadow-[0_10px_28px_rgba(120,80,40,0.06)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]"
            >
              <div className="min-w-0">
                <p className={`flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.06em] ${identity.ink}`}>
                  <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-[14px] ${identity.tile}`}>
                    <AppMark app={s.app} className="h-[30px] w-[30px]" />
                  </span>
                  {identity.name} &middot; {s.kicker}
                </p>
                <h3 className="mt-4 text-balance text-[clamp(24px,2.8vw,32px)] font-extrabold leading-[1.15] tracking-[-0.015em]">{s.title}</h3>
                <p className="mt-3 max-w-[52ch] text-pretty text-[15.5px] leading-[1.65] text-tb-body">{s.body}</p>
                <ul className="mt-4 flex flex-col gap-[9px]">
                  {s.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[14.5px] font-bold leading-[1.45]">
                      <Tick color={s.accent} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-[22px] flex flex-wrap items-center gap-x-[18px] gap-y-3">
                  {live ? (
                    <a
                      href={info.appStoreUrl}
                      rel="noopener"
                      className="inline-flex h-11 items-center gap-2 rounded-[22px] bg-tb-ink px-[18px] text-sm font-extrabold text-white hover:bg-black"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 4v11M7 10l5 5 5-5M5 20h14" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Get {identity.name} on the App Store
                    </a>
                  ) : (
                    <a href="#tips" className="inline-flex h-11 items-center rounded-[22px] bg-tb-ink px-[18px] text-sm font-extrabold text-white hover:bg-black">
                      Coming soon: get notified
                    </a>
                  )}
                  <Link href={identity.href} className={`text-[14.5px] font-extrabold hover:opacity-75 ${identity.ink}`}>
                    More about {identity.name} &rarr;
                  </Link>
                  <Link href={`/guides#hub-${s.app}`} className="text-[14.5px] font-extrabold text-tb-body hover:text-tb-ink">
                    Read the guides
                  </Link>
                </div>
              </div>
              <div className="min-w-0">{s.side}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const WHY = [
  { title: "One clear answer", body: "Each app tells you what to do right now: what to put on, what to cook, what to play, or when they last fed. No lists to sort through." },
  { title: "Fits your baby’s age", body: "Layers, meals and play ideas all change as your baby grows, so the advice fits this month, not last month." },
  { title: "No streaks, no pressure", body: "No scores and nothing to keep up with. Open it, get your answer, get back to your day." },
  { title: "The whole day, covered", body: "Four small apps, each doing one job well, from morning playtime to the 2 am feed." },
];

export function WhyTinyBundle() {
  return (
    <section id="about" className={SECTION}>
      <Kicker>Why TinyBundle</Kicker>
      <h2 className="mt-3.5 max-w-[20ch] text-balance text-[clamp(32px,4.8vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
        Quiet tools for real parenting. <span className="text-tb-amber">Not another feed to keep up with.</span>
      </h2>
      <div className="mt-[clamp(36px,5vw,56px)] grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((item) => (
          <div key={item.title} className="min-w-0 border-t-[1.5px] border-[#E8DCC8] pt-[18px]">
            <h3 className="text-[17px] font-extrabold">{item.title}</h3>
            <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-tb-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function availability() {
  const apps = (["tinylayers", "tinymeals", "tinyblooms", "tinynaps"] as const).map((slug) => getApp(slug)).filter((app) => app !== undefined);
  const live = apps.filter((app) => !app.comingSoon).map((app) => app.name);
  const soon = apps.filter((app) => app.comingSoon).map((app) => app.name);
  const list = (names: string[]) => (names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names.at(-1)}` : names[0]);
  return `All four apps are made for iPhone. ${list(live)} ${live.length > 1 ? "are" : "is"} on the App Store now, and ${list(soon)} ${
    soon.length > 1 ? "are" : "is"
  } coming soon.`;
}

export function homeFaqs() {
  const sleep18 = sleepOutfitFor(18);
  return [
    {
      q: "What is TinyBundle?",
      a: "TinyBundle is a family of four calm parenting apps from Two Brick Labs: TinyLayers for what your baby should wear, TinyMeals for starting solids, TinyBlooms for play, milestones and memories, and TinyNaps for tracking sleep, feeds and nappies.",
    },
    {
      q: "What should my baby wear to sleep at 18°C?",
      a: `As a starting point, TinyLayers suggests ${sleep18.layers}. Check the back of your baby’s neck or their chest: it should feel warm, not sweaty. The NHS suggests keeping the room at 16–20°C.`,
    },
    {
      q: "What TOG sleeping bag does my baby need?",
      a: `It depends on the room. TinyLayers starts from ${SLEEP_BANDS.map((band) => `${sleepOutfitFor(band.mid).tog} TOG at ${band.label}`).join(", ")}, then you check your sleeping bag maker’s chart and your baby’s temperature.`,
    },
    {
      q: "When can my baby start solid foods?",
      a: "The NHS and WHO recommend starting solids at around 6 months, when your baby can sit up with support, hold their head steady and bring food to their mouth. Speak to your health visitor if you’re unsure.",
    },
    {
      q: "Is baby-led weaning or purées better?",
      a: "Both are fine, and many families do a mix. TinyMeals supports spoon-fed purées, baby-led weaning finger foods, or both, and adjusts textures as your baby grows.",
    },
    {
      q: "What activities can I do with my 4-month-old?",
      a: "At around 4 months, babies enjoy mirror play, reaching for toys, supervised tummy time with something interesting to look at, and simple songs. TinyBlooms suggests ideas based on your baby’s age and how much time you have.",
    },
    {
      q: "What does TinyNaps track?",
      a: "Sleep with timers, breastfeeding and bottle feeds, pumping, and wet or dirty nappies, all on one daily timeline. Growth charts, health records and shared caregivers follow after launch.",
    },
    {
      q: "Do the apps give medical advice?",
      a: "No. The apps offer everyday guidance based on published sources such as the NHS, not medical advice. Always speak to your health visitor, GP or paediatrician about your baby’s health.",
    },
    { q: "Which devices do the apps work on?", a: availability() },
  ];
}

export function HomeFaq() {
  return (
    <section id="faq" className={`${SECTION} scroll-mt-16`}>
      <div className="grid items-start gap-[clamp(24px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <div className="min-w-0">
          <Kicker>FAQ</Kicker>
          <Title>Questions parents ask</Title>
          <p className="mt-3.5 max-w-[38ch] text-pretty text-[15.5px] leading-relaxed text-tb-body">
            Can&rsquo;t find yours?{" "}
            <a href={`mailto:${CONTACT}`} className="font-extrabold text-tb-amber-ink hover:text-tb-ink">
              Email us
            </a>{" "}
            and a real person will reply.
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-2.5">
          {homeFaqs().map((item, i) => (
            <details key={item.q} open={i === 0} className="group rounded-[22px] bg-white shadow-[0_4px_14px_rgba(120,80,40,0.05)]">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-extrabold [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none transition-transform group-open:rotate-45">
                  <path d="M12 5v14M5 12h14" stroke="#B97A22" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="px-5 pb-[18px] text-pretty text-[15px] leading-[1.65] text-tb-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIP_SLUGS = [
  "baby-sleep-16-19c",
  "first-baby-foods",
  "tummy-time-ideas",
  "baby-wakes-every-hour",
  "baby-led-weaning-meal-ideas",
  "how-many-layers-should-baby-wear",
];

function readMinutes(guide: GuidePage) {
  const text = [guide.quickAnswer, ...guide.bullets, ...guide.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])]), ...guide.faqs.flatMap((f) => [f.q, f.a])].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export function LatestGuides() {
  const guides = TIP_SLUGS.map((slug) => getGuide(slug)).filter((guide) => guide !== undefined);
  return (
    <section id="articles" className={`${SECTION} scroll-mt-16`}>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3.5">
        <div className="min-w-0">
          <Kicker>Tiny tips</Kicker>
          <Title>Short, useful reads for real days.</Title>
        </div>
        <Link href="/guides" className="whitespace-nowrap text-[15px] font-extrabold text-tb-amber-ink hover:text-tb-ink">
          See all guides &rarr;
        </Link>
      </div>
      <ul className="mt-[clamp(28px,4vw,44px)] grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))]">
        {guides.map((guide) => {
          const identity = APP_IDENTITY[guide.app];
          return (
            <li key={guide.slug} className="min-w-0">
              <Link
                href={`/guides/${guide.slug}`}
                className="flex h-full flex-col overflow-hidden rounded-[26px] bg-white text-tb-ink shadow-[0_8px_22px_rgba(120,80,40,0.06)] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className={`flex h-[120px] items-center justify-center ${identity.tile}`}>
                  <AppMark app={guide.app} className="h-[52px] w-[52px]" />
                </span>
                <span className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-[18px]">
                  <span className="flex items-center justify-between gap-2.5">
                    <span className={`text-[11.5px] font-extrabold uppercase tracking-[0.06em] ${identity.ink}`}>{identity.name}</span>
                    <span className="text-[12.5px] font-bold text-tb-muted">{readMinutes(guide)} min read</span>
                  </span>
                  <span className="text-balance text-lg font-extrabold leading-[1.3]">{guide.title}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const FOOTER_APPS = ["tinynaps", "tinylayers", "tinyblooms", "tinymeals"] as const;

export function HomeFooter() {
  const columns = [
    { title: "Our apps", links: FOOTER_APPS.map((app) => ({ href: APP_IDENTITY[app].href, label: APP_IDENTITY[app].name })) },
    {
      title: "Company",
      links: [
        { href: "#about", label: "About" },
        { href: "/guides", label: "Guides" },
        { href: `mailto:${CONTACT}`, label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/tinymeals/privacy", label: "TinyMeals privacy" },
        { href: "/tinymeals/terms", label: "TinyMeals terms" },
        { href: "/tinyhaven/privacy", label: "TinyHaven privacy" },
        { href: "/tinyhaven/terms", label: "TinyHaven terms" },
      ],
    },
  ];
  return (
    <footer className="mt-[clamp(56px,8vw,100px)] border-t border-tb-border">
      <div className="mx-auto box-border grid max-w-[1180px] gap-7 px-[clamp(18px,4vw,40px)] pb-10 pt-[clamp(32px,5vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr))]">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 64 64" fill="none" className="h-[30px] w-[30px]" aria-hidden="true">
              <BundleArcs />
            </svg>
            <span className="text-lg font-extrabold">TinyBundle</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-tb-muted">&copy; 2026 Two Brick Labs. General guidance only, not medical advice.</p>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="flex min-w-0 flex-col gap-2.5">
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-tb-muted">{column.title}</p>
            {column.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-bold text-tb-body hover:text-tb-ink">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
