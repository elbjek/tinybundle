import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { absoluteUrl, bundleOgImage, SITE_URL } from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const defaultTitle = "TinyBundle - Four moments. One journey.";
const defaultDescription =
  "From the late nights to the everyday wins, TinyBundle is here for every tiny moment of parenting. Meet TinyHaven, TinyLayers, TinyBlooms, and TinyMeals.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | TinyBundle",
  },
  description: defaultDescription,
  applicationName: "TinyBundle",
  keywords: [
    "TinyBundle",
    "parenting apps",
    "TinyHaven",
    "TinyLayers",
    "TinyBlooms",
    "TinyMeals",
    "baby apps",
    "new parent apps",
  ],
  authors: [{ name: "Two Brick Labs", url: "https://www.twobricklabs.com" }],
  creator: "Two Brick Labs",
  publisher: "Two Brick Labs",
  openGraph: {
    siteName: "TinyBundle",
    locale: "en_US",
    type: "website",
    url: absoluteUrl("/"),
    title: defaultTitle,
    description: defaultDescription,
    images: [bundleOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [bundleOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>{children}</body>
    </html>
  );
}
