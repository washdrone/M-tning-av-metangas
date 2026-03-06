import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        skiffer: '#2C3E35',
        feltsten: '#5C7A6A',
        dimma: '#E8EDE9',
        papper: '#F7F5F0',
        kol: '#1A2420',
        aska: '#5A6860',
        mossa: '#C8D4CC',
        jarnmalm: '#1A3A52',
        // Keep old color tokens as aliases for gradual migration
        brand: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#5C7A6A', // feltsten
          500: '#5C7A6A',
          600: '#1A3A52', // jarnmalm
          700: '#1A3A52',
          800: '#2C3E35',
          900: '#2C3E35',
          950: '#1A2420',
        },
        dark: {
          50: '#F7F5F0',  // papper
          100: '#E8EDE9', // dimma
          200: '#1A2420', // kol (text)
          300: '#5A6860', // aska
          400: '#5A6860', // aska
          500: '#C8D4CC', // mossa
          600: '#C8D4CC', // mossa
          700: '#C8D4CC', // mossa
          800: '#E8EDE9', // dimma
          850: '#E8EDE9',
          900: '#F7F5F0', // papper
          950: '#F7F5F0', // papper
        },
        accent: {
          400: '#5C7A6A',
          500: '#5C7A6A',
          600: '#2C3E35',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Source Serif 4', 'Georgia', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
