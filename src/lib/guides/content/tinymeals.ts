import type { GuideContent } from "@/lib/guides/types";
import {
  AAP_ALLERGENS,
  CDC_INTRODUCE_SOLIDS,
  NHS_7_TO_9_MONTHS,
  NHS_ALLERGIES,
  NHS_CHOKING_GAGGING,
  NHS_DRINKS,
  NHS_FIRST_FOODS,
  NHS_FOODS_TO_AVOID,
  NHS_FOOD_HYGIENE,
  NHS_FROM_6_MONTHS,
  NHS_MEAL_IDEAS,
  NHS_PREPARING_FOOD,
  NHS_STOP_CHOKING,
  NHS_STORING_REHEATING,
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
          "Tea: mashed sweet potato with chickpeas and cauliflower",
          "Tea: shepherd's pie made with beef, lamb or lentils, with green vegetables",
          "Tea: fish poached in milk with potato, broccoli and carrot",
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
        a: "From around 6 months, offer sips of water with meals in an open cup or a free-flow cup without a valve. Breast milk or first infant formula stays the main drink until 12 months. Avoid sugary drinks such as fruit juice, squash and fizzy drinks, and do not give cows' milk as a main drink before 12 months.",
      },
      {
        q: "How much food should my baby eat at each meal?",
        a: "Let your baby lead. Start with a few spoonfuls or a few pieces and offer more if they seem keen. Signs they have had enough include closing their mouth firmly or turning their head away. Appetite changes from day to day, so do not force food or worry about one small meal.",
      },
    ],
    relatedSlugs: [
      "first-baby-foods",
      "baby-breakfast-ideas",
      "baby-dinner-ideas",
      "baby-led-weaning-meal-ideas",
    ],
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
          "The NHS advises starting solid foods at about 6 months. In the US, the CDC also advises about 6 months, in line with the AAP, and says introducing foods before 4 months is not recommended. If your baby was born prematurely, ask your health visitor or GP when to start.",
          "Until about 6 months, breast milk or first infant formula gives your baby everything they need, apart from vitamin D for some babies. At first, the aim is getting used to eating, not how much they eat.",
        ],
      },
      {
        heading: "Signs your baby is ready for solids",
        paragraphs: [
          "The NHS describes 3 signs that usually appear together from around 6 months:",
        ],
        list: [
          "They can stay in a sitting position and hold their head steady",
          "They can coordinate eyes, hands and mouth, so they can look at food, pick it up and put it in their mouth",
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
          "Start with single vegetables and fruit, soft cooked and mashed or offered as soft finger foods. Include less sweet vegetables such as broccoli, cauliflower and spinach early, to help your baby get used to a range of flavours.",
          "Offer a few teaspoons or a few pieces once a day, at a time that suits you both. You can then add other food groups week by week, including iron-rich foods such as meat, fish, eggs, beans, lentils and tofu, and full-fat pasteurised yoghurt and cheese with no added sugar.",
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
        a: "The NHS advises waiting until about 6 months, when most babies show all 3 signs of readiness. The CDC says solids are not recommended before 4 months. If you are thinking of starting earlier, or your baby was born prematurely, talk to your health visitor or GP first.",
      },
      {
        q: "Does my baby need water when starting solids?",
        a: "From around 6 months, offer sips of water with meals in an open cup or a free-flow cup without a valve. This helps your baby learn to sip and is better for their teeth. Breast milk or first infant formula remains the main drink until 12 months. Until then, cows' milk should only be used in cooking or mixed into food.",
      },
    ],
    relatedSlugs: [
      "6-month-baby-meal-ideas",
      "baby-led-weaning-meal-ideas",
      "allergen-introduction-meal-ideas",
      "baby-meal-ideas",
    ],
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
          "Baby-led weaning means giving your baby only finger foods from the start of solids and letting them feed themselves, instead of spoon feeding purees. The NHS says there is no higher risk of choking when babies feed themselves than when they are spoon fed.",
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
          "Safe first finger foods are soft and easy to break up in the mouth. The NHS suggests pieces about the size of your own finger, long enough to hold in their fist with a bit sticking out.",
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
          "Do not give whole nuts or popcorn to children under 5, or whole raisins and dried fruit to babies under 1",
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
          "Give up to 5 back blows: sit down and lay your baby face down along your thigh or forearm, supporting their head and neck with your hand. Give sharp blows with the heel of your other hand in the middle of the back, between the shoulder blades, and check for the object after each one",
          "If that does not work, give up to 5 chest thrusts: lay your baby face up along your thighs, feet towards you and head lower than their feet. Put 2 fingers in the middle of the chest, just below the nipple line, give sharp pushes, and check for the object after each one",
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
    relatedSlugs: [
      "first-baby-foods",
      "6-month-baby-meal-ideas",
      "9-month-baby-meal-ideas",
      "baby-breakfast-ideas",
    ],
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
          "Start with a few teaspoons or a few pieces, once a day, at a time that suits you both. Increase the amount and variety gradually over the following weeks. Your baby does not need 3 meals a day yet.",
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
          "Talk to your GP or health visitor first if your baby already has a food allergy or eczema, or if there is a family history of food allergies, eczema, asthma or hay fever.",
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
          "Breast milk or first infant formula stays the main drink until 12 months. From around 6 months, offer sips of water with meals in an open cup or a free-flow cup without a valve, which is better for teeth.",
          "Cows' milk can be used in cooking from 6 months but should not be a main drink before 12 months. Avoid sugary drinks such as fruit juice, squash and fizzy drinks.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many times a day should a 6-month-old eat solids?",
        a: "Once a day is enough at first. The NHS suggests one small meal at a time that suits you both, then increasing the amount and variety gradually. From about 7 months, babies move towards 3 meals a day. The WHO suggests 2 to 3 meals a day for babies aged 6 to 8 months, so build up at your baby's pace.",
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
    relatedSlugs: [
      "first-baby-foods",
      "9-month-baby-meal-ideas",
      "allergen-introduction-meal-ideas",
      "baby-led-weaning-meal-ideas",
    ],
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
          "A wide variety of food helps your baby get the energy and nutrients they need, including iron. The NHS suggests including foods that contain iron, such as meat, fish, fortified breakfast cereals, dark green vegetables and pulses. Protein foods also provide zinc.",
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
          "Tea: rice with mashed peas and soft courgette sticks",
          "Tea: mashed tinned salmon with couscous and peas",
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
    relatedSlugs: [
      "6-month-baby-meal-ideas",
      "12-month-baby-meal-ideas",
      "baby-led-weaning-meal-ideas",
      "baby-dinner-ideas",
    ],
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
          "Tea: shepherd's pie made with beef, lamb, lentils or vegetarian mince, with green vegetables",
          "Tea: fish poached in milk with potato, broccoli and carrot",
          "Tea: mashed sweet potato with chickpeas and cauliflower",
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
          "From 12 months, pasteurised whole or semi-skimmed cows' milk can be your child's main drink. The NHS suggests at least 350ml (12oz) of milk a day, or 2 servings of foods made from milk, such as yoghurt or cheese. If you are breastfeeding, you can carry on alongside food and other drinks.",
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
    relatedSlugs: [
      "9-month-baby-meal-ideas",
      "baby-breakfast-ideas",
      "baby-dinner-ideas",
      "baby-meal-ideas",
    ],
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
          "Offer sips of water in an open cup or a free-flow cup without a valve from around 6 months. Breast milk or first infant formula is still the main drink until 12 months. Babies do not need fruit juice or smoothies. The NHS advises avoiding sugary drinks for young children, which also helps prevent tooth decay.",
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
    relatedSlugs: [
      "baby-meal-ideas",
      "baby-dinner-ideas",
      "first-baby-foods",
      "12-month-baby-meal-ideas",
    ],
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
          "Mashed sweet potato with chickpeas and cauliflower",
          "Shepherd's pie made with beef, lamb, lentils or vegetarian mince, with green vegetables",
          "Rice with mashed peas and soft courgette sticks",
          "Minced chicken and vegetable casserole with mashed potato",
          "Mashed tinned salmon with couscous and peas",
          "Fish poached in milk with potato, broccoli and carrot",
          "Mild lamb or lentil curry with rice, made without salt",
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
        a: "Yes, if they were stored safely. Cool leftovers within 1 to 2 hours, keep them in the fridge, and use them within 2 days. Reheat only once until steaming hot all the way through, then let them cool before serving. Cooked rice should be eaten within 24 hours.",
      },
      {
        q: "How much should my baby eat at lunch and dinner?",
        a: "Let your baby guide you. Start with a small amount and offer more if they want it. Signs they are full include closing their mouth or turning their head away. Babies under 12 months still get much of their nutrition from milk, so a small meal is fine.",
      },
    ],
    relatedSlugs: [
      "recipes-from-leftovers",
      "baby-meal-ideas",
      "baby-breakfast-ideas",
      "9-month-baby-meal-ideas",
    ],
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
          "The NHS advises introducing foods that can cause allergic reactions from around 6 months, alongside other solid foods. The NHS says delaying peanut and hen's egg beyond 6 to 12 months may increase the risk of allergy to them. The AAP says delaying allergens does not prevent allergies, and that early introduction of peanut lowered the risk of peanut allergy in babies at high risk.",
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
          "Anaphylaxis is a severe allergic reaction and a medical emergency that needs urgent treatment. It comes on quickly and can cause breathing problems, a swollen throat or tongue, or a raised, itchy rash. Call 999, or your local emergency number, straight away.",
          "If your baby already has a food allergy or eczema, or there is a family history of food allergies, eczema, asthma or hay fever, talk to your GP or health visitor before introducing allergens. The AAP advises the same for babies with severe or persistent eczema, or who have had an allergic reaction to a food such as egg.",
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
        a: "Yes, from around 6 months, as smooth peanut butter rather than whole or chopped peanuts, which are a choking risk until 5 years. Thin it with a little milk or water and stir it into porridge or fruit, or spread it thinly on toast. Never give nut butter on its own.",
      },
      {
        q: "How often should my baby eat allergens once introduced?",
        a: "Keep them as a regular part of your baby's diet once they have had them without a reaction. The NHS says this helps minimise the risk of allergy, and the AAP recommends serving them routinely. Rotating egg, peanut, dairy, wheat and fish through the week is a simple way to do it.",
      },
      {
        q: "Should I introduce allergens if my baby has eczema?",
        a: "Talk to your GP or health visitor first. The NHS advises this if your baby has eczema or a food allergy, or if there is a family history of allergies, eczema, asthma or hay fever. The AAP advises the same for babies with severe or persistent eczema, so the doctor can advise how and when to introduce peanut.",
      },
    ],
    relatedSlugs: [
      "first-baby-foods",
      "6-month-baby-meal-ideas",
      "baby-breakfast-ideas",
      "baby-meal-ideas",
    ],
    sources: [
      NHS_ALLERGIES,
      NHS_FROM_6_MONTHS,
      NHS_FOODS_TO_AVOID,
      AAP_ALLERGENS,
    ],
    modifiedAt: "2026-10-12",
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
          "Storage matters more when you are cooking for a baby. The NHS advice is to cool food as quickly as possible, ideally within 1 to 2 hours, then refrigerate or freeze it. Do not put warm or hot food in the fridge.",
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
          "Reheat cooked food only once. Heat it until it is steaming hot all the way through, then let it cool before giving it to your baby. If you use a microwave, stir well to remove hot spots and check the temperature before feeding.",
          "Defrost frozen food in the fridge overnight or with the microwave defrost setting, never at room temperature. Eat food defrosted in the fridge within 24 hours, and food defrosted in the microwave straight away. Throw away any half-eaten portions, so only serve what you think your baby will eat. Food carried out without chilling should be eaten within 4 hours, and any leftovers thrown away.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can baby food leftovers stay in the fridge?",
        a: "The NHS says food kept in the fridge should be used within 2 days. Cooked rice is the exception and should be eaten within 24 hours. Cool food within 1 to 2 hours before refrigerating, and do not put warm or hot food in the fridge. Freeze anything you will not use in time.",
      },
      {
        q: "Can I reheat baby food twice?",
        a: "No. The NHS advises reheating cooked food only once. Heat it until steaming hot all the way through, then let it cool before serving. To avoid waste, freeze food in small portions and defrost only what you need. Throw away anything your baby has eaten from.",
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
];
