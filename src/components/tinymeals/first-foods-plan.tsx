"use client";

import { useState } from "react";

type Week = { theme: string; note: string; foods: { name: string; allergen?: boolean }[] };

const WEEKS: Week[] = [
  { theme: "First tastes", note: "Mild vegetables first, so sweet tastes don’t take over.", foods: [{ name: "Sweet potato" }, { name: "Carrot" }, { name: "Avocado" }] },
  { theme: "Iron and egg", note: "Egg joins on its own, early in the day, so you can watch for a reaction.", foods: [{ name: "Red lentil" }, { name: "Banana" }, { name: "Egg", allergen: true }] },
  { theme: "More iron", note: "From six months an iron-rich taste leads the week, then more single tastes.", foods: [{ name: "Beef" }, { name: "Pear" }, { name: "Broccoli" }] },
  { theme: "Peanut and oats", note: "Peanut butter joins on its own, early in the day, so you can watch for a reaction.", foods: [{ name: "Peas" }, { name: "Oats" }, { name: "Peanut butter", allergen: true }] },
];

/** The sample baby is in week 3: earlier weeks are done. */
const CURRENT_WEEK = 2;

const RULES = [
  { title: "One new food every few days", body: "If something doesn’t agree, you know which food it was." },
  { title: "Allergens early, one at a time", body: "Egg, then peanut, then fish, every other week from week 2." },
  {
    title: "Then everyday meals take over",
    body: "Once the ten first tastes are done, Home switches to a daily meal built from what they’ve tried.",
  },
];

function dotColor(allergen: boolean | undefined, selected: boolean, past: boolean) {
  if (selected) return allergen ? "bg-meals-apricot" : "bg-white/75";
  if (past) return "bg-meals-moss";
  return allergen ? "bg-meals-amber" : "bg-[#E5DCCD]";
}

export function FirstFoodsPlan() {
  const [selected, setSelected] = useState(CURRENT_WEEK);
  const [flip, setFlip] = useState(0);
  const week = WEEKS[selected];

  return (
    <>
      <div className="mt-[30px] grid grid-cols-2 gap-2 min-[480px]:grid-cols-4">
        {WEEKS.map((w, i) => {
          const on = selected === i;
          return (
            <button
              key={w.theme}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setSelected(i);
                setFlip((n) => n + 1);
              }}
              className={`cursor-pointer rounded-[18px] px-3 pb-[13px] pt-3 text-left transition-colors active:scale-[0.97] ${
                on
                  ? "bg-meals-sage text-white shadow-[0_8px_18px_rgba(95,111,75,0.22)]"
                  : "bg-white text-meals-ink shadow-[0_2px_10px_rgba(90,60,20,0.06)]"
              }`}
            >
              <span
                className={`block text-[10.5px] font-extrabold uppercase tracking-[0.07em] ${
                  on ? "text-white" : i === CURRENT_WEEK ? "text-meals-orange-deep" : "text-meals-muted"
                }`}
              >
                Week {i + 1}
              </span>
              <span className="mt-1 block text-balance text-sm font-extrabold leading-[1.25]">{w.theme}</span>
              <span className="mt-[9px] flex gap-1" aria-hidden="true">
                {w.foods.map((food) => (
                  <span key={food.name} className={`h-[7px] w-[7px] rounded-full ${dotColor(food.allergen, on, i < CURRENT_WEEK)}`} />
                ))}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-3.5 grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div
          key={flip}
          aria-live="polite"
          className={`relative overflow-hidden rounded-[26px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)] ${
            flip ? "[animation:tm-flip_.45s_cubic-bezier(.34,1.2,.64,1)_both]" : ""
          }`}
        >
          <div aria-hidden="true" className="absolute -bottom-[30px] -right-[30px] h-[110px] w-[110px] rounded-full bg-meals-mint opacity-70" />
          <p className="relative text-[11px] font-extrabold uppercase tracking-[0.07em] text-meals-orange-deep">
            Week {selected + 1}
          </p>
          <h3 className="relative mt-1.5 text-balance text-2xl font-extrabold leading-[1.2]">{week.theme}</h3>
          <p className="relative mt-1.5 max-w-[46ch] text-pretty text-[14.5px] leading-relaxed text-meals-body">{week.note}</p>
          <ul className="relative mt-4 flex flex-wrap gap-[7px]">
            {week.foods.map((food) => (
              <li
                key={food.name}
                className={`flex h-[34px] items-center gap-[7px] rounded-[17px] px-3.5 text-[13.5px] font-extrabold ${
                  food.allergen ? "bg-meals-peach text-meals-orange-ink" : "bg-meals-sage-tint text-meals-sage-ink"
                }`}
              >
                {food.name}
                {food.allergen ? (
                  <span className="text-[10.5px] font-extrabold uppercase tracking-[0.05em] text-meals-orange-deep">Allergen</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <ol className="flex flex-col gap-4 rounded-[26px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
          {RULES.map((rule, i) => (
            <li key={rule.title} className="flex items-start gap-[13px]">
              <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-meals-sage-tint text-[13.5px] font-extrabold text-meals-sage-ink">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 pt-1">
                <p className="text-[15.5px] font-extrabold">{rule.title}</p>
                <p className="mt-[3px] text-pretty text-[13.5px] leading-normal text-meals-body">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
