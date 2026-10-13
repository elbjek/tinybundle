import type { AppSlug } from "@/lib/apps";

/**
 * A white card with the app's App Store QR code, for live apps only. Hidden under 720px, where visitors are already on
 * a phone and tap the button instead.
 */
export function QrLink({ app, name, href, className }: { app: AppSlug; name: string; href: string; className: string }) {
  return (
    <a
      href={href}
      rel="noopener"
      aria-label={`Get ${name} on the App Store`}
      className={`hidden flex-none box-border bg-white shadow-[0_2px_10px_rgba(90,60,20,0.08)] min-[720px]:block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- a tiny static SVG needs no optimisation */}
      <img src={`/qr/${app}.svg`} alt={`QR code: ${name} on the App Store`} className="block h-full w-full" />
    </a>
  );
}
