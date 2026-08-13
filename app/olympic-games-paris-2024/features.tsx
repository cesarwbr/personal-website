import { CSSProperties } from "react";
import { featureList } from "../../content/olympic";
import styles from "../../styles/olympic-games-paris-2024.module.css";

/**
 * Scroll-revealed via the shared `[data-reveal]` mechanism (globals.css), the
 * same one the rest of the site uses. The attribute goes straight on the
 * existing elements rather than through MotionWrapper so no wrapper div is
 * introduced into these flex layouts.
 */
function FeatureItem({
  item,
  index,
}: {
  item: { title: string; description: string; image: string };
  index: number;
}) {
  return (
    <div
      className={styles["hero--features-item"]}
      data-reveal="up"
      style={
        {
          flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
          "--reveal-delay": "0.2s",
        } as CSSProperties
      }
    >
      <div className={styles["hero--features-item-info"]}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
      <div className={styles["hero--features-item-image-container"]}>
        <div
          className={styles["hero--features-item-image-container--white"]}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Features() {
  const headerStyle = { "--reveal-delay": "0.2s" } as CSSProperties;

  return (
    <div className={styles["hero--features-container"]}>
      <div className={styles["hero--features-header"]}>
        <h2 data-reveal="up" style={headerStyle}>
          Features
        </h2>
        <h3 data-reveal="up" style={headerStyle}>
          Discover Olympic Games Chrome Extension&apos;s Powerful Features
        </h3>
        <p data-reveal="up" style={headerStyle}>
          Never miss a moment of the Paris 2024 Olympic Games with this
          must-have Chrome extension!
        </p>
      </div>
      {featureList.map((item, index) => (
        <FeatureItem key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
