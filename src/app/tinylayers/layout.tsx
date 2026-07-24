import type { Metadata } from "next";
import { layersOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "TinyLayers - Dress your baby with confidence",
    template: "%s | TinyLayers",
  },
  description:
    "TinyLayers tells you what your baby should wear for tonight's room, today's walk, every nap. Plain-English outfit guidance for sleep, outings, stroller, carrier, and car seat.",
  applicationName: "TinyLayers",
  category: "parenting",
  icons: {
    icon: [{ url: "/tinylayers/favicon.png", type: "image/png", sizes: "48x48" }],
    apple: [{ url: "/tinylayers/favicon.png", sizes: "48x48" }],
  },
  openGraph: {
    siteName: "TinyLayers",
    locale: "en_US",
    type: "website",
    images: [layersOgImage],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function TinyLayersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
