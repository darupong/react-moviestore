/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "1D4E8D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
