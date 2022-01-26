module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/5': '1fr 3fr'
      }
    },
  },
  plugins: [],
};
