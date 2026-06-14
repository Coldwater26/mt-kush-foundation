import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#10312b",
        pine: "#5a7f71",
        sage: "#5a7f71",
        cream: "#f7f2e8",
        parchment: "#fbf7ed",
        copper: "#a76835",
        gold: "#d0a14b",
        river: "#3d6670",
        basalt: "#0d201d",
        smoke: "#4f625b"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-display)", "Arial Black", "Impact", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(23, 55, 45, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
