export const isFile = (name: string) => name.includes(".");

export const getIconVal = (name: string): string => {
  // Define a mapping of names to their corresponding icon values
  const iconMap: Record<string, string> = {
    react: "react.svg",
    unocss: "i-fx-unocss-ico",
    vite: "vite.svg",
    nuxt: "nuxt.svg",
    vue: "vue.svg",
    svelte: "svelte.svg",
    astro: "astrojs.svg",
    html: "html.svg",
    js: "js.svg",
    ts: "ts.svg",
    css: "css.svg",
    laravel: "laravel.svg",
    shell: "shell.svg",
    yarn: "yarn.svg",
    npm: "npm.svg"
  };

  // Return the icon value from the map or empty string if not found
  return iconMap[name] || "";
};