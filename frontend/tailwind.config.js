/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // your custom colors, fonts, etc. go here
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),    ← uncomment & install if needed
    // require('@tailwindcss/typography'),
  ],
}