const config = {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    // bundle size
    maxAssetSize: 512000,
  },
};

module.exports = config;
