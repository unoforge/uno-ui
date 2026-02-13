export type SingleTemplate = {
  coverImage: string
  title: string,
  description: string,
  features: string[],
  previewLink?: string,
  tech: ("astro" | "laravel" | "svelte" | "rasengan" | "nuxt" | "vue" | "html")[],
  source?: string,
  status: "ready" | "wip" | "active-maintenance"
}

export const allTemplates: SingleTemplate[] = [
  {
    coverImage: "/dash-template-view.webp",
    title: "CRM X Dashboard",
    description: `A smart starter kit to kickstart your next Laravel project with a modern frontend and component-driven development flow.`,
    features: ["Modern", "Light and dark mode", "Auth forms", "Dashboard", "Responsive"],
    source: "https://github.com/uno-forge-hub/unoui-laravel",
    tech: ["laravel"],
    status: "active-maintenance"
  },
  {
    coverImage: "",
    title: "Agency Landing Page",
    description: `A simple and clean landing page for your agency.`,
    features: ["Modern", "Light and dark mode", "Responsive"],
    previewLink: "https://inno-agency-rasengan-iota.vercel.app/",
    source: "https://github.com/uno-forge-hub/agency-lading-page-rasengan",
    tech: ["astro", "html", "rasengan"],
    status: "ready"
  }
]