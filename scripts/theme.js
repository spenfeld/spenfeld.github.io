// Theme definitions. Each key becomes a CSS custom property on
// <html>, so these names must match the --variables used in global.css.
const themes = {
  mono: {
    "--bg": "#0b0b0b",
    "--text": "#e5e5e5",
    "--muted": "#a3a3a3",
    "--accent": "#9ca3af",
    "--accent2": "#6b7280",
    "--border": "1px solid rgba(255,255,255,0.08)",
    "--glow": "none",
    "--font": "ui-sans-serif"
  },

  amber: {
    "--bg": "#0a0705",
    "--text": "#fbbf24",
    "--muted": "#f59e0b",
    "--accent": "#fbbf24",
    "--accent2": "#fde68a",
    "--border": "1px solid rgba(251,191,36,0.22)",
    "--glow": "0 0 10px rgba(251,191,36,0.35)",
    "--font": "ui-monospace"
  },

  matrix: {
    "--bg": "#020403",
    "--text": "#00ff66",
    "--muted": "#00cc55",
    "--accent": "#22ff88",
    "--accent2": "#99ffbb",
    "--border": "1px solid rgba(0,255,102,0.22)",
    "--glow": "0 0 12px rgba(0,255,102,0.4)",
    "--font": "ui-monospace"
  },

  light: {
    "--bg": "#f8fafc",
    "--text": "#0f172a",
    "--muted": "#475569",
    "--accent": "#0284c7",
    "--accent2": "#0369a1",
    "--border": "1px solid rgba(15,23,42,0.12)",
    "--glow": "none",
    "--font": "ui-sans-serif"
  }
};

// Updates the bottom HUD's theme picker labels/dot to reflect
// whichever theme is currently active.
function setUI(active) {
  document.querySelectorAll(".theme-option").forEach((el) => {
    el.textContent = `[ ] ${el.dataset.theme.toUpperCase()}`;
    el.classList.remove("theme-active");
  });

  const el = document.querySelector(`.theme-option[data-theme="${active}"]`);
  if (el) {
    el.textContent = `[●] ${active.toUpperCase()}`;
    el.classList.add("theme-active");
  }
}

// Applies a theme by setting its variables on the root element,
// persisting the choice, and syncing the picker UI.
function applyTheme(name) {
  const t = themes[name];
  for (const k in t) {
    document.documentElement.style.setProperty(k, t[k]);
  }

  document.documentElement.setAttribute("data-theme", name);
  localStorage.setItem("theme", name);

  // Also cache the resolved variable values (not just the theme name).
  // The early-apply snippet at the top of each page's <head> replays
  // this cache before first paint, so it never needs its own copy of
  // the themes object — it just re-applies whatever ran last time.
  localStorage.setItem("themeVars", JSON.stringify(t));

  setUI(name);
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "mono";
  applyTheme(saved);

  document.querySelectorAll(".theme-option").forEach((el) => {
    el.addEventListener("click", () => {
      applyTheme(el.dataset.theme);
    });
  });
});