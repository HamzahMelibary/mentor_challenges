/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
          colors: {
      'bg-color': '#f2ebe4',
    },
    fontFamily: {
      'main-font': ['Montserrat', 'sans-serif'],
      'second-font': ['Fraunces', 'serif'],
      'blueCard': ['Outfit', 'sans-serif'],
    },
    },

  },
  plugins: [],
}