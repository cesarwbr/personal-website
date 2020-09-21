import Link from "next/link";
import DarkModeToggle from "./dart-mode-toggle";

type Props = {
  darkMode: boolean;
  switchTheme: () => void;
};
export default function Header({ darkMode, switchTheme }) {
  return (
    <header>
      <Link href="/">
        <a className="name">Cesar William</a>
      </Link>

      <DarkModeToggle darkMode={darkMode} switchTheme={switchTheme} />

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 45px 0;
        }

        .name {
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--main-primary-color);
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}
