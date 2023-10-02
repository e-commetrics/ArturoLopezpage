/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans'],
        century: ['Century Gothic', 'sans'],
        sanseriffic: ['Sanseriffic', 'sans'],
        Helvetica: ['Helvetica Neue', 'sans'],
      },
    },
  },
  plugins: 
  [require("daisyui"),'prettier-plugin-tailwindcss'], 
  
});

