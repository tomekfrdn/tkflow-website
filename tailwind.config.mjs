/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nv-graphite': '#0A1118',
        'nv-gray': '#F4F5F7',
        'nv-border': '#E5E7EB',
        'nv-muted': '#6B7280',
        // Zachowanie kompatybilności
        'dark-blue': '#0A1118',
        'light-blue': '#F4F5F7',
        'steel-blue': '#6B7280',
        'light-gray': '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}