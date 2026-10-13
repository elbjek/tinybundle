import { SiteFooter } from "@/components/site/site-footer";

export { LayersHeader } from "@/components/tinylayers/header";

export function LayersFooter() {
  return (
    <div className="font-nunito text-tb-ink">
      <SiteFooter
        app="tinylayers"
        blurb="four calm apps for the first year, from what to wear to what’s for lunch."
        product={[
          { href: "/tinylayers#how", label: "How it works" },
          { href: "/tinylayers#modes", label: "Modes" },
          { href: "/tinylayers#faq", label: "FAQ" },
        ]}
        note="© 2026 TinyLayers. General dressing guidance only, not medical advice."
      />
    </div>
  );
}
