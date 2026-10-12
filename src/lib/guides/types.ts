export type GuideApp =
  "tinylayers" | "tinyblooms" | "tinyhaven" | "tinymeals" | "tinybundle";

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

/** A published health source a guide relies on. */
export type GuideSource = {
  org: "NHS" | "AAP" | "WHO" | "CDC";
  title: string;
  url: string;
};

/** A section: paragraphs, then an optional bullet list. */
export type GuideSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

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
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedSlugs: string[];
  /** Health sources cited at the end of the guide. */
  sources: GuideSource[];
  ctaApp: GuideApp;
  ctaLabel: string;
  ctaHref: string;
  ctaBlurb: string;
  publishedAt: string;
  modifiedAt: string;
};

/** What a guide's content file provides; the app, call to action and dates are filled in by the catalog. */
export type GuideContent = Omit<
  GuidePage,
  | "app"
  | "ctaApp"
  | "ctaLabel"
  | "ctaHref"
  | "ctaBlurb"
  | "publishedAt"
  | "modifiedAt"
> & {
  /** Date the content was last reviewed (YYYY-MM-DD); defaults to the original publish date. */
  modifiedAt?: string;
};
