import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export default function TinyMealsLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${nunitoSans.variable} font-meals`}>{children}</div>;
}
