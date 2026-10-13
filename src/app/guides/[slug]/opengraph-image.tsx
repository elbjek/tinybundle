import { APP_IDENTITY } from "@/components/app-identity";
import { getGuide, getGuideSlugs, guideTopic } from "@/lib/guides/catalog";
import { GUIDE_HUBS, HUB_ORDER, isHub } from "@/lib/guides/hubs";
import { familyShareImage, pageShareImage, shareImageSize } from "@/lib/share-image";

export const alt = "A TinyBundle parenting guide";
export const size = shareImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return [...HUB_ORDER, ...getGuideSlugs()].map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (isHub(slug)) {
    return pageShareImage({ app: slug, eyebrow: `${APP_IDENTITY[slug].name} guides`, title: GUIDE_HUBS[slug].h1 });
  }
  const guide = getGuide(slug);
  if (!guide) return familyShareImage();
  return pageShareImage({
    app: guide.app,
    eyebrow: `${APP_IDENTITY[guide.app].name} guide`,
    title: guide.question,
    topic: guideTopic(guide),
  });
}
