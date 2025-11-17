/**
 * ThemeScript runs before React hydrates to prevent flash of wrong theme.
 * This script reads the theme preference from localStorage and applies it immediately.
 * Defaults to dark theme if no preference is stored.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const stored = localStorage.getItem('adsit-theme-preference');
              const preference = stored && ['light', 'dark'].includes(stored) ? stored : 'dark';
              document.documentElement.setAttribute('data-theme', preference);
              document.body.setAttribute('data-theme', preference);
            } catch (e) {
              // Fallback to dark theme if localStorage fails
              document.documentElement.setAttribute('data-theme', 'dark');
              document.body.setAttribute('data-theme', 'dark');
            }
          })();
        `,
      }}
    />
  );
}

