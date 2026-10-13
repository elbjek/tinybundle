import { SiteFooter } from "@/components/site/site-footer";

export { MealsHeader } from "@/components/tinymeals/header";

export function MealsFooter() {
  return (
    <SiteFooter
      app="tinymeals"
      blurb="four calm apps for the first year, from what to wear to what’s for lunch."
      product={[
        { href: "/tinymeals#how", label: "How it works" },
        { href: "/tinymeals#plan", label: "First foods" },
        { href: "/tinymeals#faq", label: "FAQ" },
      ]}
      note="© 2026 TinyMeals. General feeding guidance only, not medical advice."
    />
  );
}
