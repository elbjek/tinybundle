"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type Tab = { id: string; label: string; icon: ReactNode; panel: ReactNode };

/**
 * One app's guides at a time. Every panel stays in the HTML (inactive ones are hidden) so the links
 * are still crawlable, and `#hub-{app}` links open the matching tab.
 */
export function HubTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace(/^#hub-/, "");
      if (tabs.some((tab) => tab.id === id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tabs]);

  const select = (id: string) => {
    setActive(id);
    window.history.replaceState(null, "", `#hub-${id}`);
  };

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + tabs.length) % tabs.length;
    select(tabs[next].id);
    buttons.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Guides by app"
        className="-mx-[clamp(18px,4vw,40px)] flex gap-2 overflow-x-auto px-[clamp(18px,4vw,40px)] pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {tabs.map((tab, i) => {
          const on = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={on}
              aria-controls={`panel-${tab.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => select(tab.id)}
              onKeyDown={(event) => onKeyDown(event, i)}
              className={`inline-flex h-11 flex-none items-center gap-2 rounded-[22px] pl-1.5 pr-4 text-[14px] font-extrabold transition-colors ${
                on
                  ? "bg-tb-ink text-white"
                  : "bg-white text-tb-ink shadow-[0_2px_10px_rgba(90,60,20,0.06)] hover:bg-[#FBF3EA]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          className="mt-5"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
