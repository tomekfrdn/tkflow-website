/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-surface': '#030c15',
        'brand-deep': '#041a2f',
        'brand-cyan': '#00a3e0',
        'brand-steel': '#8faec4',
        'brand-dim': '#1b3147',
        // Zachowanie kompatybilności wstecznej dla reszty podstron
        'dark-blue': '#00a3e0',
        'light-blue': '#041a2f',
        'dark-gray': '#041a2f',
        'light-gray': '#f0f6fa',
        'slate-gray': '#08243f',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}