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
          alt="Cesar"
          className={styles["photo"]}
          quality="100"
          sizes="142px"
        />
      </div>
      <h1 className={styles["profile--description"]}>
        <span className={styles["profile--description--hero"]}>
          Hey, I&apos;m Cesar.
        </span>{" "}
        I&apos;m a software engineer, builder, and writer.
      </h1>
    </div>
  );
}
