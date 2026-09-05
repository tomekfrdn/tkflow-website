/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Twoje własne tokeny TK Flow:
        'dark-blue': '#041A2F',     // Abyssal Navy (głębokie tło pod scroll)
        'light-blue': '#F0F6FA',    // Glacier Ice (jasne tła)
        'surface-blue': '#08243F',  // Tło kart i modułów
        'steel-blue': '#8FAEC4',    // Teksty wyciszone / obramowania
        'brand-water': '#00A3E0',   // Hydro Cyan (ekran Hero)

        // Tokeny marek-córek (do stopki i selektorów):
        'brand-carmine': '#BE123C', // Serce Myjni
        'pipe-blue': '#0284C7',     // Rura PE
        'agro-green': '#10B981',    // Nawadnianie / Agro
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}