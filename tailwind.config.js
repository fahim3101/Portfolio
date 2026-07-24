/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDEFEA',
        'paper-alt': '#E3E6DF',
        surface: '#F7F8F4',
        ink: '#14181F',
        'ink-soft': '#4B5259',
        'ink-faint': '#8A9088',
        border: '#D5D9CF',
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
