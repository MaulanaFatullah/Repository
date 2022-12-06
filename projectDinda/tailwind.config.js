/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#E7F6F2',
        secondary: '#395B64',
        dark: '#2C3333',
      },
      fontFamily: {
        philosopher: 'Philosopher',
        amita: 'Amita'
      }
    },
  },
  plugins: [],
}
