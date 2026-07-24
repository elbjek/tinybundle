import type { Metadata } from "next";
import Link from "next/link";
import {
  LayersBreadcrumbs,
  breadcrumbJsonLd,
} from "@/components/tinylayers/breadcrumbs";
import { LayersHeader, LayersFooter } from "@/components/tinylayers/chrome";
import { absoluteUrl, layersOgImage, SITE_URL } from "@/lib/seo";
import { layersArticles } from "@/lib/tinylayers/articles";

const title = "The TinyLayers Guide - Calm answers on dressing your baby";
const description =
  "Plain-English guides on dressing your baby for sleep, winter walks, and car rides — built on AAP, NHS, and Lullaby Trust guidance.";
const path = "/tinylayers/blog";
const url = absoluteUrl(path);
const ogTitle = "The TinyLayers Guide";
const ogDescription =
  "Calm, plain-English answers about dressing your baby for sleep, winter walks, and car rides.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "baby sleepwear guide",
    "baby TOG chart",
    "dress baby for winter",
    "car seat coat rule",
    "baby room temperature",
    "TinyLayers Guide",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title: ogTitle,
    description: ogDescription,
    siteName: "TinyLayers",
    locale: "en_US",
    images: [layersOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [layersOgImage.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { name: "TinyLayers", path: "/tinylayers" },
      { name: "Guide", path },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/tinylayers#website` },
      inLanguage: "en-US",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: layersArticles.length,
        itemListElement: layersArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/tinylayers/blog/${article.slug}`),
          name: article.title,
        })),
      },
    },
  ],
};

export default function TinyLayersBlogIndex() {
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
      <main id="main" className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <LayersBreadcrumbs
          items={[
            { label: "TinyLayers", href: "/tinylayers" },
            { label: "Guide" },
          ]}
        />
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-layers-blue">
          Guide
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          The TinyLayers Guide
        </h1>
        <p className="mt-4 text-base font-medium leading-relaxed text-layers-muted sm:text-lg">
          Calm, plain-English answers to the questions every new parent googles at
          2am — each one grounded in published safe-sleep guidance.
        </p>

        <div className="mt-12 space-y-4">
          {layersArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/tinylayers/blog/${article.slug}`}
              className="block rounded-[1.25rem] border border-layers-border bg-layers-card px-6 py-7 transition-shadow hover:shadow-md"
            >
              <h2 className="text-xl font-extrabold text-layers-ink">{article.title}</h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-layers-muted">
                {article.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-extrabold text-layers-blue">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <LayersFooter />
    </div>
  );
}
