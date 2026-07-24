import Link from "next/link";
import { BloomsMark } from "@/components/tinyblooms/mark";

const benefits = [
  {
    label: "One at a time",
    title: "One idea, not a feed",
    text: "Open the app, get one age-right thing to try. No browsing twenty options when you’re already tired.",
    tint: "bg-blooms-green-tint text-blooms-green-deep",
  },
  {
    label: "Age-right",
    title: "Right for this week",
    text: "Week-by-week early on — so a two-week-old and a three-month-old aren’t treated the same.",
    tint: "bg-blooms-sage text-blooms-green-deep",
  },
  {
    label: "No guilt",
    title: "No milestones, no guilt",
    text: "Ordinary moments count. Skip a day and nothing breaks — filters for mood, energy, and five minutes.",
    tint: "bg-[#f7edd8] text-blooms-amber-deep",
  },
];

const steps = [
  { n: "01", title: "Open", text: "See one idea matched to your baby’s age." },
  { n: "02", title: "Do", text: "Three simple steps. Materials you already have." },
  { n: "03", title: "Done", text: "Close the app. That’s the whole point." },
];

export function BloomsPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Waitlist />
      <BundleNote />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(223,228,209,0.9),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(231,241,228,0.7),_transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-[1100px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blooms-border bg-blooms-card/80 px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blooms-green" aria-hidden="true" />
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blooms-green-deep">
              Coming soon
            </p>
          </div>

          <BloomsMark className="mt-8 h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24" />

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-blooms-ink sm:text-5xl lg:text-[3.25rem]">
            One lovely thing
            <br />
            to do with baby.
          </h1>
          <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-blooms-muted sm:text-lg">
            Age-based ideas and tiny activities that fit real days — no pressure,
            no milestones, just little moments of growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#newsletter"
              className="inline-flex rounded-full bg-blooms-green px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-blooms-green-deep"
            >
              Get launch updates
            </Link>
            <Link
              href="/#apps"
              className="inline-flex rounded-full border border-blooms-border bg-blooms-card px-6 py-3.5 text-sm font-extrabold text-blooms-ink transition-colors hover:border-blooms-green/40"
            >
              Explore TinyBundle
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-[2rem] border border-blooms-border bg-blooms-sage/70 p-6 shadow-[0_24px_50px_-28px_rgba(43,40,35,0.35)] sm:p-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-blooms-green-deep">
              Today
            </p>
            <p className="mt-3 text-2xl font-extrabold tracking-tight text-blooms-ink sm:text-3xl">
              One idea for right now
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: "Play", note: "2–5 minutes" },
                { label: "Tummy time", note: "On a soft mat" },
                { label: "Calm", note: "When energy is low" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-blooms-border/80 bg-blooms-card px-4 py-3.5"
                >
                  <span className="text-sm font-extrabold text-blooms-ink">{item.label}</span>
                  <span className="text-xs font-semibold text-blooms-muted">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs font-semibold text-blooms-muted">
              One idea at a time — that’s the whole app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto grid w-full max-w-[1100px] gap-4 md:grid-cols-3">
        {benefits.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.25rem] border border-blooms-border bg-blooms-card px-6 py-7 shadow-sm"
          >
            <span
              className={`inline-flex rounded-xl px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] ${card.tint}`}
            >
              {card.label}
            </span>
            <h2 className="mt-4 text-xl font-extrabold text-blooms-ink">{card.title}</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-blooms-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blooms-green-deep">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-blooms-ink sm:text-4xl">
          One question. One activity. One tap.
        </h2>
        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-blooms-muted">
          Fed, changed, wide awake… now what? TinyBlooms answers without browsing,
          milestones, or guilt.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-[1.25rem] border border-blooms-border bg-blooms-card px-6 py-7"
            >
              <span className="text-sm font-extrabold text-blooms-amber-deep">{step.n}</span>
              <h3 className="mt-3 text-lg font-extrabold text-blooms-ink">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-blooms-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="rounded-[1.75rem] border border-blooms-border bg-blooms-sage/60 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blooms-green-deep">
            Coming soon to iOS
          </p>
          <h2 className="mx-auto mt-3 max-w-lg text-3xl font-extrabold tracking-tight text-blooms-ink sm:text-4xl">
            Be first when TinyBlooms blooms.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base font-medium leading-relaxed text-blooms-muted">
            Join the TinyBundle newsletter for launch notes — and soft updates from
            the rest of the family of apps.
          </p>
          <Link
            href="/#newsletter"
            className="mt-8 inline-flex rounded-full bg-blooms-green px-7 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-blooms-green-deep"
          >
            Notify me
          </Link>
        </div>
      </div>
    </section>
  );
}

function BundleNote() {
  return (
    <section className="border-t border-blooms-border px-5 py-10 sm:px-8">
      <p className="mx-auto max-w-[1100px] text-center text-sm font-medium text-blooms-muted">
        TinyBlooms is part of{" "}
        <Link href="/" className="font-extrabold text-blooms-green-deep hover:underline">
          TinyBundle
        </Link>
        {" — "}
        four calm apps for the tiny moments of parenting. Meanwhile, try{" "}
        <Link href="/tinyhaven" className="font-extrabold text-blooms-green-deep hover:underline">
          TinyHaven
        </Link>{" "}
        and{" "}
        <Link href="/tinylayers" className="font-extrabold text-blooms-green-deep hover:underline">
          TinyLayers
        </Link>
        .
      </p>
    </section>
  );
}
