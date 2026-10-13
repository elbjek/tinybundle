import { pageShareImage, shareImageSize } from "@/lib/share-image";
import { getLayersArticle, layersArticles } from "@/lib/tinylayers/articles";

export const alt = "A TinyLayers article on dressing your baby";
export const size = shareImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return layersArticles.map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getLayersArticle(slug);
  return pageShareImage({ app: "tinylayers", eyebrow: "TinyLayers blog", title: article?.title ?? "Calm answers on dressing your baby" });
}
