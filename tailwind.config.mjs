/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tk-base': '#E0DDD4',   
        'tk-dark': '#121416',   
        'tk-border': '#BCB8AD', 
        'tk-muted': '#2A2F35',  
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