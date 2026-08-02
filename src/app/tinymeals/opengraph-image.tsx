import { createOgImage, mealsOg, ogSize } from "@/lib/og";

export const alt =
  "TinyMeals - What can I safely make for baby today? Stage-right baby recipes, coming soon.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage(mealsOg);
}
