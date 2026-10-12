import type { GuideContent } from "@/lib/guides/types";

export const BUNDLE_GUIDES: GuideContent[] = [
  {
    slug: "must-have-baby-apps",
    category: "parenting-apps",
    question: "What are must-have baby apps?",
    title: "Must-Have Baby Apps (Short List)",
    metaTitle: "Must-Have Baby Apps — A Short Honest List",
    description:
      "A short list of must-have baby apps — calm tools for outfits, loneliness, activities, and meals.",
    quickAnswer:
      "Must-have means it solves a repeating pain. For many parents: dressing help, night loneliness support, one activity idea, and dinner from what’s in the kitchen.",
    bullets: [
      "TinyHaven — less alone at night",
      "TinyLayers — what to wear",
      "TinyBlooms / TinyMeals — coming soon",
    ],
    sections: [
      {
        heading: "Must-have ≠ most downloaded",
        paragraphs: [
          "Charts of “top baby apps” often reward tracking. Ask: does this reduce my 2am stress or add a chore?",
        ],
      },
    ],
    faqs: [],
    relatedSlugs: ["baby-tracker-alternatives"],
    sources: [],
  },
  {
    slug: "baby-tracker-alternatives",
    category: "parenting-apps",
    question: "What are alternatives to baby trackers?",
    title: "Baby Tracker Alternatives",
    metaTitle: "Baby Tracker Alternatives — Less Logging, More Calm",
    description:
      "Alternatives to obsessive baby tracking apps — tools that answer questions without a dashboard guilt loop.",
    quickAnswer:
      "If logging feeds and naps drains you, switch to question-based tools: outfits, night company, one activity, meal ideas.",
    bullets: [
      "Track only what a clinician asked for",
      "Question apps > spreadsheet apps",
      "Your memory is allowed to be fuzzy",
    ],
    sections: [
      {
        heading: "Tracking isn’t mandatory parenting",
        paragraphs: [
          "Some parents love data. Others feel worse. TinyBundle is for the second group — and the first group on hard nights.",
        ],
      },
    ],
    faqs: [],
    relatedSlugs: ["must-have-baby-apps"],
    sources: [],
  },
];
