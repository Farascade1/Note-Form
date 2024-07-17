/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        srimaryColor: "#ABEF9",
        secondaryColor: "#050C9C",
      }
    },
  },
  plugins: [],
}

