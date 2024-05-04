import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'ss': '0.7rem', 
      },
      backgroundColor: {
        'dark-grey-opacity': 'rgba(12, 14, 16, 0.5)',
        'dark-grey': 'rgb(12 14 16)', 
      },
    },
  },
  plugins: [],
};
export default config;
