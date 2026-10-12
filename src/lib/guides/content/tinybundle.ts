import type { GuideContent } from "@/lib/guides/types";
import {
  CDC_HOW_MUCH_AND_HOW_OFTEN_TO_BREASTFEED,
  CDC_MILESTONE_TRACKER_APP,
  NHS_BEST_START_IN_LIFE_HEALTH_ADVICE,
  NHS_BREASTFEEDING_IS_MY_BABY_GETTING_ENO,
  NHS_BREASTFEEDING_THE_FIRST_FEW_DAYS,
  NHS_HELPING_SLEEP,
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
          "NHS Best Start in Life (the new home of Start for Life) on nhs.uk. It covers feeding, newborn care, bonding, weaning and toddler development, and you can sign up for emails tailored to your stage of pregnancy or your baby’s age.",
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
          "After birth, no app replaces a conversation with your GP, midwife or health visitor. Feeling down, anxious or irritable for a few days after birth (the baby blues) is very common and usually passes within 2 weeks. If it lasts longer, gets worse, or you are struggling to cope, get help.",
          "The NHS lists these signs of postnatal depression, which can start in pregnancy or any time up to a year after birth:",
        ],
        list: [
          "Low mood, or finding it hard to enjoy anything",
          "Feeling hopeless, guilty, worthless or unable to cope",
          "Constant worry, fear or anxiety",
          "Trouble sleeping even when you have the chance to rest",
          "Difficulty bonding with your baby",
          "Thoughts of suicide, or of harming yourself or your baby: get urgent help straight away, and call 999 (or your local emergency number) if anyone is in immediate danger",
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
        a: "Start for Life now lives inside NHS Best Start in Life on nhs.uk. It covers pregnancy, babies and toddlers, including feeding, newborn care, weaning and early development. You can sign up for emails tailored to your stage of pregnancy or your baby’s age, so the advice arrives when it is relevant rather than all at once.",
      },
      {
        q: "Is there an app for postnatal depression?",
        a: "Apps can offer company or calm, but postnatal depression needs real support. Speak to your GP, midwife or health visitor, even if you only have some of the signs. In England, adults can also refer themselves to NHS talking therapies. If you have thoughts of harming yourself or your baby, get urgent help straight away.",
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
    question: "What are alternatives to baby trackers?",
    title: "Baby tracker alternatives: what to track, and when to stop",
    metaTitle: "Baby tracker alternatives: what to track and when to stop",
    description:
      "Tired of logging every feed and nap? When baby tracking genuinely helps, what the NHS says to watch in the early days, and simpler alternatives to apps.",
    quickAnswer:
      "The best baby tracker alternatives are lighter habits: watch nappies and feeding signs in the first weeks, keep a few notes only when your midwife or health visitor asks, and let the red book hold weight and checks. Most babies do not need every feed and nap logged.",
    bullets: [
      "Tracking helps most in the first days of feeding and when a professional asks.",
      "The NHS signs to watch are nappies, feeding and steady weight gain, not minute-by-minute data.",
      "A notes app, a fridge sheet or the red book can replace a tracker.",
      "Stopping tracking is fine once feeding is going well.",
    ],
    sections: [
      {
        heading: "Do you need a baby tracker at all?",
        paragraphs: [
          "No. Baby trackers are optional. NHS feeding guidance focuses on how your baby feeds, their nappies and their weight, and does not ask you to keep a log of every feed.",
          "For some parents, data is calming. For others, a dashboard of short naps becomes a nightly worry. If logging makes you feel worse, stop, or keep only what answers a real question.",
        ],
      },
      {
        heading: "When is tracking genuinely useful?",
        paragraphs: ["Short-term tracking helps in a few situations:"],
        list: [
          "The first week or two of breastfeeding, while you are learning what enough milk looks like",
          "When your midwife, health visitor or GP asks you to note feeds, nappies or symptoms",
          "If your baby is unwell, so you can tell NHS 111 or your GP what has changed and when",
          "When you are giving a medicine and need to remember the last dose",
          "When you share care overnight and need to hand over clearly",
        ],
      },
      {
        heading: "What should you watch in the first days of feeding?",
        paragraphs: [
          "In the first weeks, nappies tell you more than a feeding timer. The NHS gives these signs that a breastfed baby is getting enough milk:",
        ],
        list: [
          "Feeds: as a very rough guide, at least 8 to 12 times or more every 24 hours in the first few weeks, and it could be every 1 to 3 hours in the first few days",
          "Wet nappies: only 2 or 3 in the first 48 hours, then from day 5 at least 6 heavy, wet nappies every 24 hours",
          "Poos: from the fourth day, at least 2 soft, yellow poos about the size of a £2 coin every day for the first few weeks",
          "Weight: some loss in the first few days is normal, then steady gain",
        ],
      },
      {
        heading: "What to do if the signs worry you",
        paragraphs: [
          "Ask for help early if you are worried about how much milk your baby is getting. Talk to your midwife, health visitor or a breastfeeding specialist, who can watch a feed and check positioning and attachment. The National Breastfeeding Helpline is open 24 hours a day on 0300 100 0212.",
          "If your baby seems unwell, call NHS 111 or your GP. In an emergency, call 999 or your local emergency number.",
        ],
      },
      {
        heading: "How is weight tracked without an app?",
        paragraphs: [
          "Your baby’s growth is recorded by professionals in the red book (the personal child health record), on centile charts, at their health and development reviews.",
          "It is normal for babies to lose some weight in the first few days. They are weighed in their first 2 weeks, and most are at or above their birthweight by 3 weeks. After that, the NHS suggests weighing no more than once a month up to 6 months, once every 2 months from 6 to 12 months, and once every 3 months after 1 year, unless there is a concern.",
        ],
      },
      {
        heading: "Simple alternatives to baby tracking apps",
        paragraphs: ["Keep any record as small as the question it answers."],
        list: [
          "A paper sheet on the fridge with ticks for wet and dirty nappies",
          "One line in your phone’s notes app per feed, only while a professional asks",
          "A photo of anything unusual in a nappy, to show your midwife or health visitor",
          "The red book for weights, checks and questions to raise at your next review",
        ],
      },
      {
        heading: "When can you stop tracking?",
        paragraphs: [
          "You can usually stop once feeding is established, nappies look like the NHS signs above, and your baby is gaining weight at their checks. If your health visitor asked you to keep notes, check with them first.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many wet nappies should a newborn have?",
        a: "The NHS says a breastfed baby is likely to have only 2 or 3 wet nappies in the first 48 hours. From day 5, expect at least 6 heavy, wet nappies every 24 hours. If you are worried about how much milk your baby is getting, ask your midwife, health visitor or a breastfeeding specialist for help early.",
      },
      {
        q: "How often should a newborn feed?",
        a: "As a very rough guide, the NHS says a breastfed baby should feed at least 8 to 12 times or more every 24 hours in the first few weeks, possibly every 1 to 3 hours in the first days. The CDC gives a similar range of about 8 to 12 feeds in 24 hours. Feed whenever your baby shows they want to.",
      },
      {
        q: "Should I write down every feed?",
        a: "Usually not. NHS feeding guidance asks you to watch nappies, feeding signs and weight rather than log every feed. Writing feeds down can help for a few days while breastfeeding settles, or if your midwife or health visitor asks. Once feeding is going well, many parents stop and feel calmer for it.",
      },
      {
        q: "Do I need to weigh my baby at home?",
        a: "Usually not. Your midwife or health visitor weighs your baby and records it in the red book, so ask them if you have a worry about weight. After the first 2 weeks, the NHS suggests weighing no more than once a month up to 6 months, every 2 months from 6 to 12 months, and every 3 months after 1 year, unless there is a concern.",
      },
      {
        q: "Is it bad to use a baby tracker app?",
        a: "Not at all. If logging helps you feel organised or share care, keep using it. It only becomes a problem if the numbers make you anxious or keep you awake. You can track just one thing, such as nappies in the first week, and drop the rest.",
      },
    ],
    relatedSlugs: [
      "must-have-baby-apps",
      "is-this-normal-baby",
      "baby-wakes-every-hour",
      "am-i-the-only-one-awake",
    ],
    sources: [
      NHS_BREASTFEEDING_IS_MY_BABY_GETTING_ENO,
      NHS_BREASTFEEDING_THE_FIRST_FEW_DAYS,
      NHS_YOUR_BABY_S_WEIGHT_AND_HEIGHT,
      CDC_HOW_MUCH_AND_HOW_OFTEN_TO_BREASTFEED,
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
      "No, you are not the only one awake. The NHS says newborns usually wake repeatedly in the night for the first few months, so many parents are feeding and settling at the same hour as you. Night feeds feel lonely because the house is dark and quiet, and nobody sees the work you are doing.",
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
          "Between 3 and 6 months, babies need fewer night feeds as they grow, and some sleep for 5 to 8 hours or longer at night. Many do not, and that is normal too. Hunger, being too hot or too cold, growth spurts, teething and illness can all bring extra wake-ups.",
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
          "When you are exhausted, it is easy to drift off during a feed. The NHS advises never sleeping on a sofa or in an armchair with your baby, as this raises the risk of SIDS. If you feel yourself falling asleep, put your baby down on their back in their own cot.",
        ],
        list: [
          "Keep your baby in a cot or Moses basket in your room for at least the first 6 months",
          "Always place your baby on their back, with their feet at the foot of the cot",
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
          "Feeling down, anxious or irritable for a few days after the birth is very common and is often called the baby blues. The NHS says it usually passes within 2 weeks. If low mood lasts longer, gets worse, or you are struggling to cope, talk to your GP, midwife or health visitor. Fathers and partners can also have depression after having a baby.",
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
        a: "No. The NHS advises never sleeping on a sofa or in an armchair with your baby, because it raises the risk of SIDS. If you are likely to doze, feed somewhere you can easily put your baby back in their cot, then lay them on their back in their own clear, flat sleep space.",
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
          "Loneliness after a baby is not only a mum's experience. The NHS says fathers and partners can get depression after having a baby too, so it is worth checking in with each other, not just with the baby.",
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
          "The baby blues are feelings of being down, anxious or irritable for a few days after the birth. The NHS says they are very common and usually pass within 2 weeks. Postnatal depression lasts longer and can start during pregnancy, soon after birth or at any point up to a year after. Signs the NHS lists include:",
        ],
        list: [
          "Low mood, or finding it hard to enjoy anything",
          "Feeling hopeless, or that you cannot cope",
          "Feeling guilty, worthless or like a bad parent",
          "Fear, anxiety or constant worry",
          "Difficulty sleeping, even when you have time to rest",
          "Difficulty bonding with your baby",
          "Thoughts of suicide, or of harming yourself or your baby",
        ],
      },
      {
        heading: "When to get help for loneliness or low mood",
        paragraphs: [
          "Talk to your GP, midwife or health visitor if you think you might have postnatal depression, even if you only have some of the signs. In England, if you are 18 or over (16 or over in some areas), you can also refer yourself to NHS talking therapies without seeing a GP. The NHS says postnatal depression usually gets better in 3 to 6 months, though it can sometimes last longer.",
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
        a: "Yes. The NHS says fathers and partners can also get depression after having a baby. Partners may feel left out or unsure who to talk to. The same help is available to them: a GP, NHS talking therapies, or Samaritans on 116 123 if they need to talk to someone straight away.",
      },
      {
        q: "How do I make mum friends when I feel shy or exhausted?",
        a: "Start small. Go to one local parent and baby group and aim for one short conversation. Ask your health visitor what runs nearby. Online groups can help on days you cannot leave the house. Other parents there are often looking for company too, so a simple question about their baby is a good start.",
      },
      {
        q: "Who can I talk to about postnatal depression?",
        a: "Your GP, midwife or health visitor is the best first step, and you can contact them even if you only have some of the signs. In England you can refer yourself to NHS talking therapies if you are 18 or over. If you need someone to talk to straight away, Samaritans are on 116 123.",
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
