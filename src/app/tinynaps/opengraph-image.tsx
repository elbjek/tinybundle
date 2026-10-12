import { createOgImage, napsOg, ogSize } from "@/lib/og";

export const alt =
  "TinyNaps - All the little things, in one place. Baby sleep, feeding and daily care tracker, coming soon.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage(napsOg);
}
