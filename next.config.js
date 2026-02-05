const path = require("path");

module.exports = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  images: {
    deviceSizes: [320, 420, 720, 1080],
    imageSizes: [100, 250, 400, 600, 800],
    minimumCacheTTL: 365 * 24 * 60 * 60,
    qualities: [100, 75],
  },
};
