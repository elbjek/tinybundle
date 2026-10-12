import { Nunito_Sans } from "next/font/google";

/** Nunito Sans, the TinyBundle and TinyMeals typeface, exposed for the `font-nunito` utility. */
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});
