import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EAF2FF',
        accent: '#4F7DFF',
        surface: '#09111F',
        card: '#112740',
        border: '#2C4B7D',
        muted: '#A0B4D3',
      },
    },
  },
  plugins: [],
};

export default config;
