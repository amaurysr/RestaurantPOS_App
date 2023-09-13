/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project-root/*.{html,css,js}","./project-root/assets/scripts/*.js",
            "./project-root/logins/*.{html,css.js}"],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
        'gfs-didot': ['GFS Didot', 'serif'],
        'playfair-display-sc': ['Playfair Display SC', 'serif'],
      },
      backgroundImage: {
        'fancy-restaurant': "url('/project-root/assets/images/fancy.avif')",
        'fancy-pattern': "url('/project-root/assets/patterns/fancy-cushion.webp')",
        'confetti': "url('/project-root/assets/patterns/confetti.png')"
      },
      screens: {
        'xs': '320px',
        'xxs': '270px',
      },
    },
  },
  plugins: [],
}

