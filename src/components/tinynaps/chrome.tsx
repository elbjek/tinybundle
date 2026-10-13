import { AppTile } from "@/components/app-identity";
import { MobileMenu } from "@/components/site/mobile-menu";

const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#try", label: "Try it" },
  { href: "#night", label: "Night mode" },
  { href: "#guides", label: "Guides" },
  { href: "#faq", label: "FAQ" },
];

/** TinyNaps nav. The button goes to the App Store once the app is live, otherwise to the launch list. */
export function NapsHeader({ ctaHref, ctaLabel, external }: { ctaHref: string; ctaLabel: string; external: boolean }) {
  return (
    <header className="sticky top-0 z-20 bg-[rgba(254,248,243,0.92)] backdrop-blur-[10px]">
      <div className="mx-auto box-border flex max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-3">
        <a href="#top" className="flex flex-none items-center gap-2.5 text-tb-ink">
          <AppTile app="tinynaps" className="h-[34px] w-[34px] rounded-[11px]" markClassName="h-[26px] w-[26px]" />
          <span className="text-lg font-extrabold tracking-[-0.01em]">TinyNaps</span>
        </a>
        <nav aria-label="Main" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap text-sm font-bold text-tb-body hover:text-tb-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <a
          href={ctaHref}
          rel={external ? "noopener" : undefined}
          className="flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] bg-[#232F48] px-[clamp(16px,2vw,22px)] text-[14.5px] font-extrabold text-white hover:bg-[#1A2337] hover:text-white active:scale-[0.97]"
        >
          {ctaLabel}
        </a>
        <MobileMenu id="naps-menu" items={NAV} />
      </div>
    </header>
  );
}
