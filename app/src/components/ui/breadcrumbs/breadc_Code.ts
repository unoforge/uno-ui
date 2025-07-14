import type { ComponentCode } from "@/types/index";

export const breadcrumbsCode: ComponentCode = {
    'breadcrumbs/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x1.5 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">Home</a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">Navigation</a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5 text-fg-title font-semibold">
            <span aria-current="page">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x1.5 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">Home</a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">Navigation</a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5 text-primary font-semibold">
            <span aria-current="page">Current Page</span>
        </li>
    </ol>
</nav>`},
    'breadcrumbs/Divider':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">
                Home
            </a>
            <span class="select-none pointer-events-none" aria-hidden="true">
                /
            </span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">
                Navigation
            </a>
            <span class="select-none pointer-events-none" aria-hidden="true">
                /
            </span>
        </li>
        <li class="text-fg-title font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle flex items-center gap-x1.5">
                <span aria-hidden="true" class="flex i-carbon-home text-xl"></span>
                Home
            </a>
            <span aria-hidden="true" class="flex i-carbon-arrow-right shrink-0"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle flex items-center gap-x1.5">
                <span aria-hidden="true" class="flex i-carbon-api text-xl"></span>
                Navigation
            </a>
            <span aria-hidden="true" class="flex i-carbon-arrow-right shrink-0"></span>
        </li>
        <li class="flex items-center gap-x1.5 text-fg-title font-semibold">
            <span aria-hidden="true" class="flex i-carbon-worship"></span>
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>`},
    'breadcrumbs/Outline':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs" class="py2 px4 rd-md b b-border-strong">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">
                Home
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#" class="ease-linear hover-text-fg-subtitle">
                Navigation
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="text-fg-title font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs" class="b-y py2 px4 b-border-strong">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle flex items-center gap-x1.5">
                <span aria-hidden="true" class="flex i-carbon-home text-xl"></span>
                Home
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle flex items-center gap-x1.5">
                <span aria-hidden="true" class="flex i-carbon-api text-xl"></span>
                Navigation
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5 text-fg-title font-semibold">
            <span aria-hidden="true" class="flex i-carbon-worship"></span>
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>`},
    'breadcrumbs/CustomIndicator':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle px1.5 pypx b b-border-strong rd-full">
                Home
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle px1.5 pypx b b-border-strong rd-full">
                Navigation
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li
            class="px1.5 pypx rd-full b b-border-strong bg-bg-surface text-fg-title font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle px1.5 pypx b b-border-strong rd-full">
                Home
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle px1.5 pypx b b-border-strong rd-full">
                Navigation
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li
            class="px1.5 pypx rd-full b text-white bg-primary b-primary700 font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x3 text-fg-muted">
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle flex items-center gap-x1.5 px1.5 pypx rd-full bg-bg-surface hover-bg-bg-muted">
                <span aria-hidden="true" class="flex i-carbon-home text-xl"></span>
                Home
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li class="flex items-center gap-x1.5">
            <a href="#"
                class="ease-linear hover-text-fg-subtitle flex items-center gap-x1.5 px1.5 pypx rd-full bg-bg-surface hover-bg-bg-muted">
                <span aria-hidden="true" class="flex i-carbon-api text-xl"></span>
                Navigation
            </a>
            <span aria-hidden="true" class="flex shring-0 i-carbon-chevron-right"></span>
        </li>
        <li
            class="flex items-center gap-x1.5 text-bg font-semibold px1.5 pypx rd-full bg-fg-title">
            <span aria-hidden="true" class="flex i-carbon-worship"></span>
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>`},
}