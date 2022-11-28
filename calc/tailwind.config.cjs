/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        macherie: "macherie",
      },
      colors: {
        'darky-green' : '#052939'

      }
    },
  },
  plugins: [],
}