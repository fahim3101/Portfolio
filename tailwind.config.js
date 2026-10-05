/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Light: warm paper. The page sits a clear step below the cards so
              white surfaces read as lifted paper rather than flat white. ─── */
        paper: '#F4F1EA',
        'paper-alt': '#EAE6DB',
        surface: '#FFFFFF',
        'surface-alt': '#FAF8F3',
        ink: '#16181C',
        'ink-soft': '#54575E',
        'ink-faint': '#5F6369',
        border: '#E1DCD0',
        'border-strong': '#CEC7B7',

        /* ── Dark: deep, low-glare. Page → band → card step upward. ──── */
        'paper-d': '#0A0B0D',
        'paper-alt-d': '#131519',
        'surface-d': '#1A1D22',
        'surface-alt-d': '#212429',
        'ink-d': '#ECEEF1',
        'ink-soft-d': '#A1A5AC',
        'ink-faint-d': '#85898F',
        'border-d': '#2C3037',
        'border-strong-d': '#3C414A',

        /* ── Accent (used sparingly, never decoratively) ──────────── */
        add: '#3DA35D',
        'add-deep': '#27743F',
        'add-soft': '#E3EFE7',
        'add-soft-d': '#13251A',

        /* ── Semantic ────────────────────────────────────────────── */
        remove: '#B85448',
        'remove-soft': '#F8EBE9',
        'remove-soft-d': '#251719',
        amber: '#A87A24',
        'amber-soft': '#F7F0E0',
        'amber-soft-d': '#221C10',

        /* Retained for deep-surface accents (hero caption chips) */
        terminal: '#14161A',
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        label: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.14em' }],
        hero: ['clamp(2.6rem, 7.6vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        section: ['clamp(2rem, 4.4vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        card: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        prose: ['1.0625rem', { lineHeight: '1.75rem' }],
      },
      maxWidth: {
        content: '1200px',
        measure: '65ch',
        prose: '70ch',
      },
boxShadow: {
        /* Warm-tinted shadows — kept almost imperceptible at rest. The page
           already sits a step below the cards, so lift is a whisper, not a
           glow. Hover is where depth is allowed to show. */
        card: '0 1px 2px rgba(38,32,22,0.045)',
        lift: '0 4px 10px -4px rgba(38,32,22,0.10), 0 16px 32px -16px rgba(38,32,22,0.18)',
        elevated: '0 8px 20px -8px rgba(38,32,22,0.12), 0 28px 56px -28px rgba(38,32,22,0.26)',
        frame: '0 0 0 1px rgba(38,32,22,0.07), 0 28px 60px -32px rgba(38,32,22,0.30)',
        'card-d': '0 1px 2px rgba(0,0,0,0.35)',
        'lift-d': '0 20px 44px -24px rgba(0,0,0,0.7), 0 6px 16px -8px rgba(0,0,0,0.5)',
        'elevated-d': '0 36px 70px -34px rgba(0,0,0,0.8), 0 10px 24px -14px rgba(0,0,0,0.55)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        swift: 'cubic-bezier(0.4, 0, 0.2, 1)',
        entrance: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
      },
      transitionDuration: {
        250: '250ms',
        600: '600ms',
        900: '900ms',
      },
      keyframes: {
        'cue-travel': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.82)' },
        },
      },
      animation: {
        'cue-travel': 'cue-travel 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-dot': 'pulse-dot 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}