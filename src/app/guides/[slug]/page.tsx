import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { GuideArticle } from "@/components/guides/guide-article";
import { getGuide, getGuideSlugs } from "@/lib/guides/catalog";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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
            item: absoluteUrl("/guides"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: guide.question,
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

  return (
    <div className="min-h-screen bg-[#fffcf6] font-sans text-ink antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidesHeader />
      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto mb-6 w-full max-w-[720px]">
          <Link
            href="/guides"
            className="text-xs font-extrabold uppercase tracking-[0.14em] text-amber-deep hover:underline"
          >
            ← All guides
          </Link>
        </div>
        <GuideArticle guide={guide} />
      </main>
      <GuidesFooter />
    </div>
  );
}
