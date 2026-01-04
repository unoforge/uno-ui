import {
  defineConfig,
  presetIcons,
  presetWind3,
} from "unocss";

import { presetUI } from "@unifydev/preset-ui"
import { flexillaPreset } from "@unifydev/flexilla"


export default defineConfig({
  shortcuts: [
    {
      'blured-bg-ui': 'flex absolute inset-0 bg-bg/70 backdrop-blur-sm py',
      'btn-nav-icon': 'flex p1.5 items-center hover-bg-bg-surface rd-lg text-xl duration-200 ease-linear',
      'navbar-ui-states': 'op0 invisible fx-open-ease-linear fx-open-transition-all fx-open-visible fx-open-op100 lg-visible lg-op100 lg-fx-open-transition-none',
      'navbar-ui': 'px4 sm-px8 lg-px0 pt5 xl-pt0 bg-bg xl-!bg-transparent fixed lg-relative top-16 lg-top-0 left-0 z130 xl-z-auto',
      'navbar-ui-h': 'h-[calc(100dvh-4rem)] lg-h-max',
      'fx-site-dropdown': 'invisible fx-open-visible op0 fx-open-op100 transition-opacity duration-200 ease-linear',
      'btn-palette': 'wfull flex flex-col items-center text-center gap-1 ring-2 ring-transparent ring-offset-2 ring-offset-white dark-ring-offset-gray-950 focus-visible-ring-[--palette-main-color] b b-border aria-checked-b-primary600 aria-checked-bg-bg-surface aria-checked-!bg-op50 rd-md outline-0 focus-outline-0 [&[aria-checked=true]>[data-text]]-text-primary600 dark-[&[aria-checked=true]>[data-text]]-text-primary400',
      'palette-token': 'bg-[var(--palette-token)] wfull hfull flex',
      'btn-input-search': 'h9 b b-border-strong rd-lg pl3 pr1.5 w50 hidden md-flex items-center justify-between gap-x2 text-sm hover-b-border-strong hover-!b-op30 hover-bg-bg-surface hover-!bg-op40',
      'sidebar-states': 'invisible lg-visible -translate-x-full transition-all lg-transition-none fx-open-visible fx-open-translate-x-0 lg-translate-x-0 left-0',
      'sidebar-size': 'w11/12 max-w64 lg-max-wnone md-wfull h100dvh md-h-[calc(100dvh-3.5rem)] overflow-hidden',
      'sidebar-position': 'fixed top-0 lg-sticky lg-top-14',
      'sidebar-bg': 'bg-bg  !bg-op60 backdrop-blur-xl lg-backdrop-filter-none lg-!bg-transparent',
      'btn-show-table-content': 'b b-border rd-lg py1.5 px2 flex items-center gap-x1 text-sm hover-bg-bg-surface ease-linear [&[aria-expanded=true]>span]:rotate-180',
      'tab-content-ui': 'fixed top-25 right-4 sm-right-8 xl-sticky xl-top-16 flex flex-col wfull overflow-hidden overflow-y-auto',
      'tab-content-ui-states': 'invisible fx-open-visible op0 translate-y-4 fx-open-translate-y-0 fx-open-op100 xl-op100 xl-visible xl-translate-y-0',
      'tab-content-ui-bg': 'b b-border b-op90 dark-b-op60 bg-bg-surface !bg-op70 backdrop-blur-xl !lg-bg-transparent !lg-b-transparent',
      'mdx-tbody': '[&>tr>td]-px2.5 [&>tr>td]-py1.5 divide-y divide-border00 dark-divide-gray800 [&>tr]-!b-dashed',
      'mdx-thead': 'relative text-sm before-absolute before-inset-0 before-content-empty before-bg-bg-surface before-!bg-op60 before-rd-t-md text-left [&>tr]-relative [&>tr>th]-px2.5 [&>tr>th]-py3 text-fg-subtitle [&>tr>th]-font-medium',
      'box-tab-content': 'rd-lg xl-p0 z40 hmax max-h90 xl-max-h-none xl-h[calc(100dvh-4rem)] w60 xl-wfull',
      'tab-content-animation': "ease-linear duration-20",
      'default-preview-box': 'h32 sm-h56 p1.5 md-p10',
      "box-resize-controls": "fixed top-6 left-1/2 -translate-1/2 z140",
      "ui-preview-card": "group-data-[size=tablet]-b group-data-[size=tablet]-b-border group-data-[size=tablet]-shadow-sm group-data-[size=tablet]-scale-95 group-data-[size=mobile]-scale-90 group-data-[size=mobile]-b group-data-[size=mobile]-b-border"
    }
  ],
  theme: {
    borderRadius: {
      'global-radius': "var(--global-main-radius)"
    }
  },
  presets: [
    presetWind3({
      dark: "class"
    }),
    flexillaPreset(),
    presetUI(),
    presetIcons({
      collections: {
        fx: {
          'unocss-ico': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.86 18.4a5.57 5.57 0 1 1 11.14 0a5.57 5.57 0 0 1-11.14 0m0-12.8A5.57 5.57 0 1 1 24 5.602v5.013a.557.557 0 0 1-.557.557H13.417a.557.557 0 0 1-.557-.557zm-1.72 12.8A5.57 5.57 0 1 1 0 18.4v-5.014a.557.557 0 0 1 .557-.557h10.026a.557.557 0 0 1 .557.557z"/></svg>',
          'list-broken': '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m11 5H4m5 5H4"/></svg>',
          'adobe': '<svg viewBox="0 0 30 26" fill="#E1251B" aria-label="Adobe" height="22"><polygon points="19,0 30,0 30,26"></polygon><polygon points="11.1,0 0,0 0,26"></polygon><polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8"></polygon></svg>',
        },
        //@ts-ignore
        ph: () =>
          import("@iconify-json/ph/icons.json").then((i) => i.default),
        //@ts-ignore
        'simple-icons': () =>
          import("@iconify-json/simple-icons/icons.json").then((i) => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
});