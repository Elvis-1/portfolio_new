import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D1F2E',
        accent: '#3B82F6',
        surface: '#F8FAFC',
        card: '#FFFFFF',
        border: '#E2E8F0',
        muted: '#64748B',
      },
    },
  },
  plugins: [],
};

export default config;
