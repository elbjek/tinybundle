import type { Metadata } from "next";
import Link from "next/link";
import { GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import {
  AGE_GUIDES,
  OUTDOOR_BANDS,
  SLEEP_BANDS,
  getGuidesByApp,
  guidePages,
} from "@/lib/guides/catalog";
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

const layersCategories = [
  {
    id: "temperature",
    label: "By temperature",
    href: "#temperature",
  },
  {
    id: "sleep",
    label: "Sleep",
    href: "/guides/what-should-baby-wear-to-sleep",
  },
  {
    id: "neck-check",
    label: "Neck / chest check",
    href: "/guides/feel-baby-neck-to-check-temperature",
  },
  {
    id: "stroller",
    label: "Stroller",
    href: "/guides/baby-stroller-clothing",
  },
  {
    id: "carrier",
    label: "Carrier",
    href: "/guides/baby-carrier-clothing",
  },
  {
    id: "car-seat",
    label: "Car seat",
    href: "/guides/baby-car-seat-clothing",
  },
  {
    id: "age",
    label: "By age",
    href: "#age",
  },
];

const otherHubs = [
  {
    app: "tinyblooms" as const,
    title: "What do I do with my baby?",
    blurb: "One idea at a time for awake windows — without milestone guilt.",
  },
  {
    app: "tinyhaven" as const,
    title: "Am I the only one?",
    blurb: "Night loneliness and soft company without a social feed.",
  },
  {
    app: "tinymeals" as const,
    title: "What can baby eat?",
    blurb: "Stage-right recipes for introducing solids, written for babies.",
  },
  {
    app: "tinybundle" as const,
    title: "What apps do new parents need?",
    blurb: "Calm tools for real questions — not another tracker.",
  },
];

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
    <div className="min-h-screen bg-[#fffcf6] font-sans text-ink antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidesHeader />
      <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-deep">
          TinyBundle Guides
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Answers to the questions parents type at 2am.
        </h1>
        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-muted sm:text-lg">
          Each guide answers one question well — then points to the TinyBundle app
          that owns that category.
        </p>

        <section className="mt-14" aria-labelledby="wear-title">
          <h2 id="wear-title" className="text-2xl font-extrabold text-ink sm:text-3xl">
            What should my baby wear?
          </h2>
          <p className="mt-2 max-w-2xl text-sm font-medium text-muted">
            Find outfit guides for:
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {layersCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={cat.href}
                  className="flex items-center rounded-2xl border border-line bg-cream px-5 py-4 text-sm font-extrabold text-ink transition-shadow hover:shadow-md"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>

          <div id="temperature" className="mt-10 scroll-mt-24">
            <h3 className="text-lg font-extrabold text-ink">By temperature</h3>
            <p className="mt-1 text-sm font-medium text-muted">
              Common outdoor bands — pick the range that matches today.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {OUTDOOR_BANDS.map((band) => (
                <Link
                  key={band.slug}
                  href={`/guides/${band.slug}`}
                  className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-bold text-ink transition-colors hover:border-amber/50 hover:text-amber-deep"
                >
                  {band.chip}
                  <span className="ml-1.5 font-medium text-muted">{band.label}</span>
                </Link>
              ))}
            </div>
            <Link
              href="#all-temps"
              className="mt-4 inline-block text-sm font-extrabold text-amber-deep hover:underline"
            >
              View all temperature guides →
            </Link>
          </div>

          <div id="all-temps" className="mt-10 scroll-mt-24 rounded-2xl border border-line bg-cream/80 px-5 py-6 sm:px-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
              All temperature guides
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-amber-deep">
                  Outside
                </p>
                <ul className="mt-3 space-y-2">
                  {OUTDOOR_BANDS.map((band) => (
                    <li key={band.slug}>
                      <Link
                        href={`/guides/${band.slug}`}
                        className="text-sm font-bold text-ink hover:text-amber-deep hover:underline"
                      >
                        Baby clothes {band.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-amber-deep">
                  Sleep (room)
                </p>
                <ul className="mt-3 space-y-2">
                  {SLEEP_BANDS.map((band) => (
                    <li key={band.slug}>
                      <Link
                        href={`/guides/${band.slug}`}
                        className="text-sm font-bold text-ink hover:text-amber-deep hover:underline"
                      >
                        Sleep clothes {band.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div id="age" className="mt-10 scroll-mt-24">
            <h3 className="text-lg font-extrabold text-ink">By age</h3>
            <p className="mt-1 text-sm font-medium text-muted">
              Outfit guides by age — temperature still decides the layers.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {AGE_GUIDES.map((age) => (
                <li key={age.slug}>
                  <Link
                    href={`/guides/${age.slug}`}
                    className="block rounded-2xl border border-line bg-cream px-5 py-4 text-sm font-extrabold text-ink transition-shadow hover:shadow-md"
                  >
                    {age.chip}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-16 space-y-12">
          {otherHubs.map((hub) => {
            const guides = getGuidesByApp(hub.app);
            return (
              <section key={hub.app} aria-labelledby={`hub-${hub.app}`}>
                <h2 id={`hub-${hub.app}`} className="text-2xl font-extrabold text-ink">
                  {hub.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm font-medium text-muted">{hub.blurb}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide) => (
                    <li key={guide.slug}>
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="block rounded-2xl border border-line bg-cream px-5 py-4 transition-shadow hover:shadow-md"
                      >
                        <span className="text-sm font-extrabold text-ink">{guide.question}</span>
                      </Link>
                    </li>
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
