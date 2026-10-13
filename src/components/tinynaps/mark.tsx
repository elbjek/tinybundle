/** TinyNaps mark: a warm crescent moon and two stars. Light on purpose: it sits on the navy TinyNaps tile. */
export function NapsMark({ className = "h-8 w-8", size }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} aria-hidden="true">
      <path d="M41 39A11 11 0 1 1 28 26a9 9 0 0 0 13 13Z" transform="translate(-9 -10) scale(1.28)" fill="#F2C98B" />
      <circle cx="46" cy="17" r="3.8" fill="#E2A03F" />
      <circle cx="53" cy="26" r="2.6" fill="#F0B66E" />
    </svg>
  );
}
