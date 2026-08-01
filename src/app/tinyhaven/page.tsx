import type { Metadata } from "next";
import { absoluteUrl, havenOgImage, SITE_URL } from "@/lib/seo";
import { HavenHeader, HavenFooter } from "@/components/tinyhaven/chrome";
import { HavenPage, faqs } from "@/components/tinyhaven/haven-page";

const title = "TinyHaven - You're not the only one awake";
const description =
  "A late-night check-in for parents in the hard hour. Anonymous presence, quiet company, and proof that someone else is up too. Moonlight, not a timeline.";
const ogTitle = "You're not the only one awake.";
const ogDescription =
  "Anonymous late-night check-ins for parents. See who's awake, leave a quiet note, and feel less alone during night feeds.";
const url = absoluteUrl("/tinyhaven");

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/tinyhaven" },
  openGraph: {
    type: "website",
    url,
    title: ogTitle,
    description: ogDescription,
    siteName: "TinyHaven",
    locale: "en_US",
    images: [havenOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [havenOgImage.url],
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
      "@id": `${SITE_URL}/#organization`,
      name: "TinyBundle",
      url: absoluteUrl("/"),
    },
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      url,
      name: "TinyHaven",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "TinyHaven",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      description,
      url,
      downloadUrl:
        "https://apps.apple.com/us/app/tinyhaven-late-night-parents/id6793665465",
      installUrl:
        "https://apps.apple.com/us/app/tinyhaven-late-night-parents/id6793665465",
      image: absoluteUrl(havenOgImage.url),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Download free; premium plans available in-app",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
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
        name: "Late-night companionship for parents",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(havenOgImage.url),
        width: havenOgImage.width,
        height: havenOgImage.height,
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
