/** TinyMeals bowl — matches homepage AppIcon. */
export function MealsMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
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
  );
}
