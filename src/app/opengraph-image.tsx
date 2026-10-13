import { familyShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyBundle: four little apps, one job each. Calm parenting apps for baby sleep, first foods, play and daily care.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return familyShareImage();
}
