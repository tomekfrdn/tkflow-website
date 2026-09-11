/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nv-dark': '#0D0F12',
        'nv-card': '#13161B',
        'nv-border': 'rgba(255, 255, 255, 0.12)',
        'nv-muted': '#9AA1A9',
        'nv-light': '#F3F4F6',
        // Kompatybilność wsteczna
        'dark-blue': '#0D0F12',
        'light-blue': '#13161B',
        'steel-blue': '#9AA1A9',
        'light-gray': '#F3F4F6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}