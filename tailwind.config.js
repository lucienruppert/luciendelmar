/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {
      colors: {
        gold: "#a18e58",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      screens: {
        xs: { max: "500px" },
        "2xs": { max: "400px" },
      },
    },
  },
  plugins: [],
};
