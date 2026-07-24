export type GuideApp = "tinylayers" | "tinyblooms" | "tinyhaven" | "tinymeals" | "tinybundle";

export type GuideCategory =
  | "weather"
  | "sleep"
  | "situation"
  | "age"
  | "combo"
  | "development"
  | "loneliness"
  | "cooking"
  | "parenting-apps";

export type GuideFaq = { q: string; a: string };

export type GuidePage = {
  slug: string;
  app: GuideApp;
  category: GuideCategory;
  /** Primary search question this page answers */
  question: string;
  title: string;
  metaTitle: string;
  description: string;
  /** One-sentence answer for featured snippet / quick box */
  quickAnswer: string;
  /** Outfit or action lines */
  bullets: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: GuideFaq[];
  relatedSlugs: string[];
  ctaApp: GuideApp;
  ctaLabel: string;
  ctaHref: string;
  ctaBlurb: string;
  publishedAt: string;
  modifiedAt: string;
};
