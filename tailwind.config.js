module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: 'spin 1s linear infinite',
      boxShadow: '0 1px 2px rgba(0,0,0,0.07),  0 2px 4px rgba(0,0,0,0.07),     0 4px 8px rgba(0,0,0,0.07),   0 8px 16px rgba(0,0,0,0.07),     0 16px 32px rgba(0,0,0,0.07),  0 32px 64px rgba(0,0,0,0.07)'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}
