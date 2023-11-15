/** @type {import('tailwindcss').Config} */
import DEFAULT_THEME from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...DEFAULT_THEME.fontFamily.sans]
    },
    colors: {
      'tomato': {
        100: 'hsl(5, 100%, 95%)',
        800: 'hsl(4, 100%, 67%)'
      },
      'dark-slate-grey': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {
      backgroundImage: {
        'checkmark': 'url(/assets/images/icon-list.svg)'
      }
    },
  },
  plugins: [],
}

