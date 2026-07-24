import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Values } from "@/components/sections/values";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: { absolute: "TinyBundle — Four apps. One mission." },
  description:
    "From the late nights to the everyday wins, TinyBundle is here for every tiny moment of parenting. Meet TinyHaven, TinyLayers, TinyBlooms, and TinyMeals.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://tinybundle.com/",
    title: "TinyBundle — Four apps. One mission.",
    description:
      "From the late nights to the everyday wins, TinyBundle is here for every tiny moment of parenting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyBundle — Four apps. One mission.",
    description:
      "From the late nights to the everyday wins, TinyBundle is here for every tiny moment of parenting.",
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
