export const SITE_URL = "https://tinybundle.com";

export const layersOgImage = {
  url: "/tinylayers/og-social.png",
  width: 1200,
  height: 630,
  alt: "TinyLayers baby outfit guidance for sleep, naps, and going out",
} as const;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
