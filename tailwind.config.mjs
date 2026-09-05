/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'dark-blue': '#041A2F',
      'light-blue': '#08243F',
      'dark-gray': '#041A2F',
      'light-gray': '#F0F6FA',
      'steel-blue': '#8FAEC4',
      'slate-gray': '#8FAEC4',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
