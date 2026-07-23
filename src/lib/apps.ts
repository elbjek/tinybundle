export type TinyApp = {
  slug: string;
  name: string;
  card: string;
  cardClassName: string;
  cardTextClassName: string;
  cardLinkClassName: string;
};

export const apps: TinyApp[] = [
  {
    slug: "tinyhaven",
    name: "TinyHaven",
    card: "A late-night haven for when you just need to know you're not alone.",
    cardClassName: "bg-navy",
    cardTextClassName: "text-cream/75",
    cardLinkClassName: "text-butter",
  },
  {
    slug: "tinylayers",
    name: "TinyLayers",
    card: "Dress your baby right for sleep, weather and every situation.",
    cardClassName: "bg-powder",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
  },
  {
    slug: "tinyblooms",
    name: "TinyBlooms",
    card: "Age-based ideas and activities to help your baby bloom every day.",
    cardClassName: "bg-sage",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
  },
  {
    slug: "tinymeals",
    name: "TinyMeals",
    card: "Turn what you have into something good. No more food waste.",
    cardClassName: "bg-peach",
    cardTextClassName: "text-ink/70",
    cardLinkClassName: "text-amber-deep",
  },
];
