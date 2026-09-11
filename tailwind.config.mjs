/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-ink': '#0B1523',
        'brand-blue': '#0066CC',
        'brand-agro': '#059669',
        'brand-wash': '#DC2626',
        'brand-slate': '#64748B',
        'brand-bg': '#F8FAFC',
        'brand-surface': '#FFFFFF',
        // Zachowanie kompatybilności wstecznej
        'dark-blue': '#0066CC',
        'light-blue': '#0B1523',
        'steel-blue': '#64748B',
        'light-gray': '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
    },
  },
  plugins: [],
}