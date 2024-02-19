/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5964E0',
        secondary: '#939BF4',
        tertiary: '#edeffc',
        accent: '#c5c9f4',
        darkBlue: '#19202D',
        midnight: '#121721',
        white: '#FFFFFF',
        lightGrey: '#F4F6F8',
        gray: '#9DAEC2',
        darkGrey: '#6E8098',
        error: '#ED2939'
      }
    },
  },
  plugins: [],
}