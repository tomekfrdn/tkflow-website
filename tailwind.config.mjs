/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tk-black': '#0A1118',
        'tk-border': '#E5E7EB',
        'tk-muted': '#6B7280',
        'tk-water': '#0066CC',
        'tk-agro': '#059669',
        'tk-wash': '#DC2626',
        // Zachowanie kompatybilności dla układu
        'dark-blue': '#0A1118',
        'light-blue': '#FFFFFF',
        'steel-blue': '#6B7280',
        'light-gray': '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
    },
  },
  plugins: [],
}