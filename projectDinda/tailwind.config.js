/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#E15D48',
        secondary: '#FF8356',
        'shape-green': '#AFC966',
        'shape-yellow': '#FAC172',
        main: '#8AD6CA',
        'main-50': 'rgba(138,214,202 , .5)',
      },
      fontFamily: {
        philosopher: 'Philosopher',
        amita: 'Amita'
      }
    },
  },
  plugins: [],
}
