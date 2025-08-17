module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.medium.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "t0.gstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
    deviceSizes: [320, 340, 660, 800],
  },
  async rewrites() {
    return [
      {
        source: "/privacy",
        destination: "/privacy.html",
      },
      {
        source: "/legal-ai-privacy-policy",
        destination: "/legal-ai-privacy-policy.html",
      },
      {
        source: "/terms-of-service",
        destination: "/terms-of-service.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "nfl-live-hub",
        destination: "https://nfllivehub.com/",
        permanent: true,
      },
    ];
  },
};
