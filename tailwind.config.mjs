/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#041A2F',
        'brand-water': '#0098E0',
        'brand-water-deep': '#005B99',
        'brand-agro': '#047857',
        'brand-wash': '#BE123C',
        'brand-bg': '#F4F7FA',
        'brand-slate': '#5A6E85',
        // Zachowanie kompatybilności wstecznej
        'dark-blue': '#0098E0',
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