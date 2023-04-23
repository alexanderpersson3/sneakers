/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#FF7E1B",
        secondary:"#1D2026",
        tertiary:"#69707D"
      }
    },
  },
  plugins: [],
}

