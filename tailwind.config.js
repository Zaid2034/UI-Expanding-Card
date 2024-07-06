/** @type {import('tailwindcss').Config} */
import bgImgae from './src/assets/bgImage.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./src/assets/bgImage.jpg')",
      },
    },
  },
  plugins: [],
}