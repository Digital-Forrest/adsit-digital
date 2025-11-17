"use client";

import { useTheme } from "@/contexts/theme-context";

/**
 * ThemeToggle provides a simple toggle button for switching between light and dark themes.
 * Uses the Liquid Glass design aesthetic with gradient accents matching the current brand.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const currentTheme = theme === "light" 
    ? { label: "Light", icon: "☀️" }
    : { label: "Dark", icon: "🌙" };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-base)]"
    >
      <span className="text-base" aria-hidden="true">
        {currentTheme.icon}
      </span>
      <span className="hidden sm:inline">{currentTheme.label}</span>
    </button>
  );
}

