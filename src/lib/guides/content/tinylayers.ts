import type { GuideContent } from "@/lib/guides/types";
import {
  AAP_BABY_CARRIERS,
  AAP_CAR_SEAT_WINTER,
  AAP_SAFE_SLEEP,
  NHS_DRESS,
  NHS_HIGH_TEMPERATURE_FEVER_IN_CHILDREN,
  NHS_SIDS,
  NHS_SUN_BABY,
} from "@/lib/guides/content/sources";

export const LAYERS_GUIDES: GuideContent[] = [
  {
    slug: "tog-guide-for-baby-sleep",
    category: "sleep",
    question: "What TOG sleeping bag should my baby sleep in?",
    title: "TOG guide for baby sleep: which sleeping bag for your room",
    metaTitle: "TOG guide for baby sleep: sleeping bag by room temperature",
    description:
      "What TOG means, which baby sleeping bag TOG to use at each room temperature from under 16°C to 27°C, what to wear underneath and how to check.",
    quickAnswer:
      "Use the TOG guide for baby sleep by matching the sleeping bag to the room temperature, not the season. In the NHS range of 16–20°C (61–68°F), our starting point is a 2.5 TOG bag up to 19°C and a 1.0 TOG bag from 20°C. Check the maker's chart, then feel your baby's chest or neck.",
    bullets: [
      "TOG measures warmth: the higher the number, the warmer the bag",
      "NHS: keep your baby's room at about 16–20°C",
      "Change the layers under the bag before you change the bag",
      "No hats, duvets, pillows or loose blankets in the cot",
      "Sweaty or hot chest means remove a layer",
    ],
    sections: [
      {
        heading: "What does TOG mean on a baby sleeping bag?",
        paragraphs: [
          "TOG (thermal overall grade) is a number that tells you how warm a fabric is. A 0.5 TOG bag is thin and summery. A 2.5 TOG bag is padded and made for cooler rooms.",
          "A baby sleeping bag (also called a sleep sack or wearable blanket) does the job of a blanket without the loose fabric. The AAP says nothing should be in the cot except a fitted sheet, and suggests a wearable blanket or extra layers of clothing if you are worried your baby will get cold. The NHS also lists a baby sleeping bag as a safe option.",
        ],
      },
      {
        heading: "Which TOG for which room temperature?",
        paragraphs: [
          "Measure the room near the cot with a room thermometer. The NHS recommends keeping it at about 16–20°C. Then use these TinyLayers starting points. They are not NHS or AAP rules, and brands rate their bags differently, so always check the sleeping bag maker's own guidance too.",
        ],
        list: [
          "Below 16°C: warm the room if you can. If not, 2.5 to 3.5 TOG (the maker's winter rating) over a long-sleeve vest and a long-sleeve sleepsuit",
          "16–17°C: 2.5 TOG over a vest and a long-sleeve sleepsuit",
          "18–19°C: 2.5 TOG over a long-sleeve sleepsuit",
          "20–21°C: 1.0 TOG over a cotton sleepsuit or long-sleeve vest",
          "22–23°C: 1.0 TOG over a short-sleeve vest",
          "24–26°C: 0.5 TOG over a short-sleeve vest, or the vest alone if your baby feels hot",
          "27°C and above: a short-sleeve vest alone, or under a 0.2 TOG bag",
        ],
      },
      {
        heading: "What should my baby wear under a sleeping bag?",
        paragraphs: [
          "Think of the bag as the outer layer and the clothes underneath as the dial you turn. If the room is a degree or two off, swap a short-sleeve bodysuit for a long-sleeve one (or the other way round) before buying a new bag.",
          "If your baby seems cold, the NHS says add a layer of clothing, not extra blankets. In hot weather the NHS says keep nightwear to a minimum, and your baby can sleep in just a nappy. Babies do not need a hat to sleep indoors. The NHS says remove hats and extra clothing as soon as you come inside.",
        ],
      },
      {
        heading: "Signs the TOG is too warm or too cool",
        paragraphs: [
          "Overheating can increase the risk of sudden infant death syndrome (SIDS), so it is worth checking. The NHS says feel your baby's chest or the back of their neck. Cool hands and feet are normal and are not a sign to add more.",
        ],
        list: [
          "Too warm: sweating, a hot chest or flushed skin. Remove a layer or drop a TOG.",
          "About right: chest and neck feel warm and dry.",
          "Too cool: chest or back of neck feels cool to your warm hand. Add one thin layer under the bag.",
        ],
      },
      {
        heading: "Safe sleep rules that apply at every TOG",
        paragraphs: [
          "The right TOG only helps if the rest of the cot is safe. These points come from NHS and AAP safe sleep advice.",
        ],
        list: [
          "Lay your baby on their back for every sleep",
          "Use a firm, flat mattress with nothing else in the cot",
          "No pillows, duvets, cot bumpers, loose blankets or soft toys",
          "Do not use weighted sleeping bags, sleepers or swaddles (AAP)",
          "Keep the cot away from radiators, heaters, fires and direct sunlight",
          "Never use a hot water bottle or electric blanket for your baby",
        ],
      },
    ],
    faqs: [
      {
        q: "What TOG should my baby wear at 18°C?",
        a: "At 18°C, the TinyLayers starting point is a 2.5 TOG sleeping bag over a long-sleeve sleepsuit. If your baby's chest feels sweaty after 10 to 15 minutes, swap the sleepsuit for a lighter vest. If it feels cool, add a vest underneath. Check your brand's own chart, as TOG ratings can vary between makers.",
      },
      {
        q: "Is a higher TOG safer in winter?",
        a: "No. A warmer bag is not a safer bag. The NHS and AAP both say overheating can increase the risk of SIDS, so aim for warm and dry rather than as warm as possible. If you are torn between two options, choose the lighter one and check your baby's chest or the back of their neck.",
      },
      {
        q: "Can I use a blanket instead of a sleeping bag?",
        a: "The NHS says lightweight blankets or sheets are fine if your baby sleeps in the feet-to-foot position, with their feet at the bottom of the cot. Never use duvets or pillows. The AAP says nothing but a fitted sheet should be in the cot, and suggests a wearable blanket or layers of clothing instead.",
      },
      {
        q: "What TOG for a newborn?",
        a: "Newborns use the same room-based TOG guide as older babies. What matters is the bag's size: choose one made for your baby's weight or age, as the manufacturer advises. If your baby was born early or has a health condition, ask your health visitor or neonatal team which sleeping bag they recommend.",
      },
      {
        q: "My baby's room is above 24°C. What should I do?",
        a: "Use a 0.5 TOG bag or lighter, or just a vest or nappy. The NHS suggests closing blinds or curtains during the day and using a fan in the room, but not aimed at your baby. Check your baby's chest regularly and remove a layer if they feel hot or sweaty.",
      },
    ],
    relatedSlugs: [
      "baby-sleep-16-19c",
      "baby-sleep-20-23c",
      "baby-sleep-24-26c",
      "feel-baby-neck-to-check-temperature",
    ],
    sources: [NHS_SIDS, NHS_DRESS, NHS_SUN_BABY, AAP_SAFE_SLEEP],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "feel-baby-neck-to-check-temperature",
    category: "sleep",
    question: "Should I feel my baby's neck to check if they're too hot?",
    title: "Feel your baby's neck to check their temperature: how and why",
    metaTitle: "Feel baby's neck to check temperature: too hot or cold?",
    description:
      "How to feel your baby's neck or chest to tell if they are too hot or too cold, why cold hands are normal, and when to use a thermometer instead.",
    quickAnswer:
      "Yes, feel the back of your baby's neck or their chest to check their temperature. The NHS says to check by feeling their chest or the back of their neck. Warm and dry is right. Hot or sweaty means remove a layer. Cool hands and feet on their own are normal.",
    bullets: [
      "Feel the back of the neck, chest or tummy, not hands or feet",
      "Warm and dry: dressed right",
      "Hot, sweaty or flushed: remove a layer",
      "Cool to your warm hand: add one thin layer",
      "This checks clothing, not fever: use a thermometer if unwell",
    ],
    sections: [
      {
        heading: "Why feel the neck and not the hands?",
        paragraphs: [
          "Your baby's hands and feet often feel cool even when the rest of them is comfortable. The NHS says not to worry if their hands or feet feel cool, as this is normal. The back of the neck, the chest and the tummy give a much more honest reading.",
          "Adding socks, a hat or another blanket because toes feel cold is one of the most common ways babies end up overdressed. Overheating can increase the risk of sudden infant death syndrome (SIDS), so the neck check is worth learning.",
        ],
      },
      {
        heading: "How to check your baby's temperature by feeling the neck",
        paragraphs: [
          "The check takes a few seconds and you do not need to wake your baby.",
        ],
        list: [
          "Wait about 10 to 15 minutes after settling your baby or going outside",
          "Warm your own hand first if you have just come in from the cold",
          "Slide two fingers under the collar onto the back of the neck, or onto the upper chest or tummy",
          "Feel for warmth and dampness, not for an exact number",
          "Adjust by one thin layer, then check again 10 to 15 minutes later",
        ],
      },
      {
        heading: "Signs your baby is too hot",
        paragraphs: [
          "The NHS says remove one or more layers of clothing or bedding if your baby's skin is hot or sweating. The AAP lists sweating, a hot chest and flushed skin as signs of overheating.",
        ],
        list: [
          "Sweaty neck, chest or tummy",
          "Chest or tummy feels hot to the touch",
          "Flushed skin",
        ],
      },
      {
        heading: "Signs your baby is too cold",
        paragraphs: [
          "If the back of the neck or the chest feels cool to your warm hand, add one thin layer. At night, the NHS says add a layer of clothing rather than extra blankets. Outdoors, a hat is fine and useful in the cold, but take it off as soon as you come inside or get into a warm car, bus or train, even if it means waking your baby.",
        ],
      },
      {
        heading: "Feeling the neck is not a fever check",
        paragraphs: [
          "The neck check tells you whether your baby is dressed right. It cannot tell you whether they have a fever. If your baby seems unwell, use a digital thermometer under the armpit. The NHS says a high temperature is 38°C (100.4°F) or more, and if your baby has just been wrapped in a blanket, wait a few minutes and take the reading again.",
          "Call NHS 111 or your GP if your baby is under 3 months with a temperature of 38°C or higher, or 3 to 6 months with 39°C or higher. Call 999 (or your local emergency number) if your baby is drowsy and hard to wake, struggles to breathe, or has blue, grey or paler than usual skin, lips or tongue. The NHS also says not to wrap a child with a fever in too many clothes or bedding.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the neck or the chest better for checking?",
        a: "Either works. The NHS mentions the chest, the back of the neck and the tummy. Many parents use the back of the neck because they can reach it without undressing or waking their baby. Use the same rule wherever you check: warm and dry is right, hot or sweaty means remove a layer.",
      },
      {
        q: "My baby's neck is sweaty after a feed. Are they too hot?",
        a: "Give it a little time before you change anything. Let your baby settle for 10 minutes after the feed, then check again. If the neck and chest are still damp, or their skin is flushed, remove a layer or swap to a lighter sleeping bag and check once more.",
      },
      {
        q: "My baby's hands are cold at night. Should I add a layer?",
        a: "Not because of the hands alone. The NHS says cool hands and feet are normal. Feel the back of the neck or the chest instead. If it is warm and dry, your baby is dressed right. If it feels cool, add one thin layer of clothing under the sleeping bag, not a loose blanket.",
      },
      {
        q: "Do I still need a room thermometer?",
        a: "Yes, use both. A room thermometer near the cot helps you choose a starting outfit and keep the room at the NHS range of 16–20°C (61–68°F). The neck check then confirms that the outfit suits your baby on the night. TinyLayers can suggest a starting outfit from the room temperature.",
      },
    ],
    relatedSlugs: [
      "tog-guide-for-baby-sleep",
      "how-many-layers-should-baby-wear",
      "baby-sleep-20-23c",
      "baby-carrier-clothing",
    ],
    sources: [
      NHS_SIDS,
      NHS_DRESS,
      NHS_HIGH_TEMPERATURE_FEVER_IN_CHILDREN,
      AAP_SAFE_SLEEP,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "how-many-layers-should-baby-wear",
    category: "weather",
    question: "How many layers should a baby wear?",
    title: "How many layers should a baby wear? A guide by temperature",
    metaTitle: "How many layers should a baby wear? By temperature",
    description:
      "How many layers a baby should wear indoors, outside, at night and in hot weather, with the NHS one-extra-layer rule and a simple temperature guide.",
    quickAnswer:
      "How many layers a baby should wear depends on the temperature, but the NHS rule of thumb is one more layer than you are wearing. If you are in a T-shirt and jumper, your baby might wear a vest, sleepsuit and cardigan. In hot weather, a single layer is usually enough.",
    bullets: [
      "NHS: one more layer than you are comfortable in",
      "Hot weather: one light cotton layer",
      "Night: sleeping bag sized to the room, no hat",
      "Remove hats and extra layers as soon as you come inside",
      "Check the chest or back of the neck, not hands",
    ],
    sections: [
      {
        heading: "The one-extra-layer rule",
        paragraphs: [
          "The NHS says a good rule of thumb is to give your baby one more layer of clothing than you are wearing. The AAP gives the same advice: infants should wear one more layer than adults.",
          "The NHS example: if you are in a T-shirt and a jumper, dress your baby in a vest, a sleepsuit and a cardigan or jumper. If you feel chilly, your baby probably does too. Several thin layers are easier to adjust than one thick one.",
        ],
      },
      {
        heading: "How many layers by outdoor temperature",
        paragraphs: [
          "These are TinyLayers starting points for being outside, not NHS or AAP rules. Adjust for wind, rain and sun, then check your baby after 10 to 15 minutes.",
        ],
        list: [
          "27°C (81°F) and above: one thin, loose cotton vest or romper, a wide-brimmed sun hat and full shade",
          "24–26°C: a single layer of lightweight cotton, a wide-brimmed sun hat and shade",
          "22–23°C: short-sleeve vest with light cotton trousers or a romper, and a sun hat",
          "19–21°C: vest and a light sleepsuit, with a thin cardigan to hand",
          "15–18°C: long-sleeve vest, sleepsuit, and a cardigan or light jacket",
          "10–14°C: vest, sleepsuit, warm cardigan, pramsuit or coat, hat and mittens",
          "Below 10°C: vest, sleepsuit, fleece, insulated pramsuit, hat and mittens",
        ],
      },
      {
        heading: "How many layers should a baby wear to sleep?",
        paragraphs: [
          "At night, think in sleeping bag TOG plus what goes underneath, rather than counting layers. The NHS recommends a room of 16–20°C, and says a sleepsuit with a baby sleeping bag, or a sheet and a lightweight blanket, should be fine. In a 20–21°C room, the TinyLayers starting point is a sleepsuit or long-sleeve vest under a 1.0 TOG bag.",
          "Never add a hat, duvet or extra loose blankets for sleep. If your baby feels cold, add a layer of clothing instead.",
        ],
      },
      {
        heading: "How many layers in hot weather?",
        paragraphs: [
          "The NHS says when it is hot, a single layer is enough, and lightweight cotton is best because it breathes. Keep babies under 6 months out of direct sunlight, and older babies out of the sun as much as possible, especially between 11am and 3pm. A sun hat with a wide brim or a long flap at the back protects the head, ears and neck.",
        ],
      },
      {
        heading: "Indoors, in the car and in a carrier",
        paragraphs: [
          "The number of layers changes as soon as you change place. These rules keep your baby from overheating at the edges of a trip.",
        ],
        list: [
          "Coming indoors or onto a warm bus or train: the NHS says remove hats and extra clothing straight away, even if it wakes your baby",
          "Car seat: the AAP says thin layers under the harness, with a coat or blanket over the buckled straps",
          "Carrier or sling: the TinyLayers starting point is one layer lighter than for the pram, as your body heat adds warmth",
          "Pram in the sun: a parasol or sunshade, never a blanket or muslin over the top",
        ],
      },
      {
        heading: "Signs your baby has too many layers",
        paragraphs: [
          "Feel the back of the neck, chest or tummy. Sweating or a hot chest or tummy means take a layer off. The NHS says cool hands and feet are normal and not a reason to add more. If your baby still feels hot after you remove layers and seems unwell, take their temperature and call NHS 111 or your GP if you are worried.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should a baby always wear one more layer than an adult?",
        a: "It is a rule of thumb from both the NHS and AAP, not a strict law. It works well for cooler days outside. In hot weather the NHS says a single light layer is enough, and in a carrier your own body heat adds warmth. Always confirm by feeling your baby's chest or the back of their neck.",
      },
      {
        q: "How many layers should a newborn wear?",
        a: "Newborns follow the same rule: one more layer than you. A vest, sleepsuit and cardigan is a typical indoor outfit in a cool house. The NHS says small babies are not very good at regulating their own temperature, so check them often. If your baby was born early or is unwell, ask your health visitor for advice on dressing them.",
      },
      {
        q: "Does a vest count as a layer?",
        a: "Yes. A vest or bodysuit is the base layer in almost every outfit. A sleepsuit or top goes over it, and a cardigan, jumper or coat goes over that. A pram blanket or footmuff also counts as a layer, which is why babies in a pram often need less on underneath.",
      },
      {
        q: "Should my baby wear a hat indoors?",
        a: "No. The NHS says remove hats and extra clothing as soon as you come indoors, even if it means waking your baby. That means no hat for sleep indoors either. If your baby feels cool inside, add a thin layer of clothing instead. Hats are for outside: warm hats in the cold and wide-brimmed sun hats in summer.",
      },
    ],
    relatedSlugs: [
      "baby-clothes-15-18-degrees",
      "baby-clothes-19-21-degrees",
      "baby-stroller-clothing",
      "baby-carrier-clothing",
    ],
    sources: [NHS_DRESS, NHS_SIDS, NHS_SUN_BABY, AAP_CAR_SEAT_WINTER],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-stroller-clothing",
    category: "situation",
    question: "What should my baby wear in the pram or stroller?",
    title: "What should my baby wear in the pram or stroller?",
    metaTitle: "Baby stroller clothing: what to wear in the pram",
    description:
      "What to dress your baby in for the pram or stroller in hot, mild and cold weather, how to use blankets and footmuffs, and why never to cover the pram.",
    quickAnswer:
      "For baby stroller clothing, dress your baby for the outdoor temperature, then let the pram's blanket or footmuff count as one layer. Never cover the pram with a blanket or muslin for shade, as the NHS warns this can cause overheating. Use a parasol or sunshade and check your baby often.",
    bullets: [
      "Dress for the outdoor temperature, then count the blanket as a layer",
      "Never drape a blanket or muslin over the pram",
      "Under 6 months: keep out of direct sun",
      "Feet-to-foot if your baby sleeps lying flat",
      "Shed layers as soon as you go indoors",
    ],
    sections: [
      {
        heading: "How to dress your baby for the pram",
        paragraphs: [
          "Start with the outdoor temperature. The NHS rule of thumb is one more layer than you are wearing, and a pram blanket, footmuff or pramsuit can be that extra layer. These are TinyLayers starting points, not NHS rules.",
        ],
        list: [
          "Hot, 24°C (75°F) and above: one thin layer of lightweight cotton, a wide-brimmed sun hat and shade",
          "Warm, 22–23°C: short-sleeve vest with light trousers or a romper, and a sun hat",
          "Mild, 15–21°C: vest and sleepsuit, with a cardigan or light jacket on cooler days",
          "Cool, 10–14°C: vest, sleepsuit, warm cardigan, pramsuit, hat and mittens",
          "Cold, below 10°C: vest, sleepsuit, fleece, insulated pramsuit, hat, mittens and socks",
        ],
      },
      {
        heading: "Can I cover the pram with a muslin or blanket?",
        paragraphs: [
          "No. The NHS says do not cover your baby's pushchair or pram with a blanket because it could lead to overheating, and never cover the pram with a muslin.",
          "Use the pram hood, or attach a parasol or sunshade to the pram, as the NHS suggests.",
        ],
      },
      {
        heading: "Pram clothing in hot weather and sun",
        paragraphs: [
          "The NHS says babies under 6 months should be kept out of direct sunlight. Older babies should be kept out of the sun as much as possible, especially between 11am and 3pm. Sunscreen is not recommended for babies under 6 months. From 6 months, the NHS suggests a sunscreen of at least SPF 30 with UVA and UVB protection.",
        ],
        list: [
          "Loose, lightweight cotton clothes and not too many layers",
          "A sun hat with a wide brim or a long flap at the back",
          "A parasol or sunshade clipped to the pram",
          "Extra breastfeeds, as your baby may want to feed more than usual (fully breastfed babies do not need water until they start solids)",
          "Never leave your baby in a parked car, as it heats up quickly",
        ],
      },
      {
        heading: "Pram clothing in winter",
        paragraphs: [
          "Several thin layers under a footmuff or pram blanket are easier to adjust than one thick outfit. A warm hat and mittens help outside.",
          "The tricky part is coming inside. The NHS says remove hats and extra clothing as soon as you come indoors or get on a bus or train, even if it means waking your baby. Open the footmuff and take off the rain cover in shops and cafés.",
        ],
      },
      {
        heading: "If your baby sleeps in the pram",
        paragraphs: [
          "Treat a lie-flat pram like a cot. The NHS says place your baby on their back in the feet-to-foot position, with their feet at the bottom of the pram. Use a lightweight blanket or a baby sleeping bag, never a duvet or pillow. Take hats off when you are back inside.",
          "If your baby falls asleep in a seated pushchair or car seat unit, the AAP advises moving them to a firm, flat sleep surface on their back as soon as you can.",
        ],
      },
      {
        heading: "How to tell if your baby is warm enough in the pram",
        paragraphs: [
          "At each stop, slide two fingers onto the back of your baby's neck or their chest. Warm and dry means they are dressed right. Hot or sweaty means open the footmuff or take a layer off. Cool means add a layer or head home. Cold hands alone are normal, the NHS says.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I put a blanket over the pram to help my baby sleep?",
        a: "No. The NHS advises against covering a pram or pushchair with a blanket or muslin, because it can cause your baby to overheat. Use the hood, a parasol or a sunshade for shade, and find a quieter spot if your baby needs to settle.",
      },
      {
        q: "Does my baby need a coat in the pram?",
        a: "Not always. A footmuff, pram suit or warm blanket over thin layers can replace a coat. Too much padding plus a hood and rain cover can make a pram warm on a mild day, so check your baby's neck after 10 to 15 minutes and take a layer off if they feel sweaty.",
      },
      {
        q: "What should a newborn wear in the pram?",
        a: "Follow the NHS rule of one more layer than you, for example a vest, sleepsuit and cardigan with a blanket on cooler days. Keep a newborn out of direct sun, lay them feet-to-foot if they are sleeping flat, and remove hats and extra layers once you are inside.",
      },
      {
        q: "Is it safe to use a pram rain cover?",
        a: "Rain covers keep your baby dry, but they can make the pram warmer. Take the rain cover off when the rain stops and when you go indoors. Check the back of your baby's neck often while it is on. If your baby feels hot or sweaty, open the cover and remove a layer.",
      },
    ],
    relatedSlugs: [
      "how-many-layers-should-baby-wear",
      "baby-carrier-clothing",
      "baby-car-seat-clothing",
      "baby-clothes-10-14-degrees",
    ],
    sources: [NHS_SUN_BABY, NHS_DRESS, NHS_SIDS, AAP_SAFE_SLEEP],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-carrier-clothing",
    category: "situation",
    question: "What should my baby wear in a baby carrier?",
    title: "What should my baby wear in a baby carrier or sling?",
    metaTitle: "Baby carrier clothing: what to wear in a sling",
    description:
      "What your baby should wear in a carrier or sling in summer and winter, how your body heat counts as a layer, and the TICKS checks for safe babywearing.",
    quickAnswer:
      "For baby carrier clothing, dress your baby one layer lighter than you would for the pram, because your body heat and the carrier fabric add warmth. Keep their face uncovered and visible. Check the back of their neck often and remove a layer if they feel hot or sweaty.",
    bullets: [
      "One layer lighter than the pram outfit",
      "Face always visible, chin off chest",
      "Nothing covering your baby's head",
      "In winter, your coat goes over you both, face uncovered",
      "Take your baby out of the carrier to feed",
    ],
    sections: [
      {
        heading: "Why babies need fewer layers in a carrier",
        paragraphs: [
          "In a carrier, your baby is pressed against your warm body and wrapped in fabric. That adds up to an extra layer before they put on any clothes. The TinyLayers rule of thumb is to dress them one layer lighter than for the pram, in any season.",
          "Overheating can increase the risk of sudden infant death syndrome (SIDS), so check the back of your baby's neck every time you stop. The NHS says if your baby's skin is hot or sweating, remove one or more layers.",
        ],
      },
      {
        heading: "Safe babywearing: the TICKS checks",
        paragraphs: [
          "Whatever your baby wears, the carrier must hold them in a safe position. The NHS recommends the TICKS rules for slings and carriers.",
        ],
        list: [
          "Tight: the sling hugs your baby close to your body",
          "In view: you can see your baby's face at all times",
          "Close enough to kiss: your baby's head is close enough to kiss",
          "Keep chin off chest: your baby's chin is not pressed into their chest",
          "Supported back: your baby's back is comfortably upright",
        ],
      },
      {
        heading: "Keep your baby's airway clear",
        paragraphs: [
          "The NHS says do not let the material of a sling or carrier cover your baby's head. The AAP says your baby's neck should be straight, their chin not pressed into their chest, and their nose and mouth clear. Some slings can curl a baby into a C-shape, which the AAP says greatly increases the risk of breathing problems.",
          "The AAP also says babies born early or with breathing problems should not go in backpacks or other upright carriers. Ask your health visitor or neonatal team for advice. Take your baby out of the sling to feed them, as the NHS says feeding in a sling is not safe. If your baby falls asleep in a carrier, the AAP advises moving them to a firm, flat surface on their back as soon as you can.",
        ],
      },
      {
        heading: "What should my baby wear in a carrier in summer?",
        paragraphs: [
          "On warm days, one light cotton layer or just a bodysuit is often enough, because you and the carrier are already giving off heat. The NHS says babies under 6 months should be kept out of direct sunlight, so use a wide-brimmed sun hat and stay in the shade. Check your baby's neck more often in hot weather, and take breaks out of the carrier.",
        ],
      },
      {
        heading: "What should baby wear in a carrier in winter?",
        paragraphs: [
          "In winter, dress your baby in thin warm layers rather than a thick snowsuit, which makes it harder to keep the carrier tight and can overheat them against your body. Then use your coat, or a babywearing cover, over both of you.",
        ],
        list: [
          "Base: long-sleeve bodysuit",
          "Middle: footed sleepsuit or a thin fleece or knit layer",
          "Extras: warm hat, mittens and socks or booties, as legs and feet stick out",
          "Outer: your zipped coat or a babywearing cover, with your baby's face uncovered and visible",
          "Indoors: open your coat and take off your baby's hat straight away, as the NHS advises",
        ],
      },
    ],
    faqs: [
      {
        q: "Can my baby wear a snowsuit in a carrier?",
        a: "A thick snowsuit is usually too much in a carrier. It adds bulk that makes it harder to keep the carrier tight, and your body heat makes it warmer still. Thin layers, a hat and booties, with your coat over both of you, are easier to adjust. Check the neck at every stop.",
      },
      {
        q: "Can my baby go inside my coat?",
        a: "Yes, a zipped coat or babywearing cover can go over you both, as long as your baby's face stays uncovered and you can see it at all times. The NHS says no material should cover your baby's head. Dress your baby lighter underneath, and open your coat as soon as you go inside.",
      },
      {
        q: "How do I know if my baby is too hot in the carrier?",
        a: "Feel the back of their neck or their chest. Sweating, a hot chest, damp hair or flushed cheeks mean they are too warm. Remove a layer, open your coat or take a break out of the carrier. Cold hands and feet alone are normal and are not a reason to add more.",
      },
      {
        q: "Should my baby wear a hat in the carrier?",
        a: "Outdoors, yes: a warm hat in the cold and a wide-brimmed sun hat in summer. Make sure the hat and the carrier fabric stay clear of your baby's face. Take the hat off as soon as you come indoors or get into a warm car, bus or train.",
      },
    ],
    relatedSlugs: [
      "baby-stroller-clothing",
      "how-many-layers-should-baby-wear",
      "feel-baby-neck-to-check-temperature",
      "baby-clothes-10-14-degrees",
    ],
    sources: [NHS_SIDS, NHS_SUN_BABY, AAP_BABY_CARRIERS, AAP_SAFE_SLEEP],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-car-seat-clothing",
    category: "situation",
    question: "What should my baby wear in a car seat?",
    title: "What should my baby wear in a car seat? Coats, layers and blankets",
    metaTitle: "Baby car seat clothing: no puffy coats under straps",
    description:
      "What your baby should wear in a car seat, why puffy coats and snowsuits go over the harness not under it, the pinch test, and how to avoid overheating.",
    quickAnswer:
      "In a car seat, your baby should wear thin, close-fitting layers under the harness. The AAP says bulky coats and snowsuits should not be worn under the straps. Buckle your baby in snugly, then lay a coat or blanket over the fastened harness, and remove it once the car warms up.",
    bullets: [
      "Thin layers under the harness",
      "No puffy coats or snowsuits under the straps",
      "Coat or blanket over the buckled harness",
      "Do the pinch test every time",
      "Take your baby out of the seat when you arrive",
    ],
    sections: [
      {
        heading: "Why puffy coats and snowsuits are not safe under the harness",
        paragraphs: [
          "The AAP says bulky clothing, including winter coats and snowsuits, should not be worn under the harness of a car seat. In a crash, the fluffy padding flattens straight away, which leaves extra space under the straps. A harness that felt tight over a coat can suddenly be loose.",
          "Nothing bulky should go under your baby's body or between their body and the harness straps. This includes thick footmuffs or liners that did not come with your seat, as the AAP warns these have not been crash tested with it.",
        ],
      },
      {
        heading: "What should my baby wear in a car seat in winter?",
        paragraphs: [
          "The AAP suggests starting with close-fitting layers and adding warmth that does not sit under the straps.",
        ],
        list: [
          "Base: long-sleeve bodysuit, and tights or leggings",
          "Middle: trousers and a warmer top, such as a jumper, then a thin fleece jacket if needed",
          "Extras: hat, mittens, and socks or booties, which keep your baby warm without getting in the way of the straps",
          "Over the top: a blanket over the buckled harness, or a coat put on backwards over the straps",
        ],
      },
      {
        heading: "How to do the pinch test",
        paragraphs: [
          "The pinch test checks whether the harness is snug enough. Do it in the clothes your baby will actually travel in.",
        ],
        list: [
          "Buckle your baby in and tighten the harness",
          "Try to pinch a fold in the harness strap",
          "If you can pinch the strap, tighten it until it fits snugly against your baby's chest",
          "If it will not fit snugly, take off the bulky layer and put it over the buckled harness instead",
        ],
      },
      {
        heading: "Keeping your baby warm without overheating",
        paragraphs: [
          "The AAP suggests keeping the carrier part of an infant car seat indoors when you are not using it, so it starts at room temperature. Make the top layer easy to remove, so your baby does not get too hot once the car warms up. The NHS says take off hats and extra clothing as soon as you get into a warm car, even if it means waking your baby.",
          "If you use a car seat cover, the AAP says use it only if it has no layer under your baby, and keep your baby's face uncovered. The NHS warns never to leave a baby in a parked car, as they can get hot very quickly.",
        ],
      },
      {
        heading: "Can my baby sleep in the car seat?",
        paragraphs: [
          "The NHS says it is fine for your baby to fall asleep in a car seat while you are travelling, but take them out as soon as you get where you are going and do not let them stay in it for too long. The AAP advises moving a sleeping baby to a firm, flat surface on their back as soon as possible. Always follow your seat's own instructions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I put a blanket over my baby in the car seat?",
        a: "Yes, over the harness. The AAP says you can lay a blanket over the top of the buckled straps. Strap your baby in snugly in thin layers first, then add the blanket. Keep it away from their face, and take it off once the car is warm so your baby does not overheat.",
      },
      {
        q: "Are fleece jackets safe in a car seat?",
        a: "A thin fleece is usually fine. The AAP lists a thin fleece jacket as a sensible top layer. To be sure, do the pinch test while your baby wears it. If you cannot get the harness snug against their chest, take the fleece off and put it over the buckled harness instead.",
      },
      {
        q: "Should my baby wear a hat in the car?",
        a: "A hat is useful getting to and from the car in the cold, and the AAP says hats, mittens and booties do not interfere with the straps. Once the car is warm, the NHS says take off hats and extra clothing, even if it wakes your baby, to stop them overheating.",
      },
      {
        q: "Are footmuffs and car seat covers safe?",
        a: "Covers that go over the top of the seat, like a blanket, are fine if your baby's face stays uncovered. The AAP says use a cover only if it has no layer under your baby, and that anything that did not come with your car seat has not been crash tested with it.",
      },
    ],
    relatedSlugs: [
      "baby-stroller-clothing",
      "how-many-layers-should-baby-wear",
      "baby-clothes-10-14-degrees",
    ],
    sources: [AAP_CAR_SEAT_WINTER, NHS_SIDS, NHS_SUN_BABY, AAP_SAFE_SLEEP],
    modifiedAt: "2026-10-12",
  },
];
