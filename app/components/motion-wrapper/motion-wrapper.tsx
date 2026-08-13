import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
};

/**
 * Scroll-reveal wrapper.
 *
 * The hidden starting state lives in CSS behind `html[data-js]` (set by the
 * reveal bootstrap in the root layout) instead of inline styles, so the server
 * HTML ships fully visible. Crawlers and extractors that parse HTML without
 * executing or painting JS see the content; browsers still get the animation.
 *
 * Keep this a server component — the reveal is driven by a single shared
 * IntersectionObserver in the layout, so no client bundle is needed here.
 */
export default function MotionWrapper({
  children,
  delay = 0,
  className,
  direction = "up",
}: Props) {
  return (
    <div
      data-reveal={direction}
      className={className}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
