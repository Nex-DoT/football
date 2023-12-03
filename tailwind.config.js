import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "color1":"#17181d",
        "color2":"#292c35",
        "color3":"#e09145",
        "color4":"#DBD8E3",
        "color5":"#03C4A1",
      },
      height:{
        "200": "500px",
        "150": "450px",
      },
      width:{
        "200": "800px"
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
  plugins: [nextui()],
}
