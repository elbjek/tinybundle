import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { guidePages } from "@/lib/guides/catalog";
import { HUB_ORDER, hubHref } from "@/lib/guides/hubs";
import { SITE_URL } from "@/lib/seo";
import { layersArticles } from "@/lib/tinylayers/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const appPages = apps.map((app) => ({
    url: `${SITE_URL}/${app.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: app.live ? 0.8 : 0.5,
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
    ...HUB_ORDER.map((app) => ({
      url: `${SITE_URL}${hubHref(app)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
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
    ...["privacy", "terms"].map((page) => ({
      url: `${SITE_URL}/${page}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...layersBlog,
    ...guides,
  ];
}
