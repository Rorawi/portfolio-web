"use client";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
      />
      <div className={`w-12 h-6 rounded-full ${theme === "dark" ? "bg-blue-600" : "bg-gray-300"}`}>
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
};

export default ThemeToggle;
