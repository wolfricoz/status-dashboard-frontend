module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins:
    [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
}
