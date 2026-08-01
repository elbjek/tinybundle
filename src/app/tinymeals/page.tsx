import type { Metadata } from "next";
import { MealsHeader, MealsFooter } from "@/components/tinymeals/chrome";
import { MealsPage } from "@/components/tinymeals/meals-page";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const title = "TinyMeals — Something good from what you have";
const description =
  "Turn what’s already in your kitchen into baby-friendly meals. Less waste, less stress, more happy plates. Coming soon from TinyBundle.";
const path = "/tinymeals";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "TinyMeals",
    "baby meal ideas",
    "baby food from leftovers",
    "what to feed baby",
    "reduce food waste baby",
    "baby-friendly recipes",
    "TinyBundle",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "TinyMeals",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
