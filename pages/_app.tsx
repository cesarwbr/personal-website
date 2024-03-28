import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function PersonalWebsite({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default PersonalWebsite;
