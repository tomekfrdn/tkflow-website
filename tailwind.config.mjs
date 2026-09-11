/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nv-black': '#000000',
        'nv-white': '#FFFFFF',
        'nv-gray': '#F7F7F7',
        'nv-text': '#222222',
        'nv-muted': '#717171',
        // Kompatybilność wsteczna (nieużywana w nowym designie, ale zapobiega błędom kompilacji)
        'dark-blue': '#000000',
        'light-blue': '#F7F7F7',
        'steel-blue': '#717171',
        'light-gray': '#F7F7F7',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}