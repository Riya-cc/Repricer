/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
    colors: {
      'highlight' : '#1C3E57',
      'slate-blue-5': '##1D4D70',
      'non-highlight' : '#63849C',
      'field-outline' : '#8DB1CB',
      'separator' : '#D0E6EF',
      'form-color' : '#E8F5FA',
      /* 'grey-2': '#E9E9E9', */
      'grey-1': '#F8F8F8',
      'red-l3': '#C9563A',
        white: "#fff",
        darkslategray: "#345064",
        whitesmoke: "#f8f8f8",
        aliceblue: "#e8f5fa",
        slategray: "#607889",
        lightsteelblue: "#8db1cb",
        "red-l3": "#c9563a",
        gainsboro: "#e8e8e8",
        "red-l31": "#c55236",
        "slate-blue-l2": "#5a7a92",
      },
      fontFamily: {
        "big-description": "Rubik",
        roboto: "Roboto",
      },
      borderRadius: {
        "11xl": "30px",
        "6xl": "25px",
        "21xl": "40px",
        "2xs": "11px",
        "3xl": "22px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "7xl": "26px",
      "6xl": "25px",
      "5xl": "24px",
      mid: "17px",
      "21xl": "40px",
    },
  },
  corePlugins: {
    preflight: false,
  },
}

