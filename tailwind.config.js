/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acme:['Acme', 'sans-serif'],
        aclonica:['Aclonica', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      }

    },
    colors:{
      lightRose:'#FFC7C7',
      iridium:'#3A3A3A',
      white:'#FFFFFF',
     
    },
  },
  plugins: [require("daisyui")],
}