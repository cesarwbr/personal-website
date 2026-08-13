import { MetadataRoute } from "next";
import { absoluteUrl, pages } from "../content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.lastModified ? new Date(page.lastModified) : new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
