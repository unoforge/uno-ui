import type { SidebarGroupCat } from "../types";

export const sidebarItems: SidebarGroupCat[] = [
    {
        name: "getting-started",
        items: [
            {
                label: "Getting Started",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/introduction",
                        description: "Introduction to UnoUI component library",
                        keywords: "introduction, getting started, overview, ui components, documentation, unoui, uno ui, unoforge, uno forge, unifyui, unify ui"
                    },
                    {
                        title: "Installation",
                        path: "/docs/installation",
                        description: "Quick setup guide for UI components",
                        keywords: "installation, setup, configuration, package, dependencies, unoui, uno ui, unoforge, uno forge, unifyui, unify ui"
                    },
                    {
                        title: "Framework Guide",
                        path: "/docs/framework-guide",
                        description: "Framework integration guide for components",
                        keywords: "PresetUI QuickStarters, UnoCSS, uno css, presetUI, preset ui, unify, unify ui, astro starter, vite starter, vuejs starter, nuxtjs starter, react starter, laravel starter, unocss starter, unoui, uno ui, unoforge, uno forge, unifyui"
                    }
                ]
            },
            {
                label: "Framework Guide",
                items: [
                    {
                        title: "AstroJS",
                        path: "/docs/framework-guide/astrojs",
                        description: "AstroJS integration guide",
                        keywords: "astrojs, framework integration, astro components, setup guide, unoui, uno ui, unoforge, uno forge, unifyui, unify ui"
                    },
                    {
                        title: "ViteJS",
                        path: "/docs/framework-guide/vitejs",
                        description: "ViteJS integration guide",
                        keywords: "vitejs, vite integration, build tool, setup guide, unoui, uno ui, unoforge, uno forge, unifyui, unify ui"
                    },
                    {
                        title: "Static site",
                        path: "/docs/framework-guide/static",
                        description: "Static site integration guide",
                        keywords: "static site, html, css, vanilla js, integration, unoui, uno ui, unoforge, uno forge, unifyui, unify ui",
                    },
                    {
                        title: "Laravel",
                        path: "/docs/framework-guide/laravel",
                        description: "Laravel integration guide",
                        keywords: "laravel, php, blade templates, framework integration, unoui, uno ui, unoforge, uno forge, unifyui, unify ui",
                        state:"draft"
                    },
                ]
            },
                        {
                label: "Components",
                items: [
                    {
                        title: "Accordion",
                        path: "/components/accordion",
                        description: "Expandable content container.",
                        keywords: "accordion, collapse, expand, toggle"
                    },
                    {
                        title: "Alert",
                        path: "/components/alert",
                        description: "Notification for user.",
                        keywords: "alert, notification, warning, success, error"
                    },
                    {
                        title: "Alert Dialog",
                        path: "/components/alert-dialog",
                        description: "Modal dialog for notification.",
                        keywords: "alert dialog, modal dialog, notification"
                    },
                    {
                        title: "Aspect Ratio",
                        path: "/components/aspect-ratio",
                        description: "Container for maintaining aspect ratio.",
                        keywords: "aspect ratio, responsive"
                    },
                    {
                        title: "Avatar",
                        path: "/components/avatar",
                        description: "Image or icon for user.",
                        keywords: "avatar, image, icon, user"
                    },
                    {
                        title: "Badge",
                        path: "/components/badge",
                        description: "Label or icon for notification.",
                        keywords: "badge, label, icon, notification"
                    },
                    {
                        title: "Breadcrumbs",
                        path: "/components/breadcrumbs",
                        description: "Navigation for user.",
                        keywords: "breadcrumbs, navigation"
                    },
                    {
                        title: "Button",
                        path: "/components/button",
                        description: "Click button for user.",
                        keywords: "button, click"
                    },
                    {
                        title: "Card",
                        path: "/components/card",
                        description: "Content container with background and border.",
                        keywords: "card, container, background, border"
                    },
                    {
                        title: "Checkbox",
                        path: "/components/checkbox",
                        description: "Select multiple options.",
                        keywords: "checkbox, select, multiple"
                    },
                    {
                        title: "Chip",
                        path: "/components/chip",
                        description: "Label or icon for information.",
                        keywords: "chip, label, icon, information"
                    },
                    {
                        title: "Divider",
                        path: "/components/divider",
                        description: "Separator for content.",
                        keywords: "divider, separator, content"
                    },
                    {
                        title: "Dropdown",
                        path: "/components/dropdown",
                        description: "Select one option from a list.",
                        keywords: "dropdown, select, option, list"
                    },
                    {
                        title: "Input",
                        path: "/components/input",
                        description: "Form input for user.",
                        keywords: "input, form, user"
                    },
                    {
                        title: "Kbd",
                        path: "/components/kbd",
                        description: "Keyboard input for user.",
                        keywords: "kbd, keyboard, input"
                    },
                    {
                        title: "Link",
                        path: "/components/link",
                        description: "Link to another page or website.",
                        keywords: "link, page, website"
                    },
                    {
                        title: "Meter",
                        path: "/components/meter",
                        description: "Progress bar for user.",
                        keywords: "meter, progress, bar"
                    },
                    {
                        title: "Pagination",
                        path: "/components/pagination",
                        description: "Navigation for multiple pages.",
                        keywords: "pagination, navigation, pages"
                    },
                    {
                        title: "Popover",
                        path: "/components/popover",
                        description: "Modal dialog for information.",
                        keywords: "popover, modal, information"
                    },
                    {
                        title: "Progress",
                        path: "/components/progress",
                        description: "Progress bar for user.",
                        keywords: "progress, bar, user"
                    },
                    {
                        title: "Radio",
                        path: "/components/radio",
                        description: "Select one option from a list.",
                        keywords: "radio, select, option, list"
                    },
                    {
                        title: "Range",
                        path: "/components/range",
                        description: "Input for selecting a range of values.",
                        keywords: "range, input, values"
                    },
                    {
                        title: "Select",
                        path: "/components/select",
                        description: "Select one option from a list.",
                        keywords: "select, option, list"
                    },
                    {
                        title: "Skeleton",
                        path: "/components/skeleton",
                        description: "Loading animation for content.",
                        keywords: "skeleton, loading, animation, content"
                    },
                    {
                        title: "Slideover",
                        path: "/components/slideover",
                        description: "Modal dialog for information.",
                        keywords: "slideover, modal, information"
                    },
                    {
                        title: "Switch",
                        path: "/components/switch",
                        description: "Toggle for on or off.",
                        keywords: "switch, toggle, on, off"
                    },
                    {
                        title: "Table",
                        path: "/components/table",
                        description: "Table for displaying data.",
                        keywords: "table, data, display"
                    },
                    {
                        title: "Tabs",
                        path: "/components/tabs",
                        description: "Navigation for multiple pages.",
                        keywords: "tabs, navigation, pages"
                    },
                    {
                        title: "Text Area",
                        path: "/components/text-area",
                        description: "Form input for user.",
                        keywords: "text area, form, user"
                    },
                    {
                        title: "Tooltip",
                        path: "/components/tooltip",
                        description: "Information for user on hover.",
                        keywords: "tooltip, information, hover"
                    },
                ]
            },
            {
                label: "Layout",
                items: [
                    {
                        title: "Container",
                        path: "/docs/introduction",
                        description: "",
                        keywords: "",
                        state: "draft"
                    },
                    {
                        title: "Grid",
                        path: "/docs/installation",
                        description: "",
                        keywords: "",
                        state: "draft"
                    },
                ]
            }
        ]
    },
    {
        name: "preset",
        items: [
            {
                label: "Getting Started",
                items: [
                    {
                        title: "Introduction",
                        path: "/preset/introduction",
                        description: "Versatile UI library built on UnoCSS",
                        keywords: "UI Library, preset, presetui, preset ui, unocss, Uno CSS, unify, unifyui, unify ui, unoui, uno ui, unoforge, uno forge"
                    },
                    {
                        title: "Installation",
                        path: "/preset/installation",
                        description: "Quick setup guide for Preset-UI",
                        keywords: "Installation, unifyui, presetui, preset ui, unify, unify ui, unocss, uno css, unoui, uno ui, unoforge, uno forge"
                    }
                ]
            },
            {
                label: "Customization",
                items: [
                    {
                        title: "Configuration",
                        path: "/preset/customization/configuration",
                        description: "Customize UI appearance and themes",
                        keywords: "configuration, configure presetui, unocss, presetui, unifyui, unoui, uno ui, unoforge, uno forge, unify ui"
                    },
                    {
                        title: "Preset Helper",
                        path: "/preset/customization/preset-helper",
                        description: "Streamline UI development with helpers",
                        keywords:"PresetHelper, PresetUI Helper, UNOCSS Preset Helper, unoui, uno ui, unoforge, uno forge, unifyui, unify ui"
                    },
                    {
                        title: "Theme",
                        path: "/preset/customization/theme",
                        description: "A set of ready to use UI themes",
                        keywords: "theme, ui theme, presetui theme, unocss themes"
                    }
                ]
            },
            {
                label: "Utilities",
                items: [
                    {
                        title: "Button",
                        path: "/preset/utilities/button",
                        description: "Button variants and customization",
                        keywords: "Preset UI, UnoCSS, utilities, components, button, button variants, unoui, uno ui, unoforge, uno forge, unifyui, unify ui",
                    },
                    {
                        title: "Form Input",
                        path: "/preset/utilities/form-input",
                        description: "Form input components with customizable styles",
                        keywords: "preset ui, unocss, preset form, unify ui, form, form input, form input variants, form input sizes, unoui, uno ui, unoforge, uno forge, unifyui",
                    },
                    {
                        title: "Common utilities",
                        path: "/preset/utilities/common",
                        description: "Shared component utilities guide",
                        keywords: "PresetUI, UnifyUI, UnoCSS, Components, UI Library, unoui, uno ui, unoforge, uno forge, unifyui, unify ui",
                        state: "wip"
                    },
                    {
                        title: "Display",
                        path: "/preset/utilities/display",
                        description: "",
                        keywords: "",
                        state: "draft",
                    },
                    {
                        title: "Progressbar",
                        path: "/preset/utilities/progressbar",
                        description: "",
                        keywords: "Customizable and semantic progressbar and meter elements, unoui, uno ui, unoforge, uno forge, unifyui, unify ui",
                    },
                    {
                        title: "Switch",
                        path: "/preset/utilities/switch",
                        description: "Customizable CSS-only switch component",
                        keywords: "UnoCSS Switch, UnifyUI Switch, PresetUI Switch, switch component, switch variants, switch sizes, unoui, uno ui, unoforge, uno forge, unifyui, unify ui",
                    }
                ]
            }
        ]
    }
]