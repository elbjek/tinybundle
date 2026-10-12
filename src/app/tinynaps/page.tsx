import type { Metadata } from "next";
import { GuidesFooter } from "@/components/guides/chrome";
import { NapsHeader } from "@/components/tinynaps/chrome";
import { NAPS_FAQS, NapsPage } from "@/components/tinynaps/naps-page";
import { absoluteUrl, napsOgImage, SITE_URL } from "@/lib/seo";

const title = "TinyNaps: Baby Sleep, Feeding and Nappy Tracker App";
const description =
  "TinyNaps is a calm baby tracker for sleep, feeds, nappies, growth and health, quick enough to use one-handed at 3am. Coming soon to iPhone.";
const path = "/tinynaps";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["TinyNaps", "baby tracker", "baby sleep tracker", "feeding tracker", "nappy tracker", "newborn tracker", "TinyBundle"],
  alternates: { canonical: path },
  openGraph: { type: "website", url, title, description, siteName: "TinyBundle", locale: "en_GB", images: [napsOgImage] },
  twitter: { card: "summary_large_image", title, description, images: [napsOgImage.url] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "TinyNaps",
      url,
      description,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      publisher: { "@type": "Organization", name: "Two Brick Labs", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "TinyBundle", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "TinyNaps", item: url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: NAPS_FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function TinyNapsRoute() {
  return (
    <div className="min-h-screen bg-tb text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NapsHeader />
      <main>
        <NapsPage />
      </main>
      <GuidesFooter />
    </div>
  );
}
