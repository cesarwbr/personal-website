import { KeyboardEvent } from "react";
import useTheme from "../hooks/useTheme";

export default function DarkModeToggle() {
  const [darkMode, switchTheme] = useTheme();

  function handleToggleButtonKeydown(event: KeyboardEvent) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      switchTheme(event);
    }
  }

  console.log({ darkMode });

  return (
    <div
      tabIndex={0}
      className="toggleContainer"
      role="button"
      onKeyDown={handleToggleButtonKeydown}
      aria-pressed={darkMode}
      aria-label="Dark mode"
    >
      <input
        type="checkbox"
        id="toggle"
        className="toggleInput"
        checked={darkMode}
        onChange={switchTheme}
      />
      <label
        htmlFor="toggle"
        className="toggleLabel"
        aria-label="Dark mode"
        aria-hidden={true}
      ></label>
      <style jsx>{`
        .toggleContainer {
          outline: none;
          border: 3px solid transparent;
          border-radius: 100px;
          padding: 2px;
        }
        .toggleContainer:focus {
          outline: none;
          border-color: var(--main-primary-color);
        }
        .toggleLabel {
          position: relative;
          display: block;
          width: 60px;
          height: 30px;
          border-radius: 100px;
          background-color: #222222;
          overflow: hidden;
          cursor: pointer;
        }

        .toggleLabel:before,
        .toggleLabel:after {
          display: block;
          position: absolute;
          content: "";
          width: 20px;
          height: 20px;
          border-radius: 50%;
          top: 5px;
          left: 5px;
          transition: 0.5s ease;
        }

        .toggleLabel:before {
          background-color: #ffa41b;
        }

        .toggleLabel:after {
          background-color: #222222;
          left: -4px;
          transform: scale(0.00001);
        }

        .toggleInput {
          display: none;
        }

        .toggleInput:checked + label:before {
          background-color: #fff;
          transform: translateX(30px);
        }

        .toggleInput:checked + label:after {
          transform: translateX(30px) scale(1);
        }
      `}</style>
    </div>
  );
}
