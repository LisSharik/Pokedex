/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        brown: {
          "lighter": "#ecd1a5",
          "light": "#ce8e47",
          "normal": "#b46c22",
          "dark": "#843802",
        }
      },
    },
  },
  plugins: [
  ],
}

