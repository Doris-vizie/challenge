/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: 'hsl(31, 77%, 52%)',
      grey: 'hsl(0, 0%, 95%)',
      cyan:'hsl(184, 100%, 22%)',
      dark: 'hsl(179, 100%, 13%)',
      gray: 'hsl(0, 0%, 95%)',
      white: 'hsla(0, 0%, 100%, 0.75)',
    },
    extend: {},
  },
  plugins: [],
}

