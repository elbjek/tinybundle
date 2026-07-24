import type { Metadata } from "next";
import Link from "next/link";
import { GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { guidePages, getGuidesByApp } from "@/lib/guides/catalog";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const title = "Parenting Guides — Questions Parents Ask at 2am";
const description =
  "Search-intent guides for what baby should wear, what to do with baby, night loneliness, and cooking from what’s in the fridge — from TinyBundle.";
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

const hubs = [
  {
    app: "tinylayers" as const,
    title: "What should my baby wear?",
    blurb: "Temperature, sleep, stroller, carrier, car seat — starting outfits plus the chest check.",
  },
  {
    app: "tinyblooms" as const,
    title: "What do I do with my baby?",
    blurb: "One idea at a time for awake windows — without milestone guilt.",
  },
  {
    app: "tinyhaven" as const,
    title: "Am I the only one?",
    blurb: "Night loneliness, postpartum isolation, and soft company without a social feed.",
  },
  {
    app: "tinymeals" as const,
    title: "What can I cook?",
    blurb: "Fridge-stare dinners and leftover ideas for tired parents.",
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
        itemListElement: guidePages.slice(0, 40).map((g, i) => ({
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
          Not app-name SEO — search-intent SEO. Each guide answers one question and
          points to the TinyBundle app that owns that category.
        </p>
        <p className="mt-3 text-sm font-semibold text-muted">
          {guidePages.length} guides and growing.
        </p>

        <div className="mt-14 space-y-14">
          {hubs.map((hub) => {
            const guides = getGuidesByApp(hub.app);
            return (
              <section key={hub.app} aria-labelledby={`hub-${hub.app}`}>
                <h2 id={`hub-${hub.app}`} className="text-2xl font-extrabold text-ink">
                  {hub.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm font-medium text-muted">{hub.blurb}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {guides.slice(0, 12).map((guide) => (
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
                {guides.length > 12 ? (
                  <p className="mt-4 text-sm font-semibold text-muted">
                    + {guides.length - 12} more in this category
                  </p>
                ) : null}
              </section>
            );
          })}
        </div>
      </main>
      <GuidesFooter />
    </div>
  );
}
