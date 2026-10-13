"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Backdrop, type BackdropShape } from "@/components/site/backdrop";

const SPRING = "top 1.1s cubic-bezier(.34,1.2,.64,1), left 1.1s cubic-bezier(.34,1.2,.64,1), transform 1.1s ease";
const EASE = "top 1.1s ease, left 1.1s ease";

const SHAPES: { style: CSSProperties; animation: string }[] = [
  { style: { width: 220, height: 220, borderRadius: 60, background: "#F6D9A8", opacity: 0.55, transition: SPRING }, animation: "tm-float-a 9s ease-in-out infinite" },
  { style: { width: 300, height: 300, borderRadius: 150, background: "#DCE6F2", opacity: 0.7, transition: SPRING }, animation: "tm-float-b 10s ease-in-out infinite" },
  { style: { width: 90, height: 90, borderRadius: 45, background: "#E3EBDC", opacity: 0.8, transition: SPRING }, animation: "tm-float-b 7s ease-in-out infinite 1s" },
  { style: { width: 46, height: 46, borderRadius: 14, background: "#F6D9A8", opacity: 0.6, transition: SPRING }, animation: "tm-float-a 7.5s ease-in-out infinite .6s" },
  { style: { width: 9, height: 9, borderRadius: 5, background: "#E2A03F", transition: EASE }, animation: "tm-twinkle 2.4s ease-in-out infinite" },
  { style: { width: 8, height: 8, borderRadius: 4, background: "#7FA8CF", transition: EASE }, animation: "tm-twinkle 2.4s ease-in-out infinite .8s" },
  { style: { width: 7, height: 7, borderRadius: 4, background: "#3D6DA8", transition: EASE }, animation: "tm-twinkle 2.4s ease-in-out infinite 1.4s" },
];

/** Where each shape sits (top, left, rotation) in each of the six scroll stages. */
const STAGES: [string, string, string?][][] = [
  [["14%", "-60px", "rotate(14deg)"], ["52%", "calc(100% - 210px)"], ["78%", "12%"], ["8%", "72%", "rotate(-18deg)"], ["34%", "46%"], ["72%", "30%"], ["22%", "90%"]],
  [["62%", "calc(100% - 150px)", "rotate(52deg)"], ["-90px", "-120px"], ["20%", "58%"], ["80%", "22%", "rotate(24deg)"], ["16%", "32%"], ["44%", "84%"], ["70%", "8%"]],
  [["-70px", "40%", "rotate(-10deg)"], ["60%", "-140px"], ["70%", "84%"], ["30%", "90%", "rotate(40deg)"], ["52%", "60%"], ["18%", "14%"], ["86%", "46%"]],
  [["70%", "6%", "rotate(30deg)"], ["8%", "calc(100% - 180px)"], ["12%", "20%"], ["58%", "64%", "rotate(-30deg)"], ["80%", "76%"], ["30%", "44%"], ["12%", "6%"]],
  [["24%", "calc(100% - 120px)", "rotate(70deg)"], ["66%", "20%"], ["-20px", "66%"], ["14%", "10%", "rotate(8deg)"], ["40%", "22%"], ["84%", "62%"], ["56%", "92%"]],
  [["80%", "44%", "rotate(-24deg)"], ["-110px", "56%"], ["44%", "4%"], ["20%", "58%", "rotate(60deg)"], ["66%", "12%"], ["12%", "38%"], ["34%", "80%"]],
];

function stageFor() {
  return Math.max(0, Math.floor((window.scrollY + window.innerHeight * 0.35) / (window.innerHeight * 0.75))) % STAGES.length;
}

/** The page's soft shapes drift to a new arrangement as you scroll. Still for people who ask for less motion. */
export function LayersBackdrop() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => setStage(stageFor());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shapes: BackdropShape[] = SHAPES.map((shape, i) => {
    const [top, left, rotate] = STAGES[stage][i];
    return { style: { ...shape.style, top, left, transform: rotate ?? "none" }, animation: shape.animation };
  });
  return <Backdrop shapes={shapes} />;
}
