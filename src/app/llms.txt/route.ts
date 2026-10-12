import { apps } from "@/lib/apps";
import { guidePages } from "@/lib/guides/catalog";
import { SITE_URL } from "@/lib/seo";
import { layersArticles } from "@/lib/tinylayers/articles";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# TinyBundle",
    "",
    "> Calm iPhone apps for the small, everyday questions of early parenthood, plus free guides for parents of babies.",
    "",
    "## Apps",
    ...apps.map(
      (app) =>
        `- [${app.name}](${SITE_URL}/${app.slug}): ${app.tagline}${app.comingSoon ? " (coming soon)" : ""}`,
    ),
    "",
    "## TinyLayers blog",
    ...layersArticles.map(
      (article) => `- [${article.title}](${SITE_URL}/tinylayers/blog/${article.slug}): ${article.description}`,
    ),
    "",
    "## Guides",
    ...guidePages.map((guide) => `- [${guide.title}](${SITE_URL}/guides/${guide.slug}): ${guide.quickAnswer}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
