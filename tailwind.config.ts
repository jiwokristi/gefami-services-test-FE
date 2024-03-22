import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // ----- WHITESPACE SYSTEM -----
    spacing: {
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem',
      48: '4.8rem',
      64: '6.4rem',
      80: '8rem',
      96: '9.6rem',
      128: '12.8rem',
    },

    // ----- TYPOGRAPHY SYSTEM -----
    fontSize: {
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      30: '3rem',
      36: '3.6rem',
      44: '4.4rem',
      52: '5.2rem',
      62: '6.2rem',
      74: '7.4rem',
      86: '8.6rem',
      98: '9.8rem',
    },
    lineHeight: {
      DEFAULT: '1',
      medium: '1.2',
      paragraph: '1.5',
    },
    letterSpacing: {
      0.25: '0.025rem',
      1.25: '0.125rem',
      1.5: '0.15rem',
    },
    screens: {
      'bigger-desktops': { max: '105em' },
      'smaller-desktops': { max: '85em' },
      'landscape-tablets': { max: '75em' },
      tablets: { max: '59em' },
      'smaller-tablets': { max: '44em' },
      phones: { max: '34em' },
    },
    extend: {
      // ----- COLOR SYSTEM -----
      colors: {
        primary: {
          DEFAULT: '#1f4247',
          tint: {
            100: '#355559',
            200: '#4c686c',
          },
          shade: {
            100: '#1c3b40',
            200: '#193539',
            300: '#162e32',
          },
        },
        'initial-state': {
          DEFAULT: '#09141A',
          light: '#162329',
          medium: '#0E191F',
        },
        gray: {
          DEFAULT: '#D9D9D9',
        },
      },

      // ----- SHADOW SYSTEM -----
      boxShadow: {
        'active-primary': '0 0 0 0.3rem rgba(76, 104, 108, 0.75)',
      },
      boxShadowColor: {
        glow: 'rgb(98,205,203)',
      },

      backgroundImage: {
        '247-gradient': 'url("assets/gradient-bg.svg")',
      },
    },
  },
  plugins: [],
};

export default config;
