/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#22d3ee',
        'neon-purple': '#a855f7',
        'neon-pink': '#f472b6',
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
        'heading': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
