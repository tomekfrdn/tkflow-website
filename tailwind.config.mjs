/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tk-base': '#EFECE5',   
        'tk-dark': '#121416',   
        'tk-border': '#CCC9BC', 
        'tk-muted': '#484D54',  
        'tk-agro': '#134E39', 
        'tk-wash': '#651C32',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}