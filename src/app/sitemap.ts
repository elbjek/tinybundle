import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { guidePages } from "@/lib/guides/catalog";
import { SITE_URL } from "@/lib/seo";
import { layersArticles } from "@/lib/tinylayers/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const appPages = apps.map((app) => ({
    url: `${SITE_URL}/${app.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: app.comingSoon ? 0.5 : 0.8,
  }));

  const layersBlog = [
    {
      url: `${SITE_URL}/tinylayers/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...layersArticles.map((article) => ({
      url: `${SITE_URL}/tinylayers/blog/${article.slug}`,
      lastModified: new Date(article.modifiedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const guides = [
    {
      url: `${SITE_URL}/guides`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...guidePages.map((guide) => ({
      url: `${SITE_URL}/guides/${guide.slug}`,
      lastModified: new Date(guide.modifiedAt),
      changeFrequency: "monthly" as const,
      priority: guide.category === "combo" ? 0.6 : 0.75,
    })),
  ];

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...appPages,
    {
      url: `${SITE_URL}/tinyhaven/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/tinyhaven/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    ...layersBlog,
    ...guides,
  ];
}
