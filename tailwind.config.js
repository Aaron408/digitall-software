/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "real-bg" : "#050505",
        "real-gold": "#D0AB58"
      },
    },
  },
  plugins: [],
}