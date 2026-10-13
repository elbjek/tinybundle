import { launch } from "@/components/home/launch-copy";
import type { FaqItem } from "@/components/site/faq";

/** The homepage questions. The FAQ section and the FAQPage structured data both read this list. */
export const HOME_FAQS: FaqItem[] = [
  {
    q: "What is TinyBundle?",
    a: "TinyBundle is a family of four calm parenting apps from Two Brick Labs: TinyLayers for what your baby should wear, TinyMeals for starting solids, TinyBlooms for play ideas, gentle milestones and memories, and TinyNaps for tracking sleep, feeds and diapers.",
  },
  {
    q: "What should my baby wear to sleep at 18°C?",
    a: "At a room temperature of 17–21°C, TinyLayers suggests a long-sleeve bodysuit, a footed sleepsuit and a 2.5 TOG sleeping bag. Check the back of your baby’s neck: it should feel warm, not sweaty.",
  },
  {
    q: "What TOG sleeping bag does my baby need?",
    a: "Use 0.5 TOG above 24°C, 1.0 TOG at 21–24°C, 2.5 TOG at 17–21°C, and 3.5 TOG below 17°C. TinyLayers works this out from your room temperature and tells you what to layer underneath.",
  },
  {
    q: "When can my baby start solid foods?",
    a: "Most health bodies, including the WHO and NHS, recommend starting solids at around 6 months, when your baby can sit up with support, hold their head steady and bring food to their mouth. Speak to your health visitor or paediatrician if you’re unsure.",
  },
  {
    q: "Is baby-led weaning or purées better?",
    a: "Both are fine, and many families do a mix. TinyMeals supports spoon-fed purées, baby-led weaning finger foods, or both, and adjusts textures as your baby grows.",
  },
  {
    q: "What activities can I do with my 4-month-old?",
    a: "At around 4 months, babies love mirror play, reaching for toys, tummy time with something interesting to look at, and simple songs. TinyBlooms suggests one idea at a time based on your baby’s age and how much time you have.",
  },
  {
    q: "What’s the easiest way to track my baby’s sleep, feeds and diapers?",
    a: "Log each one as it happens, with as few taps as possible. TinyNaps puts sleep, feeds and diapers on one screen, shows when your baby last ate or slept, and keeps a timeline you can bring to check-ups. It helps you understand your own records; it doesn’t predict sleep or give medical advice.",
  },
  {
    q: "Do the apps give medical advice?",
    a: "No. The apps offer everyday guidance based on published sources, not medical advice. Always speak to a healthcare professional about your baby’s health.",
  },
  { q: "Which devices do the apps work on?", a: launch.devices },
];
