import type { GuideContent, GuideSource } from "@/lib/guides/types";

const NHS_BABY_MOVES: GuideSource = {
  org: "NHS",
  title: "Baby moves",
  url: "https://www.nhs.uk/best-start-in-life/baby/baby-moves/",
};

const NHS_KEEP_ACTIVE: GuideSource = {
  org: "NHS",
  title: "How to keep your baby or toddler active",
  url: "https://www.nhs.uk/baby/babys-development/play-and-learning/keep-baby-or-toddler-active/",
};

const NHS_UNDERSTANDING_BABY: GuideSource = {
  org: "NHS",
  title: "Understanding your baby",
  url: "https://www.nhs.uk/best-start-in-life/baby/baby-basics/bonding-with-your-baby/understanding-your-baby/",
};

const NHS_FIRST_SOUNDS: GuideSource = {
  org: "NHS",
  title: "Baby's first sounds: 0 to 6 months",
  url: "https://www.nhs.uk/best-start-in-life/baby/learning-to-talk/first-sounds-0-to-6-months/",
};

const NHS_PLAY_IDEAS: GuideSource = {
  org: "NHS",
  title: "Baby and toddler play ideas",
  url: "https://www.nhs.uk/baby/babys-development/play-and-learning/baby-and-toddler-play-ideas/",
};

const AAP_TUMMY_TO_PLAY: GuideSource = {
  org: "AAP",
  title: "Back to Sleep, Tummy to Play: Give Your Baby a Safe, Strong Start",
  url: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/back-to-sleep-tummy-to-play.aspx",
};

const AAP_HOW_ACTIVE: GuideSource = {
  org: "AAP",
  title: "How Active is Your Baby? Tips to Get Infants Learning, Moving & Thriving",
  url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/How-Active-is-Your-Baby.aspx",
};

const WHO_SIT_LESS_PLAY_MORE: GuideSource = {
  org: "WHO",
  title: "To grow up healthy, children need to sit less and play more",
  url: "https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more",
};

const CDC_2_MONTHS: GuideSource = {
  org: "CDC",
  title: "Milestones by 2 Months",
  url: "https://www.cdc.gov/act-early/milestones/2-months.html",
};

const CDC_4_MONTHS: GuideSource = {
  org: "CDC",
  title: "Milestones by 4 Months",
  url: "https://www.cdc.gov/act-early/milestones/4-months.html",
};

const CDC_9_MONTHS: GuideSource = {
  org: "CDC",
  title: "Milestones by 9 Months",
  url: "https://www.cdc.gov/act-early/milestones/9-months.html",
};

const NHS_SAFETY: GuideSource = {
  org: "NHS",
  title: "Baby and toddler safety",
  url: "https://www.nhs.uk/baby/first-aid-and-safety/safety/baby-and-toddler-safety/",
};

const AAP_WATER_BEADS: GuideSource = {
  org: "AAP",
  title: "Water Beads: Harmful if Swallowed, Put in Ears",
  url: "https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Water-Beads-Harmful.aspx",
};

const REVIEWED = "2026-10-12";

export const BLOOMS_GUIDES: GuideContent[] = [
  {
    slug: "what-do-i-do-with-my-baby",
    category: "development",
    question: "What do I do with my baby?",
    title: "What to do with your baby all day: no-prep play ideas by age",
    metaTitle: "What to do with my baby: no-prep play ideas by age",
    description:
      "Not sure what to do with your baby all day? Simple no-prep play ideas by age, from newborn to 12 months and beyond, based on NHS, AAP and WHO advice.",
    quickAnswer:
      "What to do with your baby is simpler than it feels: talk, sing, read and give them floor time, including supervised tummy time while they are awake. You do not need special toys. Short, ordinary moments together, repeated through the day, are how babies learn to move, listen and connect.",
    bullets: [
      "Your face, voice and the floor are the best play kit",
      "Tummy time only when your baby is awake and watched",
      "Change the game as your baby grows, not the effort",
      "Avoid screens for babies; video calls with family are the exception",
    ],
    sections: [
      {
        heading: "What do I do with my baby when they are awake?",
        paragraphs: [
          "Play is one of the main ways babies learn about the world, and the NHS says it supports social, language, thinking and problem-solving skills. For a baby, play mostly means being near you while you talk, sing and move.",
          "The World Health Organization (WHO) advises that babies under 1 are physically active several times a day in a variety of ways, particularly through interactive floor-based play. More is better. That can be five minutes on a mat after a nappy change, not a planned session.",
          "Everyday jobs count. Describe what you are doing as you fold washing, sing while you feed, and name things you see on a walk. Outdoor play also helps your baby learn about their surroundings.",
        ],
      },
      {
        heading: "What baby activities need zero prep?",
        paragraphs: [
          "Most of the best baby activities need nothing but you. These NHS-suggested ideas work at home, in a waiting room or on a tired afternoon:",
        ],
        list: [
          "Tickle their face and count their fingers and toes",
          "Play peek-a-boo, again and again",
          "Sing a song or nursery rhyme, or just make one up",
          "Take turns clapping hands",
          "Dance with your baby held safely in your arms",
          "Let them wriggle on the floor, which is good for muscle development",
          "Lay them on their back so they can kick their legs",
          "Talk about what is around you, or read a book together",
        ],
      },
      {
        heading: "How should I play with my baby by age?",
        paragraphs: [
          "Babies develop at their own pace, so treat these as rough guides from the American Academy of Pediatrics (AAP) and the NHS rather than a checklist.",
        ],
        list: [
          "0 to 3 months: gentle rocking, slow dancing, talking and singing. Try tummy time on your chest while you are both awake.",
          "3 to 6 months: read fabric or board books, keep a regular routine, and from around 6 months enjoy mirrors and copying sounds together.",
          "6 to 9 months: put toys on the floor that your baby can reach or crawl to, point at pictures and make the sounds (the dog goes woof).",
          "9 to 12 months: hide a toy for them to find, play peek-a-boo, and repeat simple words as you point and sing.",
          "12 months and over: once walking, the NHS suggests at least 180 minutes of activity a day, spread through the day, such as park trips, action songs and helping unpack shopping.",
        ],
      },
      {
        heading: "How much floor time and tummy time does my baby need?",
        paragraphs: [
          "For babies who are not yet moving about, WHO recommends at least 30 minutes on their tummy, spread through the day, while awake. Start little and often. You can begin from birth by lying your baby on your chest, but only when you are wide awake and unlikely to fall asleep.",
          "Tummy time is only for when your baby is awake and alert, and you are there to keep an eye on them.",
          "Try not to keep your baby strapped in for long stretches. WHO advises no more than 1 hour at a time in a pram, high chair or carrier, and the NHS suggests walkers, bouncers and seats for no more than 20 minutes at a time.",
        ],
      },
      {
        heading: "Do babies need screen time or special toys?",
        paragraphs: [
          "No. The NHS advises avoiding screen time for babies and toddlers, and WHO says screen time is not recommended for babies under 1. Video calls with family are fine as a shared activity.",
          "Simple toys your baby can reach for, push and pull keep them moving. When your baby is settled and still, reading or telling a story together is a good choice.",
        ],
      },
      {
        heading: "When to talk to your health visitor",
        paragraphs: [
          "Many babies crawl between 7 and 10 months, and some shuffle on their bottom instead. If your baby is not showing signs of moving by 12 months, or you have any worry about how they are developing, talk to your health visitor or GP. You know your baby best, and asking is always fine.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal to feel bored playing with my baby?",
        a: "Yes, many parents feel this. Babies love repetition, so the same song or game can feel dull to you while it is useful to them. Mix in things you enjoy, like music, a walk or reading your own book aloud. Your voice and attention matter more than the activity itself, so ordinary chat counts as play.",
      },
      {
        q: "How long should I play with my baby each day?",
        a: "There is no set number of minutes. WHO advises babies are active several times a day, mostly through floor play, with more being better. For babies not yet moving about, aim for at least 30 minutes of awake tummy time spread across the day. Short bursts between feeds and naps add up quickly.",
      },
      {
        q: "Can I leave my baby to play on their own?",
        a: "Babies can enjoy short spells on a play mat while you are close by, and that is fine. Tummy time must always be supervised, though, and only when your baby is awake. Once your baby starts crawling, check the floor is safe and clear of small objects before you put them down.",
      },
      {
        q: "Are baby walkers and bouncers good for play?",
        a: "The NHS says walkers and bouncers can delay walking if a baby uses them a lot, and long periods in reclining seats can delay sitting up. If you use one, keep it to no more than 20 minutes at a time and give your baby plenty of free time on the floor.",
      },
    ],
    relatedSlugs: [
      "activities-for-newborn",
      "tummy-time-ideas",
      "indoor-baby-activities",
      "baby-sensory-activities",
    ],
    sources: [
      NHS_BABY_MOVES,
      NHS_KEEP_ACTIVE,
      AAP_HOW_ACTIVE,
      WHO_SIT_LESS_PLAY_MORE,
    ],
    modifiedAt: REVIEWED,
  },
  {
    slug: "activities-for-newborn",
    category: "development",
    question: "What are good activities for a newborn?",
    title: "Activities for a newborn: gentle play ideas for the first weeks",
    metaTitle: "Activities for a newborn: gentle play for the first weeks",
    description:
      "Gentle newborn activities for bonding and development: face time, talking, singing and short tummy time, plus how to tell when your baby needs a rest.",
    quickAnswer:
      "Good activities for a newborn are face-to-face talking, singing, reading, cuddles and short spells of supervised tummy time on your chest. Play when your baby is quiet and alert, keep it to a few minutes, and stop when they look away, yawn or hiccup. That is a full newborn activity plan.",
    bullets: [
      "Play when your baby is quiet and alert",
      "A few minutes at a time is plenty",
      "Your face and voice are what newborns want most",
      "Tummy time from birth, awake and supervised",
      "Always put your baby down to sleep on their back",
    ],
    sections: [
      {
        heading: "When is the best time to play with a newborn?",
        paragraphs: [
          "The best time is when your newborn is quiet and alert. The NHS describes this state as wide eyed, focused on a face, voice or moving object, and sometimes smiling or babbling. It is a good time to play, feed or simply enjoy each other.",
          "Interaction takes a lot of energy for a newborn, so they may only manage a few minutes at a time. That is normal, not a sign anything is wrong. Short and frequent beats long and tiring.",
          "If your baby is drowsy, with glazed or heavy eyelids, wait a little. They may drift back to sleep, and that is fine too.",
        ],
      },
      {
        heading: "What activities can I do with my newborn?",
        paragraphs: [
          "Babies want to look at human faces and are ready to communicate from birth. These simple ideas come from NHS Best Start in Life:",
        ],
        list: [
          "Face-to-face chat: hold your baby so they can see your face as you talk",
          "Copying games: stick out your tongue or blink and see if your baby copies you",
          "Answering back: when your baby makes a noise, respond warmly as if it were a conversation",
          "Songs and rhymes: babies love hearing the same ones over and over",
          "Feed time singing: use a sing-song voice with big ups and downs",
          "Nappy change chat: say what you are doing, using the same words each time, like 'socks off'",
          "Books: read aloud, or use fabric books with different textures and talk about how they feel",
        ],
      },
      {
        heading: "How do I do tummy time with a newborn?",
        paragraphs: [
          "You can start tummy time from birth by lying your baby on your chest. Only do this when you are wide awake and unlikely to fall asleep. Tummy time builds strength in your baby's back, neck and shoulders.",
          "The AAP suggests 2 to 3 short sessions a day of about 3 to 5 minutes, starting the day you come home, and building up to 15 to 30 minutes a day by 7 weeks. When your baby is ready, move to the floor with you or a toy within reach.",
          "Tummy time is only for when your baby is awake and someone is watching. Healthy babies are safest sleeping on their backs, for night-time sleep and every nap.",
        ],
      },
      {
        heading: "Signs your newborn has had enough",
        paragraphs: [
          "Newborns can easily become overwhelmed, tired or stressed. The NHS lists these signs that your baby needs a break:",
        ],
        list: [
          "Sneezing",
          "Yawning",
          "Hiccupping",
          "Turning away",
          "Closing their eyes",
          "Bringing up some milk",
        ],
      },
      {
        heading: "What to do if your newborn gets fussy during play",
        paragraphs: [
          "Slow the pace, stop the activity or move somewhere quieter. Your baby may also be ready for a feed or a sleep.",
          "If your baby is crying hard, stop what you are doing and calm them with something soothing and repetitive, such as rocking, humming or gentle stroking. Picking up your baby's cues gets easier with time.",
        ],
      },
      {
        heading: "Do newborns need toys or screens?",
        paragraphs: [
          "No. The NHS advises avoiding screen time for babies, and newborns learn far more from your face, voice and touch than from toys. A soft fabric book is a lovely extra, but not essential.",
          "Your health visitor will usually see you at around 10 to 14 days and again at 6 to 8 weeks. If you are worried about your baby's hearing, sight or responses at any point, speak to your health visitor or GP.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should a newborn be awake for play?",
        a: "There is no exact number. Newborns may only manage a few minutes of interaction at a time before they tire. Watch your baby rather than the clock: play while they are quiet and alert, and wind down as soon as you see yawning, hiccups or turning away. Several short moments a day are plenty.",
      },
      {
        q: "Can I do tummy time with a newborn on my chest?",
        a: "Yes. The NHS says you can start tummy time from birth by lying your baby on your chest, as long as you are wide awake and unlikely to fall asleep. If you start to feel drowsy, put your baby down in their cot on their back instead, and try again another time.",
      },
      {
        q: "When should newborn tummy time move to the floor?",
        a: "When your baby is ready, usually after a little practice on your chest or lap, try the floor. Lie down facing them or put a toy within reach so they want to lift their head. The AAP suggests working up to 15 to 30 minutes a day, in short sessions, by 7 weeks.",
      },
      {
        q: "Should I talk to my newborn even though they cannot understand?",
        a: "Yes. Babies are ready to communicate from birth, and face-to-face time helps your baby see how you make sounds. Narrating nappy changes, singing at feeds and answering their little noises all build early language. It does not matter what you say or how well you sing.",
      },
    ],
    relatedSlugs: [
      "what-do-i-do-with-my-baby",
      "tummy-time-ideas",
      "activities-for-2-month-old",
      "baby-sensory-activities",
    ],
    sources: [
      NHS_UNDERSTANDING_BABY,
      NHS_FIRST_SOUNDS,
      NHS_BABY_MOVES,
      AAP_TUMMY_TO_PLAY,
    ],
    modifiedAt: REVIEWED,
  },
  {
    slug: "tummy-time-ideas",
    category: "development",
    question: "What are tummy time ideas?",
    title: "Tummy time ideas: how to do it, how long, and what if baby hates it",
    metaTitle: "Tummy time ideas: how long, and what if baby hates it",
    description:
      "Easy tummy time ideas, how much your baby needs each day, when to start and what to try if your baby hates tummy time. Based on NHS, AAP and WHO advice.",
    quickAnswer:
      "Good tummy time ideas include lying your baby on your chest, getting down face to face on the floor, and placing a toy just within reach. Start from birth, little and often, only while your baby is awake and supervised. Build up towards at least 30 minutes spread across the day.",
    bullets: [
      "Start from birth, on your chest, while you are wide awake",
      "Little and often: a few minutes at a time to begin",
      "Aim for at least 30 minutes a day, spread out",
      "Always awake and supervised",
      "Always on their back for sleep",
    ],
    sections: [
      {
        heading: "Why tummy time matters",
        paragraphs: [
          "Tummy time builds strength in your baby's back, neck and shoulders. The AAP says it helps babies build the muscles and skills they need for important milestones.",
          "It also gives the back of your baby's head a break. Babies sleep on their backs, so varying their position while awake helps prevent a flat spot. The AAP adds that a flat spot usually rounds out as babies grow and sit up.",
        ],
      },
      {
        heading: "When can I start tummy time?",
        paragraphs: [
          "You can start from birth. The NHS suggests lying your baby on your chest, but only when you are wide awake and unlikely to fall asleep. The AAP says you can start the day your baby comes home.",
          "Once your baby is ready, try tummy time on the floor, with you down at their level.",
        ],
      },
      {
        heading: "How much tummy time does my baby need?",
        paragraphs: [
          "Little and often is best at first. The AAP suggests 2 to 3 sessions a day of about 3 to 5 minutes, building up to 15 to 30 minutes a day by 7 weeks.",
          "WHO recommends that babies who are not yet moving about have at least 30 minutes on their tummy each day, spread through the day, while awake. Several short sessions count just as much as one long one.",
        ],
      },
      {
        heading: "Easy tummy time ideas to try",
        paragraphs: [
          "Mix these up so tummy time feels like play rather than a task:",
        ],
        list: [
          "Chest to chest: lie back and rest your baby on your chest so they can lift their head to see you",
          "Lap time: lay your baby across your lap and talk to them",
          "Face to face on the floor: lie down so your eyes are level with theirs, then talk or sing",
          "Toys in a circle: place a few toys around your baby so they reach in different directions",
          "Rolled towel support: put a small rolled-up towel under their arms to prop them up a little",
          "Just out of reach: put yourself or a toy just out of reach so they look up and stretch towards you",
          "Sibling help: an older brother or sister can play with your baby on the floor while you supervise",
        ],
      },
      {
        heading: "What to do if your baby hates tummy time",
        paragraphs: [
          "Plenty of babies protest at first. Keep sessions short and do them daily, rather than pushing through tears. Lying your baby on your chest or lap, talking or singing, and having a toy within reach can all help. The AAP says some babies do not like the position at first, but they come to enjoy it in time.",
          "Pick a time when your baby is awake and content. The AAP suggests trying it after a nappy change or after a nap. If they cry, pick them up, comfort them and try again later.",
        ],
      },
      {
        heading: "Tummy time safety",
        paragraphs: [
          "Tummy time is only for when your baby is awake and alert and you are watching. Babies must always be put down to sleep on their back, for every nap and at night. If your baby falls asleep during tummy time, gently move them onto their back in their cot.",
        ],
        list: [
          "Stay with your baby the whole time",
          "Do not do chest tummy time if you feel sleepy",
          "Vary your baby's position while they are awake",
          "Limit time in swings, bouncy chairs and car seats",
        ],
      },
    ],
    faqs: [
      {
        q: "What should my baby be able to do during tummy time?",
        a: "Babies develop at their own pace. The CDC says most babies push up onto their elbows or forearms when on their tummy by around 4 months. These are typical ranges, not a test. If you are worried about how your baby lifts their head or moves, talk to your health visitor or GP.",
      },
      {
        q: "Does carrying my baby count as tummy time?",
        a: "Lying your baby tummy down on your chest while you are awake counts, and the NHS suggests it from birth. Carrying them upright is good for closeness but is not the same as time on the tummy. Add floor time once your baby is ready, so they can push up and move freely.",
      },
      {
        q: "How do I fit tummy time into a busy day?",
        a: "Tie it to things you already do. A minute or two after each nappy change, a session on your chest while you watch something, or a few minutes on the floor before a bath all add up. Short, regular sessions are easier for your baby and easier for you to remember.",
      },
      {
        q: "When can I stop doing tummy time?",
        a: "Once your baby is rolling, crawling and moving around freely, they spend time on their tummy naturally during floor play. WHO's 30 minute guide applies to babies who are not yet mobile. Keep offering plenty of floor time, and keep limiting long spells strapped into seats.",
      },
    ],
    relatedSlugs: [
      "activities-for-newborn",
      "activities-for-2-month-old",
      "activities-for-4-month-old",
      "what-do-i-do-with-my-baby",
    ],
    sources: [
      NHS_BABY_MOVES,
      AAP_TUMMY_TO_PLAY,
      WHO_SIT_LESS_PLAY_MORE,
      CDC_4_MONTHS,
    ],
    modifiedAt: REVIEWED,
  },
  {
    slug: "indoor-baby-activities",
    category: "development",
    question: "What are good indoor baby activities?",
    title: "Indoor baby activities: easy ideas for rainy days at home",
    metaTitle: "Indoor baby activities: easy rainy day ideas at home",
    description:
      "Easy indoor baby activities using things you already have, rainy day ideas by age, and the simple safety checks that matter, based on NHS and CDC advice.",
    quickAnswer:
      "Good indoor baby activities are floor play, tummy time, reading, singing, water play with cups and sponges, and simple games like peek-a-boo or hide the toy. You can do them with things already in your kitchen. Supervise water play closely and check toys for small parts.",
    bullets: [
      "Kitchen items make great baby toys",
      "Floor time beats time in a seat",
      "Never leave your baby alone with water",
      "Check toys for small parts and loose batteries",
      "Skip the TV: avoid screen time for babies",
    ],
    sections: [
      {
        heading: "What indoor activities can I do with my baby?",
        paragraphs: [
          "The best indoor baby activities are simple and close to you. The NHS suggests reading, talking and singing while you hold your baby, and putting toys within reach for them to grab, push and pull.",
          "Give your baby lots of time on the floor. Lying on their back to kick, wriggling about and supervised tummy time are all good for muscle development.",
        ],
        list: [
          "Read a picture book and describe what you see",
          "Sing nursery rhymes and act out the actions",
          "Dance with your baby held in your arms",
          "Play peek-a-boo from behind a cushion or tea towel",
          "Stack a few plastic cups or blocks and knock them down together",
          "Take turns clapping hands",
        ],
      },
      {
        heading: "What can I do with my baby on a rainy day?",
        paragraphs: [
          "A rainy day is a good excuse to set up a few short activities and rotate them. Try one, then move on when your baby loses interest.",
        ],
        list: [
          "Water play: fill a washing-up bowl with a little water and offer unbreakable things like plastic bottles, a sponge, a colander, a funnel and spoons",
          "Kitchen band: by 9 months most babies bang two things together, so offer wooden spoons and a plastic tub",
          "Hide and find: hide a toy under a blanket and encourage your baby to find it",
          "Pass it back: take turns passing a toy back and forth",
          "Story corner: build a cosy spot with cushions and read together",
          "Helper time: let a toddler help sort washing or unpack shopping",
        ],
      },
      {
        heading: "Indoor activities by age",
        paragraphs: [
          "Match the activity to what your baby is doing now rather than their exact age. These are typical ranges, and every baby is different.",
        ],
        list: [
          "Newborn to 3 months: chest tummy time, face-to-face chat, singing while holding them",
          "3 to 6 months: toys within reach, kicking on a play mat, picture books",
          "6 to 9 months: floor play with toys just out of reach to encourage crawling or rolling, simple water play",
          "9 to 12 months: hide the toy, peek-a-boo with a cloth they pull off, passing a toy back and forth",
          "12 months and over: action songs, dancing, helping with simple jobs around the house",
        ],
      },
      {
        heading: "How to keep indoor play safe",
        paragraphs: [
          "A baby can drown in less than 5 centimetres (2 inches) of water. Never leave a young child alone in the bath or playing with water, even for a moment.",
        ],
        list: [
          "Check toys for sharp edges or small parts your baby could swallow",
          "Do not give toys labelled 'not suitable for children under 36 months' to a child under 3",
          "Keep button batteries away from children and make sure battery compartments are screwed shut",
          "If you think your child has swallowed a button battery, go to A&E straight away or call 999 (or your local emergency number)",
          "Once your baby is crawling, check the floor is safe and clear before play",
        ],
      },
      {
        heading: "Should I limit bouncers and screens on indoor days?",
        paragraphs: [
          "When you are stuck inside, it is tempting to lean on the bouncer or the TV. The NHS suggests walkers, bouncers and seats for no more than 20 minutes at a time, as long spells can delay walking and sitting. Short uses while you shower or cook are fine.",
          "The NHS advises avoiding screen time for babies and toddlers. A video call with grandparents is a nice exception, as long as you do it together.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I entertain my baby at home without toys?",
        a: "You are the main toy. Talking, singing, dancing with your baby in your arms and peek-a-boo need nothing at all. Kitchen items like plastic cups, a colander and wooden spoons work brilliantly. Just check that anything you hand over is too big to swallow and has no sharp edges.",
      },
      {
        q: "Is water play safe for babies?",
        a: "Yes, with an adult right there the whole time. Use only a little water in a bowl or the bath and stay within arm's reach. The NHS warns that a baby can drown in less than 5 centimetres (2 inches) of water, so never leave them alone with it, even briefly.",
      },
      {
        q: "Can I take my baby out in the rain?",
        a: "Yes, if everyone is dressed for it. The NHS says outdoor play helps babies learn about their surroundings, and a short walk can lift a long indoor day for both of you. Keep your baby dry and warm, and head home if they seem cold or unsettled.",
      },
      {
        q: "My baby gets bored indoors. Is that normal?",
        a: "Yes. Babies often lose interest in one activity after a few minutes. Rotate two or three simple ideas, change rooms, or let them watch you do an everyday job while you chat. A change of scene, even to a different window, can be enough to settle them.",
      },
    ],
    relatedSlugs: [
      "what-do-i-do-with-my-baby",
      "baby-sensory-activities",
      "tummy-time-ideas",
    ],
    sources: [NHS_PLAY_IDEAS, NHS_BABY_MOVES, NHS_KEEP_ACTIVE, CDC_9_MONTHS],
    modifiedAt: REVIEWED,
  },
  {
    slug: "baby-sensory-activities",
    category: "development",
    question: "What are simple sensory activities for babies?",
    title: "Baby sensory activities: simple ideas without overstimulating",
    metaTitle: "Baby sensory activities: simple ideas, no overstimulation",
    description:
      "Simple baby sensory activities for sight, sound and touch, how to stimulate your baby without overdoing it, and the signs your baby needs a break.",
    quickAnswer:
      "Simple baby sensory activities include face time, singing, textured fabric books, water play, mirrors and safe objects to hold and mouth. Pick one sense at a time, play when your baby is calm and alert, and stop when they yawn, hiccup, sneeze or turn away. Gentle and short works best.",
    bullets: [
      "One activity at a time is plenty",
      "Play when your baby is quiet and alert",
      "Yawning, hiccups and turning away mean 'break please'",
      "Check objects are too big to swallow",
      "No screens needed: real things work better",
    ],
    sections: [
      {
        heading: "What are simple sensory activities for babies?",
        paragraphs: [
          "Sensory play is anything that gives your baby something to look at, listen to, touch or feel, with you alongside. You do not need a class or special kit. These ideas come from the NHS and AAP:",
        ],
        list: [
          "Sight: hold your baby close so they can see your face, as newborns can only see short distances",
          "Sight: from around 6 months, look in a mirror together",
          "Sound: sing, play music and copy your baby's sounds back to them",
          "Sound: read aloud, even before your baby can speak",
          "Touch: share fabric or board books your baby can grab and feel",
          "Touch: let your baby reach for, grab and mouth clean, safe toys",
          "Water: splash a little water with cups and a sponge, with you right there",
          "Movement: gentle rocking and slow dancing with your baby in your arms",
        ],
      },
      {
        heading: "How do I stimulate my baby without overdoing it?",
        paragraphs: [
          "Follow your baby's lead. The NHS says the best time to play is when your baby is quiet and alert: wide eyed, focused on a face, voice or object, and maybe smiling. Interaction takes a lot of energy, so young babies may only manage a few minutes at a time.",
          "Keep the setting calm and offer one thing at a time. If your baby starts to fuss, with more wriggling of their arms, legs and head and more noise, the NHS suggests slowing down or changing what you are doing.",
        ],
      },
      {
        heading: "Signs your baby is overstimulated and needs a break",
        paragraphs: [
          "Babies can easily become overwhelmed, tired or stressed. The NHS lists these signs that your baby needs a break:",
        ],
        list: [
          "Sneezing",
          "Yawning",
          "Hiccupping",
          "Turning away from you or the toy",
          "Closing their eyes",
          "Bringing up some milk",
        ],
      },
      {
        heading: "What to do if your baby is overstimulated",
        paragraphs: [
          "Think about what might be too much, then slow the pace, stop the activity or move to a quieter room. Your baby may also be ready for a feed or a sleep.",
          "If they are crying hard, stop and soothe them with something calm and repetitive, such as holding, rocking or quiet singing.",
        ],
      },
      {
        heading: "Sensory activities by age",
        paragraphs: [
          "These are typical ranges, and every baby goes at their own pace.",
        ],
        list: [
          "0 to 3 months: your face up close, your voice, gentle rocking and slow dancing",
          "3 to 6 months: toys and cloth or board books they can grab, clean safe objects to mouth, gentle bounces while you hold them close",
          "6 to 9 months: mirrors, copying sounds, water play, pointing at pictures and making animal noises",
          "9 to 12 months: hide a toy for them to find, peek-a-boo, repeating words as you point and sing",
        ],
      },
      {
        heading: "Keeping sensory play safe",
        paragraphs: [
          "Babies explore with their mouths, so anything they can grab will end up there. Never leave your baby alone with water, even a shallow bowl: a baby can drown in less than 5 centimetres (2 inches) of water.",
        ],
        list: [
          "Check toys and household objects for sharp edges or small parts that could be swallowed",
          "Do not give toys labelled 'not suitable for children under 36 months' to a child under 3",
          "Keep button batteries away from your baby. If you think one has been swallowed, go to A&E straight away or call 999 (or your local emergency number)",
          "Do not use water beads, often sold as sensory toys. The AAP says they are a choking hazard and can keep growing inside the body if swallowed, so it is safest not to have them at home",
          "If you think your baby has swallowed a water bead, get medical help straight away",
        ],
      },
    ],
    faqs: [
      {
        q: "Do babies need sensory classes?",
        a: "No. Classes can be a nice outing and a chance to meet other parents, but they are not needed. Everyday sights, sounds and textures at home with you, like your face, your voice, books, safe household objects and some floor time, give plenty of sensory play.",
      },
      {
        q: "Is it bad if my baby gets overstimulated?",
        a: "It happens to every baby. The NHS explains that babies can easily become overwhelmed, tired or stressed because their brains are making so many new connections. Spotting the signs, like yawning, hiccups or turning away, then slowing down or moving somewhere quieter, helps. Over time you will learn their cues.",
      },
      {
        q: "Are light-up toys and baby sensory videos good for babies?",
        a: "Babies learn best from real people and real objects. The AAP says screens are not recommended for young babies and suggests limiting screen time to video chats with family and friends. Your voice, books and objects your baby can grab are better teaching tools than anything on a screen.",
      },
      {
        q: "What household items are safe for sensory play?",
        a: "Plastic cups and bottles, a colander, wooden spoons, a sponge and soft fabrics all work well. Check each item is too big to fit in your baby's mouth, has no sharp edges and has no loose parts. Keep button batteries, and anything containing them, well away from your baby.",
      },
    ],
    relatedSlugs: [
      "indoor-baby-activities",
      "what-do-i-do-with-my-baby",
      "activities-for-4-month-old",
      "activities-for-newborn",
    ],
    sources: [
      NHS_UNDERSTANDING_BABY,
      NHS_PLAY_IDEAS,
      AAP_HOW_ACTIVE,
      AAP_WATER_BEADS,
    ],
    modifiedAt: REVIEWED,
  },
  {
    slug: "activities-for-2-month-old",
    category: "development",
    question: "What are good activities for a 2-month-old?",
    title: "Activities for a 2-month-old: simple play ideas and milestones",
    metaTitle: "Activities for a 2 month old: play ideas and milestones",
    description:
      "Simple activities for a 2-month-old, from tummy time to back-and-forth chats, plus what most babies do by 2 months and when to talk to your health visitor.",
    quickAnswer:
      "Good activities for a 2-month-old are back-and-forth chats, singing, reading, supervised tummy time with a toy at eye level, and looking at faces and bright pictures together. Keep sessions short and follow your baby's cues. Babies at this age learn most from you responding to them.",
    bullets: [
      "Chat, pause, and let your baby 'answer'",
      "Tummy time with a toy at eye level",
      "Shake a rattle to one side to see them turn",
      "Responding to your baby does not spoil them",
      "Always on their back for sleep",
    ],
    sections: [
      {
        heading: "What can I do with my 2-month-old?",
        paragraphs: [
          "At 2 months, your baby is starting to watch you, smile and make little sounds. The best activities build on that. These ideas come from the CDC and NHS:",
        ],
        list: [
          "Talk, pause and wait: take turns 'talking' and copy your baby's sounds back",
          "Sing and read every day, even if it is the same song",
          "Shake a rattle gently to one side and see if your baby turns towards the sound",
          "Look at a baby-safe mirror or bright pictures together",
          "Chat and play during feeds, nappy changes and bath time",
          "Stick your tongue out or blink and see if they copy",
        ],
      },
      {
        heading: "How much tummy time does a 2-month-old need?",
        paragraphs: [
          "The AAP suggests building up to 15 to 30 minutes of tummy time a day by about 7 weeks, in short sessions of a few minutes. Put a toy at eye level to encourage your baby to lift their head.",
          "Tummy time is always awake and supervised, and your baby always sleeps on their back, for naps and at night. If your baby dislikes being on the floor, try tummy time on your chest while you are wide awake.",
        ],
      },
      {
        heading: "What do most babies do by 2 months?",
        paragraphs: [
          "The CDC lists skills most babies show by about 2 months. These are typical ranges, not a test, and babies develop at different speeds.",
        ],
        list: [
          "Calms down when spoken to or picked up",
          "Looks at your face and seems happy to see you",
          "Smiles when you talk to or smile at them",
          "Makes sounds other than crying and reacts to loud sounds",
          "Watches you as you move and looks at a toy for several seconds",
          "Holds their head up when on their tummy",
          "Moves both arms and both legs, and opens their hands briefly",
        ],
      },
      {
        heading: "Signs your 2-month-old needs a break",
        paragraphs: [
          "Play is tiring at this age. The NHS says sneezing, yawning, hiccupping, turning away, closing their eyes or bringing up some milk can mean your baby has had enough. Slow down, move somewhere quieter, or offer a feed or a nap.",
          "Cuddling and responding to your baby does not spoil them. Soothing with a soft voice, holding, rocking or singing helps them calm down.",
        ],
      },
      {
        heading: "If you feel overwhelmed",
        paragraphs: [
          "Two months in, many parents are exhausted, and crying can feel relentless. If you feel overwhelmed, put your baby down somewhere safe, such as their cot on their back, and step away for a few minutes, checking on them regularly. Never shake a baby. Ask your health visitor or GP for support, and call NHS 111 if you are worried about your baby.",
        ],
      },
      {
        heading: "When to talk to your health visitor",
        paragraphs: [
          "Your health visitor usually sees you at around 6 to 8 weeks. If your baby does not seem to respond to loud sounds, does not watch your face, or you have any other concern, mention it then or speak to your health visitor or GP sooner. You know your baby best.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should a 2-month-old play each day?",
        a: "There is no set amount. Short bursts of play spread between feeds and sleeps work best, and a few minutes of interaction at a time is normal. Watch for cues like yawning or looking away, and treat everyday care such as nappy changes and baths as playtime too.",
      },
      {
        q: "Does my 2-month-old need toys?",
        a: "Not really. Your face, voice and touch are what your baby is most interested in now. A rattle, a baby-safe mirror and a fabric book are nice extras. Check anything you give them has no small parts or sharp edges, because babies soon start to explore with their mouths.",
      },
      {
        q: "Is screen time okay for a 2-month-old?",
        a: "Screens are not recommended for babies. The NHS advises avoiding screen time, and the CDC suggests limiting screens to video calls with loved ones. Your baby learns far more from you talking, singing and playing together than from anything on a screen.",
      },
      {
        q: "My 2-month-old is not smiling yet. Should I worry?",
        a: "Babies develop at different speeds, and smiling often appears around this age rather than on a set day. Keep chatting face to face and smiling at your baby. If you are worried, or your baby does not seem to look at faces or respond to sounds, talk to your health visitor or GP.",
      },
    ],
    relatedSlugs: [
      "activities-for-newborn",
      "activities-for-4-month-old",
      "tummy-time-ideas",
      "what-do-i-do-with-my-baby",
    ],
    sources: [
      CDC_2_MONTHS,
      NHS_UNDERSTANDING_BABY,
      NHS_FIRST_SOUNDS,
      AAP_TUMMY_TO_PLAY,
    ],
    modifiedAt: REVIEWED,
  },
  {
    slug: "activities-for-4-month-old",
    category: "development",
    question: "What are good activities for a 4-month-old?",
    title: "Activities for a 4-month-old: play ideas and milestones",
    metaTitle: "Activities for a 4 month old: play ideas and milestones",
    description:
      "Fun activities for a 4-month-old: reaching, tracking, tummy time and chatting games, plus what most babies do by 4 months and when to ask for advice.",
    quickAnswer:
      "Good activities for a 4-month-old include floor play on a mat with toys to reach and kick, tummy time, tracking a bright toy, easy-to-grip rattles, peek-a-boo and back-and-forth chats. Give your baby daily time to move freely, and keep spells in bouncers and seats short.",
    bullets: [
      "Daily floor time on a mat to reach, kick and explore",
      "Easy-to-grip toys they can safely mouth",
      "Peek-a-boo and copying games",
      "Short spells only in bouncers and seats",
      "Tummy time awake and supervised; sleep on their back",
    ],
    sections: [
      {
        heading: "What can I do with my 4-month-old?",
        paragraphs: [
          "At 4 months, many babies chuckle, coo and start swiping at toys. Activities that let them reach, grab and 'talk' with you fit this stage well. These ideas come from the CDC:",
        ],
        list: [
          "Track a toy: while your baby lies on their back, slowly move a bright toy side to side and up and down",
          "Reach and grab: offer rattles or cloth books that are easy to hold",
          "Play peek-a-boo and watch for smiles",
          "Chat and pause: copy your baby's coos and see how long the conversation lasts",
          "Bounce gently: hold your baby under the arms with their feet on your lap",
          "Sing and move their arms and legs gently in a little exercise game",
          "Use your baby's name often",
          "Read a fabric or board book together at a quiet time",
        ],
      },
      {
        heading: "How much floor time does a 4-month-old need?",
        paragraphs: [
          "Give your baby time on the floor or a play mat every day so they can move and explore. WHO recommends babies are active several times a day, particularly through floor-based play, and that babies not yet moving about have at least 30 minutes of tummy time, spread across the day, while awake.",
          "Lay your baby on their back so they can kick, and on their tummy so they can push up. Tummy time is always supervised. For sleep, the NHS says babies should always go on their back with their feet at the foot of the cot.",
        ],
      },
      {
        heading: "Should I limit bouncers and baby seats?",
        paragraphs: [
          "Yes, keep them short. The NHS suggests walkers, bouncers and seats for no more than 20 minutes at a time, because long spells can delay sitting and walking. WHO advises babies are not strapped into a pram, high chair or carrier for more than 1 hour at a time.",
        ],
      },
      {
        heading: "What do most babies do by 4 months?",
        paragraphs: [
          "The CDC lists skills most babies show by about 4 months. These are typical ranges, not a test.",
        ],
        list: [
          "Smiles on their own to get your attention",
          "Chuckles (not yet a full laugh) when you try to make them laugh",
          "Looks at you, moves or makes sounds to get or keep your attention",
          "Coos ('oooo', 'aahh') and makes sounds back when you talk",
          "Turns their head towards the sound of your voice",
          "Opens their mouth when hungry and they see the breast or bottle",
          "Looks at their hands with interest",
          "Holds their head steady without support when held",
          "Holds a toy when you put it in their hand and swings at toys",
          "Brings hands to mouth and pushes up onto elbows or forearms on their tummy",
        ],
      },
      {
        heading: "Is it safe for my 4-month-old to put toys in their mouth?",
        paragraphs: [
          "Yes, mouthing is how babies explore. Let your baby mouth safe objects, but avoid anything sharp, hot or small enough to choke on. A blanket on the floor with a few safe toys gives them space to reach, kick and explore.",
          "The NHS advises keeping small objects, such as buttons, coins and small toy parts, out of your baby's reach, and keeping button batteries well away from small children.",
        ],
      },
      {
        heading: "When to talk to your health visitor",
        paragraphs: [
          "If your baby does not seem to hold their head steady when held, coo or make sounds back to you, turn towards your voice or bring their hands to their mouth, or you are worried for any reason, talk to your health visitor or GP. Babies develop at different speeds, and asking early is always fine.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should my 4-month-old be on the floor?",
        a: "There is no exact figure, but daily floor time is recommended. WHO advises babies are active several times a day through floor play, with at least 30 minutes of awake tummy time spread across the day for babies not yet moving about. Mix tummy time with time on their back to kick.",
      },
      {
        q: "Is it okay to let my 4-month-old watch TV?",
        a: "Screens are not recommended for babies. WHO says screen time is not recommended under 1, and the CDC suggests limiting screens to video calls with loved ones. Your baby learns more from you talking, reading, singing and playing on the floor together. A video call with family, with you joining in, is fine.",
      },
      {
        q: "My 4-month-old is not rolling yet. Is that normal?",
        a: "Yes. Rolling is not on the CDC's list of things most babies do by 4 months, so many babies are not rolling yet. Keep offering tummy time and floor play so they can practise pushing up and reaching. If you are worried about how your baby moves, talk to your health visitor or GP.",
      },
      {
        q: "Does my 4-month-old need a routine for play?",
        a: "The CDC suggests steady routines for sleeping and feeding, plus floor or play mat time with your baby every day. A regular pattern that suits your family might be floor play after a morning feed and a book before bed. It does not need to be strict.",
      },
    ],
    relatedSlugs: [
      "activities-for-2-month-old",
      "baby-sensory-activities",
      "tummy-time-ideas",
      "4-month-sleep-regression",
    ],
    sources: [
      CDC_4_MONTHS,
      NHS_KEEP_ACTIVE,
      WHO_SIT_LESS_PLAY_MORE,
      NHS_SAFETY,
    ],
    modifiedAt: REVIEWED,
  },
];
