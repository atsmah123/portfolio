// Lets opacity modifiers like `bg-background/85` work with the CSS-variable
// colours (Tailwind v3 can't apply opacity to a bare var() otherwise).
const token = (name) => `color-mix(in srgb, var(${name}) calc(<alpha-value> * 100%), transparent)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // These map to the CSS variables in src/index.css
      colors: {
        background: token('--color-background'),
        surface: token('--color-surface'),
        plate: token('--color-plate'),
        primary: token('--color-primary'),
        secondary: token('--color-secondary'),
        muted: token('--color-muted'),
        accent: token('--color-accent'),
        'on-accent': token('--color-on-accent'),
        border: token('--color-border'),
        'border-strong': token('--color-border-strong'),
      },
    },
  },
  plugins: [],
}
