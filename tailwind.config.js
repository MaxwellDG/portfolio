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
        link: "#007ec9",
        linkHover: "#2a749f"
      },
      width: {
        infoBox: "400px"
      },
      screens: {
        xs: "458px",
        xxs: "385px",
        // 'mobilePortrait': {'raw': '(max-height: 1234px)'},
      }
    }
  },
  plugins: [],
}

