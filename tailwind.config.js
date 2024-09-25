/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        darkerGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans"],
      },
      keyframes: {
        fadeIn: {
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease forwards",
        fadeOut: "fadeOut 500ms ease forwards",
      },
    },
  },
  plugins: [],
};
