import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext(false);

export default function useTheme() {
  const [theme, setTheme] = useState(null);
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    console.log("Loading theme from storage...");

    if (localStorage) {
      setTheme(localStorage.getItem("theme"));
    } else {
      setTheme(false);
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    console.log("Updating theme to storage...");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { darkMode: theme !== "light", setTheme, toggleTheme };
}

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={false}>{children}</ThemeContext.Provider>
  );
}
