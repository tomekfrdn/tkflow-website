/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#041A2F',
        'brand-blue': '#00A3E0',
        'brand-agro': '#059669',
        'brand-agro-dark': '#065F46',
        'brand-wash': '#BE123C',
        'brand-wash-dark': '#881337',
        'brand-slate': '#64748B',
        'brand-light': '#F8FAFC',
        'brand-border': '#E2E8F0',
        // Zachowanie kompatybilności wstecznej
        'dark-blue': '#00a3e0',
        'light-blue': '#041A2F',
        'steel-blue': '#8FAEC4',
        'light-gray': '#F0F6FA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}