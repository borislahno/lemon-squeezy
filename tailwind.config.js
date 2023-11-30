/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'showNote': {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        'hideNote': {
          '0%': {opacity: 1},
          '100%': {opacity: 0},
        },
      },
      animation: {
        'loader-animate': 'spin 0.6s linear infinite',
        'show-note': 'showNote 0.6s linear forwards',
        'hide-note': 'hideNote 0.6s linear forwards',
      },
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        white: {
          DEFAULT: "#FFFFFF",
        },
        black: {
          DEFAULT: "#000000",
          50: "#212B36",
          150: '#333333',
          200: "#0a0a0b0f",
          250: "#0a0a2e29",
          300: "#25252d",
          500: '#121217',
        },
        purple: {
          DEFAULT: "#5423e7",
          400: "#7047eb",
        },
        grey: {
          DEFAULT: "#9ca3af",
          50: "#f7f7f8",
          100: "#e8e8ed",
          300: "#8a89a3",
          400: "#898fa9",
          500: "#6C6C89"
        },
        pink: {
          DEFAULT: "#F53D6B"
        },
        orange: {
          DEFAULT: "#ff5620",
        }
      },
      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
      },
      borderRadius: {
        none: "0",
        xs: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "1rem",
        full: "50%",
      },
      fontSize: {
        xs: ["0.75rem", "1.125rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.625rem"],
        xlg: ["1.375rem", "2rem"],
        "2xlg": ["1.5rem", "2rem"],
        xl: ["1.75rem", "2.625rem"],
        "2xl": ["2rem", "3rem"],
        "3xl": ["2.25rem", "3.375rem"],
      },
    },
  },
  plugins: [],
}

