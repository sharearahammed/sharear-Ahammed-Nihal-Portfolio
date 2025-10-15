import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi";
import { PiSunBold } from "react-icons/pi";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    // Read from localStorage if available
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    // Otherwise, detect system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Apply theme to <html> tag
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="text-xl flex justify-center items-center">
      <button
        className="rounded-lg dark:bg-slate-600 text-yellow-500 dark:text-white"
        onClick={handleThemeSwitch}
      >
        <p className="border px-1 py-[6px] md:px-2 md:py-[8px] rounded-lg">
          {theme === "dark" ? (
            <HiMoon className="h-3 md:h-5" />
          ) : (
            <PiSunBold className="h-3 md:h-5" />
          )}
        </p>
      </button>
    </div>
  );
};

export default DarkMode;
