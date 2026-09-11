/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nv-black': '#0A0A0A',
        'nv-white': '#FFFFFF',
        'nv-border': '#EBEBEB',
        'nv-muted': '#737373',
        'nv-blue': '#0055FF',
        'nv-gray': '#F5F5F5',
        // Akcenty delikatne dla kart hover
        'nv-agro-bg': '#F0FDF4',
        'nv-wash-bg': '#FFF1F2',
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