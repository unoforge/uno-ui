export const disableTransitionsTemporarily = (callback: () => void) => {
    // 1. Create a style element to inject CSS
    const css = document.createElement("style");
    css.appendChild(
        document.createTextNode("* { transition: none !important; }")
    );
    document.head.appendChild(css);

    // 2. Execute the theme change callback
    if (typeof callback === "function") {
        callback();
    }

    // 3. Force a browser repaint (reflow)
    // Accessing any computed style property forces the browser to evaluate and paint the CSS changes
    window.getComputedStyle(css).opacity;

    // 4. Remove the style element to re-enable transitions
    document.head.removeChild(css);
};