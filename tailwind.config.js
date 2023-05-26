/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/web/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["roboto", "sans-serif"],
        "default": ["roboto", "sans-serif"]
      }
    },
		screens: {
      "xs": "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  }
}

