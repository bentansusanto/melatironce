/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily :{
        'fontHead' : ['Marcellus', 'serif'],
        'fontContent' : ['Open Sans', 'sans-serif'],
        'fontScript' : ['Pinyon Script', 'cursive']
    }
  },
  plugins: [],
}
