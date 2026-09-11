/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#060D17',
        'brand-navy': '#041A2F',
        'brand-blue': '#0098E0',
        'brand-agro': '#059669',
        'brand-wash': '#E11D48',
        'brand-slate': '#8FAEC4',
        // Zachowanie kompatybilności wstecznej
        'dark-blue': '#0098E0',
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