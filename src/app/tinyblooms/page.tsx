import type { Metadata } from "next";
import { BloomsHeader, BloomsFooter } from "@/components/tinyblooms/chrome";
import { BloomsPage } from "@/components/tinyblooms/blooms-page";
import { absoluteUrl, bloomsOgImage, SITE_URL } from "@/lib/seo";

const title = "TinyBlooms - One lovely thing to do with baby";
const description =
  "Age-based ideas and tiny activities that fit real days. One idea at a time, no milestones, no guilt. Coming soon from TinyBundle.";
const ogTitle = "One lovely thing to do with baby.";
const ogDescription =
  "One age-right idea at a time. No browsing, no milestones, no guilt. TinyBlooms is coming soon.";
const path = "/tinyblooms";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "TinyBlooms",
    "baby activities",
    "what to do with baby",
    "age appropriate play",
    "tummy time ideas",
    "newborn activities",
    "TinyBundle",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title: ogTitle,
    description: ogDescription,
    siteName: "TinyBlooms",
    locale: "en_US",
    images: [bloomsOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [bloomsOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
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
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(bloomsOgImage.url),
        width: bloomsOgImage.width,
        height: bloomsOgImage.height,
      },
      about: {
        "@type": "SoftwareApplication",
        name: "TinyBlooms",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          price: "0",
          priceCurrency: "USD",
        },
      },
      inLanguage: "en-US",
    },
  ],
};

export default function TinyBloomsRoute() {
  return (
    <div className="min-h-screen bg-blooms font-sans text-blooms-ink antialiased selection:bg-blooms-green-tint selection:text-blooms-green-deep">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blooms-green focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BloomsHeader />
      <main id="main">
        <BloomsPage />
      </main>
      <BloomsFooter />
    </div>
  );
}
