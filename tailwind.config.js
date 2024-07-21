/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
    screens: {
      'sm': '540px',
      'tablet': '720px',
      'md': '1024px'
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
  ],
}

