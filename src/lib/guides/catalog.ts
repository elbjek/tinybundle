import type { GuidePage } from "@/lib/guides/types";
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
  { slug: "baby-clothes-10-14-degrees", min: 10, max: 14, chip: "12°C", label: "10–14°C" },
  { slug: "baby-clothes-15-18-degrees", min: 15, max: 18, chip: "15°C", label: "15–18°C" },
  { slug: "baby-clothes-19-21-degrees", min: 19, max: 21, chip: "20°C", label: "19–21°C" },
  { slug: "baby-clothes-22-23-degrees", min: 22, max: 23, chip: "22°C", label: "22–23°C" },
  { slug: "baby-clothes-24-26-degrees", min: 24, max: 26, chip: "24°C", label: "24–26°C" },
  { slug: "baby-clothes-27-30-degrees", min: 27, max: 30, chip: "30°C", label: "27–30°C" },
] as const;

/** Sleep room bands aligned to TOG steps. */
export const SLEEP_BANDS = [
  { slug: "baby-sleep-under-16c", min: 5, max: 15, chip: "<16°C", label: "under 16°C", mid: 14 },
  { slug: "baby-sleep-16-19c", min: 16, max: 19, chip: "18°C", label: "16–19°C", mid: 18 },
  { slug: "baby-sleep-20-23c", min: 20, max: 23, chip: "20°C", label: "20–23°C", mid: 21 },
  { slug: "baby-sleep-24-26c", min: 24, max: 26, chip: "24°C", label: "24–26°C", mid: 25 },
  { slug: "baby-sleep-27c-plus", min: 27, max: 32, chip: "27°C+", label: "27°C+", mid: 28 },
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

function situationPages(): GuidePage[] {
  return [
    layersPage({
      slug: "what-should-baby-wear-to-sleep",
      category: "sleep",
      question: "What should my baby wear to sleep?",
      title: "What Should My Baby Wear to Sleep Tonight?",
      metaTitle: "What Should Baby Wear to Sleep? Room Temp Chart",
      description:
        "Dress your baby for the room temperature, not the season. Plain-English TOG and layer guidance, plus the chest check.",
      quickAnswer:
        "Dress for the room temperature. In a typical 20–22°C nursery, that’s usually a bodysuit under a 1.0 TOG sleep sack — then confirm with the chest check.",
      bullets: [
        "Room temperature decides — not the calendar",
        "Use a wearable sleep sack, not loose blankets",
        "Chest check 10–15 minutes after settling",
      ],
      sections: [
        {
          heading: "The room decides, not the forecast",
          paragraphs: [
            "Babies sleep in a room, not in the weather app. Put a thermometer near the crib and dress for that number — then open the sleep band that matches.",
            CHEST_CHECK,
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Should baby wear a hat to sleep?",
          a: "No. Hats indoors during sleep can raise overheating risk.",
        },
      ],
      relatedSlugs: [
        "baby-sleep-20-23c",
        "baby-sleep-24-26c",
        "tog-guide-for-baby-sleep",
        "best-room-temperature-for-baby-sleep",
      ],
    }),
    layersPage({
      slug: "tog-guide-for-baby-sleep",
      category: "sleep",
      question: "What TOG sleep sack should I use?",
      title: "Baby Sleep Sack TOG Guide (Plain English)",
      metaTitle: "TOG Guide for Baby Sleep Sacks — By Room Temperature",
      description:
        "What TOG means, which rating to start with by room temperature, and why the chest check beats memorizing a chart.",
      quickAnswer:
        "TOG measures sleep-sack warmth. Higher is warmer. Match TOG to room temperature first, then confirm on the chest.",
      bullets: [
        "0.2–0.5 TOG: warm rooms (~24°C+)",
        "1.0 TOG: typical nurseries (~20–23°C)",
        "2.5 TOG: cooler rooms (~16–19°C)",
      ],
      sections: [
        {
          heading: "TOG without the jargon",
          paragraphs: [
            "TOG is a warmth label. TinyLayers leads with plain-English layers, then shows TOG as a helper. It never recommends 4.0 TOG.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Is a higher TOG always safer in winter?",
          a: "No. Overheating is the documented risk. When torn, go lighter and re-check the chest.",
        },
      ],
      relatedSlugs: ["what-should-baby-wear-to-sleep", "baby-sleep-20-23c", "baby-sleep-16-19c"],
    }),
    layersPage({
      slug: "best-room-temperature-for-baby-sleep",
      category: "sleep",
      question: "What’s the best room temperature for a sleeping baby?",
      title: "Best Room Temperature for a Sleeping Baby",
      metaTitle: "Best Baby Room Temperature for Sleep (16–20°C Guide)",
      description:
        "Why 16–20°C keeps coming up, what to do when you can’t control the nursery, and how layers fix an imperfect thermostat.",
      quickAnswer:
        "UK safe-sleep bodies often cite about 16–20°C. Slightly warmer is workable if you dress lighter.",
      bullets: [
        "Aim comfortably cool, not toasty",
        "If you can’t move the thermostat, move the layers",
        "Chest check settles the debate",
      ],
      sections: [
        {
          heading: "Where 16–20°C comes from",
          paragraphs: [
            "The Lullaby Trust and NHS name a comfortably cool range tied to reducing overheating risk. The AAP emphasizes avoiding overheating rather than one magic number.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Is 22°C too warm for baby sleep?",
          a: "Workable with lighter layers — often a 1.0 TOG sack with a short-sleeve bodysuit. Confirm with the chest check.",
        },
      ],
      relatedSlugs: ["what-should-baby-wear-to-sleep", "baby-sleep-20-23c", "baby-too-hot-or-cold-at-night"],
    }),
    layersPage({
      slug: "baby-too-hot-or-cold-at-night",
      category: "sleep",
      question: "Is my baby too hot or too cold?",
      title: "Is My Baby Too Hot or Too Cold at Night?",
      metaTitle: "Baby Too Hot or Too Cold? Chest Check Signs",
      description:
        "How to tell if your baby is overheating or underdressed — the chest check, and why cold hands don’t mean add a blanket.",
      quickAnswer:
        "Feel the chest or back of the neck: warm and dry is right; sweaty means remove a layer; cool chest means add one. Cold hands alone are normal.",
      bullets: [
        "Chest / neck = honest reading",
        "Sweat or flushed cheeks → too warm",
        "Cool chest → add a layer",
      ],
      sections: [
        {
          heading: "Signs that actually matter",
          paragraphs: [CHEST_CHECK, MEDICAL_DISCLAIMER],
        },
      ],
      faqs: [
        {
          q: "My baby’s hands are cold — should I add a layer?",
          a: "Not based on hands alone. Check the chest. If warm and dry, you’re fine.",
        },
      ],
      relatedSlugs: ["what-should-baby-wear-to-sleep", "best-room-temperature-for-baby-sleep", "baby-sleep-20-23c"],
    }),
    layersPage({
      slug: "how-many-layers-should-baby-wear",
      category: "weather",
      question: "How many layers should a baby wear?",
      title: "How Many Layers Should a Baby Wear?",
      metaTitle: "How Many Layers Should Baby Wear? Temperature Guide",
      description:
        "A practical layering rule for babies by temperature — outdoors, sleep, stroller, and carrier — without overbundling.",
      quickAnswer:
        "There isn’t one fixed number. Match layers to temperature and situation, then adjust from the chest. In a carrier, dress one layer lighter than the stroller.",
      bullets: [
        "Temperature + situation first",
        "Carrier = one layer lighter than stroller",
        "Car seat = thin layers under harness",
      ],
      sections: [
        {
          heading: "Layers are a starting point",
          paragraphs: [
            "Use a temperature band for a starting outfit, then peel or add one thin layer based on the chest.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Should babies wear one more layer than adults?",
          a: "It’s a rough folk rule, not a law. Verify with the chest, especially in warm rooms and carriers.",
        },
      ],
      relatedSlugs: [
        "baby-clothes-19-21-degrees",
        "baby-clothes-15-18-degrees",
        "baby-carrier-clothing",
        "baby-stroller-clothing",
      ],
    }),
    layersPage({
      slug: "baby-stroller-clothing",
      category: "situation",
      question: "What should my baby wear in the stroller?",
      title: "What Should Baby Wear in the Stroller?",
      metaTitle: "Baby Stroller Clothing Guide — Layers & Shade",
      description:
        "How to dress a baby for stroller walks — blankets, shade, and why draped covers trap heat.",
      quickAnswer:
        "Dress for the outdoor temperature, then add a stroller blanket in cooler weather. Never drape fabric over the stroller for shade — it traps heat.",
      bullets: [
        "Start with outdoor temperature layers",
        "Blanket below the chest, away from the face",
        "Canopy/parasol for shade — not draped fabric",
      ],
      sections: [
        {
          heading: "Stroller-specific risks",
          paragraphs: [
            "Strollers create a microclimate. In heat, draped covers trap warmth. In cold, a blanket helps if clear of the face.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Can I cover the stroller with a muslin for sun?",
          a: "Avoid fully draping fabric. Use the canopy or a clip-on parasol so air still moves.",
        },
      ],
      relatedSlugs: [
        "baby-carrier-clothing",
        "baby-car-seat-clothing",
        "baby-clothes-19-21-degrees",
        "baby-clothes-15-18-degrees",
      ],
    }),
    layersPage({
      slug: "baby-carrier-clothing",
      category: "situation",
      question: "What should my baby wear in a carrier?",
      title: "What Should Baby Wear in a Baby Carrier?",
      metaTitle: "Baby Carrier Clothing — Dress One Layer Lighter",
      description:
        "Carrier clothing: your body heat counts as a layer. Dress lighter than for the stroller.",
      quickAnswer:
        "Dress one layer lighter than for the stroller — your body heat and the carrier fabric count. Check the chest often.",
      bullets: [
        "One layer lighter than stroller outfits",
        "Face uncovered, airways clear",
        "Take breaks in heat",
      ],
      sections: [
        {
          heading: "Shared warmth changes the math",
          paragraphs: [
            "The outfit that felt right in the stroller is often one layer too much on your chest.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Can baby ride under my coat?",
          a: "Keep the face free, allow airflow, and check often.",
        },
      ],
      relatedSlugs: ["baby-stroller-clothing", "winter-baby-carrier-clothes", "baby-clothes-15-18-degrees"],
    }),
    layersPage({
      slug: "winter-baby-carrier-clothes",
      category: "situation",
      question: "What should baby wear in a carrier in winter?",
      title: "Winter Baby Carrier Clothes",
      metaTitle: "Winter Baby Carrier Outfit — Safe Layering",
      description: "Winter babywearing without overheating — base layers, parent coats, frequent checks.",
      quickAnswer:
        "Warm base layers on baby, your coat as the shared outer shell when appropriate, face clear, checks often.",
      bullets: [
        "Warm base on baby, not a puffy under the carrier",
        "Parent coat can act as shared outer layer",
        "Face and airway always clear",
      ],
      sections: [
        {
          heading: "Winter carrier without the sweat",
          paragraphs: [
            "Thin warm layers beat one bulky snowsuit inside the carrier.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Snowsuit in the carrier?",
          a: "Usually too much under a winter coat. Prefer layered clothing you can vent.",
        },
      ],
      relatedSlugs: ["baby-carrier-clothing", "baby-car-seat-clothing", "baby-clothes-10-14-degrees"],
    }),
    layersPage({
      slug: "baby-car-seat-clothing",
      category: "situation",
      question: "What should my baby wear in a car seat?",
      title: "What Should Baby Wear in a Car Seat?",
      metaTitle: "Baby Car Seat Clothing — No Bulky Coats Under Straps",
      description:
        "Thin layers under the harness; never bulky coats under straps; blanket over after buckling.",
      quickAnswer:
        "Thin, snug layers under the harness. Never put bulky coats under car-seat straps. Buckle first, then add warmth over the straps.",
      bullets: [
        "Thin layers under harness",
        "No puffy coats under straps",
        "Blanket over straps after buckling",
      ],
      sections: [
        {
          heading: "Why the coat rule exists",
          paragraphs: [
            "Puffy coats compress in a crash and leave harness slack. Warmth belongs over the buckled straps.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "What about winter car seats?",
          a: "Thin warm layers, buckle snugly, then add a coat or blanket on top.",
        },
      ],
      relatedSlugs: ["winter-car-seat-coat-rule", "baby-stroller-clothing", "baby-clothes-10-14-degrees"],
    }),
    layersPage({
      slug: "winter-car-seat-coat-rule",
      category: "situation",
      question: "Can my baby wear a coat in the car seat?",
      title: "Winter Car Seat Coat Rule (Why Puffy Coats Don’t Mix)",
      metaTitle: "Baby Coat in Car Seat? Why Bulky Coats Are Unsafe",
      description: "Why puffy coats and car seats don’t mix, and what to do instead.",
      quickAnswer:
        "Don’t put bulky coats under the harness. Thin layers under, warmth over the straps after buckling.",
      bullets: [
        "Bulk under straps = dangerous slack",
        "Thin layers under harness",
        "Coat or blanket over after buckling",
      ],
      sections: [
        {
          heading: "The safer winter routine",
          paragraphs: [
            "Pre-warm the car if you can. Dress in thin layers, buckle, then cover.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Are thin puffer jackets okay under straps?",
          a: "If it’s bulky/compressible, keep it off the harness path. When unsure, put warmth on top after buckling.",
        },
      ],
      relatedSlugs: ["baby-car-seat-clothing", "baby-clothes-10-14-degrees", "winter-baby-carrier-clothes"],
    }),
    layersPage({
      slug: "what-should-newborn-wear-outside",
      category: "age",
      question: "What should a newborn wear outside?",
      title: "What Should a Newborn Wear Outside?",
      metaTitle: "What Should Newborn Wear Outside? Temperature Guide",
      description:
        "Newborn outdoor clothing by temperature — sun, cold, carriers, and why shade matters under 6 months.",
      quickAnswer:
        "Dress for the outdoor temperature with soft peelable layers. Under 6 months, prioritize shade and a brimmed hat. In a carrier, go one layer lighter.",
      bullets: [
        "Match outdoor temperature band",
        "Shade + brimmed hat under 6 months",
        "Carrier = one layer lighter",
      ],
      sections: [
        {
          heading: "Newborns and the weather",
          paragraphs: [
            "Start from a temperature band, favor thin adjustable layers, and check the chest.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Does a newborn need a hat outside in summer?",
          a: "A brimmed hat for sun is useful. Skip hats for indoor sleep.",
        },
      ],
      relatedSlugs: [
        "baby-clothes-19-21-degrees",
        "baby-clothes-15-18-degrees",
        "how-many-layers-should-baby-wear",
      ],
    }),
    layersPage({
      slug: "what-should-3-month-old-wear",
      category: "age",
      question: "What should a 3-month-old wear?",
      title: "What Should a 3-Month-Old Wear?",
      metaTitle: "What Should a 3-Month-Old Wear? Temperature & Sleep",
      description:
        "Dressing a 3-month-old for sleep and outside — temperature bands, rolling/swaddle notes, and the chest check.",
      quickAnswer:
        "Temperature still decides. Use the outdoor or sleep band for today’s number. At three months, watch for rolling — stop swaddling at the first signs.",
      bullets: [
        "Use temperature bands, not season myths",
        "Stop swaddling when rolling starts",
        "Carrier = one layer lighter",
      ],
      sections: [
        {
          heading: "Three months, same physics",
          paragraphs: [
            "Warmth logic doesn’t change at three months — mobility and swaddle rules do. Pick the temperature band, then confirm on the chest.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Is a 3-month-old dressed like a newborn?",
          a: "For warmth, yes — temperature-first. Fit and rolling safety matter more than a different TOG chart.",
        },
      ],
      relatedSlugs: [
        "what-should-newborn-wear-outside",
        "baby-clothes-19-21-degrees",
        "what-should-baby-wear-to-sleep",
      ],
    }),
  ];
}

function otherAppSeeds(): GuidePage[] {
  const seed = (
    app: GuidePage["app"],
    href: string,
    label: string,
    blurb: string,
    p: Omit<
      GuidePage,
      "app" | "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb" | "publishedAt" | "modifiedAt"
    >,
  ): GuidePage => ({
    app,
    publishedAt: DATE,
    modifiedAt: DATE,
    ctaApp: app,
    ctaLabel: label,
    ctaHref: href,
    ctaBlurb: blurb,
    ...p,
    relatedSlugs: p.relatedSlugs ?? [],
  });

  return [
    seed(
      "tinyblooms",
      "/tinyblooms",
      "See TinyBlooms",
      "Tired of scrolling activity lists? TinyBlooms gives one age-right idea at a time — coming soon.",
      {
        slug: "what-do-i-do-with-my-baby",
        category: "development",
        question: "What do I do with my baby?",
        title: "What Do I Do With My Baby All Day?",
        metaTitle: "What Do I Do With My Baby? Easy Age-Right Ideas",
        description:
          "When your baby is awake and you’re out of ideas — simple activities without milestone pressure.",
        quickAnswer: "You don’t need a curriculum. One small, age-right idea is enough.",
        bullets: ["One idea beats a Pinterest binge", "Match age and energy", "Ordinary moments count"],
        sections: [
          {
            heading: "The 2pm panic is normal",
            paragraphs: ["Pick one tiny thing, do it, and let the rest of the day be ordinary."],
          },
        ],
        faqs: [],
        relatedSlugs: ["activities-for-newborn", "tummy-time-ideas"],
      },
    ),
    seed(
      "tinyblooms",
      "/tinyblooms",
      "See TinyBlooms",
      "One age-right idea at a time — coming soon from TinyBundle.",
      {
        slug: "activities-for-newborn",
        category: "development",
        question: "What are good activities for a newborn?",
        title: "Activities for a Newborn (Simple & Calm)",
        metaTitle: "Activities for Newborn — Gentle Ideas",
        description: "Gentle newborn play — face time, soft sounds, tiny tummy time.",
        quickAnswer: "Talk face-to-face, sing, short supervised tummy time, follow sleepy cues.",
        bullets: ["Face-to-face talk and song", "Short supervised tummy time", "Follow cues"],
        sections: [
          {
            heading: "Newborn days are supposed to be quiet",
            paragraphs: ["Stimulation is often just your voice and face."],
          },
        ],
        faqs: [],
        relatedSlugs: ["what-do-i-do-with-my-baby", "tummy-time-ideas"],
      },
    ),
    seed(
      "tinyblooms",
      "/tinyblooms",
      "See TinyBlooms",
      "One age-right idea at a time — coming soon from TinyBundle.",
      {
        slug: "tummy-time-ideas",
        category: "development",
        question: "What are tummy time ideas?",
        title: "Tummy Time Ideas That Don’t Feel Like a Chore",
        metaTitle: "Tummy Time Ideas — Short & Doable",
        description: "Short tummy time ideas — chest-to-chest, towel rolls, tiny sessions.",
        quickAnswer: "Start tiny: on your chest, across your lap, or on a mat with a face nearby.",
        bullets: ["Chest-to-chest counts", "Short sessions, often", "Get on their eye level"],
        sections: [
          {
            heading: "Make it relational",
            paragraphs: ["Tummy time works better as connection, not a timer."],
          },
        ],
        faqs: [],
        relatedSlugs: ["activities-for-newborn", "what-do-i-do-with-my-baby"],
      },
    ),
    seed(
      "tinyhaven",
      "/tinyhaven",
      "Open TinyHaven",
      "Awake and lonely at 2am? TinyHaven shows you’re not the only one — anonymous check-ins, no profiles.",
      {
        slug: "am-i-the-only-one-awake",
        category: "loneliness",
        question: "Am I the only one awake with my baby?",
        title: "Am I the Only One Awake?",
        metaTitle: "Am I the Only One Awake With Baby?",
        description: "Night feeds feel isolating. You’re not the only parent awake.",
        quickAnswer: "No. Night waking is common. Sometimes you just need proof someone else is up too.",
        bullets: ["Night loneliness is common", "Quiet company > advice"],
        sections: [
          {
            heading: "The hardest hour",
            paragraphs: [
              "TinyHaven exists for that exact feeling — anonymous presence, not another timeline.",
            ],
          },
        ],
        faqs: [],
        relatedSlugs: ["postpartum-loneliness", "baby-wont-sleep"],
      },
    ),
    seed(
      "tinyhaven",
      "/tinyhaven",
      "Open TinyHaven",
      "Soft company for the night shift — without a social feed.",
      {
        slug: "postpartum-loneliness",
        category: "loneliness",
        question: "Why does motherhood feel so lonely?",
        title: "Postpartum Loneliness Is Real",
        metaTitle: "Postpartum Loneliness — Night Support",
        description: "Why new parenthood feels isolating, and what soft support can look like.",
        quickAnswer: "Loneliness doesn’t mean you’re failing — it means you need gentler company.",
        bullets: ["Isolation is common", "Night magnifies it"],
        sections: [
          {
            heading: "You’re not broken",
            paragraphs: ["Feeling alone with a baby doesn’t mean you don’t love them."],
          },
        ],
        faqs: [],
        relatedSlugs: ["am-i-the-only-one-awake", "baby-wont-sleep"],
      },
    ),
    seed(
      "tinyhaven",
      "/tinyhaven",
      "Open TinyHaven",
      "You’re still not alone in the hard night.",
      {
        slug: "baby-wont-sleep",
        category: "loneliness",
        question: "What do I do when my baby won’t sleep?",
        title: "Baby Won’t Sleep — You’re Still Not Alone",
        metaTitle: "Baby Won’t Sleep — Survival for the Hard Night",
        description: "When baby won’t sleep: safety first, then soft company for the emotional load.",
        quickAnswer:
          "Keep sleep spaces safe, follow clinician guidance for medical concerns, and know the loneliness of the night shift is shared.",
        bullets: ["Safety first", "Company without pressure helps"],
        sections: [
          {
            heading: "Two problems at once",
            paragraphs: [
              "TinyHaven won’t replace safe-sleep guidance — it sits with you in the feeling.",
            ],
          },
        ],
        faqs: [],
        relatedSlugs: ["am-i-the-only-one-awake", "postpartum-loneliness"],
      },
    ),
    seed(
      "tinymeals",
      "/tinymeals",
      "See TinyMeals",
      "Staring at the fridge after a long day? TinyMeals turns what you already have into something good — coming soon.",
      {
        slug: "what-can-i-cook-with-whats-in-my-fridge",
        category: "cooking",
        question: "What can I cook with what’s in my fridge?",
        title: "What Can I Cook With What’s in My Fridge?",
        metaTitle: "Recipes From What’s in My Fridge",
        description: "Decision-fatigued dinner ideas from ingredients you already have.",
        quickAnswer:
          "List what you have, pick one protein + one veg + one carb, cook the simplest version.",
        bullets: ["Start from inventory", "Simple combinations win"],
        sections: [
          {
            heading: "Parent-brain cooking",
            paragraphs: ["After a long day with a baby, recipe ambition collapses."],
          },
        ],
        faqs: [],
        relatedSlugs: ["how-to-stop-food-waste"],
      },
    ),
    seed(
      "tinymeals",
      "/tinymeals",
      "See TinyMeals",
      "Cook from what you already have — coming soon.",
      {
        slug: "how-to-stop-food-waste",
        category: "cooking",
        question: "How do I stop food from going bad?",
        title: "How to Stop Food Waste at Home",
        metaTitle: "How to Stop Food Waste — Busy Parent Habits",
        description: "Practical ways to reduce food waste with a baby in the house.",
        quickAnswer:
          "Keep a rough fridge inventory, cook the soonest-to-spoil first, plan one use-it-up meal every few days.",
        bullets: ["See what you own", "Cook the urgent stuff first"],
        sections: [
          {
            heading: "Waste is often a visibility problem",
            paragraphs: ["If you can’t see it, you’ll buy it again."],
          },
        ],
        faqs: [],
        relatedSlugs: ["what-can-i-cook-with-whats-in-my-fridge"],
      },
    ),
    seed(
      "tinybundle",
      "/",
      "Explore TinyBundle",
      "Four calm apps for the questions new parents actually ask.",
      {
        slug: "best-apps-for-first-time-parents",
        category: "parenting-apps",
        question: "What apps do first-time parents actually need?",
        title: "Best Apps for First-Time Parents (Without Tracker Overload)",
        metaTitle: "Best Apps for First-Time Parents — Calm Tools",
        description:
          "Which newborn apps are worth it — TinyBundle covers outfits, night loneliness, activities, and meals.",
        quickAnswer:
          "Tools for the questions that wake you up: am I alone, what should baby wear, what do we do now, what’s for dinner.",
        bullets: [
          "TinyHaven — night company",
          "TinyLayers — what to wear",
          "TinyBlooms — one activity",
          "TinyMeals — cook from what you have",
        ],
        sections: [
          {
            heading: "Skip the guilt trackers (unless you love them)",
            paragraphs: [
              "TinyBundle is for emotional and practical questions that don’t need a dashboard.",
            ],
          },
        ],
        faqs: [],
        relatedSlugs: [],
      },
    ),
  ];
}

export const guidePages: GuidePage[] = [
  ...OUTDOOR_BANDS.map(outdoorBandPage),
  ...SLEEP_BANDS.map(sleepBandPage),
  ...situationPages(),
  ...otherAppSeeds(),
];

export function getGuide(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}

export function getGuideSlugs(): string[] {
  return guidePages.map((p) => p.slug);
}

export function getGuidesByApp(app: GuidePage["app"]): GuidePage[] {
  return guidePages.filter((p) => p.app === app);
}

export function getGuidesByCategory(category: GuidePage["category"]): GuidePage[] {
  return guidePages.filter((p) => p.category === category);
}
