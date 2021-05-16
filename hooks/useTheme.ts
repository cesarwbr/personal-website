import { SyntheticEvent, useCallback, useEffect, useState } from "react";

export default function useTheme(): [boolean, (e: SyntheticEvent) => void] {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const switchTheme = useCallback(
    (e: SyntheticEvent) => {
      setDarkMode((darkMode) => !darkMode);
    },
    [setDarkMode]
  );

  return [darkMode, switchTheme];
}
