/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-base': '#0B0D10',
        'brand-card': '#11151A',
        'brand-steel': '#9AA4B2',
        'brand-orange': '#FF5500',
        'brand-orange-hover': '#FF6A1A',
        // Zachowanie kompatybilności wstecznej
        'dark-blue': '#FF5500',
        'light-blue': '#0B0D10',
        'steel-blue': '#9AA4B2',
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