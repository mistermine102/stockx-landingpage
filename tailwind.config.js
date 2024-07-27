/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--colorPrimary)',
        secondary: 'var(--colorSecondary)',
        lightGrey: 'var(--colorLightGrey)',
        grey: 'var(--colorGrey)',
      },
    },
  },
  plugins: [],
}
