import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TinyBundle — Four apps. One mission.",
    template: "%s | TinyBundle",
  },
  description:
    "From the late nights to the everyday wins, TinyBundle is here for every tiny moment of parenting.",
  openGraph: {
    siteName: "TinyBundle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
