import { pageShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyBundle terms of use";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return pageShareImage({ app: "tinybundle", eyebrow: "Legal", title: "Terms of use for the TinyBundle apps and website" });
}
