/** @type {import("tailwindcss").Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'powerful-pink': '#D56A93',
        purple: '#BB69E4',
        indigo: '#927AF2',
        'dark-indigo': '#3B38A7',
        'warm-white': '#F6F3EF',
        'sand-white': '#F5F5F5',
        'silver-grey': '#A6A3A3',
        'inactive-grey': '#767676',
        'true-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
