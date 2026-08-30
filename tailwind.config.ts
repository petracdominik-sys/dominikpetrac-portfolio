import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        blob: "blobPulse 8s ease-in-out infinite",
      },
      keyframes: {
        blobPulse: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "33%": { transform: "scale(1.05) rotate(3deg)" },
          "66%": { transform: "scale(0.97) rotate(-2deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
