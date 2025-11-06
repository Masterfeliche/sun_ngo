/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- This is correct
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('C:/Users/felic/OneDrive/Desktop/cooking_zone/Nsajigwa/app/public/conny-schneider-xuTJZ7uD7PI-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}