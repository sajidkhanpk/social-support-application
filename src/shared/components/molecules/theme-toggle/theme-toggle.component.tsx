import React from "react";
import { useTheme } from "@shared/hooks/use-theme-context";
import { themes } from "@shared/constants/theme";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`w-9 h-9 rounded-full text-sm transition-all duration-200 ${
            theme === t.value
              ? "bg-white dark:bg-gray-700 shadow-md"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
        >
          <span
            className={`${
              theme === t.value ? "scale-110" : "scale-100"
            } transition-transform`}
          >
            {t.icon}
          </span>
        </button>
      ))}
    </div>
  );
};
