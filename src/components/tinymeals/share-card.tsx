import type { CSSProperties, ReactNode } from "react";
import { SAMPLE_FOODS, SAMPLE_TASTES, type FoodIcon } from "@/components/tinymeals/food-icons";

type Theme = "light" | "dark";

const THEMES: Record<Theme, Record<string, string>> = {
  light: {
    "--sc-bg1": "#FEF8F3",
    "--sc-bg3": "#FBEEDC",
    "--sc-ink": "#2E2E2E",
    "--sc-muted": "#8C8676",
    "--sc-amber": "#D17A2A",
    "--sc-amber2": "#B45F1F",
    "--sc-brown": "#7A5230",
    "--sc-sq": "#F6D9A8",
    "--sc-ci": "#DCE5CF",
    "--sc-ring": "#FFFFFF",
  },
  dark: {
    "--sc-bg1": "#1F1B17",
    "--sc-bg3": "#2A2019",
    "--sc-ink": "#F6EFE4",
    "--sc-muted": "#B9AE9C",
    "--sc-amber": "#EBA557",
    "--sc-amber2": "#EBA557",
    "--sc-brown": "#DDBB92",
    "--sc-sq": "#7A5426",
    "--sc-ci": "#3B4731",
    "--sc-ring": "#F6EFE4",
  },
};

const ROTATIONS = ["-4deg", "3deg", "-2deg", "4deg", "-3deg", "2deg", "-5deg", "1deg"];
const HEART = "M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z";

function FoodGlyph({ food, size = "68%" }: { food: FoodIcon; size?: string }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size }} aria-hidden="true">
      <path d={food.a} fill={food.ac} />
      <path d={food.b} fill={food.bc} />
    </svg>
  );
}

function LovedBadge({ size }: { size: string }) {
  return (
    <span
      className="absolute flex items-center justify-center rounded-full bg-white shadow-[0_0.3cqw_0.8cqw_rgba(90,60,20,0.18)]"
      style={{ top: "-14%", right: "-14%", width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" className="h-[70%] w-[70%]" aria-hidden="true">
        <path d={HEART} fill="var(--sc-amber)" />
      </svg>
    </span>
  );
}

function Tile({ food, index, ring, children }: { food: FoodIcon; index: number; ring: string; children?: ReactNode }) {
  return (
    <div
      className="relative flex aspect-square items-center justify-center rounded-[28%]"
      style={{
        background: food.tile,
        transform: `rotate(${ROTATIONS[index % ROTATIONS.length]})`,
        boxShadow: `0 0 0 ${ring} var(--sc-ring), 0 1cqw 2cqw rgba(90,60,20,0.13)`,
      }}
    >
      <FoodGlyph food={food} />
      {children}
    </div>
  );
}

function CardMark() {
  return (
    <div className="flex items-center gap-[1.6cqw]">
      <svg viewBox="0 0 64 64" fill="none" className="h-[6.4cqw] w-[6.4cqw]" aria-hidden="true">
        <path
          d="M32 21c-1.9-2.1-5.2-3.5-5.2-6.4 0-1.8 1.4-3.1 3.1-3.1 1 0 1.7.4 2.1 1.2.4-.8 1.1-1.2 2.1-1.2 1.7 0 3.1 1.3 3.1 3.1 0 2.9-3.3 4.3-5.2 6.4Z"
          fill="var(--sc-amber)"
        />
        <path d="M20 28h24" stroke="var(--sc-amber)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M18 36a14 14 0 0 0 28 0" stroke="var(--sc-amber)" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
      <span className="text-[4.4cqw] font-extrabold">TinyMeals</span>
    </div>
  );
}

function Frame({ theme, background, children }: { theme: Theme; background: string; children: ReactNode }) {
  return (
    <div className="@container w-full" style={THEMES[theme] as CSSProperties}>
      <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ background, color: "var(--sc-ink)" }}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[12cqw] -top-[12cqw] h-[30cqw] w-[30cqw] rotate-[-14deg] rounded-[27%] opacity-60"
          style={{ background: "var(--sc-sq)" }}
        />
        <div className="relative flex h-full flex-col p-[7cqw]">{children}</div>
      </div>
    </div>
  );
}

function Spacer({ min }: { min: string }) {
  return <div className="flex-1" style={{ minHeight: min }} />;
}

/** “Mila’s first food” share card. */
export function FirstFoodCard({ baby, title, date }: { baby: string; title: string; date: string }) {
  const food = SAMPLE_FOODS[0];
  return (
    <Frame theme="light" background="var(--sc-bg1)">
      <CardMark />
      <Spacer min="4cqw" />
      <div className="relative h-[50cqw] w-[50cqw] self-center">
        <div className="absolute -left-[5cqw] -top-[5cqw] h-[60cqw] w-[60cqw] rounded-full opacity-60" style={{ background: "var(--sc-ci)" }} />
        <div className="absolute -left-[14cqw] bottom-[2cqw] h-[18cqw] w-[18cqw] rotate-[-14deg] rounded-[27%] opacity-80" style={{ background: "var(--sc-sq)" }} />
        <div className="absolute -right-[8cqw] top-[2cqw] h-[2.6cqw] w-[2.6cqw] rounded-full bg-meals-amber" />
        <div
          className="relative flex h-full w-full rotate-[-4deg] items-center justify-center rounded-[14cqw]"
          style={{ background: food.tile, boxShadow: "0 0 0 1.6cqw var(--sc-ring), 0 2.4cqw 5cqw rgba(90,60,20,0.14)" }}
        >
          <FoodGlyph food={food} size="70%" />
        </div>
      </div>
      <Spacer min="6cqw" />
      <p className="text-center text-[3.6cqw] font-extrabold uppercase tracking-[0.08em]" style={{ color: "var(--sc-amber2)" }}>
        {baby}&rsquo;s first food
      </p>
      <p className="mt-[1.6cqw] text-balance text-center text-[9.6cqw] font-extrabold leading-[1.08]">{title}</p>
      <p className="mt-[1.6cqw] text-center text-[4.4cqw] font-bold" style={{ color: "var(--sc-muted)" }}>
        {date}
      </p>
      <Spacer min="5cqw" />
      <p className="text-center text-[3.3cqw] font-extrabold" style={{ color: "var(--sc-amber2)" }}>
        tinymeals.app
      </p>
    </Frame>
  );
}

/** Column count that fits `count` tiles in the card's tile area, as the app's share card does. */
function columnsFor(count: number) {
  const gapFor = (n: number) => (n <= 4 ? 4 : n <= 6 ? 2.6 : n <= 8 ? 2 : n <= 10 ? 1.7 : 1.3);
  if (count <= 8) return { cols: 4, gap: gapFor(4) };
  if (count <= 12) return { cols: 6, gap: gapFor(6) };
  const fits = [6, 7, 8, 9, 10].filter((n) => {
    const g = gapFor(n);
    const tile = (84.4 - (n - 1) * g) / n;
    const rows = Math.ceil(count / n);
    return rows * tile + (rows - 1) * g <= 53;
  });
  const score = (n: number) => {
    const rem = count % n;
    return rem === 0 ? 2 : rem >= n / 2 ? 1 + rem / n : rem / n;
  };
  const cols = fits.sort((x, y) => score(y) - score(x) || x - y)[0] ?? 10;
  return { cols, gap: gapFor(cols) };
}

/** “Mila has tried 24 foods” share card. */
export function TriedCard({ baby, count, theme }: { baby: string; count: number; theme: Theme }) {
  const foods = SAMPLE_FOODS.slice(0, count);
  const { cols, gap } = columnsFor(count);
  return (
    <Frame theme={theme} background="var(--sc-bg1)">
      <CardMark />
      <Spacer min="4cqw" />
      <p className="text-[7.4cqw] font-extrabold leading-[1.1]">{baby} has tried</p>
      <p className="mt-[0.6cqw] flex items-baseline gap-[2.4cqw]">
        <span className="text-[27cqw] font-extrabold leading-[0.92] tracking-[-0.03em]">{count}</span>
        <span className="text-[9cqw] font-extrabold" style={{ color: "var(--sc-amber)" }}>
          foods
        </span>
      </p>
      <Spacer min="5cqw" />
      <div className="flex flex-wrap justify-center px-[0.8cqw]" style={{ gap: `${gap}cqw` }}>
        {foods.map((food, i) => (
          <div key={food.name} style={{ width: `calc((100% - ${((cols - 1) * gap).toFixed(2)}cqw) / ${cols})` }}>
            <Tile food={food} index={i} ring="0.6cqw">
              {SAMPLE_TASTES[food.name]?.loved ? <LovedBadge size="44%" /> : null}
            </Tile>
          </div>
        ))}
      </div>
      <Spacer min="5cqw" />
      <div className="flex items-center justify-between text-[3.3cqw] font-extrabold" style={{ color: "var(--sc-muted)" }}>
        <span className="flex items-center gap-[1cqw]">
          <svg viewBox="0 0 24 24" className="h-[3.6cqw] w-[3.6cqw]" aria-hidden="true">
            <path d={HEART} fill="var(--sc-amber)" />
          </svg>
          Loved
        </span>
        <span style={{ color: "var(--sc-amber2)" }}>tinymeals.app</span>
      </div>
    </Frame>
  );
}

/** “Mila’s favourite right now” share card. */
export function FavouritesCard({ baby }: { baby: string }) {
  const ranked = SAMPLE_FOODS.filter((food) => SAMPLE_TASTES[food.name]).sort((x, y) => {
    const a = SAMPLE_TASTES[x.name];
    const b = SAMPLE_TASTES[y.name];
    return Number(b.loved) - Number(a.loved) || b.served - a.served;
  });
  const [top, ...others] = ranked;
  const rest = others.slice(0, 4);
  const sub = (food: FoodIcon) => {
    const taste = SAMPLE_TASTES[food.name];
    return `${taste.loved ? "Loved" : "Liked"} · served ${taste.served} times`;
  };
  return (
    <Frame theme="light" background="var(--sc-bg3)">
      <CardMark />
      <Spacer min="4cqw" />
      <p className="text-[3.6cqw] font-extrabold uppercase tracking-[0.08em]" style={{ color: "var(--sc-amber2)" }}>
        {baby}&rsquo;s favourite right now
      </p>
      <div className="mt-[5cqw] flex items-center gap-[6cqw]">
        <div className="relative h-[34cqw] w-[34cqw] flex-none">
          <div className="absolute -left-[4cqw] -top-[4cqw] h-[42cqw] w-[42cqw] rounded-full opacity-60" style={{ background: "var(--sc-ci)" }} />
          <div
            className="relative flex h-full w-full rotate-[-4deg] items-center justify-center rounded-[10cqw]"
            style={{ background: top.tile, boxShadow: "0 0 0 1.4cqw var(--sc-ring), 0 2cqw 4cqw rgba(90,60,20,0.14)" }}
          >
            <FoodGlyph food={top} size="70%" />
            <LovedBadge size="30%" />
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-balance text-[10cqw] font-extrabold leading-[1.02]">{top.name}</p>
          <p className="mt-[1.6cqw] text-[3.8cqw] font-bold" style={{ color: "var(--sc-brown)" }}>
            {sub(top)}
          </p>
        </div>
      </div>
      <Spacer min="6cqw" />
      <p className="text-[3.4cqw] font-extrabold uppercase tracking-[0.08em]" style={{ color: "var(--sc-brown)" }}>
        Also loving
      </p>
      <div className="mt-[3.6cqw] grid grid-cols-4 gap-[4cqw] px-[1cqw]">
        {rest.map((food, i) => (
          <div key={food.name} className="flex min-w-0 flex-col items-center gap-[2.2cqw]">
            <div className="w-full">
              <Tile food={food} index={i + 1} ring="0.9cqw">
                {SAMPLE_TASTES[food.name].loved ? <LovedBadge size="38%" /> : null}
              </Tile>
            </div>
            <span className="max-w-full text-balance text-center text-[3.1cqw] font-extrabold leading-[1.15]" style={{ color: "var(--sc-brown)" }}>
              {food.name}
            </span>
          </div>
        ))}
      </div>
      <Spacer min="5cqw" />
      <p className="text-right text-[3.3cqw] font-extrabold" style={{ color: "var(--sc-amber2)" }}>
        tinymeals.app
      </p>
    </Frame>
  );
}
