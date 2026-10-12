import Link from "next/link";
import { NapsMark } from "@/components/tinynaps/mark";

const NAV = [
  { href: "#features", label: "What it tracks" },
  { href: "#night", label: "Built for 3am" },
  { href: "#faq", label: "FAQ" },
];

export function NapsHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-tb-border bg-tb/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-3">
        <Link href="/tinynaps" className="flex flex-none items-center gap-2.5 text-tb-ink" aria-label="TinyNaps home">
          <NapsMark className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-[-0.01em]">TinyNaps</span>
        </Link>
        <nav aria-label="TinyNaps" className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap text-sm font-bold text-tb-body hover:text-tb-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <Link
          href="/#tips"
          className="flex h-11 flex-none items-center whitespace-nowrap rounded-[22px] bg-naps-lavender-deep px-[clamp(16px,2vw,22px)] text-[14.5px] font-extrabold text-white transition-colors hover:bg-naps-lavender-ink active:scale-[0.97]"
        >
          Get notified
        </Link>
      </div>
    </header>
  );
}
