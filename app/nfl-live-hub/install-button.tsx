import Image from "next/image";
import styles from "../../styles/nfl-live-hub.module.css";
import { CSSProperties } from "react";

export default function InstallButton({
  showDescription,
  label,
  style,
}: {
  showDescription?: boolean;
  label?: string;
  style?: CSSProperties;
}) {
  return (
    <>
      <a
        href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
        target="_blank"
        className={styles["chrome-store-link"]}
        style={style}
      >
        <Image
          src="/images/chrome-logo-white.svg"
          alt="Chrome Logo"
          width={16}
          height={16}
          style={{ height: "16px" }}
          aria-hidden="true"
        />
        <span>{label || "Install from Chrome Web Store"}</span>
      </a>
      {showDescription !== false ? (
        <p>Free / No account needed / Multi-language support</p>
      ) : null}
    </>
  );
}
