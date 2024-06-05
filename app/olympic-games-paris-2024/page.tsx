import styles from "../../styles/olympic-games-paris-2024.module.css";
import Footer from "../components/footer/footer";
import { Metadata } from "next";
import Script from "next/script";
import { jsonld } from "./jsonld";
import Hero from "./hero";
import MainFeatures from "./main-features";
import Features from "./features";

const title =
  "Olympic Games Paris 2024 Chrome Extension: Real-time Medals, Videos, Highlights, and Fan Chat";
const description =
  "Experience the ultimate Olympics Paris 2024 Chrome Extension. Get real-time scores, detailed stats, game recaps, updated standings, and engage in live fan chats. All your Olympics Paris 2024 needs in one Chrome Extension.";
const image =
  "https://cesarwilliam.com/olympic-games-paris-2024/highlights-screenshot.png";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Olympic Games Paris 2024 Chrome Extension",
  creator: "Cesar Alvarenga",
  publisher: "Cesar Alvarenga",
  keywords: [
    "Schedule",
    "Videos",
    "Live blog",
    "Medals",
    "Fan Chat",
    "Olympic Games",
    "Paris 2024",
    "Olympic Games Paris 2024",
  ],
  icons: "/favicon.ico",
  openGraph: {
    images: image,
    type: "website",
    url: "https://cesarwilliam.com/olympic-games-paris-2024",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@cesarwbr",
    images: [image],
    siteId: "@cesarwbr",
    creatorId: "@cesarwbr",
  },
  verification: {
    google: "mcFqnSQfhKdWTQcZXzvRaGngL-vBw4w9HBAphsVeBPo",
  },
  appleWebApp: {
    title,
    statusBarStyle: "black-translucent",
    startupImage: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://cesarwilliam.com/olympic-games-paris-2024",
  },
};

export default async function NflLiveHub() {
  return (
    <div className={styles.container}>
      <Script
        id="nflLiveHubJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonld }}
      />
      <Hero />
      <MainFeatures />
      <Features />
      <div className={styles["footer--container"]}>
        <Footer />
      </div>
    </div>
  );
}
