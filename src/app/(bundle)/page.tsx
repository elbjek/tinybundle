import type { Metadata } from "next";
import { absoluteUrl, bundleOgImage } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Values } from "@/components/sections/values";
import { Newsletter } from "@/components/sections/newsletter";

const title = "TinyBundle - Four moments. One journey.";
const description =
  "From the late nights to the everyday wins, TinyBundle is here for every tiny moment of parenting. Meet TinyHaven, TinyLayers, TinyBlooms, and TinyMeals.";
const ogTitle = "Four moments. One journey. We've got you.";
const ogDescription =
  "Four calm apps for late nights, dressing, everyday growth, and meals. TinyHaven, TinyLayers, TinyBlooms, and TinyMeals.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: ogTitle,
    description: ogDescription,
    siteName: "TinyBundle",
    locale: "en_US",
    images: [bundleOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [bundleOgImage.url],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AppsShowcase />
      <Values />
      <Newsletter />
    </main>
  );
}
