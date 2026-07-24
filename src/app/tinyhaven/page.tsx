import type { Metadata } from "next";
import { HavenHeader, HavenFooter } from "@/components/tinyhaven/chrome";
import { HavenPage, faqs } from "@/components/tinyhaven/haven-page";

const title = "TinyHaven — Late-night companion for parents who feel alone";
const description =
  "TinyHaven is a calm late-night check-in app for parents. See who else is awake, check in anonymously, and feel less alone during night feeds and sleepless hours — without social media.";
const url = "https://tinybundle.com/tinyhaven";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tinyhaven" },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "TinyHaven",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "TinyHaven",
    "late night parenting app",
    "parents awake at night",
    "night feed companion",
    "anonymous parent support",
    "sleepless nights with baby",
    "2am parenting",
    "new parent loneliness",
  ],
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
      "@id": "https://tinybundle.com/#organization",
      name: "TinyBundle",
      url: "https://tinybundle.com/",
    },
    {
      "@type": "WebSite",
      "@id": "https://tinybundle.com/tinyhaven#website",
      url,
      name: "TinyHaven",
      publisher: { "@id": "https://tinybundle.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "TinyHaven",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      description,
      url,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Download free; premium plans available in-app",
      },
      publisher: { "@id": "https://tinybundle.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": "https://tinybundle.com/tinyhaven#website" },
      about: {
        "@type": "Thing",
        name: "Late-night companionship for parents",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://tinybundle.com/tinyhaven-phone.png",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function TinyHavenRoute() {
  return (
    <div className="min-h-screen bg-haven font-sans text-haven-ink antialiased selection:bg-haven-amber selection:text-haven-on-amber">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HavenHeader />
      <main>
        <HavenPage />
      </main>
      <HavenFooter />
    </div>
  );
}
