/** TinyBlooms sprout — matches homepage AppIcon. */
export function BloomsMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
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
  );
}
