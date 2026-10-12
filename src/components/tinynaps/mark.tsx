/** TinyNaps mark: a crescent moon resting on a cloud line, with a small star. */
export function NapsMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M38 14a17 17 0 1 0 14 26.5A15 15 0 0 1 38 14Z" fill="#C9C0E6" stroke="#6F64A8" strokeWidth="4.5" strokeLinejoin="round" />
      <path d="M12 50h40" stroke="#7FA0BC" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="47" cy="17" r="3.5" fill="#E2A03F" />
    </svg>
  );
}
