import type { ReactNode } from "react";
import { AppMark, AppTile } from "@/components/app-identity";
import type { AppSlug } from "@/lib/apps";

const CLOCK: Record<AppSlug, string> = { tinyblooms: "10:30", tinymeals: "12:00", tinylayers: "19:00", tinynaps: "2:14" };

function StatusBar({ clock }: { clock: string }) {
  return (
    <div className="absolute inset-x-0 top-0 z-[2] box-border flex h-[50px] items-center justify-between px-[30px]">
      <span className="text-[15px] font-extrabold">{clock}</span>
      <span className="absolute left-1/2 top-[11px] -ml-[59px] h-[34px] w-[118px] rounded-[17px] bg-[#0B0B0D]" />
      <span className="flex items-center gap-[5px]">
        <span className="h-2.5 w-[17px] rounded-[2px] bg-current opacity-85" />
        <span className="h-[11px] w-6 rounded-[3.5px] bg-current opacity-85" />
      </span>
    </div>
  );
}

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 12 7" fill="none" className="flex-none">
      <path d="m1 1 5 5 5-5" stroke="#8C8676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Zebra rows of a recommendation card: a small label and what it stands for. */
function Rows({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-3 flex flex-col gap-0.5">
      {rows.map(([role, name], i) => (
        <div key={role} className={`flex items-baseline gap-3 px-2.5 py-[9px] ${i % 2 ? "" : "rounded-[10px] bg-[#FBF3E9]"}`}>
          <span className="w-[52px] flex-none text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#8C8676]">{role}</span>
          <span className="text-[14.5px] font-extrabold">{name}</span>
        </div>
      ))}
    </div>
  );
}

function LayersScreen() {
  return (
    <div className="absolute inset-0 bg-[#FEF8F3] text-[#2E2E2E]">
      <StatusBar clock={CLOCK.tinylayers} />
      <div className="px-[22px] pt-[60px]">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <AppMark app="tinylayers" className="h-[26px] w-[26px]" />
            <span className="text-base font-extrabold">TinyLayers</span>
          </div>
          <div className="flex h-[34px] items-center gap-2 rounded-[17px] bg-white px-3 text-[12.5px] font-extrabold shadow-[0_2px_8px_rgba(90,60,20,0.06)]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#3D6DA8]" />
            Mila &middot; 7 mo
            <Chevron />
          </div>
        </div>
        <div className="mt-3 flex rounded-[13px] bg-[#F3EADF] p-[3px]">
          <div className="flex h-9 flex-1 items-center justify-center gap-[7px] rounded-[11px] bg-white text-[13px] font-extrabold shadow-[0_2px_6px_rgba(90,60,20,0.08)]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M20.5 13.8A8.5 8.5 0 1 1 10.2 3.5a7 7 0 0 0 10.3 10.3Z" stroke="#2E2E2E" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sleep in the room
          </div>
          <div className="flex h-9 flex-1 items-center justify-center gap-[7px] rounded-[11px] text-[13px] font-extrabold text-[#8C8676]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="#8C8676" strokeWidth="1.9" />
              <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" stroke="#8C8676" strokeWidth="1.9" strokeLinecap="round" />
            </svg>
            Going outside
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EADF] text-[22px] font-bold text-[#3D6DA8]">&minus;</div>
          <div className="flex-1 text-center">
            <div className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-[#8C8676]">Room temperature</div>
            <div className="mt-px flex items-baseline justify-center gap-2">
              <span className="text-[26px] font-extrabold leading-[1.1]">18&deg;C</span>
              <span className="text-xs font-bold text-[#8C8676]">cool</span>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EADF] text-[22px] font-bold text-[#3D6DA8]">+</div>
        </div>
        <div className="mt-2.5 rounded-[22px] bg-white p-[18px] shadow-[0_8px_22px_rgba(120,80,40,0.07)]">
          <div className="flex items-center justify-between gap-2.5">
            <div className="text-[10.5px] font-extrabold uppercase tracking-[0.07em] text-[#2F5B8A]">Tonight for Mila &middot; For sleep</div>
            <div className="inline-flex h-[22px] items-center rounded-[11px] bg-[#DCE6F2] px-[9px] text-[10.5px] font-extrabold text-[#2F5B8A]">2.5 TOG</div>
          </div>
          <div className="mt-[7px] text-[21px] font-extrabold leading-[1.2]">Sleepsuit, bodysuit, and a warm sack</div>
          <Rows
            rows={[
              ["Sack", "Warm sleep sack"],
              ["Pyjamas", "Long-sleeve footed sleepsuit"],
              ["Base", "Long-sleeve bodysuit"],
            ]}
          />
          <div className="mt-[15px] flex h-[50px] items-center justify-center gap-[9px] rounded-[18px] bg-[#3D6DA8] text-[15px] font-extrabold text-white">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M12 20.5c-4.4 0-8-3.4-8-8.5s3.6-8.5 8-8.5 8 3.4 8 8.5-3.6 8.5-8 8.5Z" stroke="#FFFFFF" strokeWidth="1.8" />
              <path d="m8.4 12.2 2.5 2.5 4.7-5.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Check in after sleep
          </div>
          <div className="mt-[11px] text-center text-[13px] font-extrabold text-[#D17A2A]">Why this?</div>
        </div>
      </div>
    </div>
  );
}

function MealsScreen() {
  return (
    <div className="absolute inset-0 bg-[#FBF8F3] text-[#2E2A27]">
      <StatusBar clock={CLOCK.tinymeals} />
      <div className="px-[22px] pt-16">
        <div className="flex items-center gap-[7px]">
          <AppMark app="tinymeals" className="h-[22px] w-[22px]" />
          <span className="text-[15px] font-extrabold">TinyMeals</span>
        </div>
        <div className="mt-[18px] flex gap-2">
          <div className="flex h-10 items-center gap-2 rounded-[20px] bg-[#F6DFC8] px-4 text-[13.5px] font-extrabold text-[#8A4F1F]">
            <span className="h-2 w-2 rounded-full bg-[#D88A3D]" />
            Mila
          </div>
        </div>
        <div className="mt-[18px] rounded-[20px] bg-white p-[18px] shadow-[0_8px_22px_rgba(120,80,40,0.06)]">
          <div className="flex gap-3.5">
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#8A4F1F]">Today for Mila &middot; 7 months</div>
              <div className="mt-[7px] text-[21px] font-extrabold leading-[1.2]">Courgette &amp; carrot fritters</div>
              <div className="mt-[5px] text-[13.5px] leading-normal text-[#5D5650]">Soft, easy to hold, and ready before her nap.</div>
              <div className="mt-2 text-[12.5px] font-bold text-[#8A5A2C]">Finger food &middot; 15 min</div>
            </div>
            <div className="flex h-[92px] w-[92px] flex-none items-center justify-center rounded-[20px] bg-[#F6DFC8]">
              <AppMark app="tinymeals" className="h-[52px] w-[52px]" />
            </div>
          </div>
          <div className="mt-[15px] flex h-12 items-center justify-center rounded-[18px] bg-[#D88A3D] text-[15px] font-extrabold text-white">Cook this today</div>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="text-[13px] text-[#8B837C]">Not feeling it?</span>
            <span className="text-[13.5px] font-extrabold text-[#D88A3D]">See more suggestions &rarr;</span>
          </div>
        </div>
        <div className="mt-3.5 flex h-14 items-center justify-center gap-[9px] rounded-[18px] bg-white text-base font-bold shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="#D88A3D" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          Log what they ate
        </div>
        <div className="mt-2.5 rounded-[18px] bg-white px-4 py-[13px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#8B837C]">Last logged</div>
          <div className="mt-[3px] text-[13.5px] font-bold">Yesterday &middot; Banana pancakes &middot; Loved it</div>
        </div>
        <div className="mt-[22px] flex items-start gap-[13px] rounded-[20px] bg-[#ECF0E1] px-[18px] py-[17px]">
          <span className="mt-px flex-none text-[#5C7247]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 20.5V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 12C12 7.5 9.5 5 5 5c0 4.5 2.5 7 7 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M12 9c0-3 1.7-5 5-5 0 3-1.7 5-5 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <div className="text-[11.5px] font-extrabold uppercase tracking-[0.06em] text-[#5C7247]">Today&rsquo;s tip</div>
            <div className="mt-[5px] text-sm leading-[1.6] text-[#47523B]">Let her squish and explore. Mess is part of learning to eat.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BLOOMS_CHIPS = ["Play", "Calm", "Talking", "Music"];

function BloomsScreen() {
  return (
    <div className="absolute inset-0 bg-[#FAF6EF] text-[#2B2823]">
      <StatusBar clock={CLOCK.tinyblooms} />
      <div className="px-[22px] pt-16">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-1.5">
            <AppMark app="tinyblooms" className="h-6 w-6" />
            <span className="text-[15px] font-extrabold">TinyBlooms</span>
          </div>
          <div className="flex h-[34px] items-center gap-[7px] rounded-[17px] bg-white px-3 text-[12.5px] font-extrabold shadow-[0_2px_8px_rgba(64,52,32,0.06)]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#55915E]" />
            Mila &middot; 7 months
            <Chevron />
          </div>
        </div>
        <div className="mt-3.5 flex items-start gap-[9px] rounded-[14px] bg-[#E7F1E4] px-3 py-[9px]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="mt-px flex-none">
            <path d="M12 20V11M11.5 14C8 13.6 5.4 10.8 5 7c3.8.4 6.6 3 7 7ZM12.5 11c.4-3 2.6-5 5.5-5.4-.4 3-2.5 5-5.5 5.4Z" stroke="#38623F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="text-[12.5px] leading-[1.45] text-[#38623F]">
            <span className="font-extrabold">Tip &middot; </span>Babies this age love faces. Get close and slow right down.
          </div>
        </div>
        <div className="mt-3.5 flex gap-[7px] overflow-hidden">
          <div className="flex h-[34px] flex-none items-center rounded-[17px] bg-[#38623F] px-[13px] text-[12.5px] font-extrabold text-white">For you</div>
          {BLOOMS_CHIPS.map((chip) => (
            <div
              key={chip}
              className="flex h-[34px] flex-none items-center rounded-[17px] bg-white px-[13px] text-[12.5px] font-extrabold text-[#6B6355] shadow-[0_2px_8px_rgba(64,52,32,0.06)]"
            >
              {chip}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-[22px] bg-white px-[18px] pb-3.5 pt-[18px] shadow-[0_8px_22px_rgba(64,52,32,0.07)]">
          <div className="flex gap-3.5">
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#A8722F]">Right now for Mila &middot; 7 months</div>
              <div className="mt-[7px] text-[22px] font-extrabold leading-[1.18]">Mirror hello</div>
              <div className="mt-[5px] text-[13.5px] leading-normal text-[#6B6355]">Copy her sounds, then wait. To her, that&rsquo;s a real conversation.</div>
              <div className="mt-2 text-[12.5px] font-bold text-[#A8722F]">7 min &middot; Any mirror</div>
            </div>
            <div className="flex h-24 w-24 flex-none items-center justify-center rounded-[20px] bg-[#E7F1E4]">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <path d="M12 3.5c-3 0-5.2 2.8-5.2 6.2S9 16 12 16s5.2-2.9 5.2-6.3S15 3.5 12 3.5ZM12 16v4.5M9 20.5h6" stroke="#38623F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex h-[50px] items-center justify-center rounded-[18px] bg-[#47794F] text-[15.5px] font-extrabold text-white">Let&rsquo;s try it</div>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="text-[13px] text-[#8A8172]">Not the moment?</span>
            <span className="text-[13.5px] font-extrabold text-[#38623F]">Another idea &rarr;</span>
          </div>
          <div className="mt-2.5 flex min-h-11 items-center gap-2">
            <span className="flex-none text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#8A8172]">The talking family</span>
            <div className="flex flex-1 gap-1">
              <span className="h-[5px] flex-1 rounded-[3px] bg-[#55915E]" />
              <span className="h-[5px] flex-1 rounded-[3px] bg-[#E7F1E4]" />
              <span className="h-[5px] flex-1 rounded-[3px] bg-[#E7F1E4]" />
            </div>
            <span className="flex-none text-[11.5px] font-extrabold text-[#38623F]">1 of 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const NAPS_STATS = [
  { label: "Last sleep", dot: "#7FA8CF", value: "1h 25m", sub: "Awake for 2h 10m" },
  { label: "Last feeding", dot: "#E2A03F", value: "Now", sub: "Breastfeeding · Left" },
  { label: "Diapers", dot: "#7FA88C", value: "4 today", sub: "3 wet · 1 dirty" },
  { label: "Total sleep", dot: "#7FA8CF", value: "8h 40m", sub: "Last 24 hours" },
];

const NAPS_LOG = [
  { label: "Sleep", dot: "#7FA8CF", on: false },
  { label: "End feed", dot: "#16202A", on: true },
  { label: "Diaper", dot: "#7FA88C", on: false },
  { label: "More", dot: "#C9D2E3", on: false },
];

function NapsScreen() {
  return (
    <div className="absolute inset-0 bg-[#16202A] text-[#E9F0F5]">
      <StatusBar clock={CLOCK.tinynaps} />
      <div className="absolute inset-0 box-border flex flex-col gap-3.5 px-[22px] pb-[30px] pt-16">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <AppTile app="tinynaps" className="h-[30px] w-[30px] rounded-[10px]" markClassName="h-6 w-6" />
            <span className="text-base font-extrabold">TinyNaps</span>
          </div>
          <div className="flex h-[34px] items-center rounded-[17px] bg-[#243344] px-[13px] text-[12.5px] font-extrabold text-[#93A7B6]">Mila</div>
        </div>
        <div>
          <div className="text-[30px] font-extrabold leading-[1.1]">Today</div>
          <div className="mt-[3px] text-sm font-bold text-[#93A7B6]">Monday, October 12</div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {NAPS_STATS.map((stat) => (
            <div key={stat.label} className="rounded-[18px] bg-[#243344] px-3.5 py-[13px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ background: stat.dot }} />
                <span className="text-xs font-extrabold text-[#93A7B6]">{stat.label}</span>
              </div>
              <div className="mt-1.5 text-2xl font-extrabold">{stat.value}</div>
              <div className="mt-px text-xs font-bold text-[#93A7B6]">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <div className="text-[11.5px] font-extrabold uppercase tracking-[0.08em] text-[#93A7B6]">Quick log</div>
        <div className="grid grid-cols-4 gap-[9px]">
          {NAPS_LOG.map((button) => (
            <div
              key={button.label}
              className={`flex h-[76px] flex-col items-center justify-center gap-[7px] rounded-[18px] ${
                button.on ? "bg-[#F0B66E] text-[#16202A]" : "bg-[#243344] text-[#E9F0F5]"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: button.dot }} />
              <span className="text-[13.5px] font-extrabold">{button.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center text-[13px] font-bold text-[#93A7B6]">Feed started &middot; left side</div>
      </div>
    </div>
  );
}

const SCREENS: Record<AppSlug, () => ReactNode> = {
  tinylayers: LayersScreen,
  tinymeals: MealsScreen,
  tinyblooms: BloomsScreen,
  tinynaps: NapsScreen,
};

/** A static app screen at phone size (390 by 780), scaled down to sit in a 260 by 520 frame. */
export function HeroScreen({ app }: { app: AppSlug }) {
  const Screen = SCREENS[app];
  return (
    <div className="absolute left-0 top-0 h-[780px] w-[390px] origin-top-left scale-[0.6667] text-left">
      <Screen />
    </div>
  );
}
