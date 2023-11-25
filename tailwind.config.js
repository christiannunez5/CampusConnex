/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: {
          1: "#0e345a",
          2: "#DC3134"
        }
      },
      fontFamily: {
        primary: ['Kanit', 'sans-serif']
      },
      width: {
        95: "95%"
      },
      screens: {
        'sm': '500px',
        'md' : '700px'
      }
    },
  },
  plugins: [],
}