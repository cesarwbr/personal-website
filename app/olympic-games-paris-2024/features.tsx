"use client";
import { motion } from "framer-motion";
import styles from "../../styles/olympic-games-paris-2024.module.css";

function FeatureItem({
  item,
  index,
}: {
  item: { title: string; description: string; image: string };
  index: number;
}) {
  const animation = {
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
  };
  return (
    <motion.div
      className={styles["hero--features-item"]}
      style={{
        flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: animation.animate,
        hidden: animation.initial,
      }}
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
    </motion.div>
  );
}

export default function Features() {
  const headerProps = {
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
  };

  const featureList = [
    {
      title: "Real-time event schedules",
      description:
        "Always know when your favorite sports and athletes are competing",
      image:
        "https://framerusercontent.com/images/sWaWrH2jKr1uOxf5ehS2xQuy8.webp",
    },
    {
      title: "Exclusive video highlights",
      description:
        "Relive the most jaw-dropping moments and awe-inspiring performances",
      image:
        "https://framerusercontent.com/images/oESUr3aGwgxjWKXU0W9chd34I.webp",
    },
    {
      title: "Live medal tracking",
      description:
        "Stay on top of the medal count and see which countries are dominating the Games",
      image:
        "https://framerusercontent.com/images/PA7tvndEv7wdLEzxzVgIVlPDZJo.webp",
    },
    {
      title: "Global fan chat",
      description:
        "Connect with passionate fans worldwide to share your excitement, predictions, and reactions",
      image: "/olympic-games/chat-ss.png",
    },
  ];
  return (
    <div className={styles["hero--features-container"]}>
      <div className={styles["hero--features-header"]}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          variants={{
            visible: headerProps.animate,
            hidden: headerProps.initial,
          }}
        >
          Features
        </motion.h2>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          variants={{
            visible: headerProps.animate,
            hidden: headerProps.initial,
          }}
        >
          Discover Olympic Games Chrome Extension's Powerful Features
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          variants={{
            visible: headerProps.animate,
            hidden: headerProps.initial,
          }}
        >
          Never miss a moment of the Paris 2024 Olympic Games with this
          must-have Chrome extension!
        </motion.p>
      </div>
      {featureList.map((item, index) => (
        <FeatureItem key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
