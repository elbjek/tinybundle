import { createOgImage, mealsOg, ogSize } from "@/lib/og";

export const alt =
  "TinyMeals — Something good from what you have. Baby-friendly meals, coming soon.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage(mealsOg);
}
