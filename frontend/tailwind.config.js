/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image-gradiante': "url('/assets/texture.png')",
      }
    },
  },
  plugins: [],
}

