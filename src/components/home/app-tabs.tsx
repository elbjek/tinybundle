"use client";

import { useState, type ReactNode } from "react";
import { onTabKeys } from "@/components/home/interaction";

export type AppTab = { id: string; label: string; sub: string; dot: string; tile: string };

/** The "Our apps" picker: one tab per app and its panel. Every panel is in the HTML; only the picked one shows. */
export function AppTabs({ tabs, panels }: { tabs: AppTab[]; panels: ReactNode[] }) {
  const [picked, setPicked] = useState(0);
  return (
    <>
      <div
        role="tablist"
        aria-label="Our apps"
        onKeyDown={(e) => onTabKeys(e, picked, tabs.length, setPicked)}
        className="mt-[clamp(28px,4vw,44px)] flex flex-wrap gap-2"
      >
        {tabs.map((tab, i) => {
          const on = i === picked;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${tab.id}-tab`}
              aria-selected={on}
              aria-controls={tab.id}
              tabIndex={on ? 0 : -1}
              onClick={() => setPicked(i)}
              className={`box-border flex h-11 cursor-pointer items-center gap-2 rounded-[22px] pl-3 pr-4 text-sm font-extrabold text-tb-ink transition-[background-color,box-shadow] duration-[250ms] active:scale-[0.96] ${
                on ? "shadow-[0_4px_14px_rgba(90,60,20,0.10)]" : "bg-white shadow-[0_2px_10px_rgba(90,60,20,0.06)]"
              }`}
              style={on ? { background: tab.tile } : undefined}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: tab.dot }} />
              {tab.label}
              <span className="font-bold text-tb-muted">{tab.sub}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex flex-col gap-[18px]">
        {tabs.map((tab, i) => (
          <article
            key={tab.id}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            hidden={i !== picked}
            className={`box-border grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-[clamp(22px,4vw,48px)] rounded-[22px] bg-white p-[clamp(22px,3.4vw,40px)] shadow-[0_2px_10px_rgba(90,60,20,0.06)] [animation:tb-swap_.4s_ease_both] ${
              i === picked ? "grid" : "hidden"
            }`}
          >
            {panels[i]}
          </article>
        ))}
      </div>
    </>
  );
}
