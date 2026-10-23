/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006B46',
          dark: '#00452F',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F7F9F7',
        },
        surface: {
          light: '#EAF5EF',
        },
        border: '#E2E8E4',
        text: {
          primary: '#17211D',
          secondary: '#65736B',
        },
        success: '#16834A',
        error: '#C62828',
        warning: '#C78317',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        hover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
