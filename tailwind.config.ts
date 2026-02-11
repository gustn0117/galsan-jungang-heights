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
        navy: "#1a2744",
        "navy-light": "#2a3a5c",
        gold: "#c9a96e",
        "gold-light": "#d4b87a",
      },
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "sans-serif"],
        serif: ["Noto Serif KR", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
