import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/email-received"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
    ],
    // The World Cup zone is a separate app with its own localized sitemap;
    // without this line nothing on the domain advertises those URLs.
    sitemap: [
      "https://cesarwilliam.com/sitemap.xml",
      "https://cesarwilliam.com/worldcup/sitemap.xml",
    ],
    host: "https://cesarwilliam.com",
  };
}
