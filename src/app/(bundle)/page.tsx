import type { Metadata } from "next";
import { AppsSection } from "@/components/home/apps-section";
import { HomeTop } from "@/components/home/home-top";
import { GuidesSpotlight, HomeFaq, HomeFooter, HowItWorks, LatestGuides, WhyTinyBundle, homeFaqs } from "@/components/home/home-sections";
import { Newsletter } from "@/components/home/newsletter";
import { getApp } from "@/lib/apps";
import { absoluteUrl, bundleOgImage, SITE_URL } from "@/lib/seo";

const title = "TinyBundle: Calm Parenting Apps for Baby Sleep, First Foods, Play and Daily Care";
const description =
  "Four calm iPhone apps for parents: TinyLayers for what your baby should wear, TinyMeals for starting solids, TinyBlooms for play and milestones, and TinyNaps for sleep, feeds and nappies.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: absoluteUrl("/"), title, description, siteName: "TinyBundle", locale: "en_GB", images: [bundleOgImage] },
  twitter: { card: "summary_large_image", title, description, images: [bundleOgImage.url] },
};

const APPS = ["tinylayers", "tinymeals", "tinyblooms", "tinynaps"] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Two Brick Labs", url: `${SITE_URL}/`, brand: { "@type": "Brand", name: "TinyBundle" } },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "TinyBundle", publisher: { "@id": `${SITE_URL}/#organization` } },
    {
      "@type": "ItemList",
      name: "TinyBundle parenting apps",
      itemListElement: APPS.map((slug, i) => {
        const app = getApp(slug);
        return {
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/${slug}`),
          item: {
            "@type": "MobileApplication",
            name: app?.name,
            url: absoluteUrl(`/${slug}`),
            description: app?.description,
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS",
            ...(app?.appStoreUrl && !app.comingSoon ? { installUrl: app.appStoreUrl } : {}),
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        };
      }),
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs().map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    },
  ],
};

const BLOBS = [
  "-left-20 -top-[60px] h-[260px] w-[260px] rounded-full bg-[#FBE4CF] opacity-60 [animation:tm-float-a_10s_ease-in-out_infinite]",
  "-right-[110px] top-[30%] h-[300px] w-[300px] rounded-full bg-[#DCE6F2] opacity-65 [animation:tm-float-b_11s_ease-in-out_infinite]",
  "-bottom-[90px] left-[12%] h-[280px] w-[280px] rounded-full bg-[#E3EBDC] opacity-70 [animation:tm-float-b_9s_ease-in-out_1s_infinite]",
  "-left-5 top-[62%] h-[54px] w-[54px] rotate-[14deg] rounded-2xl bg-meals-apricot opacity-60 [animation:tm-float-a_7.5s_ease-in-out_.6s_infinite]",
];

export default function Home() {
  return (
    <div className="tm-motion relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {BLOBS.map((blob) => (
          <div key={blob} className={`absolute ${blob}`} />
        ))}
      </div>
      <HomeTop />
      <main>
        <AppsSection />
        <HowItWorks />
        <GuidesSpotlight />
        <WhyTinyBundle />
        <HomeFaq />
        <LatestGuides />
        <Newsletter />
      </main>
      <HomeFooter />
    </div>
  );
}
