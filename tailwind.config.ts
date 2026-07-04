import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#07080A',
        surface: '#0D0F13',
        panel: '#11141A',
        line: '#1E232C',
        cyan: {
          DEFAULT: '#00F0FF',
          dim: '#0891A8',
        },
        magenta: {
          DEFAULT: '#FF2E8C',
          dim: '#A31D5C',
        },
        violet: {
          DEFAULT: '#7B2FFF',
          dim: '#4B1D99',
        },
        ink: '#E6EAF0',
        muted: '#8B94A3',
        faint: '#4B5563',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%': { clipPath: 'inset(20% 0 50% 0)' },
          '20%': { clipPath: 'inset(30% 0 40% 0)' },
          '40%': { clipPath: 'inset(10% 0 60% 0)' },
          '60%': { clipPath: 'inset(45% 0 15% 0)' },
          '80%': { clipPath: 'inset(15% 0 55% 0)' },
          '100%': { clipPath: 'inset(30% 0 40% 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        scanline: 'scanline 6s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 5s ease-in-out infinite',
        'glitch-after': 'glitch 3s infinite linear alternate-reverse',
        'glitch-before': 'glitch 2s infinite linear alternate-reverse',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
