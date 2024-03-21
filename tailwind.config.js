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
      primary: '#FFFFFF',
      secondary: '#79B2BD',
      aux: '#faedcd',
      backg: '#fefae0'
    }
  },
  plugins: [],
  }
}
