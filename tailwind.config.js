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
      'purple': {
        100: '#9d5bc7',
        200: '#7e25b7',
      },
      // TODO figure out if this is the only color used but with different opacities
      'brand-purple': '#7e25b7',
    },
    fontFamily: {
      sans: ['Graphik', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
