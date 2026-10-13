/** The TinyLayers mark: two blue arcs tucked over a gold dot. `animated` draws the arcs in and drops the dot. */
export function LayersMark({ className = "h-8 w-8", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`overflow-visible ${className}`} aria-hidden="true">
      <path
        d="M11 43a21 21 0 0 1 42 0"
        stroke="#3D6DA8"
        strokeWidth="5.5"
        strokeLinecap="round"
        pathLength={100}
        className={animated ? "[stroke-dasharray:100] [animation:tm-draw_.9s_cubic-bezier(.6,0,.2,1)_both_.2s]" : undefined}
      />
      <path
        d="M21 43a11 11 0 0 1 22 0"
        stroke="#7FA8CF"
        strokeWidth="5.5"
        strokeLinecap="round"
        pathLength={100}
        className={animated ? "[stroke-dasharray:100] [animation:tm-draw_.8s_cubic-bezier(.6,0,.2,1)_both_.45s]" : undefined}
      />
      <circle
        cx="32"
        cy="43"
        r="5"
        fill="#E2A03F"
        className={animated ? "[animation:tm-drop_.7s_cubic-bezier(.34,1.6,.64,1)_both_.95s]" : undefined}
      />
    </svg>
  );
}
