/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "content/**/*.md",
      "./themes/pehtheme-hugo/**/*.{html,js}",
      "./layouts/**/*.html"
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}