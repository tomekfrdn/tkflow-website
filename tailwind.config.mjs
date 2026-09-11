/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#020B14',
        'brand-navy': '#041A2F',
        'brand-blue': '#00A3E0',
        'brand-agro': '#059669',
        'brand-wash': '#DC2626',
        'brand-slate': '#8FAEC4',
        // Kompatybilność wsteczna
        'dark-blue': '#00A3E0',
        'light-blue': '#041A2F',
        'steel-blue': '#8FAEC4',
        'light-gray': '#F0F6FA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}