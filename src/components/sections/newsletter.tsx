export function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#fffcf6] pb-20 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl border border-line bg-blush px-7 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-amber/40 text-amber sm:flex">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                Tiny tips. Real support.
                <br />
                Right in your inbox.
              </h2>
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted sm:text-sm">
                Stories, gentle reminders and tiny wins &mdash; delivered when
                you need them most.
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            <form className="flex flex-col gap-3 sm:flex-row" action="#">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="h-12 w-full rounded-full border border-line bg-white px-5 text-sm text-ink placeholder:text-muted/70 focus:outline-2 focus:outline-amber"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-amber px-6 text-sm font-bold text-navy transition-colors hover:bg-amber-deep hover:text-cream"
              >
                Join the list
              </button>
            </form>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
              <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-amber" aria-hidden="true">
                <path d="M10 2.5 4 5v4.5c0 3.7 2.6 6.6 6 8 3.4-1.4 6-4.3 6-8V5l-6-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="m7.5 10 1.8 1.8L12.8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
