// Multi-Zones: the World Cup 2026 marketing site is a separate Next.js app
// deployed with basePath '/worldcup'. We proxy the whole zone through this
// domain. Set WORLDCUP_ZONE_URL in the environment to that deployment's origin
// (its stable *.vercel.app alias) — no trailing slash, no /worldcup suffix.
const WORLDCUP_ZONE_URL =
  process.env.WORLDCUP_ZONE_URL ??
  "https://world-cup-monorepo-website.vercel.app";

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
      // World Cup 2026 zone — proxy the basePath root and everything under it.
      {
        source: "/worldcup",
        destination: `${WORLDCUP_ZONE_URL}/worldcup`,
      },
      {
        source: "/worldcup/:path*",
        destination: `${WORLDCUP_ZONE_URL}/worldcup/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/nfl-live-hub",
        destination: "https://nfllivehub.com/",
        permanent: true,
      },
      // World Cup 2026 zone pages live under /worldcup, but the zone app's
      // next-intl <Link> hrefs (e.g. "/live-scores", "/terms") leak into its
      // inline RSC payload as root-relative paths. Google harvests them from
      // the <script> payload and resolves them against the root domain, hitting
      // 404s. Consolidate those ghost URLs onto the real zone pages.
      {
        source: "/live-scores",
        destination: "/worldcup/live-scores",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/worldcup/terms",
        permanent: true,
      },
    ];
  },
};
