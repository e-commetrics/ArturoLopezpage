/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        century: ['Century Gothic'],
        sanseriffic: ['Sanseriffic'],
        Helvetica: ['Helvetica Neue'],
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: 
  [require("daisyui"),'prettier-plugin-tailwindcss'], 
  
});

