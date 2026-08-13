import { CSSProperties } from "react";
import styles from "../../styles/olympic-games-paris-2024.module.css";

type Enter = {
  /** Transform the element animates in from. */
  from: string;
  /** Resting transform, when it is not the identity. */
  to?: string;
  delay?: string;
  duration?: string;
};

/**
 * Turns an entrance spec into the custom properties the `[data-enter]` rules in
 * globals.css read.
 *
 * `--enter-to` doubles as the element's resting transform, so the markup is
 * correct even when the animation never runs — which is the whole point of
 * moving these off framer-motion: the server HTML is no longer emitted at
 * opacity 0 waiting for JS to reveal it.
 */
function enterStyle(enter: Enter, extra?: CSSProperties): CSSProperties {
  // Every property is written out, defaults included. Custom properties
  // inherit, so an element that omitted one would silently pick up its
  // parent's value — which is how the inner box of each floating image ended
  // up carrying the outer box's rotation on top of its own.
  return {
    ...extra,
    "--enter-from": enter.from,
    "--enter-to": enter.to ?? "none",
    "--enter-delay": enter.delay ?? "0s",
    "--enter-duration": enter.duration ?? "0.9s",
  } as CSSProperties;
}

const imageStyle: CSSProperties = {
  display: "block",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  objectPosition: "center",
  objectFit: "cover",
  imageRendering: "auto",
};

const items: {
  classNumber: string;
  image: string;
  container: Enter;
  content?: Enter;
}[] = [
  {
    classNumber: "",
    image:
      "https://framerusercontent.com/images/ghg952sAPRUsrne1XNmZKrm82k.jpg",
    container: { from: "rotate(-55deg) scale(0.7)", to: "rotate(-7deg)" },
    content: {
      from: "translateX(150px) scale(0.9)",
      duration: "1.2s",
    },
  },
  {
    classNumber: "2",
    image: "https://framerusercontent.com/images/AmtDKvoYbn86jQ6LAuNQgg9DA.jpg",
    container: { from: "rotate(41deg) scale(0.7)", to: "rotate(-7deg)" },
    content: { from: "translateX(-20px) scale(0.9)", delay: "0.6s" },
  },
  {
    classNumber: "3",
    image:
      "https://framerusercontent.com/images/HBFHPy55IlP65f42qLlZq91PXTc.jpg",
    container: { from: "rotate(-41deg) scale(0.7)", to: "rotate(7deg)" },
    content: { from: "translateX(-20px) scale(0.9)", delay: "0.6s" },
  },
  {
    classNumber: "4",
    image:
      "https://framerusercontent.com/images/wH0uOXgKmz5x2MQYfzIneJdoIzU.jpg",
    container: { from: "rotate(5deg) scale(0.7)", to: "rotate(5deg)" },
    content: { from: "translateX(20px)", delay: "0.6s" },
  },
  {
    classNumber: "5",
    image: "https://framerusercontent.com/images/OiQb1GrOiazlduGtN9KXDBYjs.png",
    container: { from: "translateY(-150px)", delay: "1s" },
  },
];

const logo: Enter = { from: "translateY(-30px) scale(0.8)", delay: "0.2s" };
const heading: Enter = { from: "translateY(30px) scale(0.8)", delay: "0.2s" };
const description: Enter = { from: "translateY(30px)", delay: "0.2s" };
const actionInstall: Enter = { from: "none", delay: "0.5s" };
const actionProducthunt: Enter = { from: "none", delay: "1s" };

export default function Hero() {
  return (
    <div className={styles["hero--container"]}>
      <div className={styles["hero--floating-images"]}>
        {items.map((item) => (
          <div
            key={item.classNumber}
            className={styles[`hero--box${item.classNumber}`]}
            data-enter
            style={enterStyle(item.container)}
          >
            <div
              className={styles[`hero--box${item.classNumber}-internal`]}
              {...(item.content
                ? { "data-enter": true, style: enterStyle(item.content) }
                : {})}
            >
              <img
                decoding="async"
                sizes="100vw"
                src={item.image}
                alt=""
                style={imageStyle}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles["hero--content"]}>
        <div className={styles["hero--heading-content"]}>
          <div
            className={styles["hero--logo"]}
            data-enter
            style={enterStyle(logo)}
          >
            <img
              decoding="async"
              sizes="200px"
              src="https://framerusercontent.com/images/1L3PJGQ1pO6mbXawBIUZHc0yQ.png"
              alt=""
              style={imageStyle}
            />
          </div>
          <div
            className={styles["hero--heading"]}
            data-enter
            style={enterStyle(heading)}
          >
            <h1>
              Olympic Games
              <br />
              Chrome Extension
            </h1>
          </div>
          <div
            className={styles["hero--description"]}
            data-enter
            style={enterStyle(description)}
          >
            <p>
              Follow the Paris 2024 Olympics with schedules, video highlights,
              medal tracking, and live chat with fans worldwide.
            </p>
          </div>
        </div>
        <div className={styles["hero--actions"]}>
          <a
            className={styles["hero--action-install"]}
            data-enter
            style={enterStyle(actionInstall)}
            href="https://chromewebstore.google.com/detail/olympic-games-paris-2024/gogmlglijehaingjggcmdkpjagodcohl?utm_source=product_page&utm_medium=referral&utm_campaign=chrome_extension_launch"
            target="_blank"
            rel="noreferrer"
          >
            <img
              decoding="async"
              src="https://framerusercontent.com/images/m5nleiz6PjE8TSDmvzyjILN4FYI.webp"
              alt=""
              style={{
                display: "block",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
            />
            <span>Install from Chrome Web Store</span>
          </a>
          <div
            className={styles["hero--action-producthunt"]}
            data-enter
            style={enterStyle(actionProducthunt)}
          >
            <a
              href="https://www.producthunt.com/posts/olympic-games-chrome-extension?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-olympic&#0045;games&#0045;chrome&#0045;extension"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=472237&theme=light"
                alt="Olympic Games Chrome Extension - Track Paris 2024 schedules, highlights, medals + fan chat | Product Hunt"
                style={{ width: "200px", height: "54px" }}
                width="200"
                height="54"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
