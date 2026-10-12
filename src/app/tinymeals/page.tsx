import type { Metadata } from "next";
import { MealsBackdrop } from "@/components/tinymeals/backdrop";
import { MealsFooter, MealsHeader } from "@/components/tinymeals/chrome";
import { MEALS_FAQS, MealsPage } from "@/components/tinymeals/meals-page";
import { absoluteUrl, mealsOgImage, SITE_URL } from "@/lib/seo";
import { MEALS_APP_STORE_URL } from "@/lib/tinymeals";

const title = "TinyMeals: Baby-Led Weaning and First Foods App for Starting Solids";
const description =
  "TinyMeals is a calm baby-led weaning and purée planner: one meal a day for your baby’s age and stage, a 10-week first foods plan and allergen tracking.";
const path = "/tinymeals";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "TinyMeals",
    "baby-led weaning app",
    "first foods app",
    "starting solids",
    "baby meal ideas",
    "allergen introduction",
    "weaning plan",
    "TinyBundle",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "TinyBundle",
    locale: "en_US",
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
  itunes: { appId: "6818279922" },
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
      installUrl: MEALS_APP_STORE_URL,
      publisher: { "@type": "Organization", name: "Two Brick Labs", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "TinyBundle", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "TinyMeals", item: url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: MEALS_FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function TinyMealsRoute() {
  return (
    <div className="tm-motion relative isolate min-h-screen bg-meals text-meals-ink antialiased selection:bg-meals-peach selection:text-meals-orange-deep">
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
