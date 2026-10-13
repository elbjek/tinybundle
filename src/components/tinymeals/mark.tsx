/** TinyMeals bowl: rim, inner curve and a warm dot. `animated` draws it in once on load. */
export function MealsMark({ className = "h-8 w-8", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`overflow-visible ${className}`} aria-hidden="true">
      <path
        d="M6 27h5a21 21 0 0 0 42 0h5"
        stroke="#C77245"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
        className={animated ? "[stroke-dasharray:100] motion-safe:[animation:tm-draw_.9s_cubic-bezier(.6,0,.2,1)_.2s_both]" : undefined}
      />
      <path
        d="M21 27a11 11 0 0 0 22 0"
        stroke="#A9C08A"
        strokeWidth="5.5"
        strokeLinecap="round"
        pathLength={100}
        className={animated ? "[stroke-dasharray:100] motion-safe:[animation:tm-draw_.7s_cubic-bezier(.6,0,.2,1)_.45s_both]" : undefined}
      />
      <circle
        cx="32"
        cy="16.5"
        r="5"
        fill="#E2A03F"
        className={animated ? "motion-safe:[animation:tm-drop_.7s_cubic-bezier(.34,1.6,.64,1)_.9s_both]" : undefined}
      />
    </svg>
  );
}
