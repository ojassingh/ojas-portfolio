/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      corePlugins: {
        preflight: true,
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
        '50': '14rem',
        '60': '24rem',
        '100': '28rem',
        '110': '32rem',
        '120': '35rem',
        '128': '38rem',
        '135': '50%',
        '138': '48rem',
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
        'purple': '#1D1C40'
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
        'xl': '7.0rem',
        'full': '9999px',
        'large': '12px',
      },
      
    },
  },
  plugins: [],
}
