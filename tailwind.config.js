module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Abril Fatface'],
      serif: ['Noto Serif KR'],
    },
    screens: {
      sm: { max: '768px' },
      lg: { min: '769px', max: '1024px' },
      xl: { min: '1025px' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '8px',
        xl: '16px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

