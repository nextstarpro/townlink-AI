import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: "#FFFFFF", alt: "#F8FAFC" },
        surface: "#FFFFFF",
        border: "#E2E8F0",
        muted: { DEFAULT: "#F1F5F9", fg: "#475569" },
        brand: {
          blue: "#2563EB",
          "blue-ink": "#1E3A8A",
          green: "#009933",
          "green-ink": "#00782A",
          "green-soft": "#E6F7EC",
          "green-line": "#B7E4C7",
        },
        cta: { DEFAULT: "#F59E0B", fg: "#111827", hover: "#D97706", ring: "#FDBA74" },
        text: { body: "#0F172A", muted: "#475569" },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: { bento: "16px" },
      boxShadow: {
        bento: "0 1px 2px rgba(15, 23, 42, 0.04)",
        "bento-hover": "0 8px 24px rgba(15, 23, 42, 0.08)",
        cta: "0 4px 14px rgba(245, 158, 11, 0.35)",
        "cta-hover": "0 6px 20px rgba(245, 158, 11, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
