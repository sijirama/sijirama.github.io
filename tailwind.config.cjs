/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      "Abril":['Abril Fatface', "cursive"],
      "Almarai":['Almarai', "sans-serif"],
      "Kanit":['Kanit', "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
}
