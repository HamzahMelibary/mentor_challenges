/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
          colors: {
      'bg-color': '#f2ebe4',
    },
    fontFamily: {
      'perfume_first': ['Montserrat', 'sans-serif'],
      'perfume_second': ['Fraunces', 'serif'],
      'blueCard': ['Outfit', 'sans-serif'],
    },
    variants: {
      extend: {
          display: ["group-hover"],
      },
  },
    
  },

  },
  plugins: [],
}