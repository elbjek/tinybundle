/** Deterministic outfit copy aligned with TinyLayers guidance tables (UK English). */

export type SleepOutfit = {
  tog: string;
  weight: string;
  layers: string;
  summary: string;
  /** Item-by-item outfit, top to bottom. */
  list: string[];
};

export type OutdoorOutfit = {
  layers: string[];
  summary: string;
  /** One-line outfit for comparison tables across bands. */
  short: string;
};

export function sleepOutfitFor(tempC: number): SleepOutfit {
  if (tempC >= 27) {
    return {
      tog: "0.2",
      weight: "ultra-light",
      layers:
        "a short-sleeved cotton vest, alone or under a 0.2 TOG sleeping bag",
      summary: `In a ${tempC}°C room, a short-sleeved vest on its own, or under a 0.2 TOG sleeping bag, is usually enough. On the hottest nights a vest or just a nappy is fine.`,
      list: [
        "Nappy",
        "Short-sleeved cotton vest, or no vest on the very hottest nights",
        "A 0.2 TOG sleeping bag only if the room cools in the early hours",
        "No hat, no socks, no blankets",
      ],
    };
  }
  if (tempC >= 24) {
    return {
      tog: "0.5",
      weight: "light",
      layers: "a short-sleeved cotton vest under a 0.5 TOG sleeping bag",
      summary: `At ${tempC}°C, a short-sleeved cotton vest under a light 0.5 TOG sleeping bag is the usual starting point.`,
      list: [
        "Nappy",
        "Short-sleeved cotton vest",
        "0.5 TOG sleeping bag, or the vest alone if your baby feels hot",
        "No hat and no extra blankets",
      ],
    };
  }
  if (tempC >= 22) {
    return {
      tog: "1.0",
      weight: "medium",
      layers: "a short-sleeved cotton vest under a 1.0 TOG sleeping bag",
      summary: `At ${tempC}°C, try a short-sleeved vest under a 1.0 TOG sleeping bag, then check the back of the neck.`,
      list: [
        "Nappy",
        "Short-sleeved cotton vest",
        "1.0 TOG sleeping bag",
        "No hat and no extra blankets",
      ],
    };
  }
  if (tempC >= 20) {
    return {
      tog: "1.0",
      weight: "medium",
      layers: "a cotton sleepsuit (or long-sleeved vest) under a 1.0 TOG sleeping bag",
      summary: `At ${tempC}°C, a cotton sleepsuit or long-sleeved vest under a 1.0 TOG sleeping bag is the common answer.`,
      list: [
        "Nappy",
        "Cotton sleepsuit or long-sleeved vest",
        "1.0 TOG sleeping bag",
        "No hat and no extra blankets",
      ],
    };
  }
  if (tempC >= 18) {
    return {
      tog: "2.5",
      weight: "warm",
      layers: "a long-sleeved cotton sleepsuit under a 2.5 TOG sleeping bag",
      summary: `At ${tempC}°C, step up to a 2.5 TOG sleeping bag over a long-sleeved cotton sleepsuit.`,
      list: [
        "Nappy",
        "Long-sleeved cotton sleepsuit",
        "2.5 TOG sleeping bag",
        "No hat and no extra blankets",
      ],
    };
  }
  if (tempC >= 16) {
    return {
      tog: "2.5",
      weight: "warm",
      layers: "a vest plus a long-sleeved sleepsuit under a 2.5 TOG sleeping bag",
      summary: `At ${tempC}°C, use a warm 2.5 TOG sleeping bag with a vest and a long-sleeved sleepsuit underneath.`,
      list: [
        "Nappy",
        "Short or long-sleeved cotton vest",
        "Long-sleeved sleepsuit with feet",
        "2.5 TOG sleeping bag",
        "No hat and no extra blankets",
      ],
    };
  }
  return {
    tog: "2.5–3.5",
    weight: "extra-warm",
    layers:
      "a vest plus a long-sleeved sleepsuit under a warm (2.5 to 3.5 TOG) sleeping bag",
    summary: `Below 16°C, warm the room if you can. If you cannot, use a vest and a long-sleeved sleepsuit under a warm sleeping bag (around 2.5 to 3.5 TOG), never loose blankets.`,
    list: [
      "Nappy",
      "Long-sleeved cotton vest",
      "Long-sleeved sleepsuit with feet",
      "Warm sleeping bag, 2.5 TOG or the maker's winter rating (often 3.5 TOG)",
      "No hat, no duvet and no loose blankets",
    ],
  };
}

export function outdoorOutfitFor(tempC: number): OutdoorOutfit {
  if (tempC >= 27) {
    return {
      layers: [
        "One thin, loose layer: a short-sleeved cotton vest or romper",
        "Wide-brimmed sun hat with a neck flap",
        "Shade: a clip-on parasol or sunshade on the pram",
        "No extra layers, except a thin top for air conditioning",
      ],
      summary: `At ${tempC}°C outside, one thin cotton layer, a wide-brimmed hat and shade is all your baby needs.`,
      short: "one thin cotton vest or romper, wide-brimmed hat, full shade",
    };
  }
  if (tempC >= 24) {
    return {
      layers: [
        "One layer of lightweight cotton: a short-sleeved romper or vest",
        "Loose, long-sleeved cotton top for sun cover if you cannot find shade",
        "Wide-brimmed sun hat",
        "Parasol or sunshade on the pram",
      ],
      summary: `At ${tempC}°C, a single layer of lightweight cotton plus a wide-brimmed hat is usually enough.`,
      short: "single layer of lightweight cotton, wide-brimmed hat, shade",
    };
  }
  if (tempC >= 22) {
    return {
      layers: [
        "Short-sleeved cotton vest",
        "Light cotton trousers, or a romper instead of both",
        "Thin long-sleeved cotton top in the bag for sun or breeze",
        "Wide-brimmed sun hat",
      ],
      summary: `At ${tempC}°C, a short-sleeved vest with light cotton trousers or a romper, plus a sun hat, is usually right.`,
      short: "short-sleeved vest and light trousers or a romper, sun hat",
    };
  }
  if (tempC >= 19) {
    return {
      layers: [
        "Cotton vest (short or long-sleeved)",
        "Light cotton sleepsuit, or a top and trousers",
        "Thin cardigan in the bag for shade or wind",
        "Sun hat if it is sunny",
      ],
      summary: `At ${tempC}°C, a cotton vest under a light sleepsuit, with a thin cardigan to hand, is usually right.`,
      short: "vest and light sleepsuit, thin cardigan to hand",
    };
  }
  if (tempC >= 15) {
    return {
      layers: [
        "Long-sleeved cotton vest",
        "Sleepsuit, or top and leggings",
        "Cardigan, jumper or light jacket",
        "Socks, and a thin hat if it is breezy",
      ],
      summary: `At ${tempC}°C, start with a vest, a sleepsuit and a cardigan or light jacket.`,
      short: "vest, sleepsuit and a cardigan or light jacket",
    };
  }
  if (tempC >= 10) {
    return {
      layers: [
        "Long-sleeved cotton vest",
        "Sleepsuit, or top and leggings",
        "Warm cardigan or jumper",
        "Pramsuit or coat for the pram (off in the car seat)",
        "Hat, socks and mittens",
      ],
      summary: `At ${tempC}°C, use a vest, sleepsuit, warm cardigan, a pramsuit or coat and a hat, then check the back of the neck after a few minutes.`,
      short: "vest, sleepsuit, warm cardigan, pramsuit, hat and mittens",
    };
  }
  return {
    layers: [
      "Long-sleeved vest",
      "Sleepsuit",
      "Fleece or knitted mid layer",
      "Insulated pramsuit",
      "Warm hat, mittens and socks",
    ],
    summary: `At ${tempC}°C, use a vest, sleepsuit, fleece and an insulated pramsuit, with hat and mittens. Pack a spare layer.`,
    short: "vest, sleepsuit, fleece, insulated pramsuit, hat and mittens",
  };
}

export function cToF(tempC: number): number {
  return Math.round((tempC * 9) / 5 + 32);
}

export const CHEST_CHECK =
  "Feel the back of your baby's neck, their chest or their tummy. Warm and dry means they are dressed right. Sweaty or hot means take off a layer of clothing or bedding. Cool hands and feet on their own are normal, so do not add layers just because fingers or toes feel cold.";

export const MEDICAL_DISCLAIMER =
  "This is general dressing guidance, not medical advice. If you are worried your baby is unwell, call NHS 111 or your GP. In an emergency, call 999 or your local emergency number.";
