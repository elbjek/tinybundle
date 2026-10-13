import type { Metadata, Viewport } from "next";
import { Backdrop, type BackdropShape } from "@/components/site/backdrop";
import { faqJsonLd } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/site-footer";
import { NapsHeader } from "@/components/tinynaps/chrome";
import { NAPS_CTA, NAPS_FAQS, NapsPage } from "@/components/tinynaps/naps-page";
import { getApp } from "@/lib/apps";
import { absoluteUrl, napsOgImage, SITE_URL } from "@/lib/seo";

const app = getApp("tinynaps");
const title = "TinyNaps: Baby Sleep, Feeding and Diaper Tracker for iPhone";
const description =
  "TinyNaps is a calm baby tracker for sleep, feeds and diapers. Log in one tap, even one-handed at 2 am, and see when your baby last ate, slept and was changed.";
const ogDescription = "Log sleep, feeds and diapers in one tap and see the whole day on one calm screen.";
const path = "/tinynaps";
const url = absoluteUrl(path);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: { type: "website", url, title, description: ogDescription, siteName: "TinyBundle", images: [napsOgImage] },
  twitter: { card: "summary_large_image", title, description: ogDescription, images: [napsOgImage.url] },
  ...(NAPS_CTA.live && app.appStoreId ? { other: { "apple-itunes-app": `app-id=${app.appStoreId}` } } : {}),
};

export const viewport: Viewport = { themeColor: "#FEF8F3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "TinyNaps",
      url,
      description:
        "A calm baby tracker for sleep, feeds and diapers. Log in one tap and see when your baby last ate, slept and was changed.",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS",
      ...(NAPS_CTA.live ? { installUrl: NAPS_CTA.href } : {}),
      publisher: { "@type": "Organization", name: "Two Brick Labs", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "TinyBundle", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "TinyNaps", item: url },
      ],
    },
    faqJsonLd(NAPS_FAQS),
  ],
};

const BACKDROP: BackdropShape[] = [
  {
    style: { top: "14%", right: -70, width: 230, height: 230, borderRadius: 64, background: "#DCE6F2", opacity: 0.7, transform: "rotate(14deg)" },
    animation: "tm-float-a 9s ease-in-out infinite",
  },
  {
    style: { top: "56%", left: -130, width: 310, height: 310, borderRadius: 155, background: "#E6E9F0", opacity: 0.9 },
    animation: "tm-float-b 10s ease-in-out infinite",
  },
  {
    style: { top: "84%", right: "12%", width: 92, height: 92, borderRadius: 46, background: "#F6D9A8", opacity: 0.5 },
    animation: "tm-float-b 7s ease-in-out infinite 1s",
  },
  {
    style: { top: "34%", left: "5%", width: 46, height: 46, borderRadius: 14, background: "#BFD0E6", opacity: 0.55, transform: "rotate(-18deg)" },
    animation: "tm-float-a 7.5s ease-in-out infinite .6s",
  },
  {
    style: { top: "24%", left: "46%", width: 9, height: 9, borderRadius: 5, background: "#E2A03F" },
    animation: "tm-twinkle 2.4s ease-in-out infinite",
  },
  {
    style: { top: "68%", left: "36%", width: 8, height: 8, borderRadius: 4, background: "#7FA8CF" },
    animation: "tm-twinkle 2.4s ease-in-out infinite .8s",
  },
  {
    style: { top: "46%", right: "26%", width: 7, height: 7, borderRadius: 4, background: "#232F48" },
    animation: "tm-twinkle 2.4s ease-in-out infinite 1.4s",
  },
];

export default function TinyNapsRoute() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Backdrop shapes={BACKDROP} />
      <NapsHeader ctaHref={NAPS_CTA.href} ctaLabel={NAPS_CTA.nav} external={NAPS_CTA.live} />
      <main>
        <NapsPage />
      </main>
      <SiteFooter
        app="tinynaps"
        product={[
          { href: "#how", label: "How it works" },
          { href: "#try", label: "Try it" },
          { href: "#faq", label: "FAQ" },
        ]}
        note="© 2026 Two Brick Labs. General guidance only, not medical advice."
      />
    </div>
  );
}
