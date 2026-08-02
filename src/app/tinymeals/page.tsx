import type { Metadata } from "next";
import { MealsHeader, MealsFooter } from "@/components/tinymeals/chrome";
import { MealsPage } from "@/components/tinymeals/meals-page";
import { absoluteUrl, mealsOgImage, SITE_URL } from "@/lib/seo";

const title = "TinyMeals - What can I safely make for baby today?";
const description =
  "A calm, evidence-based cookbook for introducing solids. Simple, developmentally appropriate baby recipes matched to their stage. Coming soon from TinyBundle.";
const ogTitle = "What can I safely make for baby today?";
const ogDescription =
  "Simple baby recipes written for their stage. Safety, texture, and real kitchen ingredients. TinyMeals is coming soon.";
const path = "/tinymeals";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "TinyMeals",
    "introducing solids",
    "baby recipes",
    "first baby foods",
    "baby meal ideas",
    "age appropriate baby food",
    "infant feeding recipes",
    "TinyBundle",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title: ogTitle,
    description: ogDescription,
    siteName: "TinyMeals",
    locale: "en_US",
    images: [mealsOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [mealsOgImage.url],
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
        url: absoluteUrl(mealsOgImage.url),
        width: mealsOgImage.width,
        height: mealsOgImage.height,
      },
      about: {
        "@type": "SoftwareApplication",
        name: "TinyMeals",
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

export default function TinyMealsRoute() {
  return (
    <div className="min-h-screen bg-meals font-sans text-meals-ink antialiased selection:bg-meals-orange-tint selection:text-meals-orange-deep">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-meals-orange focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MealsHeader />
      <main id="main">
        <MealsPage />
      </main>
      <MealsFooter />
    </div>
  );
}
