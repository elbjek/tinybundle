import type { Metadata } from "next";
import Link from "next/link";
import { APP_IDENTITY, AppMark, readMinutes } from "@/components/guides/app-identity";
import { GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { AGE_GUIDES, OUTDOOR_BANDS, SLEEP_BANDS, getGuidesByApp, guidePages } from "@/lib/guides/catalog";
import type { GuideApp, GuidePage } from "@/lib/guides/types";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const title = "Parenting Guides — Questions Parents Ask at 2am";
const description =
  "Search-intent guides for what baby should wear, what to do with baby, night loneliness, and baby meal ideas — from TinyBundle.";
const path = "/guides";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url: absoluteUrl(path),
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const HUBS: { app: GuideApp; title: string; blurb: string }[] = [
  { app: "tinylayers", title: "What should my baby wear?", blurb: "Outfits and sleep layers for the temperature, the room and the trip ahead." },
  { app: "tinymeals", title: "What can my baby eat?", blurb: "First foods, meal ideas and allergens, one calm step at a time." },
  { app: "tinyblooms", title: "What do I do with my baby?", blurb: "One idea at a time for awake windows, without milestone guilt." },
  { app: "tinyhaven", title: "Am I the only one awake?", blurb: "Night feeds, loneliness and the 2am questions nobody warns you about." },
  { app: "tinybundle", title: "What apps do new parents need?", blurb: "Calm tools for real questions, not another tracker." },
];

/** TinyLayers pages listed as temperature and age pills rather than cards. */
const PILL_SLUGS = new Set<string>([...OUTDOOR_BANDS, ...SLEEP_BANDS, ...AGE_GUIDES].map((page) => page.slug));

function wordCount(guide: GuidePage) {
  const text = [
    guide.quickAnswer,
    ...guide.bullets,
    ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...guide.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

function GuideCard({ guide }: { guide: GuidePage }) {
  const identity = APP_IDENTITY[guide.app];
  return (
    <li className="min-w-0">
      <Link
        href={`/guides/${guide.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[26px] bg-white text-tb-ink shadow-[0_8px_22px_rgba(120,80,40,0.06)] transition-transform duration-200 hover:-translate-y-1"
      >
        <span className={`flex h-24 items-center justify-center ${identity.tile}`}>
          <AppMark app={guide.app} className="h-11 w-11" />
        </span>
        <span className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-4">
          <span className="flex items-center justify-between gap-2.5">
            <span className={`text-[11.5px] font-extrabold uppercase tracking-[0.06em] ${identity.ink}`}>{identity.name}</span>
            <span className="text-[12.5px] font-bold text-tb-muted">{readMinutes(wordCount(guide))} min read</span>
          </span>
          <span className="text-balance text-[17px] font-extrabold leading-[1.3]">{guide.question}</span>
        </span>
      </Link>
    </li>
  );
}

function Pill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 items-center rounded-[18px] bg-[#EAF1F8] px-3.5 text-[13px] font-extrabold text-[#2F5B8A] transition-colors hover:bg-[#DCE6F2]"
    >
      {children}
    </Link>
  );
}

function HubHeading({ app, title, blurb }: { app: GuideApp; title: string; blurb: string }) {
  const identity = APP_IDENTITY[app];
  return (
    <div className="max-w-2xl">
      <p className={`flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.06em] ${identity.ink}`}>
        <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-[13px] ${identity.tile}`}>
          <AppMark app={app} className="h-7 w-7" />
        </span>
        {identity.name}
      </p>
      <h2 id={`hub-${app}`} className="mt-4 scroll-mt-24 text-balance text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.12]">
        {title}
      </h2>
      <p className="mt-2.5 text-pretty text-[15.5px] leading-relaxed text-tb-body">{blurb}</p>
    </div>
  );
}

function LayersPills() {
  return (
    <div className="mt-7 grid gap-6 rounded-[32px] bg-white p-[clamp(22px,3.4vw,36px)] shadow-[0_10px_28px_rgba(120,80,40,0.06)] md:grid-cols-3">
      <div id="temperature" className="scroll-mt-24">
        <h3 className="text-[15px] font-extrabold">Outside, by temperature</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {OUTDOOR_BANDS.map((band) => (
            <Pill key={band.slug} href={`/guides/${band.slug}`}>
              {band.label}
            </Pill>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-[15px] font-extrabold">Sleep, by room temperature</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {SLEEP_BANDS.map((band) => (
            <Pill key={band.slug} href={`/guides/${band.slug}`}>
              {band.label}
            </Pill>
          ))}
        </div>
      </div>
      <div id="age" className="scroll-mt-24">
        <h3 className="text-[15px] font-extrabold">By age</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {AGE_GUIDES.map((age) => (
            <Pill key={age.slug} href={`/guides/${age.slug}`}>
              {age.label}
            </Pill>
          ))}
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${absoluteUrl(path)}#webpage`,
      url: absoluteUrl(path),
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: guidePages.length,
        itemListElement: guidePages.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/guides/${g.slug}`),
          name: g.question,
        })),
      },
    },
  ],
};

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-tb font-nunito text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuidesHeader />
      <main className="mx-auto w-full max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(40px,6vw,80px)]">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">Parent guides</p>
        <h1 className="mt-2.5 max-w-[20ch] text-balance text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.06] tracking-[-0.02em]">
          Answers to the questions parents type at 2am.
        </h1>
        <p className="mt-4 max-w-[52ch] text-pretty text-[clamp(16px,1.5vw,18px)] leading-relaxed text-tb-body">
          Each guide answers one question well, then points to the TinyBundle app made for it.
        </p>
        <nav aria-label="Guide topics" className="mt-7 flex flex-wrap gap-2">
          {HUBS.map((hub) => {
            const identity = APP_IDENTITY[hub.app];
            return (
              <a
                key={hub.app}
                href={`#hub-${hub.app}`}
                className="inline-flex h-10 items-center gap-2 rounded-[20px] bg-white pl-1.5 pr-4 text-[13.5px] font-extrabold shadow-[0_2px_10px_rgba(90,60,20,0.06)] hover:text-tb-amber-ink"
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-full ${identity.tile}`}>
                  <AppMark app={hub.app} className="h-[18px] w-[18px]" />
                </span>
                {identity.name}
              </a>
            );
          })}
        </nav>

        <div className="mt-[clamp(48px,7vw,88px)] space-y-[clamp(56px,8vw,104px)]">
          {HUBS.map((hub) => {
            const cards = getGuidesByApp(hub.app).filter((guide) => !PILL_SLUGS.has(guide.slug));
            return (
              <section key={hub.app} aria-labelledby={`hub-${hub.app}`}>
                <HubHeading {...hub} />
                {hub.app === "tinylayers" ? <LayersPills /> : null}
                <ul className="mt-7 grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
                  {cards.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
      <GuidesFooter />
    </div>
  );
}
