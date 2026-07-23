const icons: Record<string, (className: string) => React.ReactNode> = {
  tinyhaven: (className) => (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 21.5 24 9l15 12.5V36a3.5 3.5 0 0 1-3.5 3.5h-23A3.5 3.5 0 0 1 9 36V21.5Z"
        stroke="#e2a13d"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M28.5 23.5a6.5 6.5 0 1 1-6.9 9.4 7.5 7.5 0 0 0 6.9-9.4Z"
        fill="#e2a13d"
      />
    </svg>
  ),
  tinylayers: (className) => (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 32a14 14 0 0 1 28 0" stroke="#3f6ea5" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 32a8 8 0 0 1 16 0" stroke="#7ba3cc" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="32" r="3.5" fill="#e2a13d" />
    </svg>
  ),
  tinyblooms: (className) => (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 39V22" stroke="#7a8a5a" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M24 24c0-6-4-9.5-10-10 0 6 4 9.5 10 10Zm0-4c0-6 4-9.5 10-10 0 6-4 9.5-10 10Z"
        stroke="#7a8a5a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M16 39h16" stroke="#7a8a5a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  tinymeals: (className) => (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 24h30a15 15 0 0 1-30 0Z"
        stroke="#c97b4a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 19s-4.2-2.6-4.2-5.4c0-1.5 1.1-2.6 2.5-2.6.8 0 1.4.5 1.7 1.1.3-.6.9-1.1 1.7-1.1 1.4 0 2.5 1.1 2.5 2.6 0 2.8-4.2 5.4-4.2 5.4Z"
        stroke="#c97b4a"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function AppIcon({
  slug,
  className = "h-12 w-12",
}: {
  slug: string;
  className?: string;
}) {
  return <>{icons[slug]?.(className)}</>;
}
