"use client";

import { useState } from "react";

const CONTACT = "contact@twobricklabs.com";

/**
 * Newsletter sign-up. Until a mailing list service is connected, joining opens the visitor's email app with a
 * request to be added, so nobody is told they are signed up when they are not.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const join = (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(true);
      return;
    }
    const subject = encodeURIComponent("Add me to the TinyBundle list");
    const body = encodeURIComponent(`Please add ${email.trim()} to the TinyBundle newsletter and launch updates.`);
    window.location.href = `mailto:${CONTACT}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="tips" className="mx-auto box-border max-w-[1180px] scroll-mt-16 px-[clamp(18px,4vw,40px)] pt-[clamp(56px,8vw,110px)]">
      <div className="relative flex flex-wrap items-center gap-x-[clamp(24px,5vw,64px)] gap-y-6 overflow-hidden rounded-[34px] bg-white p-[clamp(24px,4vw,48px)] shadow-[0_14px_34px_rgba(120,80,40,0.08)]">
        <div aria-hidden="true" className="absolute -right-10 -top-[50px] h-[180px] w-[180px] rounded-full bg-meals-peach opacity-70" />
        <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
          <h2 className="text-balance text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.12] tracking-[-0.015em]">
            Tiny tips. Real support. Right in your inbox.
          </h2>
          <p className="mt-3 max-w-[42ch] text-pretty text-[15.5px] leading-relaxed text-tb-body">
            Gentle reminders, new guides and launch news for TinyNaps, TinyBlooms and TinyMeals.
          </p>
        </div>
        <form onSubmit={join} noValidate className="relative min-w-0 flex-[1_1_min(100%,380px)]">
          <div className="flex flex-wrap gap-2.5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              aria-invalid={error}
              aria-describedby="newsletter-hint"
              placeholder="Your email address"
              className="h-[54px] min-w-0 flex-[1_1_220px] rounded-[27px] border-[1.5px] border-[#EADCC6] bg-tb px-5 text-[15.5px] text-tb-ink outline-none placeholder:text-[#A39C8D] focus:border-tb-amber"
            />
            <button
              type="submit"
              className="h-[54px] flex-[1_0_100%] rounded-[27px] bg-tb-amber px-[26px] text-[15.5px] font-extrabold text-tb-ink hover:bg-[#D6922F] active:scale-[0.97] min-[520px]:flex-none"
            >
              Join the list
            </button>
          </div>
          <p
            id="newsletter-hint"
            role={error ? "alert" : undefined}
            className={`mt-3 flex items-center gap-[7px] text-[13px] font-bold ${error ? "text-[#B3402A]" : "text-tb-muted"}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            {error
              ? "Please enter a valid email address."
              : sent
                ? "Your email app should open with the request ready to send."
                : "We respect your privacy. Unsubscribe anytime."}
          </p>
        </form>
      </div>
    </section>
  );
}
