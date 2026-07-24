/** TinyLayers "tucked in" mark — matches homepage / product logo (blue arcs + gold). */
export function LayersMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 32a14 14 0 0 1 28 0" stroke="#3f6ea5" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 32a8 8 0 0 1 16 0" stroke="#7ba3cc" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="32" r="3.5" fill="#e2a13d" />
    </svg>
  );
}
