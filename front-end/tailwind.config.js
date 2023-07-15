/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],  
  safelist: [
    {
      pattern: /(from|border)-./,
      variants: ['hover', 'focus']
    }
  ],
  theme: {
    colors: {
      neon: {
        blue: '#00FFFF',
        yellow: '#FFFF00',
        coral: '#FF7F50',
        purple: '#BF00FF',
        green: '#39FF14',
      },
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#1E1E1E',
        200: '#555555',
      },
      red: '#FF355E',
    },
    fontFamily: {
      title: ['EB Garamond', 'serif'],
      DEFAULT: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      s: ["12px", "16px"],
      base: ["16px", "24px"],
      m: ["24px", "32px"],
      l: ["32px", "48px"],
      xl: ["48px", "64px"],
      '2xl': ["64px", "80px"],
    },
    letterSpacing: {
      '1': '12px',
    },
    borderRadius: {
      DEFAULT: "0.5rem",
      sm: "0.25rem",
      full: "100rem",
    },
    extend: {},
  },
  plugins: [],
};