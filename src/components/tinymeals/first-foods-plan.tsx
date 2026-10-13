"use client";

import { useState } from "react";

type Week = { theme: string; note: string; foods: { name: string; allergen?: boolean }[] };

const WEEKS: Week[] = [
  { theme: "First tastes", note: "Smooth, single vegetables to start. Bitter and sweet both count.", foods: [{ name: "Sweet potato" }, { name: "Carrot" }, { name: "Avocado" }] },
  { theme: "Gentle greens", note: "Slightly bitter veg early on helps them accept greens later.", foods: [{ name: "Courgette" }, { name: "Pea" }, { name: "Broccoli" }] },
  { theme: "Soft fruits", note: "Naturally sweet, easy to mash or offer as soft pieces.", foods: [{ name: "Banana" }, { name: "Pear" }, { name: "Apple" }] },
  { theme: "Grains", note: "Thicker textures and the first iron-rich staples.", foods: [{ name: "Oats" }, { name: "Rice" }, { name: "Lentils" }] },
  { theme: "First allergen", note: "Egg first, well cooked, on a morning you’re at home.", foods: [{ name: "Egg", allergen: true }, { name: "Butternut" }, { name: "Mango" }] },
  { theme: "Dairy", note: "Full-fat plain yoghurt and cheese, cooked into meals.", foods: [{ name: "Yoghurt", allergen: true }, { name: "Cauliflower" }, { name: "Peach" }] },
  { theme: "Nut butters", note: "Smooth peanut thinned into porridge, never whole nuts.", foods: [{ name: "Peanut", allergen: true }, { name: "Beetroot" }, { name: "Blueberry" }] },
  { theme: "Wheat", note: "Toast fingers and soft pasta join the table.", foods: [{ name: "Wheat", allergen: true }, { name: "Spinach" }, { name: "Plum" }] },
  { theme: "Fish", note: "Flaked, boneless fish, mashed into familiar veg.", foods: [{ name: "Salmon", allergen: true }, { name: "Green bean" }, { name: "Kiwi" }] },
  { theme: "Mixing it up", note: "Last allergens, then combinations of foods they know.", foods: [{ name: "Soy", allergen: true }, { name: "Sesame", allergen: true }, { name: "Tomato" }] },
];

/** The sample baby is in week 3: earlier weeks are done. */
const CURRENT_WEEK = 2;

const RULES = [
  { title: "One new food every 2–3 days", body: "Offered a few days running so the taste becomes familiar." },
  { title: "Allergens once tastes go well", body: "One at a time, a few days apart, starting with egg." },
  {
    title: "Then everyday meals take over",
    body: "Once the ten weeks are done, Home switches to a daily meal built from what they’ve tried.",
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
      <div className="mt-[30px] grid grid-cols-2 gap-2 min-[480px]:grid-cols-5 min-[1080px]:grid-cols-10">
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
            Week {selected + 1} of 10
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
