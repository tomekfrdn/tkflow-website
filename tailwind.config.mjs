/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kh-black': '#000000',
        'kh-white': '#FFFFFF',
        'kh-gray': '#F2F2F2',
        'kh-muted': '#888888',
        // Brutalne akcenty dla brandów
        'kh-agro': '#022C22', // Ekstremalnie ciemna zieleń
        'kh-wash': '#4C0519', // Ekstremalnie ciemna czerwień
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}