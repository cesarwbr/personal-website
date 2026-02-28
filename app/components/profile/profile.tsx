import Image from "next/image";
import styles from "./profile.module.css";
import MotionWrapper from "../motion-wrapper/motion-wrapper";

export default function Profile() {
  return (
    <div className={styles["profile"]}>
      <MotionWrapper delay={0.1}>
        <div className={styles["photo-wrapper"]}>
          <div className={styles["photo-glow"]} />
          <div className={styles["photo-container"]}>
            <Image
              width="320"
              height="400"
              src="/images/no-bg-shadow.png"
              alt="Cesar Alvarenga, Technical Lead AI"
              className={styles["photo"]}
              quality="100"
              priority
            />
          </div>
        </div>
      </MotionWrapper>
      <div className={styles["profile--text"]}>
        <MotionWrapper delay={0.2}>
          <div className={styles["profile--greeting"]}>
            Hey, I&apos;m Cesar
          </div>
        </MotionWrapper>
        <MotionWrapper delay={0.35}>
          <h1 className={styles["profile--description"]}>
            <span className={styles["profile--description--hero"]}>
              Technical Lead, AI
            </span>{" "}
            building intelligent products with LLMs, agents, and real-time
            experiences.
          </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.5}>
          <div className={styles["profile--tags"]}>
            <span className={styles["tag"]}>Python</span>
            <span className={styles["tag"]}>LangChain</span>
            <span className={styles["tag"]}>LangGraph</span>
            <span className={styles["tag"]}>MCP</span>
            <span className={styles["tag"]}>TypeScript</span>
            <span className={styles["tag"]}>React</span>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
