/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF',
          100: '#FAF7F2', // Main background
          200: '#F4EFE6', // Elevated surface
          300: '#EAE2D5', // Subtle border
          400: '#DCD1C0',
        },
        coffee: {
          950: '#140E0C',
          900: '#1E1613', // High contrast primary text & headings
          850: '#251C18',
          800: '#2F231E',
          700: '#42332C',
          600: '#5C483F', // Secondary body copy (clear, sharp contrast)
          500: '#7A6256',
          400: '#9C8578',
        },
        caramel: {
          100: '#F5EBE0',
          200: '#EBD7C4',
          500: '#B87333', // Specialty coffee roast highlight
          600: '#9C5B28', // Accent links & active tags
          700: '#7E461B',
        },
      },
      fontFamily: {
        // STRICT SANS-SERIF ONLY
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
