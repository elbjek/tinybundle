import type { GuideApp } from "@/lib/guides/types";

/** A guides hub at /guides/<app>: its search snippet and the copy above and below the list. */
export type GuideHub = {
  app: GuideApp;
  metaTitle: string;
  metaDescription: string;
  /** Name of the ItemList in structured data. */
  listName: string;
  eyebrow: string;
  h1: string;
  intro: string;
  bandHead: string;
  bandText: string;
};

/** Hub order: in tabs, the footer and "More guides from the family". */
export const HUB_ORDER: GuideApp[] = ["tinybundle", "tinylayers", "tinymeals", "tinyblooms", "tinynaps"];

export const GUIDE_HUBS: Record<GuideApp, GuideHub> = {
  tinybundle: {
    app: "tinybundle",
    metaTitle: "Calm parenting guides for the first year | TinyBundle",
    metaDescription:
      "Everyday guides to baby routines, sharing the load and the first year month by month, from the team behind TinyLayers, TinyMeals, TinyBlooms and TinyNaps.",
    listName: "Calm guides for the first year",
    eyebrow: "TinyBundle guides",
    h1: "Calm guides for the first year",
    intro:
      "Routines, sharing the load and the small changes month to month. Everyday guides for the parts of baby life that don’t belong to one app.",
    bandHead: "Four little apps, one job each.",
    bandText: "What to wear, what to cook, what to play and when they last ate. Pick the one you need today.",
  },
  tinylayers: {
    app: "tinylayers",
    metaTitle: "Baby sleepwear and TOG guides | TinyLayers",
    metaDescription:
      "What should your baby wear to sleep? TOG ratings, room temperature charts and dressing your baby for walks, car rides and every kind of weather.",
    listName: "Baby sleepwear and TOG guides",
    eyebrow: "TinyLayers guides",
    h1: "Baby sleepwear and TOG guides",
    intro:
      "What to dress your baby in for sleep, walks and car rides, from a heatwave to a freezing pram ride. Clear answers by room temperature and weather.",
    bandHead: "Know what to put on tonight.",
    bandText: "TinyLayers turns the room temperature into one clear answer, with a quick safe-sleep check.",
  },
  tinymeals: {
    app: "tinymeals",
    metaTitle: "Weaning and first foods guides | TinyMeals",
    metaDescription:
      "Starting solids at 6 months, baby-led weaning vs purées, first foods by age and introducing allergens. Calm, practical weaning guides from TinyMeals.",
    listName: "Weaning and first foods guides",
    eyebrow: "TinyMeals guides",
    h1: "Weaning and first foods guides",
    intro:
      "Starting solids, baby-led weaning, purées and allergens, one calm step at a time. Practical guides for every texture stage from around 6 months.",
    bandHead: "Know what’s for lunch before they’re hungry.",
    bandText: "One meal a day matched to your baby’s age and stage, ten first tastes with allergens paced in, and a log of every food tried.",
  },
  tinyblooms: {
    app: "tinyblooms",
    metaTitle: "Baby play and activity guides by age | TinyBlooms",
    metaDescription:
      "Tummy time ideas, sensory play and talking games for babies from 0 to 12 months. Simple, age-right activity guides from TinyBlooms.",
    listName: "Baby play and development activity guides",
    eyebrow: "TinyBlooms guides",
    h1: "Baby play and development activity guides",
    intro:
      "Tummy time, sensory play, music and talking games for every age. Simple ideas that fit between naps and need nothing more than what’s at home.",
    bandHead: "One small idea for right now.",
    bandText: "Pick how long you have and how your baby feels. TinyBlooms suggests one age-right activity at a time.",
  },
  tinynaps: {
    app: "tinynaps",
    metaTitle: "Baby sleep, feeding and diaper guides | TinyNaps",
    metaDescription:
      "Awake windows by age, how often newborns feed and how many wet and dirty diapers to expect. Practical tracking guides from TinyNaps.",
    listName: "Baby sleep, feeding and diaper guides",
    eyebrow: "TinyNaps guides",
    h1: "Baby sleep, feeding and diaper guides",
    intro:
      "Awake windows, feeding frequency and what a normal diaper count looks like. Guides to help you make sense of your own records, not to replace your doctor.",
    bandHead: "When did they last eat? Sleep? Need a change?",
    bandText: "Log sleep, feeds and diapers in one tap and see the whole day on one screen.",
  },
};

export function isHub(slug: string): slug is GuideApp {
  return slug in GUIDE_HUBS;
}

export function hubHref(app: GuideApp): string {
  return `/guides/${app}`;
}
