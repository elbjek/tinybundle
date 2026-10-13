import type { Metadata } from "next";
import { faqJsonLd } from "@/components/site/faq";
import { LayersBackdrop } from "@/components/tinylayers/backdrop";
import { LayersFooter, LayersHeader } from "@/components/tinylayers/chrome";
import { LAYERS_FAQS, LayersPage } from "@/components/tinylayers/layers-page";
import { getApp } from "@/lib/apps";
import { absoluteUrl, layersOgImage, SITE_URL } from "@/lib/seo";

const app = getApp("tinylayers");
const title = "TinyLayers: What Should My Baby Wear to Sleep? Baby TOG Guide App";
const description =
  "TinyLayers tells you what your baby should wear to sleep and outside, from the room temperature or the weather: bodysuit, sleepsuit and TOG sleep sack, with a quick chest check.";
const path = "/tinylayers";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "TinyBundle",
    images: [layersOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [layersOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  ...(app.live && app.appStoreId ? { other: { "apple-itunes-app": `app-id=${app.appStoreId}` } } : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "TinyLayers",
      url,
      description,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      ...(app.live && app.appStoreUrl ? { installUrl: app.appStoreUrl } : {}),
      publisher: { "@type": "Organization", name: "Two Brick Labs", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "TinyBundle", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "TinyLayers", item: url },
      ],
    },
    faqJsonLd(LAYERS_FAQS),
  ],
};

export default function TinyLayersRoute() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#3D6DA8] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LayersBackdrop />
      <LayersHeader />
      <main id="main">
        <LayersPage />
      </main>
      <LayersFooter />
    </div>
  );
}
