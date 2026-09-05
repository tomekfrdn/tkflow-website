/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'dark-blue': '#603bf5',
      'light-blue': '#aaa0fb',
      'dark-gray': '#20066e',
      'light-gray': '#d2cefd',
      'steel-blue': '#f0effe',
      'slate-gray': '#323539',
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
