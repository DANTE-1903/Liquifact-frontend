import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  try {
    // Validate size configuration
    if (!size || typeof size.width !== 'number' || typeof size.height !== 'number') {
      throw new Error("Invalid size configuration");
    }
    if (size.width <= 0 || size.height <= 0 || size.width > 2000 || size.height > 2000) {
      throw new Error("Size dimensions out of bounds");
    }

    return new ImageResponse(
      <div
        style={{
          fontSize: 100,
          background: "#020617", // slate-950
          color: "#22d3ee", // cyan-400
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
          fontWeight: 800,
        }}
      >
        L
      </div>,
      {
        ...size,
      }
    );
  } catch (error) {
    console.error("Error generating apple-icon:", error instanceof Error ? error.message : "Unknown error");
    // Fallback deterministic response to prevent unrecoverable user experience
    return new ImageResponse(
      <div
        style={{
          background: "#000",
          color: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        L
      </div>,
      { width: 180, height: 180 }
    );
  }
}
