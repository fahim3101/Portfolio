/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme tokens
        paper: '#EDEFEA',
        'paper-alt': '#E3E6DF',
        surface: '#F7F8F4',
        ink: '#14181F',
        'ink-soft': '#4B5259',
        'ink-faint': '#8A9088',
        border: '#D5D9CF',
        // Dark theme tokens (suffix -d to be used with `dark:bg-X-d`)
        'paper-d': '#0F1318',
        'paper-alt-d': '#0B0E12',
        'surface-d': '#1A1F26',
        'ink-d': '#E8EAE5',
        'ink-soft-d': '#9AA0A6',
        'ink-faint-d': '#6B7077',
        'border-d': '#2A2F37',
        'add-soft-d': '#1A2E22',
        'remove-soft-d': '#2E1A18',
        'amber-soft-d': '#2E2618',
        // Other tokens (unchanged across themes)
        terminal: '#12161D',
        'terminal-line': '#232B34',
        add: '#3DA35D',
        'add-soft': '#DCEEE1',
        remove: '#C1554A',
        'remove-soft': '#F3DEDB',
        amber: '#DE9F35',
        'amber-soft': '#F6E7CC',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Manrope"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
