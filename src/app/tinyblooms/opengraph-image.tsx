import { appShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyBlooms: five spare minutes? One small, age-right play idea for right now.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return appShareImage("tinyblooms");
}
