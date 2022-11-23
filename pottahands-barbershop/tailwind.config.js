/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FAE7C6',
        dark: '#1E1E1E',
        secondary: '#f4f4f4',
        'base-color': '#C0C8D4',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        noto: 'Noto Serif',
      }
    },
  },
  plugins: [],
}
