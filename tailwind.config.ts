/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            DEFAULT: '#0B1F3A',
            light: '#132d54',
            dark: '#070f1e',
          },
          gold: {
            DEFAULT: '#C8960C',
            light: '#e0aa14',
            dark: '#9e7509',
            pale: '#FDF3DC',
          },
        },
        fontFamily: {
          playfair: ['"Playfair Display"', 'Georgia', 'serif'],
          dmsans: ['"DM Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }