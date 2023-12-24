/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        "light-gray": "#F1F3F9",
        "light-gray-1": "#787486",
        "light-gray-2": "#8B8D97",
        "light-gray-3": "#BEC0CA",
        "dark-gray": "#45464E",
        "light-pink": "#D235651A",
        "light-pink-1": "#E01461",
        "raspberry" : "#D23565"
      },
    },
  },
  plugins: [],
}

