export type TinyApp = {
  slug: string;
  name: string;
  card: string;
  cardClassName: string;
  cardTextClassName: string;
  cardLinkClassName: string;
  tagline: string;
  description: string;
  comingSoon?: boolean;
  features: { title: string; text: string }[];
  theme: {
    hero: string;
    heroHeading: string;
    heroText: string;
    accent: string;
  };
};

export const apps: TinyApp[] = [
  {
    slug: "tinyhaven",
    name: "TinyHaven",
    card: "A late-night haven for when you just need to know you're not alone.",
    cardClassName: "bg-navy",
    cardTextClassName: "text-cream/75",
    cardLinkClassName: "text-butter",
    tagline: "You're not alone tonight.",
    description:
      "A calm late-night check-in for parents — anonymous presence, quiet reassurance, and soft company when the house is asleep and you're wide awake.",
    features: [
      {
        title: "Night-friendly by design",
        text: "A soft, dark interface that keeps the room calm and your eyes rested.",
      },
      {
        title: "Gentle reassurance",
        text: "Real words from real parents who have sat in the same dark room.",
      },
      {
        title: "Soft sounds",
        text: "Lullabies, white noise and quiet stories to carry you both through.",
      },
    ],
    theme: {
      hero: "bg-navy",
      heroHeading: "text-cream",
      heroText: "text-cream/70",
      accent: "text-butter",
    },
  },
  {
    slug: "tinylayers",
    name: "TinyLayers",
    card: "Dress your baby right for sleep, weather and every situation.",
    cardClassName: "bg-powder",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
    tagline: "Dressed right, every time.",
    description:
      "Take the guesswork out of dressing your baby — for sleep, for weather and for every situation in between.",
    features: [
      {
        title: "Weather-aware outfits",
        text: "Suggestions based on the temperature outside and inside.",
      },
      {
        title: "Sleep-safe layers",
        text: "TOG-based sleepwear guidance for safer, comfier nights.",
      },
      {
        title: "Every situation",
        text: "From car rides to first snow — know exactly what to put on.",
      },
    ],
    theme: {
      hero: "bg-powder",
      heroHeading: "text-ink",
      heroText: "text-ink/70",
      accent: "text-amber-deep",
    },
  },
  {
    slug: "tinyblooms",
    name: "TinyBlooms",
    card: "Age-based ideas and activities to help your baby bloom every day.",
    cardClassName: "bg-sage",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
    comingSoon: true,
    tagline: "One lovely thing to do with baby.",
    description:
      "Age-based ideas and tiny activities that fit real days — one idea at a time, no milestones, no guilt.",
    features: [
      {
        title: "Made for their age",
        text: "Ideas that match exactly where your baby is right now.",
      },
      {
        title: "Five-minute activities",
        text: "Small, doable play that fits between naps and feeds.",
      },
      {
        title: "Grow together",
        text: "Gentle guidance that turns everyday routines into discovery.",
      },
    ],
    theme: {
      hero: "bg-sage",
      heroHeading: "text-ink",
      heroText: "text-ink/70",
      accent: "text-amber-deep",
    },
  },
  {
    slug: "tinymeals",
    name: "TinyMeals",
    card: "A calm cookbook for introducing solids. Stage-right recipes written for babies.",
    cardClassName: "bg-peach",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
    comingSoon: true,
    tagline: "What can I safely make for baby today?",
    description:
      "A calm, evidence-based cookbook for introducing solids. Simple, developmentally appropriate recipes written for babies, not adapted from adult meals.",
    features: [
      {
        title: "Stage-right recipes",
        text: "Ideas matched to where your baby is with solids.",
      },
      {
        title: "Written for babies",
        text: "Safety, texture, and nutrition built in from the start.",
      },
      {
        title: "Real kitchen cooking",
        text: "Ingredients you can actually buy and prepare at home.",
      },
    ],
    theme: {
      hero: "bg-peach",
      heroHeading: "text-ink",
      heroText: "text-ink/70",
      accent: "text-amber-deep",
    },
  },
];

export function getApp(slug: string): TinyApp | undefined {
  return apps.find((app) => app.slug === slug);
}
