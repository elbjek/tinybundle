import type { GuideContent } from "@/lib/guides/types";

export const LAYERS_GUIDES: GuideContent[] = [
  {
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
          "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a higher TOG always safer in winter?",
        a: "No. Overheating is the documented risk. When torn, go lighter and re-check the chest.",
      },
    ],
    relatedSlugs: [
      "what-should-baby-wear-to-sleep",
      "baby-sleep-20-23c",
      "baby-sleep-16-19c",
    ],
    sources: [],
  },
  {
    slug: "feel-baby-neck-to-check-temperature",
    category: "sleep",
    question: "Should I feel my baby’s neck to check if they’re warm?",
    title: "Feel Baby’s Neck to Check Temperature",
    metaTitle: "Check Baby Temperature by Feeling the Neck",
    description:
      "How to check if your baby is too warm by feeling the back of the neck or chest — and why cold hands don’t mean add a layer.",
    quickAnswer:
      "Yes. About 10–15 minutes after settling or going outside, feel the back of the neck or the chest: warm and dry is right; sweaty or hot means remove a layer; cool means add one. Cold hands and feet alone are normal.",
    bullets: [
      "Back of neck or chest — not hands",
      "Warm + dry = dressed right",
      "Sweaty neck/chest = too warm — peel a layer",
    ],
    sections: [
      {
        heading: "Why the neck (or chest), not the hands",
        paragraphs: [
          "Hands and feet often feel cool even when a baby is comfortable — circulation prioritizes the core. The back of the neck and the chest give a truer read of whether they’re overheating or underdressed.",
          "About 10–15 minutes after settling (or outside), feel the chest or back of the neck: warm and dry is right; sweaty means remove a layer; cool means add one. Cool hands and feet alone are normal.",
        ],
      },
      {
        heading: "How to do the check",
        paragraphs: [
          "Wait 10–15 minutes after you’ve dressed them for sleep or headed out. Slide two fingers under the collar or onto the upper chest. You’re feeling for warmth and dryness — not for a thermometer number.",
          "If the neck or chest is damp, flushed, or hot, remove one thin layer and check again. If it feels cool to your (warm) hand, add one thin layer. Repeat until warm and dry.",
          "This is a comfort and overheating check for clothing — not a medical thermometer for fever. If you suspect illness, use a proper thermometer and follow your clinician’s guidance.",
          "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.",
        ],
      },
      {
        heading: "When parents get it wrong",
        paragraphs: [
          "Adding socks or a blanket because toes feel cold is the usual miss. So is covering a pram for shade in a way that traps heat — keep airflow, and re-check the neck at stops.",
          "In a carrier, your body heat adds a layer. Dress lighter, then feel the neck when you pause.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is feeling the neck enough, or do I need the chest too?",
        a: "Either works. Many parents prefer the back of the neck because it’s easy to reach without fully undressing. Use the same warm-and-dry rule.",
      },
      {
        q: "My baby’s neck is sweaty after a feed — are they too hot?",
        a: "Feeding and settling can cause temporary sweat. Re-check 10 minutes later at rest. If the neck and chest stay damp with flushed cheeks, remove a layer.",
      },
      {
        q: "Can I use this instead of a room thermometer?",
        a: "Use both. The thermometer picks a starting outfit; the neck/chest check confirms it on your baby.",
      },
    ],
    relatedSlugs: [
      "baby-too-hot-or-cold-at-night",
      "what-should-baby-wear-to-sleep",
      "how-many-layers-should-baby-wear",
    ],
    sources: [],
  },
  {
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
          "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.",
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
    sources: [],
  },
  {
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
          "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.",
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
    sources: [],
  },
  {
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
          "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can baby ride under my coat?",
        a: "Keep the face free, allow airflow, and check often.",
      },
    ],
    relatedSlugs: ["baby-stroller-clothing", "baby-clothes-15-18-degrees"],
    sources: [],
  },
  {
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
          "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.",
        ],
      },
    ],
    faqs: [
      {
        q: "What about winter car seats?",
        a: "Thin warm layers, buckle snugly, then add a coat or blanket on top.",
      },
    ],
    relatedSlugs: [
      "winter-car-seat-coat-rule",
      "baby-stroller-clothing",
      "baby-clothes-10-14-degrees",
    ],
    sources: [],
  },
];
