"use client";

import { useEffect, useState } from "react";
import { REDUCED_MOTION } from "@/components/home/interaction";
import { Backdrop, type BackdropShape } from "@/components/site/backdrop";

type Spot = [top: string, left: string, rotate?: string];

/** Where each shape (A to G) rests at each scroll stage, so the background drifts as the page moves. */
const STAGES: Spot[][] = [
  [["14%", "-60px", "rotate(14deg)"], ["52%", "calc(100% - 210px)"], ["78%", "12%"], ["8%", "72%", "rotate(-18deg)"], ["34%", "46%"], ["72%", "30%"], ["22%", "90%"]],
  [["62%", "calc(100% - 150px)", "rotate(52deg)"], ["-90px", "-120px"], ["20%", "58%"], ["80%", "22%", "rotate(24deg)"], ["16%", "32%"], ["44%", "84%"], ["70%", "8%"]],
  [["-70px", "40%", "rotate(-10deg)"], ["60%", "-140px"], ["70%", "84%"], ["30%", "90%", "rotate(40deg)"], ["52%", "60%"], ["18%", "14%"], ["86%", "46%"]],
  [["70%", "6%", "rotate(30deg)"], ["8%", "calc(100% - 180px)"], ["12%", "20%"], ["58%", "64%", "rotate(-30deg)"], ["80%", "76%"], ["30%", "44%"], ["12%", "6%"]],
  [["24%", "calc(100% - 120px)", "rotate(70deg)"], ["66%", "20%"], ["-20px", "66%"], ["14%", "10%", "rotate(8deg)"], ["40%", "22%"], ["84%", "62%"], ["56%", "92%"]],
  [["80%", "44%", "rotate(-24deg)"], ["-110px", "56%"], ["44%", "4%"], ["20%", "58%", "rotate(60deg)"], ["66%", "12%"], ["12%", "38%"], ["34%", "80%"]],
];

const SPRING = "top 1.1s cubic-bezier(.34,1.2,.64,1), left 1.1s cubic-bezier(.34,1.2,.64,1), transform 1.1s ease";
const EASE = "top 1.1s ease, left 1.1s ease";

const SHAPES: { size: number; radius: number; color: string; opacity?: number; animation: string; turns?: boolean }[] = [
  { size: 220, radius: 60, color: "#F6D9A8", opacity: 0.5, animation: "tm-float-a 9s ease-in-out infinite", turns: true },
  { size: 300, radius: 150, color: "#DCE6F2", opacity: 0.6, animation: "tm-float-b 10s ease-in-out infinite" },
  { size: 90, radius: 45, color: "#E3EBDC", opacity: 0.85, animation: "tm-float-b 7s ease-in-out 1s infinite" },
  { size: 46, radius: 14, color: "#F6D9A8", opacity: 0.6, animation: "tm-float-a 7.5s ease-in-out .6s infinite", turns: true },
  { size: 9, radius: 5, color: "#E2A03F", animation: "tm-twinkle 2.4s ease-in-out infinite" },
  { size: 8, radius: 4, color: "#7FA8CF", animation: "tm-twinkle 2.4s ease-in-out .8s infinite" },
  { size: 7, radius: 4, color: "#55915E", animation: "tm-twinkle 2.4s ease-in-out 1.4s infinite" },
];

/** The homepage's fixed background layer. Shapes move to new spots every three quarters of a screen scrolled. */
export function HomeBackdrop() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION).matches) return;
    const onScroll = () =>
      setStage(Math.max(0, Math.floor((window.scrollY + window.innerHeight * 0.35) / (window.innerHeight * 0.75))) % STAGES.length);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shapes: BackdropShape[] = SHAPES.map((shape, i) => {
    const [top, left, rotate] = STAGES[stage][i];
    return {
      style: {
        top,
        left,
        width: shape.size,
        height: shape.size,
        borderRadius: shape.radius,
        background: shape.color,
        opacity: shape.opacity,
        transform: shape.turns ? (rotate ?? "none") : undefined,
        transition: shape.turns || shape.opacity ? SPRING : EASE,
      },
      animation: shape.animation,
    };
  });
  return <Backdrop shapes={shapes} />;
}
