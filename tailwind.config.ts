import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gpmxBlack: "#020B14",
      gpmxBlue: "#1F73F9",
      gpmxWhite: "#FFFFFF",
      gpmxGray: "#BFC9D4",
      gpmxBlueAccent: "#00A1E7",
    },
    extend: {
      backgroundImage: {
        "gradient-gpmx":
          "linear-gradient(90deg, #0699DB 0%, #2D5E87 25%, #2E2A3F 50%, #341926 75%, #150C15 100%)",
        "tablet-and-above": "url('/bg-feedback.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
