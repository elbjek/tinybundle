import { appShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyMeals: starting solids, one bite at a time. Today’s meal for your baby’s age and stage.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return appShareImage("tinymeals");
}
