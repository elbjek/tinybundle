import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APP_IDENTITY } from "@/components/app-identity";
import { GuidesBackdrop, GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { GuideArticle } from "@/components/guides/guide-article";
import { GuideHubPage } from "@/components/guides/guide-hub";
import { getGuide, getGuideSlugs, getGuidesByApp } from "@/lib/guides/catalog";
import { GUIDE_HUBS, HUB_ORDER, hubHref, isHub } from "@/lib/guides/hubs";
import type { GuideApp, GuidePage } from "@/lib/guides/types";
import { absoluteUrl, bundleOgImage, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...HUB_ORDER, ...getGuideSlugs()].map((slug) => ({ slug }));
}

function hubMetadata(app: GuideApp): Metadata {
  const hub = GUIDE_HUBS[app];
  const path = hubHref(app);
  return {
    title: { absolute: hub.metaTitle },
    description: hub.metaDescription,
    alternates: { canonical: path },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      siteName: "TinyBundle",
      url: absoluteUrl(path),
      title: hub.metaTitle,
      description: hub.metaDescription,
      images: [bundleOgImage],
    },
    twitter: { card: "summary_large_image" },
  };
}

function hubJsonLd(app: GuideApp) {
  const hub = GUIDE_HUBS[app];
  const url = absoluteUrl(hubHref(app));
  const guides = getGuidesByApp(app);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: hub.metaTitle,
        description: hub.metaDescription,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#site`, name: "TinyBundle", url: SITE_URL },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
        relatedLink: HUB_ORDER.filter((other) => other !== app).map((other) => absoluteUrl(hubHref(other))),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Guides", item: absoluteUrl(hubHref("tinybundle")) },
          { "@type": "ListItem", position: 2, name: APP_IDENTITY[app].name, item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        name: hub.listName,
        numberOfItems: guides.length,
        itemListElement: guides.map((guide, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/guides/${guide.slug}`),
          name: guide.title,
        })),
      },
    ],
  };
}

/** Guides › App › Article, linking back to the guide's hub. */
function Breadcrumb({ guide }: { guide: GuidePage }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto mb-[clamp(24px,4vw,40px)] w-full max-w-[720px]">
      <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[13.5px] font-bold text-tb-muted">
        <li>
          <Link href={hubHref("tinybundle")} className="text-tb-muted hover:text-tb-ink">
            Guides
          </Link>
        </li>
        <li aria-hidden="true" className="text-[#C9BFAE]">
          &rsaquo;
        </li>
        <li>
          <Link href={hubHref(guide.app)} className="text-tb-muted hover:text-tb-ink">
            {APP_IDENTITY[guide.app].name}
          </Link>
        </li>
        <li aria-hidden="true" className="text-[#C9BFAE]">
          &rsaquo;
        </li>
        <li aria-current="page" className="min-w-0 text-tb-ink">
          {guide.title}
        </li>
      </ol>
    </nav>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (isHub(slug)) return hubMetadata(slug);
  const guide = getGuide(slug);
  if (!guide) return {};
  const path = `/guides/${guide.slug}`;
  return {
    title: { absolute: guide.metaTitle },
    description: guide.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: absoluteUrl(path),
      publishedTime: guide.publishedAt,
      modifiedTime: guide.modifiedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePageRoute({ params }: Props) {
  const { slug } = await params;
  if (isHub(slug)) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd(slug)) }} />
        <GuideHubPage app={slug} />
      </>
    );
  }
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;
  const url = absoluteUrl(path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Guides",
            item: absoluteUrl(hubHref("tinybundle")),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: APP_IDENTITY[guide.app].name,
            item: absoluteUrl(hubHref(guide.app)),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: url,
          },
        ],
      },
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: guide.publishedAt,
        dateModified: guide.modifiedAt,
        author: { "@type": "Organization", name: "TinyBundle", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "TinyBundle",
          url: SITE_URL,
        },
        mainEntityOfPage: url,
        about: guide.question,
        ...(guide.sources.length
          ? {
              citation: guide.sources.map((source) => ({
                "@type": "WebPage",
                name: source.title,
                url: source.url,
                publisher: { "@type": "Organization", name: source.org },
              })),
            }
          : {}),
      },
      ...(guide.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: guide.faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  };

  const ldScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      {ldScript}
      <GuidesBackdrop app={guide.app} />
      <GuidesHeader />
      <main className="px-[clamp(18px,4vw,40px)] pt-[clamp(28px,4vw,48px)]">
        <Breadcrumb guide={guide} />
        <GuideArticle guide={guide} />
      </main>
      <GuidesFooter />
    </div>
  );
}
