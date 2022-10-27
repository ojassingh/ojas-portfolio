/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
    './src/**/*.html'
  ],
  theme: {
    extend: {
      corePlugins: {
        preflight: true,
      },

      scale: {
        '175': '1.75',
        '200': '2.00'
      },

      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

      spacing: {
        '8000': '80%',
        '18': '4.5rem',
        'project': '100rem',
        '5000': '49.5%',
        '50': '14rem',
        '55': '16rem',
        '60': '24rem',
        '100': '28rem',
        '110': '32rem',
        '120': '35rem',
        '128': '38rem',
        '135': '50%',
        '138': '48rem',
        '145': '52rem',
        '155': '60rem',
      }, 
      // width: {
      //   '128': '40rem',
      // },
      colors: {
        'secondary': '#2901E9',
        'chalk': '#F2F0EB',
        'primary': '#AEB9F2',
        'darkgray': '#3E3E40',
        'green': '#09A603',
        'red': '#F20505',
        'orange': '#F26444',
        'dark': '#0D0D0D',
        'pinkish': '#D93B92',
        'yellowish': '#F2EA79',
        'purple': '#1D1C40',
        'projbg': '#031E22',
        'projtext': '#14E3AC',
        'projcomp': '#14E3AC',
        'extrablue': '#1A57DA',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      lineHeight: {
        'flow': '1.7',
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        normed: 450,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'mid': '3.0rem',
        'midxl': '4.0rem',
        'xl': '7.0rem',
        'full': '9999px',
        'large': '12px',
      },
      screens: {

        'xs': {'min': '300px', 'max': '639px'},

        // ...defaultTheme.screens,
      }, 

    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
