/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],  theme: {
    extend: {
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
        DMmono: ['DM Mono', 'monospace'],
        Inter: ['Inter', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif']
      },
      colors: {
        "light-gray": "#F1F3F9",
        "light-gray-1": "#787486",
        "light-gray-2": "#8B8D97",
        "light-gray-3": "#BEC0CA",
        "dark-gray": "#45464E",
        "lighter-gray":"#DBDEEE",
        "border-gray":"#E1E2E9",
        "main-gray":"#F4F5FA",
        "whiter":"#FFFFFF29",
        "light-pink": "#D235651A",
        "light-pink-1": "#E01461",
        "light-pink-2": "#D23565",
        "raspberry" : "#D23565",
        "light-yellow": "#FFCC9129",
        "red":"#CC5F5F",
        "gray-text-color":"#A6A8B1",
        "chart-bleu":"#97A5EB",
        "chart-yellow":"#FFCC91",
        "black01":"#1C1D22",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

