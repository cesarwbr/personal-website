import Image from "next/image";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles["profile"]}>
      <div className={styles["photo-container"]}>
        <Image
          width="142"
          height="142"
          src="/images/photo2.jpg"
          alt="Cesar Alvarenga, TypeScript and React Developer"
          className={styles["photo"]}
          quality="100"
          sizes="142px"
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
