module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "i.scdn.co",
      "miro.medium.com",
      "t0.gstatic.com",
      "avatars.githubusercontent.com",
    ],
    deviceSizes: [320, 340, 660, 800],
  },
  async rewrites() {
    return [
      {
        source: '/privacy',
        destination: '/privacy.html',
      },
    ]
  },
};
