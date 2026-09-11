/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tk-base': '#F4F3EE',
        'tk-dark': '#1A1D20',
        'tk-border': '#E2E0D8',
        'tk-muted': '#656A70',
        // Twoje oryginalne kolory marek zintegrowane jako akcenty hover
        'tk-agro': '#134E39', // Głęboka, szlachetna zieleń nawadniania
        'tk-wash': '#651C32', // Głęboki, inżynieryjny karmin pomp Udor
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}