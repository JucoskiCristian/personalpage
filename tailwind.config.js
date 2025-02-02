/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      backgroundImage: {
        pattern: 'url(/CristianJucoski.png)',
        marvel: 'url(/marvelpedia.png)',
        tripplann: 'url(/tripplann.png)',
        pokedex: 'url(/pokedex.png)'
      }
    }
  },
  plugins: []
}
