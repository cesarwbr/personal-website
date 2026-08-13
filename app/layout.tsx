import { ReactNode } from "react";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Drives the scroll reveal for every [data-reveal] block (see globals.css).
 *
 * Runs as the first thing in <body>, so `data-js` lands on <html> before the
 * page below it is painted — no flash for real visitors, and nothing is ever
 * hidden on a client that does not run this script.
 *
 * This deliberately does not use IntersectionObserver: an observer only fires
 * for elements that are sampled while intersecting, so a jump scroll (End key,
 * anchor link, restored scroll position) skips right over blocks and leaves
 * them invisible for good. A rAF-throttled pass over the remaining elements
 * cannot miss anything, and unhooks itself once they are all revealed.
 */
const revealBootstrap = `
(function () {
  document.documentElement.setAttribute("data-js", "");

  function reveal(el) {
    el.setAttribute("data-revealed", "");
  }

  function start() {
    var pending = [].slice.call(document.querySelectorAll("[data-reveal]"));
    var queued = false;

    function stop() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      window.removeEventListener("pageshow", schedule);
    }

    function pass() {
      queued = false;
      var viewport = window.innerHeight;
      // Anything whose top edge has entered the viewport — or scrolled above
      // it — is revealed. Height never matters, so blocks taller than the
      // viewport behave the same as short ones.
      pending = pending.filter(function (el) {
        if (el.getBoundingClientRect().top >= viewport) return true;
        reveal(el);
        return false;
      });
      if (!pending.length) stop();
    }

    function schedule() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(pass);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    window.addEventListener("pageshow", schedule);
    pass();

    // A reload restores the previous scroll position without firing a scroll
    // event, and Chrome does it after 'load' — so events alone leave every
    // block above the restored position hidden. Re-check a handful of times
    // over the first couple of seconds instead; each pass is a few dozen
    // reads and they coalesce into one frame.
    [100, 300, 600, 1200, 2000].forEach(function (delay) {
      setTimeout(schedule, delay);
    });

    // Safety net for headless renderers that paint CSS but never scroll: after
    // 10s reveal whatever is left. A visitor who has not scrolled by then is
    // not looking at those blocks anyway, so nothing is lost visually.
    setTimeout(function () {
      pending.forEach(reveal);
      pending = [];
      stop();
    }, 10000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://cesarwilliam.com"),
  icons: [
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
  ],
  other: {
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      className={inter.className}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
