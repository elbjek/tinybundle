import type { Metadata } from "next";
import Link from "next/link";
import { APP_IDENTITY, AppMark } from "@/components/guides/app-identity";
import { GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { HubTabs } from "@/components/guides/hub-tabs";
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

function GuideList({ guides }: { guides: GuidePage[] }) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {guides.map((guide) => (
        <li key={guide.slug} className="border-t border-tb-border">
          <Link
            href={`/guides/${guide.slug}`}
            className="group flex min-h-[52px] items-center justify-between gap-4 py-3 text-[15px] font-bold text-tb-ink"
          >
            <span className="text-pretty group-hover:text-tb-amber-ink">{guide.question}</span>
            <span aria-hidden="true" className="flex-none text-tb-muted transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function TemperatureLinks() {
  const groups = [
    { title: "Outside", items: OUTDOOR_BANDS.map((band) => ({ slug: band.slug, label: band.label })) },
    { title: "Sleep", items: SLEEP_BANDS.map((band) => ({ slug: band.slug, label: band.label })) },
    { title: "By age", items: AGE_GUIDES.map((age) => ({ slug: age.slug, label: age.label })) },
  ];
  return (
    <div id="temperature" className="mb-6 grid scroll-mt-24 gap-5 sm:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} id={group.title === "By age" ? "age" : undefined} className="scroll-mt-24">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-tb-muted">{group.title}</p>
          <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[14px] font-bold">
            {group.items.map((item) => (
              <Link key={item.slug} href={`/guides/${item.slug}`} className="text-[#2F5B8A] hover:text-tb-ink">
                {item.label}
              </Link>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

function Hub({ app, title, blurb }: { app: GuideApp; title: string; blurb: string }) {
  const identity = APP_IDENTITY[app];
  const guides = getGuidesByApp(app).filter((guide) => !PILL_SLUGS.has(guide.slug));
  return (
    <section
      aria-labelledby={`hub-${app}`}
      className="rounded-[32px] bg-white p-[clamp(22px,3.4vw,40px)] shadow-[0_10px_28px_rgba(120,80,40,0.06)]"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-x-10 gap-y-4">
        <div className="min-w-0 max-w-xl">
          <h2 id={`hub-${app}`} className="scroll-mt-40 text-balance text-[clamp(24px,3vw,32px)] font-extrabold leading-[1.15]">
            {title}
          </h2>
          <p className="mt-2 text-pretty text-[15px] leading-relaxed text-tb-body">{blurb}</p>
        </div>
        <Link href={identity.href} className="flex flex-none gap-1.5 pt-1 text-sm font-extrabold text-tb-amber-ink hover:text-tb-ink">
          {app === "tinybundle" ? "See all apps" : `About ${identity.name}`}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      {app === "tinylayers" ? <TemperatureLinks /> : null}
      <GuideList guides={guides} />
    </section>
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
        <div className="mt-8">
          <HubTabs
            tabs={HUBS.map((hub) => ({
              id: hub.app,
              label: APP_IDENTITY[hub.app].name,
              icon: (
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${APP_IDENTITY[hub.app].tile}`}>
                  <AppMark app={hub.app} className="h-5 w-5" />
                </span>
              ),
              panel: <Hub {...hub} />,
            }))}
          />
        </div>
      </main>
      <GuidesFooter />
    </div>
  );
}
