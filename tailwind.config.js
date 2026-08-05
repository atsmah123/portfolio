/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        montserrat: ['Montserrat', 'Manrope', 'sans-serif'],
        manrope: ['Manrope', 'Montserrat', 'sans-serif'],
      },
      // These map to the CSS variables in src/index.css
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        card: 'var(--color-card)',
        elevated: 'var(--color-elevated)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        'accent-secondary': 'var(--color-accent-secondary)',
        border: 'var(--color-border)',
      },
      maxWidth: {
        content: '72rem',
      },
      animation: {
        'spin-slow': 'spinSlow 26s linear infinite',
        'spin-slower': 'spinSlow 40s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
