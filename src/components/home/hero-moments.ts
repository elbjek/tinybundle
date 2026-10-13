import type { ReactNode } from "react";
import type { AppSlug } from "@/lib/apps";

/** One moment of a parent's day in the hero, and the app that answers it. */
export type HeroMoment = {
  app: AppSlug;
  time: string;
  /** Short topic under the app name. */
  tag: string;
  title: string;
  /** Second line of the title, in the app's colour. */
  title2: string;
  sub: string;
  head: string;
  text: string;
  guideLabel: string;
  /** The hero's main button colour for this moment. */
  btn: string;
  /** Background behind the phone screen while it loads in. */
  screenBg: string;
};

/** A moment with everything the hero needs from the app config, ready to hand to the client component. */
export type HeroPanel = HeroMoment & {
  name: string;
  deep: string;
  tile: string;
  live: boolean;
  ctaHref: string;
  ctaLabel: string;
  screen: ReactNode;
};

export const HERO_MOMENTS: HeroMoment[] = [
  {
    app: "tinyblooms",
    time: "10 am",
    tag: "Play ideas",
    title: "Five spare minutes?",
    title2: "Here’s what to play.",
    sub: "Morning playtime, sorted. TinyBlooms gives you one small, age-right idea for whatever time you have.",
    head: "One small idea for right now.",
    text: "Age-right play, gentle milestones and the memories you want to keep. No flashcards, no scores.",
    guideLabel: "Play ideas by age",
    btn: "#55915E",
    screenBg: "#FAF6EF",
  },
  {
    app: "tinymeals",
    time: "12 pm",
    tag: "First foods",
    title: "Starting solids?",
    title2: "One bite at a time.",
    sub: "Lunch without the guesswork. TinyMeals plans today’s meal for your baby’s age and stage.",
    head: "Today’s meal, worked out for you.",
    text: "One gentle recipe a day, matched to your baby’s age and texture stage, from first spoons to family meals.",
    guideLabel: "First foods by age",
    btn: "#5F6F4B",
    screenBg: "#FBF8F3",
  },
  {
    app: "tinylayers",
    time: "7 pm",
    tag: "What to wear",
    title: "Too warm? Too cold?",
    title2: "Now you’ll know.",
    sub: "Bedtime, dressed right. TinyLayers tells you exactly what to put on for tonight’s room.",
    head: "Warm enough, never too warm.",
    text: "Tell it the room temperature and it suggests what to put on, from bodysuit to tog, with a quick safe-sleep check.",
    guideLabel: "The baby TOG guide",
    btn: "#3D6DA8",
    screenBg: "#FEF8F3",
  },
  {
    app: "tinynaps",
    time: "2 am",
    tag: "Sleep & feeds",
    title: "Awake at 2 am?",
    title2: "Log the feed in one tap.",
    sub: "And at 2 am, TinyNaps shows when your baby last ate, slept and was changed. Logged in one tap.",
    head: "Everything since the last feed, at a glance.",
    text: "Sleep, feeds and diapers in one calm tracker. Log in one tap, even one-handed in the dark.",
    guideLabel: "Sleep and feeding guides",
    btn: "#232F48",
    screenBg: "#16202A",
  },
];
