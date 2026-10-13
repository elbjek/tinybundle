import { apps, type TinyApp } from "@/lib/apps";

const COUNT = ["no", "one", "two", "three", "four"];

/** "TinyMeals", "TinyMeals and TinyNaps", "TinyMeals, TinyBlooms and TinyNaps". */
function names(list: TinyApp[]): string {
  const all = list.map((a) => a.name);
  return all.length < 2 ? (all[0] ?? "") : `${all.slice(0, -1).join(", ")} and ${all[all.length - 1]}`;
}

const liveApps = apps.filter((a) => a.live);
const soonApps = apps.filter((a) => !a.live);
const isAre = (list: TinyApp[]) => (list.length === 1 ? "is" : "are");

/** Which apps are out and which are coming, worded from the one app config so the page never goes stale. */
export const launch = {
  anySoon: soonApps.length > 0,
  outNow: liveApps.length ? `${names(liveApps)} ${isAre(liveApps)} out now` : "Coming soon to the App Store",
  moreSoon: liveApps.length && soonApps.length ? `${soonApps.length} more coming soon` : "",
  appsIntro: !soonApps.length
    ? "Pick one to see what it answers. All four are out now."
    : !liveApps.length
      ? "Pick one to see what it answers. All four are on the way."
      : `Pick one to see what it answers. ${names(liveApps)} ${isAre(liveApps)} out now, and the other ${COUNT[soonApps.length]} ${isAre(soonApps)} on the way.`,
  joinText: `${liveApps.length ? `${names(liveApps)} ${isAre(liveApps)} out now. ` : ""}One email the day ${names(soonApps)} ${soonApps.length === 1 ? "arrives" : "arrive"}, plus a short tip now and then.`,
  devices: [
    liveApps.length ? `${names(liveApps)} ${isAre(liveApps)} available for iPhone on the App Store now.` : "",
    soonApps.length ? `${names(soonApps)} ${isAre(soonApps)} coming soon.` : "",
  ]
    .filter(Boolean)
    .join(" "),
};
