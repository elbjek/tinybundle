import { pageShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "TinyBundle privacy policy";
export const size = shareImageSize;
export const contentType = "image/png";

export default function Image() {
  return pageShareImage({ app: "tinybundle", eyebrow: "Legal", title: "Privacy policy for the TinyBundle apps and website" });
}
