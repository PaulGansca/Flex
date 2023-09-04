/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        phone: '360px',
        bigPhone: '450px',
      },
      fontFamily: {
        title: ['Hind'],
        body: ['Cambay'],
      },
    },
  },
  plugins: [],
};
