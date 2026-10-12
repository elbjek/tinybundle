import type { GuideApp, GuideContent, GuidePage } from "@/lib/guides/types";
import { BLOOMS_GUIDES } from "@/lib/guides/content/tinyblooms";
import { BUNDLE_GUIDES } from "@/lib/guides/content/tinybundle";
import { HAVEN_GUIDES } from "@/lib/guides/content/tinyhaven";
import { LAYERS_GUIDES } from "@/lib/guides/content/tinylayers";
import { MEALS_GUIDES } from "@/lib/guides/content/tinymeals";
import { GUIDES_MOVED_TO_BLOG } from "@/lib/guides/redirects";
import { getLayersArticle } from "@/lib/tinylayers/articles";
import {
  CHEST_CHECK,
  MEDICAL_DISCLAIMER,
  cToF,
  outdoorOutfitFor,
  sleepOutfitFor,
} from "@/lib/guides/outfits";

const DATE = "2026-07-24";

const LAYERS_CTA = {
  ctaApp: "tinylayers" as const,
  ctaLabel: "Open TinyLayers",
  ctaHref: "/tinylayers",
  ctaBlurb:
    "Not sure every day? TinyLayers calculates the right outfit from your baby’s age, the temperature, and whether they’re sleeping, in a stroller, carrier, or car seat.",
};

function layersPage(
  partial: Omit<
    GuidePage,
    | "app"
    | "ctaApp"
    | "ctaLabel"
    | "ctaHref"
    | "ctaBlurb"
    | "publishedAt"
    | "modifiedAt"
  > & { relatedSlugs?: string[] },
): GuidePage {
  return {
    app: "tinylayers",
    publishedAt: DATE,
    modifiedAt: DATE,
    ...LAYERS_CTA,
    ...partial,
    relatedSlugs: partial.relatedSlugs ?? [],
  };
}

/** Outdoor temperature bands — outfit changes meaningfully between these. */
export const OUTDOOR_BANDS = [
  {
    slug: "baby-clothes-10-14-degrees",
    min: 10,
    max: 14,
    chip: "12°C",
    label: "10–14°C",
  },
  {
    slug: "baby-clothes-15-18-degrees",
    min: 15,
    max: 18,
    chip: "15°C",
    label: "15–18°C",
  },
  {
    slug: "baby-clothes-19-21-degrees",
    min: 19,
    max: 21,
    chip: "20°C",
    label: "19–21°C",
  },
  {
    slug: "baby-clothes-22-23-degrees",
    min: 22,
    max: 23,
    chip: "22°C",
    label: "22–23°C",
  },
  {
    slug: "baby-clothes-24-26-degrees",
    min: 24,
    max: 26,
    chip: "24°C",
    label: "24–26°C",
  },
  {
    slug: "baby-clothes-27-30-degrees",
    min: 27,
    max: 30,
    chip: "30°C",
    label: "27–30°C",
  },
] as const;

/** Sleep room bands aligned to TOG steps. */
export const SLEEP_BANDS = [
  {
    slug: "baby-sleep-under-16c",
    min: 5,
    max: 15,
    chip: "<16°C",
    label: "under 16°C",
    mid: 14,
  },
  {
    slug: "baby-sleep-16-19c",
    min: 16,
    max: 19,
    chip: "18°C",
    label: "16–19°C",
    mid: 18,
  },
  {
    slug: "baby-sleep-20-23c",
    min: 20,
    max: 23,
    chip: "20°C",
    label: "20–23°C",
    mid: 21,
  },
  {
    slug: "baby-sleep-24-26c",
    min: 24,
    max: 26,
    chip: "24°C",
    label: "24–26°C",
    mid: 25,
  },
  {
    slug: "baby-sleep-27c-plus",
    min: 27,
    max: 32,
    chip: "27°C+",
    label: "27°C+",
    mid: 28,
  },
] as const;

/** Old per-degree URLs → live band slug (for redirects). */
export { GUIDE_REDIRECTS } from "@/lib/guides/redirects";

function outdoorBandPage(band: (typeof OUTDOOR_BANDS)[number]): GuidePage {
  const mid = Math.round((band.min + band.max) / 2);
  const cool = outdoorOutfitFor(band.min);
  const warm = outdoorOutfitFor(band.max);
  const midOutfit = outdoorOutfitFor(mid);
  const fMin = cToF(band.min);
  const fMax = cToF(band.max);

  return layersPage({
    sources: [],
    slug: band.slug,
    category: "weather",
    question: `What should my baby wear at ${band.label}?`,
    title: `What Should My Baby Wear at ${band.label} (${fMin}–${fMax}°F)?`,
    metaTitle: `Baby Clothes for ${band.label} — Outfit Guide`,
    description: `Plain-English outdoor outfit for dressing a baby around ${band.label} (${fMin}–${fMax}°F) — layers, when to lean cooler or warmer, and the chest check.`,
    quickAnswer: midOutfit.summary.replace(`${mid}°C`, `${band.label}`),
    bullets: midOutfit.layers,
    sections: [
      {
        heading: `Dressing for ${band.label} outside`,
        paragraphs: [
          `Parents don’t experience weather as a single degree — “about ${band.chip}” is how real mornings feel. This guide covers the ${band.label} band, where the outfit usually stays in the same family.`,
          midOutfit.summary.replace(`At ${mid}°C`, `Around ${band.label}`),
          `At the cool end (~${band.min}°C): ${cool.summary} At the warm end (~${band.max}°C): ${warm.summary}`,
          midOutfit.note ??
            "Stroller, carrier, and car seat change the setup slightly — TinyLayers has a mode for each.",
        ],
      },
      {
        heading: "The 10-minute chest check",
        paragraphs: [CHEST_CHECK],
      },
      {
        heading: "Common mistakes in this band",
        paragraphs: [
          band.max >= 27
            ? "Overdressing is the usual miss. Pack a spare layer instead of putting it on “just in case.” Under 6 months, prioritize shade over sunscreen."
            : band.max <= 14
              ? "In the cold, bulky coats under car-seat harnesses are unsafe — thin layers under the straps, blanket over after buckling."
              : "Matching adult jackets one-for-one often overheats babies. Start with the layers above, then adjust from the chest — not cold hands.",
          MEDICAL_DISCLAIMER,
        ],
      },
    ],
    faqs: [
      {
        q: `How many layers at ${band.label}?`,
        a: `Start with: ${midOutfit.layers.join("; ")}. Add or remove one thin layer after the chest check.`,
      },
      {
        q: `Is this band for sleep or outside?`,
        a: "This page is for outdoor weather. For crib sleep, use the sleep temperature guides — the room, not the forecast, decides.",
      },
    ],
    relatedSlugs: [
      ...OUTDOOR_BANDS.filter((b) => b.slug !== band.slug)
        .slice(0, 2)
        .map((b) => b.slug),
      "how-many-layers-should-baby-wear",
      "baby-stroller-clothing",
      "baby-carrier-clothing",
    ],
  });
}

function sleepBandPage(band: (typeof SLEEP_BANDS)[number]): GuidePage {
  const outfit = sleepOutfitFor(band.mid);
  const fMin = cToF(band.min);
  const fMax = cToF(band.max);

  return layersPage({
    sources: [],
    slug: band.slug,
    category: "sleep",
    question: `What should baby wear to sleep at ${band.label}?`,
    title: `What Should Baby Wear to Sleep at ${band.label}?`,
    metaTitle: `Baby Sleep Clothes ${band.label} — TOG & Layers`,
    description: `Sleepwear for a ${band.label} nursery (${fMin}–${fMax}°F) — TOG guidance, base layers, and the chest check.`,
    quickAnswer: outfit.summary
      .replace(`At ${band.mid}°C`, `Around ${band.label}`)
      .replace(`In a ${band.mid}°C room`, `In a ${band.label} room`),
    bullets: [
      `${outfit.weight} sleep sack (about ${outfit.tog} TOG)`,
      outfit.layers,
      "No hats indoors for sleep",
      "No loose blankets in the crib",
    ],
    sections: [
      {
        heading: `Sleepwear for a ${band.label} nursery`,
        paragraphs: [
          `Room temperature bands matter more than exact degrees. Within ${band.label}, the TOG family usually stays the same — then the chest check fine-tunes.`,
          outfit.summary
            .replace(`At ${band.mid}°C`, `Around ${band.label}`)
            .replace(`In a ${band.mid}°C room`, `In a ${band.label} room`),
          `Look for a sleep sack labeled around ${outfit.tog} TOG. Brands vary; cross-check their chart, then trust the chest.`,
        ],
      },
      {
        heading: "Confirm with the chest check",
        paragraphs: [CHEST_CHECK],
      },
      {
        heading: "Safe-sleep reminders",
        paragraphs: [
          "No loose blankets, pillows, or soft objects in the sleep space for the first year (AAP).",
          "No hats indoors during sleep. Stop swaddling at the first signs of rolling.",
          MEDICAL_DISCLAIMER,
        ],
      },
    ],
    faqs: [
      {
        q: `What TOG for ${band.label}?`,
        a: `Around ${outfit.tog} TOG (${outfit.weight}) is the usual starting point, with ${outfit.layers}. Confirm after settling.`,
      },
      {
        q: "Should baby wear socks to bed?",
        a: "Usually not if the sleepsuit or sack covers the feet. Judge warmth by the chest, not the toes.",
      },
    ],
    relatedSlugs: [
      ...SLEEP_BANDS.filter((b) => b.slug !== band.slug)
        .slice(0, 2)
        .map((b) => b.slug),
      "what-should-baby-wear-to-sleep",
      "tog-guide-for-baby-sleep",
      "baby-too-hot-or-cold-at-night",
    ],
  });
}

/** Outfit-by-age guides shown in the hub “By age” chips. */
export const AGE_GUIDES = [
  {
    slug: "what-should-newborn-wear-outside",
    chip: "What should a newborn wear outside?",
    label: "newborn",
    questionAge: "a newborn",
    titleAge: "a Newborn",
    metaAge: "Newborn",
    focus: "outside" as const,
    questionOverride: "What should a newborn wear outside?",
    titleOverride: "What Should a Newborn Wear Outside?",
    metaOverride: "What Should Newborn Wear Outside? Temperature Guide",
    descriptionOverride:
      "Newborn outdoor clothing by temperature — sun, cold, carriers, and why shade matters under 6 months.",
    note: "Under 6 months, prioritize shade and a brimmed hat outdoors. Soft peelable layers beat one bulky outfit.",
    bullets: [
      "Match the outdoor temperature band",
      "Shade + brimmed hat under 6 months",
      "Carrier = one layer lighter",
    ],
    faq: {
      q: "Does a newborn need a hat outside in summer?",
      a: "A brimmed hat for sun is useful. Skip hats for indoor sleep.",
    },
  },
  {
    slug: "what-should-1-month-old-wear",
    chip: "What should a 1-month-old wear?",
    label: "1-month-old",
    questionAge: "a 1-month-old",
    titleAge: "a 1-Month-Old",
    metaAge: "1-Month-Old",
    focus: "both" as const,
    note: "Warmth logic matches newborns. Favor thin layers you can peel, and check the chest — not cold hands.",
    bullets: [
      "Temperature band first",
      "Thin adjustable layers",
      "Chest check after 10 minutes",
    ],
    faq: {
      q: "Is dressing a 1-month-old different from a newborn?",
      a: "For warmth, no. Fit and how fussy they get with changes matter more than a new TOG chart.",
    },
  },
  {
    slug: "what-should-2-month-old-wear",
    chip: "What should a 2-month-old wear?",
    label: "2-month-old",
    questionAge: "a 2-month-old",
    titleAge: "a 2-Month-Old",
    metaAge: "2-Month-Old",
    focus: "both" as const,
    note: "Still temperature-first. Short outings and carriers are common — go one layer lighter in a carrier.",
    bullets: [
      "Use outdoor or sleep band for today",
      "Carrier = one layer lighter",
      "Avoid overdressing “just in case”",
    ],
    faq: {
      q: "Should I dress warmer because they’re still small?",
      a: "Dress for the air temperature and activity, then adjust from the chest. Size alone doesn’t mean extra layers.",
    },
  },
  {
    slug: "what-should-3-month-old-wear",
    chip: "What should a 3-month-old wear?",
    label: "3-month-old",
    questionAge: "a 3-month-old",
    titleAge: "a 3-Month-Old",
    metaAge: "3-Month-Old",
    focus: "both" as const,
    note: "Warmth logic doesn’t change — mobility does. Watch for rolling and stop swaddling at the first signs.",
    bullets: [
      "Use temperature bands, not season myths",
      "Stop swaddling when rolling starts",
      "Carrier = one layer lighter",
    ],
    faq: {
      q: "Is a 3-month-old dressed like a newborn?",
      a: "For warmth, yes — temperature-first. Fit and rolling safety matter more than a different TOG chart.",
    },
  },
  {
    slug: "what-should-6-month-old-wear",
    chip: "What should a 6-month-old wear?",
    label: "6-month-old",
    questionAge: "a 6-month-old",
    titleAge: "a 6-Month-Old",
    metaAge: "6-Month-Old",
    focus: "both" as const,
    note: "More movement means they can warm up on the floor. Still start from the temperature band; skip coats under car-seat harnesses.",
    bullets: [
      "Temperature band for outside and sleep",
      "Active floor time can mean one fewer layer",
      "No bulky coats under car-seat straps",
    ],
    faq: {
      q: "Can sunscreen replace shade at six months?",
      a: "Follow your clinician’s sunscreen guidance. Shade and cover still matter — don’t rely on lotion alone.",
    },
  },
  {
    slug: "what-should-9-month-old-wear",
    chip: "What should a 9-month-old wear?",
    label: "9-month-old",
    questionAge: "a 9-month-old",
    titleAge: "a 9-Month-Old",
    metaAge: "9-Month-Old",
    focus: "both" as const,
    note: "Crawling and cruising add heat. Prefer layers you can strip mid-park, and keep sleepwear TOG matched to the room.",
    bullets: [
      "Peelable layers for active days",
      "Sleep = room temp, not outdoor forecast",
      "Chest check still beats cold hands",
    ],
    faq: {
      q: "Do mobile babies need fewer layers?",
      a: "Often one fewer once they’re moving hard — but start from the weather, then adjust after 10 minutes.",
    },
  },
  {
    slug: "what-should-12-month-old-wear",
    chip: "What should a 12-month-old wear?",
    label: "12-month-old",
    questionAge: "a 12-month-old",
    titleAge: "a 12-Month-Old",
    metaAge: "12-Month-Old",
    focus: "both" as const,
    note: "Closer to toddler clothing habits, but the physics is the same: match air temperature, avoid harness bulk, check the chest.",
    bullets: [
      "Dress for air temp + activity",
      "Thin layers under harnesses",
      "Sleepwear from room temperature",
    ],
    faq: {
      q: "Can they wear the same as me outside?",
      a: "Similar weight, not identical. Adults often run warmer when walking; babies in strollers need the stroller-mode check.",
    },
  },
] as const;

function agePages(): GuidePage[] {
  return AGE_GUIDES.map((age, index) => {
    const prev = AGE_GUIDES[index - 1];
    const next = AGE_GUIDES[index + 1];
    const related = [
      prev?.slug,
      next?.slug,
      "baby-clothes-19-21-degrees",
      age.focus === "outside"
        ? "how-many-layers-should-baby-wear"
        : "what-should-baby-wear-to-sleep",
    ].filter(Boolean) as string[];

    const hasOverride = "questionOverride" in age && age.questionOverride;

    return layersPage({
      sources: [],
      slug: age.slug,
      category: "age",
      question: hasOverride
        ? age.questionOverride!
        : `What should ${age.questionAge} wear?`,
      title: hasOverride
        ? age.titleOverride!
        : `What Should ${age.titleAge} Wear?`,
      metaTitle: hasOverride
        ? age.metaOverride!
        : `What Should ${age.metaAge} Wear? Temperature Guide`,
      description: hasOverride
        ? age.descriptionOverride!
        : `Dressing ${age.questionAge} for sleep and outside — temperature bands, layers, and the chest check.`,
      quickAnswer: `Temperature still decides. Pick today’s outdoor or sleep band, then adjust. ${age.note}`,
      bullets: [...age.bullets],
      sections: [
        {
          heading: `${age.chip}: temperature first`,
          paragraphs: [
            age.note,
            "Hands and feet run cool — check the chest or back of the neck after about 10 minutes.",
            MEDICAL_DISCLAIMER,
          ],
        },
        {
          heading: "Where to go next",
          paragraphs: [
            "For a specific outdoor reading, open the matching temperature band. For crib sleep, use the sleep room guides — the room, not the forecast, decides.",
          ],
        },
      ],
      faqs: [age.faq],
      relatedSlugs: related,
    });
  });
}

/** Call to action and section link for each app's guides. */
const APP_CTA: Record<
  GuideApp,
  Pick<GuidePage, "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb">
> = {
  tinylayers: LAYERS_CTA,
  tinymeals: {
    ctaApp: "tinymeals",
    ctaLabel: "See TinyMeals",
    ctaHref: "/tinymeals",
    ctaBlurb:
      "One gentle meal a day for your baby’s age and stage, with a 10-week first foods plan and allergen tracking.",
  },
  tinyblooms: {
    ctaApp: "tinyblooms",
    ctaLabel: "See TinyBlooms",
    ctaHref: "/tinyblooms",
    ctaBlurb:
      "One age-right play idea at a time, for the awake windows you actually have.",
  },
  tinyhaven: {
    ctaApp: "tinyhaven",
    ctaLabel: "Open TinyHaven",
    ctaHref: "/tinyhaven",
    ctaBlurb:
      "Soft company for the night feeds: see who else is awake, with no profiles and no feed.",
  },
  tinybundle: {
    ctaApp: "tinybundle",
    ctaLabel: "Explore TinyBundle",
    ctaHref: "/",
    ctaBlurb: "Four calm apps for the questions new parents actually ask.",
  },
};

function fromContent(app: GuideApp, guides: GuideContent[]): GuidePage[] {
  return guides.map((guide) => ({
    app,
    ...APP_CTA[app],
    ...guide,
    publishedAt: DATE,
    modifiedAt: guide.modifiedAt ?? DATE,
  }));
}

export const guidePages: GuidePage[] = [
  ...OUTDOOR_BANDS.map(outdoorBandPage),
  ...SLEEP_BANDS.map(sleepBandPage),
  ...agePages(),
  ...fromContent("tinylayers", LAYERS_GUIDES),
  ...fromContent("tinymeals", MEALS_GUIDES),
  ...fromContent("tinyblooms", BLOOMS_GUIDES),
  ...fromContent("tinyhaven", HAVEN_GUIDES),
  ...fromContent("tinybundle", BUNDLE_GUIDES),
];

export function getGuide(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}

/** A related slug as a link: a live guide, or the blog post that replaced a removed guide. */
export function getRelatedLink(
  slug: string,
): { href: string; label: string } | undefined {
  const guide = getGuide(slug);
  if (guide) return { href: `/guides/${guide.slug}`, label: guide.question };
  const post = getLayersArticle(GUIDES_MOVED_TO_BLOG[slug] ?? "");
  return post
    ? { href: `/tinylayers/blog/${post.slug}`, label: post.title }
    : undefined;
}

export function getGuideSlugs(): string[] {
  return guidePages.map((p) => p.slug);
}

export function getGuidesByApp(app: GuidePage["app"]): GuidePage[] {
  return guidePages.filter((p) => p.app === app);
}

export function getGuidesByCategory(
  category: GuidePage["category"],
): GuidePage[] {
  return guidePages.filter((p) => p.category === category);
}
