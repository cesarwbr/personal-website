import { KeyboardEvent } from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./dark-mode-toggle.module.css";

export default function DarkModeToggle() {
  const [darkMode, switchTheme] = useTheme();

  function handleToggleButtonKeydown(event: KeyboardEvent) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      switchTheme(event);
    }
  }

  return (
    <div
      tabIndex={0}
      className={styles["toggleContainer"]}
      role="button"
      onKeyDown={handleToggleButtonKeydown}
      aria-pressed={darkMode}
      aria-label="Dark mode"
    >
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggleInput"]}
        checked={darkMode}
        onChange={switchTheme}
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
