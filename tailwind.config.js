/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
        'gfs-didot': ['GFS Didot', 'serif'],
        'playfair-display-sc': ['Playfair Display SC', 'serif'],
      },
      backgroundImage: {
        'fancy-restaurant': "url('/main/images/fancy.avif')",
        'fancy-pattern': "url('/main/patterns/fancy-cushion.webp')",
        'confetti': "url('/main/patterns/confetti.png')"
      },
      screens: {
        'xs': '320px',
        'xxs': '270px',
      },
    },
  },
  plugins: [],
}

