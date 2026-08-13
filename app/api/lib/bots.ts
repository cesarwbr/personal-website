/**
 * AI crawlers and search bots worth counting.
 *
 * Ordered most-specific-first so that, e.g., "OAI-SearchBot" is not reported
 * as "GPTBot". Matching is case-insensitive against the User-Agent header.
 */
const BOT_PATTERNS: { name: string; match: string }[] = [
  // AI crawlers — the ones this instrumentation exists for.
  { name: "ClaudeBot", match: "claudebot" },
  { name: "Claude-User", match: "claude-user" },
  { name: "Claude-SearchBot", match: "claude-searchbot" },
  { name: "OAI-SearchBot", match: "oai-searchbot" },
  { name: "ChatGPT-User", match: "chatgpt-user" },
  { name: "GPTBot", match: "gptbot" },
  { name: "PerplexityBot", match: "perplexitybot" },
  { name: "Perplexity-User", match: "perplexity-user" },
  { name: "Google-Extended", match: "google-extended" },
  { name: "Applebot-Extended", match: "applebot-extended" },
  { name: "Bytespider", match: "bytespider" },
  { name: "CCBot", match: "ccbot" },
  { name: "Meta-ExternalAgent", match: "meta-externalagent" },
  { name: "Amazonbot", match: "amazonbot" },
  { name: "cohere-ai", match: "cohere-ai" },
  { name: "DuckAssistBot", match: "duckassistbot" },
  { name: "MistralAI-User", match: "mistralai-user" },
  { name: "Diffbot", match: "diffbot" },
  { name: "Timpibot", match: "timpibot" },
  { name: "YouBot", match: "youbot" },
  // Classic search crawlers, kept for comparison against the AI traffic.
  { name: "Googlebot", match: "googlebot" },
  { name: "Bingbot", match: "bingbot" },
  { name: "Applebot", match: "applebot" },
  { name: "DuckDuckBot", match: "duckduckbot" },
  { name: "YandexBot", match: "yandexbot" },
  { name: "Baiduspider", match: "baiduspider" },
];

/** AI-focused crawlers, as opposed to traditional search indexing. */
const AI_BOTS = new Set([
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
  "Diffbot",
  "Timpibot",
  "YouBot",
]);

export type BotMatch = {
  name: string;
  isAi: boolean;
};

/**
 * Identifies the crawler behind a User-Agent, or null for everything else.
 *
 * Returning null for human traffic is deliberate: only bot requests are ever
 * recorded, which keeps this out of personal-data territory entirely.
 */
export function identifyBot(userAgent: string | null): BotMatch | null {
  if (!userAgent) return null;

  const haystack = userAgent.toLowerCase();
  const hit = BOT_PATTERNS.find((pattern) => haystack.includes(pattern.match));

  if (!hit) return null;

  return { name: hit.name, isAi: AI_BOTS.has(hit.name) };
}
