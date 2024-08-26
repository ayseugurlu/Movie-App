/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'], 
      },
      textIndent: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        
      }
    },
  },
  plugins: [],
   darkMode:"selector"
}