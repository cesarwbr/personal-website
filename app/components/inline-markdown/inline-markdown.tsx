import { Fragment, ReactNode } from "react";

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

type Props = {
  /** Markdown text limited to inline links — the only syntax the copy uses. */
  text: string;
  linkClassName?: string;
};

/**
 * Renders the small subset of markdown used by copy that is shared between a
 * page and its .md representation (see content/about.ts). Keeping the source
 * in markdown means /about and /about.md cannot drift apart.
 */
export default function InlineMarkdown({ text, linkClassName }: Props) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of Array.from(text.matchAll(INLINE_LINK))) {
    const [full, label, href] = match;
    const start = match.index ?? 0;

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <a
        key={`${href}-${start}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {label}
      </a>,
    );

    cursor = start + full.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return (
    <>
      {nodes.map((node, index) => (
        <Fragment key={index}>{node}</Fragment>
      ))}
    </>
  );
}
