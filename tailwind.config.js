/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xsmall:"320px",
        small:"360px"

      },
      colors:{
        dark: "#1b1b1b",
        light: "#fff",
      }
    },
  },
  plugins: [],
}

