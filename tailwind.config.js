/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'flip-rotate': {
          '0%, 100%': { transform: 'rotateY(0deg) scale(1)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' },
          '50%': { transform: 'rotateY(180deg) scale(1.05)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' },
        }
      },
      animation: {
        'flip-rotate': 'flip-rotate 0.6s ease-in-out',
      }
    },
  },
  plugins: [],
}