/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        transparentContainer: "rgba(0, 0, 0, 0.65)",
      },
      width: {
        infoBox: "400px"
      }
    }
  },
  plugins: [],
}

