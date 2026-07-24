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

const OUTDOOR_TEMPS = [10, 12, 15, 16, 18, 20, 22, 24, 25, 28, 30];
const SLEEP_TEMPS = [16, 18, 20, 21, 22, 24, 25, 26, 27];
const COMBO_AGES = [
  { slug: "newborn", label: "a newborn", titleAge: "a Newborn", months: 0 },
  { slug: "1-month-old", label: "a 1-month-old", titleAge: "a 1-Month-Old", months: 1 },
  { slug: "2-month-old", label: "a 2-month-old", titleAge: "a 2-Month-Old", months: 2 },
  { slug: "3-month-old", label: "a 3-month-old", titleAge: "a 3-Month-Old", months: 3 },
  { slug: "6-month-old", label: "a 6-month-old", titleAge: "a 6-Month-Old", months: 6 },
  { slug: "9-month-old", label: "a 9-month-old", titleAge: "a 9-Month-Old", months: 9 },
  { slug: "12-month-old", label: "a 12-month-old", titleAge: "a 12-Month-Old", months: 12 },
] as const;
const COMBO_TEMPS = [15, 18, 20, 22, 24, 28];
const COMBO_CONTEXTS = [
  { key: "outside", label: "outside", sleep: false },
  { key: "to-sleep", label: "to sleep", sleep: true },
] as const;

function outdoorTempPage(tempC: number): GuidePage {
  const outfit = outdoorOutfitFor(tempC);
  const f = cToF(tempC);
  const slug = `baby-clothes-${tempC}-degrees`;
  return layersPage({
    slug,
    category: "weather",
    question: `What should my baby wear at ${tempC}°C?`,
    title: `What Should My Baby Wear at ${tempC}°C (${f}°F)?`,
    metaTitle: `Baby Clothes for ${tempC}°C (${f}°F) — Outfit Guide`,
    description: `Plain-English outfit for dressing a baby at ${tempC}°C / ${f}°F outside — layers, hat guidance, and when to check the chest.`,
    quickAnswer: outfit.summary,
    bullets: outfit.layers,
    sections: [
      {
        heading: `Dressing for ${tempC}°C outside`,
        paragraphs: [
          `Parents search “baby clothes for ${tempC} degrees” because forecasts don’t tell you how many layers to put on. The useful answer is a starting outfit, then a chest check — not a perfect guess from the doorway.`,
          outfit.summary,
          outfit.note ??
            "If you’re heading out in a stroller, carrier, or car seat, the same temperature needs a slightly different setup — TinyLayers has a mode for each.",
        ],
      },
      {
        heading: "The 10-minute chest check",
        paragraphs: [CHEST_CHECK],
      },
      {
        heading: "Common mistakes at this temperature",
        paragraphs: [
          tempC >= 24
            ? "Overdressing in warm weather is the usual miss. Skip the extra cardigan “just in case” and pack it instead. Under 6 months, prioritize shade over sunscreen."
            : tempC <= 12
              ? "In the cold, bulky coats under car-seat harnesses are unsafe — thin layers under the straps, blanket over after buckling. Warm the car if you can."
              : "Matching adult jackets one-for-one often overheats babies. Start with the layers above, then adjust from the chest — not cold hands.",
        ],
      },
      {
        heading: "Good to know",
        paragraphs: [MEDICAL_DISCLAIMER],
      },
    ],
    faqs: [
      {
        q: `Is ${tempC}°C too hot or too cold for a baby outside?`,
        a:
          tempC >= 28
            ? "It’s warm — keep outfits light, seek shade, and check often for a flushed or sweaty chest."
            : tempC <= 10
              ? "It’s cold — use stacked layers you can peel, keep the head warm, and limit long exposed waits."
              : `Around ${tempC}°C is workable for most babies with the layers above. The chest check after 10 minutes settles it.`,
      },
      {
        q: `How many layers should a baby wear at ${tempC}°C?`,
        a: `Start with: ${outfit.layers.join("; ")}. Add or remove one thin layer based on the chest check — not on cold hands alone.`,
      },
    ],
    relatedSlugs: relatedOutdoor(tempC),
  });
}

function sleepTempPage(tempC: number): GuidePage {
  const outfit = sleepOutfitFor(tempC);
  const f = cToF(tempC);
  const slug = `baby-sleep-clothes-${tempC}c`;
  return layersPage({
    slug,
    category: "sleep",
    question: `What should baby wear to sleep at ${tempC}°C?`,
    title: `What Should Baby Wear to Sleep at ${tempC}°C (${f}°F)?`,
    metaTitle: `Baby Sleep Clothes ${tempC}°C (${f}°F) — TOG & Layers`,
    description: `What your baby should wear to sleep in a ${tempC}°C / ${f}°F room — TOG sleep sack guidance, base layers, and the chest check.`,
    quickAnswer: outfit.summary,
    bullets: [
      `${outfit.weight} sleep sack (about ${outfit.tog} TOG)`,
      outfit.layers,
      "No hats indoors for sleep",
      "No loose blankets in the crib",
    ],
    sections: [
      {
        heading: `Sleepwear for a ${tempC}°C nursery`,
        paragraphs: [
          `“Baby sleep clothes ${tempC}°C” is one of the most common 2am searches — because the season outside doesn’t match the room you’re actually in.`,
          outfit.summary,
          `Look for a sleep sack labeled around ${outfit.tog} TOG. Brands vary slightly; use their chart as a cross-check, then trust the chest.`,
        ],
      },
      {
        heading: "Confirm with the chest check",
        paragraphs: [CHEST_CHECK],
      },
      {
        heading: "Safe-sleep reminders that don’t change with TOG",
        paragraphs: [
          "No loose blankets, pillows, or soft objects in the sleep space for the first year (AAP). A wearable sack does the blanket’s job without the risk.",
          "No hats indoors during sleep — babies release heat through their heads.",
          "Stop swaddling at the first signs of rolling.",
          MEDICAL_DISCLAIMER,
        ],
      },
    ],
    faqs: [
      {
        q: `What TOG sleep sack for ${tempC}°C?`,
        a: `Around ${outfit.tog} TOG (${outfit.weight}) is the usual starting point at ${tempC}°C, with ${outfit.layers}. Confirm after settling.`,
      },
      {
        q: "Should baby wear socks to bed at this temperature?",
        a: "Usually not needed if the sleepsuit or sack covers the feet. Judge warmth by the chest, not the toes.",
      },
    ],
    relatedSlugs: relatedSleep(tempC),
  });
}

function relatedOutdoor(tempC: number): string[] {
  const nearby = OUTDOOR_TEMPS.filter((t) => t !== tempC)
    .sort((a, b) => Math.abs(a - tempC) - Math.abs(b - tempC))
    .slice(0, 3)
    .map((t) => `baby-clothes-${t}-degrees`);
  return [...nearby, "how-many-layers-should-baby-wear", "baby-stroller-clothing", "baby-carrier-clothing"];
}

function relatedSleep(tempC: number): string[] {
  const nearby = SLEEP_TEMPS.filter((t) => t !== tempC)
    .sort((a, b) => Math.abs(a - tempC) - Math.abs(b - tempC))
    .slice(0, 3)
    .map((t) => `baby-sleep-clothes-${t}c`);
  return [...nearby, "what-should-baby-wear-to-sleep", "baby-too-hot-or-cold-at-night", "tog-guide-for-baby-sleep"];
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
            "Babies sleep in a room, not in the weather app. A July nursery with AC can be colder than a January one with radiators. Put a thermometer near the crib and dress for that number.",
            "Then jump to the temperature page that matches your room — or open TinyLayers and get tonight’s answer in one glance.",
          ],
        },
        {
          heading: "Quick room chart",
          paragraphs: [
            "Under 16°C: warmer sack + bodysuit + pajamas. 16–19°C: ~2.5 TOG + long sleeves. 20–23°C: ~1.0 TOG + bodysuit/pajamas. 24–25°C: ~0.5 TOG + short sleeves. 26°C+: ultra-light or bodysuit only.",
            CHEST_CHECK,
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Should baby wear a hat to sleep?",
          a: "No. Hats indoors during sleep can raise overheating risk. Hats are for outdoors.",
        },
        {
          q: "What about naps?",
          a: "Use the same room-temperature logic for daytime crib naps. On-the-go naps in a stroller or carrier need outdoor/mode guidance instead.",
        },
      ],
      relatedSlugs: [
        "baby-sleep-clothes-20c",
        "baby-sleep-clothes-22c",
        "baby-sleep-clothes-24c",
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
        "TOG measures sleep-sack warmth. Higher is warmer. Match TOG to room temperature first, explain layers in plain English second, then confirm on the chest.",
      bullets: [
        "0.2–0.5 TOG: warm rooms (~24°C+)",
        "1.0 TOG: typical nurseries (~20–23°C)",
        "2.5 TOG: cooler rooms (~16–19°C)",
        "Never use loose blankets as a TOG substitute",
      ],
      sections: [
        {
          heading: "TOG without the jargon",
          paragraphs: [
            "TOG (Thermal Overall Grade) is just a warmth label on sleep sacks and swaddles. You don’t need to memorize it — you need a starting point for tonight’s room.",
            "TinyLayers leads with plain-English layers, then shows the TOG as a helper. It never recommends 4.0 TOG.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Is a higher TOG always safer in winter?",
          a: "No. Overheating is the documented risk. Warm the room if you can; don’t stack endless layers. When torn, go lighter and re-check the chest.",
        },
      ],
      relatedSlugs: ["what-should-baby-wear-to-sleep", "baby-sleep-clothes-20c", "baby-sleep-clothes-18c"],
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
        "UK safe-sleep bodies often cite about 16–20°C. Slightly warmer is workable if you dress lighter. A comfortably cool room beats a warm, overbundled one.",
      bullets: [
        "Aim comfortably cool, not toasty",
        "If you can’t move the thermostat, move the layers",
        "Chest check settles the debate",
      ],
      sections: [
        {
          heading: "Where 16–20°C comes from",
          paragraphs: [
            "The Lullaby Trust and NHS name a comfortably cool range tied to reducing overheating risk. The AAP emphasizes avoiding overheating and overbundling rather than one magic number.",
            "If your flat runs hot in summer, dress down. If radiators won’t cooperate in winter, warm what you can and use a warmer sack — never loose blankets.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Is 22°C too warm for baby sleep?",
          a: "It’s workable with lighter layers — often a 1.0 TOG sack with a short-sleeve bodysuit. Confirm with the chest check.",
        },
      ],
      relatedSlugs: ["what-should-baby-wear-to-sleep", "baby-sleep-clothes-20c", "baby-too-hot-or-cold-at-night"],
    }),
    layersPage({
      slug: "baby-too-hot-or-cold-at-night",
      category: "sleep",
      question: "Is my baby too hot or too cold?",
      title: "Is My Baby Too Hot or Too Cold at Night?",
      metaTitle: "Baby Too Hot or Too Cold? Chest Check Signs",
      description:
        "How to tell if your baby is overheating or underdressed at night — the chest check, sweat signs, and why cold hands don’t mean add a blanket.",
      quickAnswer:
        "Feel the chest or back of the neck: warm and dry is right; sweaty or flushed means remove a layer; cool chest means add one. Cold hands alone are normal.",
      bullets: [
        "Chest / neck = honest reading",
        "Sweat, damp hair, flushed cheeks → too warm",
        "Cool chest → add a layer",
        "Cool hands/feet alone ≠ underdressed",
      ],
      sections: [
        {
          heading: "Signs that actually matter",
          paragraphs: [
            "Immature circulation keeps extremities cooler. Bundling because of cold toes is how overheating starts.",
            CHEST_CHECK,
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "My baby’s hands are cold — should I add a layer?",
          a: "Not based on hands alone. Check the chest. If the chest is warm and dry, you’re fine.",
        },
      ],
      relatedSlugs: ["what-should-baby-wear-to-sleep", "best-room-temperature-for-baby-sleep", "baby-sleep-clothes-22c"],
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
        "Chest check beats counting layers",
      ],
      sections: [
        {
          heading: "Layers are a starting point",
          paragraphs: [
            "“How many layers should baby wear” is the wrong framing if it becomes a fixed count. A windy 12°C walk and a 22°C nap are different problems.",
            "Use the temperature pages for a starting outfit, then peel or add one thin layer based on the chest.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Should babies wear one more layer than adults?",
          a: "It’s a rough folk rule, not a law. Babies don’t self-regulate like adults — verify with the chest, especially in warm rooms and carriers.",
        },
      ],
      relatedSlugs: [
        "baby-clothes-20-degrees",
        "baby-clothes-15-degrees",
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
        "How to dress a baby for stroller walks by temperature — including blankets, shade, and why draped covers trap heat.",
      quickAnswer:
        "Dress for the outdoor temperature, then add a stroller blanket in cooler weather. Never drape a blanket or muslin over the stroller for shade — it traps heat.",
      bullets: [
        "Start with outdoor temperature layers",
        "Blanket for cooler walks — below the chest, away from the face",
        "Use canopy/parasol for shade, not draped fabric",
      ],
      sections: [
        {
          heading: "Stroller-specific risks",
          paragraphs: [
            "Strollers create a little microclimate. In heat, draped covers turn the bassinet into a warm box. In cold, a blanket helps — but keep it clear of the face.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Can I cover the stroller with a muslin for sun?",
          a: "Avoid fully draping fabric over the stroller. Use the canopy or a clip-on parasol so air still moves.",
        },
      ],
      relatedSlugs: ["baby-carrier-clothing", "baby-car-seat-clothing", "baby-clothes-20-degrees", "baby-clothes-15-degrees"],
    }),
    layersPage({
      slug: "baby-carrier-clothing",
      category: "situation",
      question: "What should my baby wear in a carrier?",
      title: "What Should Baby Wear in a Baby Carrier?",
      metaTitle: "Baby Carrier Clothing — Dress One Layer Lighter",
      description:
        "Carrier clothing guidance: your body heat counts as a layer. Dress lighter than for the stroller and watch for overheating.",
      quickAnswer:
        "Dress one layer lighter than you would for the stroller — your body heat and the carrier fabric count. Check the chest often, especially in warm weather.",
      bullets: [
        "One layer lighter than stroller outfits",
        "Keep the face uncovered and airways clear",
        "Take breaks in heat; watch for flushed/sweaty chest",
      ],
      sections: [
        {
          heading: "Shared warmth changes the math",
          paragraphs: [
            "Babywearing is cozy by design. The outfit that felt right in the stroller is often one layer too much on your chest.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Can baby ride under my coat?",
          a: "If so, keep the face free, allow airflow, and check often. Don’t bury baby under heavy outerwear.",
        },
      ],
      relatedSlugs: ["baby-stroller-clothing", "winter-baby-carrier-clothes", "baby-clothes-15-degrees"],
    }),
    layersPage({
      slug: "winter-baby-carrier-clothes",
      category: "situation",
      question: "What should baby wear in a carrier in winter?",
      title: "Winter Baby Carrier Clothes",
      metaTitle: "Winter Baby Carrier Outfit — Safe Layering",
      description:
        "How to dress a baby for winter babywearing without overheating — base layers, parent coats, and frequent checks.",
      quickAnswer:
        "Warm base layers on baby, your coat as the shared outer shell when appropriate, face clear, checks often. Still dress lighter than a solo stroller walk.",
      bullets: [
        "Warm base on baby, not a puffy under the carrier",
        "Parent coat can act as shared outer layer",
        "Face and airway always clear",
      ],
      sections: [
        {
          heading: "Winter carrier without the sweat",
          paragraphs: [
            "The goal is warm extremities and a calm chest — not maximum puff. Thin warm layers beat one bulky snowsuit inside the carrier.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Snowsuit in the carrier?",
          a: "Usually too much under a winter coat. Prefer layered clothing you can vent, and use your outerwear as the shell.",
        },
      ],
      relatedSlugs: ["baby-carrier-clothing", "baby-car-seat-clothing", "baby-clothes-10-degrees"],
    }),
    layersPage({
      slug: "baby-car-seat-clothing",
      category: "situation",
      question: "What should my baby wear in a car seat?",
      title: "What Should Baby Wear in a Car Seat?",
      metaTitle: "Baby Car Seat Clothing — No Bulky Coats Under Straps",
      description:
        "Safer car-seat dressing: thin layers under the harness, never bulky coats or snowsuits under straps, blanket over after buckling.",
      quickAnswer:
        "Thin, snug layers under the harness. Never put bulky coats or snowsuits under car-seat straps. Buckle first, then add a blanket over the straps if needed.",
      bullets: [
        "Thin layers under harness",
        "No puffy coats under straps",
        "Blanket over straps after buckling",
        "Remove outer layers in a warmed car",
      ],
      sections: [
        {
          heading: "Why the coat rule exists",
          paragraphs: [
            "Puffy coats compress in a crash and leave harness slack. Warmth belongs over the buckled straps, not under them.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "What about winter car seats?",
          a: "Dress in thin warm layers, buckle snugly, then add a coat or blanket on top. Keep a car blanket in the footwell for transfers.",
        },
      ],
      relatedSlugs: ["winter-car-seat-coat-rule", "baby-stroller-clothing", "baby-clothes-10-degrees"],
    }),
    layersPage({
      slug: "winter-car-seat-coat-rule",
      category: "situation",
      question: "Can my baby wear a coat in the car seat?",
      title: "Winter Car Seat Coat Rule (Why Puffy Coats Don’t Mix)",
      metaTitle: "Baby Coat in Car Seat? Why Bulky Coats Are Unsafe",
      description:
        "Why puffy coats and car seats don’t mix, and what to do instead on freezing mornings.",
      quickAnswer:
        "Don’t put bulky coats or snowsuits under the harness. Thin layers under, warmth over the straps after buckling.",
      bullets: [
        "Bulk under straps = dangerous slack in a crash",
        "Thin layers under harness",
        "Coat or blanket over after buckling",
      ],
      sections: [
        {
          heading: "The safer winter routine",
          paragraphs: [
            "Pre-warm the car if you can. Dress baby in thin layers, buckle, then cover. At the destination, reverse the steps.",
            MEDICAL_DISCLAIMER,
          ],
        },
      ],
      faqs: [
        {
          q: "Are thin puffer jackets okay under straps?",
          a: "If it’s compressible/bulky, keep it off the harness path. When unsure, put warmth on top after buckling.",
        },
      ],
      relatedSlugs: ["baby-car-seat-clothing", "baby-clothes-10-degrees", "winter-baby-carrier-clothes"],
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
        "Dress for the outdoor temperature with soft layers you can peel. Under 6 months, prioritize shade and a brimmed hat over sunscreen. In a carrier, go one layer lighter.",
      bullets: [
        "Match outdoor temperature",
        "Shade + brimmed hat under 6 months",
        "Carrier = one layer lighter",
        "Chest check after ~10 minutes",
      ],
      sections: [
        {
          heading: "Newborns and the weather",
          paragraphs: [
            "Newborns can’t tell you they’re overheating. Start from the temperature pages, favor thin adjustable layers, and check the chest.",
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
        "baby-clothes-20-degrees",
        "baby-clothes-15-degrees",
        "what-should-3-month-old-wear-at-20-degrees-outside",
      ],
    }),
  ];
}

function comboPages(): GuidePage[] {
  const pages: GuidePage[] = [];
  for (const age of COMBO_AGES) {
    for (const tempC of COMBO_TEMPS) {
      for (const ctx of COMBO_CONTEXTS) {
        // Skip sleep pages below 16°C — redirect parents to warm-the-room guidance via outdoor or sleep hub
        if (ctx.sleep && tempC < 16) continue;
        const outfit = ctx.sleep ? sleepOutfitFor(tempC) : outdoorOutfitFor(tempC);
        const f = cToF(tempC);
        const slug = `what-should-${age.slug}-wear-at-${tempC}-degrees-${ctx.key}`;
        const young = age.months < 6;
        pages.push(
          layersPage({
            slug,
            category: "combo",
            question: `What should ${age.label} wear ${ctx.label} at ${tempC}°C?`,
            title: `What Should ${age.titleAge} Wear ${ctx.sleep ? "to Sleep" : "Outside"} at ${tempC}°C?`,
            metaTitle: `${age.titleAge} Clothes at ${tempC}°C ${ctx.sleep ? "Sleep" : "Outside"}`,
            description: `What ${age.label} should wear ${ctx.label} at ${tempC}°C (${f}°F) — plain-English layers${ctx.sleep ? " and TOG" : ""}, plus the chest check.`,
            quickAnswer: ctx.sleep
              ? (outfit as ReturnType<typeof sleepOutfitFor>).summary
              : (outfit as ReturnType<typeof outdoorOutfitFor>).summary,
            bullets: ctx.sleep
              ? [
                  `About ${(outfit as ReturnType<typeof sleepOutfitFor>).tog} TOG sleep sack`,
                  (outfit as ReturnType<typeof sleepOutfitFor>).layers,
                  young ? "No swaddle if rolling has started" : "Arms-free sleep sack",
                ]
              : [
                  ...(outfit as ReturnType<typeof outdoorOutfitFor>).layers,
                  young && tempC >= 20 ? "Shade + brimmed hat over sunscreen" : "Chest check after ~10 minutes",
                ],
            sections: [
              {
                heading: `For ${age.label} at ${tempC}°C`,
                paragraphs: [
                  `This page answers one search: what should ${age.label} wear ${ctx.label} when it’s ${tempC}°C (${f}°F). Age changes fit and mobility; temperature changes warmth. Together they set the starting outfit.`,
                  ctx.sleep
                    ? (outfit as ReturnType<typeof sleepOutfitFor>).summary
                    : (outfit as ReturnType<typeof outdoorOutfitFor>).summary,
                  age.months === 0
                    ? "Newborns need soft, adjustable layers and frequent checks — they can’t signal overheating clearly."
                    : age.months >= 6
                      ? "At this age, movement and curiosity matter too: skip loose blankets and keep carrier airways clear."
                      : "In the early months, err slightly cool rather than overbundled, and confirm on the chest.",
                ],
              },
              {
                heading: "Check, then adjust",
                paragraphs: [CHEST_CHECK, MEDICAL_DISCLAIMER],
              },
            ],
            faqs: [
              {
                q: `Does ${age.label} need different clothes than an older baby at ${tempC}°C?`,
                a: young
                  ? "The warmth logic is similar; sun and swaddle/rolling rules are stricter early on. Prefer shade under 6 months in warm weather."
                  : "Warmth logic stays temperature-first. Fit and mobility matter more as babies move.",
              },
            ],
            relatedSlugs: [
              ctx.sleep ? `baby-sleep-clothes-${tempC}c` : `baby-clothes-${tempC}-degrees`,
              ctx.sleep ? "what-should-baby-wear-to-sleep" : "how-many-layers-should-baby-wear",
              `what-should-${age.slug}-wear-at-${tempC}-degrees-${ctx.key === "outside" ? "to-sleep" : "outside"}`,
            ].filter((s) => s !== slug),
          }),
        );
      }
    }
  }
  return pages;
}

function otherAppSeeds(): GuidePage[] {
  const blooms = (p: Omit<GuidePage, "app" | "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb" | "publishedAt" | "modifiedAt">): GuidePage => ({
    app: "tinyblooms",
    publishedAt: DATE,
    modifiedAt: DATE,
    ctaApp: "tinyblooms",
    ctaLabel: "See TinyBlooms",
    ctaHref: "/tinyblooms",
    ctaBlurb:
      "Tired of scrolling activity lists? TinyBlooms gives one age-right idea at a time — coming soon from TinyBundle.",
    ...p,
    relatedSlugs: p.relatedSlugs ?? [],
  });

  const haven = (p: Omit<GuidePage, "app" | "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb" | "publishedAt" | "modifiedAt">): GuidePage => ({
    app: "tinyhaven",
    publishedAt: DATE,
    modifiedAt: DATE,
    ctaApp: "tinyhaven",
    ctaLabel: "Open TinyHaven",
    ctaHref: "/tinyhaven",
    ctaBlurb:
      "Awake and lonely at 2am? TinyHaven shows you’re not the only one — anonymous check-ins, no profiles.",
    ...p,
    relatedSlugs: p.relatedSlugs ?? [],
  });

  const meals = (p: Omit<GuidePage, "app" | "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb" | "publishedAt" | "modifiedAt">): GuidePage => ({
    app: "tinymeals",
    publishedAt: DATE,
    modifiedAt: DATE,
    ctaApp: "tinymeals",
    ctaLabel: "See TinyMeals",
    ctaHref: "/tinymeals",
    ctaBlurb:
      "Staring at the fridge after a long day? TinyMeals turns what you already have into something good — coming soon.",
    ...p,
    relatedSlugs: p.relatedSlugs ?? [],
  });

  const bundle = (p: Omit<GuidePage, "app" | "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb" | "publishedAt" | "modifiedAt">): GuidePage => ({
    app: "tinybundle",
    publishedAt: DATE,
    modifiedAt: DATE,
    ctaApp: "tinybundle",
    ctaLabel: "Explore TinyBundle",
    ctaHref: "/",
    ctaBlurb:
      "TinyBundle is four calm apps for the questions new parents actually ask — sleep company, outfits, activities, and meals.",
    ...p,
    relatedSlugs: p.relatedSlugs ?? [],
  });

  return [
    blooms({
      slug: "what-do-i-do-with-my-baby",
      category: "development",
      question: "What do I do with my baby?",
      title: "What Do I Do With My Baby All Day?",
      metaTitle: "What Do I Do With My Baby? Easy Age-Right Ideas",
      description:
        "When your baby is awake and you’re out of ideas — simple, no-prep activities by age without milestone pressure.",
      quickAnswer:
        "You don’t need a curriculum. One small, age-right idea is enough: tummy time, a song, a walk to the window, or quiet face-to-face play.",
      bullets: [
        "One idea beats a Pinterest binge",
        "Match age and energy",
        "Ordinary moments count",
      ],
      sections: [
        {
          heading: "The 2pm panic is normal",
          paragraphs: [
            "“What do I do with my baby all day” is less about enrichment and more about decision fatigue. Pick one tiny thing, do it, and let the rest of the day be ordinary.",
          ],
        },
      ],
      faqs: [
        {
          q: "How many activities does a baby need per day?",
          a: "Fewer than social media suggests. Short, responsive play matters more than a packed schedule.",
        },
      ],
      relatedSlugs: ["activities-for-newborn", "tummy-time-ideas", "indoor-baby-activities"],
    }),
    blooms({
      slug: "activities-for-newborn",
      category: "development",
      question: "What are good activities for a newborn?",
      title: "Activities for a Newborn (Simple & Calm)",
      metaTitle: "Activities for Newborn — Gentle Ideas for Day One",
      description:
        "Gentle newborn play ideas that fit real days — face time, soft sounds, tummy time in tiny doses.",
      quickAnswer:
        "Talk face-to-face, sing, practice short supervised tummy time, and follow sleepy cues. Skip elaborate setups.",
      bullets: ["Face-to-face talk and song", "Short supervised tummy time", "Follow cues over schedules"],
      sections: [
        {
          heading: "Newborn days are supposed to be quiet",
          paragraphs: [
            "Stimulation for a newborn is often just your voice and face. That’s enough.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["what-do-i-do-with-my-baby", "tummy-time-ideas"],
    }),
    blooms({
      slug: "tummy-time-ideas",
      category: "development",
      question: "What are tummy time ideas?",
      title: "Tummy Time Ideas That Don’t Feel Like a Chore",
      metaTitle: "Tummy Time Ideas — Short, Doable, Age-Right",
      description: "Short tummy time ideas for real parents — chest-to-chest, towel rolls, and tiny sessions.",
      quickAnswer:
        "Start tiny: on your chest, across your lap, or on a mat with a face nearby. Short and often beats long and miserable.",
      bullets: ["Chest-to-chest counts", "Short sessions, often", "Get on their eye level"],
      sections: [
        {
          heading: "Make it relational",
          paragraphs: [
            "Tummy time works better when it’s connection, not a workout timer.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["activities-for-newborn", "what-do-i-do-with-my-baby"],
    }),
    blooms({
      slug: "indoor-baby-activities",
      category: "development",
      question: "What are easy indoor baby activities?",
      title: "Easy Indoor Baby Activities (No Prep)",
      metaTitle: "Indoor Baby Activities — Easy Ideas for Rainy Days",
      description: "No-prep indoor baby activities for tired parents — sensory play without a craft cupboard.",
      quickAnswer:
        "Mirror play, kitchen-floor singing, window watching, scarf peekaboo, and supervised tummy time — no special toys required.",
      bullets: ["Use what you already own", "Keep sessions short", "Follow their mood"],
      sections: [
        {
          heading: "Rainy-day without the guilt",
          paragraphs: ["Indoor days don’t need a program. They need one doable idea."],
        },
      ],
      faqs: [],
      relatedSlugs: ["what-do-i-do-with-my-baby", "activities-for-newborn"],
    }),
    haven({
      slug: "am-i-the-only-one-awake",
      category: "loneliness",
      question: "Am I the only one awake with my baby?",
      title: "Am I the Only One Awake?",
      metaTitle: "Am I the Only One Awake With Baby? You’re Not Alone",
      description:
        "Night feeds feel isolating. You’re not the only parent awake — soft company without social media.",
      quickAnswer:
        "No. Night waking is brutally common. You don’t need a feed or a chat — sometimes you just need proof someone else is up too.",
      bullets: ["Night loneliness is common", "You don’t owe anyone a performance", "Quiet company > advice"],
      sections: [
        {
          heading: "The hardest hour",
          paragraphs: [
            "“Am I the only one?” is the question under so many 2am searches. TinyHaven exists for that exact feeling — anonymous presence, not another timeline.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is it normal to feel lonely while breastfeeding at night?",
          a: "Yes. The house can feel empty even when love is present. Seeking quiet company is human, not weak.",
        },
      ],
      relatedSlugs: ["postpartum-loneliness", "baby-wont-sleep", "motherhood-is-lonely"],
    }),
    haven({
      slug: "postpartum-loneliness",
      category: "loneliness",
      question: "Why does motherhood feel so lonely?",
      title: "Postpartum Loneliness Is Real",
      metaTitle: "Postpartum Loneliness — Why Motherhood Feels Isolating",
      description:
        "Why new parenthood feels isolating at night, and what soft support can look like without social media pressure.",
      quickAnswer:
        "Postpartum life shrinks your world while everyone else’s keeps scrolling. Loneliness doesn’t mean you’re failing — it means you need gentler company.",
      bullets: ["Isolation is common, not a character flaw", "Night magnifies it", "Soft presence helps"],
      sections: [
        {
          heading: "You’re not broken",
          paragraphs: [
            "Feeling alone with a baby doesn’t mean you don’t love them. It means the job is heavy and often invisible.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["am-i-the-only-one-awake", "motherhood-is-lonely"],
    }),
    haven({
      slug: "motherhood-is-lonely",
      category: "loneliness",
      question: "Is motherhood lonely for everyone?",
      title: "Motherhood Is Lonely (And You’re Not Imagining It)",
      metaTitle: "Motherhood Is Lonely — Night Support Without Social Media",
      description: "Validation for lonely new moms and parents — especially during night feeds and sleepless stretches.",
      quickAnswer:
        "Many parents feel lonely even with a partner nearby. The night shift is real. You deserve company that doesn’t demand a performance.",
      bullets: ["Common and under-discussed", "Especially acute at night", "Anonymous support can help"],
      sections: [
        {
          heading: "Not another highlight reel",
          paragraphs: [
            "Social feeds often make loneliness worse. TinyHaven is built as moonlight, not a timeline.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["postpartum-loneliness", "am-i-the-only-one-awake"],
    }),
    haven({
      slug: "baby-wont-sleep",
      category: "loneliness",
      question: "What do I do when my baby won’t sleep?",
      title: "Baby Won’t Sleep — You’re Still Not Alone",
      metaTitle: "Baby Won’t Sleep — Survival for the Hard Night",
      description:
        "When baby won’t sleep and you’re exhausted: safety first, then soft company for the emotional load.",
      quickAnswer:
        "Keep sleep spaces safe, follow your clinician’s guidance for medical concerns, and know the loneliness of the night shift is shared by more parents than it feels.",
      bullets: ["Safety first", "This night won’t define you", "Company without pressure helps"],
      sections: [
        {
          heading: "Two problems at once",
          paragraphs: [
            "Sleep deprivation is practical and emotional. TinyHaven won’t replace safe-sleep guidance — it sits with you in the feeling of being the only one awake.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["am-i-the-only-one-awake", "postpartum-loneliness"],
    }),
    meals({
      slug: "what-can-i-cook-with-whats-in-my-fridge",
      category: "cooking",
      question: "What can I cook with what’s in my fridge?",
      title: "What Can I Cook With What’s in My Fridge?",
      metaTitle: "Recipes From What’s in My Fridge — Leftover Dinner Ideas",
      description:
        "Decision-fatigued dinner ideas from ingredients you already have — less waste, less takeout guilt.",
      quickAnswer:
        "List what you already have, pick one protein + one veg + one starch or carb, and cook the simplest version. Perfect is not the goal — done is.",
      bullets: ["Start from inventory, not a recipe blog", "Simple combinations win", "Use-it-up beats ideal menus"],
      sections: [
        {
          heading: "Parent-brain cooking",
          paragraphs: [
            "After a long day with a baby, recipe ambition collapses. TinyMeals is being built for that exact fridge-stare moment.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["recipes-from-leftovers", "how-to-stop-food-waste"],
    }),
    meals({
      slug: "recipes-from-leftovers",
      category: "cooking",
      question: "What can I make with leftovers?",
      title: "Recipes From Leftovers (Parent Edition)",
      metaTitle: "Leftover Recipes — Easy Dinners From What You Have",
      description: "Easy leftover transformations for tired parents — stretch last night’s food into tonight’s dinner.",
      quickAnswer:
        "Reheat with a new format: leftover roast → wraps; rice → fried rice; veg → omelette or soup. Change the shape, not the grocery list.",
      bullets: ["Change the format", "Add one fresh element", "Freeze portions when you can"],
      sections: [
        {
          heading: "Leftovers are a feature",
          paragraphs: ["Food waste often starts with optimism. Cooking from leftovers is a parenting survival skill."],
        },
      ],
      faqs: [],
      relatedSlugs: ["what-can-i-cook-with-whats-in-my-fridge", "how-to-stop-food-waste"],
    }),
    meals({
      slug: "how-to-stop-food-waste",
      category: "cooking",
      question: "How do I stop food from going bad?",
      title: "How to Stop Food Waste at Home",
      metaTitle: "How to Stop Food Waste — Fridge Habits for Busy Parents",
      description: "Practical ways to reduce food waste with a baby in the house — inventory habits over guilt.",
      quickAnswer:
        "Keep a rough fridge inventory, cook the soonest-to-spoil first, and plan one “use-it-up” meal every few days.",
      bullets: ["See what you own", "Cook the urgent stuff first", "One use-it-up meal per week minimum"],
      sections: [
        {
          heading: "Waste is often a visibility problem",
          paragraphs: ["If you can’t see it, you’ll buy it again. TinyMeals aims to start from what’s already there."],
        },
      ],
      faqs: [],
      relatedSlugs: ["what-can-i-cook-with-whats-in-my-fridge", "recipes-from-leftovers"],
    }),
    bundle({
      slug: "best-apps-for-first-time-parents",
      category: "parenting-apps",
      question: "What apps do first-time parents actually need?",
      title: "Best Apps for First-Time Parents (Without the Tracker Overload)",
      metaTitle: "Best Apps for First-Time Parents — Calm Tools That Help",
      description:
        "Which newborn apps are worth it — and how TinyBundle covers outfits, night loneliness, activities, and meals without becoming another chore.",
      quickAnswer:
        "You need tools for the questions that actually wake you up: am I alone, what should baby wear, what do we do now, what’s for dinner — not another spreadsheet of ounces.",
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
            "Some parents thrive on tracking. Many don’t. TinyBundle is for the emotional and practical questions that don’t need a dashboard.",
          ],
        },
      ],
      faqs: [
        {
          q: "What’s a good baby tracker alternative?",
          a: "If tracking stresses you out, use intent-based tools instead: outfit guidance, one activity, night presence, and leftover cooking.",
        },
      ],
      relatedSlugs: ["newborn-apps", "must-have-baby-apps"],
    }),
    bundle({
      slug: "newborn-apps",
      category: "parenting-apps",
      question: "What newborn apps are worth downloading?",
      title: "Newborn Apps Worth Downloading",
      metaTitle: "Newborn Apps — What New Parents Actually Use",
      description: "A short list of newborn app categories that help at 2am — without overwhelming you.",
      quickAnswer:
        "Prioritize sleep safety info, calm company, dressing guidance, and simple activities. Delay anything that turns parenting into data entry unless you want that.",
      bullets: ["Safety references", "Night support", "Dressing help", "One-idea activities"],
      sections: [
        {
          heading: "Download less, use more",
          paragraphs: ["The best newborn app is the one you’ll open when you’re exhausted — not the one with the longest feature list."],
        },
      ],
      faqs: [],
      relatedSlugs: ["best-apps-for-first-time-parents", "must-have-baby-apps"],
    }),
    bundle({
      slug: "must-have-baby-apps",
      category: "parenting-apps",
      question: "What are must-have baby apps?",
      title: "Must-Have Baby Apps for New Parents",
      metaTitle: "Must-Have Baby Apps — A Shorter, Calmer List",
      description: "Must-have baby apps reframed around real parent questions — not feature bloat.",
      quickAnswer:
        "Must-have means it answers a recurring panic question. TinyBundle’s four apps map to wear, loneliness, “what now,” and dinner.",
      bullets: ["Wear", "Night company", "One activity", "Fridge dinner"],
      sections: [
        {
          heading: "Four questions, four apps",
          paragraphs: [
            "That’s the TinyBundle thesis: own the questions exhausted parents type at 2am.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["best-apps-for-first-time-parents", "newborn-apps"],
    }),
  ];
}

function buildCatalog(): GuidePage[] {
  const pages = [
    ...OUTDOOR_TEMPS.map(outdoorTempPage),
    ...SLEEP_TEMPS.map(sleepTempPage),
    ...situationPages(),
    ...comboPages(),
    ...otherAppSeeds(),
  ];

  // Deduplicate by slug (situation hubs may overlap naming)
  const bySlug = new Map<string, GuidePage>();
  for (const page of pages) {
    bySlug.set(page.slug, page);
  }
  return [...bySlug.values()];
}

export const guidePages: GuidePage[] = buildCatalog();

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
