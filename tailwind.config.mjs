/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kh-black': '#050505',
        'kh-white': '#FFFFFF',
        'kh-gray': '#F4F5F7',
        'kh-border': '#EBEBEB',
        'kh-muted': '#6B7280',
        // Brutalne akcenty marek
        'kh-agro': '#022C22',
        'kh-wash': '#4C0519',
        // Zgodność wsteczna
        'dark-blue': '#050505',
        'light-blue': '#F4F5F7',
        'steel-blue': '#6B7280',
        'light-gray': '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}