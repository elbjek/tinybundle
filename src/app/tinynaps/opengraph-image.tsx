import { appShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyNaps: awake at 2 am? Log sleep, feeds and diapers in one tap.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return appShareImage("tinynaps");
}
