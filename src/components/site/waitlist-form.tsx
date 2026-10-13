"use client";

import { useId, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/apps";

/**
 * Launch list sign-up for a dark call-to-action band. No mailing list service is connected yet, so joining opens the
 * visitor's email app with the request ready to send, and the confirmation says exactly that.
 */
export function WaitlistForm({
  list,
  button,
  placeholder = "you@example.com",
  hint,
}: {
  /** What they are signing up for, e.g. "TinyNaps launch". Goes in the email subject. */
  list: string;
  button: string;
  placeholder?: string;
  /** Small line under the form, e.g. a privacy note. */
  hint?: string;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const join = (event: React.FormEvent) => {
    event.preventDefault();
    const address = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
      setError(true);
      return;
    }
    const subject = encodeURIComponent(`Add me to the ${list} list`);
    const body = encodeURIComponent(`Please email ${address} about the ${list}.`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="flex items-center gap-3 rounded-[18px] bg-white/10 px-[18px] py-4 text-white [animation:tm-rise_.3s_ease_both]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none">
          <path d="m5 12.5 4.2 4.2L19 7" stroke="#F0B66E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[15.5px] font-extrabold">
          Your email app should open with the request ready. Send it and we&rsquo;ll add you.
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={join} noValidate className="flex flex-wrap gap-2">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
          aria-invalid={error}
          aria-describedby={`${id}-hint`}
          className="box-border h-14 min-w-0 flex-[1_1_200px] rounded-[18px] bg-white px-[18px] text-base text-tb-ink outline-none focus:shadow-[0_0_0_3px_#F0B66E]"
        />
        <button
          type="submit"
          className="h-14 flex-none cursor-pointer rounded-[18px] bg-[#F0B66E] px-[22px] text-base font-extrabold text-[#16202A] hover:bg-tb-amber active:scale-[0.97]"
        >
          {button}
        </button>
      </form>
      <p
        id={`${id}-hint`}
        role={error ? "alert" : undefined}
        className={`mt-2 text-[13.5px] font-extrabold ${error ? "text-[#F0B66E]" : "text-white/80"}`}
      >
        {error ? "That email doesn’t look quite right." : hint}
      </p>
    </div>
  );
}
