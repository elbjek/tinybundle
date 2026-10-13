import { ImageResponse } from "next/og";
import { BundleQuads } from "@/components/app-identity";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home screen icon: the TinyBundle mark on cream. iOS rounds the corners itself. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FEF8F3" }}>
        <svg viewBox="0 0 64 64" width={136} height={136}>
          {BundleQuads({})}
        </svg>
      </div>
    ),
    size,
  );
}
