/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'dark-blue': '#3e12be',
      'light-blue': '#f0effe',
      'dark-gray': '#3e12be',
      'light-gray': '#f0effe',
      'steel-blue': '#f0effe',
      'slate-gray': '#3e12be',
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
