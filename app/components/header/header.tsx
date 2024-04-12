"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ right }: { right?: ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }, []);

  const headerClasses = useMemo(() => {
    return hasScrolled
      ? styles["header-container"]
      : styles["header-container"] +
          " " +
          styles["header-container__no-border"];
  }, [hasScrolled]);

  return (
    <div className={headerClasses}>
      <header className={styles["header"]}>
        <Link href="/" className={styles["name"]}>
          Cesar William
        </Link>
        {right}
      </header>
    </div>
  );
}
