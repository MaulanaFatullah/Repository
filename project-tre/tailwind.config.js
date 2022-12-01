/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0C2F51',
        secondary: '#F2E5E5',
        accent: '#FF0000',
        dark: '#2B3A55',
        'base-color': '#FEFCF3',
      }
    },
  },
  plugins: [],
}
