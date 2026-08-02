import Link from "next/link";
import { MealsMark } from "@/components/tinymeals/mark";

const benefits = [
  {
    label: "Stage-right",
    title: "Made for their stage",
    text: "Recipes matched to where your baby is with solids. Soft first tastes today, finger foods when they’re ready.",
    tint: "bg-meals-orange-tint text-meals-orange-deep",
  },
  {
    label: "Baby-first",
    title: "Written for babies",
    text: "Every recipe is built for babies, not adapted from adult cooking. Safety, texture, and nutrition come first.",
    tint: "bg-meals-peach text-meals-orange-deep",
  },
  {
    label: "Realistic",
    title: "Real kitchen ingredients",
    text: "Food you can actually buy and prepare at home. No fancy meal plans, no endless recipe rabbit holes.",
    tint: "bg-[#f7edd8] text-meals-amber-deep",
  },
];

const steps = [
  { n: "01", title: "Choose stage", text: "Where your baby is with introducing solids." },
  { n: "02", title: "Pick a recipe", text: "Simple, developmentally appropriate ideas." },
  { n: "03", title: "Cook calmly", text: "Safe textures. Balanced plates. Done." },
];

export function MealsPage() {
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(246,223,201,0.9),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(248,235,224,0.75),_transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-[1100px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-meals-border bg-meals-card/80 px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-meals-orange" aria-hidden="true" />
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-meals-orange-deep">
              Coming soon
            </p>
          </div>

          <MealsMark className="mt-8 h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24" />

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-meals-ink sm:text-5xl lg:text-[3.25rem]">
            What can I safely
            <br />
            make for baby today?
          </h1>
          <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-meals-muted sm:text-lg">
            A calm, evidence-based cookbook for introducing solids. Simple recipes
            written for babies, matched to their stage.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#newsletter"
              className="inline-flex rounded-full bg-meals-orange px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-meals-orange-deep"
            >
              Get launch updates
            </Link>
            <Link
              href="/#apps"
              className="inline-flex rounded-full border border-meals-border bg-meals-card px-6 py-3.5 text-sm font-extrabold text-meals-ink transition-colors hover:border-meals-orange/40"
            >
              Explore TinyBundle
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-[2rem] border border-meals-border bg-meals-peach/70 p-6 shadow-[0_24px_50px_-28px_rgba(43,40,35,0.35)] sm:p-8">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-meals-orange-deep">
              Today
            </p>
            <p className="mt-3 text-2xl font-extrabold tracking-tight text-meals-ink sm:text-3xl">
              One stage-right recipe
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: "Safety first", note: "Current feeding guidance" },
                { label: "Right texture", note: "Matched to their stage" },
                { label: "Real ingredients", note: "Easy to buy and prep" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-meals-border/80 bg-meals-card px-4 py-3.5"
                >
                  <span className="text-sm font-extrabold text-meals-ink">{item.label}</span>
                  <span className="text-xs font-semibold text-meals-muted">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs font-semibold text-meals-muted">
              Baby recipes. Not adult leftovers rewritten.
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
            className="rounded-[1.25rem] border border-meals-border bg-meals-card px-6 py-7 shadow-sm"
          >
            <span
              className={`inline-flex rounded-xl px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] ${card.tint}`}
            >
              {card.label}
            </span>
            <h2 className="mt-4 text-xl font-extrabold text-meals-ink">{card.title}</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-meals-muted">{card.text}</p>
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
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-meals-orange-deep">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-meals-ink sm:text-4xl">
          One question. One recipe. One calm cook.
        </h2>
        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-meals-muted">
          Instead of Pinterest rabbit holes or AI meal plans, TinyMeals answers what you
          can safely make for your baby today, with recipes written for them.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-[1.25rem] border border-meals-border bg-meals-card px-6 py-7"
            >
              <span className="text-sm font-extrabold text-meals-amber-deep">{step.n}</span>
              <h3 className="mt-3 text-lg font-extrabold text-meals-ink">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-meals-muted">{step.text}</p>
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
        <div className="rounded-[1.75rem] border border-meals-border bg-meals-peach/60 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-meals-orange-deep">
            Coming soon to iOS
          </p>
          <h2 className="mx-auto mt-3 max-w-lg text-3xl font-extrabold tracking-tight text-meals-ink sm:text-4xl">
            Be first when TinyMeals is ready.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base font-medium leading-relaxed text-meals-muted">
            Join the TinyBundle newsletter for launch notes, and soft updates from
            the rest of the family of apps.
          </p>
          <Link
            href="/#newsletter"
            className="mt-8 inline-flex rounded-full bg-meals-orange px-7 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-meals-orange-deep"
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
    <section className="border-t border-meals-border px-5 py-10 sm:px-8">
      <p className="mx-auto max-w-[1100px] text-center text-sm font-medium text-meals-muted">
        TinyMeals is part of{" "}
        <Link href="/" className="font-extrabold text-meals-orange-deep hover:underline">
          TinyBundle
        </Link>
        {": "}
        four calm apps for the tiny moments of parenting. Meanwhile, try{" "}
        <Link href="/tinyhaven" className="font-extrabold text-meals-orange-deep hover:underline">
          TinyHaven
        </Link>
        {", "}
        <Link href="/tinylayers" className="font-extrabold text-meals-orange-deep hover:underline">
          TinyLayers
        </Link>
        {", and "}
        <Link href="/tinyblooms" className="font-extrabold text-meals-orange-deep hover:underline">
          TinyBlooms
        </Link>
        .
      </p>
    </section>
  );
}
