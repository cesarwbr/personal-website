import Image from "next/image";
import styles from "../../styles/nfl-live-hub.module.css";

export function Features() {
  const features = [
    {
      title: "REAL-TIME SCOREBOARD",
      image: "/nfl-live-hub/main-screenshot.png",
      description:
        "Stay updated with live scores from every NFL game. Our dynamic scoreboard brings you the latest from the field, ensuring you never miss a play.",
    },
    {
      title: "LIVE FAN CHAT",
      image: "/nfl-live-hub/chat-screenshot.png",
      description:
        "Join a vibrant community of NFL enthusiasts! Engage in real-time discussions about ongoing games, share predictions, celebrate victories, or analyze plays with fellow fans.",
    },
    {
      title: "HIGHLIGHT VIDEOS",
      image: "/nfl-live-hub/highlights-screenshot.png",
      description:
        "Explore the highlights of every NFL game. Watch highlights of past games, live highlights as they happen, or stay tuned for the latest games.",
    },
    {
      title: "STANDINGS TRACKER",
      image: "/nfl-live-hub/standings-screenshot.png",
      description:
        "Easily view the current NFL standings, sorted by conference and division. Track your team&apos;s progress throughout the season with just a click.",
    },
    {
      title: "GAME PREVIEWS & RECAPS",
      image: "/nfl-live-hub/recap-screenshot.png",
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
      {features.map((feature) => (
        <div key={feature.title}>
          <h2>{feature.title}</h2>
          <div className={styles["feature-item-image"]}>
            <Image
              src={feature.image}
              alt={feature.title}
              sizes="(max-width: 768px) 340px, (max-width: 1024px) 340px, 900px"
              style={{ width: "100%", height: "auto" }}
              width={500}
              height={300}
            />
          </div>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
