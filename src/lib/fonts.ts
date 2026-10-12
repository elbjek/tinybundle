import { Nunito_Sans } from "next/font/google";

/** TinyMeals typeface, exposed as --font-nunito for the `font-meals` utility. */
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});
