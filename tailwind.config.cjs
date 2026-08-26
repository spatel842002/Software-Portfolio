module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}", "./content/**/*.{mdx,md}", "./public/**/*.{html,svg}"] ,
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#e6fffa',
          100: '#bff7ef',
          200: '#8feedd',
          500: '#08b6a8'
        }
      }
    }
  },
  plugins: []
};
