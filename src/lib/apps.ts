import { MEALS_APP_STORE_URL } from "@/lib/tinymeals";

export type TinyApp = {
  slug: string;
  name: string;
  card: string;
  tagline: string;
  description: string;
  comingSoon?: boolean;
  /** App Store page, once the app is live. */
  appStoreUrl?: string;
};

export const apps: TinyApp[] = [
  {
    slug: "tinynaps",
    name: "TinyNaps",
    card: "Sleep, feeds, nappies and health in one calm tracker you can use one-handed at 3am.",
    comingSoon: true,
    tagline: "All the little things, in one place.",
    description:
      "A calm baby care tracker for sleep, feeds, nappies, growth and health. See when your baby last ate, slept or had a change, at a glance.",
  },
  {
    slug: "tinylayers",
    name: "TinyLayers",
    appStoreUrl: "https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063",
    card: "Dress your baby right for sleep, weather and every situation.",
    tagline: "Dressed right, every time.",
    description:
      "Take the guesswork out of dressing your baby for sleep, for the weather and for every situation in between.",
  },
  {
    slug: "tinyblooms",
    name: "TinyBlooms",
    card: "Play ideas, milestones and memories for your child's first five years.",
    comingSoon: true,
    tagline: "Little moments, big discoveries.",
    description:
      "Age-right activities for babies and young children, gentle milestones with no scores, and a memory journal for the moments you want to keep.",
  },
  {
    slug: "tinymeals",
    name: "TinyMeals",
    appStoreUrl: MEALS_APP_STORE_URL,
    card: "One gentle meal a day for your baby’s age and stage, with a first foods plan and allergen tracking.",
    comingSoon: true,
    tagline: "Today’s meal, worked out for you.",
    description:
      "A calm baby-led weaning and purée planner: one meal a day for your baby’s age and stage, a 10-week first foods plan and allergen tracking.",
  },
];

export function getApp(slug: string): TinyApp | undefined {
  return apps.find((app) => app.slug === slug);
}
