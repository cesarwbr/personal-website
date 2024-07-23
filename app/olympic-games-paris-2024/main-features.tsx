"use client";
import { motion } from "framer-motion";
import { WandSparkles, ListVideo, Medal } from "lucide-react";
import styles from "../../styles/olympic-games-paris-2024.module.css";

function Feature({
  feature,
}: {
  feature: {
    icon: JSX.Element;
    title: string;
    description: string;
    animation: {
      animate: {
        opacity: number;
        rotate: number;
        rotateX: number;
        rotateY: number;
        scale: number;
        skewX: number;
        skewY: number;
        transition: {
          damping: number;
          delay: number;
          mass: number;
          stiffness: number;
          type: string;
        };
        x: number;
        y: number;
      };
      initial: {
        opacity: number;
        rotate: number;
        rotateX: number;
        rotateY: number;
        scale: number;
        skewX: number;
        skewY: number;
        x: number;
        y: number;
      };
    };
  };
}) {
  return (
    <motion.div
      className={styles["hero--main-features--feature"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: feature.animation.animate,
        hidden: feature.animation.initial,
      }}
    >
      <div className={styles["hero--main-features--feature--icon"]}>
        {feature.icon}
      </div>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
    </motion.div>
  );
}

export default function MainFeatures() {
  const containerProps = {
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
  const features = [
    {
      icon: <WandSparkles size={28} color="#caa726" />,
      title: "Real-time event schedules",
      description:
        "Always know when your favorite sports and athletes are competing",
      animation: {
        ...containerProps,
        animate: {
          ...containerProps.animate,
          transition: { ...containerProps.animate.transition, delay: 0.3 },
        },
      },
    },
    {
      icon: <ListVideo size={28} color="#caa726" />,
      title: "Video highlights",
      description:
        "Relive the most jaw-dropping moments and awe-inspiring performances",
      animation: {
        ...containerProps,
        animate: {
          ...containerProps.animate,
          transition: { ...containerProps.animate.transition, delay: 0.5 },
        },
      },
    },
    {
      icon: <Medal size={28} color="#caa726" />,
      title: "Live medal tracking",
      description:
        "Stay on top of the medal count and see which countries are dominating the Games",
      animation: {
        ...containerProps,
        animate: {
          ...containerProps.animate,
          transition: { ...containerProps.animate.transition, delay: 0.7 },
        },
      },
    },
  ];
  return (
    <div className={styles["hero--main-features--container"]}>
      {features.map((feature) => (
        <Feature key={feature.title} feature={feature} />
      ))}
    </div>
  );
}
