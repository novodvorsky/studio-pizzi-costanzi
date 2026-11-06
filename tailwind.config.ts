import type { Config } from 'tailwindcss'

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      boxShadow: {
        'luxury': '0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'card': '0 2px 16px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
