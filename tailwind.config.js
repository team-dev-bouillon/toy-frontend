/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      "sm": { "max": "767px" },
      "md": { "min": "768px", "max": "991px" },
      "lg": { "min": "992px", 'max': "1199px" },
      "xl": { 'min': "1200px" }
    },
    extend: {}
  },
  plugins: [],
}