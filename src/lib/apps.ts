import { MEALS_APP_STORE_URL } from "@/lib/tinymeals";

export type AppSlug = "tinylayers" | "tinymeals" | "tinyblooms" | "tinynaps";

export type TinyApp = {
  slug: AppSlug;
  name: string;
  /** True once the app can be downloaded. Drives every App Store button, QR code and "Coming soon" label. */
  live: boolean;
  /** App Store page. Only linked while `live` is true. */
  appStoreUrl?: string;
  /** App Store id for the Smart App Banner. */
  appStoreId?: string;
  card: string;
  tagline: string;
  description: string;
  colors: {
    /** Brand dot and accent. */
    dot: string;
    /** Headings and links on light backgrounds. */
    deep: string;
    /** Soft card and chip background. */
    tile: string;
    /** Background behind the app mark. */
    iconBg: string;
    /** Primary button. */
    btn: string;
    /** Dark call-to-action band. */
    band: string;
  };
};

export const apps: TinyApp[] = [
  {
    slug: "tinylayers",
    name: "TinyLayers",
    live: true,
    appStoreUrl: "https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063",
    appStoreId: "6787217063",
    card: "Dress your baby right for sleep, weather and every situation.",
    tagline: "Dressed right, every time.",
    description:
      "Take the guesswork out of dressing your baby for sleep, for the weather and for every situation in between.",
    colors: { dot: "#3D6DA8", deep: "#2F5B8A", tile: "#DCE6F2", iconBg: "#DCE6F2", btn: "#3D6DA8", band: "#2F5B8A" },
  },
  {
    slug: "tinymeals",
    name: "TinyMeals",
    live: false,
    appStoreUrl: MEALS_APP_STORE_URL,
    appStoreId: "6818279922",
    card: "One gentle meal a day for your baby’s age and stage, with a first foods plan and allergen tracking.",
    tagline: "Today’s meal, worked out for you.",
    description:
      "A calm baby-led weaning and purée planner: one meal a day for your baby’s age and stage, a 10-week first foods plan and allergen tracking.",
    colors: { dot: "#D17A2A", deep: "#A0521A", tile: "#FBEEDC", iconBg: "#FBEEDC", btn: "#5F6F4B", band: "#5F6F4B" },
  },
  {
    slug: "tinyblooms",
    name: "TinyBlooms",
    live: false,
    card: "Play ideas, milestones and memories for your child's first five years.",
    tagline: "Little moments, big discoveries.",
    description:
      "Age-right activities for babies and young children, gentle milestones with no scores, and a memory journal for the moments you want to keep.",
    colors: { dot: "#55915E", deep: "#3F6E47", tile: "#E3EBDC", iconBg: "#E3EBDC", btn: "#47794F", band: "#3F6E47" },
  },
  {
    slug: "tinynaps",
    name: "TinyNaps",
    live: false,
    card: "Sleep, feeds, nappies and health in one calm tracker you can use one-handed at 3am.",
    tagline: "All the little things, in one place.",
    description:
      "A calm baby care tracker for sleep, feeds, nappies, growth and health. See when your baby last ate, slept or had a change, at a glance.",
    colors: { dot: "#232F48", deep: "#232F48", tile: "#E6E9F0", iconBg: "#232F48", btn: "#232F48", band: "#232F48" },
  },
];

export function getApp(slug: AppSlug): TinyApp {
  const app = apps.find((a) => a.slug === slug);
  if (!app) throw new Error(`Unknown app ${slug}`);
  return app;
}

/** Where an app's main button goes and what it says: the App Store once live, otherwise the launch list. */
export function appCta(app: TinyApp, waitlistHref: string): { href: string; label: string; live: boolean } {
  return app.live && app.appStoreUrl
    ? { href: app.appStoreUrl, label: `Get ${app.name} on the App Store`, live: true }
    : { href: waitlistHref, label: `Tell me when ${app.name} launches`, live: false };
}

export const CONTACT_EMAIL = "contact@twobricklabs.com";
