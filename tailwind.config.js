/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f1f7fe",
        darkkhaki: "#dab96b",
        dimgray: "#5d7975",
        gray: {
          "100": "#f9fcff",
          "200": "#5e7f68",
          "300": "rgba(250, 250, 250, 0)",
          "400": "rgba(0, 0, 0, 0.26)",
        },
        cadetblue: "#648c85",
        white: "#fff",
        "red-l3": "#c55236",
        "grey-l3": "#c2c2c2",
        "red-l31": "#c9563a",
        gainsboro: "#dbe4e3",
        lightsteelblue: "#c2d1e2",
        darkgray: "#a5b4b1",
        sienna: "rgba(135, 72, 72, 0)",
        silver: "#aec0bd",
      },
      fontFamily: {
        "body-short": "Rubik",
        roboto: "Roboto",
      },
      borderRadius: {
        "10xs": "3px",
        "3xl": "22px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      "6xl": "25px",
      mid: "17px",
      base: "16px",
      "5xl": "24px",
      "21xl": "40px",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}