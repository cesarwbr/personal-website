import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Link href="/">
        <a className={styles["name"]}>Cesar William</a>
      </Link>
    </header>
  );
}
