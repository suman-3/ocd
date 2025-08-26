/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#EA0000',
      },
      backgroundColor: {
        'app-black': '#000000',
        'app-gray': '#232225',
      },
      textColor: {
        'app-white': '#ffffff',
        'app-red': '#EA0000',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
      }
    },
  },
  plugins: [],
}

