module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        100: '#f5f5f5',
        200: '#cccccc',
        300: '#767676',
      },
      'brand-purple': '#7e25b7',
    },
    fontFamily: {
      sans: ['Graphik', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
