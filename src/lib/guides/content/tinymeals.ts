import type { GuideContent } from "@/lib/guides/types";
import {
  AAP_ALLERGENS,
  AAP_BOTTLE_TO_CUP,
  AAP_CHOKING_PREVENTION,
  AAP_DRINKS_UNDER_5,
  AAP_INFANT_CONSTIPATION,
  AAP_IRON_SUPPLEMENTS,
  AAP_STARTING_SOLIDS,
  CDC_CHOKING_HAZARDS,
  CDC_HUNGRY_OR_FULL,
  CDC_INTRODUCE_SOLIDS,
  NHS_7_TO_9_MONTHS,
  NHS_ALLERGIES,
  NHS_ANAPHYLAXIS,
  NHS_CHOKING_GAGGING,
  NHS_CONSTIPATION_CHILDREN,
  NHS_DRINKS,
  NHS_FIRST_FOODS,
  NHS_FOODS_TO_AVOID,
  NHS_FOOD_AND_DRINKS_TO_AVOID,
  NHS_FOOD_HYGIENE,
  NHS_FROM_6_MONTHS,
  NHS_MEAL_IDEAS,
  NHS_PREPARING_FOOD,
  NHS_STOP_CHOKING,
  NHS_STORING_REHEATING,
  NHS_VITAMINS_FOR_CHILDREN,
  NHS_WHEN_TO_USE_111,
  NHS_YOUNG_CHILDREN,
  WHO_FEEDING,
} from "@/lib/guides/content/sources";

export const MEALS_GUIDES: GuideContent[] = [
  {
    slug: "baby-meal-ideas",
    category: "cooking",
    question: "What are easy baby meal ideas?",
    title: "Easy baby meal ideas for every stage of weaning",
    metaTitle: "Easy baby meal ideas: simple, safe plates by age",
    description:
      "Easy baby meal ideas for breakfast, lunch and tea, how to adapt family food safely, and which foods to leave out, based on NHS weaning advice for babies.",
    quickAnswer:
      "Easy baby meal ideas are mostly ordinary family food made soft, unsalted and the right size: porridge with mashed banana, scrambled egg on toast fingers, lentils with mashed sweet potato, or fish with potato and broccoli. Match the texture to your baby's stage and leave out salt, sugar and honey.",
    bullets: [
      "Start from what the family is eating, then soften, mash or cut it",
      "Do not add salt or sugar to food or cooking water",
      "Include fruit or vegetables at every meal",
      "Under 12 months, offer extra milk rather than snacks",
      "Always stay with your baby while they eat",
    ],
    sections: [
      {
        heading: "What makes a good baby meal?",
        paragraphs: [
          "A good baby meal is soft enough for your baby's stage, has no added salt or sugar, and mixes a few food groups. You do not need a separate cookbook.",
          "Aim to build each plate from a starchy food, a protein, and a fruit or vegetable. Over the week, include iron-rich foods such as meat, fish, eggs, beans, lentils, fortified breakfast cereals and dark green vegetables.",
        ],
        list: [
          "Starchy foods: oats, pasta, potato, rice, toast, chapatti, couscous",
          "Proteins: eggs, fish without bones, chicken, minced meat, beans, lentils, tofu",
          "Vegetables: broccoli, cauliflower, peas, carrot, courgette, spinach",
          "Fruit: banana, pear, mango, peach, melon",
          "Dairy: plain full-fat yoghurt, pasteurised cheese",
        ],
      },
      {
        heading: "Easy baby breakfast, lunch and tea ideas",
        paragraphs: [
          "These ideas come from NHS baby and toddler meal suggestions. They suit babies who are already used to a range of foods, rather than very first tastes.",
        ],
        list: [
          "Breakfast: unsweetened porridge made with whole milk, topped with mashed ripe pear or banana",
          "Breakfast: toast fingers with scrambled egg and sliced tomato",
          "Lunch: cauliflower cheese with soft cooked pasta pieces",
          "Lunch: scrambled egg with pitta or chapatti and soft vegetable fingers",
          "Tea: soft chickpea and cauliflower stew with mashed sweet potato",
          "Tea: lentil or lamb mince with a mashed potato topping and soft green vegetables",
          "Tea: flaked white fish cooked gently in milk, with mashed potato and soft carrot",
          "Pudding: plain full-fat yoghurt with fresh, tinned or stewed fruit",
        ],
      },
      {
        heading: "How do I adapt family meals for my baby?",
        paragraphs: [
          "Take your baby's portion out before you add salt, stock cubes, gravy or spicy sauces. Then change the texture to suit their stage.",
          "Around 6 months, mash or blend soft food and offer soft finger foods. From 7 to 9 months, move to lumpier mash and more finger foods. By 10 to 12 months, most babies manage mashed, lumpy, chopped and finger foods.",
          "Cook hard vegetables and harder fruit until soft. Remove bones, pips and stones. Cut small round foods such as grapes and cherry tomatoes into quarters.",
        ],
      },
      {
        heading: "How many meals a day does my baby need?",
        paragraphs: [
          "Around 6 months, one small meal a day is plenty, and milk is still the main source of nutrition. From 7 to 9 months, babies gradually move towards 3 meals a day: breakfast, lunch and tea.",
          "By 10 to 12 months, babies have 3 meals a day plus milk feeds, and lunch and tea can include a main course and a pudding such as fruit or unsweetened yoghurt. Babies under 12 months do not need snacks. If your baby seems hungry between meals, offer an extra milk feed instead. From 12 months, the NHS says your child will be eating 3 meals a day and may also need 2 healthy snacks.",
        ],
      },
      {
        heading: "Foods to leave out of baby meals",
        paragraphs: [
          "A few foods need care or should be avoided in the first year and beyond.",
        ],
        list: [
          "Salt and salty foods: stock cubes, gravy, bacon, sausages, crisps, ready meals and takeaways",
          "Added sugar, syrup and honey (no honey before 12 months)",
          "Whole nuts before 5 years (crushed, ground or smooth nut butter spread thinly is fine)",
          "Mould-ripened soft cheeses such as brie, and unpasteurised cheese, unless cooked in a recipe",
          "Raw or lightly cooked shellfish, and shark, swordfish or marlin",
          "Eggs without the British Lion stamp unless the white and yolk are cooked solid",
        ],
      },
      {
        heading: "Easy tips for tired days",
        paragraphs: [
          "Repeat what works. It can take 10 or more tries before a baby accepts a new food, so a refused meal is still worth offering again.",
          "Batch cook and freeze small portions in ice cube trays or small pots. Shop-bought pouches and jars are fine occasionally, but squeeze them onto a spoon rather than letting your baby suck from the pouch. TinyMeals can suggest recipes matched to your baby's stage when you are short on ideas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to make separate baby recipes every day?",
        a: "Usually not. Most baby meals can come from the family meal. Take your baby's portion out before adding salt, stock or strong sauces, then mash, chop or cut it into finger foods to suit their stage. A few batch-cooked portions in the freezer cover the days when the family meal does not work.",
      },
      {
        q: "Can my baby eat the same meal twice in a day?",
        a: "Yes. Repeating meals is fine, especially when you are tired. Over the week, try to include a mix of starchy foods, proteins, fruit, vegetables and full-fat dairy, plus iron-rich foods such as meat, fish, eggs, beans and lentils. Variety across days matters more than a different plate every meal.",
      },
      {
        q: "Can I use jars and pouches for baby meals?",
        a: "The NHS suggests using shop-bought pouches, jars and trays only occasionally rather than as everyday food. When you do use a pouch, squeeze it onto a spoon instead of letting your baby suck from it, which can increase the risk of tooth decay. Wait until around 6 months before using them, even if the label says from 4 months.",
      },
      {
        q: "What drink should I give with baby meals?",
        a: "From around 6 months, give your baby a little water at mealtimes, in an open cup or a free-flow cup with no valve. Breast milk or first infant formula stays the main drink until 12 months. Avoid sugary drinks such as fruit juice, squash and fizzy drinks, and do not give cows' milk as a main drink before 12 months.",
      },
      {
        q: "How much food should my baby eat at each meal?",
        a: "Let your baby lead. Start with a few spoonfuls or a few pieces and offer more if they seem keen. Signs they have had enough include closing their mouth firmly or turning their head away. Appetite changes from day to day, so do not force food or worry about one small meal.",
      },
    ],
    relatedSlugs: ["foods-to-avoid-for-babies", "first-baby-foods", "baby-breakfast-ideas", "baby-dinner-ideas", "baby-led-weaning-meal-ideas"],
    sources: [
      NHS_MEAL_IDEAS,
      NHS_FIRST_FOODS,
      NHS_FOODS_TO_AVOID,
      NHS_FROM_6_MONTHS,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "first-baby-foods",
    category: "cooking",
    question: "What should baby's first foods be?",
    title:
      "First baby foods: when to start, what to offer and simple puree ideas",
    metaTitle: "First baby foods: what to offer and when to start",
    description:
      "What your baby's first foods should be, the 3 signs they are ready for solids around 6 months, and simple puree ideas to try, based on NHS advice.",
    quickAnswer:
      "Good first baby foods are soft single vegetables and fruit, such as mashed broccoli, cauliflower, carrot, sweet potato, parsnip, pear or banana. Start around 6 months when your baby shows the 3 signs of readiness. Offer a few teaspoons or pieces, add no salt or sugar, and build up from there.",
    bullets: [
      "Start solids at around 6 months, when your baby shows all 3 signs of readiness",
      "Begin with soft single vegetables, including less sweet ones like broccoli",
      "A few teaspoons or a few pieces is enough at first",
      "Move on to lumpier textures and finger foods as soon as your baby can manage",
      "Breast milk or formula is still the main source of nutrition",
    ],
    sections: [
      {
        heading: "When can my baby start solid foods?",
        paragraphs: [
          "The NHS advises starting solid foods at about 6 months. In the US, the CDC also advises about 6 months, in line with the AAP, and says introducing foods before 4 months is not recommended. If your baby arrived early (was premature), check with your GP or health visitor about the right time to start.",
          "Until about 6 months, breast milk or first infant formula gives your baby everything they need, apart from vitamin D for some babies. At first, the aim is getting used to eating, not how much they eat.",
        ],
      },
      {
        heading: "Signs your baby is ready for solids",
        paragraphs: [
          "The NHS describes 3 signs that usually appear together from around 6 months:",
        ],
        list: [
          "They can hold their head steady and stay sitting up",
          "Their eyes, hands and mouth work together, so they can spot food, grab it and bring it to their mouth",
          "They can swallow food rather than pushing it back out with their tongue",
        ],
      },
      {
        heading: "Signs that are often mistaken for readiness",
        paragraphs: [
          "Chewing fists, waking more at night and wanting extra milk feeds are normal baby behaviour. They do not mean your baby is ready for solids. Starting solids will not make your baby more likely to sleep through the night.",
        ],
      },
      {
        heading: "What should my baby's first foods be?",
        paragraphs: [
          "Start with single vegetables and fruit, soft cooked and mashed or offered as soft finger foods. Include less sweet vegetables such as broccoli, cauliflower and spinach early, so your baby gets used to different tastes, not just sweet ones.",
          "Offer a few teaspoons or a few pieces once a day, at whatever time works for you and your baby. You can then add other food groups week by week, including iron-rich foods such as meat, fish, eggs, beans, lentils and tofu, and full-fat pasteurised yoghurt and cheese with no added sugar.",
        ],
        list: [
          "Vegetables: broccoli, cauliflower, carrot, parsnip, potato, sweet potato, peas, kale",
          "Fruit: pear, apple (cooked), banana, mango, avocado",
          "Starchy foods: baby rice, oats, pasta, potato, toast",
        ],
      },
      {
        heading: "What are simple baby puree ideas?",
        paragraphs: [
          "Purees are a fine way to start. Steam or boil vegetables until soft, then blend or mash with a little breast milk, formula or the cooking water. Do not add salt or sugar to the food or the cooking water. Cool cooked food fully and test it before serving.",
          "Babies do not need baby rice to move on to solids. Move from smooth purees to mashed, lumpy textures as soon as your baby can manage, because this helps them learn to chew. The NHS suggests offering lumpy textures from around 6 to 7 months.",
        ],
        list: [
          "Broccoli or cauliflower, blended smooth",
          "Carrot and parsnip mash",
          "Sweet potato with a spoonful of plain full-fat yoghurt",
          "Cooked pear or apple, blended",
          "Mashed banana or avocado, no cooking needed",
          "Peas blended with a little potato",
          "Porridge oats made with breast milk, formula or whole cows' milk",
        ],
      },
      {
        heading: "How to keep first meals safe",
        paragraphs: [
          "Sit your baby upright in a high chair with the harness fastened, and always stay with them while they eat. Gagging is normal while babies learn. Look out for watery eyes, the tongue pushing forward and retching.",
          "From around 6 months you can introduce foods that can cause allergies, such as egg, peanut, gluten and fish, one at a time in small amounts. Do not give honey before 12 months, or whole nuts before 5 years.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I start with purees or finger foods?",
        a: "Either is fine. The NHS says you can start with purees, finger foods or a mix of both. What matters is moving on to mashed, lumpy and finger foods as soon as your baby can manage, so they learn to chew. The risk of choking is no higher when babies feed themselves.",
      },
      {
        q: "Should solids come before or after milk?",
        a: "In the early weeks, the NHS suggests offering a few teaspoons or pieces of food before your baby's usual milk feed, but not when they are very hungry. Milk is still the main source of energy and nutrients at this stage. Do not worry about how much they eat at first, and let your baby guide you.",
      },
      {
        q: "What if my baby spits out a new food?",
        a: "That is very common. It can take 10 or more tries before a baby accepts a new food or texture. Keep offering small amounts on different days without pressure. If your baby closes their mouth or turns away, they have had enough for now, and you can try again another day.",
      },
      {
        q: "Can I start solids before 6 months?",
        a: "The NHS advises waiting until about 6 months, when most babies show all 3 signs of readiness. The CDC says solids are not recommended before 4 months. If you are thinking of starting earlier, or your baby was premature, speak to your health visitor or GP first.",
      },
      {
        q: "Does my baby need water when starting solids?",
        a: "From around 6 months, give your baby a little water at mealtimes, in an open cup or a free-flow cup with no valve. This lets your baby practise sipping and is gentler on their teeth. Breast milk or first infant formula remains the main drink until 12 months. Until then, cows' milk should only be used in cooking or mixed into food.",
      },
    ],
    relatedSlugs: ["signs-baby-ready-for-solids", "how-much-should-my-baby-eat", "6-month-baby-meal-ideas", "baby-led-weaning-meal-ideas", "allergen-introduction-meal-ideas"],
    sources: [
      NHS_FIRST_FOODS,
      NHS_FROM_6_MONTHS,
      NHS_FOODS_TO_AVOID,
      CDC_INTRODUCE_SOLIDS,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-led-weaning-meal-ideas",
    category: "cooking",
    question: "What are baby-led weaning meal ideas?",
    title: "Baby-led weaning meal ideas and safe finger foods for babies",
    metaTitle: "Baby-led weaning meal ideas and safe finger foods",
    description:
      "Baby-led weaning meal ideas, which finger foods are safe, how to cut them, and how to tell gagging from choking, based on NHS weaning guidance.",
    quickAnswer:
      "Baby-led weaning meal ideas are soft finger foods your baby can hold and feed themselves: steamed broccoli, sweet potato wedges, toast fingers, banana or avocado slices, and boneless fish. Pieces should be about the size of your finger, soft enough to break up easily, and served while you stay close.",
    bullets: [
      "Baby-led weaning means your baby feeds themselves finger foods",
      "Offer finger-sized pieces, soft enough to break up easily",
      "Cut grapes and cherry tomatoes into quarters",
      "Gagging is normal and noisy; choking is quiet and needs action",
      "Never leave your baby alone while they eat",
    ],
    sections: [
      {
        heading: "What is baby-led weaning?",
        paragraphs: [
          "With baby-led weaning, you skip purees and spoon feeding, and your baby feeds themselves finger foods from their very first meals. The NHS says there is no higher risk of choking when babies feed themselves than when they are spoon fed.",
          "Start around 6 months, when your baby can sit with a steady head, pick up food and put it in their mouth, and swallow it.",
        ],
      },
      {
        heading: "Baby-led weaning meal ideas",
        paragraphs: [
          "Most are family meals in hand-sized pieces, with no added salt or sugar.",
        ],
        list: [
          "Breakfast: toast fingers with mashed banana or avocado",
          "Lunch: soft cooked pasta shapes with grated pasteurised cheese and steamed broccoli",
          "Tea: salmon flaked with no bones, roast sweet potato wedges and peas",
        ],
      },
      {
        heading: "What finger foods are safe for babies?",
        paragraphs: [
          "Safe first finger foods are soft and easy to break up in the mouth. The NHS suggests pieces about the size of your own finger, long enough for them to grip in their fist with some of the food poking out of the top.",
        ],
        list: [
          "Soft cooked vegetables: broccoli, carrot, parsnip, sweet potato, courgette",
          "Soft ripe fruit: banana, peach, melon, avocado, pear",
          "Cooked starchy foods: potato, pasta, rice, chapatti, lightly toasted bread",
          "Protein: boneless fish or meat, hard-boiled egg, beans and lentils",
          "Sticks of pasteurised full-fat hard cheese",
        ],
      },
      {
        heading: "How to cut finger foods safely",
        paragraphs: [
          "Shape matters as much as softness. Small round foods and hard foods are choking risks, so change the shape before serving.",
        ],
        list: [
          "Cut grapes, cherry tomatoes and other small round foods into quarters",
          "Cut vegetables such as carrot and cucumber into narrow batons and cook hard ones until soft",
          "Cut large firm fruit such as apple into slices, and cook it while your baby is learning",
          "Remove all bones from meat and fish, and hard pips and stones from fruit",
          "Lightly toast white bread or use brown bread, as soft white bread can form a ball in the mouth",
          "Keep whole nuts and popcorn off the menu until age 5, and whole raisins and other dried fruit until age 1",
        ],
      },
      {
        heading: "Gagging vs choking: how to tell the difference",
        paragraphs: [
          "Gagging is a normal reflex while babies learn to manage food. It is usually loud. Your baby's eyes may water, their tongue may push forward and they may retch or bring food up. Stay calm and let them work it out.",
          "Choking is different. It happens when food blocks the airway, and it is quiet. Your baby's cough may be silent, or they may not be able to breathe in properly. White skin may turn blue. On brown or black skin, look for blue gums, inside of the lips or fingernails.",
        ],
      },
      {
        heading: "What to do if your baby is choking",
        paragraphs: [
          "If your baby is coughing loudly, encourage them to keep coughing and stay with them. If the cough is silent or they cannot breathe in properly, shout for help straight away and check they are still conscious. These NHS steps are for babies under 1.",
        ],
        list: [
          "Give up to 5 back blows. Sitting down, rest your baby face down along your thigh or forearm, with your hand holding their head and neck steady. Strike sharply between the shoulder blades, in the centre of the back, with the heel of your free hand. After each blow, check whether the object has come out",
          "If back blows do not clear it, give up to 5 chest thrusts. Turn your baby onto their back along the length of your thighs, head lower than their feet, with their feet pointing towards you. Place 2 fingers in the centre of the chest, just below the nipple line, push down sharply, and check for the object after each thrust",
          "If the object is still there and your baby is conscious, repeat the back blows and chest thrusts. If you are alone, call or send for help, but do not leave your baby",
          "Call 999, or your local emergency number, if the blockage does not clear, and keep repeating the cycle until help arrives",
          "If your baby becomes unconscious, put them on a firm, flat surface, call 999 on speakerphone and start CPR. Only remove the object if you can see it clearly and grasp it easily. Do not poke blindly with your fingers",
          "Get medical help afterwards even if the object comes out, as part of it may still be there or your baby may have been hurt",
        ],
      },
    ],
    faqs: [
      {
        q: "Is baby-led weaning safe?",
        a: "Yes, when the food is soft and the right shape, your baby sits upright in a high chair, and you stay with them. The NHS says the risk of choking is no higher when babies feed themselves than when they are spoon fed. Avoid hard foods such as whole nuts and raw carrot or apple.",
      },
      {
        q: "Can I mix baby-led weaning with spoon feeding?",
        a: "Yes. The NHS says there is no right or wrong way, and some families combine finger foods with spoon-fed purees or mashed food. Offering finger foods as part of each meal helps your baby learn to feed themselves, chew and develop hand-eye coordination.",
      },
      {
        q: "How do I know a finger food is soft enough?",
        a: "Cooked vegetables and fruit for early finger foods should break up easily in the mouth. If a piece is hard enough to snap or stays firm when you press it, cook it longer. Raw carrot and raw apple are too hard for babies, so steam or roast them until soft.",
      },
      {
        q: "Should I learn baby first aid before starting finger foods?",
        a: "It helps. Knowing what to do lets you act quickly if your baby does choke. The NHS links to first aid courses, including British Red Cross courses, and has step-by-step guidance for babies under 1. Reading it before you start can make mealtimes feel calmer.",
      },
    ],
    relatedSlugs: ["gagging-vs-choking", "how-to-cut-food-for-baby", "first-baby-foods", "6-month-baby-meal-ideas", "9-month-baby-meal-ideas"],
    sources: [
      NHS_FIRST_FOODS,
      NHS_PREPARING_FOOD,
      NHS_CHOKING_GAGGING,
      NHS_STOP_CHOKING,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "6-month-baby-meal-ideas",
    category: "cooking",
    question: "What are easy 6-month baby meal ideas?",
    title: "6-month baby meal ideas: first tastes, textures and how much",
    metaTitle: "6-month baby meal ideas: first tastes and simple plates",
    description:
      "Easy 6-month baby meal ideas, how much food and how many meals your baby needs, plus allergens, drinks and vitamins, based on NHS weaning advice.",
    quickAnswer:
      "Good 6-month baby meal ideas are soft, simple and unsalted: mashed broccoli or cauliflower, sweet potato mash, porridge with pear, soft avocado or banana, and later lentils, fish or egg. One small meal a day is enough at first, and breast milk or first infant formula is still your baby's main food.",
    bullets: [
      "One small meal a day is enough at first",
      "Start with less sweet vegetables, then add other food groups week by week",
      "Offer purees, mashed food and soft finger foods",
      "Introduce allergens one at a time from around 6 months",
      "Offer sips of water with meals in an open or free-flow cup",
    ],
    sections: [
      {
        heading: "What can a 6-month-old baby eat?",
        paragraphs: [
          "From around 6 months, babies can eat most soft family foods, cooked and mashed or offered as finger foods, with no added salt or sugar. The NHS suggests starting with less sweet vegetables such as broccoli, cauliflower and spinach, then gradually adding other foods.",
        ],
        list: [
          "Vegetables, cooked until soft: broccoli, cauliflower, kale, peas, carrot, sweet potato",
          "Fruit, soft or cooked: banana, pear, mango, avocado, cooked apple",
          "Starchy foods: oats, baby rice, pasta, potato, toast",
          "Protein: boneless fish, meat, British Lion eggs, beans, lentils, tofu",
          "Dairy: plain full-fat yoghurt, pasteurised cheese",
        ],
      },
      {
        heading: "6-month baby meal ideas to try",
        paragraphs: [
          "Keep each meal to one or two foods at first, then combine as your baby gets used to eating.",
        ],
        list: [
          "Blended broccoli, then broccoli with mashed potato",
          "Sweet potato mash with a little plain full-fat yoghurt",
          "Porridge oats made with breast milk, formula or whole cows' milk, with cooked mashed pear",
          "Soft avocado or banana slices as finger food",
          "Red lentils cooked soft and mashed with carrot",
          "Flaked boneless salmon mixed into mashed potato and peas",
          "Scrambled British Lion egg with toast fingers",
        ],
      },
      {
        heading: "How much should a 6-month-old eat?",
        paragraphs: [
          "Start with a few teaspoons or a few pieces, once a day, at whatever time works for you and your baby. Increase the amount and variety gradually over the following weeks. Your baby does not need 3 meals a day yet.",
          "Let your baby decide how much to eat. Signs they have had enough include closing their mouth firmly or turning their head away. It can take 10 or more tries before a baby accepts a new food, so a refused food is not a failed meal.",
        ],
      },
      {
        heading: "When can my baby have lumpy food?",
        paragraphs: [
          "Move from smooth purees to mashed and lumpy textures as soon as your baby can manage, alongside soft finger foods. The NHS suggests offering lumpy textures from around 6 to 7 months. Learning to handle lumps early helps your baby learn to chew and swallow.",
        ],
      },
      {
        heading: "Introducing allergens at 6 months",
        paragraphs: [
          "From around 6 months, you can introduce foods that can cause allergic reactions. Offer them one at a time, in small amounts, so you can spot any reaction. Once your baby has had them without a problem, keep them in their usual diet.",
          "Talk to your GP or health visitor first if your baby already has a food allergy or eczema, or if food allergies, eczema, asthma or hay fever run in your family.",
        ],
        list: [
          "Cows' milk (in cooking or mixed into food)",
          "Eggs",
          "Foods containing gluten, such as wheat",
          "Peanuts and nuts, crushed, ground or as smooth nut butter",
          "Seeds, crushed or ground",
          "Soya, fish and well-cooked shellfish",
        ],
      },
      {
        heading: "What should my 6-month-old drink?",
        paragraphs: [
          "Breast milk or first infant formula stays the main drink until 12 months. From around 6 months, give your baby a little water at mealtimes, in an open cup or a free-flow cup with no valve, which is better for teeth.",
          "Cows' milk can be used in cooking from 6 months but should not be a main drink before 12 months. Avoid sugary drinks such as fruit juice, squash and fizzy drinks.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many times a day should a 6-month-old eat solids?",
        a: "Once a day is enough at first. The NHS suggests one small meal a day, at a time that works for both of you, then increasing the amount and variety gradually. From about 7 months, babies move towards 3 meals a day. The WHO suggests 2 to 3 meals a day for babies aged 6 to 8 months, so build up at your baby's pace.",
      },
      {
        q: "Does my 6-month-old need snacks?",
        a: "No. The NHS says babies under 12 months do not need snacks. If your baby seems hungry between meals, offer an extra breast or formula feed instead. From 12 months, the NHS says your child will be eating 3 meals a day and may also need 2 healthy snacks.",
      },
      {
        q: "Can my 6-month-old have eggs?",
        a: "Yes. Eggs can be introduced from around 6 months. In the UK, hens' eggs with the British Lion stamp can be given lightly cooked. Eggs without the stamp should not be eaten raw or lightly cooked. If your baby has a severely weakened immune system, cook all eggs thoroughly. Introduce egg on its own at first.",
      },
      {
        q: "Does my baby need vitamins at 6 months?",
        a: "The NHS advises a daily vitamin D supplement of 8.5 to 10 micrograms for breastfed babies and babies having less than 500ml of formula a day, plus vitamins A and C from 6 months. Babies having 500ml or more of infant formula a day do not need supplements, because formula is already fortified. Ask your health visitor or pharmacist which drops to use.",
      },
    ],
    relatedSlugs: ["iron-rich-foods-for-babies", "drinks-for-babies", "first-baby-foods", "9-month-baby-meal-ideas", "allergen-introduction-meal-ideas"],
    sources: [NHS_FROM_6_MONTHS, NHS_FIRST_FOODS, NHS_ALLERGIES, WHO_FEEDING],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "9-month-baby-meal-ideas",
    category: "cooking",
    question: "What are easy 9-month baby meal ideas?",
    title: "9-month baby meal ideas: 3 meals a day, more textures",
    metaTitle: "9-month baby meal ideas: breakfast, lunch and tea",
    description:
      "Easy 9-month baby meal ideas for breakfast, lunch and tea, plus iron-rich foods, textures, snacks and milk amounts, based on NHS weaning guidance.",
    quickAnswer:
      "Easy 9-month baby meal ideas include porridge with fruit, toast fingers with egg, lentil pasta with broccoli, fish with potato and peas, and soft family meals cooked without salt. Most babies are moving towards 3 meals a day by now, with lumpier, mashed and chopped food and plenty of finger foods.",
    bullets: [
      "Babies move towards 3 meals a day between 7 and 9 months",
      "Offer lumpier mashed food and a variety of finger foods",
      "Include foods that contain iron at meals",
      "Milk is still the main drink, but feeds start to drop",
      "No snacks needed yet; offer extra milk if hungry",
    ],
    sections: [
      {
        heading: "What should a 9-month-old eat?",
        paragraphs: [
          "At 9 months, most babies are gradually moving towards 3 meals a day: breakfast, lunch and tea. Meals should include a mix of starchy foods, fruit and vegetables, protein, and pasteurised full-fat dairy, with no added salt or sugar.",
          "Textures should be mashed, lumpy and chopped, alongside plenty of finger foods. This helps them learn to chew and swallow safely.",
        ],
      },
      {
        heading: "Why iron-rich foods matter at 9 months",
        paragraphs: [
          "A wide variety of food helps your baby get the energy and nutrients they need, including iron. The NHS suggests including iron-rich foods: meat and fish, pulses such as beans and lentils, dark green vegetables, and breakfast cereals with added iron. Protein foods also provide zinc.",
        ],
        list: [
          "Meat and fish, cooked and with all bones removed",
          "Eggs with the British Lion stamp",
          "Beans, lentils and chickpeas",
          "Fortified breakfast cereals with low added sugar",
          "Dark green vegetables such as broccoli, spinach and kale",
        ],
      },
      {
        heading: "9-month baby meal ideas for breakfast, lunch and tea",
        paragraphs: [
          "Most of these are family meals with your baby's portion taken out before you season the rest.",
        ],
        list: [
          "Breakfast: porridge made with whole milk, with mashed banana or stewed apple",
          "Breakfast: toast fingers with a hard-boiled egg and soft peach slices",
          "Breakfast: lower-sugar wholewheat cereal with milk and soft fruit",
          "Lunch: lentil pasta with broccoli",
          "Lunch: cottage cheese with pitta fingers, cucumber batons and soft cooked carrot",
          "Tea: minced chicken and vegetable casserole with mashed potato",
          "Tea: soft-cooked courgette and carrot sticks with rice and mashed peas",
          "Tea: flaked salmon (tinned in water, not brine) stirred into couscous with peas",
        ],
      },
      {
        heading: "How much milk does a 9-month-old need?",
        paragraphs: [
          "Breast milk or first infant formula is still the main drink until 12 months. At 7 to 9 months, many babies have around 4 milk feeds a day. Breastfed babies adjust their feeds to how much food they eat. Formula-fed babies may need around 600ml a day, though this is only a guide.",
          "As your baby eats more, offer milk after meals and do not force the bottle. Offer sips of water with meals in an open or free-flow cup. Cows' milk can go into cooking and cereal, but not as a main drink before 12 months.",
        ],
      },
      {
        heading: "Does a 9-month-old need snacks?",
        paragraphs: [
          "No. The NHS says babies under 12 months do not need snacks. If your baby seems hungry between meals, offer an extra milk feed instead. Snacks come in from about 12 months.",
        ],
      },
      {
        heading: "Keeping 9-month meals safe",
        paragraphs: [
          "As your baby becomes more confident, food pieces can become smaller and more varied, but the shape rules stay the same.",
        ],
        list: [
          "Cut grapes, cherry tomatoes and other small round foods into quarters",
          "Cut carrot and cucumber into narrow batons, and slice firm fruit",
          "No whole nuts or popcorn under 5, and no whole raisins or dried fruit under 1",
          "Keep your baby upright in a high chair and stay with them while they eat",
        ],
      },
    ],
    faqs: [
      {
        q: "How many meals a day should a 9-month-old have?",
        a: "Between 7 and 9 months, the NHS says babies gradually move towards 3 meals a day: breakfast, lunch and tea. By 10 to 12 months they should be having 3 meals a day alongside milk feeds. If your baby is still on 2 meals at 9 months, build up gently at their pace.",
      },
      {
        q: "My 9-month-old still prefers smooth food. What should I do?",
        a: "Keep offering mashed and lumpy textures alongside finger foods, a little at a time. Some babies take to lumps quickly and others need longer. It can take 10 or more tries to accept a new texture. If your baby struggles with all lumpy foods, talk to your health visitor.",
      },
      {
        q: "Can my 9-month-old eat what we eat?",
        a: "Mostly, yes. Take your baby's portion out before adding salt, stock cubes, gravy or strong sauces, then mash or chop it. Stock cubes and gravy are often high in salt, so leave them out of your baby's portion. Eating together helps, because babies copy what they see you eat.",
      },
      {
        q: "Can a 9-month-old have cheese?",
        a: "Yes. Pasteurised full-fat cheese is fine from around 6 months. Sticks of pasteurised full-fat hard cheese make a good finger food, and lower-salt options are best. Cheese also works in cooked meals such as cauliflower cheese with pasta. Always check the label says pasteurised.",
      },
    ],
    relatedSlugs: ["iron-rich-foods-for-babies", "6-month-baby-meal-ideas", "12-month-baby-meal-ideas", "baby-led-weaning-meal-ideas", "baby-dinner-ideas"],
    sources: [
      NHS_7_TO_9_MONTHS,
      NHS_FIRST_FOODS,
      NHS_MEAL_IDEAS,
      NHS_PREPARING_FOOD,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "12-month-baby-meal-ideas",
    category: "cooking",
    question: "What are easy 12-month baby meal ideas?",
    title: "12-month baby meal ideas: family meals, snacks and milk",
    metaTitle: "12-month baby meal ideas: meals, snacks and drinks",
    description:
      "Easy 12-month baby meal ideas and healthy snacks, how much milk a 1-year-old needs, and what changes on their first birthday, based on NHS guidance.",
    quickAnswer:
      "Easy 12-month baby meal ideas are family meals chopped small and cooked without salt: scrambled egg on toast, shepherd's pie with greens, lamb curry with rice, fish with potato and broccoli. From 12 months, the NHS suggests 3 meals and 2 healthy snacks a day, with whole cows' milk as a main drink.",
    bullets: [
      "3 meals and 2 healthy snacks a day from 12 months",
      "Whole or semi-skimmed cows' milk can now be a main drink",
      "Infant formula is no longer needed",
      "Keep dairy full fat until 2 years",
      "Still no added salt or sugar, and no whole nuts until 5",
    ],
    sections: [
      {
        heading: "What should a 12-month-old eat?",
        paragraphs: [
          "From 12 months, your child can eat most family meals, chopped small or served as finger foods. Each day, include starchy foods, fruit and vegetables at every meal, milk or dairy, and protein from animal or plant sources.",
          "Keep dairy full fat until 2 years. Whole nuts are still a choking risk until 5 years, so crush or grind them, or use smooth nut butter spread thinly.",
        ],
      },
      {
        heading: "12-month baby meal ideas",
        paragraphs: [
          "These NHS meal ideas suit 1-year-olds who are used to a wide range of food.",
        ],
        list: [
          "Breakfast: unsweetened porridge with whole milk and mashed ripe pear",
          "Breakfast: toast or muffin fingers with scrambled egg and sliced tomato",
          "Breakfast: lower-sugar cereal with stewed apple and plain yoghurt",
          "Lunch: baked beans (reduced salt and sugar) on toast",
          "Lunch: cauliflower cheese with pasta pieces",
          "Lunch: lamb curry with rice",
          "Tea: beef, lamb, lentil or vegetarian mince under a mashed potato top, with green vegetables",
          "Tea: white fish gently cooked in milk, with potato, carrot and broccoli",
          "Tea: chickpea and cauliflower stew with mashed sweet potato",
        ],
      },
      {
        heading: "Healthy snack ideas for a 1-year-old",
        paragraphs: [
          "From 12 months, the NHS says your child may need 2 healthy snacks between meals. Keep them simple and unsweetened.",
        ],
        list: [
          "Fruit slices: apple, banana, soft ripe pear or peach",
          "Vegetable sticks: broccoli florets, carrot or cucumber",
          "Plain full-fat yoghurt",
          "Toast, pitta or chapatti fingers",
          "Unsalted, unsweetened rice cakes or corn cakes",
          "Small strips of cheese",
        ],
      },
      {
        heading: "How much milk does a 1-year-old need?",
        paragraphs: [
          "From 12 months, pasteurised whole or semi-skimmed cows' milk can be your child's main drink. The NHS suggests at least 350ml (12oz) of milk daily, or 2 portions of milk-based foods such as cheese or yoghurt. If you are breastfeeding, you can carry on alongside food and other drinks.",
          "Infant formula, follow-on formula and growing-up or toddler milks are not needed after 12 months. Unsweetened, calcium-fortified soya, oat or almond drinks can be given from 1 year. Rice drinks are not suitable for children under 5. Skimmed and 1% milk should not be a main drink under 5.",
        ],
      },
      {
        heading: "What changes at 12 months?",
        paragraphs: [
          "Several first-year rules change on your baby's first birthday, while others stay.",
        ],
        list: [
          "Cows' milk can be a main drink",
          "Move from bottles to an open or free-flow cup, as the NHS advises stopping bottle feeding by 1 year",
          "Snacks become part of the day",
          "Children aged 1 to 4 should have a daily supplement of vitamins A, C and D",
          "Still no added salt or sugar, no whole nuts until 5, and no rice drinks until 5",
        ],
      },
      {
        heading: "Iron and oily fish for toddlers",
        paragraphs: [
          "Iron from meat and fish is absorbed more easily than iron from plants. If your child does not eat meat or fish, offer fortified cereals, green leafy vegetables, beans and lentils regularly. The NHS also suggests at least 1 portion of oily fish, such as salmon, a week.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many meals should a 12-month-old have?",
        a: "The NHS suggests 3 meals a day plus 2 healthy snacks from 12 months. Each meal should include fruit or vegetables and a starchy food, with milk or dairy and a protein across the day. Appetite varies a lot at this age, so let your child decide how much to eat.",
      },
      {
        q: "Can my 1-year-old eat the same food as us?",
        a: "Mostly, yes. Chop food small and take your child's portion out before adding salt, stock cubes or gravy, which are often high in salt. Keep fruit and vegetables in every meal. Eating together helps, because children copy what they see you eat, and it saves cooking twice.",
      },
      {
        q: "Should I switch from formula to cows' milk at 12 months?",
        a: "Yes, if you are using formula. From 12 months, pasteurised whole or semi-skimmed cows' milk can be the main drink, and formula is no longer needed. Offer it in an open or free-flow cup rather than a bottle. If your child has a cows' milk allergy, ask your health visitor or GP what to use instead.",
      },
      {
        q: "My 1-year-old only eats a few foods. Is that normal?",
        a: "Many toddlers go through phases of eating only a few foods. The NHS says that if your child only eats 1 or 2 types of fruit or vegetable at first, keep offering small amounts of others alongside ones they like, without pressure. If you are worried about weight or growth, talk to your health visitor or GP.",
      },
      {
        q: "Can my 1-year-old have fruit juice?",
        a: "It is not needed. Water and milk are the best drinks for young children. If you do offer juice or a smoothie, the NHS suggests diluting it 1 part juice to 10 parts water and giving it only with meals, to protect teeth. Squash, fizzy drinks and flavoured milk are not suitable for young children.",
      },
    ],
    relatedSlugs: ["drinks-for-babies", "9-month-baby-meal-ideas", "baby-breakfast-ideas", "baby-dinner-ideas", "baby-meal-ideas"],
    sources: [NHS_FIRST_FOODS, NHS_YOUNG_CHILDREN, NHS_DRINKS, NHS_MEAL_IDEAS],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-breakfast-ideas",
    category: "cooking",
    question: "What are easy baby breakfast ideas?",
    title: "Easy baby breakfast ideas from 6 months",
    metaTitle: "Baby breakfast ideas: quick, healthy and no added sugar",
    description:
      "Easy baby breakfast ideas from 6 months, from porridge and eggs to toast fingers, with tips on cereals, sugar, eggs and drinks, based on NHS advice.",
    quickAnswer:
      "Easy baby breakfast ideas include unsweetened porridge with mashed banana or pear, toast fingers with scrambled egg, plain full-fat yoghurt with soft fruit, and lower-sugar cereal with whole milk. Keep breakfasts free of added sugar, syrup and honey, and adapt the texture to your baby's stage.",
    bullets: [
      "Porridge, eggs, toast and yoghurt cover most baby breakfasts",
      "Choose unsweetened porridge and lower-sugar cereals",
      "No honey before 12 months",
      "Whole cows' milk is fine on cereal from 6 months",
      "Offer water in an open cup, not juice",
    ],
    sections: [
      {
        heading: "What can my baby have for breakfast?",
        paragraphs: [
          "Your baby can have most simple breakfasts the family eats, without added sugar or salt. Breakfast is a good time to include fruit, a starchy food and a protein such as egg or full-fat dairy.",
          "Around 6 months, breakfast might be a few spoonfuls of porridge or a couple of soft fruit pieces. From 7 to 9 months, breakfast becomes one of 3 regular meals.",
        ],
      },
      {
        heading: "Easy baby breakfast ideas",
        paragraphs: [
          "These are based on NHS baby and toddler meal ideas. Adjust the texture by mashing for younger babies or cutting into finger foods.",
        ],
        list: [
          "Unsweetened porridge made with whole milk, topped with mashed ripe pear or banana",
          "Toast fingers with scrambled egg and sliced tomato",
          "Toast fingers with a hard-boiled egg and soft ripe peach",
          "Toast fingers with mashed banana and a thin spread of smooth peanut butter",
          "Plain full-fat yoghurt with unsweetened stewed apple",
          "Lower-sugar wholewheat biscuit cereal softened in whole milk, with soft fruit",
          "Strips of omelette with soft cooked mushroom or spinach",
          "Muffin or pitta fingers with cream cheese and avocado",
        ],
      },
      {
        heading: "Baby breakfast ideas by age",
        paragraphs: [
          "Around 6 months, keep it to one or two soft foods. Smooth porridge, mashed banana, cooked pear or soft avocado are easy starts.",
          "From 7 to 9 months, offer lumpier porridge, eggs and toast fingers, and soft fruit to hold. By 10 to 12 months, your baby can have chopped and finger foods and may enjoy feeding themselves most of breakfast. From 12 months, breakfast is one of 3 meals alongside 2 healthy snacks a day.",
        ],
      },
      {
        heading: "Can babies have eggs for breakfast?",
        paragraphs: [
          "Yes, from around 6 months. Eggs are one of the foods that can cause allergies, so offer egg on its own at first, in a small amount, so you can spot any reaction.",
          "In the UK, hens' eggs with the British Lion stamp can be given lightly cooked, such as a soft scrambled egg. Eggs without the stamp, and duck, goose or quail eggs, should be cooked until the white and yolk are solid.",
        ],
      },
      {
        heading: "Choosing cereals, milk and spreads",
        paragraphs: [
          "Many breakfast foods carry hidden sugar or salt, so a few quick checks help.",
        ],
        list: [
          "Choose plain porridge oats or lower-sugar cereals, and avoid sugar-coated cereals",
          "Do not add sugar, syrup or honey (no honey before 12 months)",
          "Whole cows' milk is fine in porridge and on cereal from 6 months, but not as a main drink before 12 months",
          "Use plain full-fat yoghurt rather than sweetened or flavoured pots",
          "Spread nut butter thinly on toast; never give whole nuts to children under 5",
          "Use pasteurised cheese, such as mild cheddar or cream cheese",
        ],
      },
      {
        heading: "What should my baby drink with breakfast?",
        paragraphs: [
          "Offer sips of water using an open cup or a free-flow cup with no valve from around 6 months. Breast milk or first infant formula is still the main drink until 12 months. Babies do not need fruit juice or smoothies. The NHS advises avoiding sugary drinks for young children, which also helps prevent tooth decay.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is porridge good for babies?",
        a: "Yes. Plain porridge oats are a good starchy breakfast from around 6 months. Make them with breast milk, formula or whole cows' milk and add fruit for sweetness instead of sugar or syrup. Like any new food, it may take several tries before your baby takes to it.",
      },
      {
        q: "Can I give my baby toast for breakfast?",
        a: "Yes. Toast fingers are a popular finger food, cut to about the size of your finger so your baby can hold them. Top with egg, mashed banana, avocado or a thin spread of smooth nut butter rather than jam or chocolate spread.",
      },
      {
        q: "Are baby breakfast cereals necessary?",
        a: "No. Babies do not need baby rice to move on to solid foods. Plain porridge oats and lower-sugar family cereals softened in milk work well. If you use baby cereal, choose one without added sugar. The CDC suggests offering a variety of cereals rather than relying only on rice-based ones.",
      },
      {
        q: "What if my baby will not eat breakfast?",
        a: "Appetite varies from day to day, and some babies are not hungry first thing. Offer breakfast without pressure and let your baby stop when they show they have had enough. Under 12 months, milk is still their main source of nutrition, so one small breakfast is nothing to worry about.",
      },
    ],
    relatedSlugs: ["how-much-should-my-baby-eat", "baby-meal-ideas", "baby-dinner-ideas", "first-baby-foods", "12-month-baby-meal-ideas"],
    sources: [
      NHS_MEAL_IDEAS,
      NHS_FIRST_FOODS,
      NHS_FOODS_TO_AVOID,
      CDC_INTRODUCE_SOLIDS,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "baby-dinner-ideas",
    category: "cooking",
    question: "What are easy baby lunch and dinner ideas?",
    title: "Easy baby lunch and dinner ideas from 6 months",
    metaTitle: "Baby lunch and dinner ideas: easy, healthy family meals",
    description:
      "Easy baby lunch and dinner ideas from 6 months, how to adapt family meals, simple puddings and which foods to avoid, based on NHS weaning advice.",
    quickAnswer:
      "Easy baby lunch and dinner ideas include scrambled egg with toast and vegetable fingers, cauliflower cheese with pasta, lentil and vegetable mash, shepherd's pie with greens, and fish with potato and broccoli. Use family meals without added salt, and mash, chop or cut them into finger foods for your baby's stage.",
    bullets: [
      "Most baby lunches and dinners are family meals made without salt",
      "Take your baby's portion out before seasoning",
      "Build each plate from a starch, a protein and a vegetable",
      "From 10 months, add a pudding of fruit or plain yoghurt",
      "Cool food fully and stay with your baby while they eat",
    ],
    sections: [
      {
        heading: "What can my baby have for lunch and dinner?",
        paragraphs: [
          "Your baby can have most family lunches and dinners, cooked without salt, stock cubes or gravy and adapted to the right texture. Aim for a starchy food, a protein and at least one vegetable on each plate.",
          "In the UK, the evening meal is often called tea. From 7 to 9 months, babies move towards 3 meals a day, and by 10 to 12 months, lunch and tea can include a main course and a pudding.",
        ],
      },
      {
        heading: "What are easy baby lunch ideas?",
        paragraphs: [
          "Quick lunches work best on busy days. These are based on NHS meal ideas.",
        ],
        list: [
          "Scrambled egg with toast, chapatti or pitta, and soft cooked vegetable fingers",
          "Cottage cheese dip with pitta bread and soft cucumber or carrot sticks",
          "Baked beans (reduced salt and sugar) with toast fingers",
          "Cauliflower cheese with soft pasta pieces",
          "Hummus-style chickpea mash with pitta and avocado slices",
          "Leftover lentil pasta with broccoli",
        ],
      },
      {
        heading: "Easy baby dinner ideas",
        paragraphs: [
          "Cook once for the family and set your baby's portion aside before seasoning.",
        ],
        list: [
          "Mild lamb or lentil curry with rice, made without salt",
          "Chicken and carrot stew, cooked slowly and mashed with potato",
          "Lentil or vegetarian mince under a mashed potato top, with soft broccoli",
          "Flaked salmon with couscous and soft green beans",
          "Sweet potato and cauliflower mash with soft chickpeas",
          "White fish gently poached in milk, with mashed potato and peas",
          "Soft courgette and pepper sticks with rice and a spoon of plain full-fat yoghurt",
        ],
      },
      {
        heading: "How do I adapt family meals for my baby?",
        paragraphs: [
          "Set your baby's portion aside before adding salt, stock, gravy or strong spices. Then adjust the texture.",
        ],
        list: [
          "Around 6 months: blend or mash, or offer soft finger-sized pieces",
          "7 to 9 months: lumpier mash, soft chopped food and more finger foods",
          "10 to 12 months: mashed, lumpy, chopped and finger foods",
          "From 12 months: most family meals, chopped small",
          "Remove all bones from meat and fish, and cut small round foods into quarters",
        ],
      },
      {
        heading: "Pudding ideas for babies",
        paragraphs: [
          "From around 10 months, lunch and tea can include a pudding. Keep it simple and unsweetened: fresh, tinned or stewed fruit, or plain full-fat yoghurt with fruit stirred in. Avoid adding sugar, syrup or honey, and give no honey at all before 12 months.",
        ],
      },
      {
        heading: "Foods to avoid in baby lunches and dinners",
        paragraphs: [
          "Some everyday dinner ingredients are not suitable for babies.",
        ],
        list: [
          "Salty foods: stock cubes, gravy, bacon, sausages, ready meals, takeaways",
          "Mould-ripened soft cheese and unpasteurised cheese, unless cooked in a recipe",
          "Raw or lightly cooked shellfish",
          "Shark, swordfish and marlin, because of mercury",
          "Whole nuts before 5 years",
          "Eggs without the British Lion stamp unless cooked until solid",
        ],
      },
    ],
    faqs: [
      {
        q: "What time should my baby have dinner?",
        a: "There is no set time. Choose a time that suits your family, when your baby is not too tired or rushed. Many families find an early tea works well, before the bedtime milk feed. Eating together when you can helps, because babies learn by watching you eat.",
      },
      {
        q: "Can babies have spices and herbs in dinner?",
        a: "Herbs and mild spices can add flavour without salt, and NHS meal ideas include dishes such as lamb curry with rice. What matters is leaving out salt, stock cubes and gravy, which are high in salt. Start gently and watch how your baby responds to new flavours.",
      },
      {
        q: "Is it fine to give my baby leftovers for lunch?",
        a: "Yes, if they were stored safely. Cool leftovers within 1 to 2 hours, keep them in the fridge, and use them within 2 days. Reheat them only once, until steaming hot throughout, and allow them to cool before serving. Cooked rice should be eaten within 24 hours.",
      },
      {
        q: "How much should my baby eat at lunch and dinner?",
        a: "Let your baby guide you. Start with a small amount and offer more if they want it. Signs they are full include closing their mouth or turning their head away. Babies under 12 months still get much of their nutrition from milk, so a small meal is fine.",
      },
    ],
    relatedSlugs: ["foods-to-avoid-for-babies", "recipes-from-leftovers", "baby-meal-ideas", "baby-breakfast-ideas", "9-month-baby-meal-ideas"],
    sources: [
      NHS_MEAL_IDEAS,
      NHS_FIRST_FOODS,
      NHS_FOODS_TO_AVOID,
      NHS_STORING_REHEATING,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "allergen-introduction-meal-ideas",
    category: "cooking",
    question: "How do I introduce allergens in baby meals?",
    title: "How to introduce allergens to your baby, with meal ideas",
    metaTitle: "Introducing allergens to baby: how and meal ideas",
    description:
      "How to introduce allergens to your baby from around 6 months, one at a time, with easy meal ideas, signs of a reaction and when to get urgent help.",
    quickAnswer:
      "To introduce allergens to your baby, start from around 6 months and offer one new allergen at a time, in a small amount, mixed into a food they already eat. Watch for a reaction, then keep that food in their diet regularly. Talk to your GP or health visitor first if your baby has eczema or a food allergy.",
    bullets: [
      "Start from around 6 months, once your baby is eating some solids",
      "One new allergen at a time, in a small amount",
      "Keep giving each allergen regularly once it is tolerated",
      "Delaying allergens does not prevent allergies",
      "Talk to your GP or health visitor first if your baby has eczema or a known allergy",
    ],
    sections: [
      {
        heading: "When should I introduce allergens to my baby?",
        paragraphs: [
          "The NHS advises introducing foods that can cause allergic reactions from around 6 months, alongside other solid foods. The NHS says holding back peanut and hen's egg past the 6 to 12 month window may make an allergy to them more likely. The AAP says delaying allergens does not prevent allergies, and that early introduction of peanut lowered the risk of peanut allergy in babies at high risk.",
        ],
      },
      {
        heading: "Which foods are common allergens?",
        paragraphs: [
          "Foods the NHS lists as ones that can trigger allergic reactions include:",
        ],
        list: [
          "Cows' milk",
          "Eggs",
          "Foods containing gluten, such as wheat",
          "Nuts and peanuts, crushed or ground",
          "Seeds, crushed or ground, such as sesame",
          "Soya",
          "Fish and shellfish (shellfish must not be raw or lightly cooked)",
          "Celery, mustard, beans, lentils and peas",
        ],
      },
      {
        heading: "How to introduce allergens safely",
        paragraphs: [
          "Introduce each allergen on its own, in a small amount, so you can tell which food caused any reaction.",
          "Offer it at a time when you can watch your baby afterwards. Most reactions happen within minutes, but they can take up to 2 hours, and reactions to cows' milk can take up to 3 days. The AAP suggests waiting at least a day before trying another new allergen.",
          "Once your baby has eaten an allergen without a problem, keep it in their usual diet. The NHS says this helps minimise the risk of allergy.",
        ],
      },
      {
        heading: "Allergen meal ideas",
        paragraphs: ["Mix each allergen into a food your baby already enjoys."],
        list: [
          "Egg: a little well-mashed hard-boiled egg in mashed potato, or soft scrambled British Lion egg",
          "Peanut: smooth peanut butter thinned with breast milk, formula or water and stirred into porridge or fruit puree",
          "Tree nuts: finely ground almonds or cashews stirred into yoghurt or porridge",
          "Cows' milk: porridge made with whole milk, or plain full-fat yoghurt",
          "Wheat: soft pasta pieces or toast fingers",
          "Sesame: a little smooth tahini mixed into mashed chickpeas",
          "Fish: flaked boneless salmon or cod in mashed potato",
          "Soya: soft tofu cubes or mashed tofu in vegetable mash",
        ],
      },
      {
        heading: "Signs of an allergic reaction in babies",
        paragraphs: [
          "If you notice any of these signs, stop giving the food and talk to your GP or health visitor, who may refer you for specialist advice. If you are worried and cannot reach them, call NHS 111.",
        ],
        list: [
          "A red, itchy rash",
          "Swelling of the lips or face",
          "Red, itchy, watery eyes",
          "Sneezing, a runny or blocked nose, coughing or wheezing",
          "Feeling or being sick, tummy pain, diarrhoea or constipation",
          "Eczema that gets worse",
        ],
      },
      {
        heading: "What to do if your baby has a severe reaction",
        paragraphs: [
          "Anaphylaxis is a severe allergic reaction and a medical emergency that needs urgent treatment. Signs develop fast and can include difficulty breathing, swelling of the tongue or throat, and a raised rash that itches. If your baby has been prescribed an adrenaline auto-injector, use it first, then call 999, or your local emergency number, straight away and say it is anaphylaxis.",
          "If your baby already has a food allergy or eczema, or food allergies, eczema, asthma or hay fever run in your family, check with your GP or health visitor before you start allergens. The AAP advises the same for babies with severe or persistent eczema, or who have had an allergic reaction to a food such as egg.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should I wait between new allergens?",
        a: "The NHS says to introduce allergens one at a time so you can spot any reaction. Reactions usually start within minutes but can take up to 2 hours, or up to 3 days for cows' milk. The AAP suggests waiting at least a day before introducing another new allergen.",
      },
      {
        q: "Can I give my baby peanut butter?",
        a: "Yes, from around 6 months, as smooth peanut butter or finely ground peanuts rather than whole peanuts, which are a choking risk until 5 years. Thin it with a little milk or water and stir it into porridge or fruit, or spread it thinly on toast. Never give nut butter on its own.",
      },
      {
        q: "How often should my baby eat allergens once introduced?",
        a: "Keep them as a regular part of your baby's diet once they have had them without a reaction. The NHS says this helps minimise the risk of allergy, and the AAP recommends serving them routinely. Rotating egg, peanut, dairy, wheat and fish through the week is a simple way to do it.",
      },
      {
        q: "Should I introduce allergens if my baby has eczema?",
        a: "Talk to your GP or health visitor first. The NHS advises this if your baby has eczema or a food allergy, or if allergies, eczema, asthma or hay fever run in your family. The AAP advises the same for babies with severe or persistent eczema, so the doctor can advise how and when to introduce peanut.",
      },
    ],
    relatedSlugs: ["introducing-egg-to-baby", "introducing-peanut-to-baby", "first-baby-foods", "6-month-baby-meal-ideas", "baby-breakfast-ideas"],
    sources: [
      NHS_ALLERGIES,
      NHS_FROM_6_MONTHS,
      NHS_FOODS_TO_AVOID,
      NHS_ANAPHYLAXIS,
      NHS_WHEN_TO_USE_111,
      AAP_ALLERGENS,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "recipes-from-leftovers",
    category: "cooking",
    question: "How do I turn leftovers into baby meals?",
    title: "Recipes from leftovers: baby meals from your fridge and cupboard",
    metaTitle: "Recipes from leftovers: safe baby meals from the fridge",
    description:
      "Turn leftovers, fridge odds and cupboard staples into safe baby meals, with NHS rules on cooling, storing, freezing, reheating once and cooked rice.",
    quickAnswer:
      "Recipes from leftovers for babies are simple: mash leftover vegetables with lentils, stir cooked chicken into pasta, or turn yesterday's roast into a soft hash. Cool leftovers within 1 to 2 hours, keep them in the fridge for up to 2 days, and reheat only once until steaming hot, then cool before serving.",
    bullets: [
      "Cool leftovers within 1 to 2 hours, then fridge or freeze",
      "Use fridge leftovers within 2 days, and cooked rice within 24 hours",
      "Reheat only once, until steaming hot, then cool before serving",
      "Throw away food your baby has eaten from",
      "Cupboard staples like oats, pasta, lentils and tinned fish make quick meals",
    ],
    sections: [
      {
        heading: "Easy baby recipes from leftovers",
        paragraphs: [
          "Most family leftovers can become a baby meal if they were cooked without salt and stored safely. Mash or chop to suit your baby's stage.",
        ],
        list: [
          "Leftover roast vegetables mashed with a spoonful of plain full-fat yoghurt",
          "Cooked chicken shredded finely into pasta with soft peas",
          "Leftover potato and greens fried gently into soft bubble and squeak patties",
          "Cooked lentils or beans mashed with leftover carrot or sweet potato",
          "Flaked leftover fish stirred into mashed potato",
          "Leftover pasta baked with grated pasteurised cheese and chopped broccoli",
        ],
      },
      {
        heading: "What can I cook with what's in my fridge?",
        paragraphs: [
          "Start with a vegetable, a protein and a starch, then pick a simple method: mash, stir through pasta, or make into an omelette or patties.",
        ],
        list: [
          "Eggs and any soft vegetable: an omelette cut into strips (use British Lion eggs, or cook until solid)",
          "Cheese and pasta: cauliflower or broccoli cheese with pasta pieces",
          "Yoghurt and fruit: plain full-fat yoghurt with soft or stewed fruit as a pudding",
          "Courgette, peppers and tomatoes: a soft vegetable sauce for pasta, made without stock cubes",
          "Cottage cheese with pitta and soft vegetable sticks for a quick lunch",
        ],
      },
      {
        heading: "What can I cook from the pantry with a baby?",
        paragraphs: [
          "A few cupboard staples cover many baby meals. Check labels and choose versions with no added salt or sugar where you can.",
        ],
        list: [
          "Porridge oats: porridge with mashed banana, or added to fruit puree",
          "Pasta, rice and couscous: a base for mashed vegetables, lentils or fish",
          "Red lentils: cook soft with carrot or tinned tomatoes into a mild dal",
          "Tinned chickpeas and beans: mash with sweet potato and cauliflower",
          "Tinned salmon: remove bones and mash with couscous and peas",
          "Baked beans, reduced salt and sugar: with toast fingers",
          "Frozen peas and spinach: quick vegetables, mashed or blended for younger babies",
        ],
      },
      {
        heading: "How to cool and store leftovers safely",
        paragraphs: [
          "Storage matters more when you are cooking for a baby. The NHS advises cooling food fast, ideally in 1 to 2 hours, before it goes into the fridge or freezer. Never put food in the fridge while it is still warm.",
          "To cool food faster, split it into smaller portions, use shallow containers, or stand the container in cold water. Use fridge leftovers within 2 days. Freeze small portions if you will not use them in time.",
        ],
      },
      {
        heading: "Is it safe to reheat rice for a baby?",
        paragraphs: [
          "Yes, if it is handled carefully. Cooked rice needs stricter rules than other leftovers.",
        ],
        list: [
          "Cool cooked rice within 1 hour, then put it straight in the fridge or freezer",
          "Eat rice from the fridge within 24 hours",
          "Never reheat rice more than once",
        ],
      },
      {
        heading: "How to reheat leftovers for a baby",
        paragraphs: [
          "Reheat cooked food only once. Make sure it is steaming hot throughout, with no cold spots, and allow it to cool to a safe temperature before your baby eats it. If you use a microwave, stir well to remove hot spots and check the temperature before feeding.",
          "Defrost frozen food in the fridge overnight or with the microwave defrost setting, never at room temperature. Eat food defrosted in the fridge within 24 hours, and food defrosted in the microwave straight away. Throw away any half-eaten portions, so only serve what you think your baby will eat. Food carried out without chilling should be eaten within 4 hours, and any leftovers thrown away.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can baby food leftovers stay in the fridge?",
        a: "The NHS says food kept in the fridge should be used within 2 days. Cooked rice is the exception and should be eaten within 24 hours. Cool food within 1 to 2 hours, and wait until it has cooled fully before it goes in the fridge. Freeze anything you will not use in time.",
      },
      {
        q: "Can I reheat baby food twice?",
        a: "No. The NHS advises reheating cooked food only once. Heat it until steaming hot in the centre, then allow it to cool before serving. To avoid waste, freeze food in small portions and defrost only what you need. Throw away anything your baby has eaten from.",
      },
      {
        q: "Can I give my baby leftovers from an adult meal?",
        a: "Yes, as long as it was cooked without added salt, stock cubes or gravy, and was cooled and stored safely. Takeaways and ready meals are usually too salty for babies. Mash or chop the food for your baby's stage, and remove any bones from meat or fish.",
      },
      {
        q: "Can I freeze leftover baby food?",
        a: "Yes. Cool the food within 1 to 2 hours, then freeze it in small portions. Defrost it in the fridge overnight or using the microwave defrost setting, never at room temperature. Eat it within 24 hours of defrosting in the fridge, or straight away if defrosted in the microwave, and reheat only once.",
      },
      {
        q: "Are tinned foods fine for babies?",
        a: "Many are useful, such as tinned chickpeas, beans, lentils, tomatoes and salmon. Check the label and choose options without added salt or sugar, such as reduced salt and sugar baked beans. Remove any bones from tinned fish and mash or chop food for your baby's stage.",
      },
    ],
    relatedSlugs: [
      "baby-dinner-ideas",
      "baby-meal-ideas",
      "baby-breakfast-ideas",
      "12-month-baby-meal-ideas",
    ],
    sources: [
      NHS_STORING_REHEATING,
      NHS_FOOD_HYGIENE,
      NHS_MEAL_IDEAS,
      NHS_FOODS_TO_AVOID,
    ],
    modifiedAt: "2026-10-12",
  },
  {
    slug: "signs-baby-ready-for-solids",
    category: "cooking",
    question: "How do I know my baby is ready for solids?",
    title: "Signs your baby is ready for solids: what to look for around 6 months",
    metaTitle: "Signs baby is ready for solids: the 3 to look for",
    description:
      "The 3 signs your baby is ready for solids, the behaviours often mistaken for readiness, and what to do if your baby does not seem ready at 6 months.",
    quickAnswer:
      "The signs your baby is ready for solids are sitting up with a steady head, picking food up and getting it into their mouth, and swallowing it rather than pushing it back out. In the UK, the NHS says to look for all 3 together from around 6 months, rather than going by age alone.",
    bullets: [
      "Look for all 3 signs together, usually from around 6 months",
      "Chewing fists, night waking and wanting more milk are not signs on their own",
      "Teeth are not one of the signs, so there is no need to wait for them",
      "If your baby was born early, ask your health visitor or GP when to begin",
      "Milk is still the main food at first, so small tastes are enough",
    ],
    sections: [
      {
        heading: "What are the signs my baby is ready for solids?",
        paragraphs: [
          "There are 3 developmental signs, and they usually appear together from around 6 months. One sign on its own is not enough.",
          "Sitting matters because your baby needs to be upright to swallow safely. If every taste comes straight back out, your baby may not yet be able to move food to the back of their mouth. That is normal, and trying again in a week or two is fine.",
        ],
        list: [
          "Sitting and head control: your baby can stay sitting up and keep their head steady",
          "Hand, eye and mouth co-ordination: they can spot a piece of food, grab it and get it into their own mouth",
          "Swallowing: the food goes down, instead of being pushed out again by the tongue",
        ],
      },
      {
        heading: "Signs that do not mean your baby is ready",
        paragraphs: [
          "Some everyday baby behaviour looks like hunger for food, but it is not a reliable sign. These are common mix-ups:",
        ],
        list: [
          "Chewing or sucking on their fists",
          "Waking at night more than they used to",
          "Wanting extra milk feeds",
        ],
      },
      {
        heading: "Why these signs are not enough on their own",
        paragraphs: [
          "All 3 are normal at this age. Starting solids will not help your baby sleep through the night, and a little extra milk is usually the answer until the real signs appear.",
          "Watching you eat and reaching for your plate is lovely, and in the US the AAP counts it as one helpful clue. In the UK, it is the 3 physical signs together that count.",
        ],
      },
      {
        heading: "When can my baby start solids?",
        paragraphs: [
          "In the UK, the NHS advises introducing solid foods at around 6 months. Until then, breast milk or first infant formula gives your baby all the energy and nutrients they need, apart from vitamin D for some babies. WHO also points to about 6 months, when a baby's needs begin to outgrow what milk alone provides.",
          "US advice differs a little. The CDC and AAP also say about 6 months, but the CDC only rules out starting before 4 months, and the AAP lists size, such as doubling birth weight, among its readiness clues. NHS guidance does not use weight as a sign. Babies born early may need a different start date, so check with your health visitor or GP.",
        ],
      },
      {
        heading: "Why waiting until around 6 months helps",
        paragraphs: [
          "Waiting gives your baby time to develop, so they can handle solid food properly, including purees and baby rice. By this age most babies are more able to feed themselves and to chew, shift food around and swallow.",
          "That often means they can move on to mashed, lumpy and finger foods quickly, and some never need smooth purees at all. If you breastfeed, giving breast milk alone until around 6 months also helps protect your baby from illness and infections.",
        ],
      },
      {
        heading: "What if my baby is 6 months and does not seem ready?",
        paragraphs: [
          "Babies develop at different speeds, so some take a little longer to show all 3 signs. Keep feeding milk as usual and look for the signs again in a week or two.",
          "If your baby is well past 6 months and shows none of the signs, or you are worried about their weight, sitting or swallowing, talk to your health visitor or GP.",
        ],
      },
      {
        heading: "How to start once the signs are there",
        paragraphs: [
          "Begin with a small amount once a day, at a calm time when your baby is not too tired. A few teaspoons or a few pieces of soft food is plenty. Sit your baby upright in a high chair with the harness on, and stay with them for the whole meal.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I start solids at 4 months?",
        a: "In the UK, the NHS advises waiting until around 6 months, and that includes baby rice or puree mixed into milk. In the US, the CDC says introducing foods before 4 months is not recommended, which is a lower limit rather than a target. If you feel your baby needs food sooner, speak to your health visitor or GP first.",
      },
      {
        q: "Does my baby need teeth before starting solids?",
        a: "No. Teeth are not one of the readiness signs. Early foods should be soft enough to break up easily in the mouth, such as mashed vegetables, ripe banana or well-cooked sticks of sweet potato. Hard foods like raw carrot, raw apple and whole nuts are left out because of choking risk, not because of how many teeth your baby has.",
      },
      {
        q: "Will starting solids help my baby sleep through the night?",
        a: "No. The NHS says starting solids does not make a baby more likely to sleep through. Waking more at night around this age is common and is not a reliable sign that your baby is hungry for food. If they seem hungrier, a little extra milk is usually enough until they show all 3 readiness signs.",
      },
      {
        q: "My baby sits with support but not alone. Is that enough?",
        a: "It can be. What matters is that your baby can stay upright in a high chair and hold their head steady without it wobbling. They also need to pick food up and swallow it. If head control is still shaky, give it a little more time and check again in a week or two.",
      },
      {
        q: "What if my baby was born prematurely?",
        a: "Talk to your health visitor or GP. Babies born early may be ready at a different point, and the right time depends on your baby's development and health, not only their date of birth. Your health team can help you watch for the signs and agree when to begin.",
      },
    ],
    relatedSlugs: [
      "first-baby-foods",
      "6-month-baby-meal-ideas",
      "gagging-vs-choking",
      "baby-led-weaning-meal-ideas",
    ],
    sources: [
      NHS_FIRST_FOODS,
      NHS_FROM_6_MONTHS,
      AAP_STARTING_SOLIDS,
      CDC_INTRODUCE_SOLIDS,
      WHO_FEEDING,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "gagging-vs-choking",
    category: "cooking",
    question: "What is the difference between gagging and choking in babies?",
    title: "Gagging vs choking in babies: how to tell the difference and what to do",
    metaTitle: "Gagging vs choking in babies: signs and what to do",
    description:
      "How to tell gagging from choking in babies, why gagging is normal when starting solids, and what to do step by step if your baby under 1 is choking.",
    quickAnswer:
      "Gagging vs choking comes down to noise and breathing. A gagging baby is loud, may retch or splutter, and sorts it out on their own. A choking baby is usually quiet because the airway is blocked: they may not be able to cough, cry or breathe, and they need first aid straight away.",
    bullets: [
      "Gagging is a normal, noisy reflex while babies learn to eat",
      "Choking is quiet and needs you to act at once",
      "Babies under 1 get back blows and chest thrusts; abdominal thrusts are for children over 1",
      "Call 999 if the blockage does not clear",
      "Always stay with your baby while they eat",
    ],
    sections: [
      {
        heading: "What is the difference between gagging and choking?",
        paragraphs: [
          "Gagging is a reflex that pushes food forward when your baby has too much in their mouth to swallow. Choking happens when food or an object blocks the airway, so your baby cannot breathe properly.",
          "Gagging is loud. Choking is often silent.",
        ],
      },
      {
        heading: "Signs your baby is gagging",
        paragraphs: [
          "Gagging is very common in the first weeks of solids, while your baby learns how much food they can chew and swallow at once. It tends to be noisy and passes quickly.",
          "Stay calm, keep your baby sitting upright and let them work it out. Avoid sweeping your fingers into their mouth, as poking blindly can push food further back.",
        ],
        list: [
          "Watery eyes",
          "The tongue pushing forward or out of the mouth",
          "Retching to bring food to the front of the mouth, sometimes with a little sick",
          "A red face, though redness shows less clearly on brown or black skin",
        ],
      },
      {
        heading: "Signs your baby is choking",
        paragraphs: [
          "If your baby is coughing hard and making noise, air is still getting through. Encourage the cough and stay right beside them. Act straight away if you see any of these signs:",
        ],
        list: [
          "A silent cough, or no cough at all",
          "Struggling to breathe in, gasping or wheezing",
          "Unable to cry or make any sound",
          "White skin turning blue, or on brown or black skin, blue gums, lips or fingernails",
          "Going floppy or becoming unresponsive",
        ],
      },
      {
        heading: "What to do if your baby under 1 is choking",
        paragraphs: [
          "Shout for help, lift your baby out of the high chair and check whether they are conscious. Then use back blows and chest thrusts. The NHS says the order does not matter: if one method does not work, switch to the other and keep going.",
        ],
        list: [
          "Back blows: sit down and rest your baby tummy down along your thigh or forearm, keeping their head and neck supported in your hand. Using the heel of your other hand, give up to 5 sharp blows between the shoulder blades, checking after each one",
          "Chest thrusts: turn your baby face up along your thighs, feet towards you and head lower than their feet. Put 2 fingers on the middle of the chest, just below the nipple line, and give up to 5 sharp pushes, checking after each one",
          "If the blockage is still there and your baby is conscious, repeat the cycle. If you are on your own, shout or call for help, but do not leave your baby",
          "Call 999, or your local emergency number, if the blockage does not come out, and keep repeating the cycle until help arrives",
          "If your baby becomes unconscious, lay them on a firm, flat surface, call 999 with the phone on speaker and start CPR. Only take the object out if you can clearly see it and grab it easily",
        ],
      },
      {
        heading: "How to reduce the risk of choking",
        paragraphs: [
          "You cannot remove every risk, but a safe set-up does most of the work. The NHS says baby-led weaning does not raise the risk of choking compared with spoon feeding. The right food and close supervision still matter.",
        ],
        list: [
          "Sit your baby upright in a high chair; never feed them lying down, crawling, walking, or in a car seat or buggy",
          "Stay with your baby for the whole meal and keep distractions low",
          "Offer soft food that breaks up easily, mashed or in finger-sized pieces",
          "Cut grapes, cherry tomatoes and other small round foods into quarters",
          "Leave out whole nuts, popcorn, hard sweets, and raw carrot or apple",
        ],
      },
      {
        heading: "What if I am scared of my baby choking?",
        paragraphs: [
          "Feeling nervous at the start is common. Knowing what gagging looks like helps, as most noisy moments at the table are gagging. A baby first aid course, such as those run by the British Red Cross, can build your confidence.",
          "Your baby may gag again for a while when you move on to lumpier textures or new finger foods. That is part of learning to chew, so keep offering new textures rather than going back to smooth food for good.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I put my finger in my baby's mouth if they gag?",
        a: "No. If your baby is gagging, let the reflex do its job and stay close. If they are choking, the NHS advises only taking an object out if you can clearly see it and grasp it easily. Poking blindly or repeatedly with your fingers can push food further down and make things worse.",
      },
      {
        q: "Does baby-led weaning make choking more likely?",
        a: "No. The NHS says there is no more risk of choking when babies feed themselves than when they are spoon fed. What matters is soft food in a safe shape, your baby sitting upright, and you staying with them for the whole meal. Gagging may look more dramatic with finger foods, but it is still normal.",
      },
      {
        q: "Do I still need a doctor if the food came out?",
        a: "Yes. The NHS advises getting medical help after a choking episode even if the object has come out. Part of it may still be in the airway, or your baby may have been hurt by the back blows or chest thrusts. Call 999 if they have any breathing difficulty, or get urgent advice from NHS 111 or your GP.",
      },
      {
        q: "When is coughing while eating a worry?",
        a: "A strong cough means air is moving, so encourage it and stay with your baby. The AAP notes that a cough during a choking episode often eases within about 15 minutes, even if the object has not come out, so keep watching closely. If the cough goes silent, breathing becomes hard, or your baby changes colour or goes floppy, start first aid and call 999.",
      },
    ],
    relatedSlugs: [
      "how-to-cut-food-for-baby",
      "baby-led-weaning-meal-ideas",
      "foods-to-avoid-for-babies",
      "signs-baby-ready-for-solids",
    ],
    sources: [
      NHS_STOP_CHOKING,
      NHS_CHOKING_GAGGING,
      NHS_FIRST_FOODS,
      AAP_CHOKING_PREVENTION,
      CDC_CHOKING_HAZARDS,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "foods-to-avoid-for-babies",
    category: "cooking",
    question: "What foods should babies avoid before 12 months?",
    title: "Foods to avoid for babies: what not to give before 12 months",
    metaTitle: "Foods to avoid for babies under 12 months: full list",
    description:
      "Foods to avoid for babies under 12 months, from honey, salt and sugar to whole nuts, raw eggs, some cheeses and fish, and rice drinks, based on NHS advice.",
    quickAnswer:
      "The main foods to avoid for babies under 12 months are honey, added salt, added sugar, whole nuts, unpasteurised or mould-ripened soft cheeses, raw shellfish, and shark, swordfish or marlin. Cook eggs without the British Lion mark until solid, and skip rice drinks, juice and cows' milk as a main drink.",
    bullets: [
      "No honey until your baby is over 1",
      "No added salt, stock cubes or gravy, and keep salty foods off their plate",
      "No added sugar or sweeteners",
      "Ground or crushed nuts are fine from around 6 months; whole nuts wait until 5",
      "No rice drinks until 5, and no cows' milk as a main drink until 1",
    ],
    sections: [
      {
        heading: "Why should babies avoid honey?",
        paragraphs: [
          "Do not give honey in any form until your baby is over 1 year old. Now and then, honey contains bacteria that release toxins in a baby's gut and cause infant botulism, which is rare but very serious.",
        ],
      },
      {
        heading: "Salt: why babies should not have it",
        paragraphs: [
          "Salt is hard on a baby's kidneys, so do not add any to their food or cooking water. Stock cubes and gravy are often very salty too, so leave them out of anything your baby will share.",
          "An easy habit is to cook the family meal unsalted, take out your baby's portion, then season the rest. These foods are high in salt and are best kept off your baby's plate:",
        ],
        list: [
          "Bacon, sausages and chorizo",
          "Crisps, crackers and chips with added salt",
          "Takeaways and ready meals",
          "Gravy, and dishes cooked with stock cubes",
        ],
      },
      {
        heading: "Sugar, sweeteners and sweet drinks",
        paragraphs: [
          "Your baby does not need sugar or sweeteners. The NHS advises avoiding food and drinks with added sugar or sweeteners for children aged 4 and under, including the natural sugars in syrup, honey, fruit juice and smoothies. Whole fruit is fine.",
          "Juice and smoothies are best avoided before 12 months. If you do offer them, the NHS suggests diluting 1 part juice with 10 parts water and serving it with a meal in an open cup. US advice from the AAP is stricter: no juice at all before 12 months.",
        ],
      },
      {
        heading: "Can babies eat nuts and nut butter?",
        paragraphs: [
          "Yes, from around 6 months, as long as the nuts are crushed, ground or flaked into food. Whole nuts and peanuts are a choking risk and should not be given to children under 5.",
          "Smooth nut butter is fine spread thinly on toast or stirred into cooking, but never give it by itself, as a thick lump can block the throat. If food allergies or other allergies run in your family, speak to your GP or health visitor before your baby tries nuts.",
        ],
      },
      {
        heading: "Raw and undercooked foods babies should not have",
        paragraphs: [
          "Some foods carry a higher risk of food poisoning for babies, so cook them thoroughly or leave them out.",
        ],
        list: [
          "Eggs: hens' eggs with the red British Lion stamp are fine runny. Other hens' eggs, and duck, goose or quail eggs, need cooking until white and yolk are both solid",
          "Homemade mayonnaise, ice cream or raw cake mix, unless you know the eggs are Lion stamped",
          "Shellfish such as mussels, clams and oysters, unless thoroughly cooked",
          "Fresh pâté made from meat, fish or vegetables",
          "Unpasteurised or raw milk",
        ],
      },
      {
        heading: "Which cheeses and fish should babies avoid?",
        paragraphs: [
          "Pasteurised full-fat cheese, such as mild cheddar, cottage cheese and cream cheese, is fine from around 6 months. Some cheeses are more likely to carry listeria bacteria, so avoid them unless they are cooked into a dish, as cooking kills listeria.",
          "Shark, swordfish and marlin contain mercury, which can affect a baby's developing nervous system. The NHS advises avoiding them until 16.",
        ],
        list: [
          "Brie, camembert and other mould-ripened soft cheeses",
          "Chèvre and other ripened goats' cheeses",
          "Roquefort and other soft blue cheeses",
          "Any cheese made from unpasteurised milk",
          "Shark, swordfish and marlin",
        ],
      },
      {
        heading: "Which drinks should babies avoid?",
        paragraphs: [
          "Breast milk or first infant formula is your baby's main drink in the first year, with sips of water from around 6 months. Leave these out:",
        ],
        list: [
          "Rice drinks, until at least 5, as they can contain too much arsenic (rice itself is fine to eat)",
          "Cows' milk as a main drink before 12 months, though it is fine in cooking",
          "Soya, oat or almond drinks as a main drink before 12 months",
          "Tea, coffee and other drinks with caffeine",
          "Squash, fizzy drinks, flavoured milk and diet drinks",
        ],
      },
    ],
    faqs: [
      {
        q: "When can my baby have honey?",
        a: "Once they are over 1 year old. Before then, honey carries a small risk of infant botulism, a serious illness. After their first birthday honey is allowed, but it is still a sugar. The NHS advises avoiding added sugars, including honey and syrup, for children aged 4 and under, which also helps protect their teeth.",
      },
      {
        q: "Can my baby eat the family meal if it has salt in it?",
        a: "It is better to plan for your baby's share to be cooked without salt, then season the adult plates. Ready meals, takeaways, processed meats and dishes made with stock cubes tend to be salty, so they are not suitable for your baby.",
      },
      {
        q: "Can babies have eggs before 12 months?",
        a: "Yes. Eggs can be offered from around 6 months. As egg can cause allergies, introduce it on its own, in a small amount. In the UK, hens' eggs with the British Lion stamp are safe even when runny. Cook other eggs, including duck, goose and quail eggs, until both the white and the yolk are solid.",
      },
      {
        q: "Which snack foods are choking hazards for babies?",
        a: "Popcorn, marshmallows, raw jelly cubes, chewing gum, ice cubes and hard, sticky or gooey sweets are all choking hazards for babies and young children. Whole raisins and other dried fruit should be chopped for babies under 1. Peanut butter on its own is risky too; spread it thinly on toast instead.",
      },
      {
        q: "My baby has had rice drinks. Should I worry?",
        a: "No. The NHS says there is no immediate risk if your child has already had rice drinks. Simply switch to a different milk that suits their age: breast milk or first infant formula before 12 months, and whole cows' milk or an unsweetened, calcium-fortified alternative after that. Eating rice as part of meals is fine.",
      },
    ],
    relatedSlugs: [
      "how-to-cut-food-for-baby",
      "allergen-introduction-meal-ideas",
      "drinks-for-babies",
      "gagging-vs-choking",
    ],
    sources: [
      NHS_FOODS_TO_AVOID,
      NHS_FOOD_AND_DRINKS_TO_AVOID,
      NHS_PREPARING_FOOD,
      NHS_FIRST_FOODS,
      AAP_STARTING_SOLIDS,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "how-to-cut-food-for-baby",
    category: "cooking",
    question: "How should I cut food for my baby?",
    title: "How to cut food for baby safely: grapes, sausages, apples and more",
    metaTitle: "How to cut food for baby: safe shapes by age",
    description:
      "How to cut food for baby safely, from quartering grapes and cherry tomatoes to slicing sausages, apples and cheese, plus finger food shapes by age.",
    quickAnswer:
      "To cut food for baby safely, change the shape of anything small, round or firm. Quarter grapes and cherry tomatoes, cut sausages in half and then lengthways, cook apple until soft and slice it rather than cubing it, and start with soft finger-length sticks. Never give whole nuts; offer them ground or as a thin spread.",
    bullets: [
      "Around 6 months, offer soft finger-length sticks your baby can hold in a fist",
      "Cut small round foods such as grapes and cherry tomatoes into quarters",
      "Cut sausages in half and then lengthways, and peel off the skin",
      "Cook firm fruit and vegetables until soft, then slice them",
      "Grind or flake nuts, and spread nut butter thinly",
    ],
    sections: [
      {
        heading: "Why does the shape of food matter?",
        paragraphs: [
          "Small, round and firm foods are more likely to block a young child's airway, because babies do not chew well yet and may try to swallow pieces whole. Changing the size, shape and texture lowers that risk.",
          "Any food can cause choking, so the cut is only one part of keeping meals safe. Sit your baby upright in a high chair, stay with them and let them eat at their own pace.",
        ],
      },
      {
        heading: "How to cut finger foods for a 6 month old",
        paragraphs: [
          "At first, cut food into sticks roughly the size of your finger. Your baby grips with their whole hand, so each piece needs to be long enough to hold in a fist with some showing above it. Small cubes are hard for a young baby to pick up, so they come later.",
          "Early finger foods should be soft enough to break up easily in the mouth. Good first shapes include:",
        ],
        list: [
          "Soft cooked sticks of carrot, parsnip or sweet potato",
          "Soft cooked broccoli or cauliflower florets with a stalk to hold",
          "Slices of ripe banana, peach or melon",
          "Strips of avocado",
          "Strips of lightly toasted bread or chapatti",
          "Sticks of pasteurised full-fat hard cheese",
        ],
      },
      {
        heading: "How to cut food as your baby grows",
        paragraphs: [
          "As your baby gets better at chewing and picking things up, pieces can get smaller. The rules for round and firm foods stay the same.",
        ],
        list: [
          "Around 6 months: soft finger-length sticks, alongside mashed food",
          "7 to 9 months: more mashed, lumpy and finger foods at each meal, including soft strips of meat and flaked fish",
          "10 to 12 months: most babies can pick up smaller pieces with their fingers, so soft bite-sized pieces can join the sticks",
          "From 1 year: keep quartering round foods and keep whole nuts out until 5. The AAP suggests cutting food for young children into pieces no bigger than about 1cm",
        ],
      },
      {
        heading: "How to cut grapes, cherry tomatoes and other round foods",
        paragraphs: [
          "Cut grapes, cherry tomatoes, cherries, berries, strawberries and other small round fruit into quarters, so each one makes 4 small pieces. Take out any stones or hard pips first.",
          "Cut raisins and other dried fruit into small pieces for babies under 1. For younger babies, squash or mash larger beans and pulses such as butter beans and chickpeas.",
        ],
      },
      {
        heading: "How to cut sausages, meat and cheese",
        paragraphs: [
          "Sausages are a well-known choking risk because of their round shape and firm skin. Processed meats such as sausages and ham are also salty, so keep them to small amounts now and then.",
        ],
        list: [
          "Sausages: peel off the skin, cut in half, then cut each half lengthways into thin, short strips",
          "Meat: remove all bones, skin and fat, then cut into strips as thin as you can",
          "Fish: check carefully for bones, then flake",
          "Cheese: grate it, or cut short, narrow strips rather than chunks",
        ],
      },
      {
        heading: "How to prepare apples, carrots and other firm foods",
        paragraphs: [
          "Raw apple and raw carrot are too hard for babies. Steam or simmer firm fruit and vegetables until soft, then cut them into slices or narrow sticks. Grating is another good option for young babies, and peeling skins makes food easier to swallow.",
          "Cut apple and melon into slices rather than small chunks. For older babies and toddlers, cut cucumber, pepper and celery into narrow batons.",
        ],
      },
      {
        heading: "How to give nuts and nut butter safely",
        paragraphs: [
          "Whole nuts and peanuts are not suitable for children under 5. From around 6 months, you can offer nuts that are finely ground, crushed or flaked and mixed into food. Crush or grind seeds too, and keep popcorn off the menu until 5.",
          "Spread smooth nut butter thinly on toast fingers, or cook it into porridge or a curry. Never give a spoonful on its own, as a thick lump can stick in the throat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should grapes be cut in half or quarters for a baby?",
        a: "Quarters. The NHS advises cutting grapes and other small round foods, such as cherry tomatoes, cherries and berries, into 4 small pieces. Keep doing this for toddlers too. The AAP suggests keeping round, firm foods chopped small until at least 4 years, depending on how well your child chews.",
      },
      {
        q: "Is bread safe for babies?",
        a: "Yes, with a little care. Soft white bread can clump into a doughy ball in the mouth if it is not chewed well. Lightly toast white bread or use brown bread, and cut it into narrow strips. Chapatti, naan and pitta work well cut into strips too.",
      },
      {
        q: "Can I cut food into cubes for my baby?",
        a: "Small cubes are hard for a young baby to grip, so finger-length sticks work better at around 6 months. As your baby learns to pick up small pieces, usually towards the end of the first year, soft bite-sized pieces are fine. Avoid firm chunks, such as raw apple or hard cheese, for babies and young children.",
      },
      {
        q: "How soft should finger food be?",
        a: "Soft enough to break up easily in your baby's mouth. A simple check is to press a cooked piece between your finger and thumb. If it squashes, it is about right for a new eater. If it stays firm or snaps, cook it a little longer before serving.",
      },
      {
        q: "Do I still need to cut food once my baby has teeth?",
        a: "Yes. Teeth help, but young children still do not grind food well and may try to swallow pieces whole. Keep quartering round foods, slicing firm fruit and avoiding whole nuts until 5. The AAP advises keeping the highest-risk foods away until at least 4 years, depending on your child's development.",
      },
    ],
    relatedSlugs: [
      "gagging-vs-choking",
      "baby-led-weaning-meal-ideas",
      "foods-to-avoid-for-babies",
      "9-month-baby-meal-ideas",
    ],
    sources: [
      NHS_PREPARING_FOOD,
      NHS_FIRST_FOODS,
      NHS_FOODS_TO_AVOID,
      AAP_CHOKING_PREVENTION,
      CDC_CHOKING_HAZARDS,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "iron-rich-foods-for-babies",
    category: "cooking",
    question: "What are good iron-rich foods for babies?",
    title: "Iron-rich foods for babies: easy first foods and why iron matters",
    metaTitle: "Iron-rich foods for babies: easy ideas from 6 months",
    description:
      "Iron-rich foods for babies from about 6 months, why iron matters, how vitamin C helps your baby absorb it, and simple meal pairings, based on NHS advice.",
    quickAnswer:
      "Good iron-rich foods for babies include meat, fish, eggs, beans, lentils, tofu, dark green vegetables and fortified cereals. From around 6 months, milk alone no longer covers all your baby's needs, so offer iron foods regularly and pair plant sources with fruit or vegetables that are rich in vitamin C.",
    bullets: [
      "From around 6 months, your baby needs iron from food as well as milk",
      "Iron from meat and fish is absorbed more easily than iron from plants",
      "Pair beans, lentils and greens with vitamin C foods such as broccoli, peppers or strawberries",
      "Fortified cereals, pulses and greens help if your baby does not eat meat",
      "Iron-rich foods can be offered from the very start of solids",
    ],
    sections: [
      {
        heading: "Why do babies need iron from around 6 months?",
        paragraphs: [
          "Iron is essential for your baby's health. Too little can lead to iron deficiency anaemia, which can affect a child's physical and mental development.",
          "Babies are born with a store of iron that covers their early months. The AAP explains that in breastfed babies this store runs low from around 4 months, and WHO notes that by about 6 months a baby needs more nutrients than milk alone can provide. That is why iron-rich foods matter as soon as solids begin.",
        ],
      },
      {
        heading: "Which foods are rich in iron for babies?",
        paragraphs: [
          "The best iron-rich foods for babies are meat, fish, eggs, beans, lentils and other pulses, tofu, dark green vegetables and fortified breakfast cereals. All of them are suitable from around 6 months in a texture your baby can manage.",
        ],
        list: [
          "Meat: beef, lamb, pork, chicken and turkey, cooked soft and shredded or minced",
          "Fish with all bones removed, flaked",
          "Eggs, well cooked or British Lion stamped",
          "Beans, lentils, chickpeas and other pulses, mashed or in a dhal",
          "Tofu, in soft strips or mashed",
          "Dark green vegetables such as broccoli, spinach, kale and cabbage",
          "Iron-fortified breakfast cereals and baby cereals",
        ],
      },
      {
        heading: "Is iron from meat better than iron from plants?",
        paragraphs: [
          "Your baby's body takes in iron from meat and fish more easily than iron from plant foods. Plant iron still counts; it just needs a bit more planning.",
          "If your family does not eat meat or fish, offer fortified cereals, green leafy vegetables, beans and lentils often. Children who do not eat meat or fish are more likely to run short of iron, so mention your baby's diet to your health visitor if you are unsure.",
        ],
      },
      {
        heading: "How does vitamin C help babies absorb iron?",
        paragraphs: [
          "Vitamin C helps the body absorb iron, so serving the two together is an easy habit, especially with plant foods. Good vitamin C foods for babies include oranges, kiwi, strawberries, broccoli, tomatoes and peppers.",
          "Prepare them safely: quarter strawberries and cherry tomatoes, and cook peppers and broccoli until soft for younger babies. You do not need vitamin C on every spoonful. Adding a fruit or vegetable to meals that carry iron is a simple habit. Some easy pairings:",
        ],
        list: [
          "Lentil and sweet potato mash with soft broccoli",
          "Iron-fortified porridge with mashed strawberries or kiwi",
          "Unsalted bean and tomato stew with toast fingers",
          "Scrambled egg with soft cooked pepper strips",
          "Shredded beef or lamb with mashed potato and peas",
        ],
      },
      {
        heading: "Does my baby need iron supplements?",
        paragraphs: [
          "In the UK, routine NHS vitamin advice for babies covers vitamins A, C and D, and iron comes from food. Only give your baby an iron supplement if your GP or another health professional advises it.",
          "US advice differs. The AAP recommends iron drops from 4 months for babies who are fully or partly breastfed, until iron-rich foods are part of their diet, and checks for low iron at 12 months. Babies born early or small may need extra iron sooner. If you live in the UK, follow NHS advice and ask your GP or health visitor if you are worried.",
        ],
      },
      {
        heading: "Iron after the first year",
        paragraphs: [
          "After their first birthday, most children have 3 meals a day and may also need 2 healthy snacks. Keep including protein foods that carry iron, such as meat, fish, eggs, beans, chickpeas, lentils and dhal.",
          "If you are worried your child is not getting enough iron, for example because they eat very little or only a few foods, talk to your GP or health visitor.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should I start giving my baby iron-rich foods?",
        a: "From the start of solids, around 6 months. You do not need to wait until other foods are settled. Meat, fish, eggs, lentils and fortified cereals can all be offered early in a texture your baby can manage, alongside their usual breast milk or first infant formula.",
      },
      {
        q: "Can I give my baby red meat?",
        a: "Yes. Beef, lamb and pork are suitable from around 6 months. Cook meat well without salt, remove bones, skin and fat, and serve it minced, shredded or in very thin strips. Processed meats such as sausages and ham are salty, so keep them to small amounts now and then rather than relying on them for iron.",
      },
      {
        q: "Can a vegetarian baby get enough iron?",
        a: "Yes, with some planning. Offer fortified cereals, beans, lentils, tofu, eggs and dark green vegetables often, and pair them with vitamin C foods such as broccoli, peppers or fruit. Children who do not eat meat or fish are more likely to run low on iron, so ask your health visitor if you are unsure.",
      },
      {
        q: "Do I need to give vitamin C with every iron food?",
        a: "No. Vitamin C helps your baby absorb iron, but it does not have to be on the same spoon every time. Serving fruit or vegetables in the same meal as iron foods is an easy way to pair them. Think of it as an easy kitchen habit rather than a strict rule.",
      },
      {
        q: "Should I use iron-fortified baby cereal?",
        a: "It is a handy option but not essential. Fortified cereals are one of several iron sources the NHS lists, alongside meat, fish, eggs, pulses and dark green vegetables. In the US, the AAP advises choosing baby cereals that are iron fortified. Mix the cereal with your baby's usual breast milk or formula.",
      },
    ],
    relatedSlugs: [
      "first-baby-foods",
      "9-month-baby-meal-ideas",
      "how-much-should-my-baby-eat",
      "6-month-baby-meal-ideas",
    ],
    sources: [
      NHS_FIRST_FOODS,
      NHS_FROM_6_MONTHS,
      NHS_YOUNG_CHILDREN,
      NHS_VITAMINS_FOR_CHILDREN,
      AAP_IRON_SUPPLEMENTS,
      WHO_FEEDING,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "how-much-should-my-baby-eat",
    category: "cooking",
    question: "How much should my baby eat?",
    title: "How much should my baby eat? Amounts by age, cues and milk",
    metaTitle: "How much should my baby eat? A simple guide by age",
    description:
      "How much your baby should eat from 6 to 12 months, the signs they are hungry or full, and how milk feeds fit alongside solids, based on NHS advice.",
    quickAnswer:
      "How much your baby should eat depends on their age and appetite, and your baby is the best judge. Around 6 months, a few teaspoons or a few soft pieces once a day is plenty. By 10 to 12 months, most babies have 3 small meals a day, with breast milk or formula alongside.",
    bullets: [
      "At first, a few teaspoons or pieces once a day is enough",
      "Meals build up to 3 a day between 7 and 12 months",
      "Let your baby decide how much to eat and stop when they show they are full",
      "Breast milk or first infant formula stays the main drink until 12 months",
      "Babies under 12 months do not need snacks; offer extra milk instead",
    ],
    sections: [
      {
        heading: "How much should my baby eat at 6 months?",
        paragraphs: [
          "Very little. When your baby first starts solids around 6 months, a few teaspoons of mashed food or a few soft finger foods, once a day, is all they need.",
          "In these early weeks the aim is learning to eat, not filling up. Breast milk or first infant formula still provides most of what your baby needs. Pick a time when neither of you is rushed or tired, sit with them, and let them set the pace.",
        ],
      },
      {
        heading: "How many meals a day does my baby need?",
        paragraphs: [
          "The number of meals grows gradually over the first year. This is the rough pattern the NHS describes. The WHO suggests a similar build-up, with 2 to 3 meals a day from 6 to 8 months and 3 to 4 from 9 months, plus 1 or 2 snacks if needed from 9 months. The NHS differs on snacks and says babies under 12 months do not need them.",
        ],
        list: [
          "Around 6 months: one small meal a day, a little more each week",
          "7 to 9 months: slowly moving towards 3 meals, breakfast, lunch and tea",
          "10 to 12 months: 3 meals a day, and lunch and tea can have a main course plus fruit or plain yoghurt",
          "From 12 months: 3 meals a day and up to 2 healthy snacks",
        ],
      },
      {
        heading: "Signs your baby is hungry or full",
        paragraphs: [
          "Your baby shows you when they want more and when they have had enough. Following those signals, rather than a set amount, is known as responsive feeding.",
        ],
        list: [
          "Hungry: leaning or reaching towards food, or pointing at it",
          "Hungry: opening their mouth as the spoon comes close",
          "Hungry: looking excited when food appears, or using sounds or gestures to ask for more",
          "Full: shutting their mouth firmly when food is offered",
          "Full: turning their head away from the spoon or plate",
          "Full: pushing food or the spoon away",
        ],
      },
      {
        heading: "How do I avoid pressure at mealtimes?",
        paragraphs: [
          "You choose what to offer and when. Your baby decides whether to eat and how much.",
          "If you are spoon feeding, wait until your baby opens their mouth before you offer the next spoonful. Do not force your baby to eat, and avoid using food as a reward or taking it away as a punishment. Keep screens away from the table and eat with your baby when you can, because babies learn by copying you.",
        ],
      },
      {
        heading: "How much milk does my baby need alongside solids?",
        paragraphs: [
          "Breast milk or first infant formula stays your baby's main drink until 12 months. As they eat more food, most babies want a little less milk, and some drop a feed on their own.",
        ],
        list: [
          "Breastfed babies adjust their feeds to how much food they eat, so there is no amount to aim for",
          "7 to 9 months: often around 4 milk feeds a day; formula-fed babies may have around 600ml",
          "10 to 12 months: often around 3 milk feeds a day; formula-fed babies may have around 400ml",
          "From 12 months: at least 350ml of milk a day, or 2 servings of dairy foods such as cheese or yoghurt",
        ],
      },
      {
        heading: "Why does my baby eat less some days?",
        paragraphs: [
          "Changing appetite is normal. Some days your baby will eat well, some days hardly at all, and some days they will refuse almost everything.",
          "A refused food is not a failed food. Babies can need 10 or more tries before they accept a new taste or texture, so keep offering it on other days, next to foods they already enjoy. There is no need to hold back milk to make your baby hungrier for food. Milk still does much of the work in the first year, and the WHO notes that breast milk can provide half or more of a baby's energy between 6 and 12 months.",
          "If you are worried that your baby is eating too much or too little, or about their weight or growth, talk to your health visitor or GP. If your baby was born early, ask them when and how to start solids.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I give solids before or after a milk feed?",
        a: "In the first weeks, the NHS suggests offering food a little before a usual milk feed, but not when your baby is very hungry, because a hungry baby gets frustrated. As your baby eats more, the NHS suggests offering milk feeds after meals, because their tummy is small and fills up quickly. Either way, offer milk as normal and never hold it back.",
      },
      {
        q: "Can I overfeed my baby with solids?",
        a: "The best protection is to follow your baby's cues. Stop when they close their mouth, turn their head or push the spoon away, even if there is food left. Do not encourage them to finish a portion or add cereal to a bottle. If you are concerned about your baby's weight, your health visitor can check their growth.",
      },
      {
        q: "How do I know my baby is getting enough?",
        a: "Over a week, a baby who is offered regular meals and milk, eats to their own appetite, and is growing well is usually getting enough. Single days are not a good guide, because appetite goes up and down. If you are unsure, your health visitor can weigh your baby and look at their growth chart with you.",
      },
      {
        q: "Does my baby need snacks between meals?",
        a: "Not before 12 months. The NHS says babies under 1 do not need snacks. If your baby seems hungry between meals, offer an extra breast or formula feed instead. From 12 months, your child will usually have 3 meals a day and may also need up to 2 healthy snacks, such as fruit, yoghurt or toast fingers.",
      },
    ],
    relatedSlugs: [
      "first-baby-foods",
      "6-month-baby-meal-ideas",
      "drinks-for-babies",
      "signs-baby-ready-for-solids",
    ],
    sources: [
      NHS_FIRST_FOODS,
      NHS_FROM_6_MONTHS,
      NHS_YOUNG_CHILDREN,
      WHO_FEEDING,
      CDC_HUNGRY_OR_FULL,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "introducing-egg-to-baby",
    category: "cooking",
    question: "When and how can I introduce egg to my baby?",
    title: "Introducing egg to your baby: when, how and signs of a reaction",
    metaTitle: "Introducing egg to baby: when, how and what to watch for",
    description:
      "When and how to start introducing egg to your baby, which eggs are safe lightly cooked, the signs of a reaction and what to do, based on NHS advice.",
    quickAnswer:
      "You can start introducing egg to your baby from around 6 months, once they are eating some solids. Offer a small amount of well-cooked egg, such as mashed hard-boiled egg, as the only new allergen that day. If there is no reaction, keep egg in their meals regularly.",
    bullets: [
      "Egg can go into your baby's diet from around 6 months, like other foods",
      "Start with a little well-cooked egg, and one new allergen at a time",
      "In the UK, hens' eggs with the red British Lion stamp can be lightly cooked",
      "Once egg is tolerated, keep offering it regularly",
      "Talk to your GP or health visitor first if your baby has eczema or a food allergy, or allergies run in the family",
    ],
    sections: [
      {
        heading: "When can my baby have egg?",
        paragraphs: [
          "From around 6 months, as soon as your baby has started solids. Egg is one of the foods most likely to cause an allergy, but the NHS advises introducing it at the same time as other foods rather than holding it back.",
          "Waiting does not protect your baby. The NHS says putting off hens' egg beyond 6 to 12 months may make an egg allergy more likely. US advice from the AAP is the same in practice: once your baby is ready for solids, there is no benefit in delaying egg.",
        ],
      },
      {
        heading: "How to introduce egg to your baby",
        paragraphs: [
          "Keep the first try simple, small and at a time when you can watch your baby afterwards.",
        ],
        list: [
          "Choose a morning or early afternoon at home, so you can keep an eye on your baby for at least 2 hours",
          "Cook the egg well: hard-boil it until white and yolk are firm, or scramble it until no runny egg is left",
          "Mash a small amount and stir it into a food your baby already eats, such as potato or avocado",
          "Make egg the only new allergen that day",
          "If all goes well, offer egg again over the next few days and slowly increase the amount",
          "Then keep egg as a regular part of your baby's meals",
        ],
      },
      {
        heading: "Easy ways to serve egg to babies",
        paragraphs: [
          "Once your baby has had egg without a problem, it is a quick, cheap source of protein for busy days.",
        ],
        list: [
          "Mashed hard-boiled egg mixed into potato, sweet potato or avocado",
          "Quarters or strips of hard-boiled egg as a finger food",
          "Firmly scrambled egg with toast fingers",
          "Strips of thin omelette with soft cooked vegetables",
          "Homemade pancakes or muffins made with egg and no added sugar",
        ],
      },
      {
        heading: "Can babies eat runny or lightly cooked eggs?",
        paragraphs: [
          "In the UK, yes, if they are the right eggs. The NHS says hens' eggs stamped with a red lion, or sold in a box marked British Lion, are safe for babies lightly cooked or even raw.",
          "Hens' eggs without the red lion, and all duck, goose and quail eggs, need cooking until both the white and the yolk are solid. Avoid homemade mayonnaise, homemade ice cream, uncooked cake mixture and other desserts made with raw egg unless you know they were made with red lion eggs. If your baby has a severely weakened immune system or is on a medically supervised diet, the NHS advises cooking all eggs thoroughly.",
          "In the US, where the red lion scheme does not apply, AAP guidance describes well-cooked egg, such as scrambled or hard-boiled, for babies. For first tries, well-cooked egg is the simplest choice wherever you live.",
        ],
      },
      {
        heading: "Signs of an egg allergy in babies",
        paragraphs: [
          "Reactions usually start within a few minutes of eating, but can take up to 2 hours. If you see any of these, stop giving egg and contact your GP or health visitor. If you cannot reach them and you are worried, call NHS 111. If your baby has any of the signs of a severe reaction below, call 999 instead.",
        ],
        list: [
          "A red, itchy rash, or eczema that suddenly gets worse",
          "Swollen lips or face",
          "Red, itchy or watery eyes",
          "Sneezing, a runny or blocked nose, coughing or wheezing",
          "Being sick, tummy pain, diarrhoea or constipation",
        ],
      },
      {
        heading: "What to do if your baby has a severe reaction",
        paragraphs: [
          "Anaphylaxis is a serious allergic reaction that comes on fast. If your baby has any of these signs, use their adrenaline auto-injector if they have been prescribed one, then call 999, or your local emergency number, straight away. Tell the call handler you think it is anaphylaxis.",
        ],
        list: [
          "Sudden swelling of the lips, mouth, tongue or throat",
          "Struggling to breathe, breathing very fast, or noisy, wheezy breathing",
          "Skin, lips or tongue turning blue, grey or pale",
          "Going limp or floppy, or not responding as they usually do",
        ],
      },
      {
        heading: "What if my baby has eczema or an existing allergy?",
        paragraphs: [
          "Talk to your GP or health visitor before you introduce egg if your baby has eczema or a diagnosed food allergy, or if food allergies, eczema, asthma or hay fever run in your family. They can advise when and how to start.",
          "If you think egg caused a reaction, stop giving it and get advice before you try it again. Do not start cutting other foods out of your baby's diet on your own, as this can leave gaps in their nutrition. Many children who react to egg grow out of it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much egg should my baby eat?",
        a: "Start with a small taste and build up over several days if there is no reaction. Once egg is a regular food, AAP guidance gives about a third of a well-cooked egg as an example of a typical baby portion. Your baby's appetite will vary, so follow their cues rather than aiming for a fixed amount every time.",
      },
      {
        q: "How often should my baby have egg once it is introduced?",
        a: "Regularly. Once your baby has eaten egg without a problem, the NHS advises keeping it in their usual diet, because this helps lower the risk of an allergy developing. Fitting egg into a few meals across each week, at breakfast, lunch or tea, is an easy way to make that happen.",
      },
      {
        q: "Can my baby have eggs without the British Lion stamp?",
        a: "Yes, as long as they are cooked until both the white and the yolk are solid. This also applies to duck, goose and quail eggs. Only hens' eggs with the red lion stamp, or a box marked British Lion, are considered safe for babies to eat lightly cooked or raw. If your baby has a severely weakened immune system, cook all eggs thoroughly.",
      },
      {
        q: "Should I avoid egg if my baby has eczema?",
        a: "No, but talk to your GP or health visitor before introducing it. The NHS advises this for any baby with eczema. US guidance from the AAP also treats babies with severe eczema as being at higher risk of food allergy, especially to peanut. Delaying egg for a long time is not recommended, so ask early rather than waiting.",
      },
    ],
    relatedSlugs: [
      "introducing-peanut-to-baby",
      "allergen-introduction-meal-ideas",
      "6-month-baby-meal-ideas",
      "baby-breakfast-ideas",
    ],
    sources: [
      NHS_ALLERGIES,
      NHS_FOODS_TO_AVOID,
      NHS_FIRST_FOODS,
      NHS_FROM_6_MONTHS,
      NHS_ANAPHYLAXIS,
      NHS_WHEN_TO_USE_111,
      AAP_ALLERGENS,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "introducing-peanut-to-baby",
    category: "cooking",
    question: "When and how can I introduce peanut to my baby?",
    title: "Introducing peanut to your baby: safe forms, timing and reactions",
    metaTitle: "Introducing peanut to baby: when and how to do it safely",
    description:
      "When and how to start introducing peanut to your baby, safe forms to use, babies who need advice first, and the signs of a reaction to look out for.",
    quickAnswer:
      "You can start introducing peanut to your baby from around 6 months, once they are eating solids. Use smooth peanut butter mixed into food or spread thinly, or finely ground peanuts, never whole or chopped nuts. Offer a small amount as the only new allergen that day, then keep peanut in their diet.",
    bullets: [
      "Peanut can be introduced from around 6 months, one new allergen at a time",
      "Use smooth peanut butter or finely ground peanuts, never whole nuts under 5",
      "Never give nut butter on its own or in thick lumps",
      "If your baby has eczema or a food allergy, or allergies run in the family, talk to your GP or health visitor first",
      "Once tolerated, keep peanut in your baby's diet regularly",
    ],
    sections: [
      {
        heading: "When can my baby have peanut?",
        paragraphs: [
          "From around 6 months, once your baby has started solids. The NHS treats peanut like any other food from this age and says putting it off beyond 6 to 12 months may make a peanut allergy more likely.",
          "US advice differs slightly on timing. The AAP suggests that, for most babies, peanut foods can be offered as early as 4 to 6 months once a baby is ready for solids. In the UK, the advice is to start all solids around 6 months.",
          "You do not need to avoid peanuts while pregnant or breastfeeding unless you are allergic to them yourself.",
        ],
      },
      {
        heading: "Which forms of peanut are safe for babies?",
        paragraphs: [
          "Peanut must be smooth or finely ground. Whole and chopped peanuts are a choking risk, and the NHS says not to give whole nuts to children under 5. US advice from the AAP is to wait until at least age 4.",
        ],
        list: [
          "Smooth peanut butter, thinned with a little breast milk, formula or water and stirred into porridge, yoghurt or fruit puree",
          "Smooth peanut butter spread thinly on toast fingers",
          "Finely ground peanuts mixed into porridge, yoghurt or mashed fruit",
        ],
      },
      {
        heading: "How to introduce peanut, step by step",
        paragraphs: [
          "Keep the first try small and simple.",
        ],
        list: [
          "Choose a day at home and a time when you can watch your baby for at least 2 hours",
          "Mix a small amount of smooth peanut butter or ground peanut into a food your baby already likes",
          "Make peanut the only new allergen that day",
          "Never offer a spoonful or lump of nut butter on its own, as it can stick and cause choking",
          "If there is no reaction, offer it again over the next few days and slowly increase the amount",
          "Keep peanut as a regular part of your baby's meals from then on",
        ],
      },
      {
        heading: "Babies with eczema, a food allergy or allergies in the family",
        paragraphs: [
          "Some babies need advice before peanut is introduced. In the UK, talk to your GP or health visitor first if your baby has eczema or a diagnosed food allergy, or if food allergies, eczema, asthma or hay fever run in your family.",
          "US guidance from the AAP and CDC singles out babies with severe, long-lasting eczema, an egg allergy, or a past immediate reaction to any food. These babies are at higher risk of peanut allergy, and their doctor will advise how and when to offer peanut.",
          "Ask early, ideally before or as you start solids. Because waiting too long can raise the risk of allergy, the aim is a plan, not a long delay.",
        ],
      },
      {
        heading: "Signs of a peanut allergy in babies",
        paragraphs: [
          "Reactions usually appear within minutes, though they can take up to 2 hours. Watch for:",
        ],
        list: [
          "A red, itchy or raised rash, or eczema that flares",
          "Swelling of the lips or face",
          "Red, itchy or watery eyes",
          "Sneezing, a runny nose, coughing or wheezing",
          "Being sick, tummy pain or diarrhoea",
        ],
      },
      {
        heading: "What to do if your baby reacts to peanut",
        paragraphs: [
          "If the signs are mild, stop giving peanut and contact your GP or health visitor, who can refer you for specialist advice if needed. If you cannot reach them and you are worried, call NHS 111. Do not try peanut again until you have had advice.",
          "Sudden swelling of the lips, tongue, mouth or throat, struggling to breathe or breathing very fast, noisy or wheezy breathing, turning blue, grey or pale, or becoming floppy or unresponsive are signs of anaphylaxis. If your baby has any of them, use their adrenaline auto-injector if they have one, then call 999, or your local emergency number, straight away. Say you think it is anaphylaxis.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I give my baby peanut butter on toast?",
        a: "Yes, from around 6 months, as long as it is smooth peanut butter spread thinly on toast fingers. Thick layers or lumps of nut butter can stick in the mouth and throat. Never give peanut butter on its own from a spoon. You can also thin it with a little milk or water and stir it into porridge.",
      },
      {
        q: "How much peanut should my baby have?",
        a: "Start with a small amount mixed into food and build up over several days if there is no reaction. AAP guidance gives about 2 teaspoons of peanut butter as an example of a regular portion once peanut is part of the diet. After that, keep offering it routinely rather than as an occasional treat.",
      },
      {
        q: "Can my baby have other nuts as well?",
        a: "Yes. Tree nuts such as almonds and cashews can be introduced from around 6 months too, either finely ground or as smooth nut butter. Introduce each one on a separate day so you can spot a reaction. The same rule applies: no whole or chopped nuts for children under 5.",
      },
      {
        q: "My older child has a peanut allergy. Should I avoid peanut for the baby?",
        a: "Do not avoid it without advice, but talk to your GP or health visitor before you start. The NHS recommends this for any baby with a family history of allergy. They can tell you whether your baby needs a referral or can try peanut at home, and how to do it safely.",
      },
      {
        q: "When can my child eat whole peanuts?",
        a: "Not before 5 years old in the UK. Whole and chopped nuts are small, hard and easy to inhale, which makes them a serious choking risk for young children. In the US, the AAP advises waiting until at least age 4. Until then, use ground nuts or smooth nut butters in food.",
      },
    ],
    relatedSlugs: [
      "introducing-egg-to-baby",
      "allergen-introduction-meal-ideas",
      "foods-to-avoid-for-babies",
      "baby-breakfast-ideas",
    ],
    sources: [
      NHS_ALLERGIES,
      NHS_FOODS_TO_AVOID,
      NHS_ANAPHYLAXIS,
      NHS_WHEN_TO_USE_111,
      AAP_ALLERGENS,
      CDC_INTRODUCE_SOLIDS,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "drinks-for-babies",
    category: "cooking",
    question: "What drinks can I give my baby?",
    title: "Drinks for babies: water, milk, juice and cups by age",
    metaTitle: "Drinks for babies: what to give and when, by age",
    description:
      "Which drinks suit your baby at each age: water, breast milk, formula, cows' milk, juice and the best cup, plus where UK and US advice differ.",
    quickAnswer:
      "The best drinks for babies are breast milk or first infant formula until 12 months, plus sips of water from a cup with meals from around 6 months. From 12 months, whole or semi-skimmed cows' milk and water become the main drinks. Babies do not need juice, squash or other sweet drinks.",
    bullets: [
      "Under 6 months, breast milk or first infant formula is all your baby needs",
      "From around 6 months, offer sips of water with meals in an open or free-flow cup",
      "Cows' milk can go into food from 6 months, but not as a main drink until 12 months",
      "Babies under 12 months do not need juice, and sweet drinks harm teeth",
      "UK and US advice differ on water amounts, juice, milk fat and cups",
    ],
    sections: [
      {
        heading: "Does my baby need water before 6 months?",
        paragraphs: [
          "Usually not. Fully breastfed babies do not need any water until they start solids. In hot weather they may simply want to feed more often.",
          "Formula-fed babies under 6 months may need a few small sips of water in hot weather, as well as their usual feeds. Any water you give a baby under 6 months should be tap water that has been boiled and then left to cool.",
        ],
      },
      {
        heading: "When can my baby drink water?",
        paragraphs: [
          "From around 6 months, when your baby starts solids. Offer a few sips from a cup at mealtimes. From this age, tap water no longer needs boiling first.",
          "The NHS does not set an amount. Water is for learning to drink from a cup and for thirst alongside food, not a replacement for milk. US advice is more specific: the AAP suggests around 120 to 240ml (4 to 8oz) of water a day from about 6 months.",
        ],
      },
      {
        heading: "What milk should my baby drink before 12 months?",
        paragraphs: [
          "Breast milk or first infant formula should stay your baby's main drink for the whole first year. You can keep breastfeeding for as long as you both want.",
        ],
        list: [
          "From around 6 months, cows' milk is fine in cooking or stirred into food, but cows', goats' and sheep's milk should not be a main drink before 12 months, as they do not have enough iron and other nutrients for babies",
          "Follow-on formula is not suitable under 6 months and is not needed after that",
          "Goodnight milks are not needed, and there is no evidence they help babies settle or sleep longer",
          "Only use soya formula if a health professional suggests it",
        ],
      },
      {
        heading: "When can my baby have cows' milk as a drink?",
        paragraphs: [
          "From 12 months. In the UK, pasteurised whole or semi-skimmed cows' milk can then become a main drink, offered in a cup. Aim for at least 350ml of milk a day, or 2 servings of dairy foods such as cheese or yoghurt.",
          "US advice differs here. The AAP recommends whole milk from 12 to 24 months, then lower-fat milk from age 2. It also only recommends soya as a plant drink in place of dairy milk.",
        ],
        list: [
          "Formula, follow-on, growing-up and toddler milks are not needed after 12 months",
          "Skimmed and 1% milk are not suitable as a main drink before 5, though they can be used in cooking from 1",
          "Unsweetened, calcium-fortified soya, oat or almond drinks are fine from 1 year in the UK",
          "Rice drinks are not suitable for children under 5, because of their arsenic levels",
          "Never give unpasteurised milk",
        ],
      },
      {
        heading: "Can babies have juice or other drinks?",
        paragraphs: [
          "Juice and smoothies are unnecessary for babies under 12 months. The NHS says that if you do give them, dilute 1 part juice with 10 parts water and only offer it with meals, to protect teeth. The AAP is stricter and advises no juice at all before 12 months.",
          "Squash, flavoured milk, fizzy drinks, diet or reduced-sugar drinks, baby and herbal drinks, tea and coffee are not suitable for babies. Children aged 4 and under should not have slush ice drinks.",
        ],
      },
      {
        heading: "Which cup is best for my baby?",
        paragraphs: [
          "Start a cup from around 6 months. The NHS recommends an open cup, or a lidded free-flow cup with no valve, because it teaches your baby to sip rather than suck and is kinder to teeth.",
          "Once your baby is 1, the NHS advises moving away from bottles. Only ever put breast milk, formula or water in a bottle, with nothing added. US advice allows a little longer: the AAP says sippy and straw cups are fine while learning, the switch from bottles can finish between 12 and 18 months, and children should use an open cup by about 2.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to boil tap water for my 6-month-old?",
        a: "No. Once your baby is over 6 months, tap water given as a drink does not need boiling first. Under 6 months, any water you offer as a drink should be boiled and then cooled. If you are unsure about the water where you live, ask your health visitor.",
      },
      {
        q: "How much water should my baby drink?",
        a: "In the UK there is no set amount. Offer sips with each meal and let your baby take what they want, since milk still provides most of their fluid. US advice suggests about 120 to 240ml a day from 6 months. In hot weather, offer sips of water more often, alongside usual milk feeds.",
      },
      {
        q: "Can my baby have cows' milk on cereal before 12 months?",
        a: "Yes. From around 6 months, pasteurised whole cows' milk can be mixed into cereal, porridge or mashed food, and used in cooking. It just should not replace breast milk or formula as your baby's main drink until they are 12 months old. Pasteurised full-fat cheese and plain yoghurt with no added sugar are also fine from 6 months.",
      },
      {
        q: "When should my baby stop using a bottle?",
        a: "The NHS advises discouraging bottle feeding once your baby is 1, and moving to an open or free-flow cup. Start practising with a cup from around 6 months so the change is easier. US advice from the AAP aims to finish the move off bottles between 12 and 18 months.",
      },
      {
        q: "Is diluted juice okay for my baby?",
        a: "It is not needed. Water and milk are the best drinks. If you choose to offer juice or a smoothie before 12 months, the NHS suggests diluting it 1 part to 10 parts water and serving it only at mealtimes, which helps protect teeth. In the US, juice is not advised at all before 12 months.",
      },
    ],
    relatedSlugs: [
      "how-much-should-my-baby-eat",
      "baby-constipation-starting-solids",
      "6-month-baby-meal-ideas",
      "12-month-baby-meal-ideas",
    ],
    sources: [
      NHS_DRINKS,
      NHS_YOUNG_CHILDREN,
      NHS_FIRST_FOODS,
      AAP_DRINKS_UNDER_5,
      AAP_BOTTLE_TO_CUP,
    ],
    modifiedAt: "2026-10-13",
  },
  {
    slug: "baby-constipation-starting-solids",
    category: "cooking",
    question: "Why is my baby constipated after starting solids?",
    title:
      "Baby constipation after starting solids: what is normal and what helps",
    metaTitle: "Baby constipation after starting solids: what helps",
    description:
      "Baby constipation after starting solids: what normal poo looks like, the signs of constipation, food and drink changes that help, and when to see a GP.",
    quickAnswer:
      "Baby constipation after starting solids is common, because new food changes how poo looks and how often it comes. Your baby may be constipated if they poo fewer than 3 times a week, or pass hard, pellet-like poo with straining or pain. More fluids, fruit and vegetables can help, and a GP can advise.",
    bullets: [
      "Poo usually becomes firmer, smellier and more varied in colour once solids start",
      "Hard pellets, painful straining or fewer than 3 poos a week can mean constipation",
      "Offer water with meals, keep milk feeds going and include fruit and vegetables",
      "Do not give laxatives or juice without advice from your GP or health visitor",
      "See your GP early if you think your baby is constipated",
    ],
    sections: [
      {
        heading: "What does normal baby poo look like after starting solids?",
        paragraphs: [
          "Once your baby starts solids, poo usually becomes thicker, smells stronger and changes colour from day to day. This is expected and not a sign of a problem on its own.",
          "Food often shows up in the nappy. Green vegetables can turn poo dark green and beetroot can turn it red. You may also spot whole bits, such as pea or sweetcorn skins and tomato peel, because your baby's gut is still learning to break new foods down.",
          "If poo becomes very runny, watery or full of mucus, the AAP suggests offering less solid food and introducing new foods more slowly. If that carries on, talk to your GP.",
        ],
      },
      {
        heading: "Signs of constipation in babies",
        paragraphs: [
          "Constipation is about poo being hard and difficult to pass, not just about how often it comes. Your baby may be constipated if:",
        ],
        list: [
          "They have done fewer than 3 poos in the past week, or far fewer than usual for them",
          "Their poo is large and hard, or comes out as small dry pellets",
          "They strain or cry in pain when pooing, or strain for more than 10 minutes without passing anything",
          "There is a little blood in or on hard poo",
          "They are off their food, or have tummy pain that eases after a poo",
        ],
      },
      {
        heading: "Is straining normal for babies?",
        paragraphs: [
          "Some straining can be. Many babies grunt, go red in the face and even cry while they poo, and the AAP says straining on its own is not necessarily a worry. The NHS does list straining or pain when pooing among the signs of constipation, so look at the poo as well. Soft poo that comes out in the end is reassuring. Hard or pellet-like poo, or a baby who seems in pain, is worth getting checked.",
        ],
      },
      {
        heading: "Why can starting solids cause constipation?",
        paragraphs: [
          "Common causes of constipation in young children include not eating enough high-fibre foods, such as fruit and vegetables, and not drinking enough.",
          "Occasionally constipation can be a sign of a food allergy. Other signs can include a rash, eczema flaring or being sick. A reaction to cows' milk can take up to 3 days to appear. If you suspect a food, talk to your GP or health visitor rather than cutting it out yourself.",
        ],
      },
      {
        heading: "What helps baby constipation after starting solids?",
        paragraphs: [
          "Small changes to food and drink are the usual first step.",
        ],
        list: [
          "Keep breast or formula feeds going as normal",
          "Offer a few sips of water in a cup at every meal",
          "Formula-fed babies can have extra water between feeds; under 6 months it must be cooled boiled water",
          "Include fruit and vegetables at each meal, such as pureed prunes, pear, cooked apple or soft broccoli",
          "Offer other fibre-rich foods, such as porridge oats, wholemeal toast fingers and mashed beans or lentils",
          "Give your baby plenty of time to move and play on the floor each day",
        ],
      },
      {
        heading: "Can I give my baby juice or laxatives for constipation?",
        paragraphs: [
          "Only on advice. In the UK, laxatives are often part of treatment for babies who are eating solids, but a GP should recommend them and the dose.",
          "UK and US advice differ on juice. The NHS says babies under 12 months do not need juice. The AAP usually advises no juice before 12 months, but says a little apple or pear juice can help a constipated baby. Ask your health visitor or GP before trying it.",
        ],
      },
      {
        heading: "When to see a GP about baby constipation",
        paragraphs: [
          "If you think your baby is constipated, the NHS advises taking them to a GP and getting help early, because the longer constipation goes on, the harder it can be to fix.",
          "Go sooner if there is blood in your baby's poo, if pooing is clearly painful, if they are off their food, or if constipation comes with other signs of allergy. Call NHS 111 if you are worried and cannot reach your GP. If your baby seems seriously unwell, call 999.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should a baby poo after starting solids?",
        a: "It varies a lot between babies. Some poo several times a day and others every couple of days. What matters most is that the poo is soft and comes out without pain. Fewer than 3 poos in a week, especially if they are hard or pellet-like, can point to constipation.",
      },
      {
        q: "Is it normal to see bits of food in my baby's poo?",
        a: "Yes. Undigested pieces such as pea and sweetcorn skins, tomato peel or bits of carrot are very common once babies eat solids, because their digestion is still maturing. Colour changes from foods like green vegetables or beetroot are normal too. Very watery poo or poo full of mucus is worth mentioning to your GP.",
      },
      {
        q: "Can I give my baby fruit juice for constipation?",
        a: "Check with your health visitor or GP first. The NHS says babies under 12 months do not need juice, while US advice from the AAP allows a small amount of apple or pear juice for a constipated baby. Pureed prunes or pear mixed into food are an easy option you can try first.",
      },
      {
        q: "Can constipation be a sign of a food allergy?",
        a: "Sometimes. The NHS lists constipation among possible signs of a food allergy, along with others such as a rash, eczema getting worse, being sick or diarrhoea. Reactions to cows' milk can take up to 3 days. If you notice a pattern with a food, talk to your GP or health visitor rather than removing it yourself.",
      },
      {
        q: "Should I keep giving solids if my baby is constipated?",
        a: "Yes, but think about what is on the plate. Offer plenty of fruit, vegetables, oats, beans and lentils, along with water at meals and usual milk feeds. These are the changes most likely to soften poo. If your baby is still uncomfortable, or you are worried, see your GP.",
      },
    ],
    relatedSlugs: [
      "drinks-for-babies",
      "how-much-should-my-baby-eat",
      "first-baby-foods",
      "baby-meal-ideas",
    ],
    sources: [
      NHS_CONSTIPATION_CHILDREN,
      NHS_ALLERGIES,
      NHS_DRINKS,
      NHS_WHEN_TO_USE_111,
      AAP_STARTING_SOLIDS,
      AAP_INFANT_CONSTIPATION,
    ],
    modifiedAt: "2026-10-13",
  },
];
