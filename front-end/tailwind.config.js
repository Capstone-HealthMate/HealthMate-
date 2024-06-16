/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   
  },
  plugins: [
    require('daisyui'),
  ],

   daisyui: {
     themes: [
       {
         light: {
           ...require("daisyui/src/theming/themes")["light"],
           primary: "#A9DAED",
           secondary: "#030D20",
           neutral: '#777777',
           accent: "#0B4170",
         },
       },
     ],
    },
}

