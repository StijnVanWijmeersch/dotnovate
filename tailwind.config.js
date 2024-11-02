/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04adee",
        secondary: "#03F0BC",
        dark: {
          DEFAULT: "#021927",
          100: "#354752",
          200: "#67757d",
          300: "#67757d30",
          400: "#67757d60",
        },
        grey: {
          100: "#9aa3a9",
          200: "#ccd1d4",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#cdeffc",
          200: "#cdfcf2"
        },
        green: "#68f6d7",
        blue: "#68cef5",
      }
    },
  },
  plugins: [],
};
