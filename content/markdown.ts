import { getAllArticles } from "../app/api/lib/articles";
import { getAllProjects } from "../app/api/lib/projects";
import { faqJson } from "../app/olympic-games-paris-2024/jsonld";
import {
  connectLinks,
  education,
  experience,
  heroBio,
  skills,
  story,
  storyTitle,
} from "./about";
import { greeting, headline, profileTags } from "./home";
import { featureList } from "./olympic";
import { SITE_URL, absoluteUrl, pages } from "./pages";
import { FEATURED_PROJECTS } from "./projects";
import type { MarkdownRoute } from "./markdown-routes";
import { intro, sections as usesSections } from "./uses";

/**
 * Markdown representations of the site's pages, rendered from the same content
 * modules the pages themselves render from, so the two cannot drift.
 *
 * The route list lives in ./markdown-routes because middleware needs it on the
 * edge runtime and must not pull the database driver in with it.
 */
export type { MarkdownRoute } from "./markdown-routes";
export {
  MARKDOWN_ROUTES,
  hasMarkdown,
  markdownPathFor,
} from "./markdown-routes";

function frontMatter(title: string, description: string, canonical: string) {
  return [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `canonical: ${canonical}`,
    "---",
    "",
  ].join("\n");
}

function pageMeta(path: string) {
  const page = pages.find((entry) => entry.path === path);

  return {
    title: page?.title ?? "Cesar William Alvarenga",
    description: page?.description ?? "",
    canonical: absoluteUrl(path),
  };
}

function homeMarkdown(
  projects: Awaited<ReturnType<typeof getAllProjects>>,
  articles: Awaited<ReturnType<typeof getAllArticles>>,
) {
  const meta = pageMeta("/");

  const featured = FEATURED_PROJECTS.map((project) => {
    const url = project.url.startsWith("/")
      ? `${SITE_URL}${project.url}`
      : project.url;

    return [
      `### [${project.name}](${url})`,
      "",
      project.description,
      "",
      `Tags: ${project.tags.join(", ")}`,
    ].join("\n");
  });

  const repositories = projects.map((project) => {
    // App-type projects are stored with site-relative URLs; markdown gets read
    // outside any page context, so every link has to resolve on its own.
    const url = project.url.startsWith("/")
      ? `${SITE_URL}${project.url}`
      : project.url;
    const stats =
      project.type === "repository"
        ? ` — ${project.primaryLanguage?.name ?? "unknown"}, ${
            project.stargazerCount ?? 0
          } stars, ${project.forkCount ?? 0} forks`
        : "";

    return `- [${project.name}](${url})${stats}: ${project.description}`;
  });

  const posts = articles.map(
    (article) => `- [${article.title}](${article.link}) — ${article.pubDate}`,
  );

  return [
    frontMatter(meta.title, meta.description, meta.canonical),
    "# Cesar William Alvarenga",
    "",
    `${greeting}. ${headline}`,
    "",
    `Working with: ${profileTags.join(", ")}.`,
    "",
    "## Featured projects",
    "",
    featured.join("\n\n"),
    "",
    "## Projects",
    "",
    repositories.join("\n"),
    "",
    "## Recent posts",
    "",
    posts.join("\n"),
    "",
    "## More",
    "",
    `- [About](${SITE_URL}/about)`,
    `- [Uses](${SITE_URL}/uses)`,
    `- [URL index for LLMs](${SITE_URL}/llms.txt)`,
    "",
  ].join("\n");
}

function aboutMarkdown() {
  const meta = pageMeta("/about");

  const jobs = experience.map((job) => {
    const company = job.companyUrl
      ? `[${job.company}](${job.companyUrl})`
      : job.company;

    return [
      `### ${job.role} — ${company}${job.current ? " (current)" : ""}`,
      "",
      `${job.period} · ${job.location}`,
      "",
      job.description,
    ].join("\n");
  });

  const skillGroups = skills.map(
    (group) => `- **${group.category}**: ${group.items.join(", ")}`,
  );

  return [
    frontMatter(meta.title, meta.description, meta.canonical),
    "# About Cesar Alvarenga",
    "",
    heroBio,
    "",
    `## ${storyTitle}`,
    "",
    story.join("\n\n"),
    "",
    "## Career timeline",
    "",
    jobs.join("\n\n"),
    "",
    "## Skills",
    "",
    skillGroups.join("\n"),
    "",
    "## Education",
    "",
    `**${education.degree}** — ${education.school}, ${education.location}`,
    "",
    education.note,
    "",
    "## Find me online",
    "",
    connectLinks.map((link) => `- [${link.label}](${link.url})`).join("\n"),
    "",
  ].join("\n");
}

function usesMarkdown() {
  const meta = pageMeta("/uses");

  const body = usesSections.map((section) => {
    const items = section.items.map((item) => {
      const badge = item.badge ? ` _(${item.badge})_` : "";

      return `- **${item.name}**${badge}: ${item.description}`;
    });

    return [`## ${section.title}`, "", items.join("\n")].join("\n");
  });

  return [
    frontMatter(meta.title, meta.description, meta.canonical),
    "# Tools & tech stack",
    "",
    intro,
    "",
    body.join("\n\n"),
    "",
  ].join("\n");
}

function olympicMarkdown() {
  const meta = pageMeta("/olympic-games-paris-2024");

  const features = featureList.map(
    (feature) => `- **${feature.title}**: ${feature.description}`,
  );

  // Rendered from the same object as the page's FAQ JSON-LD.
  const faq = faqJson.mainEntity.map((entry) =>
    [`### ${entry.name}`, "", entry.acceptedAnswer.text].join("\n"),
  );

  return [
    frontMatter(meta.title, meta.description, meta.canonical),
    "# Olympic Games Paris 2024 Chrome Extension",
    "",
    meta.description,
    "",
    "## Features",
    "",
    features.join("\n"),
    "",
    "## FAQ",
    "",
    faq.join("\n\n"),
    "",
  ].join("\n");
}

export async function renderMarkdown(path: MarkdownRoute): Promise<string> {
  switch (path) {
    case "/": {
      const [projects, articles] = await Promise.all([
        getAllProjects(),
        getAllArticles(),
      ]);

      return homeMarkdown(projects, articles);
    }
    case "/about":
      return aboutMarkdown();
    case "/uses":
      return usesMarkdown();
    case "/olympic-games-paris-2024":
      return olympicMarkdown();
  }
}
