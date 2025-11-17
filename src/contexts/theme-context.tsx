"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemePreference = "light" | "dark";

interface ThemeContextValue {
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "adsit-theme-preference";

/**
 * ThemeProvider manages global theme state and synchronizes it with:
 * - localStorage for persistence
 * - document data attributes for CSS
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference | null;
    const initialTheme = stored && ["light", "dark"].includes(stored) ? stored : "dark";
    setThemeState(initialTheme);
    setMounted(true);
  }, []);

  // Update document attributes when theme changes
  useEffect(() => {
    if (!mounted) return;

    // Update document attributes
    const root = document.documentElement;
    const body = document.body;
    root.dataset.theme = theme;
    body.dataset.theme = theme;
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemePreference) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
  };

  // Always provide context, but use safe defaults during SSR
  const contextValue: ThemeContextValue = {
    theme: mounted ? theme : "dark",
    setTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

/**
 * Hook to access theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

