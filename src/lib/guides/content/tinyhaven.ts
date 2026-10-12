import type { GuideContent, GuideSource } from "@/lib/guides/types";

const NHS_PND: GuideSource = {
  org: "NHS",
  title: "Postnatal depression",
  url: "https://www.nhs.uk/mental-health/conditions/postnatal-depression/",
};

const NHS_URGENT_MENTAL_HEALTH: GuideSource = {
  org: "NHS",
  title: "Where to get urgent help for mental health",
  url: "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/",
};

const NHS_HELPING_SLEEP: GuideSource = {
  org: "NHS",
  title: "Helping your baby to sleep",
  url: "https://www.nhs.uk/baby/caring-for-a-newborn/helping-your-baby-to-sleep/",
};

const NHS_SIDS: GuideSource = {
  org: "NHS",
  title: "Sudden infant death syndrome (SIDS)",
  url: "https://www.nhs.uk/baby/caring-for-a-newborn/sudden-infant-death-syndrome-sids/",
};

const NHS_SOOTHING: GuideSource = {
  org: "NHS",
  title: "Soothing a crying baby",
  url: "https://www.nhs.uk/baby/caring-for-a-newborn/soothing-a-crying-baby/",
};

const URGENT_HELP_LINE =
  "If you feel unable to cope or have thoughts of harming yourself or your baby, you do not have to wait. Call 999 or go to A&E now (or call your local emergency number) if you do not feel you can keep yourself or someone else safe. For urgent mental health help in England, call NHS 111 and select the mental health option. You can also call Samaritans on 116 123.";

export const HAVEN_GUIDES: GuideContent[] = [
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
          "TinyHaven lets you see, anonymously, that other parents are awake right now too.",
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
    relatedSlugs: ["motherhood-is-lonely", "baby-wakes-every-hour", "4-month-sleep-regression"],
    sources: [NHS_HELPING_SLEEP, NHS_SIDS, NHS_PND, NHS_URGENT_MENTAL_HEALTH],
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
    relatedSlugs: ["am-i-the-only-one-awake", "is-this-normal-baby", "what-do-i-do-with-my-baby"],
    sources: [
      NHS_PND,
      {
        org: "NHS",
        title: "Loneliness - Every Mind Matters",
        url: "https://www.nhs.uk/every-mind-matters/lifes-challenges/loneliness/",
      },
      NHS_URGENT_MENTAL_HEALTH,
      {
        org: "WHO",
        title: "Perinatal mental health",
        url: "https://www.who.int/teams/mental-health-and-substance-use/promotion-prevention/perinatal-mental-health",
      },
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "4-month-sleep-regression",
    category: "loneliness",
    question: "What is the 4-month sleep regression like?",
    title: "4-month sleep regression: what it is and how to cope",
    metaTitle: "4-month sleep regression: signs, causes and coping",
    description:
      "What the 4-month sleep regression is, why babies wake more around this age, gentle settling ideas, safe sleep reminders and when to see your GP.",
    quickAnswer:
      "The 4-month sleep regression is the name parents give to a phase when a baby who was sleeping in longer stretches starts waking more often. It is not a medical term. The AAP says babies do not have regular sleep cycles until about 4 months, so sleep is changing at this age. It does not mean anything has gone wrong.",
    bullets: [
      "A parent term, not a medical diagnosis",
      "Sleep patterns are maturing around 4 months",
      "A calm, consistent bedtime routine may help your baby settle",
      "Keep following safe sleep advice as your baby becomes more mobile",
      "See your GP if waking comes with signs of illness or feeding problems",
    ],
    sections: [
      {
        heading: "What is the 4-month sleep regression?",
        paragraphs: [
          "It is a popular name for more frequent night waking at around 4 months. Health services do not use the term, and not every baby has it. The AAP explains that babies under 4 months do not yet have regular sleep cycles, so their sleep is still developing around this time.",
          "Many parents notice more waking around this age. It does not mean you have done anything wrong, and your baby's sleep will keep changing as they grow.",
        ],
      },
      {
        heading: "Signs of the 4-month sleep regression",
        paragraphs: [
          "Parents often notice a change from one week to the next. Common patterns include:",
        ],
        list: [
          "Waking more often at night after a run of longer stretches",
          "Shorter naps or harder settling in the day",
          "Needing more help to fall back to sleep",
          "Wanting extra feeds or extra comfort",
          "More fussiness when tired",
        ],
      },
      {
        heading: "Why do babies wake more at 4 months?",
        paragraphs: [
          "Several normal things often happen at once. Alongside changing sleep cycles, the NHS lists hunger, being too hot or too cold, growth spurts, teething and illness as common reasons for disturbed sleep. The NHS also says that between 3 and 6 months some babies sleep 5 to 8 hours at night, but not all do, so there is no single normal.",
          "Some babies start to roll around this time. The NHS advises moving your baby onto their back if they roll, until they can roll onto their front and back again by themselves.",
        ],
      },
      {
        heading: "How to settle your baby during a sleep regression",
        paragraphs: [
          "There is no method that works for every baby, and no routine can promise a certain amount of sleep. These gentle ideas come from NHS and AAP advice.",
        ],
        list: [
          "Keep a simple, calming bedtime routine: bath, fresh nappy, story, cuddle, dim lights",
          "Make days bright and playful, and nights dark, quiet and dull",
          "From 4 months, the AAP suggests putting your baby down drowsy but awake",
          "Try not to rush in at the first sound, but always go to them if they need feeding, a nappy change or comfort",
          "Feed and change calmly at night, without play or bright lights",
          "Try gentle background noise or stroking their back",
        ],
      },
      {
        heading: "Safe sleep during the 4-month sleep regression",
        paragraphs: [
          "Tired nights make it tempting to try anything that works. Safe sleep advice stays the same, and matters even more as your baby becomes more mobile.",
        ],
        list: [
          "Always put your baby on their back to sleep, in a clear cot with a firm, flat mattress",
          "Keep your baby in your room for at least the first 6 months",
          "Keep the room at 16°C to 20°C (61°F to 68°F)",
          "Never sleep with your baby on a sofa or armchair",
          "No pillows, duvets, bumpers, soft toys, pods or nests in the cot",
        ],
      },
      {
        heading: "When to see a GP about sleep",
        paragraphs: [
          "Most extra waking at this age is normal. Contact your GP or NHS 111 if your baby has a high temperature, is not interested in feeding, or cries in a way that is unlike their normal cry. Call 999 (or your local emergency number) if your baby is floppy, harder to wake than usual, struggling to breathe, or has a rash that does not fade when pressed. Your health visitor can help with ongoing sleep worries.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does the 4-month sleep regression last?",
        a: "There is no official length because it is not a medical diagnosis. Many parents find it settles as their baby adjusts to more mature sleep, but every baby is different. If extra waking goes on for a long time, or you are worried, talk to your health visitor. They can look at your baby's feeding, growth and routine with you.",
      },
      {
        q: "Should I start sleep training at 4 months?",
        a: "The AAP suggests that from 4 months you can start putting your baby down drowsy but awake, so they learn to fall asleep on their own. There is no need to follow a strict programme, and no method can guarantee results. Choose what feels right for your family and ask your health visitor if you want support.",
      },
      {
        q: "Is it normal for my 4-month-old to want more night feeds?",
        a: "Yes, it can be. The NHS lists hunger and growth spurts among the reasons babies wake at night. Feed your baby when they seem hungry. If your baby is not interested in feeding, seems unwell or you are worried about how they are feeding, contact your GP, health visitor or NHS 111.",
      },
      {
        q: "Does every baby have a 4-month sleep regression?",
        a: "No. It is a parent term rather than a medical one, and the AAP notes that sleep needs vary from baby to baby. Some babies barely change around 4 months, others wake much more for a while. Either is normal. What matters is that your baby is feeding, growing and well, and that you get support too.",
      },
    ],
    relatedSlugs: ["baby-wakes-every-hour", "am-i-the-only-one-awake", "tog-guide-for-baby-sleep", "activities-for-4-month-old"],
    sources: [
      NHS_HELPING_SLEEP,
      NHS_SIDS,
      NHS_SOOTHING,
      {
        org: "AAP",
        title: "Getting Your Baby to Sleep",
        url: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx",
      },
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-wakes-every-hour",
    category: "loneliness",
    question: "Why does my baby wake every hour?",
    title: "Baby wakes every hour: why it happens and what to do",
    metaTitle: "Baby wakes every hour: causes and what to do tonight",
    description:
      "Why your baby wakes every hour, what to do when your baby won't sleep, safe ways to settle them and signs that mean you should call NHS 111 or your GP.",
    quickAnswer:
      "A baby who wakes every hour is usually hungry, uncomfortable, too hot or too cold, teething, going through a growth spurt or unwell. The NHS says newborns wake often for feeds in the first few months. Hourly waking is exhausting but common in phases. Check the basics, settle calmly and get help if your baby seems ill.",
    bullets: [
      "Frequent waking is common, especially in the first months",
      "Check hunger, nappy, temperature and comfort first",
      "Keep nights dark, quiet and calm",
      "If you feel overwhelmed, put your baby down safely and take a break",
      "Call NHS 111 or your GP if your baby seems unwell",
    ],
    sections: [
      {
        heading: "Why does my baby wake every hour?",
        paragraphs: [
          "Usually because something normal is getting in the way of longer sleep. The NHS lists hunger, being too hot or too cold, growth spurts, teething and illness as common causes of disturbed sleep. Newborns sleep in short stretches and need feeding often, so very frequent waking in the early weeks can be part of normal sleep.",
          "Older babies wake too. The NHS says some babies aged 6 to 12 months still wake in the night because of teething or hunger.",
        ],
      },
      {
        heading: "What to check when your baby wakes every hour",
        paragraphs: [
          "The NHS lists common reasons babies cry. Working through them calmly can help you find what your baby needs.",
        ],
        list: [
          "Hunger: offer a feed if your baby seems hungry",
          "Nappy: check for a wet or dirty nappy",
          "Temperature: aim for a room of 16°C to 20°C (61°F to 68°F)",
          "Wind: hold them against you and gently stroke their back",
          "Tiredness or overstimulation: keep lights low and voices soft",
          "Teething: sore, red gums, more dribbling and chewing, being more fretful",
        ],
      },
      {
        heading: "What do I do when my baby won't sleep?",
        paragraphs: [
          "Try one calm thing at a time and give it a few minutes before switching. The NHS suggests these ways to soothe a baby who is struggling to settle:",
        ],
        list: [
          "Hold your baby close and sway, talk or sing softly",
          "Play gentle background noise",
          "Breastfeed, if you are, so they can suckle",
          "Gently stroke their back",
          "Rock them in a pram, or go for a walk",
          "Lay them down after a feed, as too much rocking and singing can keep some babies awake",
        ],
      },
      {
        heading: "How to keep your baby safe when nights are hard",
        paragraphs: [
          "When you are exhausted, safe sleep matters even more. The NHS advises placing your baby on their back in a clear cot or Moses basket in your room for every sleep for at least the first 6 months. If your baby falls asleep in a car seat, move them to a firm, flat surface as soon as possible.",
          "Never sleep with your baby on a sofa or in an armchair. If you think you might drop off during a feed, move somewhere you can put your baby straight back in their cot.",
        ],
      },
      {
        heading: "What to do if you feel overwhelmed",
        paragraphs: [
          "Many parents reach breaking point during long nights, and there is no shame in it. The NHS advises putting your baby somewhere safe, such as their cot, closing the door and going to another room to calm yourself for a set time, for example 10 minutes. Then go back. Never shake a baby, as it can cause brain damage.",
          "Ask for help with nights where you can. The NHS suggests a partner can share formula feeds, take over early morning changing, or occasionally give a bottle of expressed breast milk, and a friend or relative can stay for a few days if you are on your own. Your health visitor can help with ongoing sleep problems.",
          URGENT_HELP_LINE,
        ],
      },
      {
        heading: "When to get medical help for night waking",
        paragraphs: [
          "Contact your GP or call NHS 111 if your baby has a high temperature, is not interested in feeding, or cries in a way that is unlike their normal cry or cannot be comforted. Call 999 (or your local emergency number) if your baby:",
        ],
        list: [
          "Has a fit (seizure)",
          "Has blue, grey, pale or blotchy skin, lips or tongue",
          "Is floppy, unresponsive or harder to wake than usual",
          "Has difficulty breathing, grunting or very fast breathing",
          "Has a rash that does not fade when pressed",
          "Has not had a wet nappy in the past 8 hours",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal for a newborn to wake every hour?",
        a: "It can be. The NHS says newborns sleep around 18 hours a day in short stretches and wake often in the night to feed. Feeding when your baby seems hungry is the right response. If your baby is not interested in feeding, has had no wet nappy for 8 hours or seems unwell, get medical help straight away.",
      },
      {
        q: "Why does my 6-month-old suddenly wake every hour?",
        a: "Common reasons at this age include teething, hunger, growth spurts and illness. The NHS says most babies start teething around 6 months, and teething can disturb sleep. Teething can cause a slightly raised temperature, but it stays below 38°C (100.4°F). If your baby has a higher temperature or seems unwell, or you are worried, contact your GP or NHS 111.",
      },
      {
        q: "Can teething make my baby wake every hour?",
        a: "Teething can make babies fretful and disturb their sleep, according to the NHS. Signs include sore, red gums, a flushed cheek, more dribbling and chewing, and a slightly raised temperature below 38°C. There is no evidence that teething causes diarrhoea, so get medical advice for that, a higher temperature or anything else that worries you.",
      },
      {
        q: "How do I cope with my baby waking every hour?",
        a: "Lower the bar for everything else. Sleep when your baby sleeps, share nights with a partner if you can, and say yes to practical help. Keep night feeds calm and dark. Many parents feel they cannot take any more at times, so do not be ashamed to ask for help. Your health visitor or GP can support you.",
      },
    ],
    relatedSlugs: ["4-month-sleep-regression", "am-i-the-only-one-awake", "baby-sleep-16-19c", "is-this-normal-baby"],
    sources: [
      NHS_HELPING_SLEEP,
      NHS_SOOTHING,
      NHS_SIDS,
      NHS_URGENT_MENTAL_HEALTH,
      {
        org: "NHS",
        title: "Baby teething symptoms",
        url: "https://www.nhs.uk/baby/babys-development/teething/baby-teething-symptoms/",
      },
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "is-this-normal-baby",
    category: "loneliness",
    question: "Is this normal for a baby?",
    title: "Is this normal for a baby? How to tell ordinary from urgent",
    metaTitle: "Is this normal for a baby? When to worry and who to call",
    description:
      "Is this normal for a baby? How to tell ordinary crying and fussing from signs of illness, fever thresholds by age and when to call 999, NHS 111 or your GP.",
    quickAnswer:
      "Most things that worry parents at 2am, such as crying, fussing in the evening and wanting to be held, are normal for a baby. Some signs are not and need help quickly. A high temperature in a young baby, breathing problems, floppiness or a rash that does not fade when pressed are reasons to call NHS 111 or 999.",
    bullets: [
      "Crying is common in young babies, especially in the evening",
      "Under 3 months, a temperature of 38°C or more needs a call to NHS 111",
      "Some signs always need 999, whatever the time",
      "You know your baby best; if something feels wrong, get advice",
      "Constant worry can be a sign you need support too",
    ],
    sections: [
      {
        heading: "Is this normal for a baby? What is usually fine",
        paragraphs: [
          "A lot of baby behaviour that looks alarming at night is normal. The NHS says all babies cry, some more than others, and that crying tends to increase from around 2 weeks old and then gradually reduce at around 3 months.",
        ],
        list: [
          "Crying when hungry, tired, windy, bored or overstimulated",
          "Crying because of a wet or dirty nappy, or being too hot or too cold",
          "Wanting cuddles and to be held close",
          "Crying a lot at one time of day, most often the afternoon or evening",
          "Seeming unsettled around feeds, which your health visitor can help with",
        ],
      },
      {
        heading: "Is my baby's crying normal?",
        paragraphs: [
          "Crying is how babies communicate. The NHS lists hunger, a wet or dirty nappy, tiredness, wanting a cuddle, wind, being too hot or too cold, boredom and overstimulation as common reasons.",
          "What matters most is a change. Contact your GP or NHS 111 if your baby cries in a way that is unlike their normal cry, cannot be comforted, is not interested in feeding or has a high temperature.",
        ],
      },
      {
        heading: "When is a baby's temperature not normal?",
        paragraphs: [
          "A high temperature is 38°C (100.4°F) or more. Because young babies can become unwell quickly, the NHS gives lower thresholds for calling NHS 111 at younger ages:",
        ],
        list: [
          "Under 3 months: a temperature of 38°C or higher, or you think they have a high temperature",
          "3 to 6 months: a temperature of 39°C (102.2°F) or higher, or you think they have a high temperature",
          "Any age: a high temperature lasting 5 days or more",
          "Any age: a high temperature with other signs of illness, such as a rash",
          "Any age: not wanting to eat, not their usual self, or signs of dehydration such as nappies that are not very wet",
        ],
      },
      {
        heading: "Signs that are not normal: when to call 999",
        paragraphs: [
          "Call 999 (or your local emergency number) straight away if your baby:",
        ],
        list: [
          "Has blue, grey, pale or blotchy skin, lips or tongue",
          "Is floppy, unresponsive or harder to wake than usual",
          "Has difficulty breathing, grunting, very fast breathing or their stomach sucking in under their ribs",
          "Has a fit (seizure)",
          "Has a rash that does not fade when you press a glass on it",
          "Has a stiff neck or seems bothered by light",
          "Has not had a wet nappy in the past 8 hours",
        ],
      },
      {
        heading: "What to do when you are not sure",
        paragraphs: [
          "If it is not an emergency but you are worried about your baby's health, call NHS 111 or your GP. For everyday questions about feeding, sleep, weight or development, your health visitor is a good first contact. You are not wasting anyone's time by asking.",
          "Searching late at night can make worries feel bigger. When a question is about your baby's health, a trained person who can ask about your baby will give you a clearer answer than a forum.",
        ],
      },
      {
        heading: "Is it normal to worry this much?",
        paragraphs: [
          "Many new parents worry a lot, especially when they are short of sleep. But constant worry, fear or anxiety is one of the signs of postnatal depression the NHS lists, along with low mood and feeling unable to cope. It can affect mums, dads and partners. If worry is taking over, talk to your GP, midwife or health visitor.",
          URGENT_HELP_LINE,
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal for my baby to cry for no reason?",
        a: "Babies cry for a reason, but it is not always obvious. Tiredness, wind, boredom or too much stimulation are common causes. Try feeding, a nappy change, holding them close or gentle background noise. If the crying is unlike their usual cry, cannot be soothed or comes with a high temperature, contact your GP or NHS 111.",
      },
      {
        q: "What temperature is too high for a baby?",
        a: "A high temperature is 38°C (100.4°F) or more. The NHS advises calling NHS 111 if a baby under 3 months has a temperature of 38°C or higher, or a baby aged 3 to 6 months has 39°C or higher. Call 999 if a high temperature comes with floppiness, breathing problems or a rash that does not fade.",
      },
      {
        q: "Is it normal for my baby to cry every evening?",
        a: "Yes, it can be. The NHS says many babies have a time of day when they cry a lot and cannot be comforted, most often the afternoon or evening. If the crying is unlike their normal cry, never seems to stop, or comes with a high temperature or poor feeding, contact your GP or NHS 111.",
      },
      {
        q: "Should I call 111 or 999 for my baby?",
        a: "Call 999 (or your local emergency number) for emergencies: breathing difficulty, blue or grey skin, floppiness, a fit, a rash that does not fade when pressed, or no wet nappy for 8 hours. Call NHS 111 or your GP for urgent worries that are not life threatening, such as a high temperature or not feeding.",
      },
    ],
    relatedSlugs: ["baby-wakes-every-hour", "motherhood-is-lonely", "am-i-the-only-one-awake"],
    sources: [
      NHS_SOOTHING,
      {
        org: "NHS",
        title: "High temperature (fever) in children",
        url: "https://www.nhs.uk/symptoms/fever-in-children/",
      },
      NHS_PND,
      NHS_URGENT_MENTAL_HEALTH,
    ],
    modifiedAt: "2026-10-12",
  },
];
