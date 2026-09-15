/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe8ed',
          200: '#ffd2dc',
          300: '#ffadbf',
          400: '#ff7799',
          500: '#f44a76',
          600: '#df275c',
          700: '#bc1a49',
          800: '#9c1840',
          900: '#84183a',
          950: '#49081c',
        },
        rosewood: {
          50: '#fbf7f6',
          100: '#f5eeec',
          200: '#ebdeda',
          300: '#dbc4be',
          400: '#c5a39a',
          500: '#ae8479',
          600: '#996c62',
          700: '#7f574f',
          800: '#694942',
          900: '#573f3a',
          950: '#2f201d',
        },
        cream: {
          50: '#fdfcf9',
          100: '#fbf8f2',
          200: '#f5efe3',
          300: '#ebe1ce',
          400: '#dcceb1',
          500: '#c8b693',
        },
        charcoal: {
          800: '#262425',
          900: '#1a1819',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft-sm': '0 2px 10px -2px rgba(244, 74, 118, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft': '0 8px 30px -4px rgba(244, 74, 118, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 40px -6px rgba(244, 74, 118, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
        'glow-pink': '0 0 25px -3px rgba(255, 173, 191, 0.45)',
      }
    },
  },
  plugins: [],
};
