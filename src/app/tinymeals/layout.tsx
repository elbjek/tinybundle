import { nunitoSans } from "@/lib/fonts";

export default function TinyMealsLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${nunitoSans.variable} font-nunito`}>{children}</div>;
}
