/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')



module.exports = {
    content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        body: ['var(--font-ubuntu)', ...fontFamily.sans],
        heading: ['var(--font-ubuntu-bold)', ...fontFamily.sans],
        merri: ['var(--font-merriweather)', ...fontFamily.serif],
        lato: ['var(--font-lato)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1e1c1d", //black
        light: "#dfbeb1", //beige
        primary: "#7884d0", // 240,86,199 //blue
        secondary: "#FCA755", //yellow
        primaryDark: "#FCA755", // 80,230,217 //yellow
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#dfbeb1 5px,#dfbeb1 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1e1c1d 8px,#1e1c1d 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#dfbeb1 5px,#dfbeb1 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1e1c1d 8px,#1e1c1d 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#dfbeb1 5px,#dfbeb1 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1e1c1d 6px,#1e1c1d 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#dfbeb1 5px,#dfbeb1 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1e1c1d 4px,#1e1c1d 40px)",

      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}
