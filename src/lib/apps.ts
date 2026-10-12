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
    slug: "tinynaps",
    name: "TinyNaps",
    card: "Sleep, feeds, nappies and health in one calm tracker you can use one-handed at 3am.",
    cardClassName: "bg-naps-lavender",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-naps-lavender-deep",
    comingSoon: true,
    tagline: "All the little things, in one place.",
    description:
      "A calm baby care tracker for sleep, feeds, nappies, growth and health. See when your baby last ate, slept or had a change, at a glance.",
    features: [
      {
        title: "One-tap logging",
        text: "Sleep timers, feeds and nappies in a tap, with big buttons for one-handed use.",
      },
      {
        title: "Today at a glance",
        text: "Last sleep, last feed, nappies and total sleep on one calm dashboard.",
      },
      {
        title: "Shared with your people",
        text: "Partners and grandparents log to the same timeline, coming soon after launch.",
      },
    ],
    theme: {
      hero: "bg-naps-lavender",
      heroHeading: "text-ink",
      heroText: "text-ink/70",
      accent: "text-naps-lavender-deep",
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
    card: "Play ideas, milestones and memories for your child's first five years.",
    cardClassName: "bg-sage",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
    comingSoon: true,
    tagline: "Little moments, big discoveries.",
    description:
      "Age-right activities for babies and young children, gentle milestones with no scores, and a memory journal for the moments you want to keep.",
    features: [
      {
        title: "What to do today",
        text: "Activity ideas matched to your child's age and what they enjoy, with clear steps and safety notes.",
      },
      {
        title: "Gentle milestones",
        text: "Record first smiles and first steps, with no scores and no behind-schedule warnings.",
      },
      {
        title: "Memories that last",
        text: "A personal timeline of photos, first words and funny moments.",
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
