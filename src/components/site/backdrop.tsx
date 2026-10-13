import type { CSSProperties } from "react";

export type BackdropShape = {
  /** Position, size and colour, straight from the design. */
  style: CSSProperties;
  /** CSS animation shorthand, e.g. "tm-float-a 9s ease-in-out infinite". */
  animation?: string;
};

/** The page's soft background shapes: one fixed layer behind everything, never inside the hero. */
export function Backdrop({ shapes }: { shapes: BackdropShape[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, i) => (
        <div key={i} className="absolute" style={{ ...shape.style, animation: shape.animation }} />
      ))}
    </div>
  );
}
