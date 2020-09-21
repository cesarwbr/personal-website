type Props = {
  darkMode: boolean;
  switchTheme: () => void;
};

export default function DarkModeToggle({ darkMode, switchTheme }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        className="toggleInput"
        defaultChecked={darkMode}
        onClick={switchTheme}
      />
      <label htmlFor="toggle" className="toggleLabel"></label>
      <style jsx>{`
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
