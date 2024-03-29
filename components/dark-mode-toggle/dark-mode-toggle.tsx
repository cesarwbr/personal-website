import { KeyboardEvent } from "react";
import { useTheme } from "next-themes";
import styles from "./dark-mode-toggle.module.css";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  function handleToggleButtonKeydown(event: KeyboardEvent) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      swithTheme();
    }
  }

  function swithTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div
      tabIndex={0}
      className={styles["toggleContainer"]}
      role="button"
      onKeyDown={handleToggleButtonKeydown}
      aria-label="Dark mode"
    >
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggleInput"]}
        checked={theme === "dark"}
        onChange={() => swithTheme()}
      />
      <label
        htmlFor="toggle"
        className={styles["toggleLabel"]}
        aria-label="Dark mode"
        aria-hidden={true}
      ></label>
    </div>
  );
}
