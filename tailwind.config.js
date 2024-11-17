/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202223', // Dark grey (default background)
        overlayLight: '#00000080', // Black with 50% opacity
        white: '#FFFFFF', // Pure white
        overlayMedium: '#000000CC', // Black with 80% opacity
        overlayDark: '#000000E5', // Black with 90% opacity
        danger: '#FF404A', // Red (error or alert)
        overlaySubtle: '#0000001A', // Black with 10% opacity
        success: '#008060', // Green (success)
        overlaySemiLight: '#00000066', // Black with 40% opacity
        overlaySemiDark: '#00000033', // Black with 20% opacity
        overlayTransparent: '#00000012', // Black with ~7% opacity
        primaryAccent: '#006EFF', // Blue (primary accent)
        lightGrey: '#F6F6F8', // Very light grey
        mediumGrey: '#7E8185', // Medium grey (inactive or secondary)
        border: '#D1D1D1', // Light grey (borders)
        gradientDanger: 'linear-gradient(90deg, #FF1500 0%, #FF404A 100%)', // Gradient for error/alert
        warning: '#FFE888', // Yellow (warning or highlight)
        black: '#000000', // Pure black
        overlayDim: '#00000099', // Black with ~60% opacity
        textSecondary: '#6D7175', // Dark grey (secondary text)
      },
      boxShadow: {
        input: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}