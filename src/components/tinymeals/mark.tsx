/** TinyMeals bowl: heart, rim and bowl. `animated` draws it in once on load. */
export function MealsMark({ className = "h-8 w-8", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`overflow-visible ${className}`} aria-hidden="true">
      <path
        d="M18 36a14 14 0 0 0 28 0"
        stroke="#C06A22"
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={100}
        className={animated ? "[stroke-dasharray:100] [animation:tm-draw_.9s_cubic-bezier(.6,0,.2,1)_.2s_both]" : undefined}
      />
      <path
        d="M20 28h24"
        stroke="#D17A2A"
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={100}
        className={animated ? "[stroke-dasharray:100] [animation:tm-draw_.6s_cubic-bezier(.6,0,.2,1)_.45s_both]" : undefined}
      />
      <path
        d="M32 21c-1.9-2.1-5.2-3.5-5.2-6.4 0-1.8 1.4-3.1 3.1-3.1 1 0 1.7.4 2.1 1.2.4-.8 1.1-1.2 2.1-1.2 1.7 0 3.1 1.3 3.1 3.1 0 2.9-3.3 4.3-5.2 6.4Z"
        fill="#E8964A"
        className={animated ? "[animation:tm-drop_.7s_cubic-bezier(.34,1.6,.64,1)_.9s_both]" : undefined}
      />
    </svg>
  );
}
