import Image from "next/image";
import Link from "next/link";

const callouts = [
  {
    title: "Late nights",
    text: "You're not alone.",
    className: "left-[52%] top-[16%] bg-navy text-cream",
    subClassName: "text-cream/70",
  },
  {
    title: "Right choices",
    text: "Answers when you need them.",
    className: "right-[2%] top-[50%] bg-powder text-ink",
    subClassName: "text-ink/70",
  },
  {
    title: "Everyday growth",
    text: "Ideas to help your baby bloom.",
    className: "left-[6%] top-[64%] bg-sage text-ink",
    subClassName: "text-ink/70",
  },
  {
    title: "Real life",
    text: "Make the most of what you have.",
    className: "left-[48%] top-[84%] bg-peach text-ink",
    subClassName: "text-ink/70",
  },
];

const trustItems = [
  { label: "Private by design", icon: LockIcon },
  { label: "Made for parents", icon: HeartIcon },
  { label: "For every season", icon: SunIcon },
];

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center gap-10 px-5 pb-14 pt-6 sm:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-0 lg:px-0 lg:pb-0">
      <div className="max-w-xl lg:mr-16 lg:max-w-md lg:justify-self-end lg:pb-16 xl:mr-24">
        <HeartIcon className="mb-5 h-7 w-7 text-amber" />
        <h1 className="text-[2.6rem] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          Four moments.
          <br />
          One journey.
          <br />
          <span className="text-amber">We&rsquo;ve got you.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          From the late nights to the everyday wins, TinyBundle is here for
          every tiny moment of parenting.
        </p>
        <Link
          href="/#apps"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-butter px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-amber"
        >
          Explore the Bundle
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M3 10h13m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          {trustItems.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-2 text-xs font-semibold text-ink/70">
              <Icon className="h-4 w-4 text-amber" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full max-w-[340px] shrink-0 sm:max-w-md lg:max-w-[460px] lg:justify-self-end xl:max-w-[500px]">
        <div className="relative aspect-[2/3] w-full">
          <Image
            src="/hero-scene.png"
            alt="A winding path from a starry night sky through cozy scenes of baby clothes, a teddy bear and a bowl of baby food"
            fill
            priority
            sizes="(min-width: 1024px) 34rem, (min-width: 640px) 28rem, 90vw"
            className="object-contain"
          />
          {callouts.map((c) => (
            <div
              key={c.title}
              className={`absolute max-w-[46%] rounded-xl px-3.5 py-2.5 shadow-md sm:max-w-[44%] sm:px-4 sm:py-3 ${c.className}`}
            >
              <p className="text-xs font-bold sm:text-sm">{c.title}</p>
              <p className={`mt-0.5 text-[10px] leading-snug sm:text-xs ${c.subClassName}`}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeartIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function LockIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3m14.8-6.4-1.6 1.6M7.8 16.2l-1.6 1.6m0-11.6 1.6 1.6m8.4 8.4 1.6 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
