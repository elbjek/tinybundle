import type { GuideContent } from "@/lib/guides/types";

export const HAVEN_GUIDES: GuideContent[] = [
  {
    slug: "am-i-the-only-one-awake",
    category: "loneliness",
    question: "Am I the only one awake with my baby?",
    title: "Am I the Only One Awake?",
    metaTitle: "Am I the Only One Awake With Baby?",
    description:
      "Night feeds feel isolating. You’re not the only parent awake.",
    quickAnswer:
      "No. Night waking is common. Sometimes you just need proof someone else is up too.",
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
    relatedSlugs: ["motherhood-is-lonely", "baby-wakes-every-hour"],
    sources: [],
  },
  {
    slug: "motherhood-is-lonely",
    category: "loneliness",
    question: "Why does motherhood feel so lonely?",
    title: "Motherhood Is Lonely — And That Doesn’t Mean You’re Failing",
    metaTitle: "Motherhood Is Lonely — Soft Night Support",
    description:
      "Why motherhood can feel lonely even when you’re never alone — and what gentle company can look like at 2am.",
    quickAnswer:
      "Caring for a baby can shrink your adult world overnight. Loneliness is common; it isn’t proof you’re doing parenthood wrong.",
    bullets: [
      "Constant company ≠ felt connection",
      "Nights amplify isolation",
      "Soft presence helps more than advice",
    ],
    sections: [
      {
        heading: "Lonely with a baby in your arms",
        paragraphs: [
          "You can love your child and still miss being known as a person. Those feelings can sit side by side.",
          "TinyHaven is built for the hour when feeds stretch and the house is quiet — anonymous check-ins so you can see you’re not the only one up.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is feeling lonely postpartum normal?",
        a: "Very common. If loneliness comes with hopelessness, scary thoughts, or you can’t function, talk to a clinician — support is available.",
      },
    ],
    relatedSlugs: ["am-i-the-only-one-awake"],
    sources: [],
  },
  {
    slug: "4-month-sleep-regression",
    category: "loneliness",
    question: "What is the 4-month sleep regression like?",
    title: "4-Month Sleep Regression — Surviving the Stretch",
    metaTitle: "4-Month Sleep Regression — You’re Not Alone",
    description:
      "What the so-called 4-month sleep regression feels like for parents — and how to carry the emotional load at night.",
    quickAnswer:
      "Many babies wake more around this stage as sleep patterns mature. Keep spaces safe, follow your clinician’s guidance, and know the loneliness of broken nights is shared.",
    bullets: [
      "Sleep changes are common around this age",
      "Safety first, then soft company",
      "You’re not failing if nights get harder",
    ],
    sections: [
      {
        heading: "Regression is a parent word for hard nights",
        paragraphs: [
          "Whatever you call it, the feeling is the same: more wakes, less predictability, more 2am thoughts.",
          "TinyHaven won’t diagnose sleep — it sits with you while you wait out another stretch. For medical or developmental concerns, ask your clinician.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a 4-month regression last?",
        a: "It varies. Some families notice a few weeks of choppier nights; others longer. Your clinician is the right place for individual guidance.",
      },
    ],
    relatedSlugs: ["baby-wakes-every-hour", "am-i-the-only-one-awake"],
    sources: [],
  },
  {
    slug: "baby-wakes-every-hour",
    category: "loneliness",
    question: "Why does my baby wake every hour?",
    title: "Baby Wakes Every Hour — Getting Through the Night",
    metaTitle: "Baby Wakes Every Hour — Night Survival",
    description:
      "When baby wakes every hour — emotional survival for parents, plus a reminder to check safety and clinical guidance.",
    quickAnswer:
      "Hourly waking is exhausting and common in stretches. Rule out hunger, discomfort, and medical issues with your clinician, and lean on soft company for the loneliness.",
    bullets: [
      "Tag-team if you can",
      "Lower the bar for “productive” nights",
      "You’re allowed to need company",
    ],
    sections: [
      {
        heading: "Hourly waking empties the tank",
        paragraphs: [
          "Advice lists help some nights and fail others. What’s constant is how isolating it feels when the rest of the world sleeps.",
          "If wakes come with breathing concerns, fever, or sudden changes, contact a clinician. TinyHaven is for the feeling that you’re the only one still up.",
        ],
      },
    ],
    faqs: [],
    relatedSlugs: ["4-month-sleep-regression", "am-i-the-only-one-awake"],
    sources: [],
  },
  {
    slug: "is-this-normal-baby",
    category: "loneliness",
    question: "Is this normal for a baby?",
    title: "“Is This Normal?” — The 2am Parent Question",
    metaTitle: "Is This Normal for a Baby? — Calm Perspective",
    description:
      "When you spiral about whether baby’s behavior is normal — how to separate urgent from ordinary, and where to get soft support.",
    quickAnswer:
      "Many 2am worries are common; some need a clinician. When in doubt about health, ask a professional. For the lonely spiral itself, soft company helps.",
    bullets: [
      "Urgent symptoms → clinician, not a forum",
      "Comparison apps often fuel anxiety",
      "You’re allowed to need reassurance",
    ],
    sections: [
      {
        heading: "Normal is a wide band",
        paragraphs: [
          "Parents search “is this normal” because the stakes feel high and sleep is low. That search is a coping tool — not evidence you’re failing.",
          "TinyHaven won’t replace medical advice. It’s for the emotional part: feeling less alone while you wait for morning or a callback.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should I call a doctor?",
        a: "For breathing trouble, fever (age-dependent thresholds), limpness, fewer wet diapers, or anything that scares you — err on calling. Trust your gut.",
      },
    ],
    relatedSlugs: ["motherhood-is-lonely", "baby-wakes-every-hour"],
    sources: [],
  },
];
