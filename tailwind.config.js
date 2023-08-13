/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./contexts/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        transparentContainer: "rgba(0, 0, 0, 0.65)",
      },
      width: {
        infoBox: "400px"
      },
      screens: {
        xs: "458px",
        xxs: "385px"
      }
    }
  },
  plugins: [],
}

