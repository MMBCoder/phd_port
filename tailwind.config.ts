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
        navy:    { DEFAULT: "#071A2D", 50: "#0d2540", 100: "#0a1f35", 200: "#071A2D" },
        teal:    { DEFAULT: "#0E7C7B", light: "#12A09F", dark: "#0a5e5d" },
        emerald: { DEFAULT: "#22C55E" },
        surface: "#F8FAFC",
        card:    "#FFFFFF",
        ink:     "#0F172A",
      },
      fontFamily: {
        heading: ["var(--font-space)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-ibm)", "monospace"],
      },
      animation: {
        "float":    "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
