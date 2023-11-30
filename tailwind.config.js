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
          2: "#DC3134",
          3: '#F2F2F2'
        },
        'white-rgba': 'rgba(255, 255, 255, 0.4)',
        'black-rgba': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        primary: ['Georgia', 'sans-serif'],
        secondary: ['Nunito', 'sans-serif'],
      },
      width: {
        95: "95%"
      },
      screens: {
        'sm': '500px',
        'md' : '700px'
      },
      height: {
        '13/100': "13%"
      },
      width: {
        '23': "23%"
      }
    },
  },
  plugins: [],
}