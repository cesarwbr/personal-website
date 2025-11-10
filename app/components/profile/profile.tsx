import Image from "next/image";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles["profile"]}>
      <div className={styles["photo-container"]}>
        <Image
          width="320"
          height="400"
          src="/images/no-bg-shadow.png"
          alt="Cesar Alvarenga, TypeScript and React Developer"
          className={styles["photo"]}
          quality="100"
        />
      </div>
      <h1 className={styles["profile--description"]}>
        <span className={styles["profile--description--hero"]}>
          Hey, I&apos;m Cesar.
        </span>{" "}
        - Software Engineer, Web Developer, Technical Writer
      </h1>
    </div>
  );
}
