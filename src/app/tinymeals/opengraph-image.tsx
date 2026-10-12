import { createOgImage, mealsOg, ogSize } from "@/lib/og";

export const alt =
  "TinyMeals - Today’s meal, worked out for you. One gentle recipe a day for your baby’s age and stage.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage(mealsOg);
}
