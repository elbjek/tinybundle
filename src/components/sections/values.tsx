const values = [
  {
    title: "Private by design",
    text: "No profiles. No pressure. Just a safe space for you.",
    icon: LockIcon,
  },
  {
    title: "Made for parents",
    text: "From real-life moments. For real-life parents.",
    icon: HeartIcon,
  },
  {
    title: "For every season",
    text: "From sleepless nights to everyday wins.",
    icon: SunIcon,
  },
  {
    title: "One bundle, everything",
    text: "All your tiny apps in one simple place.",
    icon: SparkleIcon,
  },
];

export function Values() {
  return (
    <section id="for-parents" className="bg-[#fffcf6] pb-20 sm:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 sm:px-8 lg:flex-row lg:gap-10">
        <div className="grid w-full gap-8 rounded-2xl border border-line bg-blush px-7 py-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
          {values.map(({ title, text, icon: Icon }) => (
            <div key={title} className="text-center lg:px-6">
              <Icon className="mx-auto h-8 w-8 text-amber" />
              <h3 className="mt-4 text-sm font-bold text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>

        <div className="flex h-44 w-44 shrink-0 flex-col items-center justify-center rounded-full border border-line bg-cream text-center shadow-[0_0_0_10px_rgba(242,193,115,0.12)]">
          <HeartIcon className="h-6 w-6 text-amber" />
          <p className="mt-2 px-6 text-base font-bold leading-snug text-ink">
            One tiny world. Everything you need.
          </p>
        </div>
      </div>
    </section>
  );
}

function LockIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20s-7.5-4.6-7.5-9.7C4.5 7.6 6.5 6 8.7 6c1.4 0 2.7.8 3.3 2 .6-1.2 1.9-2 3.3-2 2.2 0 4.2 1.6 4.2 4.3C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3m14.8-6.4-1.6 1.6M7.8 16.2l-1.6 1.6m0-11.6 1.6 1.6m8.4 8.4 1.6 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SparkleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c.6 4.8 4.2 8.4 9 9-4.8.6-8.4 4.2-9 9-.6-4.8-4.2-8.4-9-9 4.8-.6 8.4-4.2 9-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
