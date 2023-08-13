/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'sm': '360px'
      },
      maxHeight: {
        '3/4-screen': '75vh',
      }
    },
  },
  plugins: [],
}

