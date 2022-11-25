/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
//#cf6643
const primary = '#00B9AE'
const darkPrimary = '#00a197'
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary,
      darkPrimary,
      black: {
        700: '#1b1b1b',
        800: '#131313',
        900: '#111111',
        1000: '#0d0d0d',
      },
      red: '#cf3933',
      brown: '#5d2d20',
      like: '#ff3347',
      gray: {
        100: '#F9F9F9',
        300: '#d9dae8',
        400: '#898a91',
        500: '#66676E',
        600: '#555459',
        700: '#39393f',
      },
      darkBlue: {
        900: '#21242D',
        1000: '#16181e',
      },
      yellow: '#facc15',
      white: colors.white,
    },
    extend: {
      spacing: {
        0.1: '0.5px',
        0.25: '1px',
        0.5: '2px',
        17.5: '70px',
        layout: '30px',
        65: '260px',
        70.5: '282px',
        100: '400px',
        120: '480px'
      },
      fontSize: {
        '2lg': '25px',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        reverseFade: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      animation: {
        fade: 'fade .4s ease-in-out',
        scaleIn: 'scaleIn .3s ease-in-out',
        reverseFade: 'reverseFade .4s ease-in-out'
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: primary,
          color: '#fff',
          borderRadius: '10px',
          transition: 'background-color .3s ease-in-out',
          '&:hover': {
            backgroundColor: darkPrimary,
          }
        },
        '.wrapper-admin': {
          display: 'flex',
          flexDirection: 'column',
          gap: '28px'
        }
      })
      addUtilities({
        '.box-shadow': {
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2);'
        },
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.image-bg': {
          objectPosition: 'center',
          objectFit: 'cover',
          pointerEvents: 'none',
        },
        '.outline-border-none': {
          outline: 'none',
          border: 'none',
        }
      })
    })
  ],
}