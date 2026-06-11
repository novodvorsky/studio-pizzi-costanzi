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
        primary: {
          DEFAULT: '#8B1E24',
          dark: '#6B1219',
          light: '#A82530',
        },
        secondary: '#F8F5F0',
        charcoal: {
          DEFAULT: '#1F1F1F',
          light: '#3A3A3A',
        },
        gold: {
          DEFAULT: '#D4B483',
          light: '#E8CFA3',
          dark: '#B8935A',
        },
        ivory: '#F8F5F0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'luxury-hover': '0 8px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'card': '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(139,30,36,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
