import { pageShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "The TinyLayers Guide: calm answers on dressing your baby";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return pageShareImage({ app: "tinylayers", eyebrow: "TinyLayers blog", title: "Calm answers on dressing your baby" });
}
