/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src//*.{html,js}',
    './components//*.{html,js}',
  ],
  theme: {
    screens: {
      'sm': {'max': '400px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

