"use client";
import { motion } from "framer-motion";
import styles from "../../styles/olympic-games-paris-2024.module.css";

export default function Hero() {
  const items = [
    {
      classNumber: "",
      image:
        "https://framerusercontent.com/images/ghg952sAPRUsrne1XNmZKrm82k.jpg",
      containerProps: {
        animate: {
          opacity: 1,
          rotate: -7,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 30,
            delay: 0,
            mass: 1,
            stiffness: 120,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: -55,
          rotateX: 0,
          rotateY: 0,
          scale: 0.7,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
      },
      contentProps: {
        animate: {
          opacity: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            delay: 0,
            duration: 1.2,
            ease: [0.44, 0, 0.56, 1],
            type: "tween",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 0.9,
          skewX: 0,
          skewY: 0,
          x: 150,
          y: 0,
        },
      },
    },
    {
      classNumber: "2",
      image:
        "https://framerusercontent.com/images/AmtDKvoYbn86jQ6LAuNQgg9DA.jpg",
      containerProps: {
        animate: {
          opacity: 1,
          rotate: -7,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 30,
            delay: 0,
            mass: 1,
            stiffness: 120,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 41,
          rotateX: 0,
          rotateY: 0,
          scale: 0.7,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
      },
      contentProps: {
        animate: {
          opacity: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 50,
            delay: 0.6,
            mass: 1,
            stiffness: 150,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 0.9,
          skewX: 0,
          skewY: 0,
          x: -20,
          y: 0,
        },
      },
    },
    {
      classNumber: "3",
      image:
        "https://framerusercontent.com/images/HBFHPy55IlP65f42qLlZq91PXTc.jpg",
      containerProps: {
        animate: {
          opacity: 1,
          rotate: 7,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 30,
            delay: 0,
            mass: 1,
            stiffness: 120,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: -41,
          rotateX: 0,
          rotateY: 0,
          scale: 0.7,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
      },
      contentProps: {
        animate: {
          opacity: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 50,
            delay: 0.6,
            mass: 1,
            stiffness: 150,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 0.9,
          skewX: 0,
          skewY: 0,
          x: -20,
          y: 0,
        },
      },
    },
    {
      classNumber: "4",
      image:
        "https://framerusercontent.com/images/wH0uOXgKmz5x2MQYfzIneJdoIzU.jpg",
      containerProps: {
        animate: {
          opacity: 1,
          rotate: 5,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 30,
            delay: 0,
            mass: 1,
            stiffness: 120,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 5,
          rotateX: 0,
          rotateY: 0,
          scale: 0.7,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
      },
      contentProps: {
        animate: {
          opacity: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 50,
            delay: 0.6,
            mass: 1,
            stiffness: 150,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 20,
          y: 0,
        },
      },
    },
    {
      classNumber: "5",
      image:
        "https://framerusercontent.com/images/OiQb1GrOiazlduGtN9KXDBYjs.png",
      containerProps: {
        animate: {
          opacity: 1,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          transition: {
            damping: 30,
            delay: 1,
            mass: 1,
            stiffness: 150,
            type: "spring",
          },
          x: 0,
          y: 0,
        },
        initial: {
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: -150,
        },
      },
      contentProps: {},
    },
  ];

  const logo = {
    containerProps: {
      animate: {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          damping: 50,
          delay: 0.2,
          mass: 1,
          stiffness: 130,
          type: "spring",
        },
        x: 0,
        y: 0,
      },
      initial: {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -30,
      },
    },
  };

  const heading = {
    containerProps: {
      animate: {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          damping: 50,
          delay: 0.2,
          mass: 1,
          stiffness: 130,
          type: "spring",
        },
        x: 0,
        y: 0,
      },
      initial: {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      },
    },
  };

  const description = {
    containerProps: {
      animate: {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          damping: 50,
          delay: 0.2,
          mass: 1,
          stiffness: 150,
          type: "spring",
        },
        x: 0,
        y: 0,
      },
      initial: {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      },
    },
  };

  const actionInstall = {
    containerProps: {
      animate: {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          damping: 30,
          delay: 0.5,
          mass: 1,
          stiffness: 150,
          type: "spring",
        },
        x: 0,
        y: 0,
      },
      initial: {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      },
    },
  };

  const actionProducthunt = {
    containerProps: {
      animate: {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          damping: 30,
          delay: 1,
          mass: 1,
          stiffness: 150,
          type: "spring",
        },
        x: 0,
        y: 0,
      },
      initial: {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      },
    },
  };
  return (
    <div className={styles["hero--container"]}>
      <div className={styles["hero--floating-images"]}>
        {items.map((item) => (
          <motion.div
            key={item.classNumber}
            className={styles[`hero--box${item.classNumber}`]}
            {...item.containerProps}
          >
            <motion.div
              className={styles[`hero--box${item.classNumber}-internal`]}
              {...item.contentProps}
            >
              <img
                decoding="async"
                sizes="100vw"
                src={item.image}
                alt=""
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectPosition: "center",
                  objectFit: "cover",
                  imageRendering: "auto",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className={styles["hero--content"]}>
        <div className={styles["hero--heading-content"]}>
          <motion.div className={styles["hero--logo"]} {...logo.containerProps}>
            <img
              decoding="async"
              sizes="200px"
              src="https://framerusercontent.com/images/1L3PJGQ1pO6mbXawBIUZHc0yQ.png"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
            />
          </motion.div>
          <motion.div
            className={styles["hero--heading"]}
            {...heading.containerProps}
          >
            <h1>
              Olympic Games
              <br />
              Chrome Extension
            </h1>
          </motion.div>
          <motion.div
            className={styles["hero--description"]}
            {...description.containerProps}
          >
            <p>
              Follow the Paris 2024 Olympics with schedules, video highlights,
              medal tracking, and live chat with fans worldwide.
            </p>
          </motion.div>
        </div>
        <div className={styles["hero--actions"]}>
          <motion.a
            className={styles["hero--action-install"]}
            {...actionInstall.containerProps}
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
          </motion.a>
          <motion.div
            className={styles["hero--action-producthunt"]}
            {...actionProducthunt.containerProps}
          >
            <a
              href="https://www.producthunt.com/posts/olympic-games-chrome-extension?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-olympic&#0045;games&#0045;chrome&#0045;extension"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=472237&theme=light"
                alt="Olympic&#0032;Games&#0032;Chrome&#0032;Extension - Track&#0032;Paris&#0032;2024&#0032;schedules&#0044;&#0032;highlights&#0044;&#0032;medals&#0032;&#0043;&#0032;fan&#0032;chat | Product Hunt"
                style={{ width: "200px", height: "54px" }}
                width="200"
                height="54"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
