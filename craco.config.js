const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Constants': path.resolve(__dirname, 'src/constants'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
    }
  },
};