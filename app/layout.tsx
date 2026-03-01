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

export const metadata: Metadata = {
  icons: [
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
  ],
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
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
