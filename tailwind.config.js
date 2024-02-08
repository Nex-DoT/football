import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      ProtestG:['Protest Guerrilla', 'sans-serif'],
      Roberto: ['Titillium Web', 'sans-serif'],
      Rubic: ['Rubik', 'sans-serif'],
      Anton: ['Anton', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "color1":"#17181d",
        "color2":"#FFF",
        "color3":"#292c35",
        "color4":"#F5F5F5",
        "color5":"#F5F5F5",
        "color6":"#D4A724",
        "color7":"#fed55f",
      },
      height:{
        "200": "500px",
        "210": "570px",
        "150": "450px",
      },
      width:{
        "200": "1500px"
      },
      left:{
        "150": "500px",
        "160": "600px",
        "170": "700px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [nextui() ,],
}
