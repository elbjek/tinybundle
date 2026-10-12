import type { GuideApp } from "@/lib/guides/types";

export type MomentApp = Exclude<GuideApp, "tinybundle">;

/** One moment of a parent's day, the app made for it, and how the homepage paints it. */
export type Moment = {
  app: MomentApp;
  name: string;
  time: string;
  label: string;
  /** Hero headline, two lines. */
  title: string;
  title2: string;
  /** Hero line under the headline. */
  line: string;
  /** Hero tile. */
  tileTime: string;
  tileTitle: string;
  tileSub: string;
  night: boolean;
  /** Page background behind the hero. */
  heroBg: string;
  /** Selected tile background, and the soft blob colour. */
  tile: string;
  tint: string;
  /** Accent: buttons, the active progress bar, the headline's second line. */
  main: string;
  mainGlow: string;
  btnInk: string;
  /** Text accent on light backgrounds, and the demo panel colour. */
  soft: string;
  panel: string;
};

export const MOMENTS: Moment[] = [
  {
    app: "tinyblooms",
    name: "TinyBlooms",
    time: "10 am",
    label: "Playtime",
    title: "Five spare minutes?",
    title2: "Here’s what to play.",
    line: "Morning playtime, sorted. TinyBlooms gives you one small, age-right idea for whatever time you have.",
    tileTime: "10:30 am",
    tileTitle: "Everyday play",
    tileSub: "Mirror hello, 7 minutes.",
    night: false,
    heroBg: "#EAF1E5",
    tile: "#E3EBDC",
    tint: "#C9DCC3",
    main: "#55915E",
    mainGlow: "rgba(85,145,94,0.3)",
    btnInk: "#FFFFFF",
    soft: "#3F6E47",
    panel: "#E3EBDC",
  },
  {
    app: "tinymeals",
    name: "TinyMeals",
    time: "12 pm",
    label: "Lunchtime",
    title: "Starting solids?",
    title2: "One bite at a time.",
    line: "Lunch without the guesswork. TinyMeals plans today’s meal for your baby’s age and stage.",
    tileTime: "12:00 pm",
    tileTitle: "First foods",
    tileSub: "Courgette & carrot fritters.",
    night: false,
    heroBg: "#FCF0E1",
    tile: "#FBEEDC",
    tint: "#F6D9A8",
    main: "#D17A2A",
    mainGlow: "rgba(209,122,42,0.3)",
    btnInk: "#FFFFFF",
    soft: "#A0521A",
    panel: "#FBEEDC",
  },
  {
    app: "tinylayers",
    name: "TinyLayers",
    time: "7 pm",
    label: "Bedtime layers",
    title: "Too warm? Too cold?",
    title2: "Now you’ll know.",
    line: "Bedtime, dressed right. TinyLayers tells you what to put on for tonight’s room.",
    tileTime: "7:00 pm",
    tileTitle: "Right layers",
    tileSub: "2.5 TOG for an 18°C room.",
    night: false,
    heroBg: "#E6EEF7",
    tile: "#DCE6F2",
    tint: "#C6D8EC",
    main: "#3D6DA8",
    mainGlow: "rgba(61,109,168,0.3)",
    btnInk: "#FFFFFF",
    soft: "#2F5B8A",
    panel: "#DCE6F2",
  },
  {
    app: "tinynaps",
    name: "TinyNaps",
    time: "2 am",
    label: "Night feeds",
    title: "Awake at 2 am?",
    title2: "Log it with one thumb.",
    line: "And at 2 am, TinyNaps logs the feed in one tap, so in the morning you can see how the night went.",
    tileTime: "2:14 am",
    tileTitle: "Night feeds",
    tileSub: "Left side, 14 min. Logged.",
    night: true,
    heroBg: "#232038",
    tile: "#2E2A47",
    tint: "#3D3760",
    main: "#C9C0E6",
    mainGlow: "rgba(201,192,230,0.35)",
    btnInk: "#232038",
    soft: "#6F64A8",
    panel: "#EBE6F5",
  },
];
