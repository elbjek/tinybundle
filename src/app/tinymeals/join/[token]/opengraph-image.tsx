import { pageShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "You’re invited to share meals on TinyMeals";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return pageShareImage({ app: "tinymeals", eyebrow: "TinyMeals invite", title: "You’re invited to share meals on TinyMeals" });
}
