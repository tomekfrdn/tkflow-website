/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'dark-blue': '#1292BE',
      'light-blue': '#16AFE4',
      'dark-gray': '#1b1e22',
      'light-gray': '#fafafa',
      'steel-blue': '#1292BE',
      'slate-gray': '#323539',
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
