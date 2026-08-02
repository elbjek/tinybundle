import type { GuidePage } from "@/lib/guides/types";

const DATE = "2026-07-24";

function seed(
  app: GuidePage["app"],
  href: string,
  label: string,
  blurb: string,
  p: Omit<
    GuidePage,
    "app" | "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb" | "publishedAt" | "modifiedAt"
  >,
): GuidePage {
  return {
    app,
    publishedAt: DATE,
    modifiedAt: DATE,
    ctaApp: app,
    ctaLabel: label,
    ctaHref: href,
    ctaBlurb: blurb,
    ...p,
    relatedSlugs: p.relatedSlugs ?? [],
  };
}

const BLOOMS = {
  href: "/tinyblooms",
  label: "See TinyBlooms",
  blurb: "One age-right idea at a time — TinyBlooms is coming soon from TinyBundle.",
} as const;

const HAVEN = {
  href: "/tinyhaven",
  label: "Open TinyHaven",
  blurb: "Soft company for the hard hours — anonymous check-ins, no profiles.",
} as const;

const MEALS = {
  href: "/tinymeals",
  label: "See TinyMeals",
  blurb: "A calm cookbook for introducing solids. Stage-right recipes written for babies.",
} as const;

const BUNDLE = {
  href: "/",
  label: "Explore TinyBundle",
  blurb: "Four calm apps for the questions new parents actually ask.",
} as const;

/** Deferred guides from articles-todo.md (exact-degree redirects + age×temp combos stay deferred). */
export function backlogSeeds(): GuidePage[] {
  return [
    // ——— TinyBlooms ———
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "indoor-baby-activities",
      category: "development",
      question: "What are good indoor baby activities?",
      title: "Indoor Baby Activities (No Fancy Setup)",
      metaTitle: "Indoor Baby Activities — Simple Ideas at Home",
      description:
        "Easy indoor baby activities when you can’t go out — short, calm ideas that fit real awake windows.",
      quickAnswer:
        "Floor play, face-to-face talk, a mirror, soft books, and a short supervised tummy-time stretch beat a packed schedule.",
      bullets: [
        "One activity per awake window is enough",
        "Use what you already own",
        "Stop when baby looks away or fusses",
      ],
      sections: [
        {
          heading: "Indoor doesn’t mean entertainment",
          paragraphs: [
            "Rain, heat, or a tired parent day doesn’t require a craft kit. Babies mostly need your face, your voice, and a safe place to move.",
            "Pick one idea: sit on the floor with a rattle, read one board book twice, or hold a mirror nearby during tummy time. Then stop. Ordinary time still counts.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long should an indoor activity last?",
          a: "Often 2–10 minutes. When interest fades, the activity is done — that’s not failure.",
        },
      ],
      relatedSlugs: [
        "rainy-day-baby-activities",
        "no-prep-baby-activities",
        "what-do-i-do-with-my-baby",
      ],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "rainy-day-baby-activities",
      category: "development",
      question: "What can I do with my baby on a rainy day?",
      title: "Rainy Day Baby Activities",
      metaTitle: "Rainy Day Baby Activities — Stay-Home Ideas",
      description:
        "Rainy-day baby activities that don’t need a trip out — calm indoor ideas for cabin-fever mornings.",
      quickAnswer:
        "Window watching, dance to one song, kitchen-pot drums (gently), a bath if that’s your rhythm, and lots of floor time.",
      bullets: [
        "Watch rain on the window together",
        "One song dance or sway",
        "Safe kitchen sounds and textures",
      ],
      sections: [
        {
          heading: "Cabin fever is a parent problem",
          paragraphs: [
            "Babies don’t mind grey weather the way we do. Your job is to lower your own pressure to “make the day special.”",
            "A short circuit of three tiny moments — song, floor play, snack or feed — usually resets the afternoon better than a long activity list.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["indoor-baby-activities", "no-prep-baby-activities", "baby-sensory-activities"],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "no-prep-baby-activities",
      category: "development",
      question: "What baby activities need zero prep?",
      title: "No-Prep Baby Activities",
      metaTitle: "No-Prep Baby Activities — Zero Setup Ideas",
      description:
        "Zero-prep baby activities for exhausted parents — ideas that start in under ten seconds.",
      quickAnswer:
        "Talk narrating what you’re doing, peekaboo, a hug-and-sway, naming colors on a shirt, or copying baby’s sounds.",
      bullets: [
        "Narrate the laundry or dishes",
        "Copy baby’s coos and faces",
        "Peekaboo with a blanket or hands",
      ],
      sections: [
        {
          heading: "If it needs a craft bin, skip it today",
          paragraphs: [
            "No-prep means you don’t leave the room to “set up.” Interaction is the activity.",
            "TinyBlooms is being built for exactly this mood: one idea, right now, matched to age — not a Pinterest rabbit hole.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["indoor-baby-activities", "what-do-i-do-with-my-baby", "how-to-stimulate-my-baby"],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "baby-sensory-activities",
      category: "development",
      question: "What are simple sensory activities for babies?",
      title: "Simple Baby Sensory Activities",
      metaTitle: "Baby Sensory Activities — Soft, Safe Ideas",
      description:
        "Gentle baby sensory activities using household textures, sounds, and light — without overstimulation.",
      quickAnswer:
        "Soft fabrics, crinkly paper supervised, warm vs cool spoons, quiet music, and outdoor air on the porch if you can.",
      bullets: [
        "One sense at a time",
        "Watch for overstimulation cues",
        "Household textures beat plastic kits",
      ],
      sections: [
        {
          heading: "Sensory ≠ loud",
          paragraphs: [
            "Sensory play is often sold as bright bins and chaos. For babies, quieter inputs usually land better: a silk scarf on their hand, your humming, sunlight through blinds.",
            "Stop at the first signs of looking away, arching, or frantic movements. Less is more.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is sensory play necessary every day?",
          a: "No. Ordinary life is already sensory. Dedicated “sensory time” is optional.",
        },
      ],
      relatedSlugs: ["indoor-baby-activities", "play-with-baby-by-age", "how-to-stimulate-my-baby"],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "activities-for-2-month-old",
      category: "development",
      question: "What are good activities for a 2-month-old?",
      title: "Activities for a 2-Month-Old",
      metaTitle: "2-Month-Old Activities — Calm Ideas",
      description:
        "Age-right activities for a 2-month-old — short tummy time, faces, voices, and lots of rest.",
      quickAnswer:
        "Face-to-face talk, high-contrast cards briefly, short supervised tummy time, and following sleepy cues.",
      bullets: [
        "Faces and voices first",
        "Brief tummy time with you close",
        "Protect naps over enrichment",
      ],
      sections: [
        {
          heading: "Two months still looks quiet",
          paragraphs: [
            "You may feel pressure to “do more.” At two months, connection and sleep matter more than toys.",
            "If baby lights up at your smile and then crashes, that was a successful activity block.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "activities-for-newborn",
        "activities-for-4-month-old",
        "tummy-time-ideas",
      ],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "activities-for-4-month-old",
      category: "development",
      question: "What are good activities for a 4-month-old?",
      title: "Activities for a 4-Month-Old",
      metaTitle: "4-Month-Old Activities — Play Ideas",
      description:
        "Play ideas for a 4-month-old — grasping, rolling practice, and short interactive games.",
      quickAnswer:
        "Offer graspable toys, supported sitting briefly, songs with gestures, and floor time for rolling practice.",
      bullets: [
        "Toys they can bat or grasp",
        "Songs with simple gestures",
        "Floor time over propped seats",
      ],
      sections: [
        {
          heading: "Four months = more interest, still short bursts",
          paragraphs: [
            "Attention stretches a little, but overstimulation still arrives fast. Rotate one or two toys instead of a pile.",
            "Follow their lead: if they reach, offer; if they fuss, end the game and hold them.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "activities-for-2-month-old",
        "play-with-baby-by-age",
        "what-do-i-do-with-my-baby",
      ],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "how-to-stimulate-my-baby",
      category: "development",
      question: "How do I stimulate my baby without overdoing it?",
      title: "How to Stimulate Your Baby (Gently)",
      metaTitle: "How to Stimulate Baby — Without Overstimulation",
      description:
        "How to stimulate a baby gently — connection-first ideas that avoid overstimulation guilt.",
      quickAnswer:
        "Talk, sing, make eye contact, offer one new texture or sound, then pause. Stimulation is a conversation, not a workout.",
      bullets: [
        "Watch cues more than timers",
        "One new input at a time",
        "Quiet recovery after busy moments",
      ],
      sections: [
        {
          heading: "Stimulation isn’t a scorecard",
          paragraphs: [
            "You don’t owe baby a curated enrichment plan. Everyday caregiving already stimulates brains.",
            "When people say “stimulate,” they often mean “engage.” Engagement can be a diaper change with a silly song.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can babies be overstimulated?",
          a: "Yes. Looking away, arching, crying after busy outings, or frantic movements are cues to dial down.",
        },
      ],
      relatedSlugs: [
        "no-prep-baby-activities",
        "baby-sensory-activities",
        "play-with-baby-by-age",
      ],
    }),
    seed("tinyblooms", BLOOMS.href, BLOOMS.label, BLOOMS.blurb, {
      slug: "play-with-baby-by-age",
      category: "development",
      question: "How should I play with my baby by age?",
      title: "How to Play With Baby by Age",
      metaTitle: "Play With Baby by Age — Simple Stages",
      description:
        "A calm map of how play changes from newborn to one year — without milestone panic.",
      quickAnswer:
        "Newborn: faces and voice. 2–3 months: tummy time and tracking. 4–6 months: grasp and sit-support. Later: explore safely beside you.",
      bullets: [
        "Match play to today’s energy",
        "Age bands are guides, not deadlines",
        "Side-by-side beats performance",
      ],
      sections: [
        {
          heading: "Age is a hint, not a script",
          paragraphs: [
            "Skip comparison charts. Use age only to choose something roughly right, then adjust to your baby.",
            "TinyBlooms will lean on age as a starting filter so you get one idea instead of fifty tabs.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "activities-for-newborn",
        "activities-for-2-month-old",
        "activities-for-4-month-old",
      ],
    }),

    // ——— TinyHaven ———
    seed("tinyhaven", HAVEN.href, HAVEN.label, HAVEN.blurb, {
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
      relatedSlugs: [
        "postpartum-loneliness",
        "am-i-the-only-one-awake",
        "everyone-else-seems-to-have-it-together",
      ],
    }),
    seed("tinyhaven", HAVEN.href, HAVEN.label, HAVEN.blurb, {
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
      relatedSlugs: ["baby-wont-sleep", "baby-wakes-every-hour", "am-i-the-only-one-awake"],
    }),
    seed("tinyhaven", HAVEN.href, HAVEN.label, HAVEN.blurb, {
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
      relatedSlugs: ["baby-wont-sleep", "4-month-sleep-regression", "awake-breastfeeding-alone"],
    }),
    seed("tinyhaven", HAVEN.href, HAVEN.label, HAVEN.blurb, {
      slug: "awake-breastfeeding-alone",
      category: "loneliness",
      question: "Why do night feeds feel so lonely?",
      title: "Awake Breastfeeding Alone at Night",
      metaTitle: "Night Feeds Alone — Soft Company",
      description:
        "Night feeds can feel lonely even when they’re “normal” — soft company for the breastfeeding or bottle shift.",
      quickAnswer:
        "Night feeding is intimate and isolating at once. You’re doing hard work in the dark; other parents are too.",
      bullets: [
        "Water, snack, dim light if you can",
        "Lower expectations for “rested”",
        "Anonymous company exists for this hour",
      ],
      sections: [
        {
          heading: "The night shift nobody sees",
          paragraphs: [
            "Partners may sleep (sometimes by agreement, sometimes not). Friends aren’t texting. The feed can feel endless.",
            "TinyHaven is a quiet check-in for that stretch — proof of other awake parents without a social feed.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["am-i-the-only-one-awake", "motherhood-is-lonely", "baby-wakes-every-hour"],
    }),
    seed("tinyhaven", HAVEN.href, HAVEN.label, HAVEN.blurb, {
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
      relatedSlugs: [
        "everyone-else-seems-to-have-it-together",
        "postpartum-loneliness",
        "baby-wont-sleep",
      ],
    }),
    seed("tinyhaven", HAVEN.href, HAVEN.label, HAVEN.blurb, {
      slug: "everyone-else-seems-to-have-it-together",
      category: "loneliness",
      question: "Why does everyone else seem to have it together?",
      title: "Everyone Else Seems to Have It Together",
      metaTitle: "Everyone Else Has It Together — You’re Not Alone",
      description:
        "When other parents look sorted and you feel behind — the gap between highlight reels and night reality.",
      quickAnswer:
        "You’re comparing your behind-the-scenes to other people’s edited outsides. Plenty of parents feel the same gap at 2am.",
      bullets: [
        "Feeds lie; nights don’t",
        "Quiet company > competitive advice",
        "Your pace is allowed",
      ],
      sections: [
        {
          heading: "The highlight reel problem",
          paragraphs: [
            "Outings, outfits, and “sleeping through” posts skip the hourly wakes and the kitchen floor cry.",
            "TinyHaven skips the performance layer — anonymous presence instead of another place to look polished.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "motherhood-is-lonely",
        "is-this-normal-baby",
        "am-i-the-only-one-awake",
      ],
    }),

    // ——— TinyMeals ———
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "6-month-baby-meal-ideas",
      category: "cooking",
      question: "What are easy 6-month baby meal ideas?",
      title: "6-Month Baby Meal Ideas",
      metaTitle: "6-Month Baby Meal Ideas — First Solids",
      description:
        "Simple 6-month baby meal ideas for starting solids — soft textures and low-pressure plates.",
      quickAnswer:
        "Soft single foods your clinician recommends: mashed veg, fruit, iron-rich options, yogurt if advised — tiny portions, lots of practice.",
      bullets: [
        "Follow your clinician on timing",
        "Soft and simple beats variety shows",
        "Expect mess and small volumes",
      ],
      sections: [
        {
          heading: "Six months is practice, not performance",
          paragraphs: [
            "Milk is still the main nutrition for most babies at this stage. Food is exploration.",
            "Adapt family cooking: less salt, softer texture, sit with them. TinyMeals aims to suggest plates from what’s already in your kitchen.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["first-baby-foods", "baby-puree-ideas", "9-month-baby-meal-ideas"],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "9-month-baby-meal-ideas",
      category: "cooking",
      question: "What are easy 9-month baby meal ideas?",
      title: "9-Month Baby Meal Ideas",
      metaTitle: "9-Month Baby Meal Ideas — Soft Finger Foods",
      description:
        "Practical 9-month baby meal ideas — soft finger foods and family-plate adaptations.",
      quickAnswer:
        "Soft strips and mash: ripe fruit, well-cooked veg, soft omelette, pasta shapes, minced soft proteins — always supervised.",
      bullets: [
        "Finger foods + spoon foods can mix",
        "Cut to safe sizes for their skill",
        "Family dinner, modified",
      ],
      sections: [
        {
          heading: "Nine months wants to self-feed (mess included)",
          paragraphs: [
            "Offer food they can pick up and foods you help with. Don’t stress perfect ratios every meal.",
            "If chewing skill is new, keep textures soft enough to squash between fingers.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "6-month-baby-meal-ideas",
        "12-month-baby-meal-ideas",
        "finger-foods-for-babies",
      ],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "12-month-baby-meal-ideas",
      category: "cooking",
      question: "What are easy 12-month baby meal ideas?",
      title: "12-Month Baby Meal Ideas",
      metaTitle: "12-Month Baby Meal Ideas — Toddler Transition",
      description:
        "Simple 12-month baby meal ideas as milk shifts and family foods take more of the plate.",
      quickAnswer:
        "Mostly family food with less salt and safer shapes: soft proteins, veg, fruit, carbs they can manage — plus milk per clinician guidance.",
      bullets: [
        "Cook once for the table",
        "Watch choking hazards",
        "Snacks can be tiny meals",
      ],
      sections: [
        {
          heading: "One year, still not a restaurant guest",
          paragraphs: [
            "You don’t need a separate toddler menu forever. Keep modifying salt, spice, and size.",
            "Follow your clinician on cow’s milk and allergy questions for your child.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "9-month-baby-meal-ideas",
        "baby-dinner-ideas",
        "finger-foods-for-babies",
      ],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "baby-breakfast-ideas",
      category: "cooking",
      question: "What are easy baby breakfast ideas?",
      title: "Easy Baby Breakfast Ideas",
      metaTitle: "Baby Breakfast Ideas — Quick Morning Plates",
      description:
        "Quick baby breakfast ideas for tired mornings — soft, repeatable options from a normal kitchen.",
      quickAnswer:
        "Mashed banana, yogurt with soft fruit, oatmeal thinned and cooled, scrambled egg if age-right, or leftover soft dinner.",
      bullets: [
        "Repeat favorites without guilt",
        "Prep the night before if mornings hurt",
        "Match texture to stage",
      ],
      sections: [
        {
          heading: "Breakfast can be boring",
          paragraphs: [
            "Variety is overrated when sleep was short. A reliable three-item rotation is a win.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["baby-lunch-ideas", "baby-dinner-ideas", "baby-meal-ideas"],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "baby-lunch-ideas",
      category: "cooking",
      question: "What are easy baby lunch ideas?",
      title: "Easy Baby Lunch Ideas",
      metaTitle: "Baby Lunch Ideas — Simple Midday Plates",
      description:
        "Simple baby lunch ideas when midday hits and inspiration is gone.",
      quickAnswer:
        "Soft pasta with veg, mashed beans, avocado toast strips (age-right), leftover dinner, or cottage cheese with fruit if advised.",
      bullets: [
        "Leftovers are a valid lunch",
        "One protein + one soft carb + fruit/veg",
        "Sit together when you can",
      ],
      sections: [
        {
          heading: "Lunch is often the decision-fatigue meal",
          paragraphs: [
            "Default to what you already cooked. TinyMeals is meant to reduce the fridge-stare spiral.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["baby-breakfast-ideas", "baby-dinner-ideas", "recipes-from-leftovers"],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "baby-dinner-ideas",
      category: "cooking",
      question: "What are easy baby dinner ideas?",
      title: "Easy Baby Dinner Ideas",
      metaTitle: "Baby Dinner Ideas — Family Plate Adaptations",
      description:
        "Easy baby dinner ideas from the family meal — soften, de-salt, and serve a tiny portion.",
      quickAnswer:
        "Whatever adults are eating, adapted: less salt, softer texture, safe shapes — roasted veg mash, soft fish, minced meat sauce, mild curry cooled.",
      bullets: [
        "Cook once",
        "Pull baby’s portion before heavy seasoning",
        "Supervise always",
      ],
      sections: [
        {
          heading: "Dinner without a second kitchen",
          paragraphs: [
            "A parallel baby cookbook is how parents burn out. Adapt the pot you already started.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "dinner-with-whats-in-my-fridge",
        "recipes-from-leftovers",
        "baby-meal-ideas",
      ],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "baby-puree-ideas",
      category: "cooking",
      question: "What are simple baby puree ideas?",
      title: "Simple Baby Puree Ideas",
      metaTitle: "Baby Puree Ideas — Easy First Textures",
      description:
        "Simple baby puree ideas from everyday veg and fruit — no specialty gadgets required.",
      quickAnswer:
        "Steam and mash: carrot, sweet potato, pear, apple, pea. Thin with water, breastmilk, or formula as your clinician suggests.",
      bullets: [
        "Single ingredients to start",
        "Fork mash works for many foods",
        "Freeze extras in ice-cube trays if useful",
      ],
      sections: [
        {
          heading: "Purees are a tool, not a religion",
          paragraphs: [
            "Some families blend; some mash; some skip to soft finger foods. Follow your clinician and your baby’s cues.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["first-baby-foods", "6-month-baby-meal-ideas", "baby-meal-ideas"],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "finger-foods-for-babies",
      category: "cooking",
      question: "What finger foods are safe for babies?",
      title: "Finger Foods for Babies",
      metaTitle: "Finger Foods for Babies — Soft, Graspable Ideas",
      description:
        "Soft finger food ideas for babies learning to self-feed — textures you can squash between fingers.",
      quickAnswer:
        "Soft enough to squash: ripe banana spears, steamed carrot sticks, avocado slices, soft omelette strips, well-cooked pasta — always supervised.",
      bullets: [
        "Avoid hard rounds and whole nuts",
        "Sit upright and watch them",
        "Size for their grasp",
      ],
      sections: [
        {
          heading: "Finger food safety is supervision + texture",
          paragraphs: [
            "If it doesn’t squash easily, wait or cook longer. Ask your clinician about allergens and timing for your baby.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "baby-led-weaning-meal-ideas",
        "9-month-baby-meal-ideas",
        "allergen-introduction-meal-ideas",
      ],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "allergen-introduction-meal-ideas",
      category: "cooking",
      question: "How do I introduce allergens in baby meals?",
      title: "Allergen Introduction Meal Ideas",
      metaTitle: "Allergen Introduction — Meal Ideas for Babies",
      description:
        "Calm allergen-introduction meal ideas — small amounts, daytime trials, clinician guidance first.",
      quickAnswer:
        "Follow your clinician’s plan. Introduce one new allergen at a time in a soft food, often earlier in the day, and watch for reactions.",
      bullets: [
        "Clinician guidance beats internet lists",
        "Daytime first exposures help observation",
        "Keep the rest of the meal familiar",
      ],
      sections: [
        {
          heading: "This is medical territory",
          paragraphs: [
            "Allergy timing and high-risk babies need personalized advice. This page is for the kitchen logistics once you have a plan: small smear of peanut butter thinned into puree, well-cooked egg, yogurt — whatever your clinician approved.",
            "Stop and seek care for hives, swelling, vomiting, or breathing changes.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["first-baby-foods", "finger-foods-for-babies", "6-month-baby-meal-ideas"],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "recipes-from-leftovers",
      category: "cooking",
      question: "How do I turn leftovers into baby meals?",
      title: "Recipes From Leftovers (Adult + Baby)",
      metaTitle: "Leftover Recipes for Baby and Adults",
      description:
        "Turn last night’s leftovers into today’s baby and adult meals — less waste, less cooking.",
      quickAnswer:
        "Reheat safely, pull a low-salt soft portion for baby, and remix the rest into wraps, bowls, or omelettes for you.",
      bullets: [
        "Baby portion before heavy reheating sauces",
        "Remix shapes: mash, mince, soft cubes",
        "One cook, two days",
      ],
      sections: [
        {
          heading: "Leftovers are a parenting skill",
          paragraphs: [
            "Food waste often happens because tomorrow’s brain can’t invent a new meal. Plan one “use it up” plate every few days.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "how-to-stop-food-waste",
        "baby-lunch-ideas",
        "dinner-with-whats-in-my-fridge",
      ],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "dinner-with-whats-in-my-fridge",
      category: "cooking",
      question: "What can I cook with what’s in my fridge?",
      title: "Dinner With What’s in My Fridge",
      metaTitle: "Fridge Dinner Ideas — Baby-Friendly Adaptations",
      description:
        "Decision-fatigued dinner from fridge inventory — plus how to carve a baby-safe portion.",
      quickAnswer:
        "List protein + veg + carb you already have, cook the simplest version, pull baby’s soft unsalted share first.",
      bullets: [
        "Inventory before recipes",
        "One-pan or one-pot wins",
        "Baby eats a modified scoop of yours",
      ],
      sections: [
        {
          heading: "The fridge stare is real",
          paragraphs: [
            "TinyMeals is being built for this exact moment — suggest a plate from what you own, including a baby adaptation.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["pantry-recipes", "recipes-from-leftovers", "baby-dinner-ideas"],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "pantry-recipes",
      category: "cooking",
      question: "What can I cook from the pantry with a baby?",
      title: "Pantry Recipes for Busy Parents",
      metaTitle: "Pantry Recipes — Baby-Friendly Staples",
      description:
        "Pantry-staple dinners that still yield a soft baby portion — beans, pasta, rice, tinned fish, oats.",
      quickAnswer:
        "Pasta + olive oil + soft veg; rice + lentils; oats for breakfast mash; tinned beans mashed — keep salt low for baby’s share.",
      bullets: [
        "Staples beat specialty baby food",
        "Tinned and frozen count",
        "Season adult bowls separately",
      ],
      sections: [
        {
          heading: "A short pantry list goes far",
          paragraphs: [
            "If the fridge is empty, the cupboard often isn’t. Build dinners from carbs + something soft + fruit.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "dinner-with-whats-in-my-fridge",
        "how-to-stop-food-waste",
        "baby-meal-ideas",
      ],
    }),
    seed("tinymeals", MEALS.href, MEALS.label, MEALS.blurb, {
      slug: "how-to-stop-food-waste",
      category: "cooking",
      question: "How do I stop food waste with a baby?",
      title: "How to Stop Food Waste at Home",
      metaTitle: "Stop Food Waste — Busy Parent Habits",
      description:
        "Practical ways to reduce food waste with a baby — visibility, use-it-up meals, and baby adaptations.",
      quickAnswer:
        "Keep a rough fridge inventory, cook soon-to-spoil first, plan one leftover remix, and share adult food with baby when textures allow.",
      bullets: [
        "See what you own",
        "Cook the urgent stuff first",
        "Baby portions from the same pot",
      ],
      sections: [
        {
          heading: "Waste is often a visibility problem",
          paragraphs: [
            "If you can’t see it, you’ll buy it again. A clear bin and one weekly “fridge dinner” cut waste more than perfect meal plans.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "recipes-from-leftovers",
        "dinner-with-whats-in-my-fridge",
        "pantry-recipes",
      ],
    }),

    // ——— TinyBundle ———
    seed("tinybundle", BUNDLE.href, BUNDLE.label, BUNDLE.blurb, {
      slug: "newborn-apps",
      category: "parenting-apps",
      question: "What apps do newborns’ parents actually need?",
      title: "Newborn Apps Worth Keeping",
      metaTitle: "Newborn Apps — Calm Tools, Not Trackers",
      description:
        "Which newborn apps help in the early weeks — and which add guilt. TinyBundle’s calm alternatives.",
      quickAnswer:
        "Prioritize tools for real questions (what to wear, am I alone, what do we do now) over apps that demand constant logging.",
      bullets: [
        "TinyLayers — outfits by temp and context",
        "TinyHaven — night company",
        "TinyBlooms — one activity idea",
      ],
      sections: [
        {
          heading: "Fewer apps, clearer jobs",
          paragraphs: [
            "Newborn weeks don’t need a productivity suite. Pick tools that answer a question and get out of your way.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "must-have-baby-apps",
        "best-apps-for-first-time-parents",
        "postpartum-apps",
      ],
    }),
    seed("tinybundle", BUNDLE.href, BUNDLE.label, BUNDLE.blurb, {
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
      relatedSlugs: [
        "newborn-apps",
        "baby-tracker-alternatives",
        "apps-for-new-moms",
      ],
    }),
    seed("tinybundle", BUNDLE.href, BUNDLE.label, BUNDLE.blurb, {
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
      relatedSlugs: [
        "must-have-baby-apps",
        "best-apps-for-first-time-parents",
        "postpartum-apps",
      ],
    }),
    seed("tinybundle", BUNDLE.href, BUNDLE.label, BUNDLE.blurb, {
      slug: "postpartum-apps",
      category: "parenting-apps",
      question: "What apps help postpartum?",
      title: "Postpartum Apps That Don’t Add Pressure",
      metaTitle: "Postpartum Apps — Soft Support Tools",
      description:
        "Postpartum apps that support lonely nights and practical questions — without productivity guilt.",
      quickAnswer:
        "Look for soft company, practical dressing help, and low-pressure activity or meal ideas — not apps that score your recovery.",
      bullets: [
        "TinyHaven for night loneliness",
        "TinyLayers for daily dressing stress",
        "Ask a clinician about health apps",
      ],
      sections: [
        {
          heading: "Recovery isn’t an app challenge",
          paragraphs: [
            "If an app makes you feel behind, delete it. Postpartum needs care, rest, and sometimes clinical support — software is optional.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "apps-for-new-moms",
        "newborn-apps",
        "motherhood-is-lonely",
      ],
    }),
    seed("tinybundle", BUNDLE.href, BUNDLE.label, BUNDLE.blurb, {
      slug: "apps-for-new-moms",
      category: "parenting-apps",
      question: "What apps help new moms?",
      title: "Apps for New Moms (Without the Guilt Stack)",
      metaTitle: "Apps for New Moms — Calm Parent Tools",
      description:
        "Apps for new moms that answer real questions — night loneliness, outfits, activities, meals — without tracker overload.",
      quickAnswer:
        "Choose apps with one clear job. TinyBundle’s four apps map to four 2am questions parents actually search.",
      bullets: [
        "Am I alone? → TinyHaven",
        "What should baby wear? → TinyLayers",
        "What do we do / eat? → TinyBlooms & TinyMeals",
      ],
      sections: [
        {
          heading: "New mom apps should shrink the tab count",
          paragraphs: [
            "If your phone becomes another chore list, simplify. Keep the tools that answer tonight’s question.",
          ],
        },
      ],
      faqs: [],
      relatedSlugs: [
        "best-apps-for-first-time-parents",
        "must-have-baby-apps",
        "postpartum-apps",
      ],
    }),
  ];
}
