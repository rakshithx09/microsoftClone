/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '2xl': {'max': '1430px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1050px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '950px'},
      // => @media (max-width: 1023px) { ... }
      'md2' : {'max': '880px'},
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '540px'},
      // => @media (max-width: 639px) { ... }
      'xsm': {'max': '490px'},
    },
    extend: {
    },
  },
  plugins: [],
}

