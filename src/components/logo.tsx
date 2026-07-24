import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 14.5 16 6l10 8.5V24a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 6 24v-9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 21.5s-3.4-2.1-3.4-4.3c0-1.2.9-2 2-2 .7 0 1.2.4 1.4.9.2-.5.7-.9 1.4-.9 1.1 0 2 .8 2 2 0 2.2-3.4 4.3-3.4 4.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 text-ink ${className}`}
    >
      <LogoMark className="h-8 w-8 text-amber" />
      <span className="text-2xl font-extrabold tracking-tight">
        TinyBundle
      </span>
    </Link>
  );
}
