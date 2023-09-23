/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project-root/front-html/*.{html,css,js}","./project-root/assets/scripts/*.js",
            "./project-root/front-html/logins/*.{html,css.js}", "./project-root/front-html/client-main/*.{html,css.js}",
          "./project-root/front-html/admin-main/*.{html,css,js}","./scripts/*.js"],
  daisyui: {
            themes: [
              {
                mytheme: {
                          "primary": "#570df8",                    
                          "secondary": "#f000b8",                
                          "accent": "#1dcdbc",              
                          "neutral": "#2b3440",                   
                          "base-100": "#ffffff",                  
                          "info": "#3abff8",                    
                          "success": "#36d399",                 
                          "warning": "#fbbd23",                  
                          "error": "#f87272",
                        },
                    },
                  ],
                },
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

