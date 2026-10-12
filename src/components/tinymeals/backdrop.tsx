"use client";

import { useEffect, useState } from "react";

type Spot = [top: string, left: string, rotate?: string];
type Layout = Record<"a" | "b" | "c" | "d" | "e" | "f" | "g", Spot>;

/** Where each shape sits for each scroll stage; shapes glide between them as you scroll. */
const LAYOUTS: Layout[] = [
  { a: ["14%", "-60px", "rotate(14deg)"], b: ["52%", "calc(100% - 210px)"], c: ["78%", "12%"], d: ["8%", "72%", "rotate(-18deg)"], e: ["34%", "46%"], f: ["72%", "30%"], g: ["22%", "90%"] },
  { a: ["62%", "calc(100% - 150px)", "rotate(52deg)"], b: ["-90px", "-120px"], c: ["20%", "58%"], d: ["80%", "22%", "rotate(24deg)"], e: ["16%", "32%"], f: ["44%", "84%"], g: ["70%", "8%"] },
  { a: ["-70px", "40%", "rotate(-10deg)"], b: ["60%", "-140px"], c: ["70%", "84%"], d: ["30%", "90%", "rotate(40deg)"], e: ["52%", "60%"], f: ["18%", "14%"], g: ["86%", "46%"] },
  { a: ["70%", "6%", "rotate(30deg)"], b: ["8%", "calc(100% - 180px)"], c: ["12%", "20%"], d: ["58%", "64%", "rotate(-30deg)"], e: ["80%", "76%"], f: ["30%", "44%"], g: ["12%", "6%"] },
  { a: ["24%", "calc(100% - 120px)", "rotate(70deg)"], b: ["66%", "20%"], c: ["-20px", "66%"], d: ["14%", "10%", "rotate(8deg)"], e: ["40%", "22%"], f: ["84%", "62%"], g: ["56%", "92%"] },
  { a: ["80%", "44%", "rotate(-24deg)"], b: ["-110px", "56%"], c: ["44%", "4%"], d: ["20%", "58%", "rotate(60deg)"], e: ["66%", "12%"], f: ["12%", "38%"], g: ["34%", "80%"] },
];

const GLIDE = "top 1.1s cubic-bezier(.34,1.2,.64,1), left 1.1s cubic-bezier(.34,1.2,.64,1), transform 1.1s ease";

const SHAPES: { key: keyof Layout; className: string }[] = [
  { key: "a", className: "h-[220px] w-[220px] rounded-[60px] bg-meals-apricot opacity-55 [animation:tm-float-a_9s_ease-in-out_infinite]" },
  { key: "b", className: "h-[300px] w-[300px] rounded-full bg-meals-mint opacity-60 [animation:tm-float-b_10s_ease-in-out_infinite]" },
  { key: "c", className: "h-[90px] w-[90px] rounded-full bg-meals-sage-tint opacity-80 [animation:tm-float-b_7s_ease-in-out_1s_infinite]" },
  { key: "d", className: "h-[46px] w-[46px] rounded-[14px] bg-meals-apricot opacity-60 [animation:tm-float-a_7.5s_ease-in-out_.6s_infinite]" },
  { key: "e", className: "h-[9px] w-[9px] rounded-full bg-meals-amber [animation:tm-twinkle_2.4s_ease-in-out_infinite]" },
  { key: "f", className: "h-2 w-2 rounded-full bg-meals-moss [animation:tm-twinkle_2.4s_ease-in-out_.8s_infinite]" },
  { key: "g", className: "h-[7px] w-[7px] rounded-full bg-meals-sage [animation:tm-twinkle_2.4s_ease-in-out_1.4s_infinite]" },
];

export function MealsBackdrop() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const next = Math.max(0, Math.floor((window.scrollY + window.innerHeight * 0.35) / (window.innerHeight * 0.75))) % LAYOUTS.length;
      setStage(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const layout = LAYOUTS[stage];
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {SHAPES.map(({ key, className }) => {
        const [top, left, rotate] = layout[key];
        return (
          <div
            key={key}
            className={`absolute ${className}`}
            style={{ top, left, transform: rotate ?? "none", transition: GLIDE }}
          />
        );
      })}
    </div>
  );
}
