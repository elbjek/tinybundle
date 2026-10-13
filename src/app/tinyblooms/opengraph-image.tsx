import { bloomsOg, createOgImage, ogSize } from "@/lib/og";

export const alt = "TinyBlooms: baby activities, milestones and memories, ages 0 to 5.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage(bloomsOg);
}
