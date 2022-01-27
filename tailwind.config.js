module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '0px',
      'xs1': '540px',
    },
    extend: {
      gridTemplateColumns: {
        '1/5': '1fr 3fr'
      }
      
    },
  },
  plugins: [],
};
