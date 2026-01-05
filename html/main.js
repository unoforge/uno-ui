import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./style.css";
import "./colors.css";
import { disableTransitionsTemporarily } from "./js/utils";

const getDefaultThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
const getStoredPalette = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("palette")) {
    return localStorage.getItem("palette");
  }
  return "default";
};
const isDark = getDefaultThemePreference() === "dark";

document.documentElement.classList[isDark ? "add" : "remove"]("dark");
document.documentElement.setAttribute("data-palette", getStoredPalette());

if (typeof localStorage !== "undefined") {
  const observer = new MutationObserver(() => {
    // Persist current state only; do not re-write attributes here to avoid
    // re-entrant MutationObserver loops when attributes are changed elsewhere
    const isDarkNow = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    const paletteNow =
      document.documentElement.getAttribute("data-palette") ??
      getStoredPalette();
    localStorage.setItem("palette", paletteNow);
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-palette"],
  });
}

window.addEventListener("message", (event) => {
  if (event.data?.type === "theme") {
    const isDark = event.data.dark;
    disableTransitionsTemporarily(() => {
      document.documentElement.classList.toggle("dark", isDark);
    });
  }

  if (event.data?.type === "palette") {
    const palette = event.data.palette;
    document.documentElement.setAttribute("data-palette", palette);
  }
});
