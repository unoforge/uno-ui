import { $, $$, dispatchCustomEvent } from "@flexilla/utilities";
import { disableTransitionsTemporarily } from "./utils";



export const initScriptTheme = () => {
    const switchTheme = $("[data-switch-theme]")
    const togglers = $$("[data-toggle-theme]")
    const docElement = document.documentElement;

    const getThemePreference = () => {
        if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };


    const isDarkTheme = getThemePreference() === "dark";
    docElement.classList[isDarkTheme ? "add" : "remove"]("dark");

    const activeTheme = $("[data-toggle-theme][data-state=active]")
    if (activeTheme) activeTheme.setAttribute("data-state", 'inactive')
    const activeToggle = $(`[data-toggle-theme][data-theme=${isDarkTheme ? "dark" : "light"}]`)
    if (activeToggle) activeToggle.setAttribute("data-state", 'active')
    if (switchTheme instanceof HTMLElement) {
        switchTheme.addEventListener("click", (e) => {
            e.preventDefault();

            disableTransitionsTemporarily(() => {
                const isDarkTheme_ = getThemePreference() === "dark";
                docElement.classList[isDarkTheme_ ? "remove" : "add"]("dark");
                localStorage.setItem("theme", isDarkTheme_ ? "light" : "dark");

                const activeTheme = $("[data-toggle-theme][data-state=active]")
                if (activeTheme) activeTheme.setAttribute("data-state", 'inactive')
                const theme_ = isDarkTheme_ ? "dark" : "light"

                const activeToggle_ = $(`[data-toggle-theme][data-theme=${theme_}]`)
                if (activeToggle_) activeToggle_.setAttribute("data-state", 'active')

                dispatchCustomEvent(document.documentElement, "theme-changed", {
                    theme: isDarkTheme_ ? "light" : "dark"
                })
            })

        });
    }

    for (const toggleTheme of togglers) {
        toggleTheme.addEventListener("click", () => {
            const activeTheme = $("[data-toggle-theme][data-state=active]")
            if (activeTheme) activeTheme.setAttribute("data-state", 'inactive')
            const theme = toggleTheme.getAttribute("data-theme")
            const isDarkTheme_ = theme === "dark";
            docElement.classList[isDarkTheme_ ? "add" : "remove"]("dark")
            localStorage.setItem("theme", `${theme}`);
            toggleTheme.setAttribute("data-state", 'active')
            dispatchCustomEvent(document.documentElement, "theme-changed", {
                theme: isDarkTheme_ ? "dark" : "light"
            })
        })
    }
}

