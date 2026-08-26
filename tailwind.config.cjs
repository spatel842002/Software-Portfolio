module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
    './public/**/*.{html,svg}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-hover': 'rgb(var(--color-surface-hover) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        accent: {
          50: 'rgb(var(--color-accent) / 0.06)',
          100: 'rgb(var(--color-accent) / 0.12)',
          200: 'rgb(var(--color-accent) / 0.24)',
          400: 'rgb(var(--color-accent-strong) / <alpha-value>)',
          500: 'rgb(var(--color-accent) / <alpha-value>)',
          600: 'rgb(var(--color-accent-strong) / <alpha-value>)',
          foreground: 'rgb(var(--color-accent-foreground) / <alpha-value>)'
        }
      },
      borderColor: {
        DEFAULT: 'rgb(var(--color-border) / <alpha-value>)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--color-accent) / 0.16), 0 8px 30px -8px rgb(var(--color-accent) / 0.35)',
        card: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both'
      }
    }
  },
  plugins: []
};
