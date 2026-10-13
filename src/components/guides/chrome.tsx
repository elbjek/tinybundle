import Link from "next/link";
import { APP_IDENTITY, BundleQuads } from "@/components/app-identity";
import { Backdrop } from "@/components/site/backdrop";
import { COOKIE_SETTINGS_HREF } from "@/lib/consent";
import { HUB_ORDER, hubHref } from "@/lib/guides/hubs";
import type { GuideApp } from "@/lib/guides/types";

/** Header on the guide hubs and articles: TinyBundle home, Our apps / Guides / FAQ, and Explore the apps. */
export function GuidesHeader() {
  return (
    <header className="sticky top-0 z-20 bg-[rgba(254,248,243,0.92)] backdrop-blur-[10px]">
      <div className="mx-auto box-border flex max-w-[1180px] items-center gap-[clamp(10px,2vw,24px)] px-[clamp(16px,4vw,40px)] py-2.5">
        <Link href="/" className="flex flex-none items-center gap-2 text-tb-ink hover:text-tb-ink">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <BundleQuads />
          </svg>
          <span className="text-[17px] font-extrabold">TinyBundle</span>
        </Link>
        <nav aria-label="Main" className="hidden flex-1 justify-center gap-[clamp(14px,2.4vw,30px)] min-[760px]:flex">
          <Link href="/#apps" className="text-[13.5px] font-bold text-tb-body hover:text-tb-ink">
            Our apps
          </Link>
          <Link href={hubHref("tinybundle")} className="text-[13.5px] font-extrabold text-tb-ink">
            Guides
          </Link>
          <Link href="/#faq" className="text-[13.5px] font-bold text-tb-body hover:text-tb-ink">
            FAQ
          </Link>
        </nav>
        <div className="flex-1 min-[760px]:hidden" />
        <Link
          href="/#apps"
          className="flex h-10 flex-none items-center rounded-2xl bg-[#232F48] px-4 text-[13.5px] font-extrabold text-white hover:bg-[#1A2337] hover:text-white active:scale-[0.97]"
        >
          Explore the apps
        </Link>
      </div>
    </header>
  );
}

/** Footer on the guide hubs and articles: every hub, plus privacy. */
export function GuidesFooter() {
  return (
    <footer className="mt-[clamp(56px,7vw,88px)]">
      <div className="mx-auto box-border flex max-w-[1180px] flex-wrap items-center justify-between gap-x-8 gap-y-[18px] px-[clamp(18px,4vw,40px)] pb-11 pt-8">
        <p className="text-[13px] text-tb-muted">&copy; 2026 TwoBrickLabs. General guidance only, not medical advice.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-[22px] gap-y-2.5">
          {HUB_ORDER.map((app) => (
            <Link key={app} href={hubHref(app)} className="text-sm font-bold text-tb-body hover:text-tb-ink">
              {APP_IDENTITY[app].name} guides
            </Link>
          ))}
          <Link href="/privacy" className="text-sm font-bold text-tb-body hover:text-tb-ink">
            Privacy
          </Link>
          <a href={COOKIE_SETTINGS_HREF} className="text-sm font-bold text-tb-body hover:text-tb-ink">
            Cookie settings
          </a>
        </nav>
      </div>
    </footer>
  );
}

/** The fixed background shapes behind the hubs and articles, with one shape in the app's colour. */
export function GuidesBackdrop({ app }: { app: GuideApp }) {
  return (
    <Backdrop
      shapes={[
        { style: { top: "12%", right: -60, width: 220, height: 220, borderRadius: 60, background: "#F6D9A8", opacity: 0.45, transform: "rotate(14deg)" }, animation: "tm-float-a 9s ease-in-out infinite" },
        { style: { top: "58%", left: -120, width: 300, height: 300, borderRadius: 150, opacity: 0.7, background: APP_IDENTITY[app].colors.tile }, animation: "tm-float-b 10s ease-in-out infinite" },
        { style: { top: "82%", right: "14%", width: 90, height: 90, borderRadius: 45, background: "#E3EBDC", opacity: 0.8 }, animation: "tm-float-b 7s ease-in-out infinite 1s" },
        { style: { top: "30%", left: "6%", width: 46, height: 46, borderRadius: 14, background: "#F6D9A8", opacity: 0.55, transform: "rotate(-18deg)" }, animation: "tm-float-a 7.5s ease-in-out infinite .6s" },
        { style: { top: "22%", left: "48%", width: 9, height: 9, borderRadius: 5, background: "#E2A03F" }, animation: "tm-twinkle 2.4s ease-in-out infinite" },
        { style: { top: "70%", left: "34%", width: 8, height: 8, borderRadius: 4, background: "#7FA8CF" }, animation: "tm-twinkle 2.4s ease-in-out infinite .8s" },
      ]}
    />
  );
}
