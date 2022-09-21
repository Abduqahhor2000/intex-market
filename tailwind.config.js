/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          brand: "rgb(0, 150, 150)",
        }
      }
    },
    screens:{
      "min_sm": "320px",
      "min_md": "380px",
      "min_lg": "480px",
      "sm":	"640px",
      "md":	"768px",
      "lg":	"1024px",
      "xl":	"1280px",
    },
    plugins: [],
  }
}
