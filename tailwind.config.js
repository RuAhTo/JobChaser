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
      primary: '#ACACEB',
      secondary: '#CFCFFF',
      aux: '#D7D7D9',
      backg: '#30303C'
    }
  },
  plugins: [],
  }
}
