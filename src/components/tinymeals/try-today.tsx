"use client";

import { useEffect, useRef, useState } from "react";

type Tag = "tried" | "loves" | "fresh";
type Food = { name: string; tag: Tag };
type Meal = { title: string; meta: string; desc: string; foods: Food[] };
type Mode = "spoon" | "finger";
type Face = "meal" | "log" | "result";
type Reaction = "loved" | "liked" | "notyet";

const TAGS: Record<Tag, { label: string; className: string }> = {
  tried: { label: "Tried", className: "text-meals-sage" },
  loves: { label: "Loves", className: "text-meals-orange-deep" },
  fresh: { label: "New", className: "text-meals-orange-deep" },
};

const f = (name: string, tag: Tag): Food => ({ name, tag });

const MEALS: Record<Mode, Meal[][]> = {
  spoon: [
    [
      { title: "Sweet potato & lentil mash", meta: "10 min · Smooth puree", desc: "Soft red lentils stirred into roasted sweet potato. Thin with their usual milk.", foods: [f("Sweet potato", "loves"), f("Red lentils", "fresh"), f("Breast milk", "tried")] },
      { title: "Pear & oat porridge", meta: "8 min · Smooth puree", desc: "Ripe pear cooked into baby oats until silky.", foods: [f("Pear", "tried"), f("Oats", "tried")] },
      { title: "Avocado & banana mash", meta: "3 min · Smooth puree", desc: "No cooking. Mash together with a fork until smooth.", foods: [f("Avocado", "loves"), f("Banana", "tried")] },
    ],
    [
      { title: "Salmon, pea & potato mash", meta: "15 min · Mashed", desc: "Flaked salmon through buttery potato and crushed peas. Check carefully for bones.", foods: [f("Salmon", "fresh"), f("Peas", "tried"), f("Potato", "loves")] },
      { title: "Apple & cinnamon yoghurt", meta: "5 min · Mashed", desc: "Stewed apple swirled into full-fat plain yoghurt.", foods: [f("Apple", "loves"), f("Yoghurt", "tried")] },
      { title: "Chicken & butternut stew", meta: "20 min · Mashed", desc: "Gently cooked and mashed to a soft, lumpy texture.", foods: [f("Chicken", "tried"), f("Butternut", "loves"), f("Onion", "fresh")] },
    ],
    [
      { title: "Mini cottage pie", meta: "25 min · Soft chopped", desc: "Family-pot cottage pie, no added salt. Mash a little if needed.", foods: [f("Beef mince", "tried"), f("Carrot", "loves"), f("Potato", "loves")] },
      { title: "Tomato & lentil dhal", meta: "20 min · Soft chopped", desc: "Mild, creamy dhal on soft rice. Great for the whole table.", foods: [f("Lentils", "tried"), f("Tomato", "fresh"), f("Rice", "tried")] },
      { title: "Berry overnight oats", meta: "5 min · Soft chopped", desc: "Oats soaked in milk with squashed blueberries.", foods: [f("Oats", "loves"), f("Blueberries", "tried"), f("Cow’s milk", "tried")] },
    ],
  ],
  finger: [
    [
      { title: "Roasted sweet potato wedges", meta: "25 min · Soft finger food", desc: "Finger-length wedges, soft enough to squash between your fingers.", foods: [f("Sweet potato", "loves"), f("Olive oil", "tried")] },
      { title: "Steamed broccoli trees", meta: "8 min · Soft finger food", desc: "Big florets with the stalk as a handle.", foods: [f("Broccoli", "fresh")] },
      { title: "Avocado spears", meta: "2 min · Soft finger food", desc: "Ripe avocado cut into thick strips. Roll in ground oats for grip.", foods: [f("Avocado", "loves"), f("Oats", "tried")] },
    ],
    [
      { title: "Courgette & carrot fritters", meta: "15 min · Soft finger food", desc: "Grated veg bound with egg and flour, cooked until golden and soft.", foods: [f("Courgette", "tried"), f("Carrot", "loves"), f("Egg", "tried")] },
      { title: "Banana oat pancakes", meta: "10 min · Soft finger food", desc: "Two-ingredient pancakes, cut into strips.", foods: [f("Banana", "loves"), f("Oats", "tried"), f("Egg", "tried")] },
      { title: "Salmon fishcakes", meta: "20 min · Soft finger food", desc: "Salmon and potato patties, no added salt.", foods: [f("Salmon", "fresh"), f("Potato", "loves")] },
    ],
    [
      { title: "Cheesy pasta & peas", meta: "15 min · Small bites", desc: "Small pasta shapes in a mild cheese sauce.", foods: [f("Pasta", "loves"), f("Cheese", "tried"), f("Peas", "tried")] },
      { title: "Chicken & veg meatballs", meta: "25 min · Small bites", desc: "Soft baked meatballs, cut in half for little hands.", foods: [f("Chicken", "tried"), f("Courgette", "tried"), f("Garlic", "fresh")] },
      { title: "Hummus toast fingers", meta: "5 min · Small bites", desc: "Lightly toasted bread spread thin with hummus.", foods: [f("Wheat", "tried"), f("Chickpeas", "tried"), f("Sesame", "fresh")] },
    ],
  ],
};

const AGES = ["6–8 mo", "9–11 mo", "12 mo +"];
const SLOTS = ["Lunch", "Dinner", "Breakfast"];
const CONFETTI = ["#E2A03F", "#8FA078", "#5F6F4B", "#A9C08A", "#F6D9A8", "#D17A2A"];
const BURST_HEIGHTS = ["-110px", "-150px", "-80px"];

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

function Segment<T extends string | number>({
  value,
  current,
  onPick,
  className,
  children,
}: {
  value: T;
  current: T;
  onPick: (value: T) => void;
  className: string;
  children: React.ReactNode;
}) {
  const on = value === current;
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => onPick(value)}
      className={`${className} font-extrabold transition-colors active:scale-[0.97] ${
        on ? "bg-white text-meals-sage-ink shadow-[0_1px_4px_rgba(90,60,20,0.10)]" : "text-meals-muted"
      }`}
    >
      {children}
    </button>
  );
}

const REACTIONS: { id: Reaction; title: string; sub: string; className: string; icon: React.ReactNode }[] = [
  {
    id: "loved",
    title: "Loved it",
    sub: "Asked for more",
    className: "bg-meals-peach text-meals-orange-ink hover:shadow-[inset_0_0_0_2px_#F6D9A8]",
    icon: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" fill="#D17A2A" />,
  },
  {
    id: "liked",
    title: "Liked it",
    sub: "Ate a good amount",
    className: "bg-meals-sage-tint text-meals-sage-deep hover:shadow-[inset_0_0_0_2px_#A9C08A]",
    icon: <path d="m6 12.5 4 4 8-9" stroke="#4F5D3E" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: "notyet",
    title: "Not yet",
    sub: "We’ll offer it again later",
    className: "bg-meals-sand text-meals-ink hover:shadow-[inset_0_0_0_2px_#E5DCCD]",
    icon: (
      <>
        <path d="M12 7v5l3 2" stroke="#5A5245" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="8.5" stroke="#5A5245" strokeWidth="1.9" />
      </>
    ),
  },
];

/** The app's Home card as a small demo: pick an age and how they eat, then log how the meal went. */
export function TryToday({ baby }: { baby: string }) {
  const [age, setAge] = useState(0);
  const [mode, setMode] = useState<Mode>("spoon");
  const [idea, setIdea] = useState(0);
  const [face, setFace] = useState<Face>("meal");
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [flip, setFlip] = useState(0);
  const [burst, setBurst] = useState(false);
  const burstTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(burstTimer.current), []);

  const list = MEALS[mode][age];
  const meal = list[idea % list.length];
  const next = list[(idea + 1) % list.length].title;
  const newCount = meal.foods.filter((food) => food.tag === "fresh").length;
  const familiarity =
    newCount === 0
      ? { label: "All familiar", className: "bg-meals-sage-tint text-meals-sage-ink" }
      : { label: newCount === 1 ? "Includes one new food" : `Includes ${newCount} new foods`, className: "bg-meals-peach text-meals-orange-ink" };
  const firstNew = meal.foods.find((food) => food.tag === "fresh") ?? meal.foods[0];

  const results: Record<Reaction, { className: string; kicker: string; title: string; body: string }> = {
    loved: {
      className: "bg-meals-peach text-meals-orange-ink",
      kicker: "Loved it",
      title: "A new favourite. Saved.",
      body: `${baby}’s next ideas will lean on ${meal.foods
        .slice(0, 2)
        .map((food) => lower(food.name))
        .join(" and ")}.`,
    },
    liked: {
      className: "bg-meals-sage-tint text-meals-sage-deep",
      kicker: "Liked it",
      title: "Nice one. Logged as tried.",
      body: `Every food in the meal is now in ${baby}’s history, with today’s date.`,
    },
    notyet: {
      className: "bg-meals-sand text-meals-body",
      kicker: "Not yet",
      title: "That’s normal. We’ll try again.",
      body: `Most babies need a food a few times before it clicks. ${firstNew.name} comes back in a few days, alongside a favourite.`,
    },
  };
  const result = results[reaction ?? "liked"];

  const flipTo = (nextFace: Face) => {
    setFace(nextFace);
    setFlip((n) => n + 1);
  };
  const showMeal = (change: () => void) => {
    change();
    setReaction(null);
    flipTo("meal");
  };
  const pick = (rx: Reaction) => {
    setReaction(rx);
    flipTo("result");
    clearTimeout(burstTimer.current);
    setBurst(rx === "loved");
    if (rx === "loved") burstTimer.current = setTimeout(() => setBurst(false), 1500);
  };

  return (
    <div className="grid items-center gap-[clamp(24px,4vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-meals-muted">Try it here</p>
        <h2 className="mt-2.5 text-balance text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.14]">
          Pick an age. Get today&rsquo;s meal.
        </h2>
        <p className="mt-3 max-w-[44ch] text-pretty text-base leading-relaxed text-meals-body">
          This is the app&rsquo;s Home card. Choose an age and how they eat, then log how the meal went. The whole
          thing takes about ten seconds.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="text-[13px] font-extrabold text-meals-muted">Age</span>
          <div className="flex rounded-[13px] bg-white p-[3px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]" role="group" aria-label="Baby’s age">
            {AGES.map((label, i) => (
              <Segment
                key={label}
                value={i}
                current={age}
                onPick={(v) =>
                  showMeal(() => {
                    setAge(v);
                    setIdea(0);
                  })
                }
                className="rounded-[10px] px-3.5 py-2 text-[12.5px]"
              >
                {label}
              </Segment>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-w-0 py-[18px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-2.5 -top-1.5 h-[120px] w-[120px] rotate-[-12deg] rounded-[34px] bg-meals-apricot [animation:tm-float-a_7s_ease-in-out_infinite]" />
          <div className="absolute -bottom-1 -right-4 h-[170px] w-[170px] rounded-full bg-meals-mint [animation:tm-float-b_8s_ease-in-out_infinite]" />
          <div className="absolute right-[22%] top-3 h-2 w-2 rounded-full bg-meals-amber [animation:tm-twinkle_2.2s_ease-in-out_infinite]" />
        </div>
        <div className="relative mx-auto max-w-[440px] rounded-[32px] bg-meals p-[18px] shadow-[0_18px_40px_rgba(120,80,40,0.12)]">
          <div className="flex rounded-[13px] bg-meals-border p-[3px]" role="group" aria-label="How they eat">
            <Segment
              value="spoon"
              current={mode}
              onPick={(v) =>
                showMeal(() => {
                  setMode(v);
                  setIdea(0);
                })
              }
              className="flex h-[38px] flex-1 items-center justify-center gap-[7px] rounded-[11px] text-[13px]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21v-6M12 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Spoon-fed
            </Segment>
            <Segment
              value="finger"
              current={mode}
              onPick={(v) =>
                showMeal(() => {
                  setMode(v);
                  setIdea(0);
                })
              }
              className="flex h-[38px] flex-1 items-center justify-center gap-[7px] rounded-[11px] text-[13px]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 13V6a1.6 1.6 0 0 1 3.2 0v5M11.2 11V5.2a1.6 1.6 0 0 1 3.2 0V11M14.4 11.4V7.6a1.6 1.6 0 0 1 3.2 0V14a6 6 0 0 1-6 6h-.6a5 5 0 0 1-5-5v-2"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Finger foods
            </Segment>
          </div>

          <div className="relative">
            {burst ? (
              <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[55%] z-[5] h-0 w-0">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i} className="absolute left-0 top-0 h-0 w-0" style={{ transform: `rotate(${i * 22.5 - 170}deg)` }}>
                    <div
                      className="absolute -left-[5px] -top-[5px] opacity-0"
                      style={
                        {
                          width: 6 + (i % 3) * 2,
                          height: 6 + (i % 3) * 2,
                          borderRadius: i % 2 ? 2 : "50%",
                          background: CONFETTI[i % CONFETTI.length],
                          "--tm-burst-y": BURST_HEIGHTS[i % 3],
                          animation: `tm-burst 1.1s cubic-bezier(.2,.7,.3,1) ${(i % 4) * 0.04}s both`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <div
              key={flip}
              aria-live="polite"
              className={`mt-2.5 rounded-[22px] bg-white p-[18px] shadow-[0_8px_22px_rgba(120,80,40,0.07)] ${
                flip ? "[animation:tm-flip_.5s_cubic-bezier(.34,1.2,.64,1)_both]" : ""
              }`}
            >
              {face === "meal" ? (
                <>
                  <div className="flex items-center justify-between gap-2.5">
                    <p className="min-w-0 text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-meals-muted">
                      Today · {SLOTS[idea % SLOTS.length]} for {baby}
                    </p>
                    <span className={`inline-flex h-[22px] flex-none items-center rounded-[11px] px-[9px] text-[10.5px] font-extrabold ${familiarity.className}`}>
                      {familiarity.label}
                    </span>
                  </div>
                  <h3 className="mt-[7px] text-balance text-[21px] font-extrabold leading-[1.2]">{meal.title}</h3>
                  <p className="mt-[5px] flex items-center gap-1.5 text-[12.5px] font-bold text-meals-sage">
                    <span className="h-[7px] w-[7px] flex-none rounded-full bg-meals-moss" />
                    {meal.meta}
                  </p>
                  <p className="mt-2.5 text-pretty text-[13.5px] leading-[1.55] text-meals-body">{meal.desc}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5 border-t border-meals-border pt-3">
                    {meal.foods.map((food) => (
                      <li
                        key={food.name}
                        className="flex h-7 items-center gap-1.5 rounded-[14px] bg-meals px-[11px] text-[12.5px] font-extrabold [animation:tm-rise_.35s_ease_both]"
                      >
                        {food.name}
                        <span className={`text-[11px] font-extrabold ${TAGS[food.tag].className}`}>{TAGS[food.tag].label}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => flipTo("log")}
                    className="mt-3.5 flex h-[50px] w-full items-center justify-center rounded-[18px] bg-meals-sage text-[15px] font-extrabold text-white transition-colors hover:bg-meals-sage-deep active:scale-[0.97]"
                  >
                    Log how it went
                  </button>
                  <button
                    type="button"
                    onClick={() => showMeal(() => setIdea((n) => n + 1))}
                    className="block w-full pb-0.5 pt-3.5 text-center text-[13.5px] font-extrabold text-meals-orange-deep active:opacity-60"
                  >
                    Show another idea
                  </button>
                </>
              ) : null}

              {face === "log" ? (
                <div className="[animation:tm-rise_.3s_ease_both]">
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => flipTo("meal")}
                      aria-label="Back to the meal"
                      className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-meals-sand active:scale-[0.94]"
                    >
                      <svg width="8" height="14" viewBox="0 0 9 16" fill="none" aria-hidden="true">
                        <path d="M8 1 2 8l6 7" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="min-w-0 text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-meals-muted">{meal.title}</p>
                  </div>
                  <h3 className="mt-3.5 text-balance text-xl font-extrabold leading-[1.25]">How did {baby} get on?</h3>
                  <p className="mt-1 text-[13px] leading-normal text-meals-muted">Optional. Skipping still counts it as tried.</p>
                  <div className="mt-3.5 flex flex-col gap-[9px]">
                    {REACTIONS.map((rx) => (
                      <button
                        key={rx.id}
                        type="button"
                        onClick={() => pick(rx.id)}
                        className={`flex items-center gap-[13px] rounded-[18px] px-[15px] py-[13px] text-left active:scale-[0.98] ${rx.className}`}
                      >
                        <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[13px] bg-white">
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            {rx.icon}
                          </svg>
                        </span>
                        <span className="block min-w-0">
                          <span className="block text-[15.5px] font-extrabold">{rx.title}</span>
                          <span className="mt-px block text-xs font-bold">{rx.sub}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {face === "result" ? (
                <>
                  <div className={`rounded-[20px] p-[18px] [animation:tm-rise_.3s_ease_both] ${result.className}`}>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.07em]">{result.kicker}</p>
                    <h3 className="mt-[7px] text-balance text-xl font-extrabold leading-[1.24] text-meals-ink">{result.title}</h3>
                    <p className="mt-1.5 text-pretty text-[13.5px] leading-[1.55] text-meals-body">{result.body}</p>
                    <div className="mt-3 rounded-2xl bg-meals px-[15px] py-[13px]">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-meals-muted">Tomorrow</p>
                      <p className="mt-[5px] text-pretty text-[14.5px] font-bold leading-[1.45] text-meals-ink">{next}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => showMeal(() => setIdea((n) => n + 1))}
                    className="mt-3.5 flex h-[50px] w-full items-center justify-center rounded-[18px] bg-meals-sage text-[15px] font-extrabold text-white transition-colors hover:bg-meals-sage-deep active:scale-[0.98]"
                  >
                    Try another meal
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setReaction(null);
                      flipTo("log");
                    }}
                    className="block w-full pb-0.5 pt-3.5 text-center text-[13.5px] font-extrabold text-meals-orange-deep active:opacity-60"
                  >
                    Pick a different answer
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
