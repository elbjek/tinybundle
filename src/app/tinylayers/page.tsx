import type { Metadata } from "next";
import { LayersHeader, LayersFooter } from "@/components/tinylayers/chrome";
import { LayersPage } from "@/components/tinylayers/layers-page";
import { absoluteUrl, layersOgImage, SITE_URL } from "@/lib/seo";
import { layersFaqs } from "@/lib/tinylayers/faqs";

const title = "TinyLayers - Dress your baby with confidence";
const description =
  "TinyLayers tells you what your baby should wear for tonight's room, today's walk, every nap. Plain-English outfit guidance for sleep, outings, stroller, carrier, and car seat — no more second-guessing.";
const path = "/tinylayers";
const url = absoluteUrl(path);
const ogDescription =
  "Know what your baby should wear for tonight's room, today's walk, and every nap.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "TinyLayers",
    "what should baby wear to sleep",
    "baby TOG guide",
    "dress baby for weather",
    "baby sleep sack TOG",
    "room temperature baby sleep",
    "baby outfit guide app",
    "car seat coat rule",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title,
    description: ogDescription,
    siteName: "TinyLayers",
    locale: "en_US",
    images: [layersOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ogDescription,
    images: [layersOgImage.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "TinyBundle",
      url: `${SITE_URL}/`,
    },
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      url,
      name: "TinyLayers",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${url}#website` },
      about: {
        "@type": "Thing",
        name: "Baby outfit guidance for sleep and outings",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(layersOgImage.url),
        width: layersOgImage.width,
        height: layersOgImage.height,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${url}#app`,
      name: "TinyLayers - Baby Outfit Guide",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      description:
        "Plain-English baby outfit guidance for sleep, naps, going out, stroller, carrier, and car seat.",
      url,
      downloadUrl:
        "https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063",
      installUrl:
        "https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to download; Premium available in-app",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: absoluteUrl(layersOgImage.url),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: layersFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function TinyLayersRoute() {
  return (
    <div className="min-h-screen bg-layers font-sans text-layers-ink antialiased selection:bg-layers-blue-tint selection:text-layers-blue-deep">
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
      <main id="main">
        <LayersPage />
      </main>
      <LayersFooter />
    </div>
  );
}
