/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Montserrat"],
        mono: ["Montserrat"],
        display: ["Montserrat"],
        body: ["Montserrat"],
      }
    },
  },
  plugins: [],
}
