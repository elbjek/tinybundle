import type { GuideContent } from "@/lib/guides/types";
import {
  CDC_MILESTONE_TRACKER_APP,
  NHS_BEST_START_IN_LIFE_HEALTH_ADVICE,
  NHS_BREASTFEEDING_IS_MY_BABY_GETTING_ENO,
  NHS_BREASTFEEDING_THE_FIRST_FEW_DAYS,
  NHS_HELPING_SLEEP,
  NHS_HIGH_TEMPERATURE_FEVER_IN_CHILDREN,
  NHS_HOW_TO_GET_FAMILY_AND_CARER_ACCESS_F,
  NHS_LONELINESS_EVERY_MIND_MATTERS,
  NHS_POSTNATAL_DEPRESSION,
  NHS_SIDS,
  NHS_URGENT_MENTAL_HEALTH,
  NHS_YOUR_BABY_S_WEIGHT_AND_HEIGHT,
  WHO_PERINATAL_MENTAL_HEALTH,
} from "@/lib/guides/content/sources";
import { URGENT_HELP_LINE } from "@/lib/guides/content/shared";

export const BUNDLE_GUIDES: GuideContent[] = [
  {
    slug: "must-have-baby-apps",
    category: "parenting-apps",
    question: "What are must-have baby apps?",
    title: "Must-have baby apps: a short, honest list for new parents",
    metaTitle: "Must-have baby apps: a short, honest list for parents",
    description:
      "The few baby apps that genuinely help new parents, free NHS tools first, plus what to skip and where to get help after birth if you are struggling.",
    quickAnswer:
      "The must-have baby apps are fewer than the charts suggest: the NHS App for your GP surgery, NHS Best Start in Life for trusted advice by your baby’s age, and one or two small tools that answer a question you keep asking. Anything that adds chores or worry can go.",
    bullets: [
      "Start with free, official tools: the NHS App and NHS Best Start in Life.",
      "Keep apps that answer a question you ask often, not apps that ask you for data.",
      "Your midwife, health visitor and GP matter more than any app.",
      "Postnatal low mood needs a person, not a download: talk to your GP, midwife or health visitor.",
    ],
    sections: [
      {
        heading: "What apps do first-time parents actually need?",
        paragraphs: [
          "Most first-time parents need two official tools and very little else. A good test for any other app: does it save you time or worry most days, or does it hand you another job?",
          "Logging everything is not a requirement of good parenting. Pick tools by the questions you actually ask.",
        ],
        list: [
          "How do I book a GP appointment for my baby?",
          "What should my baby wear right now?",
          "What can we do together today?",
          "What do I feed them when we start solids?",
        ],
      },
      {
        heading: "Which free NHS and official apps should you get first?",
        paragraphs: ["Start with the free official resources."],
        list: [
          "The NHS App (England). If you and your baby are registered at the same GP surgery, ask the surgery for family and carer access (also called proxy access). Depending on what it allows, you may be able to book appointments, order repeat prescriptions and view test results or vaccinations.",
          "NHS Best Start in Life on nhs.uk, where the old Start for Life advice now sits. It covers feeding, newborn care, bonding, weaning and toddler development, and you can sign up for emails tailored to your stage of pregnancy or your baby’s age.",
          "Your baby’s red book. Your health visitor records checks and growth in it, so keep it somewhere easy to grab for appointments.",
          "For readers in the US: the CDC’s free Milestone Tracker app covers children from 2 months to 5 years, with checklists, photos and videos of milestones and a summary you can share with your doctor.",
        ],
      },
      {
        heading: "What apps do newborns’ parents actually need?",
        paragraphs: [
          "In the first weeks, the most useful thing on your phone is a list of numbers, not an app: your midwife, your health visitor, your GP surgery and NHS 111. Save them now so you are not searching at 3am.",
          "Beyond that, newborn life is mostly feeding, changing, sleeping and holding, and none of it needs an app. If your midwife or health visitor asks you to note feeds or nappies, a notes app is enough.",
        ],
      },
      {
        heading: "What apps help new mums?",
        paragraphs: [
          "The apps that help new mums most tend to reduce decisions rather than add them. Look for one clear job, no streaks and no scores, and the option to close it without losing anything.",
          "Be wary of feeds that compare babies or bodies. If an app leaves you feeling behind, delete it. Real company counts too: a baby group, a friend on the phone, your health visitor.",
        ],
      },
      {
        heading: "What apps help after birth and postpartum?",
        paragraphs: [
          "After birth, no app replaces a conversation with your GP, midwife or health visitor. Lots of new parents have a few days of feeling tearful, on edge or short-tempered soon after the birth. This is known as the baby blues, and it normally lifts within 2 weeks. If the feelings hang on beyond that, get stronger, or make it hard to manage day to day, ask for help.",
          "Postnatal depression can begin during pregnancy or at any point in the first year after the birth. Signs the NHS describes include:",
        ],
        list: [
          "A mood that stays low, or losing pleasure in things",
          "Feeling overwhelmed or without hope, or weighed down by guilt and a sense that you are worthless",
          "Worry, fear or anxiety that rarely lets up",
          "Struggling to sleep even when there is a chance to rest",
          "Finding it hard to feel close to your baby",
          "Thinking about ending your life, or about hurting yourself or your baby: get urgent help straight away, and call 999 (or your local emergency number) if anyone is in immediate danger",
        ],
      },
      {
        heading: "Where do the TinyBundle apps fit?",
        paragraphs: [
          "TinyBundle is four small iPhone apps, each built around one question. TinyLayers suggests what to dress your baby in for sleep, naps, going out, the pram, a carrier or the car seat, with a free plan of one sleep check a day. TinyNaps is a calm tracker for sleep, feeds and nappies, coming soon. TinyMeals offers simple recipes matched to your baby’s stage of starting solids, and TinyBlooms, coming soon, offers one age-right play idea at a time.",
        ],
      },
      {
        heading: "Which baby apps can you skip?",
        paragraphs: [
          "Skip anything that makes you feel watched, behind or anxious: apps that grade your baby, push milestone comparisons or send notifications you never asked for.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the NHS App useful for babies?",
        a: "It can be, once you and your baby are registered at the same GP surgery. Ask the surgery to set up online family and carer access, sometimes called proxy access. Depending on what they allow, you may be able to book appointments, order repeat prescriptions and see test results or vaccinations for your baby. Some surgeries are trialling applications through the NHS App.",
      },
      {
        q: "Is NHS Start for Life still available?",
        a: "The Start for Life advice has moved into NHS Best Start in Life on nhs.uk. It covers pregnancy, babies and toddlers, including feeding, newborn care, weaning and early development. You can sign up for emails tailored to your stage of pregnancy or your baby’s age, so the advice arrives when it is relevant rather than all at once.",
      },
      {
        q: "Is there an app for postnatal depression?",
        a: "Apps can offer company or calm, but postnatal depression needs real support. Speak to your GP, midwife or health visitor, even if only a few of the signs fit. In England, adults can also refer themselves to NHS talking therapies. If you have thoughts of harming yourself or your baby, get urgent help straight away.",
      },
      {
        q: "Are milestone tracker apps worth it?",
        a: "They can be reassuring if you use them lightly. In the US, the CDC’s free Milestone Tracker app covers 2 months to 5 years and creates a summary to share with your doctor. In the UK, your health visitor is the person to ask. Babies develop at different rates, so raise any worry with them rather than relying on an app.",
      },
    ],
    relatedSlugs: [
      "baby-tracker-alternatives",
      "motherhood-is-lonely",
      "am-i-the-only-one-awake",
      "first-baby-foods",
    ],
    sources: [
      NHS_BEST_START_IN_LIFE_HEALTH_ADVICE,
      NHS_HOW_TO_GET_FAMILY_AND_CARER_ACCESS_F,
      NHS_POSTNATAL_DEPRESSION,
      CDC_MILESTONE_TRACKER_APP,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-tracker-alternatives",
    category: "parenting-apps",
    question: "What should I track for my newborn baby?",
    title: "Baby tracker guide: what is worth tracking for your baby, and what to skip",
    metaTitle: "Baby tracker: what is worth tracking and what to skip",
    description:
      "What is worth tracking for a newborn or young baby, what you can skip, the NHS feeding and nappy signs to watch, and how to keep a baby tracker light.",
    quickAnswer:
      "A baby tracker is most useful for a few things in the early weeks: feeds, wet nappies and dirty nappies. Weight lives in the red book. You can skip logging every minute. Track more when feeding is new, a professional asks, your baby is unwell or you share care, then ease off.",
    bullets: [
      "Worth tracking early on: feeds, wet nappies and dirty nappies.",
      "Weight is checked by professionals and kept in the red book.",
      "Track more for a while when your baby is unwell, a professional asks or you share care.",
      "Keep it light: a few things, one tap each, and stop when it stops helping.",
    ],
    sections: [
      {
        heading: "What is worth tracking for a newborn?",
        paragraphs: [
          "In the first weeks, feeds and nappies are worth tracking. They are how the NHS suggests you tell whether a breastfed baby is getting enough milk, and what your midwife or health visitor will likely ask about.",
          "If you are worried, ask your midwife, health visitor or a breastfeeding specialist for help early, or call the National Breastfeeding Helpline (24 hours) on 0300 100 0212. The NHS signs that a breastfed baby is getting enough milk:",
        ],
        list: [
          "Feeds: as a very rough guide, a minimum of 8 to 12 feeds in each 24 hours during the first few weeks, which in the first days might mean a feed every 1 to 3 hours",
          "Wet nappies: only 2 or 3 in the first 48 hours, then from day 5 at least 6 heavy, wet nappies every 24 hours",
          "Poos: from day 4, and for the first few weeks, a minimum of 2 soft yellow poos a day, each roughly as big as a £2 coin",
          "Weight: some loss in the first 3 to 4 days is normal, then steady gain",
        ],
      },
      {
        heading: "What can you skip tracking?",
        paragraphs: [
          "Skip anything that does not answer a question you actually have. The NHS signs to watch are feeding, nappies and weight, which do not mean timing every feed or logging every nap.",
          "Sleep is the easiest thing to over-track. The NHS says it is usual for newborns to wake again and again through the night in their first months, and every baby has their own pattern. No chart or wake window can promise when your baby will sleep.",
        ],
      },
      {
        heading: "When does baby tracking genuinely help?",
        paragraphs: [
          "Tracking helps most when it answers one question for a short time.",
        ],
        list: [
          "The first week or two of breastfeeding",
          "When your midwife, health visitor or GP asks you to note something",
          "When your baby is unwell, so you can say what changed and when",
          "When you give a medicine and need to remember the last dose",
          "When you share care, so whoever takes over knows what happened last",
        ],
      },
      {
        heading: "What to note if your baby is unwell",
        paragraphs: [
          "When your baby is ill, timed notes of temperatures, feeds, wet nappies and medicines help NHS 111 or your GP. The NHS says a high temperature is 38°C (100.4°F) or more.",
          "Call NHS 111 if your baby is under 3 months with a temperature of 38°C or higher, 3 to 6 months with 39°C or higher, or shows signs of dehydration, such as nappies that are not very wet. Call 999 or your local emergency number if your baby is hard to wake, struggling to breathe or has a rash that does not fade under a glass.",
        ],
      },
      {
        heading: "How is your baby’s weight tracked?",
        paragraphs: [
          "Professionals track it for you, on centile charts in the red book (the personal child health record). Babies are weighed in their first 2 weeks, and most are at or above their birthweight by 3 weeks. After that, unless there is a concern, the NHS suggests a weigh-in at most monthly until 6 months, at most every other month between 6 and 12 months, and at most every 3 months once your baby is over 1.",
        ],
      },
      {
        heading: "Baby tracker alternatives: how to keep it light",
        paragraphs: [
          "Track two or three things, not everything, and keep each entry quick enough to do with a baby in your arms. TinyNaps from TinyBundle, coming soon to iPhone, is a calm tracker for sleep, feeds and nappies where most logs take a single tap.",
        ],
        list: [
          "A paper sheet on the fridge with ticks for wet and dirty nappies",
          "A line in your phone’s notes app, only while you need it",
          "A photo of an unusual nappy to show your midwife or health visitor",
          "A one-tap tracker app, for logging one-handed in the dark",
        ],
      },
      {
        heading: "When can you stop tracking your baby?",
        paragraphs: [
          "You can usually ease off once feeding is established, nappies match the NHS signs above and your baby is gaining weight at their checks. If your health visitor asked for notes, check with them first.",
          "If logging makes you anxious or keeps you awake, that is reason enough to stop. You can always restart for a few days if your baby is unwell.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should a newborn feed?",
        a: "As a very rough guide, the NHS says breastfed babies feed a minimum of 8 to 12 times in each 24 hours during the first few weeks, and in the first days that might be as often as every 1 to 3 hours. Feed whenever your baby shows they want to, for as long as they want.",
      },
      {
        q: "Should I write down every feed?",
        a: "Usually not. NHS feeding guidance asks you to watch nappies, feeding signs and weight rather than log every feed. Notes can help for a few days while breastfeeding settles, or if your midwife or health visitor asks. Once feeding is going well, you can stop.",
      },
      {
        q: "Should I track my baby’s sleep?",
        a: "You do not have to. It is usual for newborns to wake again and again through the night in their first months, and every baby has their own pattern, so a log cannot tell you what is normal. It can help you notice your baby’s rhythm or answer your health visitor. Treat any wake window as a rough guide, never a promise.",
      },
      {
        q: "Is it bad to use a baby tracker app?",
        a: "Not at all. If logging helps you feel organised or share care, keep using it. It only becomes a problem if the numbers make you anxious or keep you awake. You can track just one thing, such as nappies in the first week, and drop the rest.",
      },
    ],
    relatedSlugs: [
      "4-month-sleep-regression",
      "baby-wakes-every-hour",
      "is-this-normal-baby",
      "must-have-baby-apps",
    ],
    sources: [
      NHS_BREASTFEEDING_IS_MY_BABY_GETTING_ENO,
      NHS_BREASTFEEDING_THE_FIRST_FEW_DAYS,
      NHS_YOUR_BABY_S_WEIGHT_AND_HEIGHT,
      NHS_HELPING_SLEEP,
      NHS_HIGH_TEMPERATURE_FEVER_IN_CHILDREN,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "am-i-the-only-one-awake",
    category: "loneliness",
    question: "Am I the only one awake with my baby?",
    title: "Am I the only one awake? Why night feeds feel so lonely",
    metaTitle: "Am I the only one awake? Lonely night feeds explained",
    description:
      "You are not the only one awake with your baby. Why night feeds feel so lonely, how to make them easier and when low mood needs help from your GP.",
    quickAnswer:
      "No, you are not the only one awake. The NHS says it is usual for newborns to wake again and again through the night in their first months, so many parents are feeding and settling at the same hour as you. Night feeds feel lonely because the house is dark and quiet, and nobody sees the work you are doing.",
    bullets: [
      "Frequent night waking is normal for newborns",
      "Loneliness at 3am is common and does not mean you are failing",
      "Small changes can make night feeds easier and safer",
      "Share the nights if you can, and rest when your baby rests",
      "Low mood that lasts beyond 2 weeks, gets worse or stops you coping needs a chat with your GP, midwife or health visitor",
    ],
    sections: [
      {
        heading: "Am I the only one awake with my baby at night?",
        paragraphs: [
          "Almost certainly not. The NHS describes newborns as sleeping for around 18 hours a day in short stretches, waking often in the night to feed. That pattern repeats in homes all over the country, every night.",
          "Between 3 and 6 months, babies need fewer night feeds as they grow, and some manage a stretch of 5 to 8 hours or more overnight. Many do not, and that is normal too. Hunger, being too hot or too cold, growth spurts, teething and illness can all bring extra wake-ups.",
        ],
      },
      {
        heading: "Why do night feeds feel so lonely?",
        paragraphs: [
          "Night feeds are tender and isolating at the same time. You are holding someone you love, yet you may not have spoken to another adult for hours. The house is dark and your partner, if you have one, may be asleep.",
          "Tiredness makes every feeling louder. A worry that seems small at noon can feel huge at 3am. Feeling lonely during night feeds is a common part of early parenthood, whether you breastfeed, bottle feed or do both.",
        ],
      },
      {
        heading: "How to make night feeds easier",
        paragraphs: [
          "The NHS suggests teaching your baby the difference between night and day early on. Keeping nights calm and dull helps your baby settle back to sleep sooner, which helps you too.",
        ],
        list: [
          "Keep the lights low and speak quietly",
          "Settle your baby soon after feeding and changing",
          "Only change a nappy at night if it is really needed",
          "Avoid playing at night; save chatter and games for the daytime",
          "Try to sleep when your baby sleeps, once they are back in their cot",
          "Keep water and a snack within reach before you sit down",
        ],
      },
      {
        heading: "How to stay safe if you are very tired",
        paragraphs: [
          "When you are exhausted, it is easy to drift off during a feed. The NHS advises never dozing off on a sofa or armchair while holding your baby, as this raises the risk of SIDS. If you feel yourself falling asleep, put your baby down on their back in their own cot.",
        ],
        list: [
          "Keep your baby in a cot or Moses basket in your room for at least the first 6 months",
          "Always lay your baby on their back in the feet-to-foot position, with their feet touching the end of the cot",
          "Use a firm, flat mattress with nothing loose in the cot",
          "Keep the room between 16°C and 20°C (61°F to 68°F)",
          "Do not share a bed if you or your partner smoke, have had 2 or more units of alcohol, or have taken recreational drugs or medicine that makes you drowsy, or if your baby was born premature or weighed under 2.5kg (5.5lb)",
        ],
      },
      {
        heading: "Who can help with the night shift?",
        paragraphs: [
          "The NHS suggests sharing the load where you can. If you formula feed, a partner can share the feeds. If you breastfeed, they can take over the early morning changing and dressing, or occasionally give a bottle of expressed breast milk once feeding is going well. On your own, a friend or relative could stay for a few days. For ongoing sleep worries, your health visitor can help.",
        ],
      },
      {
        heading: "When loneliness at night is more than tiredness",
        paragraphs: [
          "Many parents feel tearful, on edge or short-tempered for a few days after the birth, which is often called the baby blues. The NHS says it normally lifts within 2 weeks. If low mood hangs on beyond that, gets stronger, or makes it hard to manage, talk to your GP, midwife or health visitor. Dads and partners can get postnatal depression too.",
          URGENT_HELP_LINE,
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal to cry during night feeds?",
        a: "Yes, many parents cry during night feeds, especially in the first weeks when tiredness is at its peak. The NHS says the baby blues usually pass within 2 weeks of the birth. If you are still low most days after that, feel hopeless or feel unable to cope, talk to your GP, midwife or health visitor.",
      },
      {
        q: "When will my baby stop waking at night?",
        a: "There is no fixed age. The NHS says newborns wake often for feeds, some babies sleep 5 to 8 hours at night between 3 and 6 months, and some babies aged 6 to 12 months still wake from teething or hunger. Every baby is different, and frequent waking is not a sign you are doing anything wrong.",
      },
      {
        q: "Is it safe to fall asleep feeding my baby on the sofa?",
        a: "No. The NHS advises never dozing off on a sofa or armchair while holding your baby, because it raises the risk of SIDS. If you are likely to doze, feed somewhere you can easily put your baby back in their cot, then lay them on their back in their own clear, flat sleep space.",
      },
      {
        q: "How can I feel less alone at 3am?",
        a: "Prepare a few things before the feed: water, a snack and something gentle to listen to. Message a friend you know is up, or plan a morning call to look forward to. Remind yourself that many parents are awake right now. If loneliness turns into low mood that lasts, talk to your health visitor or GP.",
      },
    ],
    relatedSlugs: [
      "motherhood-is-lonely",
      "baby-wakes-every-hour",
      "4-month-sleep-regression",
    ],
    sources: [
      NHS_HELPING_SLEEP,
      NHS_SIDS,
      NHS_POSTNATAL_DEPRESSION,
      NHS_URGENT_MENTAL_HEALTH,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "motherhood-is-lonely",
    category: "loneliness",
    question: "Why does motherhood feel so lonely?",
    title: "Motherhood is lonely: why new parents feel isolated and what helps",
    metaTitle: "Motherhood is lonely: why it happens and what helps",
    description:
      "Why motherhood and new parenthood can feel so lonely, why everyone else seems to cope, the signs of postnatal depression and where to find support.",
    quickAnswer:
      "Motherhood can feel lonely because your days change overnight: fewer adult conversations, broken sleep and less time for the people and things that made you feel like yourself. The NHS lists staying at home with a newborn as a life change that can bring loneliness. It can affect mums, dads and partners, and support is available.",
    bullets: [
      "Loneliness after having a baby is common for all new parents",
      "Other parents' posts rarely show their hardest moments",
      "Small, regular contact with others helps",
      "Baby blues usually pass within 2 weeks; postnatal depression needs support",
      "Your GP, midwife or health visitor can help, even if you only have some signs",
    ],
    sections: [
      {
        heading: "Why does motherhood feel so lonely?",
        paragraphs: [
          "You can be with your baby every minute and still feel alone. Babies need constant care but cannot talk back, and your old routines, work friendships and evenings out may stop all at once. The NHS Every Mind Matters service names staying at home to look after a newborn as one of the life changes that can lead to loneliness.",
          "Loving your baby and feeling lonely can sit side by side. The WHO lists low social support as one of the factors that raise the risk of mental health problems around pregnancy and birth, so staying connected matters for you, not only for your baby.",
        ],
      },
      {
        heading: "Why does postpartum loneliness affect partners and dads too?",
        paragraphs: [
          "Loneliness after a baby is not only a mum's experience. The NHS says dads and partners can become depressed after a birth too, so it is worth checking in with each other, not just with the baby.",
        ],
      },
      {
        heading: "Why does everyone else seem to have it together?",
        paragraphs: [
          "Mostly because you only see the outside. The NHS advises against comparing yourself with others, because people often share only their best moments, especially on social media. A tidy photo at a baby class does not show the 4am wake-ups, the tears in the car or the meals eaten standing up.",
          "Many parents who look calm feel exactly like you.",
        ],
      },
      {
        heading: "What helps with loneliness as a new parent",
        paragraphs: [
          "Small, regular contact often helps more than waiting for energy for something big. These ideas come from NHS advice on loneliness and postnatal depression.",
        ],
        list: [
          "Keep in touch with friends and family, even with a short message or group chat",
          "Try a local parent and baby group or support group",
          "Talk about how you feel with someone you trust",
          "Get outside for a short daily walk or some exercise if you can",
          "Get as much sleep and rest as you can",
          "Look for free or low-cost local events and invite someone along",
        ],
      },
      {
        heading: "Baby blues or postnatal depression: what is the difference?",
        paragraphs: [
          "The baby blues means a few days of feeling tearful, on edge or short-tempered soon after the birth. The NHS says lots of parents have them and they normally lift within 2 weeks. Postnatal depression goes on for longer, and it can begin in pregnancy, in the first weeks or at any point in the first year. Signs the NHS describes include:",
        ],
        list: [
          "A mood that stays low, or losing pleasure in things",
          "Feeling overwhelmed or without hope",
          "Blaming yourself, feeling worthless or believing you are failing as a parent",
          "Worry, fear or anxiety that rarely lets up",
          "Struggling to sleep even when there is a chance to rest",
          "Finding it hard to feel close to your baby",
          "Thinking about ending your life, or about hurting yourself or your baby",
        ],
      },
      {
        heading: "When to get help for loneliness or low mood",
        paragraphs: [
          "If postnatal depression could be what you are going through, speak to your GP, midwife or health visitor, even if only a few of the signs fit. In England, people aged 18 and over (16 and over in some places) can also contact NHS talking therapies directly, with no need to see a GP first. The NHS says most people recover within 3 to 6 months, though for some it takes much longer, and treatment improves the chances of getting better.",
          "Some parents worry that asking for help means their baby will be taken away. The NHS says this is very rare.",
          URGENT_HELP_LINE,
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal to feel lonely after having a baby?",
        a: "Yes. Staying at home with a newborn is one of the life changes the NHS links with loneliness, and not having enough social support is a known risk factor for postnatal depression. Feeling lonely is common and is not a sign you are a bad parent. If it comes with low mood that lasts, talk to your GP or health visitor.",
      },
      {
        q: "How long do the baby blues last?",
        a: "The NHS says the baby blues happen in the first few days after the birth and usually pass within 2 weeks. If you still feel low, anxious or unable to cope after that, or the feelings get worse, it could be postnatal depression. Talk to your GP, midwife or health visitor so they can help.",
      },
      {
        q: "Can dads and partners feel lonely or depressed after a baby?",
        a: "Yes. The NHS says dads and partners can become depressed after a birth too. Partners may feel left out or unsure who to talk to. The same help is available to them: a GP, NHS talking therapies, or Samaritans on 116 123 if they need to talk to someone straight away.",
      },
      {
        q: "How do I make mum friends when I feel shy or exhausted?",
        a: "Start small. Go to one local parent and baby group and aim for one short conversation. Ask your health visitor what runs nearby. Online groups can help on days you cannot leave the house. Other parents there are often looking for company too, so a simple question about their baby is a good start.",
      },
      {
        q: "Who can I talk to about postnatal depression?",
        a: "Your GP, midwife or health visitor is the best first step, and you can contact them even if only a few of the signs apply to you. In England you can refer yourself to NHS talking therapies if you are 18 or over. If you need someone to talk to straight away, Samaritans are on 116 123.",
      },
    ],
    relatedSlugs: [
      "am-i-the-only-one-awake",
      "is-this-normal-baby",
      "what-do-i-do-with-my-baby",
    ],
    sources: [
      NHS_POSTNATAL_DEPRESSION,
      NHS_LONELINESS_EVERY_MIND_MATTERS,
      NHS_URGENT_MENTAL_HEALTH,
      WHO_PERINATAL_MENTAL_HEALTH,
    ],
    modifiedAt: "2026-10-12",
  },
];
