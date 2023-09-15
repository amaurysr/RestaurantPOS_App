/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project-root/*.{html,css,js}","./project-root/assets/scripts/*.js",
            "./project-root/logins/*.{html,css.js}", "./project-root/client-main/*.{html,css.js}",
          "./project-root/admin-main/*.{html,css,js}","./scripts/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
        'gfs-didot': ['GFS Didot', 'serif'],
        'playfair-display-sc': ['Playfair Display SC', 'serif'],
        'montserrat': ['Montserrat', 'serif'],
      },
      backgroundImage: {
        'fancy-restaurant': "url('/project-root/assets/images/fancy.avif')",
        'fancy-pattern': "url('/project-root/assets/patterns/fancy-cushion.webp')",
        'confetti': "url('/project-root/assets/patterns/confetti.png')",
        'sidewalk-branch': "url('/project-root/assets/images/background-branch.avif')",
        'shadow-simple': "url('/project-root/assets/images/background-simple.avif')",
        'white-texture': "url('/project-root/assets/images/whitetexture.avif')"
      },
      screens: {
        'xs': '320px',
        'xxs': '270px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-gradients'),
    require('daisyui'),
  ],
}

