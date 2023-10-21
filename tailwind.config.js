/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('./src/images/mountains.png)",
        'card': "url('/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}
