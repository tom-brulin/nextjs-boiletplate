/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["var(--dmSans-font)", "sans-serif"],
        poppins: ["var(--poppins-font)", "sans-serif"],
      },
      colors: {
        dark: {
          "1/6": "#FCFCFD",
          "2/6": "#777E90",
          "3/6": "#353945",
          "4/6": "#23262F",
          "5/6": "#18191D",
          "6/6": "#141416",
        },
        primary: {
          "1/2": "#3772FF",
          "2/2": "#0045EA",
        },
        success: {
          "1/2": "#58BD7D",
          "2/2": "#0EC551",
        },
        error: {
          "1/2": "#BD5858",
          "2/2": "#C50E0E",
        },
        warning: {
          "1/2": "#BD9558",
          "2/2": "#C5910E",
        },
      },
    },
  },
  plugins: [],
};
