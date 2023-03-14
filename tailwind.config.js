/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.ts",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: "0px",
    },
    extend: {},
  },
  plugins: [],
}
