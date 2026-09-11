/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-ink': '#0A131F',
        'brand-blue': '#00A3E0',
        'brand-dark': '#041A2F',
        'brand-agro': '#047857',
        'brand-agro-light': '#ECFDF5',
        'brand-wash': '#BE123C',
        'brand-wash-light': '#FFF1F2',
        'brand-canvas': '#F6F8FA',
        'brand-muted': '#64748B',
        // Zachowanie kompatybilności wstecznej dla starszych klas
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