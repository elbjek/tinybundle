import { Hero } from "@/components/sections/hero";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Values } from "@/components/sections/values";
import { Newsletter } from "@/components/sections/newsletter";

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
