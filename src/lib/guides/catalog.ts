import type {
  GuideApp,
  GuideContent,
  GuidePage,
  GuideSection,
  GuideSource,
} from "@/lib/guides/types";
import { BLOOMS_GUIDES } from "@/lib/guides/content/tinyblooms";
import { BUNDLE_GUIDES } from "@/lib/guides/content/tinybundle";
import { NAPS_GUIDES } from "@/lib/guides/content/tinynaps";
import { LAYERS_GUIDES } from "@/lib/guides/content/tinylayers";
import { MEALS_GUIDES } from "@/lib/guides/content/tinymeals";
import { GUIDES_MOVED_TO_BLOG } from "@/lib/guides/redirects";
import { getLayersArticle } from "@/lib/tinylayers/articles";
import {
  CHEST_CHECK,
  MEDICAL_DISCLAIMER,
  cToF,
  outdoorOutfitFor,
  sleepOutfitFor,
} from "@/lib/guides/outfits";
import {
  AAP_CAR_SEAT_WINTER,
  AAP_SAFE_SLEEP,
  AAP_SUN,
  AAP_WINTER,
  NHS_DRESS,
  NHS_HEAT,
  NHS_HEATWAVE,
  NHS_SIDS,
  NHS_SUN_BABY,
} from "@/lib/guides/content/sources";

const DATE = "2026-07-24";

const LAYERS_CTA = {
  ctaApp: "tinylayers" as const,
  ctaLabel: "Open TinyLayers",
  ctaHref: "/tinylayers",
  ctaBlurb:
    "Not sure every day? TinyLayers calculates the right outfit from your baby’s age, the temperature, and whether they’re sleeping, in a stroller, carrier, or car seat.",
};

function layersPage(
  partial: Omit<
    GuidePage,
    | "app"
    | "ctaApp"
    | "ctaLabel"
    | "ctaHref"
    | "ctaBlurb"
    | "publishedAt"
    | "modifiedAt"
  > & { relatedSlugs?: string[] },
): GuidePage {
  return {
    app: "tinylayers",
    publishedAt: DATE,
    modifiedAt: DATE,
    ...LAYERS_CTA,
    ...partial,
    relatedSlugs: partial.relatedSlugs ?? [],
  };
}

/** Date the generated temperature and age guides were last reviewed. */
const GENERATED_REVIEWED = "2026-10-12";

/** TOG ratings are TinyLayers starting points; health bodies do not set them. */
const TOG_NOTE =
  "These TOG ratings are TinyLayers starting points, not NHS or AAP rules. Your sleeping bag maker's chart and your baby's own temperature come first.";

/** Safe sleep checklist shared by every sleep band (NHS SIDS page, AAP safe sleep). */
const SAFE_SLEEP_LIST = [
  "Put your baby on their back for every sleep, with their feet at the foot of the cot.",
  "Use a firm, flat mattress, with no pillows, bumpers, pods, nests or soft toys.",
  "No loose blankets or duvets. A well-fitting baby sleeping bag is the simplest option.",
  "No hat or head covering indoors, and nothing that could cover their face.",
  "Never use a weighted sleeping bag, weighted swaddle or weighted blanket.",
  "For at least the first 6 months, keep the cot in your room, for naps as well as nights.",
];

type BandFaq = { q: string; a: string };

type OutdoorBand = {
  slug: string;
  min: number;
  max: number;
  chip: string;
  label: string;
  description: string;
  quickAnswer: string;
  bullets: string[];
  outfitIntro: string[];
  checkTip: string;
  pram: string;
  carrier: string;
  carSeat: string;
  sunHeading: string;
  sun: string[];
  extraHeading: string;
  extra: string[];
  extraList?: string[];
  faqs: BandFaq[];
  sources: GuideSource[];
  relatedSlugs: string[];
};

/** Outdoor temperature bands: the outfit changes meaningfully between these. */
export const OUTDOOR_BANDS: readonly OutdoorBand[] = [
  {
    slug: "baby-clothes-10-14-degrees",
    min: 10,
    max: 14,
    chip: "12°C",
    label: "10–14°C",
    description:
      "What your baby should wear at 10–14°C (50–57°F): layers for the pram, carrier and car seat, hats and mittens, and how to check they are warm enough.",
    quickAnswer:
      "At 10–14°C (50–57°F), dress your baby in a long-sleeved vest, a sleepsuit and a warm cardigan, then a pramsuit or coat, a hat, socks and mittens for the pram. Take the coat off for the car seat and the hat off indoors. Check the back of their neck to confirm.",
    bullets: [
      "Vest, sleepsuit, warm cardigan, then a pramsuit or coat",
      "Hat, socks and mittens outside, hat off as soon as you are indoors",
      "No coat or snowsuit under car seat straps",
      "Check the back of the neck, not their hands",
    ],
    outfitIntro: [
      "This is coat weather for most adults. The NHS rule of thumb is to dress your baby in one more layer than you are wearing. If you are in a top, a jumper and a coat, your baby needs a vest, a sleepsuit, a cardigan and a warm outer layer.",
      "Several thin layers help keep children warm and dry (AAP), and they are easier to peel off as you go in and out of shops, buses and cafés. Wind and drizzle make 12°C feel much colder, so a pram rain cover or a pramsuit with a hood earns its place on wet days.",
    ],
    checkTip:
      "At this temperature the most common slip is leaving the pramsuit and hat on once you are inside. Shops, buses and cars are warm, and The NHS advises removing hats and outer layers the moment you get inside, even if that wakes your baby.",
    pram: "In the pram, a pramsuit or footmuff over the vest, sleepsuit and cardigan keeps your baby warm, with a hat and mittens. If you add a blanket, use a lightweight cellular one tucked around their legs, and keep it away from their face.",
    carrier:
      "In a carrier your baby shares your body warmth, so a vest, sleepsuit and cardigan is often enough under a carrier cover or your coat zipped around you both. Keep their face clear, and add a hat and socks, as their head and feet stick out.",
    carSeat:
      "In the car seat, take the pramsuit or coat off first. The AAP warns that bulky coats and snowsuits under the harness flatten in a crash and leave the straps too loose. Buckle your baby in their thin layers, check you cannot pinch any slack in the straps, then lay a blanket or their coat over the top.",
    sunHeading: "Hats, mittens and socks at 10–14°C",
    sun: [
      "A warm hat helps outside at this temperature, especially in wind. Mittens and socks or booties keep small hands and feet comfortable.",
      "Hats are for outdoors only. Take them off as soon as you are indoors, and never let your baby sleep in a hat inside.",
    ],
    extraHeading: "Wet days, wind and newborns at 10–14°C",
    extra: [
      "Rain makes clothes cold fast. The AAP advises changing children out of wet clothes straight away, so pack a spare sleepsuit, socks and mittens.",
      "Young babies struggle to keep their body temperature steady (NHS), so check a newborn more often than an older baby. If your baby was born prematurely or had a low birthweight, ask your health visitor how to dress them for cold days.",
    ],
    faqs: [
      {
        q: "Does my baby need a pramsuit at 12°C?",
        a: "Usually yes for a walk in the pram, especially if it is windy or damp. A pramsuit or footmuff over a vest, sleepsuit and cardigan matches the NHS rule of one more layer than you. If the sun comes out and the back of their neck feels sweaty, unzip it or take the cardigan off.",
      },
      {
        q: "Can my baby wear a coat in the car seat at 10–14°C?",
        a: "No. The AAP advises against bulky coats and snowsuits under the harness, because the padding squashes in a crash and the straps end up too loose. Take the coat off, buckle up in thin layers, check the straps are snug, then put the coat or a blanket over the top.",
      },
      {
        q: "Should my baby wear mittens at 14°C?",
        a: "Mittens are optional at 14°C and more useful nearer 10°C or on a windy day. Cool hands are normal in babies, so they are not a reliable sign. Feel the back of the neck or the chest instead. If that is warm and dry, your baby is warm enough with or without mittens.",
      },
      {
        q: "Is 10°C too cold to take a baby out?",
        a: "A walk at 10°C is part of everyday life with a baby. Dress them in one more layer than you, as the NHS suggests, add a hat and mittens, and keep them out of strong wind and rain. Check the back of their neck now and then, and take layers off once you are back inside.",
      },
    ],
    sources: [NHS_DRESS, NHS_SIDS, AAP_WINTER, AAP_CAR_SEAT_WINTER],
    relatedSlugs: [
      "baby-clothes-15-18-degrees",
      "baby-car-seat-clothing",
      "baby-stroller-clothing",
      "how-many-layers-should-baby-wear",
    ],
  },
  {
    slug: "baby-clothes-15-18-degrees",
    min: 15,
    max: 18,
    chip: "15°C",
    label: "15–18°C",
    description:
      "What your baby should wear at 15–18°C (59–64°F): vest, sleepsuit and cardigan, pram and car seat tips, sun on cool days and how to check they are comfy.",
    quickAnswer:
      "At 15–18°C (59–64°F), dress your baby in a long-sleeved vest, a sleepsuit and a cardigan or light jacket, with socks and a thin hat if it is breezy. Skip the pramsuit unless it is windy or wet. Carry a light blanket for the pram and check the back of their neck after a few minutes.",
    bullets: [
      "Vest, sleepsuit and a cardigan or light jacket",
      "Thin hat if breezy, sun hat if bright",
      "A light cellular blanket in the pram, not a pramsuit",
      "Car seat: cardigan on, padded jacket off",
    ],
    outfitIntro: [
      "This is jumper weather: a typical spring or September day, or a cool summer morning. If you are comfortable in a long-sleeved top and a light jacket, the NHS rule of one extra layer gives your baby a vest, a sleepsuit and a cardigan or light jacket.",
      "The tricky part at 15–18°C is how fast it changes. Sun on a sheltered bench can feel like 22°C, and a breezy park in the shade can feel like 12°C. Dress for the shade and the wind, then take the cardigan off in the sunshine, rather than starting light and running out of layers.",
    ],
    checkTip:
      "Check after you have been walking for a while and again after you stop. A baby who was warm in the sun can cool down quickly in the shade, and a baby in a sheltered pram can get warmer than you expect. If the neck is damp, take off the cardigan first, as it is the easiest layer to remove.",
    pram: "In the pram, a vest, sleepsuit and cardigan is usually enough, with a lightweight cellular blanket over their legs that you can fold back. A heavy pramsuit tends to be too warm at 17 or 18°C unless it is windy.",
    carrier:
      "In a carrier, your body warmth means a vest and sleepsuit is often enough, with a cardigan for breezy days.",
    carSeat:
      "In the car seat, buckle your baby in their vest, sleepsuit and a thin cardigan. Take a padded jacket off before you strap them in, as the AAP advises, and lay it over the straps if the car is cold. Socks and a thin hat keep them cosy without getting in the way of the harness.",
    sunHeading: "Hats and sun at 15–18°C",
    sun: [
      "A thin cotton hat helps on a breezy day, but most babies do not need a woolly hat at this temperature. Take it off once you are indoors.",
      "Do not let the cool air fool you about the sun. UV is fiercest from 11am to 3pm, and the NHS advises keeping babies younger than 6 months out of direct sun altogether. On a bright spring day, use the pram hood or a clip-on parasol and swap the thin hat for a wide-brimmed sun hat.",
    ],
    extraHeading: "Newborns and premature babies at 15–18°C",
    extra: [
      "A newborn finds it harder than an older baby to hold a steady body temperature (NHS), so they may need the full vest, sleepsuit and cardigan where an older, wriggly baby is happy without the cardigan. Check them more often in the first weeks.",
      "If your baby was born prematurely or had a low birthweight, ask your health visitor or neonatal team how many layers to use while they are small.",
    ],
    faqs: [
      {
        q: "Does my baby need a coat at 16°C?",
        a: "Usually not a thick coat. A vest, sleepsuit and cardigan or light jacket is enough for most babies at 16°C, with a thin hat if it is windy. If you are wearing a coat yourself because it is windy or damp, add a light jacket or a blanket in the pram, then check the back of their neck.",
      },
      {
        q: "What should my baby wear at 18°C in the sun?",
        a: "At 18°C in direct sun it can feel much warmer, so a vest and sleepsuit may be enough, with the cardigan kept in the bag. Babies younger than 6 months need to stay out of direct sun, so use the pram hood, a clip-on parasol or a shady spot, plus a wide-brimmed hat.",
      },
      {
        q: "Should I use a blanket in the pram at 15°C?",
        a: "A lightweight cellular blanket over the legs is fine while you are walking and can see your baby, because you can fold it back if they get warm. Keep it away from their face. Never drape a blanket over the pram itself: the NHS warns it can make your baby overheat.",
      },
      {
        q: "Is 15°C cold for a baby?",
        a: "It is cool rather than cold. With a vest, a sleepsuit and a cardigan or jacket, most babies are comfortable at 15°C. Wind, damp and shade make it feel colder, so bring a thin hat and a spare layer. The back of the neck tells you far more than cold hands do.",
      },
    ],
    sources: [NHS_DRESS, NHS_SIDS, NHS_SUN_BABY, AAP_CAR_SEAT_WINTER],
    relatedSlugs: [
      "baby-clothes-10-14-degrees",
      "baby-clothes-19-21-degrees",
      "baby-stroller-clothing",
      "how-many-layers-should-baby-wear",
    ],
  },
  {
    slug: "baby-clothes-19-21-degrees",
    min: 19,
    max: 21,
    chip: "20°C",
    label: "19–21°C",
    description:
      "What your baby should wear at 19–21°C (66–70°F): two light cotton layers, a cardigan to hand, sun hats and shade, and pram, carrier and car seat tips.",
    quickAnswer:
      "At 19–21°C (66–70°F), most babies need two light layers: a cotton vest under a light sleepsuit, or a vest with a top and light trousers. Keep a thin cardigan in the bag for shade or wind, add a sun hat in sunshine, and keep babies under 6 months out of direct sun.",
    bullets: [
      "Two light layers: vest plus a light sleepsuit",
      "Thin cardigan in the bag, not on",
      "Sun hat and shade on bright days",
      "Breathable cotton rather than fleece or knits",
    ],
    outfitIntro: [
      "19–21°C is a mild day: warm in the sun, a little cool in the shade or a breeze. Many adults are in a T-shirt with a light layer. Following the NHS rule of one more layer than you, that means a cotton vest under a light sleepsuit, or a vest with a light top and trousers.",
      "The key at 19–21°C is breathable cotton. Fleece sleepsuits, knitted cardigans and pramsuits trap heat at this temperature. Keep a thin cardigan in the bag for a shady café or the walk home, and put it on only if the back of your baby's neck feels cool.",
    ],
    checkTip:
      "At 19–21°C, babies are more likely to get too warm than too cold, especially under a pram hood or in a carrier. Check the back of their neck when you first stop. If it is sweaty, take off the cardigan or change to a short-sleeved vest.",
    pram: "In the pram, a vest and light sleepsuit is enough, usually with no blanket. For shade, clip a parasol or sunshade to the pram. The NHS warns never to cover the pram with a muslin or blanket, because your baby can overheat.",
    carrier:
      "In a carrier, you are a layer. A short or long-sleeved vest and light trousers is often plenty, with a sun hat if you are out in sunshine.",
    carSeat:
      "In the car seat, a vest and light sleepsuit is fine. Cars heat up in the sun even on a mild day, so open the windows or use the air conditioning, and never leave your baby in a parked car, which heats up fast (NHS).",
    sunHeading: "Sun hats and shade at 19–21°C",
    sun: [
      "A 20°C day in late spring or summer can bring strong sunshine. The NHS advises no direct sun at all for babies younger than 6 months, and as little sun as you can manage for older babies, above all from 11am to 3pm.",
      "Choose a sun hat with a broad brim or a neck flap, so the head, ears and neck are shaded. From 6 months, use a sunscreen with SPF 30 or higher that protects against UVA and UVB on skin that clothes do not cover. The NHS does not recommend sunscreen for babies under 6 months, so shade and clothing come first.",
    ],
    extraHeading: "Newborns at 19–21°C",
    extra: [
      "Newborns struggle more than older babies to keep their body temperature steady (NHS), so in a shady spot they may want the cardigan over the vest and sleepsuit, while an older baby is happier in a vest and light trousers.",
      "If your baby falls asleep in the pram and you bring them indoors, take off any hat and extra layers straight away, as the NHS advises, even if that wakes them.",
    ],
    faqs: [
      {
        q: "Does my baby need a cardigan at 20°C?",
        a: "Often not in the sun, and often yes in the shade or a breeze. Start with a vest and light sleepsuit, carry a thin cotton cardigan, and put it on only if the back of your baby's neck feels cool. That one spare layer covers most of the changes a 20°C day brings.",
      },
      {
        q: "Is a sleepsuit too warm at 21°C?",
        a: "A light cotton sleepsuit over a vest is usually fine at 21°C. A fleece or thick knitted one is likely to be too warm. If the back of your baby's neck feels hot or damp, take the vest off underneath, or swap to a short-sleeved vest and light trousers.",
      },
      {
        q: "Should my baby wear a hat at 20°C?",
        a: "Only a sun hat, and only if it is sunny. A warm hat is not needed at 20°C and can make your baby too hot. Choose a hat with a wide brim or a neck flap to shade the face, ears and neck, and take it off once you are indoors.",
      },
      {
        q: "Can my baby wear shorts at 21°C?",
        a: "Yes, if it is sunny and sheltered. A short-sleeved vest with shorts, or a romper, is fine for an older baby on a warm, still day. Bare skin needs shade, and from 6 months sunscreen too. Bring light trousers or a cardigan for when the sun goes in.",
      },
    ],
    sources: [NHS_DRESS, NHS_SUN_BABY, NHS_SIDS, AAP_SUN],
    relatedSlugs: [
      "baby-clothes-15-18-degrees",
      "baby-clothes-22-23-degrees",
      "baby-carrier-clothing",
      "feel-baby-neck-to-check-temperature",
    ],
  },
  {
    slug: "baby-clothes-22-23-degrees",
    min: 22,
    max: 23,
    chip: "22°C",
    label: "22–23°C",
    description:
      "What your baby should wear at 22–23°C (72–73°F): a short-sleeved vest with light trousers or a romper, sun hat and shade, plus feeds and pram tips.",
    quickAnswer:
      "At 22–23°C (72–73°F), dress your baby in a short-sleeved cotton vest with light trousers, or a romper on its own. Add a wide-brimmed sun hat and keep them in the shade. Carry a thin long-sleeved top for sun cover, and skip blankets, cardigans and pramsuits.",
    bullets: [
      "Short-sleeved vest and light trousers, or a romper",
      "Wide-brimmed sun hat and shade",
      "Thin long-sleeved cotton top for sun cover",
      "Parasol on the pram, never a blanket over it",
    ],
    outfitIntro: [
      "22–23°C is a warm day, the kind where adults are in a T-shirt and no jacket. Your baby needs to be comfortable, not bundled: a short-sleeved cotton vest with light trousers, or a cotton romper, is usually right.",
      "At this temperature the extra layer is about the sun rather than warmth. The AAP suggests lightweight cotton trousers and long sleeves when shade is short, and close-weave fabric blocks more sun than a loose weave. A thin long-sleeved top covers skin without adding much heat.",
    ],
    checkTip:
      "At 22–23°C, check the back of the neck more often than you would on a cooler day, and every time your baby wakes in the pram or carrier. Sweaty hair or a damp neck means take something off, such as the trousers or the vest under a romper.",
    pram: "In the pram, a romper or a short-sleeved vest and trousers is plenty, with no blanket. Use the hood and a clip-on parasol or sunshade. Do not drape a muslin or blanket over the pram: the NHS warns it can make your baby overheat.",
    carrier:
      "In a carrier, your baby is pressed against your warm body, so a short-sleeved vest or romper is usually enough. Shade their head with a sun hat, and take a break in the shade if their neck feels damp.",
    carSeat:
      "In the car seat, a single light layer is fine. The car warms up quickly at this temperature, so cool it first, use window shades, and never leave your baby in a parked car, even for a short time (NHS).",
    sunHeading: "Sun, shade and hats at 22–23°C",
    sun: [
      "Under 6 months, NHS advice is no direct sun at all. Older babies should spend as little time in the sun as you can manage, especially from 11am to 3pm, when it is at its most intense.",
      "Pick a sun hat with a broad brim or a flap that shades the neck. From 6 months, use sunscreen with SPF 30 or higher and UVA protection on uncovered skin, and reapply every 2 hours and after sweating. Under 6 months, the NHS does not recommend sunscreen, so rely on shade and clothing.",
    ],
    extraHeading: "Feeds and drinks on warm days",
    extra: [
      "On warm days, breastfed babies may want to feed more often than usual, and fully breastfed babies do not need water until they start solid foods (NHS). Formula-fed babies can have a little cooled boiled water as well as their usual milk feeds.",
      "From around 6 months, offer sips of water from a cup with meals, plus extra between meals if it is hot.",
    ],
    faqs: [
      {
        q: "Can my baby wear just a vest at 23°C?",
        a: "Yes, a short-sleeved cotton vest on its own is fine for many babies at 23°C, especially in the shade or in a carrier. In direct sun, add light trousers or a thin long-sleeved top to cover skin, plus a wide-brimmed hat. Check the back of the neck to see if they are comfortable.",
      },
      {
        q: "Is a romper enough at 22°C?",
        a: "A cotton romper on its own is usually enough at 22°C. If it is breezy or you are in the shade for a long time, a thin cardigan or long-sleeved top over it works well. Avoid fleece or knitted layers, which hold heat at this temperature.",
      },
      {
        q: "Should I cover the pram to keep the sun off at 22–23°C?",
        a: "Use the pram hood plus a clip-on parasol or sunshade instead. The NHS advises against covering the pram with a muslin or blanket, because your baby can overheat underneath it. Park the pram in the shade when you stop, and check on your baby regularly.",
      },
      {
        q: "Does my baby need socks at 22°C?",
        a: "Usually not. Bare feet are fine at 22°C, and cool feet are normal in babies. In the sun, light socks or trousers with feet protect the skin, or you can keep their feet in the shade of the pram hood.",
      },
    ],
    sources: [NHS_DRESS, NHS_SUN_BABY, AAP_SUN],
    relatedSlugs: [
      "baby-clothes-19-21-degrees",
      "baby-clothes-24-26-degrees",
      "baby-stroller-clothing",
      "baby-carrier-clothing",
    ],
  },
  {
    slug: "baby-clothes-24-26-degrees",
    min: 24,
    max: 26,
    chip: "24°C",
    label: "24–26°C",
    description:
      "What your baby should wear at 24–26°C (75–79°F): one layer of light cotton, sun hat and shade, feeds in the heat, and the signs that mean they are too hot.",
    quickAnswer:
      "At 24–26°C (75–79°F), dress your baby in a single layer of lightweight cotton, such as a short-sleeved vest or romper, with a wide-brimmed sun hat. The NHS says a single layer is enough when it is hot. Keep them in the shade, offer feeds often and check the back of their neck.",
    bullets: [
      "One layer of lightweight cotton",
      "Wide-brimmed hat and full shade",
      "Feed more often, and never a blanket over the pram",
      "Plan outings outside 11am to 3pm",
    ],
    outfitIntro: [
      "24–26°C is a hot day in the UK. NHS advice is simple: when it is hot, a single layer is enough, and lightweight cotton is best because it is breathable. A short-sleeved vest or a cotton romper, a wide-brimmed sun hat and shade cover most outings.",
      "If you cannot find shade, a loose long-sleeved cotton top and trousers in a close-weave fabric protect skin from the sun while letting air move. Leave fleece, cardigans and pramsuits at home.",
    ],
    checkTip:
      "In hot weather, check the back of the neck or tummy often, not just once. Sweating or a hot tummy is your cue to remove a layer (NHS). Move into the shade or indoors, offer a feed, and check again after a few minutes.",
    pram: "In the pram, use a single layer, the hood and a clip-on parasol or sunshade. Never drape a blanket or muslin over the pram: the NHS warns it could lead to overheating.",
    carrier:
      "In a carrier, a nappy and a short-sleeved vest is often enough, because your body warmth adds heat. Choose the shade, keep their face clear, and take breaks so you can both cool down.",
    carSeat:
      "In the car seat, a single light layer is enough. Cool the car before you go, use window shades, and never leave your baby in a parked car, which heats up fast (NHS).",
    sunHeading: "Sun, shade and hats at 24–26°C",
    sun: [
      "Keep babies younger than 6 months out of direct sun completely. For older babies, cut sun time to a minimum, especially from 11am to 3pm, when UV peaks (NHS).",
      "Use a sun hat with a wide brim or a long neck flap. From 6 months, use SPF 30 or higher with UVA protection on uncovered skin, and reapply every 2 hours and after sweating or swimming. The NHS does not recommend sunscreen under 6 months. The AAP allows a small amount on small areas such as the face if shade and clothing are not available.",
    ],
    extraHeading: "Signs your baby is too hot and when to get help",
    extra: [
      "In the daytime, draw the blinds or curtains so your baby's bedroom stays cool, and do not aim a fan straight at them (NHS). Breastfed babies may want to feed more often, formula-fed babies can have a little cooled boiled water as well as their milk, and from 6 months you can offer sips of water with meals.",
      "If your baby seems unwell in the heat, move them somewhere cool, take off extra clothing and offer a feed. Call NHS 111 if you are struggling to cool them or need advice. Call 999 or your local emergency number if they have a seizure, lose consciousness, or are still unwell after 30 minutes of cooling.",
    ],
    faqs: [
      {
        q: "What should a baby wear on a 25°C day?",
        a: "A single layer of lightweight cotton, such as a short-sleeved vest or romper, is enough at 25°C, which matches NHS advice for hot days. Add a wide-brimmed sun hat and keep your baby in the shade. If you cannot find shade, a loose, long-sleeved cotton top covers skin without adding much heat.",
      },
      {
        q: "Is 26°C too hot for a baby to go out?",
        a: "You can still go out at 26°C with some planning. Walk in the morning or later afternoon, as the NHS advises keeping babies out of the sun between 11am and 3pm when possible. Keep babies under 6 months out of direct sun altogether, use shade on the pram and offer feeds often.",
      },
      {
        q: "Do babies need water in hot weather?",
        a: "Fully breastfed babies under 6 months do not need water but may want to feed more often. Formula-fed babies can have a little cooled boiled water as well as their usual feeds. From around 6 months, offer sips of water from a cup with meals, and extra between meals when it is hot (NHS).",
      },
      {
        q: "Can my baby sleep in the pram at 24°C?",
        a: "Yes, if the pram is in the shade with air moving around it. Use the hood and a clip-on sunshade, never a blanket over the top. Keep your baby on their back in a single light layer and check the back of their neck often. Move them into deeper shade or indoors if they feel hot.",
      },
    ],
    sources: [NHS_SUN_BABY, NHS_DRESS, NHS_HEAT, AAP_SUN],
    relatedSlugs: [
      "baby-clothes-22-23-degrees",
      "baby-clothes-27-30-degrees",
      "baby-stroller-clothing",
      "feel-baby-neck-to-check-temperature",
    ],
  },
  {
    slug: "baby-clothes-27-30-degrees",
    min: 27,
    max: 30,
    chip: "30°C",
    label: "27–30°C",
    description:
      "What your baby should wear at 27–30°C (81–86°F): one thin cotton layer, full shade, safe outings in a heatwave and the heatstroke signs that need 999.",
    quickAnswer:
      "At 27–30°C (81–86°F), dress your baby in one thin cotton layer, such as a short-sleeved vest or loose romper, plus a wide-brimmed hat, and keep them in full shade. Go out early or late rather than between 11am and 3pm, feed more often and never leave them in a parked car.",
    bullets: [
      "One thin cotton vest or romper, nothing more",
      "Full shade, and no direct sun under 6 months",
      "Outings before 11am or after 3pm",
      "Never leave your baby in a parked car",
    ],
    outfitIntro: [
      "27–30°C is heatwave weather in the UK, and the NHS lists babies and young children among the people more vulnerable in a heatwave. Your baby needs as little as possible: one thin layer of loose cotton, such as a short-sleeved vest or romper, and a wide-brimmed hat when outside.",
      "Indoors, a vest or just a nappy is enough, and the NHS says the same for the warmest nights. Outdoors, if you cannot find shade, a thin, loose long-sleeved cotton top in a close-weave fabric is better than bare skin, because it blocks the sun without trapping much heat.",
    ],
    checkTip:
      "In this heat, check your baby at every stop and every time they wake. Sweating, a hot tummy or a hot neck means take clothing off, move to the shade or indoors, and offer a feed.",
    pram: "In the pram, remove any thick liner or footmuff, use the hood and a clip-on parasol, and park in deep shade. Never cover the pram with a blanket or muslin: the NHS warns it can lead to overheating.",
    carrier:
      "A carrier holds your baby against your warm body, so keep carrier time short on a day like this. Wear a thin layer yourself, keep your baby in a nappy and thin vest, and stop in the shade to check their neck.",
    carSeat:
      "In the car seat, use a single thin layer and cool the car before you put your baby in. Never leave your baby in a parked car: the NHS warns that enclosed spaces like parked cars get hot very quickly.",
    sunHeading: "Sun, shade and hats at 27–30°C",
    sun: [
      "Babies younger than 6 months should have no direct sun at all, and older babies as little as you can manage, especially from 11am to 3pm (NHS).",
      "A sun hat with a wide brim or a long neck flap protects the head, ears and neck. From 6 months, use sunscreen with SPF 30 or higher and UVA protection on uncovered skin, and reapply every 2 hours and after sweating. Indoors, close blinds or curtains during the day and do not aim a fan directly at your baby (NHS).",
    ],
    extraHeading: "Signs of overheating and when to get help",
    extra: [
      "Breastfed babies may want to feed more often in the heat, and fully breastfed babies under 6 months do not need water. Formula-fed babies can have a little cooled boiled water as well as their usual feeds.",
      "If your baby seems unwell in the heat, move them somewhere cool, take off their clothes down to a nappy, sponge their skin with cool water and offer a feed. Call NHS 111 if you are struggling to cool them or need advice. Call 999 or your local emergency number if they show signs of heatstroke, such as:",
    ],
    extraList: [
      "Still unwell after 30 minutes of cooling and fluids",
      "Hot skin that is not sweating",
      "A very high temperature",
      "A fast heartbeat, or fast breathing",
      "Confusion, a seizure or loss of consciousness",
    ],
    faqs: [
      {
        q: "What should a baby wear in 30°C heat?",
        a: "At 30°C, one thin cotton layer is enough outside, such as a short-sleeved vest or loose romper, with a wide-brimmed hat and full shade. Indoors, a vest or just a nappy is fine. Check the back of the neck or tummy often, and take clothing off if your baby is sweating.",
      },
      {
        q: "Is it safe to take a baby out at 28°C?",
        a: "Short trips are fine if you plan around the heat. Go out before 11am or after 3pm, keep babies under 6 months out of direct sunlight, use a clip-on parasol on the pram, and bring milk, or water for babies over 6 months. Never leave your baby in a parked car, even briefly.",
      },
      {
        q: "Should I use a fan for my baby at 27°C?",
        a: "A fan can help cool a room, but the NHS advises not to aim it directly at your child, as it could make them dehydrated. Close blinds or curtains during the day to keep rooms cool, and dress your baby in a single thin layer or just a nappy indoors.",
      },
      {
        q: "Can my baby nap in a carrier on a 29°C day?",
        a: "Only for short spells, in the shade, with their face clear and visible. A carrier holds your body heat against your baby, which adds up quickly at 29°C. Dress them in a thin vest or just a nappy, wear a thin layer yourself and check their neck often.",
      },
    ],
    sources: [NHS_SUN_BABY, NHS_HEATWAVE, NHS_HEAT, NHS_DRESS],
    relatedSlugs: [
      "baby-clothes-24-26-degrees",
      "baby-sleep-27c-plus",
      "baby-stroller-clothing",
      "feel-baby-neck-to-check-temperature",
    ],
  },
];

type SleepBand = {
  slug: string;
  min: number;
  max: number;
  chip: string;
  label: string;
  /** Fahrenheit equivalent of the label, for titles and the first mention. */
  labelF: string;
  mid: number;
  description: string;
  quickAnswer: string;
  bullets: string[];
  outfitIntro: string[];
  roomAdvice: string;
  togAdvice: string;
  checkTip: string;
  extraHeading: string;
  extra: string[];
  faqs: BandFaq[];
  sources: GuideSource[];
  relatedSlugs: string[];
};

/** Sleep room bands aligned to TOG steps. */
export const SLEEP_BANDS: readonly SleepBand[] = [
  {
    slug: "baby-sleep-under-16c",
    min: 5,
    max: 15,
    chip: "<16°C",
    label: "under 16°C",
    labelF: "under 61°F",
    mid: 14,
    description:
      "What your baby should wear to sleep in a room under 16°C (61°F): warm layers, sleeping bag TOG, warming the room safely and why blankets and hats are out.",
    quickAnswer:
      "Under 16°C (61°F), the room is cooler than the NHS ideal of 16–20°C, so warm it gently if you can. Then dress your baby in a vest and a long-sleeved sleepsuit under a warm sleeping bag (2.5 TOG, or the maker's winter rating). Add clothing, never loose blankets, and never a hat.",
    bullets: [
      "Aim to warm the room towards 16–20°C",
      "Vest plus a long-sleeved sleepsuit with feet",
      "Warm sleeping bag: 2.5 TOG or the maker's winter rating",
      "Extra clothing, not extra blankets, and no hat",
    ],
    outfitIntro: [
      "A nursery under 16°C is common in older homes on winter nights, or when the heating goes off overnight. NHS advice is that a room of 16–20°C is comfortable and safe for sleeping babies, so the first step is to warm the room a little if you can, for example by leaving the heating on low overnight.",
      "If the room stays cool, build warmth with clothing and a sleeping bag rather than bedding. The NHS says that if your baby seems cold in a sleeping bag, you should add an extra layer of clothing, not extra blankets.",
    ],
    roomAdvice:
      "Keep a room thermometer near the cot so you know the real temperature at bedtime and in the early hours, when homes are coldest. If the heating comes on later, check your baby again, as a sleeping bag that suited 14°C can be too warm at 19°C.",
    togAdvice:
      "TOG measures how warm a sleeping bag is: the higher the number, the warmer. Many makers list 2.5 TOG for about 16–20°C and a warmer bag, often 3.5 TOG, for colder rooms. Ratings vary, so follow your maker's guidance for the room temperature, as the NHS suggests.",
    checkTip:
      "In a cool room, cold hands are common even when the body is warm. Feel the chest or the back of the neck under the sleeping bag. If it feels cool, add a layer of clothing, as the NHS suggests, or move to a warmer bag within the maker's range.",
    extraHeading: "Newborns and premature babies in a cold room",
    extra: [
      "Young babies struggle to keep their body temperature steady (NHS), so in a cool room check a newborn more often in the first weeks. Use a sleeping bag sized for their weight or age, as the label states, so it fits closely.",
      "If your baby was born prematurely, the NHS advises following safer sleep advice for a year from their due date. Talk to your health visitor about keeping a premature or low birthweight baby warm at home.",
    ],
    faqs: [
      {
        q: "Is 15°C too cold for a baby's room?",
        a: "It is below the 16–20°C range the NHS says is comfortable and safe for sleeping babies. Warm the room a little if you can. If not, use a vest, a long-sleeved sleepsuit and a warm sleeping bag, add a layer of clothing if your baby feels cool, and never add loose blankets or a hat.",
      },
      {
        q: "Can I use a duvet or blanket if the room is cold?",
        a: "Do not use a duvet, quilt or thick, padded blanket for a baby. The NHS warns against loose blankets in the cot and advises against thick, fleecy or padded blankets. In a cold room, a well-fitting warm sleeping bag over extra clothing is the simplest safe option.",
      },
      {
        q: "Should my baby wear a hat to bed in a cold room?",
        a: "No. Even in a cold room, the NHS and the AAP say not to keep a hat on your baby indoors, and that includes sleep. Keep their head uncovered, and add warmth with extra clothing and the sleeping bag instead.",
      },
      {
        q: "What TOG sleeping bag for a 14°C room?",
        a: "Use a warm sleeping bag, usually 2.5 TOG, or the maker's winter rating (often 3.5 TOG) if their chart lists it for 14°C. Put a vest and long-sleeved sleepsuit underneath. Check the chest or back of the neck after your baby settles, and never use a weighted sleeping bag.",
      },
    ],
    sources: [NHS_SIDS, NHS_DRESS, AAP_SAFE_SLEEP],
    relatedSlugs: [
      "baby-sleep-16-19c",
      "tog-guide-for-baby-sleep",
      "feel-baby-neck-to-check-temperature",
    ],
  },
  {
    slug: "baby-sleep-16-19c",
    min: 16,
    max: 19,
    chip: "18°C",
    label: "16–19°C",
    labelF: "61–66°F",
    mid: 18,
    description:
      "What your baby should wear to sleep at 16–19°C (61–66°F): a sleepsuit in a 2.5 TOG sleeping bag, when to add a vest, and the NHS safe sleep basics.",
    quickAnswer:
      "At 16–19°C (61–66°F), dress your baby in a long-sleeved cotton sleepsuit, with a vest underneath nearer 16°C, inside a 2.5 TOG sleeping bag. This is within the NHS ideal of 16–20°C for sleep. No hat, no loose blankets, and check the back of their neck after they settle.",
    bullets: [
      "Long-sleeved sleepsuit, plus a vest nearer 16°C",
      "2.5 TOG sleeping bag",
      "Within the NHS ideal of 16–20°C",
      "No hat, no loose blankets, no weighted bags",
    ],
    outfitIntro: [
      "16–19°C is the cooler half of the NHS's ideal range for baby sleep, which is about 16–20°C. It is a typical bedroom from autumn to spring, once the heating goes off overnight.",
      "In this range, a 2.5 TOG sleeping bag is the usual choice. Near 16°C, add a short or long-sleeved vest under the sleepsuit. Near 19°C, the sleepsuit alone is usually enough.",
    ],
    roomAdvice:
      "Rooms drift overnight. A nursery that is 19°C at bedtime can be 16°C by the early hours, so a room thermometer that records the lowest reading is useful. If the room drops below 16°C, add a layer of clothing, not a blanket. If it climbs above 20°C, take the vest off or move to a 1.0 TOG bag.",
    togAdvice:
      "Sleeping bag charts usually recommend 2.5 TOG for this range, but brands differ, so check the maker's guidance, as the NHS suggests. Choose a well-fitting bag that is the right size for your baby's weight or age.",
    checkTip:
      "Feel the back of your baby's neck or chest after they have settled and again when you go to bed. Warm and dry is right. If they are sweaty, take off the vest. If they are cool, add a vest or swap to a long-sleeved one.",
    extraHeading: "Swaddling, rolling and newborns at 16–19°C",
    extra: [
      "If you swaddle a young baby, use a thin swaddle and count it as a layer. The AAP advises stopping swaddling as soon as your baby looks like they are trying to roll over, and switching to an arms-out sleeping bag.",
      "If your baby was born prematurely, the NHS advises following safer sleep advice for a year from their due date. Ask your health visitor if you are unsure how to dress a premature baby for a cool room.",
    ],
    faqs: [
      {
        q: "What TOG for 18°C?",
        a: "A 2.5 TOG sleeping bag over a long-sleeved cotton sleepsuit is the usual choice at 18°C. That is within the NHS ideal of 16–20°C. Check the maker's chart, then feel the back of your baby's neck after they settle and adjust the clothing underneath, not the bedding.",
      },
      {
        q: "Is 17°C a good temperature for a baby's room?",
        a: "Yes. The NHS says a room of about 16–20°C is comfortable and safe for sleeping babies, so 17°C is well within range. Use a vest and long-sleeved sleepsuit under a 2.5 TOG sleeping bag, with no hat and no loose blankets.",
      },
      {
        q: "Does my baby need socks in a 16°C room?",
        a: "Usually not if their sleepsuit has feet and they are in a sleeping bag. Cool feet are normal and are not a sign that your baby is cold. Feel the chest or back of the neck instead, and add a vest if that feels cool.",
      },
      {
        q: "Should I put a blanket over the sleeping bag?",
        a: "No. A sleeping bag of the right TOG replaces blankets. Adding one on top risks overheating and puts loose bedding near your baby's face, and the NHS warns against loose blankets in the cot. If your baby feels cool, add a layer of clothing instead.",
      },
    ],
    sources: [NHS_SIDS, NHS_DRESS, AAP_SAFE_SLEEP],
    relatedSlugs: [
      "baby-sleep-under-16c",
      "baby-sleep-20-23c",
      "tog-guide-for-baby-sleep",
      "feel-baby-neck-to-check-temperature",
    ],
  },
  {
    slug: "baby-sleep-20-23c",
    min: 20,
    max: 23,
    chip: "20°C",
    label: "20–23°C",
    labelF: "68–73°F",
    mid: 21,
    description:
      "What your baby should wear to sleep at 20–23°C (68–73°F): sleepsuit or vest in a 1.0 TOG sleeping bag, how to cool a warm room, and safe sleep basics.",
    quickAnswer:
      "At 20–23°C (68–73°F), dress your baby in a cotton sleepsuit or long-sleeved vest inside a 1.0 TOG sleeping bag, switching to a short-sleeved vest nearer 23°C. 20°C is the top of the NHS ideal of 16–20°C, so keep layers light and check the back of the neck.",
    bullets: [
      "Cotton sleepsuit or long-sleeved vest at 20–21°C",
      "Short-sleeved vest at 22–23°C",
      "1.0 TOG sleeping bag",
      "Above 20°C, lean lighter",
    ],
    outfitIntro: [
      "20°C is the top of the NHS's ideal range of about 16–20°C for baby sleep, and 21–23°C is a little warmer than ideal. It is common in centrally heated homes, flats and summer bedrooms.",
      "Overheating can increase the risk of SIDS (NHS), so in this band lean lighter rather than warmer. A 1.0 TOG sleeping bag is the usual choice, with a cotton sleepsuit or long-sleeved vest at 20–21°C and a short-sleeved vest at 22–23°C.",
    ],
    roomAdvice:
      "If you can, bring the room nearer 20°C. Turn the radiator down, close blinds or curtains during the day in summer, and open a window or the door a little before bed. If you use a fan, the NHS advises not to aim it directly at your baby. Trust the room thermometer, not how the house feels to you.",
    togAdvice:
      "Most sleeping bag charts suggest about 1.0 TOG in this range, but check your maker's chart. A 2.5 TOG bag is likely to be too warm above 20°C, so a lighter bag is worth having if your home is often this warm.",
    checkTip:
      "In this range, babies are more likely to get too warm than too cold. Check the back of the neck or tummy when you go to bed. Sweaty hair or a hot tummy means take a layer off, for example swapping the sleepsuit for a short-sleeved vest.",
    extraHeading: "Newborns and swaddling at 20–23°C",
    extra: [
      "Young babies struggle to keep their body temperature steady (NHS). In a warm room, keep a newborn's layers light and check them more often, rather than adding layers to be safe.",
      "A swaddle counts as a layer and adds warmth, so use a thin one in this range. The AAP advises stopping swaddling as soon as your baby looks like they are trying to roll over.",
    ],
    faqs: [
      {
        q: "What TOG for 21°C?",
        a: "A 1.0 TOG sleeping bag with a cotton sleepsuit or long-sleeved vest is the usual choice at 21°C. That is just above the NHS ideal of 16–20°C, so lean lighter: if the back of your baby's neck feels damp, swap to a short-sleeved vest.",
      },
      {
        q: "Is 22°C too hot for a baby to sleep?",
        a: "It is a little warmer than the NHS ideal of 16–20°C, so dress your baby lightly and cool the room a little if you can. A short-sleeved vest under a 1.0 TOG sleeping bag, no hat and no blankets is usually right. Check the back of the neck after they settle.",
      },
      {
        q: "Should my baby wear a sleepsuit under the sleeping bag at 23°C?",
        a: "Usually not. At 23°C a short-sleeved cotton vest under a 1.0 TOG bag is enough, and some babies are comfortable in a vest with a 0.5 TOG bag. A full sleepsuit plus a sleeping bag is likely to be too warm. Let the back of the neck decide.",
      },
      {
        q: "How do I cool a nursery that is 23°C?",
        a: "Close blinds or curtains during the day, open a window or door before bed if it is cooler outside, and turn radiators down. If you use a fan, do not point it directly at your baby (NHS). A room thermometer shows whether the changes are working.",
      },
    ],
    sources: [NHS_SIDS, NHS_DRESS, NHS_SUN_BABY, AAP_SAFE_SLEEP],
    relatedSlugs: [
      "baby-sleep-16-19c",
      "baby-sleep-24-26c",
      "tog-guide-for-baby-sleep",
      "feel-baby-neck-to-check-temperature",
    ],
  },
  {
    slug: "baby-sleep-24-26c",
    min: 24,
    max: 26,
    chip: "24°C",
    label: "24–26°C",
    labelF: "75–79°F",
    mid: 25,
    description:
      "What your baby should wear to sleep at 24–26°C (75–79°F): a vest under a 0.5 TOG bag or vest alone, cooling a hot nursery, fans and safe sleep in the heat.",
    quickAnswer:
      "At 24–26°C (75–79°F), dress your baby in a short-sleeved cotton vest under a light 0.5 TOG sleeping bag, or the vest alone if they feel hot. The room is warmer than the NHS ideal of 16–20°C, so cool it if you can. No hat, no blankets, and check the back of the neck.",
    bullets: [
      "Short-sleeved cotton vest",
      "0.5 TOG sleeping bag, or the vest alone",
      "Cool the room: blinds closed by day",
      "Never point a fan straight at your baby",
    ],
    outfitIntro: [
      "24–26°C is a warm summer bedroom, often in loft rooms, flats and homes during a warm spell. It is well above the NHS ideal of about 16–20°C for sleep, and overheating can increase the risk of SIDS.",
      "Dress your baby lightly: a nappy and a short-sleeved cotton vest under a 0.5 TOG sleeping bag. If they are sweaty or their tummy is hot to the touch, take the sleeping bag off and let them sleep in the vest. On the hottest nights, the NHS says a vest alone, or even just a nappy, is enough.",
    ],
    roomAdvice:
      "Shut the blinds or curtains in the daytime so the bedroom does not heat up, and open windows once the air outside is cooler, usually late in the evening. A fan can move air around the room, but the NHS advises not to aim it directly at your baby. Keep bedclothes to a minimum.",
    togAdvice:
      "Sleeping bag charts usually list 0.5 TOG for 24–26°C, and some go down to 0.2 TOG. If you use a sheet instead, the NHS advises making sure it is secure enough that it cannot cover your baby's face. Never add a blanket on top of a sleeping bag.",
    checkTip:
      "Check the back of the neck or tummy before you go to bed and whenever your baby wakes. Damp hair, a sweaty neck or a hot tummy means take a layer off. Warm, dry skin means they are fine, even if their hands and feet feel cool.",
    extraHeading: "Feeds and newborns on warm nights",
    extra: [
      "Breastfed babies may want to feed more often in hot weather, and fully breastfed babies do not need water before they start solid foods. Formula-fed babies can have a little cooled boiled water as well as their usual milk (NHS).",
      "Young babies struggle to keep their body temperature steady (NHS), so on warm nights check a newborn more often, and keep their layers to a vest and a light bag or less.",
    ],
    faqs: [
      {
        q: "What should a baby sleep in at 25°C?",
        a: "At 25°C, a nappy and short-sleeved cotton vest under a 0.5 TOG sleeping bag is the usual choice. If the back of your baby's neck is sweaty or their tummy feels hot, take the sleeping bag off and let them sleep in the vest. No hat, no blankets and no extra layers.",
      },
      {
        q: "Is 24°C too hot for a baby's room?",
        a: "It is warmer than the NHS ideal of 16–20°C, so try to cool it. Close blinds by day, open windows when it is cooler, and keep bedding to a minimum. Dress your baby in a light vest and a 0.5 TOG bag or less, and check them more often than usual.",
      },
      {
        q: "Can my baby sleep with a fan on?",
        a: "A fan can help cool the room, but the NHS advises not to aim it directly at your child, as it could make them dehydrated. Point it across the room or at a wall, keep it and its cable out of reach, and still dress your baby lightly.",
      },
      {
        q: "Should my baby wear socks at 26°C?",
        a: "No. At 26°C your baby needs as little as possible, and cool feet are normal. A short-sleeved vest, or just a nappy and a light sleeping bag, is enough. Judge their temperature by the back of the neck or tummy, not their feet.",
      },
    ],
    sources: [NHS_SIDS, NHS_DRESS, NHS_SUN_BABY, AAP_SAFE_SLEEP],
    relatedSlugs: [
      "baby-sleep-20-23c",
      "baby-sleep-27c-plus",
      "tog-guide-for-baby-sleep",
      "feel-baby-neck-to-check-temperature",
    ],
  },
  {
    slug: "baby-sleep-27c-plus",
    min: 27,
    max: 32,
    chip: "27°C+",
    label: "27°C+",
    labelF: "81°F+",
    mid: 28,
    description:
      "What your baby should wear to sleep at 27°C+ (81°F+): a vest or just a nappy, cooling the room in a heatwave, fans and safe sleep on the hottest nights.",
    quickAnswer:
      "At 27°C+ (81°F+), let your baby sleep in just a nappy and a short-sleeved cotton vest, or just a nappy on the hottest nights, as the NHS suggests. Skip the sleeping bag unless the room cools in the early hours. Cool the room, never point a fan straight at your baby, and check them often.",
    bullets: [
      "Nappy and short-sleeved vest, or just a nappy",
      "Sleeping bag only if the room cools (0.2 TOG)",
      "No hat, no blankets, no extra layers",
      "Cool the room and check your baby often",
    ],
    outfitIntro: [
      "A bedroom of 27°C or more happens in heatwaves, often in top-floor rooms. It is far above the NHS ideal of about 16–20°C for baby sleep. Overheating can increase the risk of SIDS (NHS), so the aim is as little as possible on your baby and as much cooling as you can manage in the room.",
      "If you have a 0.2 TOG sleeping bag, keep it for the early hours in case the room cools down. If you use a sheet, the NHS advises making sure it is secure enough that it cannot cover your baby's face.",
    ],
    roomAdvice:
      "Close blinds or curtains during the day, open windows when the air outside is cooler, and use a fan to move air without aiming it directly at your baby (NHS). If another room is cooler, such as a downstairs room, your baby's cot or Moses basket can go there, as long as you share that room with them for the first 6 months.",
    togAdvice:
      "Sleeping bag charts usually stop at about 27°C or list only 0.2 TOG, so above that a vest or a nappy alone is usually best.",
    checkTip:
      "Check your baby when you go to bed and at every waking. Sweating or a hot tummy means take the vest off and cool the room.",
    extraHeading: "If your baby seems unwell on a hot night",
    extra: [
      "Babies and young children can become ill in very hot weather (NHS). If your baby seems unwell, move them somewhere cooler, take their clothes off down to a nappy and offer a feed. Our 27–30°C guide lists the heatstroke signs that need 999.",
      "If your baby was born prematurely, the NHS advises following safer sleep advice for a year from their due date, so take extra care to keep their room cool and their layers light.",
    ],
    faqs: [
      {
        q: "What should a baby sleep in at 28°C?",
        a: "At 28°C, a nappy and a short-sleeved cotton vest is enough, and on the hottest nights just a nappy is fine, as the NHS suggests. Skip the sleeping bag unless the room cools in the early hours. No hat and no blanket, and check the back of the neck or tummy often.",
      },
      {
        q: "Is it safe for a baby to sleep in a 30°C room?",
        a: "It is much warmer than the NHS ideal of 16–20°C, so do what you can to cool it: blinds closed by day, windows open when it is cooler, and a fan aimed away from your baby. Dress them in just a nappy or a light vest, offer extra feeds, and check them often. Call NHS 111 if you are worried.",
      },
      {
        q: "Can my baby sleep in just a nappy?",
        a: "Yes. On the hottest nights, the NHS says a nappy on its own, or a vest, is fine. Keep your baby on their back, in their own cot with a firm, flat mattress, with no pillows or loose bedding. A light sheet, secured so it cannot cover their face, is fine if the room cools.",
      },
      {
        q: "Should I give my baby water at night in a heatwave?",
        a: "Fully breastfed babies under 6 months do not need water, but they may want to breastfeed more often. Formula-fed babies can have a little cooled boiled water as well as their usual milk. From around 6 months, offer sips of water from a cup, with extra when it is hot (NHS).",
      },
    ],
    sources: [NHS_SIDS, NHS_DRESS, NHS_SUN_BABY, AAP_SAFE_SLEEP],
    relatedSlugs: [
      "baby-sleep-24-26c",
      "baby-clothes-27-30-degrees",
      "tog-guide-for-baby-sleep",
      "feel-baby-neck-to-check-temperature",
    ],
  },
];

/** Old per-degree URLs → live band slug (for redirects). */
export { GUIDE_REDIRECTS } from "@/lib/guides/redirects";

/** Matching °F range for an outdoor band, for titles and first mentions. */
function bandF(band: OutdoorBand): string {
  return `${cToF(band.min)}–${cToF(band.max)}°F`;
}

/** One-line outfit per outdoor band, used to point age guides at the temperature pages. */
function outdoorBandSummaries(): string[] {
  return OUTDOOR_BANDS.map(
    (band) =>
      `${band.label} (${bandF(band)}): ${outdoorOutfitFor(Math.round((band.min + band.max) / 2)).short}`,
  );
}

/** One-line sleepwear per sleep band, used to point age guides at the sleep pages. */
function sleepBandSummaries(): string[] {
  return SLEEP_BANDS.map((band) => {
    const outfit = sleepOutfitFor(band.mid);
    return `${band.label} (${band.labelF}): ${outfit.layers}`;
  });
}

function outdoorBandPage(band: OutdoorBand): GuidePage {
  const outfit = outdoorOutfitFor(Math.round((band.min + band.max) / 2));
  const f = bandF(band);

  return {
    ...layersPage({
      slug: band.slug,
      category: "weather",
      question: `What should my baby wear at ${band.label}?`,
      title: `What should my baby wear at ${band.label} (${f})?`,
      metaTitle: `Baby clothes for ${band.label} (${f}): what to wear`,
      description: band.description,
      quickAnswer: band.quickAnswer,
      bullets: band.bullets,
      sections: [
        {
          heading: `What to dress your baby in at ${band.label}`,
          paragraphs: [...band.outfitIntro, outfit.summary],
          list: outfit.layers,
        },
        {
          heading: `How to check your baby is not too hot or cold at ${band.label}`,
          paragraphs: [CHEST_CHECK, band.checkTip],
        },
        {
          heading: `Pram, carrier and car seat at ${band.label}`,
          paragraphs: [band.pram, band.carrier, band.carSeat],
        },
        {
          heading: band.sunHeading,
          paragraphs: band.sun,
        },
        {
          heading: band.extraHeading,
          paragraphs: band.extraList
            ? band.extra
            : [...band.extra, MEDICAL_DISCLAIMER],
          list: band.extraList,
        },
      ],
      faqs: band.faqs,
      relatedSlugs: band.relatedSlugs,
      sources: band.sources,
    }),
    modifiedAt: GENERATED_REVIEWED,
  };
}

function sleepBandPage(band: SleepBand): GuidePage {
  const outfit = sleepOutfitFor(band.mid);

  return {
    ...layersPage({
      slug: band.slug,
      category: "sleep",
      question: `What should baby wear to sleep at ${band.label}?`,
      title: `What should baby wear to sleep at ${band.label} (${band.labelF})?`,
      metaTitle: `Baby sleep clothes for ${band.label} (${band.labelF}): TOG`,
      description: band.description,
      quickAnswer: band.quickAnswer,
      bullets: band.bullets,
      sections: [
        {
          heading: `What to dress your baby in to sleep at ${band.label}`,
          paragraphs: [...band.outfitIntro, outfit.summary],
          list: outfit.list,
        },
        {
          heading: `Safe sleep at ${band.label}`,
          paragraphs: [band.roomAdvice],
          list: SAFE_SLEEP_LIST,
        },
        {
          heading: `Which TOG sleeping bag for ${band.label}?`,
          paragraphs: [band.togAdvice, TOG_NOTE],
        },
        {
          heading: "How to check your baby is not too hot or cold at night",
          paragraphs: [CHEST_CHECK, band.checkTip],
        },
        {
          heading: band.extraHeading,
          paragraphs: [...band.extra, MEDICAL_DISCLAIMER],
        },
      ],
      faqs: band.faqs,
      relatedSlugs: band.relatedSlugs,
      sources: band.sources,
    }),
    modifiedAt: GENERATED_REVIEWED,
  };
}

type AgeGuide = {
  slug: string;
  chip: string;
  label: string;
  focus: "outside" | "both";
  question: string;
  title: string;
  metaTitle: string;
  description: string;
  quickAnswer: string;
  bullets: string[];
  changesHeading: string;
  changes: string[];
  outsideIntro: string;
  /** Sleepwear intro; guides without it skip the sleep section. */
  sleepIntro?: string;
  checkTip: string;
  extra: GuideSection[];
  faqs: BandFaq[];
  sources: GuideSource[];
};

/** Outfit-by-age guides shown in the hub "By age" chips. */
export const AGE_GUIDES: readonly AgeGuide[] = [
  {
    slug: "what-should-newborn-wear-outside",
    chip: "What should a newborn wear outside?",
    label: "newborn",
    focus: "outside",
    question: "What should a newborn wear outside?",
    title: "What should a newborn wear outside?",
    metaTitle: "What should a newborn wear outside? Temperature guide",
    description:
      "What a newborn should wear outside at every temperature: layers, hats and sun under 6 months, prams, slings and car seats, and how to check they are comfy.",
    quickAnswer:
      "A newborn should wear one more layer outside than you are wearing, as the NHS suggests: usually a vest and sleepsuit plus a cardigan, then a pramsuit, hat and mittens when it is cold. In warm weather use a single cotton layer, a sun hat and full shade, and take extra layers off indoors.",
    bullets: [
      "One more layer than you are wearing",
      "Thin layers you can peel off, not one thick outfit",
      "Under 6 months: shade first, no direct sun and no sunscreen",
      "Hats and extra clothing off as soon as you are indoors",
    ],
    changesHeading: "Why newborns need extra care outside",
    changes: [
      "The NHS points out that young babies struggle to keep their body temperature steady. A newborn cannot tell you they are cold or hot, and cannot take off a layer, so it is up to you to dress them for the weather and check them.",
      "That does not mean wrapping them up as much as possible. Overheating is a risk too, and the NHS links it to SIDS. The aim is comfortable: warm and dry on the back of the neck, without sweating.",
    ],
    outsideIntro:
      "Start with the NHS rule of thumb: one more layer than you are wearing. If you are comfortable in a T-shirt and jumper, a newborn needs a vest, a sleepsuit and a cardigan. Then match the outfit to the temperature:",
    checkTip:
      "Check the back of the neck or tummy a few minutes after you go out and each time you stop. If your baby was born prematurely or had a low birthweight, ask your health visitor or neonatal team how to dress them, and follow safer sleep advice for a year from their due date, as the NHS advises.",
    extra: [
      {
        heading: "Pram, sling and car seat for a newborn",
        paragraphs: [
          "In the pram, a footmuff or lightweight cellular blanket over their legs works in cool weather. In summer, use a clip-on parasol or sunshade and never cover the pram with a muslin or blanket, which can make your baby overheat (NHS).",
          "In a sling or carrier, your body warmth counts as a layer, so a newborn needs less than in the pram. In the car seat, take off pramsuits and padded coats before you strap them in, then lay a blanket over the buckled harness (AAP).",
        ],
      },
      {
        heading: "Sun and hats for newborns",
        paragraphs: [
          "The NHS advises no direct sun for babies younger than 6 months, and does not recommend sunscreen for them either. Use shade, the pram hood, a clip-on sunshade and light clothes that cover the skin.",
          "A wide-brimmed sun hat protects the head, ears and neck in summer, and a soft hat helps on cold days. Once you are indoors or in a warm car, take hats off straight away, even if your baby wakes (NHS), and never let your baby sleep in a hat indoors.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a newborn need a hat outside in summer?",
        a: "A wide-brimmed sun hat is useful in summer to shade the head, ears and neck, but it does not replace shade. For babies younger than 6 months, the NHS advice is to keep them out of direct sun. Take the hat off once you are indoors, and do not use a warm hat on a hot day.",
      },
      {
        q: "How many layers should a newborn wear outside?",
        a: "The NHS rule of thumb is one more layer than you are wearing. On a cool day that might be a vest, sleepsuit, cardigan and pramsuit; on a mild day a vest and sleepsuit; on a hot day a single cotton layer. Several thin layers are easier to adjust than one thick one.",
      },
      {
        q: "Can I take my newborn out in the cold?",
        a: "Yes, with the right layers. Dress them in a vest, sleepsuit, cardigan and pramsuit with a hat and mittens, keep them out of strong wind and rain, and keep outings shorter at first. Check the back of the neck, and take extra layers off once you are back inside.",
      },
      {
        q: "Can a newborn wear a snowsuit in the car seat?",
        a: "No. The AAP advises against bulky coats and snowsuits under the car seat harness, because the padding squashes in a crash and leaves the straps loose. Dress your newborn in thin layers, buckle them in snugly, then lay a blanket or the snowsuit over the straps.",
      },
    ],
    sources: [NHS_DRESS, NHS_SIDS, NHS_SUN_BABY, AAP_CAR_SEAT_WINTER],
  },
  {
    slug: "what-should-1-month-old-wear",
    chip: "What should a 1-month-old wear?",
    label: "1-month-old",
    focus: "both",
    question: "What should a 1-month-old wear?",
    title: "What should a 1-month-old wear?",
    metaTitle: "What should a 1-month-old wear? Temperature guide",
    description:
      "What a 1-month-old should wear outside and to sleep, by temperature: layers, sleeping bag TOG, swaddling, hats and how to check the back of their neck.",
    quickAnswer:
      "A 1-month-old should wear one more layer than you, as the NHS suggests: often a vest and sleepsuit indoors, plus a cardigan, hat and pramsuit outside when it is cool. For sleep, use a sleepsuit and a sleeping bag matched to a room of about 16–20°C, with no hat and no loose blankets.",
    bullets: [
      "Indoors: a vest and sleepsuit is the usual base",
      "Outside: add layers by temperature, plus a hat when cold",
      "Sleep: sleeping bag matched to the room, no hat",
      "Check the neck or tummy, not their hands",
    ],
    changesHeading: "What changes at 1 month",
    changes: [
      "Not much, when it comes to temperature. Your baby is still small, and the NHS points out that young babies struggle to keep their body temperature steady, so dressing advice is the same as for a newborn: one more layer than you, adjusted by the thermometer.",
      "What often changes is that you are going out more, to baby groups, the GP or a walk most days. That means more switching between a cold street, a warm bus and a heated café, so layers you can take off quickly are more useful than one warm outfit.",
    ],
    outsideIntro: "Use the outdoor temperature, not the season. As a guide:",
    sleepIntro:
      "For sleep, go by the room thermometer. NHS advice is a room of about 16–20°C. Until they are at least 6 months old, put your baby down on their back in their own cot or Moses basket, in your room. As a guide:",
    checkTip:
      "Check the back of the neck or tummy about 10 minutes after you go out or put your baby down, and when they wake. A 1-month-old who is sweating needs a layer off. Cool hands alone do not mean they are cold.",
    extra: [
      {
        heading: "Swaddling and sleeping bags at 1 month",
        paragraphs: [
          "If you swaddle, use a thin, breathable swaddle and count it as a layer, so lighten what is underneath. The AAP advises stopping as soon as your baby looks like they are trying to roll over.",
          "A baby sleeping bag is a simple way to keep a 1-month-old warm without loose blankets. Choose the right size for their weight, follow the maker's TOG guidance for the room temperature, and never use a weighted sleeping bag or swaddle (AAP).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is dressing a 1-month-old different from a newborn?",
        a: "For warmth, no. The NHS rule of one more layer than you still applies, and young babies still struggle to keep their body temperature steady. What changes is size and routine: check the sleepsuit and sleeping bag still fit, and plan for more trips in and out of warm buildings.",
      },
      {
        q: "Should a 1-month-old wear a hat indoors?",
        a: "No. The NHS advises removing hats straight away once you are inside, even if your baby wakes, and the AAP says not to put a hat on your baby indoors. A hat is for outside on cold days, or a sun hat in summer.",
      },
      {
        q: "What should a 1-month-old wear to bed at 18°C?",
        a: "At 18°C, a long-sleeved cotton sleepsuit inside a 2.5 TOG sleeping bag is the usual choice. That room is within the NHS ideal of 16–20°C. Do not add a hat or loose blankets. Check the back of the neck after they settle, and adjust the clothing rather than the bedding.",
      },
      {
        q: "How many layers should a 1-month-old wear at night?",
        a: "Usually two, counting the sleeping bag: a sleepsuit, or a vest and sleepsuit in a cooler room, plus a sleeping bag with the right TOG for the room. In a warm room, a vest and a light bag is enough. Avoid extra blankets, and check your baby's neck or tummy.",
      },
    ],
    sources: [NHS_DRESS, NHS_SIDS, AAP_SAFE_SLEEP],
  },
  {
    slug: "what-should-2-month-old-wear",
    chip: "What should a 2-month-old wear?",
    label: "2-month-old",
    focus: "both",
    question: "What should a 2-month-old wear?",
    title: "What should a 2-month-old wear?",
    metaTitle: "What should a 2-month-old wear? Temperature guide",
    description:
      "What a 2-month-old should wear outside and to sleep, by temperature: layers, carriers and prams, shade instead of sunscreen, and sleeping bag TOG by room.",
    quickAnswer:
      "A 2-month-old should wear one more layer than you, as the NHS suggests. On a mild day that is a vest and light sleepsuit; on a cool day add a cardigan, hat and pramsuit; on a hot day, one cotton layer and shade. In a carrier, go a layer lighter, and check the back of their neck.",
    bullets: [
      "Same warmth rules as a newborn",
      "Carrier: your body counts as a layer",
      "Under 6 months: shade, not sunscreen",
      "Sleep: room thermometer and TOG, not the forecast",
    ],
    changesHeading: "What changes at 2 months",
    changes: [
      "Temperature rules stay the same at 2 months. Many babies are more awake and alert now and spend longer out on walks, in a pram or a carrier. Longer outings mean the weather can change while you are out, so pack one spare thin layer and a hat for the season.",
      "Your baby is still under 6 months, so the NHS advice to keep them out of direct sunlight, and not to use sunscreen, still applies. Shade and clothing do the work.",
    ],
    outsideIntro: "Use the outdoor temperature to decide. As a guide:",
    sleepIntro:
      "For naps and nights, dress for the room. NHS advice is a room of about 16–20°C, your baby on their back on a firm, flat mattress, with no loose blankets. As a guide:",
    checkTip:
      "Babies in a carrier, or in a pram with the hood up, can warm up faster than you notice. Check the back of the neck when you stop walking. If it is damp, take a layer off. If it is cool, add the spare.",
    extra: [
      {
        heading: "Carriers, prams and car journeys at 2 months",
        paragraphs: [
          "In a carrier, your body warmth acts as a layer, so a 2-month-old usually needs one layer less than in the pram. Keep their face clear and visible, and add a hat when it is cold or sunny.",
          "In the pram, use a clip-on parasol or sunshade for shade, and never cover the pram with a muslin or blanket (NHS). Once you step into a warm car, bus or train, remove hats and extra layers straight away, as the NHS advises, even if your baby wakes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I dress my 2-month-old warmer because they are small?",
        a: "Not automatically. Dress for the air temperature, using the NHS rule of one more layer than you, then check the back of the neck. Young babies struggle to keep their body temperature steady, which is why checking matters, but extra layers can lead to overheating.",
      },
      {
        q: "What should a 2-month-old wear in a carrier?",
        a: "Usually one layer less than in the pram, because your body warmth counts. On a mild day, a vest and sleepsuit is often enough. On a cold day, add a cardigan, hat and socks, and zip your coat or a carrier cover around you both. Check their neck when you stop.",
      },
      {
        q: "Can a 2-month-old wear sunscreen?",
        a: "The NHS does not recommend sunscreen for babies under 6 months and advises keeping them out of direct sunlight. Use shade, the pram hood, a clip-on sunshade, a wide-brimmed hat and light clothes that cover the skin. The AAP says a little sunscreen on small areas such as the face is fine only if shade and clothing are not possible.",
      },
      {
        q: "What should a 2-month-old wear to sleep at 20°C?",
        a: "At 20°C, a cotton sleepsuit or long-sleeved vest inside a 1.0 TOG sleeping bag is the usual choice. 20°C is the top of the NHS ideal range of 16–20°C, so avoid adding a vest under the sleepsuit unless your baby feels cool on the neck or chest.",
      },
    ],
    sources: [NHS_DRESS, NHS_SUN_BABY, NHS_SIDS, AAP_SUN],
  },
  {
    slug: "what-should-3-month-old-wear",
    chip: "What should a 3-month-old wear?",
    label: "3-month-old",
    focus: "both",
    question: "What should a 3-month-old wear?",
    title: "What should a 3-month-old wear?",
    metaTitle: "What should a 3-month-old wear? Temperature guide",
    description:
      "What a 3-month-old should wear outside and to sleep, by temperature: layers, moving from swaddle to sleeping bag, TOG by room, hats and the neck check.",
    quickAnswer:
      "A 3-month-old should wear one more layer than you, as the NHS suggests, matched to the temperature. For sleep, use a sleepsuit and an arms-out sleeping bag with the right TOG for a room of about 16–20°C. Stop swaddling as soon as your baby looks like they are trying to roll.",
    bullets: [
      "Same temperature rules as younger babies",
      "Stop swaddling at the first signs of rolling",
      "Arms-out sleeping bag for sleep",
      "Check the neck or tummy, not their hands",
    ],
    changesHeading: "What changes at 3 months",
    changes: [
      "The way you dress for warmth stays the same. What often changes around this age is movement: many babies push up, kick hard and start trying to roll. The AAP advises stopping swaddling as soon as your baby looks like they are trying to roll over, which often happens around 3 to 4 months but can be earlier.",
      "Babies also outgrow sleepsuits and sleeping bags quickly at this stage. Check that both still fit, using the size guide on the label, as you move up a size.",
    ],
    outsideIntro: "Use the outdoor temperature, not the season. As a guide:",
    sleepIntro:
      "For sleep, go by the room thermometer. NHS advice is a room of about 16–20°C, with your baby on their back in a clear cot in your room. As a guide:",
    checkTip:
      "Active babies can get warm and sweaty during floor play or a long feed. Check the back of the neck or tummy rather than their hands, and take a layer off if they are damp.",
    extra: [
      {
        heading: "Moving from a swaddle to a sleeping bag",
        paragraphs: [
          "When you stop swaddling, an arms-out sleeping bag keeps your baby warm without loose blankets. A swaddle adds warmth, so when you switch you may need a slightly warmer bag or a vest under the sleepsuit, depending on the room.",
          "Keep putting your baby on their back for every sleep in a clear cot, with a firm, flat mattress and no pods, nests, bumpers or pillows (NHS). Never use a weighted sleeping bag or swaddle (AAP).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a 3-month-old dressed like a newborn?",
        a: "For warmth, yes. Use the NHS rule of one more layer than you and adjust by the thermometer. What changes is safety around movement: stop swaddling when your baby looks like they are trying to roll, and check sleepsuits and sleeping bags still fit as they grow.",
      },
      {
        q: "When should I stop swaddling?",
        a: "The AAP advises stopping swaddling as soon as your baby looks like they are trying to roll over, whatever their age. Move to an arms-out sleeping bag with the right TOG for the room, and keep putting them down on their back for every sleep.",
      },
      {
        q: "What TOG sleeping bag for a 3-month-old?",
        a: "Pick the TOG by room temperature, not age. As a guide, about 2.5 TOG for 16–19°C, 1.0 TOG for 20–23°C and 0.5 TOG for 24–26°C, using your maker's chart. Check the back of your baby's neck after they settle and adjust the clothing underneath.",
      },
      {
        q: "Does a 3-month-old need a hat outside?",
        a: "On cold or windy days a soft hat helps, and in summer a wide-brimmed sun hat shades the face. Your baby is still under 6 months, so keep them out of direct sunlight too (NHS). Take any hat off as soon as you come indoors, and never use one for sleep.",
      },
    ],
    sources: [NHS_DRESS, NHS_SIDS, NHS_SUN_BABY, AAP_SAFE_SLEEP],
  },
  {
    slug: "what-should-6-month-old-wear",
    chip: "What should a 6-month-old wear?",
    label: "6-month-old",
    focus: "both",
    question: "What should a 6-month-old wear?",
    title: "What should a 6-month-old wear?",
    metaTitle: "What should a 6-month-old wear? Temperature guide",
    description:
      "What a 6-month-old should wear outside and to sleep, by temperature: layers, sunscreen from 6 months, water on hot days, car seats and sleeping bag TOG.",
    quickAnswer:
      "A 6-month-old should still wear one more layer than you, matched to the temperature. What changes is the sun: from 6 months, the NHS says you can use SPF 30+ sunscreen on uncovered skin, alongside shade and a sun hat. For sleep, keep using a sleeping bag matched to the room, with no hat or loose blankets.",
    bullets: [
      "Same layering rule, adjusted for temperature",
      "From 6 months: SPF 30+ sunscreen, plus shade",
      "Sips of water with meals on hot days",
      "No bulky coats under car seat straps",
    ],
    changesHeading: "What changes at 6 months",
    changes: [
      "Temperature rules stay the same, but a few things change around 6 months. Your baby can now have sunscreen: the NHS advises SPF 30 or higher with UVA and UVB protection, reapplied every 2 hours and after sweating. And from around 6 months you can offer sips of water from a cup with meals, with extra between meals in hot weather (NHS).",
      "Many babies are also rolling, sitting and moving more on the floor, so they can get warmer during play. Check the back of the neck after active play rather than adding layers to be safe.",
    ],
    outsideIntro: "Use the outdoor temperature, not the season. As a guide:",
    sleepIntro:
      "For sleep, keep the room at about 16–20°C and your baby on their back in a clear cot. The NHS advises keeping their cot in your room for at least the first 6 months. As a guide:",
    checkTip:
      "Check the back of the neck or tummy after floor play, a long feed or a nap in the pram. Sweaty means a layer off. Cool hands alone are normal, even in older babies.",
    extra: [
      {
        heading: "Car seats and winter coats at 6 months",
        paragraphs: [
          "As babies move to bigger car seats and wear thicker coats, the AAP advice stays the same: no bulky coats or snowsuits under the harness. Dress your baby in thin layers, check the straps are snug with the pinch test, then put a coat or blanket over the top.",
          "Keep an infant carrier seat indoors when you are not using it, so it is not cold when you put your baby in (AAP).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can sunscreen replace shade at 6 months?",
        a: "No. From 6 months the NHS says you can use sunscreen with SPF 30 or higher on uncovered skin, but shade still comes first: keep older babies out of the sun wherever you can, especially from 11am to 3pm. Use shade, a wide-brimmed hat and light clothing first, and sunscreen on the skin that is left.",
      },
      {
        q: "What should a 6-month-old wear at 20°C?",
        a: "At around 20°C outside, a cotton vest and a light sleepsuit, or a top and light trousers, is usually right, with a thin cardigan in the bag for shade or a breeze. In the sun, add a wide-brimmed hat and sunscreen on uncovered skin.",
      },
      {
        q: "Does a 6-month-old need water in hot weather?",
        a: "From around 6 months, the NHS suggests giving small sips of water in a cup at mealtimes, with a little more between meals in hot weather. Breast milk or formula is still their main drink, so offer feeds more often on hot days too.",
      },
      {
        q: "Can my 6-month-old sleep with a blanket now?",
        a: "Not a loose one. The AAP says soft objects and loose bedding increase the risk of suffocation and entrapment, and the NHS advises a clear cot. Keep using a well-fitting sleeping bag matched to the room temperature, with your baby on their back and no hat.",
      },
    ],
    sources: [NHS_SUN_BABY, NHS_SIDS, AAP_SAFE_SLEEP, AAP_CAR_SEAT_WINTER],
  },
  {
    slug: "what-should-9-month-old-wear",
    chip: "What should a 9-month-old wear?",
    label: "9-month-old",
    focus: "both",
    question: "What should a 9-month-old wear?",
    title: "What should a 9-month-old wear?",
    metaTitle: "What should a 9-month-old wear? Temperature guide",
    description:
      "What a 9-month-old should wear outside and to sleep, by temperature: layers for crawling babies, wet clothes, sun, cold, car seats and sleeping bag TOG.",
    quickAnswer:
      "A 9-month-old should wear about one more layer than you, matched to the temperature, in thin layers you can take off when they get busy. Crawling babies can warm up fast, so check the back of the neck after play. For sleep, use a sleeping bag matched to the room, not the forecast.",
    bullets: [
      "Thin layers you can peel off mid-outing",
      "Check the neck after crawling or play",
      "Change wet clothes and mittens straight away",
      "Sleep: TOG for the room, no hat, no blankets",
    ],
    changesHeading: "What changes at 9 months",
    changes: [
      "Many 9-month-olds are crawling, pulling up or bottom-shuffling. Moving around warms them up, while sitting still in a pram cools them down, so the same baby can need different layers on the playground and on the walk home.",
      "They are also more likely to pull off hats and mittens and to get wet in puddles, sand or snow. The AAP advises changing children out of wet clothes straight away, and notes that wet mittens can make a child colder, so a spare set in the bag helps.",
    ],
    outsideIntro:
      "Use the outdoor temperature, then adjust for how active they are. As a guide:",
    sleepIntro:
      "For sleep, dress for the room, not the day's weather. A sleeping bag keeps a moving baby covered all night without loose blankets. As a guide:",
    checkTip:
      "Check the back of the neck after active play and again after they have been sitting in the pram for a while. A sweaty neck after crawling means a layer off. A cool neck after a long pram ride means a layer back on.",
    extra: [
      {
        heading: "Sun, cold and car seats at 9 months",
        paragraphs: [
          "In the sun, keep using shade, a wide-brimmed hat and SPF 30+ sunscreen on uncovered skin, reapplied every 2 hours and after sweating or swimming (NHS).",
          "In winter, the AAP calls a hat, mittens and insulated boots essential once children are playing outside. In the car, its advice still applies: thin layers under the harness, and the coat over the top once they are buckled in.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do mobile babies need fewer layers?",
        a: "Often one fewer while they are moving, and more when they sit still in the pram. Start from about one more layer than you, then check the back of the neck after play. Thin layers you can take off and put back on are easier than one thick outfit.",
      },
      {
        q: "What should a 9-month-old wear to the park in winter?",
        a: "A vest, a top and leggings or a sleepsuit, a warm jumper and a waterproof all-in-one or coat, plus a hat, mittens and warm socks or boots. Change wet mittens or clothes straight away, and take the coat off before you strap them into the car seat.",
      },
      {
        q: "Should my 9-month-old sleep in a sleeping bag?",
        a: "A sleeping bag is still a good way to keep a 9-month-old warm without loose blankets, which the AAP advises against. Choose the TOG for the room temperature and make sure it fits. Use a sleepsuit or vest underneath, and no hat.",
      },
      {
        q: "What should a 9-month-old wear on a hot day?",
        a: "A single layer of lightweight cotton, such as a short-sleeved vest or romper, plus a wide-brimmed hat and shade. Use SPF 30+ sunscreen on uncovered skin, keep out of the sun between 11am and 3pm where you can, and offer sips of water with meals as well as their milk (NHS).",
      },
    ],
    sources: [NHS_SUN_BABY, AAP_WINTER, AAP_CAR_SEAT_WINTER, AAP_SAFE_SLEEP],
  },
  {
    slug: "what-should-12-month-old-wear",
    chip: "What should a 12-month-old wear?",
    label: "12-month-old",
    focus: "both",
    question: "What should a 12-month-old wear?",
    title: "What should a 12-month-old wear?",
    metaTitle: "What should a 12-month-old wear? Temperature guide",
    description:
      "What a 12-month-old should wear outside and to sleep, by temperature: layers for new walkers, sun and drinks, winter car seats and sleeping bag TOG.",
    quickAnswer:
      "A 12-month-old should wear about one more layer than you, in thin layers that suit a busy toddler. Use the temperature: a single cotton layer and sun hat when hot, a vest, top and jumper when mild, and a coat, hat and mittens when cold. For sleep, keep using a sleeping bag matched to the room.",
    bullets: [
      "Dress for the temperature and how active they are",
      "Thin layers under car seat straps, coat over the top",
      "SPF 30+, shade and a sun hat in summer",
      "Sleep: sleeping bag matched to the room",
    ],
    changesHeading: "What changes at 12 months",
    changes: [
      "Around their first birthday, many babies are cruising or taking first steps. They switch between running about and sitting still in a buggy, so how warm they are changes through the day. Layers you can take off quickly still work best.",
      "Drinks change too. From 12 months, the NHS says water and breast milk or whole cows' milk should be their main drinks, which matters on hot days. If your baby was born prematurely, the NHS advises following safer sleep advice until a year from their due date, which may be after their first birthday.",
    ],
    outsideIntro:
      "Use the outdoor temperature, then adjust for how active they are. As a guide:",
    sleepIntro:
      "For sleep, the NHS ideal room temperature of about 16–20°C still applies. A sleeping bag stays on all night, however much a toddler moves. As a guide:",
    checkTip:
      "Toddlers are often sweaty after play and cool after a buggy ride. Check the back of the neck or tummy at each change of activity. Cool hands are still normal and are not a reason to add a coat.",
    extra: [
      {
        heading: "Sun, cold and car seats at 12 months",
        paragraphs: [
          "In summer, keep your child in the shade wherever you can from 11am to 3pm, and use a wide-brimmed hat, light clothes and SPF 30+ sunscreen on uncovered skin, reapplied every 2 hours (NHS).",
          "In winter, the AAP suggests several thin layers, plus a hat, mittens and insulated boots once they are walking outside, and changing wet clothes straight away. In the car, no puffy coats or snowsuits under the harness: buckle up in thin layers and put the coat over the top.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a 12-month-old wear the same as me outside?",
        a: "Similar, with one more layer when they are sitting in a buggy. Walking warms adults up, but a toddler riding in a pushchair does not get that warmth. When they are running about, they may need the same as you or less. Check the back of their neck after you change activity.",
      },
      {
        q: "Can a 12-month-old wear a puffy coat in the car seat?",
        a: "No. The AAP advises against bulky coats and snowsuits under a car seat harness, because the padding squashes in a crash and the straps end up loose. Take the coat off, buckle up in thin layers, check the straps with the pinch test, then lay the coat or a blanket over the straps.",
      },
      {
        q: "Does a 12-month-old still need a sleeping bag?",
        a: "A sleeping bag is still a simple way to keep a 1-year-old warm at night without loose bedding. Choose the TOG for the room temperature, ideally about 16–20°C, and make sure it is the right size for a walking toddler. Use a sleepsuit or pyjamas underneath, depending on the room.",
      },
      {
        q: "What should a 1-year-old wear on a hot day?",
        a: "One layer of lightweight cotton, a wide-brimmed sun hat and SPF 30+ sunscreen on uncovered skin. Plan outings outside 11am to 3pm where you can, keep to the shade, and offer drinks often. From 12 months, the NHS suggests water, breast milk or whole cows' milk as their main drinks.",
      },
    ],
    sources: [NHS_SUN_BABY, NHS_SIDS, AAP_WINTER, AAP_CAR_SEAT_WINTER],
  },
];

function agePages(): GuidePage[] {
  return AGE_GUIDES.map((age, index) => {
    const prev = AGE_GUIDES[index - 1];
    const next = AGE_GUIDES[index + 1];
    const related = [
      prev?.slug,
      next?.slug,
      "baby-clothes-19-21-degrees",
      age.focus === "outside"
        ? "baby-stroller-clothing"
        : "tog-guide-for-baby-sleep",
      "how-many-layers-should-baby-wear",
    ]
      .filter((slug): slug is string => Boolean(slug))
      .slice(0, 4);

    const sections: GuideSection[] = [
      { heading: age.changesHeading, paragraphs: age.changes },
      {
        heading: `What should a ${age.label} wear outside?`,
        paragraphs: [age.outsideIntro],
        list: outdoorBandSummaries(),
      },
    ];
    if (age.sleepIntro) {
      sections.push({
        heading: `What should a ${age.label} wear to sleep?`,
        paragraphs: [age.sleepIntro],
        list: sleepBandSummaries(),
      });
    }
    sections.push(
      {
        heading: `How to check your ${age.label} is not too hot or cold`,
        paragraphs: [CHEST_CHECK, age.checkTip],
      },
      ...age.extra.map((section, i) =>
        i === age.extra.length - 1
          ? {
              ...section,
              paragraphs: [...section.paragraphs, MEDICAL_DISCLAIMER],
            }
          : section,
      ),
    );

    return {
      ...layersPage({
        slug: age.slug,
        category: "age",
        question: age.question,
        title: age.title,
        metaTitle: age.metaTitle,
        description: age.description,
        quickAnswer: age.quickAnswer,
        bullets: age.bullets,
        sections,
        faqs: age.faqs,
        relatedSlugs: related,
        sources: age.sources,
      }),
      modifiedAt: GENERATED_REVIEWED,
    };
  });
}

/** Call to action and section link for each app's guides. */
const APP_CTA: Record<
  GuideApp,
  Pick<GuidePage, "ctaApp" | "ctaLabel" | "ctaHref" | "ctaBlurb">
> = {
  tinylayers: LAYERS_CTA,
  tinymeals: {
    ctaApp: "tinymeals",
    ctaLabel: "See TinyMeals",
    ctaHref: "/tinymeals",
    ctaBlurb:
      "One gentle meal a day for your baby’s age and stage, with ten first tastes and allergen tracking.",
  },
  tinyblooms: {
    ctaApp: "tinyblooms",
    ctaLabel: "See TinyBlooms",
    ctaHref: "/tinyblooms",
    ctaBlurb:
      "One age-right play idea at a time, for the awake windows you actually have.",
  },
  tinynaps: {
    ctaApp: "tinynaps",
    ctaLabel: "See TinyNaps",
    ctaHref: "/tinynaps",
    ctaBlurb:
      "A calm tracker for sleep, feeds and nappies, quick enough to use one-handed at 3am. Coming soon to iPhone.",
  },
  tinybundle: {
    ctaApp: "tinybundle",
    ctaLabel: "Explore TinyBundle",
    ctaHref: "/",
    ctaBlurb: "Four calm apps for the questions new parents actually ask.",
  },
};

function fromContent(app: GuideApp, guides: GuideContent[]): GuidePage[] {
  return guides.map((guide) => ({
    app,
    ...APP_CTA[app],
    ...guide,
    publishedAt: DATE,
    modifiedAt: guide.modifiedAt ?? DATE,
  }));
}

export const guidePages: GuidePage[] = [
  ...OUTDOOR_BANDS.map(outdoorBandPage),
  ...SLEEP_BANDS.map(sleepBandPage),
  ...agePages(),
  ...fromContent("tinylayers", LAYERS_GUIDES),
  ...fromContent("tinymeals", MEALS_GUIDES),
  ...fromContent("tinyblooms", BLOOMS_GUIDES),
  ...fromContent("tinynaps", NAPS_GUIDES),
  ...fromContent("tinybundle", BUNDLE_GUIDES),
];

export function getGuide(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}

/** A related slug as a link: a live guide, or the blog post that replaced a removed guide. */
export function getRelatedLink(
  slug: string,
): { href: string; label: string } | undefined {
  const guide = getGuide(slug);
  if (guide) return { href: `/guides/${guide.slug}`, label: guide.question };
  const post = getLayersArticle(GUIDES_MOVED_TO_BLOG[slug] ?? "");
  return post
    ? { href: `/tinylayers/blog/${post.slug}`, label: post.title }
    : undefined;
}

export function getGuideSlugs(): string[] {
  return guidePages.map((p) => p.slug);
}

export function getGuidesByApp(app: GuidePage["app"]): GuidePage[] {
  return guidePages.filter((p) => p.app === app);
}

const TOPICS: Record<GuidePage["category"], string> = {
  weather: "Weather",
  combo: "Weather",
  sleep: "Sleep",
  situation: "Going out",
  age: "By age",
  development: "Play",
  loneliness: "Wellbeing",
  cooking: "Weaning",
  "parenting-apps": "Apps",
  tracking: "Tracking",
};

/** The short topic label shown above a guide's title on cards. */
export function guideTopic(guide: GuidePage): string {
  return TOPICS[guide.category];
}

/** Reading time in minutes at 200 words a minute. */
export function readMinutes(guide: GuidePage): number {
  const text = [
    guide.quickAnswer,
    ...guide.bullets,
    ...guide.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])]),
    ...guide.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
