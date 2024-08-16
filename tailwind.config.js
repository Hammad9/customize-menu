/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6c5ce7',
          DEFAULT: '#5f27cd',
          dark: '#341f97',
        },
        background: {
          light: '#f8f9fa',
          DEFAULT: '#ffffff',
          dark: '#2d3436',
        },
        title: {
          light: '#2d3436',
          DEFAULT: '#2c3e50',
          dark: '#1e272e',
        },
        description: {
          light: '#636e72',
          DEFAULT: '#7f8c8d',
          dark: '#b2bec3',
        },
      },
    },
  },
  plugins: [],
}