/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mako', 'sans-serif'],
    },
    colors: {
      primary: '#ccd5ae',
      secondary: '#e9edc9',
      aux: '#faedcd',
      backg: '#fefae0'
    }
  },
  plugins: [],
  }
}
