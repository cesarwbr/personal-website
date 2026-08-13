import { CSSProperties, ReactElement } from "react";
import { WandSparkles, ListVideo, Medal } from "lucide-react";
import styles from "../../styles/olympic-games-paris-2024.module.css";

type MainFeature = {
  icon: ReactElement;
  title: string;
  description: string;
  /** Stagger between the three cards, matching the original 0.3/0.5/0.7 delays. */
  delay: string;
};

const features: MainFeature[] = [
  {
    icon: <WandSparkles size={28} color="#caa726" />,
    title: "Real-time event schedules",
    description:
      "Always know when your favorite sports and athletes are competing",
    delay: "0.3s",
  },
  {
    icon: <ListVideo size={28} color="#caa726" />,
    title: "Video highlights",
    description:
      "Relive the most jaw-dropping moments and awe-inspiring performances",
    delay: "0.5s",
  },
  {
    icon: <Medal size={28} color="#caa726" />,
    title: "Live medal tracking",
    description:
      "Stay on top of the medal count and see which countries are dominating the Games",
    delay: "0.7s",
  },
];

export default function MainFeatures() {
  return (
    <div className={styles["hero--main-features--container"]}>
      {features.map((feature) => (
        <div
          key={feature.title}
          className={styles["hero--main-features--feature"]}
          data-reveal="up"
          style={{ "--reveal-delay": feature.delay } as CSSProperties}
        >
          <div className={styles["hero--main-features--feature--icon"]}>
            {feature.icon}
          </div>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
