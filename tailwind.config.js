/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'ai': "linear-gradient(to right, rgba(15, 15, 15, 0.4), rgba(15, 15, 15, 0.4)), url('https://www.xivtech.io/download.png')",
        'city': "linear-gradient(to right, rgba(15, 15, 15, 0.4), rgba(15, 15, 15, 0.4)), url('https://www.xivtech.io/main-service1.jpeg')",
        'cloud': "linear-gradient(to right, rgba(15, 15, 15, 0.4), rgba(15, 15, 15, 0.4)), url('https://www.xivtech.io/m1.webp')",
      }
    },
  },
  plugins: [],
}

