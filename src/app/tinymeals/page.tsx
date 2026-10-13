import type { Metadata } from "next";
import { faqJsonLd } from "@/components/site/faq";
import { MealsBackdrop } from "@/components/tinymeals/backdrop";
import { MealsFooter, MealsHeader } from "@/components/tinymeals/chrome";
import { MEALS_FAQS, MealsPage } from "@/components/tinymeals/meals-page";
import { getApp } from "@/lib/apps";
import { absoluteUrl, mealsOgImage, SITE_URL } from "@/lib/seo";

const app = getApp("tinymeals");
const title = "TinyMeals: Baby-Led Weaning and First Foods App for Starting Solids";
const description =
  "TinyMeals is a calm baby-led weaning and purée planner: one meal a day for your baby’s age and stage, a ten-food first foods plan and allergen tracking.";
const path = "/tinymeals";
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
    images: [mealsOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [mealsOgImage.url],
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
      name: "TinyMeals",
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
        { "@type": "ListItem", position: 2, name: "TinyMeals", item: url },
      ],
    },
    faqJsonLd(MEALS_FAQS),
  ],
};

export default function TinyMealsRoute() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased selection:bg-meals-peach selection:text-meals-orange-deep">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-meals-sage focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MealsBackdrop />
      <MealsHeader />
      <main id="main">
        <MealsPage />
      </main>
      <MealsFooter />
    </div>
  );
}
