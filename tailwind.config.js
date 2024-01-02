/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : "#2795a9",
        'secondary' : "#EFEFEF"
      }
    },
  },
  plugins: [],
}