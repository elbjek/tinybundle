"use client";

import { useEffect, useState } from "react";
import { Backdrop, type BackdropShape } from "@/components/site/backdrop";

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

const SPRING = "cubic-bezier(.34,1.2,.64,1)";
const GLIDE = `top 1.1s ${SPRING}, left 1.1s ${SPRING}, transform 1.1s ease`;
const DRIFT = "top 1.1s ease, left 1.1s ease";

const SHAPES: { key: keyof Layout; style: BackdropShape["style"]; animation: string }[] = [
  { key: "a", style: { width: 220, height: 220, borderRadius: 60, background: "#F6D9A8", opacity: 0.55, transition: GLIDE }, animation: "tm-float-a 9s ease-in-out infinite" },
  { key: "b", style: { width: 300, height: 300, borderRadius: 150, background: "#DCE5CF", opacity: 0.6, transition: GLIDE }, animation: "tm-float-b 10s ease-in-out infinite" },
  { key: "c", style: { width: 90, height: 90, borderRadius: 45, background: "#E3EBDC", opacity: 0.8, transition: GLIDE }, animation: "tm-float-b 7s ease-in-out 1s infinite" },
  { key: "d", style: { width: 46, height: 46, borderRadius: 14, background: "#F6D9A8", opacity: 0.6, transition: GLIDE }, animation: "tm-float-a 7.5s ease-in-out .6s infinite" },
  { key: "e", style: { width: 9, height: 9, borderRadius: 5, background: "#E2A03F", transition: DRIFT }, animation: "tm-twinkle 2.4s ease-in-out infinite" },
  { key: "f", style: { width: 8, height: 8, borderRadius: 4, background: "#8FA078", transition: DRIFT }, animation: "tm-twinkle 2.4s ease-in-out .8s infinite" },
  { key: "g", style: { width: 7, height: 7, borderRadius: 4, background: "#5F6F4B", transition: DRIFT }, animation: "tm-twinkle 2.4s ease-in-out 1.4s infinite" },
];

/** The page's background shapes. They move to a new layout as you scroll, unless reduced motion is on. */
export function MealsBackdrop() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    <Backdrop
      shapes={SHAPES.map(({ key, style, animation }) => {
        const [top, left, rotate] = layout[key];
        return { style: { ...style, top, left, transform: rotate ?? "none" }, animation };
      })}
    />
  );
}
