import { bloomsOg, createOgImage, ogSize } from "@/lib/og";

export const alt =
  "TinyBlooms — One lovely thing to do with baby. Age-based ideas, coming soon.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage(bloomsOg);
}
