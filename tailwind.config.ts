import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F1ECE4',
        charcoal: '#1A1A1A',
        'rose-nude': '#C9A28A',
        'burnt-mocha': '#6B4A38',
        sage: '#7A8B6F',
        rust: '#B5483A',
      },
      fontFamily: {
        serif: ['Canela', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px'
      }
    }
  },
  plugins: []
}

export default config
