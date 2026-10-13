import { appShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyLayers: too warm or too cold? What your baby should wear for tonight’s room.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return appShareImage("tinylayers");
}
