/** Deterministic outfit copy aligned with TinyLayers guidance tables. */

export type SleepOutfit = {
  tog: string;
  weight: string;
  layers: string;
  summary: string;
};

export type OutdoorOutfit = {
  layers: string[];
  summary: string;
  note?: string;
};

export function sleepOutfitFor(tempC: number): SleepOutfit {
  if (tempC >= 27) {
    return {
      tog: "0.2",
      weight: "ultra-light",
      layers: "short-sleeve cotton bodysuit under an ultra-light sleep sack (or bodysuit only)",
      summary: `In a ${tempC}°C room, keep sleepwear ultra-light — a short-sleeve bodysuit under a 0.2 TOG sack, or bodysuit alone if the room stays that warm.`,
    };
  }
  if (tempC >= 24) {
    return {
      tog: "0.5",
      weight: "light",
      layers: "short-sleeve cotton bodysuit under a light (0.5 TOG) sleep sack",
      summary: `At ${tempC}°C, a short-sleeve bodysuit under a 0.5 TOG sleep sack is the usual starting point.`,
    };
  }
  if (tempC >= 22) {
    return {
      tog: "1.0",
      weight: "medium",
      layers: "short-sleeve cotton bodysuit under a 1.0 TOG sleep sack",
      summary: `At ${tempC}°C, try a short-sleeve bodysuit under a 1.0 TOG sleep sack, then confirm with the chest check.`,
    };
  }
  if (tempC >= 20) {
    return {
      tog: "1.0",
      weight: "medium",
      layers: "long-sleeve cotton pajamas or bodysuit under a 1.0 TOG sleep sack",
      summary: `At ${tempC}°C (a typical nursery), a long-sleeve bodysuit or pajamas under a 1.0 TOG sleep sack is the common answer.`,
    };
  }
  if (tempC >= 18) {
    return {
      tog: "2.5",
      weight: "warm",
      layers: "long-sleeve cotton pajamas under a warm (2.5 TOG) sleep sack",
      summary: `At ${tempC}°C, step up to a 2.5 TOG sleep sack with long-sleeve pajamas.`,
    };
  }
  if (tempC >= 16) {
    return {
      tog: "2.5",
      weight: "warm",
      layers: "cotton bodysuit + long-sleeve pajamas under a 2.5 TOG sleep sack",
      summary: `At ${tempC}°C, use a warm 2.5 TOG sack with a bodysuit and long-sleeve pajamas underneath.`,
    };
  }
  return {
    tog: "2.5–3.5",
    weight: "extra-warm",
    layers: "bodysuit + long-sleeve pajamas under a warm-to-extra-warm sleep sack",
    summary: `Below 16°C, prioritize warming the room if you can. If you cannot, use a warmer sack (around 2.5–3.5 TOG) with a bodysuit and pajamas — never loose blankets.`,
  };
}

export function outdoorOutfitFor(tempC: number): OutdoorOutfit {
  if (tempC >= 28) {
    return {
      layers: ["Light short-sleeve bodysuit or romper", "Sun hat", "Shade whenever possible"],
      summary: `At ${tempC}°C outside, keep baby in light short sleeves, a sun hat, and shade. Skip extra layers.`,
      note: "Under 6 months, prioritize shade and a brimmed hat over sunscreen (AAP).",
    };
  }
  if (tempC >= 24) {
    return {
      layers: ["Short-sleeve bodysuit or romper", "Sun hat", "Light blanket only if needed in shade"],
      summary: `At ${tempC}°C, a short-sleeve bodysuit or romper plus a sun hat is usually enough.`,
    };
  }
  if (tempC >= 20) {
    return {
      layers: ["Short-sleeve bodysuit", "Light pants or romper", "Light hat for sun"],
      summary: `At ${tempC}°C, dress in a short-sleeve bodysuit with light pants or a romper, plus a light hat in the sun.`,
    };
  }
  if (tempC >= 15) {
    return {
      layers: ["Long-sleeve bodysuit", "Light jacket or cardigan", "Thin hat"],
      summary: `At ${tempC}°C, start with a long-sleeve bodysuit, a light jacket or cardigan, and a thin hat.`,
    };
  }
  if (tempC >= 10) {
    return {
      layers: ["Long-sleeve base layer", "Warm mid layer", "Jacket", "Warm hat"],
      summary: `At ${tempC}°C, use a base layer, mid layer, jacket, and warm hat — then check the chest after about 10 minutes outside.`,
    };
  }
  return {
    layers: ["Warm base layer", "Fleece mid layer", "Insulated outer layer", "Warm hat + mittens"],
    summary: `At ${tempC}°C, think warm base + fleece mid + insulated outer, with hat and mittens. Pack a spare layer.`,
  };
}

export function cToF(tempC: number): number {
  return Math.round((tempC * 9) / 5 + 32);
}

export const CHEST_CHECK =
  "About 10–15 minutes after settling (or outside), feel the chest or back of the neck: warm and dry is right; sweaty means remove a layer; cool means add one. Cool hands and feet alone are normal.";

export const MEDICAL_DISCLAIMER =
  "This is general dressing guidance, not medical advice. Every baby is different — for fever, premature birth, or any medical concern, follow your clinician.";
