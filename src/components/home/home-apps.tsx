import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { AppTile } from "@/components/app-identity";
import { AppTabs } from "@/components/home/app-tabs";
import { launch } from "@/components/home/launch-copy";
import { QrLink } from "@/components/home/qr-link";
import { appCta, getApp, type AppSlug } from "@/lib/apps";

function AgeList({ title, color, rows }: { title: string; color: string; rows: [string, string][] }) {
  return (
    <>
      <h4 className="m-0 text-base font-extrabold" style={{ color }}>
        {title}
      </h4>
      <div className="mt-2.5 rounded-2xl bg-white px-4 py-0.5">
        <dl className="m-0 mt-3 flex flex-col">
          {rows.map(([age, text]) => (
            <div key={age} className="flex gap-3.5 py-[11px]">
              <dt className="w-[92px] flex-none text-[13.5px] font-extrabold" style={{ color }}>
                {age}
              </dt>
              <dd className="m-0 text-pretty text-sm leading-normal text-[#3F3A33]">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

const TOG_ROWS = [
  ["24°C +", "0.5", "Short-sleeve bodysuit, light sleep bag"],
  ["21–24°C", "1.0", "Bodysuit and long-sleeve sleepsuit"],
  ["17–21°C", "2.5", "Bodysuit, sleepsuit and warm sleep bag"],
  ["Under 17°C", "3.5", "Long-sleeve bodysuit, fleece sleepsuit, socks"],
];

function TogChart() {
  const head = "px-3 py-2.5 text-left text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#2F5B8A]";
  return (
    <>
      <h4 className="m-0 text-base font-extrabold text-[#2F5B8A]">Baby sleep TOG chart</h4>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-2xl bg-white">
          <thead>
            <tr>
              <th scope="col" className={head}>Room</th>
              <th scope="col" className={head}>TOG</th>
              <th scope="col" className={head}>What to wear</th>
            </tr>
          </thead>
          <tbody>
            {TOG_ROWS.map(([room, tog, wear]) => (
              <tr key={room}>
                <th scope="row" className="whitespace-nowrap px-3 py-[11px] text-left text-sm font-extrabold">
                  {room}
                </th>
                <td className="px-3 py-[11px] text-sm leading-[1.45] text-[#3F3A33]">{tog}</td>
                <td className="px-3 py-[11px] text-sm leading-[1.45] text-[#3F3A33]">{wear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="m-0 mt-3 text-[13px] leading-normal text-[#2F5B8A]">
        Feel the back of the neck: warm, not sweaty. No hats or loose blankets for sleep. Always follow your local safe-sleep
        guidance.
      </p>
    </>
  );
}

const NAPS_GLANCE = [
  { label: "Last feeding", dot: "#7FA3C8", value: "10:35", sub: "Breastfeeding" },
  { label: "Last sleep", dot: "#7FA8CF", value: "1h 25m", sub: "Awake for 2h 10m" },
  { label: "Diapers", dot: "#93AB8E", value: "4 today", sub: "3 wet · 1 dirty" },
];

function NapsGlance() {
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 mb-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#232F48]">Today at a glance</p>
      {NAPS_GLANCE.map((row) => (
        <div key={row.label} className="flex items-center gap-3 rounded-2xl bg-white px-3.5 py-3">
          <span className="h-[9px] w-[9px] flex-none rounded-full" style={{ background: row.dot }} />
          <span className="min-w-0 flex-1 text-[13.5px] font-bold text-[#4A5568]">{row.label}</span>
          <span className="text-right">
            <span className="block text-base font-extrabold text-[#232F48]">{row.value}</span>
            <span className="block text-xs font-bold text-[#5D6470]">{row.sub}</span>
          </span>
        </div>
      ))}
      <p className="m-0 mt-2 text-pretty text-[13px] leading-[1.55] text-[#4A5568]">
        TinyNaps helps you understand your own records. It doesn&rsquo;t predict sleep or give medical advice.
      </p>
    </div>
  );
}

type Panel = {
  app: AppSlug;
  sub: string;
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  /** Main button colour on hover. */
  hover: string;
  info: ReactNode;
};

const PANELS: Panel[] = [
  {
    app: "tinylayers",
    sub: "What to wear",
    kicker: "Baby sleepwear and TOG guide",
    title: "What should my baby wear to sleep?",
    body: "TinyLayers turns your nursery’s room temperature into one clear answer: which bodysuit, which sleepsuit and which TOG sleeping bag. It works for going outside too, from a hot summer walk to a freezing pram ride, so you can dress your baby for the weather without guessing.",
    bullets: [
      "A baby TOG guide for every room temperature",
      "What to dress your baby in for walks, car rides and the pram",
      "A quick safe-sleep check before naps and bedtime",
      "Notes for every age, from newborn to 2 years and up",
    ],
    hover: "#35608F",
    info: <TogChart />,
  },
  {
    app: "tinymeals",
    sub: "First foods",
    kicker: "Baby-led weaning and first foods",
    title: "Starting solids, one bite at a time",
    body: "TinyMeals is a calm baby-led weaning and purée planner. It gives you one meal a day matched to your baby’s age and texture stage, a first-foods plan of ten single tastes, and a simple log of every food your baby has tried, including common allergens.",
    bullets: [
      "Ten first tastes, with egg, peanut and fish paced in",
      "Baby-led weaning, purées or a mix of both",
      "Easy baby food recipes with no added salt or sugar",
      "Track foods tried and allergen introduction",
    ],
    hover: "#4F5D3E",
    info: (
      <>
        <AgeList
          title="First foods by age"
          color="#A0521A"
          rows={[
            ["Around 6 mo", "Smooth or mashed veg and fruit, plus soft finger foods like steamed carrot sticks and ripe banana."],
            ["7–9 mo", "Lumpier mashes and soft chopped foods. Start offering two, then three meals a day."],
            ["10–12 mo", "Chopped family foods, three meals a day plus small snacks."],
          ]}
        />
        <p className="m-0 mt-3 text-[13px] leading-normal text-[#8A4513]">
          Every baby is different. Check with your health visitor or paediatrician before starting, especially if allergies
          run in the family.
        </p>
      </>
    ),
  },
  {
    app: "tinyblooms",
    sub: "Play",
    kicker: "Play, milestones and memories",
    title: "Play ideas, gentle milestones and memories, from newborn to five",
    body: "TinyBlooms gives you one small, age-right activity at a time, from tummy time for a newborn to pretend play for a five-year-old. It tracks milestones gently, with no scores, and keeps a memory journal for the moments you want to keep.",
    bullets: [
      "Play ideas by age, from newborn to age 5",
      "Tummy time, sensory play, music and talking games",
      "Gentle milestones, with no scores or comparisons",
      "A memory journal for the moments you want to keep",
    ],
    hover: "#3C6843",
    info: (
      <AgeList
        title="Play ideas by age"
        color="#3F6E47"
        rows={[
          ["0–3 mo", "Face-to-face chats, high-contrast pictures and short bursts of tummy time."],
          ["4–6 mo", "Mirror play, reaching for toys and rolling practice on the floor."],
          ["7–12 mo", "Peekaboo, stacking cups, dropping games and songs with actions."],
          ["1–3 yrs", "Pretend play, simple puzzles, water play and naming games."],
          ["3–5 yrs", "Drawing, building, story games and helping out at home."],
        ]}
      />
    ),
  },
  {
    app: "tinynaps",
    sub: "Sleep & feeds",
    kicker: "Sleep, feeds and diapers",
    title: "When did they last eat? Sleep? Need a change?",
    body: "TinyNaps is a simple baby tracker for sleep, feeding and diapers. Log in one tap, see the whole day on one screen, and keep a clear timeline to bring to check-ups.",
    bullets: [
      "Sleep timers for naps and nights, plus awake time since the last sleep",
      "Breastfeeding timer with left and right, bottle amounts and pumping",
      "One-tap wet, dirty or mixed diapers, with a daily count",
      "Big one-handed buttons and a dark mode made for 3 am",
    ],
    hover: "#1A2337",
    info: <NapsGlance />,
  },
];

function PanelBody({ panel }: { panel: Panel }) {
  const app = getApp(panel.app);
  const { deep, tile, btn } = app.colors;
  const cta = appCta(app, "#join");
  // A live app leads with the App Store; an app that is not out yet leads with its own page.
  const guidesLink = (
    <Link
      href={`/guides/${panel.app}`}
      className="whitespace-nowrap px-1 py-0.5 text-[15px] font-extrabold underline decoration-[rgba(46,46,46,0.18)] decoration-2 underline-offset-[5px] hover:opacity-75"
      style={{ color: deep }}
    >
      {`Read the ${app.name} guides →`}
    </Link>
  );
  const pageLink = (filled: boolean) => (
    <Link
      href={`/${panel.app}`}
      className={`box-border flex h-[50px] items-center justify-center gap-2 whitespace-nowrap rounded-[18px] px-4 text-[15px] font-extrabold active:scale-[0.98] ${
        filled
          ? "bg-(--btn) text-white hover:bg-(--hover) hover:text-white"
          : "bg-white text-(--deep) shadow-[0_2px_10px_rgba(90,60,20,0.08)] hover:text-(--deep) hover:shadow-[0_6px_18px_rgba(90,60,20,0.12)]"
      }`}
      style={{ "--btn": btn, "--hover": panel.hover, "--deep": deep } as CSSProperties}
    >
      {`Check out ${app.name}`}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
  return (
    <>
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <AppTile app={panel.app} className="h-[46px] w-[46px] rounded-2xl" markClassName="h-[30px] w-[30px]" bg={tile} />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.07em]" style={{ color: deep }}>
            {app.name} &middot; {panel.kicker}
          </span>
        </div>
        <h3 className="m-0 mt-4 text-balance text-[clamp(24px,2.8vw,32px)] font-extrabold leading-[1.15]">{panel.title}</h3>
        <p className="m-0 mt-3 max-w-[52ch] text-pretty text-[15.5px] leading-[1.65] text-tb-body">{panel.body}</p>
        <ul className="m-0 mt-4 flex list-none flex-col gap-[9px] p-0">
          {panel.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-[14.5px] font-bold leading-[1.45]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none">
                <circle cx="12" cy="12" r="10" fill={btn} opacity="0.14" />
                <path d="m7.5 12.3 3 3 6-6.3" stroke={btn} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="min-w-0">
        <div className="box-border rounded-[20px] p-5" style={{ background: tile }}>
          {panel.info}
        </div>
      </div>
      <div className="col-span-full flex flex-col gap-3 rounded-[20px] bg-[#FBF6EF] p-[clamp(14px,2vw,20px)]">
        <div className="flex min-w-0 items-stretch gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-2.5 sm:max-w-[360px]">
            {cta.live ? null : pageLink(true)}
            <a
              href={cta.href}
              rel={cta.live ? "noopener" : undefined}
              className={`flex h-[50px] items-center justify-center gap-2 whitespace-nowrap rounded-[18px] px-4 text-[15.5px] font-extrabold active:scale-[0.97] ${
                cta.live
                  ? "bg-(--btn) text-white hover:bg-(--hover) hover:text-white"
                  : "bg-white text-(--deep) shadow-[0_2px_10px_rgba(90,60,20,0.08)] hover:text-(--deep) hover:shadow-[0_6px_18px_rgba(90,60,20,0.12)]"
              }`}
              style={{ "--btn": btn, "--hover": panel.hover, "--deep": deep } as CSSProperties}
            >
              {cta.label}
            </a>
            {cta.live ? pageLink(false) : null}
          </div>
          {cta.live ? (
            <QrLink app={panel.app} name={app.name} href={cta.href} className="h-[110px] w-[110px] rounded-2xl p-2" />
          ) : (
            <span className="hidden flex-1 justify-end self-start pt-3 sm:flex">{guidesLink}</span>
          )}
        </div>
        {cta.live ? (
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <p className="m-0 hidden text-[13px] font-bold text-tb-muted min-[720px]:block">Scan the code with your iPhone camera</p>
            {guidesLink}
          </div>
        ) : (
          <span className="sm:hidden">{guidesLink}</span>
        )}
      </div>
    </>
  );
}

/** "Four little apps. One job each." A tab per app with what it answers, how to get it and a quick reference card. */
export function HomeApps() {
  return (
    <section id="apps" className="scroll-mt-16 bg-[rgba(241,234,224,0.72)] py-[clamp(64px,8vw,104px)]">
      <div className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="min-w-0 flex-[1_1_min(100%,520px)]">
            <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">Our apps</p>
            <h2 className="m-0 mt-2.5 max-w-[20ch] text-balance text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08]">
              Four little apps. One job each.
            </h2>
          </div>
          <p className="m-0 max-w-[40ch] flex-[1_1_min(100%,300px)] text-pretty text-base leading-relaxed text-tb-body">
            {launch.appsIntro}
          </p>
        </div>
        <AppTabs
          tabs={PANELS.map((panel) => {
            const app = getApp(panel.app);
            return { id: `guide-${panel.app}`, label: app.name, sub: panel.sub, dot: app.colors.dot, tile: app.colors.tile };
          })}
          panels={PANELS.map((panel) => (
            <PanelBody key={panel.app} panel={panel} />
          ))}
        />
      </div>
    </section>
  );
}
