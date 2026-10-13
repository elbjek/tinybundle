import type { Metadata, Viewport } from "next";
import { HERO_MOMENTS, type HeroPanel } from "@/components/home/hero-moments";
import { HeroScreen } from "@/components/home/hero-screens";
import { HomeApps } from "@/components/home/home-apps";
import { HomeBackdrop } from "@/components/home/home-backdrop";
import { HomeFooter, HowItWorks, JoinBand } from "@/components/home/home-blocks";
import { HOME_FAQS } from "@/components/home/home-faqs";
import { HomeTop } from "@/components/home/home-hero";
import { launch } from "@/components/home/launch-copy";
import { Faq, faqJsonLd } from "@/components/site/faq";
import { GuidesTeaser } from "@/components/site/guides-teaser";
import { appCta, CONTACT_EMAIL, getApp, type AppSlug } from "@/lib/apps";
import { absoluteUrl, bundleOgImage, SITE_URL } from "@/lib/seo";

const title = "TinyBundle: Calm Parenting Apps for Baby Sleep, First Foods, Play and Daily Care";
const description =
  "TinyBundle brings together four calm parenting apps: TinyLayers for what baby should wear to sleep, TinyMeals for starting solids, TinyBlooms for age-right play ideas and TinyNaps for tracking sleep, feeds and diapers.";
const ogTitle = "TinyBundle: calm parenting apps for every part of the day";
const ogDescription =
  "Baby sleepwear, first foods, play ideas and a simple sleep, feeding and diaper tracker in four small, calm apps.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "TinyBundle",
    url: absoluteUrl("/"),
    title: ogTitle,
    description: ogDescription,
    images: [bundleOgImage],
  },
  twitter: { card: "summary_large_image", images: [bundleOgImage.url] },
};

export const viewport: Viewport = { themeColor: "#FEF8F3" };

const LISTED: { slug: AppSlug; about: string }[] = [
  {
    slug: "tinylayers",
    about: "Baby sleepwear and TOG guide: what your baby should wear to sleep and outside, from your room temperature.",
  },
  {
    slug: "tinymeals",
    about: "Baby-led weaning and first foods planner with a 10-week plan, age-right recipes and allergen tracking.",
  },
  {
    slug: "tinyblooms",
    about: "Play ideas, gentle milestones with no scores and a memory journal, from newborn to age 5.",
  },
  {
    slug: "tinynaps",
    about: "Baby sleep, feeding and diaper tracker: log in one tap and see when your baby last ate, slept or was changed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Two Brick Labs",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      brand: { "@type": "Brand", name: "TinyBundle" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: "TinyBundle",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#page`,
      url: absoluteUrl("/"),
      name: title,
      isPartOf: { "@id": `${SITE_URL}/#site` },
    },
    {
      "@type": "ItemList",
      name: "TinyBundle parenting apps",
      itemListElement: LISTED.map(({ slug, about }, i) => {
        const app = getApp(slug);
        return {
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/${slug}`),
          item: {
            "@type": "MobileApplication",
            name: app.name,
            url: absoluteUrl(`/${slug}`),
            description: about,
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS",
            ...(app.live && app.appStoreUrl ? { installUrl: app.appStoreUrl } : {}),
            publisher: { "@id": `${SITE_URL}/#org` },
          },
        };
      }),
    },
    faqJsonLd(HOME_FAQS),
  ],
};

const panels: HeroPanel[] = HERO_MOMENTS.map((moment) => {
  const app = getApp(moment.app);
  const cta = appCta(app, "#join");
  return {
    ...moment,
    name: app.name,
    deep: app.colors.deep,
    tile: app.colors.tile,
    live: cta.live,
    ctaHref: cta.href,
    ctaLabel: cta.label,
    screen: <HeroScreen app={moment.app} />,
  };
});

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeBackdrop />
      <HomeTop panels={panels} outNow={launch.outNow} moreSoon={launch.moreSoon} />
      <main>
        <HowItWorks />
        <HomeApps />
        <Faq faqs={HOME_FAQS} />
        <GuidesTeaser
          app="tinybundle"
          eyebrow="Tiny tips"
          heading="Short, useful reads for real days."
          slugs={["tog-guide-for-baby-sleep", "first-baby-foods", "tummy-time-ideas"]}
          className="bg-[rgba(241,234,224,0.72)] pb-[clamp(64px,8vw,104px)]"
        />
        {launch.anySoon ? <JoinBand /> : null}
      </main>
      <HomeFooter />
    </div>
  );
}
