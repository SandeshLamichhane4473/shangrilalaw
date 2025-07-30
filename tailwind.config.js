/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

       colors: {
        primary: '#01111d',
        // secondary: '#01111d '
        secondary:  '#ff3d10'  //'#1F2937'
      },
    },
  },
  plugins: [],
}