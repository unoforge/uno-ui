export type SeoType = {
    ogImage: {
        src: string;
        alt: string;
    };
    keywords: string;
    title: string;
    description: string;
};

export type SidebarItem = {
    title: string;
    path: string;
    description: string;
    keywords: string;
    state?: "updated" | "draft" | "new" | "none" | "wip"
}
type SidebarGroupItems = {
    label: string;
    items: SidebarItem[];
}

export type SidebarGroupCat = {
    name: string;
    items: SidebarGroupItems[];
}


export type BlockItem = {
    key: string,
    title: string,
    preview: string,
    code: {
        html: string,
        astro?:string,
        laravel?: string
    }
}
export type BlockComponent = {
    name: string,
    title: string,
    description: string,
    items: BlockItem[]
}

export type UiCardProps = {
    href: string;
    title: string;
    description: string;
    icon: string;
    iconDark?:string
}

export type CornerRadius = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
export type BtnSizeVariant = "xs" | "sm" | "md" | "lg" | "xl" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl"
export type UiSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
export type VariantIntent = "primary" | "secondary" | "accent" | "info" | "warning" | "success" | "danger" | "gray" | "neutral"
export type UiVariant = "outline" | "soft" | "subtle" | "solid"
export type SupportedLanguage = "html" | "css" | "js" | "ts" | "vue"
export type ComponentCode = Record<string, { lang: SupportedLanguage, name: string, code: string, props?: any }>