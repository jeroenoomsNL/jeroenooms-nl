module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 720, 1080],
    imagesSizes: [100, 250, 400, 600, 800],
    minimumCacheTTL: 365 * 24 * 60 * 60,
  },
};
