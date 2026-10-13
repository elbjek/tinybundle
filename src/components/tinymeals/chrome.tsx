import { SiteFooter } from "@/components/site/site-footer";

export { MealsHeader } from "@/components/tinymeals/header";

export function MealsFooter() {
  return (
    <SiteFooter
      app="tinymeals"
      product={[
        { href: "/tinymeals#how", label: "How it works" },
        { href: "/tinymeals#plan", label: "First foods" },
        { href: "/tinymeals#faq", label: "FAQ" },
      ]}
      note="© 2026 TinyMeals. General feeding guidance only, not medical advice."
    />
  );
}
