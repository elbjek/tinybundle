"use client";

import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COOKIE_SETTINGS_HREF } from "@/lib/consent";

const STORAGE_KEY = "tb-analytics-consent";

type Choice = "granted" | "denied";

function savedChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Asks once whether we may count visits with Vercel Web Analytics, and only loads it after "Allow". The choice is
 * kept in this browser only. "Cookie settings" in any footer brings the notice back.
 */
export function Consent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = savedChoice();
    setChoice(saved);
    setOpen(saved === null);
    const reopen = () => {
      if (window.location.hash !== COOKIE_SETTINGS_HREF) return;
      history.replaceState(null, "", window.location.pathname + window.location.search);
      setOpen(true);
    };
    reopen();
    window.addEventListener("hashchange", reopen);
    return () => window.removeEventListener("hashchange", reopen);
  }, []);

  function decide(next: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode): the choice still holds for this visit.
    }
    // Analytics already running cannot be unloaded, so withdrawing consent reloads the page without it.
    if (choice === "granted" && next === "denied") window.location.reload();
    setChoice(next);
    setOpen(false);
  }

  return (
    <>
      {choice === "granted" ? <Analytics /> : null}
      {open ? (
        <section
          aria-labelledby="consent-h"
          className="fixed inset-x-4 bottom-4 z-50 box-border rounded-[22px] bg-white p-5 font-nunito text-tb-ink shadow-[0_14px_44px_rgba(35,47,72,0.2)] [animation:tm-rise_.35s_ease-out_both] min-[640px]:left-6 min-[640px]:right-auto min-[640px]:bottom-6 min-[640px]:w-[400px]"
        >
          <h2 id="consent-h" className="m-0 text-base font-extrabold">
            Can we count your visit?
          </h2>
          <p className="m-0 mt-1.5 text-pretty text-sm leading-relaxed text-tb-body">
            With your OK, Vercel Analytics counts visits so we can see which pages and guides help. It sets no cookies,
            shows no ads and doesn&rsquo;t follow you to other sites.{" "}
            <Link href="/privacy#website" className="font-extrabold text-tb-ink underline underline-offset-2">
              Privacy policy
            </Link>
          </p>
          <div className="mt-4 flex gap-2.5">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="h-11 flex-1 cursor-pointer rounded-[14px] bg-[#232F48] text-[15px] font-extrabold text-white hover:bg-[#1A2337] active:scale-[0.98]"
            >
              Allow
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="h-11 flex-1 cursor-pointer rounded-[14px] bg-[#F3EADF] text-[15px] font-extrabold text-tb-ink hover:bg-[#EADFD0] active:scale-[0.98]"
            >
              No thanks
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
