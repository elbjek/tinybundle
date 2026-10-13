import { cToF, outdoorOutfitFor, sleepOutfitFor } from "@/lib/guides/outfits";

/** The night the hero, the check-in cards and the live demo all start from. */
export const DEMO_TEMP = 22;

export type OutfitContext = "sleep" | "out";
export type OutfitRow = { role: string; name: string; wearable: boolean };
export type OutfitAnswer = { title: string; pill: string; rows: OutfitRow[] };

/** First match wins, so the specific roles come before the broad ones. */
const ROLES: [RegExp, string][] = [
  [/^No /, "Skip"],
  [/sleeping bag/i, "Bag"],
  [/^(shade|parasol)/i, "Shade"],
  [/^(wide-brimmed sun hat|sun hat)/i, "Head"],
  [/\b(hat|socks|mittens)\b/i, "Extras"],
  [/sleepsuit|mid layer/i, "Middle"],
  [/trousers|leggings/i, "Legs"],
  [/\b(vest|romper)\b/i, "Base"],
];

const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

function toRows(items: string[]): OutfitRow[] {
  return items
    .filter((item) => item !== "Nappy")
    .map((name) => {
      const role = ROLES.find(([pattern]) => pattern.test(name))?.[1] ?? "Outer";
      return { role, name, wearable: role !== "Skip" && role !== "Shade" };
    });
}

/** The demo's answer card, straight from the fact-checked outfit tables the guides use. */
export function outfitAnswer(context: OutfitContext, tempC: number): OutfitAnswer {
  if (context === "sleep") {
    const outfit = sleepOutfitFor(tempC);
    return { title: capitalise(outfit.layers), pill: `${outfit.tog} TOG`, rows: toRows(outfit.list) };
  }
  const outfit = outdoorOutfitFor(tempC);
  return { title: capitalise(outfit.short), pill: `${cToF(tempC)}°F`, rows: toRows(outfit.layers) };
}
