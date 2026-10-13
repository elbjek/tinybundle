/** The Apple logo every App Store button carries. Takes the button's text colour. */
export function AppleLogo({ className = "h-6 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 22" fill="currentColor" className={`flex-none ${className}`} aria-hidden="true">
      <path d="M14.7 11.6c0-2.3 1.9-3.5 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0 0-2.4-.9-2.4-3.6ZM12.5 4.3c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" />
    </svg>
  );
}

/** What every App Store button says: the Apple logo, then "Download on the / App Store" on two lines. */
export function StoreLabel() {
  return (
    <>
      <AppleLogo />
      <span className="block text-left">
        <span className="block text-[11px] font-bold leading-[1.1] opacity-85">Download on the</span>
        <span className="block text-[17px] font-extrabold leading-[1.2]">App Store</span>
      </span>
    </>
  );
}

/** Black "Download on the App Store" badge used on every app page. */
export function AppStoreBadge({ href }: { href: string }) {
  return (
    <a
      className="inline-flex h-14 items-center gap-2.5 rounded-[10px] bg-black py-2 pl-3.5 pr-[18px] text-white transition-opacity hover:opacity-90"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
    >
      <StoreLabel />
    </a>
  );
}
