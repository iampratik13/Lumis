/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface": "#0a0e1a", // Deeper, less saturated indigo
        "on-primary-fixed-variant": "#004883",
        "tertiary-fixed": "#ffdbca",
        "on-secondary-fixed-variant": "#930013",
        "surface-dim": "#080c16",
        "inverse-primary": "#0060ab",
        "primary-fixed-dim": "#a3c9ff",
        "primary-fixed": "#d3e3ff",
        "surface-container-low": "#0f1424",
        "inverse-surface": "#dae2fd",
        "tertiary-container": "#2d0e00",
        "on-background": "#dae2fd",
        "on-surface-variant": "#a0a3b1",
        "on-primary-container": "#2183df",
        "on-error": "#690005",
        "on-primary": "#00315c",
        "tertiary-fixed-dim": "#ffb690",
        "background": "#0a0e1a",
        "surface-container-lowest": "#040812",
        "error": "#ffb4ab",
        "surface-tint": "#a3c9ff",
        "on-tertiary-container": "#d45d00",
        "surface-bright": "#222a3f",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "on-tertiary": "#552100",
        "secondary-fixed-dim": "#ffb3ad",
        "secondary": "#ff3131", // Sharper Hard Clash Red
        "on-surface": "#e1e7f5",
        "on-primary-fixed": "#001c39",
        "on-secondary-fixed": "#410004",
        "surface-variant": "#1b2336",
        "primary": "#3b82f6", // More standard engineering blue
        "outline-variant": "#323a4d",
        "on-secondary-container": "#ffaea8",
        "inverse-on-surface": "#1e2433",
        "secondary-fixed": "#ffdad7",
        "secondary-container": "#a40217",
        "tertiary": "#f97316", // Sharper Soft Clash Orange
        "primary-container": "#001832",
        "surface-container-high": "#161d2f",
        "surface-container": "#0e1526",
        "on-tertiary-fixed-variant": "#783200",
        "on-secondary": "#ffffff",
        "surface-container-highest": "#1f273a",
        "on-tertiary-fixed": "#341100",
        "outline": "#4f5a73"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.375rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Space Grotesk"],
        "body": ["Inter"],
        "label": ["Inter"]
      }
    },
  },
  plugins: [],
}
