import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LayersBreadcrumbs,
  breadcrumbJsonLd,
} from "@/components/tinylayers/breadcrumbs";
import { LayersHeader, LayersFooter } from "@/components/tinylayers/chrome";
import { absoluteUrl, layersOgImage, SITE_URL } from "@/lib/seo";
import {
  getLayersArticle,
  getLayersArticleSlugs,
  layersArticles,
} from "@/lib/tinylayers/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getLayersArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getLayersArticle(slug);
  if (!article) return {};

  const path = `/tinylayers/blog/${article.slug}`;
  const url = absoluteUrl(path);

  return {
    title: { absolute: article.metaTitle },
    description: article.description,
    keywords: [
      "TinyLayers",
      "baby sleepwear",
      "TOG",
      article.title,
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      siteName: "TinyLayers",
      locale: "en_US",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      authors: ["TinyLayers"],
      images: [layersOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [layersOgImage.url],
    },
  };
}

export default async function TinyLayersArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getLayersArticle(slug);
  if (!article) notFound();

  const path = `/tinylayers/blog/${article.slug}`;
  const url = absoluteUrl(path);
  const related = layersArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "TinyLayers", path: "/tinylayers" },
        { name: "Guide", path: "/tinylayers/blog" },
        { name: article.title, path },
      ]),
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(layersOgImage.url),
          width: layersOgImage.width,
          height: layersOgImage.height,
        },
        author: {
          "@type": "Organization",
          name: "TinyLayers",
          url: absoluteUrl("/tinylayers"),
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "TinyBundle",
          url: `${SITE_URL}/`,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/tinylayers/favicon.png"),
          },
        },
        datePublished: article.publishedAt,
        dateModified: article.modifiedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        isPartOf: { "@id": `${SITE_URL}/tinylayers#website` },
        inLanguage: "en-US",
      },
      ...(article.faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: article.faqs.map((item) => ({
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
    <div className="min-h-screen bg-layers font-sans text-layers-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-layers-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LayersHeader />
      <main id="main" className="mx-auto w-full max-w-[720px] px-5 py-12 sm:px-8 sm:py-16">
        <LayersBreadcrumbs
          items={[
            { label: "TinyLayers", href: "/tinylayers" },
            { label: "Guide", href: "/tinylayers/blog" },
            { label: article.title },
          ]}
        />
        <article>
          <header>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-layers-blue">
              The TinyLayers Guide
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm font-semibold text-layers-muted">
              <time dateTime={article.modifiedAt}>{article.byline}</time>
            </p>
          </header>

          {article.quickAnswerHtml ? (
            <div className="mt-8 rounded-2xl border border-layers-green/30 bg-layers-green-tint px-5 py-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-layers-green-deep">
                Quick answer
              </p>
              <div
                className="layers-prose mt-2 text-sm font-medium leading-relaxed text-layers-ink"
                dangerouslySetInnerHTML={{ __html: article.quickAnswerHtml }}
              />
            </div>
          ) : null}

          <div
            className="layers-prose mt-8"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />

          {article.faqs.length > 0 ? (
            <section className="mt-12 border-t border-layers-border pt-8" aria-labelledby="article-faq">
              <h2 id="article-faq" className="text-lg font-extrabold">
                Frequently asked questions
              </h2>
              <div className="mt-4 space-y-3">
                {article.faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-layers-border bg-layers-card px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-sm font-extrabold text-layers-ink marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-3">
                        {item.q}
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-layers-muted transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-layers-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <aside className="mt-10 rounded-2xl bg-layers-blue px-6 py-7 text-white">
            <p className="text-lg font-extrabold">Need the answer for tonight&rsquo;s room?</p>
            <p className="mt-2 text-sm font-medium text-white/85">
              TinyLayers turns room temperature and age into a plain-English outfit — in one glance.
            </p>
            <Link
              href="/tinylayers"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-layers-blue-deep"
            >
              Get TinyLayers
            </Link>
          </aside>

          {related.length > 0 ? (
            <section className="mt-12 border-t border-layers-border pt-8" aria-labelledby="related-guides">
              <h2 id="related-guides" className="text-lg font-extrabold">
                Related guides
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/tinylayers/blog/${item.slug}`}
                      className="text-sm font-bold text-layers-blue hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </main>
      <LayersFooter />
    </div>
  );
}
