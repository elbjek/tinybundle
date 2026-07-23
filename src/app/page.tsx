import { Hero } from "@/components/sections/hero";
import { AppsShowcase } from "@/components/sections/apps-showcase";
import { Values } from "@/components/sections/values";

export default function Home() {
  return (
    <main>
      <Hero />
      <AppsShowcase />
      <Values />
    </main>
  );
}
