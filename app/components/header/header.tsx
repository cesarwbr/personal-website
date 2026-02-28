"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ right }: { right?: ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = useMemo(() => {
    const classes = [styles["header-container"]];
    if (!hasScrolled) {
      classes.push(styles["header-container__no-border"]);
    }
    return classes.join(" ");
  }, [hasScrolled]);

  return (
    <div className={headerClasses}>
      <header className={styles["header"]}>
        <Link href="/" className={styles["name"]}>
          Cw
        </Link>
        {right}
      </header>
    </div>
  );
}
