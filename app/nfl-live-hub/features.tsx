import Image from "next/image";
import styles from "../../styles/nfl-live-hub.module.css";

export function Features() {
  const features = [
    {
      title: "HIGHLIGHT VIDEOS",
      image: "/nfl-live-hub/games-screenshot.webp",
      description:
        "Explore the highlights of every NFL game. Watch highlights of past games, live highlights as they happen, or stay tuned for the latest games.",
    },
    {
      title: "REAL-TIME SCOREBOARD",
      image: "/nfl-live-hub/main-screenshot.webp",
      description:
        "Stay updated with live scores from every NFL game. Our dynamic scoreboard brings you the latest from the field, ensuring you never miss a play.",
    },
    {
      title: "LIVE FAN CHAT",
      image: "/nfl-live-hub/chat-screenshot.webp",
      description:
        "Join a vibrant community of NFL enthusiasts! Engage in real-time discussions about ongoing games, share predictions, celebrate victories, or analyze plays with fellow fans.",
    },

    {
      title: "STANDINGS TRACKER",
      image: "/nfl-live-hub/standings-screenshot.webp",
      description:
        "Easily view the current NFL standings, sorted by conference and division. Track your team&apos;s progress throughout the season with just a click.",
    },
    {
      title: "GAME PREVIEWS & RECAPS",
      image: "/nfl-live-hub/recap-screenshot.webp",
      description:
        "Dive into comprehensive game previews, complete with expert analysis and predictions. After the game, relive the action with our detailed recap videos.",
    },
  ];

  return (
    <section
      className={
        styles["features-container"] +
        " " +
        styles["animate"] +
        " " +
        styles["pop"] +
        " " +
        styles["delay-4-no-pop"]
      }
    >
      {features.map((feature, i) => (
        <div
          key={feature.title}
          className={
            styles["feature-item"] +
            " " +
            (i % 2 === 0 ? "" : styles["feature-item__reverse"])
          }
        >
          <div className={styles["feature-item-content"]}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
          <div className={styles["feature-item-image"]}>
            <Image
              src={feature.image}
              alt={feature.title}
              // sizes="(max-width: 768px) 340px, (max-width: 1024px) 340px, 900px"
              quality={100}
              width={900}
              height={567}
              unoptimized={true}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
