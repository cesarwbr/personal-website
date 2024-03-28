module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.medium.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 't0.gstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
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
