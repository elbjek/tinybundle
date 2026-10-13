import type { Metadata, Viewport } from "next";
import { Backdrop } from "@/components/site/backdrop";
import { faqJsonLd } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/site-footer";
import { BLOOMS_FAQS, BloomsPage } from "@/components/tinyblooms/blooms-page";
import { BloomsHeader } from "@/components/tinyblooms/chrome";
import { getApp } from "@/lib/apps";
import { absoluteUrl, bloomsOgImage, SITE_URL } from "@/lib/seo";

const app = getApp("tinyblooms");
const title = "TinyBlooms: Baby Activities, Milestones and Memories, Ages 0 to 5";
const description =
  "TinyBlooms gives you age-right play ideas, gentle milestones with no scores and a journal for the moments you want to keep, from newborn to age 5.";
const path = "/tinyblooms";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: { type: "website", siteName: "TinyBundle", url, title, description, images: [bloomsOgImage] },
  twitter: { card: "summary_large_image" },
  ...(app.live && app.appStoreId ? { other: { "apple-itunes-app": `app-id=${app.appStoreId}` } } : {}),
};

export const viewport: Viewport = { themeColor: "#EAF1E5" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: app.name,
      url,
      description,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      ...(app.live && app.appStoreUrl ? { installUrl: app.appStoreUrl } : {}),
      publisher: { "@type": "Organization", name: "TwoBrickLabs", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "TinyBundle", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: app.name, item: url },
      ],
    },
    faqJsonLd(BLOOMS_FAQS),
  ],
};

const BLOBS = [
  { style: { top: -120, right: -80, width: 320, height: 320, borderRadius: 160, background: "#C9DCC3", opacity: 0.7 } },
  { style: { bottom: -160, left: -120, width: 340, height: 340, borderRadius: 170, background: "#C9DCC3", opacity: 0.6 } },
];

export default function TinyBloomsRoute() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Backdrop shapes={BLOBS} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-extrabold focus:text-tb-ink"
      >
        Skip to content
      </a>
      <BloomsHeader />
      <main id="main">
        <BloomsPage />
      </main>
      <SiteFooter
        app="tinyblooms"
        note="© 2026 TwoBrickLabs. Play ideas for everyday moments, not medical advice."
      />
    </div>
  );
}
