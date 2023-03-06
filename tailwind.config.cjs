/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
   
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', "sans-serif"]
      },
      colors: {
        'darkBlue': 'hsl(209, 23%, 22%)',
        'veryDarkBlue': 'hsl(207, 26%, 17%)',
        'darkGrey': 'hsl(0, 0%, 52%)',
        'veryLightGrey' :'hsl(0, 0%, 98%)'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px',
        // '2xl':'1900px'
      },
     
    },
  },
  plugins: [],
}
