/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'PurpleHead': '#550088',
        'LightPurpleHead': '#B6007C',
        'PurpleHeadDark': '#25003B',
        'LightBackColor': '#F5F0F8',
        'DarkBackColor': '#DBD3E1',
        'DeepPurple': '#11001B',
        'LiGrey': '#525252',
      },
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    fontFamily: {
      'mplus': ['"M PLUS 2"', 'sans-serif'],
    },
  },
  plugins: [],
}

