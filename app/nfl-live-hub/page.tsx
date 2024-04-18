import Image from "next/image";
import styles from "../../styles/nfl-live-hub.module.css";
import Header from "../components/header/header";
import { Features } from "./features";
import InstallButton from "./install-button";
import Footer from "../components/footer/footer";
import { Metadata } from "next";
import Script from "next/script";
import { jsonld } from "./jsonld";

const title = "NFL Live Hub";
const description =
  "Real-time NFL scores, stats, game recaps, standings, and fan chat in one extension.";
const image = "/nfl-logo.png";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "NFL Live Hub",
  creator: "Cesar Alvarenga",
  publisher: "Cesar Alvarenga",
  keywords: ["NFL Live Hub", "NFL", "Chrome", "Chrome Extension"],
  icons: "/favicon.ico",
  openGraph: {
    images: image,
    type: "website",
    url: "https://www.cesarwilliam.com/nfl-live-hub",
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
    canonical: "https://cesarwilliam.com/nfl-live-hub",
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
      <Header
        right={
          <InstallButton
            showDescription={false}
            label="Install"
            style={{ padding: "6px 18px", fontWeight: 400, fontSize: "14px" }}
          />
        }
      />
      <div className={styles.logo + " " + styles.animate + " " + styles.pop}>
        <Image src="/nfl-logo.png" alt="NFL Logo" width={50} height={50} />
        <Image
          src="https://storage.googleapis.com/brandflow-bucket/brandbird/home/chrome-logo.svg"
          alt="Chrome Logo"
          width={40} // Specify the width of the image
          height={40} // Specify the height of the image
        />
      </div>
      <h1
        className={
          styles.title +
          " " +
          styles["animate"] +
          " " +
          styles["pop"] +
          " " +
          styles["delay-1"]
        }
      >
        NFL Live Hub Extension
      </h1>
      <p
        className={
          styles.subtitle +
          " " +
          styles["animate"] +
          " " +
          styles["pop"] +
          " " +
          styles["delay-1"]
        }
      >
        Real-time NFL scores, stats, game recaps, standings, and fan chat in one
        extension.
      </p>
      <section
        className={
          styles.hero +
          " " +
          styles["animate"] +
          " " +
          styles["pop"] +
          " " +
          styles["delay-3"]
        }
      >
        <div className={styles.features}>
          <div className={styles.feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220"
              height="220"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M77.83,194.83c-3.07-0.05-9.74,0.39-14.1,4.72c-4.28,4.25-5.12,11.04-5.27,14.33c-3.07,3.13-5.7,6.52-8.1,10.29  c-8.05,12.64-11.57,29.88-8.77,44.63c1.52,7.99,4.68,15.63,9.13,22.44c7.21,11.04,16.24,19.02,27.09,26.35  c1.38,0.92,3.25,0.55,4.17-0.83c0.92-1.37,0.55-3.25-0.83-4.16c-7.8-5.03-14.98-11.14-20.82-18.31c2.89-1.3,6.28-3.48,8.24-6.95  c3.88-6.89,0.62-16.27,0.62-16.27s-9.55,1.79-13.44,8.68c-0.97,1.73-1.49,3.61-1.73,5.47c-1.73-2.96-3.23-6.06-4.47-9.3  c-0.09-0.23-0.19-0.47-0.28-0.71c3.11-0.35,6.95-1.41,9.82-4.21c5.67-5.56,5.37-15.9,5.37-15.9s-9.52-1.33-15.19,4.23  c-1.17,1.15-2.08,2.49-2.8,3.91c-0.32-2.8-0.43-5.64-0.32-8.48c3.34,0.39,9.43,0.52,13.96-2.7c6.57-4.66,7.36-14.55,7.36-14.55  s-9.85-2.35-16.41,2.29c-1.38,0.98-2.51,2.19-3.42,3.49c0.9-3.99,2.2-7.9,3.84-11.64c1.92,0.88,8.91,3.7,14.93,1.34  c7.05-2.76,10.08-11.6,10.08-11.6s-8.39-4.35-15.44-1.59c-2.08,0.82-3.81,2.16-5.21,3.64c1.28-2.03,2.68-3.99,4.19-5.84  c0.47-0.58,0.97-1.16,1.48-1.74c3.4-0.12,8.92-0.95,12.69-4.7c5.81-5.76,5.28-16.24,5.28-16.24S78.85,194.84,77.83,194.83z  M434.53,194.83c-1.02,0.02-1.64,0.09-1.64,0.09s-0.53,10.48,5.28,16.24c3.78,3.75,9.31,4.58,12.71,4.7  c5.07,5.74,8.97,12.65,11.58,19.71c0.97,2.62,1.6,5.2,2.27,7.89c0.57,2.28,0.94,4.74,1.16,7.22l0.31,7.25l-0.29,4.37  c-2.28,21.71-16.63,38.51-34.71,50.31c-1.37,0.92-1.74,2.79-0.82,4.16c0.92,1.38,2.79,1.74,4.16,0.82  c7.25-4.97,14.14-10.43,19.95-16.94c1.91,1.58,8,6.07,14.54,5.36c7.91-0.85,13.49-9,13.49-9s-7.24-6.75-15.15-5.88  c-3.07,0.33-5.79,1.76-7.96,3.38c0.54-0.75,1.06-1.52,1.57-2.31c1.26-1.95,2.45-3.93,3.55-5.97c1.26,0.52,9.59,3.74,16.12,0.11  c7.08-3.94,9.35-14.45,9.35-14.45s-9.2-4.12-16.28-0.18c-1.98,1.1-3.57,2.72-4.86,4.46c0.13-0.38,0.24-0.76,0.36-1.15  c0.78-2.66,1.37-5.34,1.78-8.03c1.08-0.01,10.17-0.24,15.07-5.71c5.23-5.81,3.74-15.34,3.74-15.34s-9.96-0.1-15.18,5.71  c-1.45,1.61-2.38,3.5-2.97,5.39c-0.05-2.96-0.3-5.91-0.77-8.83c1.59-0.62,10.01-4.19,12.38-10.79c2.62-7.3-2.7-15.54-2.7-15.54  s-9.56,3.58-12.17,10.88c-0.38,1.07-0.61,2.16-0.71,3.25c-0.82-2.22-1.75-4.4-2.81-6.54c1.51-1.81,7.85-9.91,6.98-16.88  c-0.99-7.89-9.21-13.32-9.21-13.32s-6.6,7.36-5.61,15.26c0.17,1.36,0.5,2.69,0.93,3.98c-1.28-1.59-2.64-3.11-4.08-4.57  c-0.14-3.26-0.96-10.12-5.27-14.39C444.27,195.23,437.6,194.78,434.53,194.83z M49.72,199.27c0,0-8.22,5.44-9.22,13.33  c-0.65,5.15,2.65,10.92,5.03,14.31c2.63-4.98,5.94-9.88,9.9-14.14C55.37,205.57,49.72,199.27,49.72,199.27z M445,218.91  c-4.93,0.3-9.11,2.47-9.11,2.47s3.03,8.84,10.08,11.6c4.36,1.71,9.23,0.7,12.31-0.32c-0.08-0.18-0.16-0.35-0.24-0.53  c-2.05-4.4-4.78-8.86-7.98-12.76C448.37,218.92,446.64,218.81,445,218.91z M31.79,221.88c0,0-5.31,8.24-2.7,15.54  c1.7,4.76,6.57,7.95,9.74,9.58c0.92-5.33,2.38-10.58,4.54-15.6C40.16,225.02,31.79,221.88,31.79,221.88z M450.41,236.92  c-3.16,0.04-5.5,0.59-5.5,0.59s0.79,9.89,7.36,14.55c3.43,2.44,7.77,2.95,11.12,2.89c-0.09-2.63-0.35-5.32-0.79-7.87  c-0.44-2.57-1.02-5.12-1.77-7.61C457.55,237.37,453.57,236.88,450.41,236.92z M22.56,245.94c0,0-1.49,9.53,3.73,15.34  c3.38,3.77,8.75,5.05,12.11,5.49c-0.04-0.27-0.07-0.54-0.09-0.82c-0.52-4.57-0.61-9.2-0.17-13.82c-0.13-0.16-0.28-0.33-0.41-0.48  C32.51,245.83,22.56,245.94,22.56,245.94z M451.23,254.97c-1.97-0.06-3.31,0.13-3.31,0.13s-0.31,10.34,5.37,15.9  c2.04,2,4.57,3.1,6.98,3.71c1.77-4.77,2.85-9.81,3.1-15.11c-0.08-0.09-0.17-0.17-0.25-0.26  C459.56,255.85,454.52,255.07,451.23,254.97z M30.38,270.02c-4.42,0.24-8.02,1.85-8.02,1.85s2.27,10.51,9.35,14.45  c4.56,2.54,10.01,1.73,13.3,0.83c-2.5-4.72-4.44-9.73-5.65-15.01c-0.23-0.16-0.48-0.3-0.72-0.45  C35.99,270.22,33.03,269.87,30.38,270.02z M443.19,271.06c0,0-3.26,9.38,0.62,16.27c1.37,2.45,3.46,4.24,5.58,5.56  c3.08-3.63,5.77-7.53,7.95-11.66c-0.2-0.51-0.44-1-0.71-1.49C452.74,272.85,443.19,271.06,443.19,271.06z M43.52,291.03  c-7.32,0.03-13.68,5.96-13.68,5.96s5.58,8.14,13.49,9c4.83,0.53,9.42-1.79,12.26-3.67c-2.92-3.33-5.62-6.88-7.98-10.66  c-0.84-0.26-1.71-0.45-2.62-0.55C44.5,291.06,44.01,291.03,43.52,291.03z"></path>
            </svg>
            <div className={styles["feature-text"]}>
              <div>Featured on</div>
              <div>Chrome Web Store</div>
            </div>
          </div>
          <div className={styles.feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220"
              height="220"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M77.83,194.83c-3.07-0.05-9.74,0.39-14.1,4.72c-4.28,4.25-5.12,11.04-5.27,14.33c-3.07,3.13-5.7,6.52-8.1,10.29  c-8.05,12.64-11.57,29.88-8.77,44.63c1.52,7.99,4.68,15.63,9.13,22.44c7.21,11.04,16.24,19.02,27.09,26.35  c1.38,0.92,3.25,0.55,4.17-0.83c0.92-1.37,0.55-3.25-0.83-4.16c-7.8-5.03-14.98-11.14-20.82-18.31c2.89-1.3,6.28-3.48,8.24-6.95  c3.88-6.89,0.62-16.27,0.62-16.27s-9.55,1.79-13.44,8.68c-0.97,1.73-1.49,3.61-1.73,5.47c-1.73-2.96-3.23-6.06-4.47-9.3  c-0.09-0.23-0.19-0.47-0.28-0.71c3.11-0.35,6.95-1.41,9.82-4.21c5.67-5.56,5.37-15.9,5.37-15.9s-9.52-1.33-15.19,4.23  c-1.17,1.15-2.08,2.49-2.8,3.91c-0.32-2.8-0.43-5.64-0.32-8.48c3.34,0.39,9.43,0.52,13.96-2.7c6.57-4.66,7.36-14.55,7.36-14.55  s-9.85-2.35-16.41,2.29c-1.38,0.98-2.51,2.19-3.42,3.49c0.9-3.99,2.2-7.9,3.84-11.64c1.92,0.88,8.91,3.7,14.93,1.34  c7.05-2.76,10.08-11.6,10.08-11.6s-8.39-4.35-15.44-1.59c-2.08,0.82-3.81,2.16-5.21,3.64c1.28-2.03,2.68-3.99,4.19-5.84  c0.47-0.58,0.97-1.16,1.48-1.74c3.4-0.12,8.92-0.95,12.69-4.7c5.81-5.76,5.28-16.24,5.28-16.24S78.85,194.84,77.83,194.83z  M434.53,194.83c-1.02,0.02-1.64,0.09-1.64,0.09s-0.53,10.48,5.28,16.24c3.78,3.75,9.31,4.58,12.71,4.7  c5.07,5.74,8.97,12.65,11.58,19.71c0.97,2.62,1.6,5.2,2.27,7.89c0.57,2.28,0.94,4.74,1.16,7.22l0.31,7.25l-0.29,4.37  c-2.28,21.71-16.63,38.51-34.71,50.31c-1.37,0.92-1.74,2.79-0.82,4.16c0.92,1.38,2.79,1.74,4.16,0.82  c7.25-4.97,14.14-10.43,19.95-16.94c1.91,1.58,8,6.07,14.54,5.36c7.91-0.85,13.49-9,13.49-9s-7.24-6.75-15.15-5.88  c-3.07,0.33-5.79,1.76-7.96,3.38c0.54-0.75,1.06-1.52,1.57-2.31c1.26-1.95,2.45-3.93,3.55-5.97c1.26,0.52,9.59,3.74,16.12,0.11  c7.08-3.94,9.35-14.45,9.35-14.45s-9.2-4.12-16.28-0.18c-1.98,1.1-3.57,2.72-4.86,4.46c0.13-0.38,0.24-0.76,0.36-1.15  c0.78-2.66,1.37-5.34,1.78-8.03c1.08-0.01,10.17-0.24,15.07-5.71c5.23-5.81,3.74-15.34,3.74-15.34s-9.96-0.1-15.18,5.71  c-1.45,1.61-2.38,3.5-2.97,5.39c-0.05-2.96-0.3-5.91-0.77-8.83c1.59-0.62,10.01-4.19,12.38-10.79c2.62-7.3-2.7-15.54-2.7-15.54  s-9.56,3.58-12.17,10.88c-0.38,1.07-0.61,2.16-0.71,3.25c-0.82-2.22-1.75-4.4-2.81-6.54c1.51-1.81,7.85-9.91,6.98-16.88  c-0.99-7.89-9.21-13.32-9.21-13.32s-6.6,7.36-5.61,15.26c0.17,1.36,0.5,2.69,0.93,3.98c-1.28-1.59-2.64-3.11-4.08-4.57  c-0.14-3.26-0.96-10.12-5.27-14.39C444.27,195.23,437.6,194.78,434.53,194.83z M49.72,199.27c0,0-8.22,5.44-9.22,13.33  c-0.65,5.15,2.65,10.92,5.03,14.31c2.63-4.98,5.94-9.88,9.9-14.14C55.37,205.57,49.72,199.27,49.72,199.27z M445,218.91  c-4.93,0.3-9.11,2.47-9.11,2.47s3.03,8.84,10.08,11.6c4.36,1.71,9.23,0.7,12.31-0.32c-0.08-0.18-0.16-0.35-0.24-0.53  c-2.05-4.4-4.78-8.86-7.98-12.76C448.37,218.92,446.64,218.81,445,218.91z M31.79,221.88c0,0-5.31,8.24-2.7,15.54  c1.7,4.76,6.57,7.95,9.74,9.58c0.92-5.33,2.38-10.58,4.54-15.6C40.16,225.02,31.79,221.88,31.79,221.88z M450.41,236.92  c-3.16,0.04-5.5,0.59-5.5,0.59s0.79,9.89,7.36,14.55c3.43,2.44,7.77,2.95,11.12,2.89c-0.09-2.63-0.35-5.32-0.79-7.87  c-0.44-2.57-1.02-5.12-1.77-7.61C457.55,237.37,453.57,236.88,450.41,236.92z M22.56,245.94c0,0-1.49,9.53,3.73,15.34  c3.38,3.77,8.75,5.05,12.11,5.49c-0.04-0.27-0.07-0.54-0.09-0.82c-0.52-4.57-0.61-9.2-0.17-13.82c-0.13-0.16-0.28-0.33-0.41-0.48  C32.51,245.83,22.56,245.94,22.56,245.94z M451.23,254.97c-1.97-0.06-3.31,0.13-3.31,0.13s-0.31,10.34,5.37,15.9  c2.04,2,4.57,3.1,6.98,3.71c1.77-4.77,2.85-9.81,3.1-15.11c-0.08-0.09-0.17-0.17-0.25-0.26  C459.56,255.85,454.52,255.07,451.23,254.97z M30.38,270.02c-4.42,0.24-8.02,1.85-8.02,1.85s2.27,10.51,9.35,14.45  c4.56,2.54,10.01,1.73,13.3,0.83c-2.5-4.72-4.44-9.73-5.65-15.01c-0.23-0.16-0.48-0.3-0.72-0.45  C35.99,270.22,33.03,269.87,30.38,270.02z M443.19,271.06c0,0-3.26,9.38,0.62,16.27c1.37,2.45,3.46,4.24,5.58,5.56  c3.08-3.63,5.77-7.53,7.95-11.66c-0.2-0.51-0.44-1-0.71-1.49C452.74,272.85,443.19,271.06,443.19,271.06z M43.52,291.03  c-7.32,0.03-13.68,5.96-13.68,5.96s5.58,8.14,13.49,9c4.83,0.53,9.42-1.79,12.26-3.67c-2.92-3.33-5.62-6.88-7.98-10.66  c-0.84-0.26-1.71-0.45-2.62-0.55C44.5,291.06,44.01,291.03,43.52,291.03z"></path>
            </svg>
            <div className={styles["feature-text"]}>
              <div>Developed by</div>
              <div>Established Publisher</div>
            </div>
          </div>
        </div>
        <section className={styles["install-button-container"]}>
          <InstallButton />
        </section>
      </section>
      <Features />
      <section
        className={styles["install-button-container"]}
        style={{ marginBottom: "120px", marginTop: "120px" }}
      >
        <InstallButton />
      </section>
      <Footer />
    </div>
  );
}
