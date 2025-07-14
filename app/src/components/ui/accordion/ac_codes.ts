import type { ComponentCode } from "@/types/index";

export const acCodes: ComponentCode = {
    'accordion/Default': {
        lang: "html",
        name: 'index.html',
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="">
    <div data-accordion-item data-accordion-value="accordion-1" class="b-b b-b-border">
      <button data-accordion-trigger aria-label="toggle button"
        class="wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg group">
        Is it accessible?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="py2">
          Yes. It adheres to the WAI-ARIA design pattern.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="b-b b-b-border">
      <button data-accordion-trigger aria-label="toggle button"
        class="wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg group">
        Is it unstyled?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="py2">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="b-b b-b-border">
      <button data-accordion-trigger aria-label="toggle button"
        class="wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg group">
        Can it be animated?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="py2">
          Yes! You can use the transition prop to configure the animation.
        </p>
      </div>
    </div>
</div>`},
    'accordion/Solid': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md bg-bg-surface">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear hover-bg-bg-muted rd-md group">
        Is it accessible?
        <span
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md bg-bg-surface">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear hover-bg-bg-muted rd-md group">
        Is it unstyled?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md bg-bg-surface">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear hover-bg-bg-muted rd-md group">
        Can it be animated?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes! You can use the transition prop to configure the animation.
        </p>
      </div>
    </div>
</div>`},
    'accordion/Soft': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1"
      class="rd-xl ui-soft ui-soft-gray">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear rd-xl group">
        Is it accessible?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2"
      class="rd-xl ui-soft ui-soft-gray">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear rd-xl group">
        Is it unstyled?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3"
      class="rd-xl ui-soft ui-soft-gray">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear rd-xl group">
        Can it be animated?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes! You can use the transition prop to configure the animation.
        </p>
      </div>
    </div>
</div>`},
    'accordion/Link': {
        lang: "html",
        name: 'index.html',
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1">
      <button data-accordion-trigger aria-label="toggle button"
        class="pb2 wfull flex justify-between items-center text-fg-subtitle font-medium text-lg hover-underline group">
        Is it accessible?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p>
          Yes. It adheres to the WAI-ARIA design pattern.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2">
      <button data-accordion-trigger aria-label="toggle button"
        class="pb2 wfull flex justify-between items-center text-fg-subtitle font-medium text-lg hover-underline group">
        Is it unstyled?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="">
      <button data-accordion-trigger aria-label="toggle button"
        class="pb2 wfull flex justify-between items-center text-fg-subtitle font-medium text-lg hover-underline group">
        Can it be animated?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p>
          Yes! You can use the transition prop to configure the animation.
        </p>
      </div>
    </div>
</div>`},
    'accordion/Subtle': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1"
      class="rd-xl ui-subtle ui-subtle-gray">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear rd-xl group">
        Is it accessible?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2"
      class="rd-xl ui-subtle ui-subtle-gray">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear rd-xl group">
        Is it unstyled?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3"
      class="rd-xl ui-subtle ui-subtle-gray">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg ease-linear rd-xl group">
        Can it be animated?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes! You can use the transition prop to configure the animation.
        </p>
      </div>
    </div>
</div>`},
    'accordion/Outline': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md b b-border-strong">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg group">
        Is it accessible?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md b b-border-strong">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg group">
        Is it unstyled?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </p>
      </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md b b-border-strong">
      <button data-accordion-trigger aria-label="toggle button"
        class="px4 wfull flex justify-between items-center py2 text-fg-subtitle font-medium text-lg group">
        Can it be animated?
        <span data-trigger-icon
          class="ease-linear duration-300 i-ph-caret-down group-aria-expanded-rotate-180 text-md"></span>
      </button>
      <div data-accordion-content class="text-fg duration-200 ease-linear fx-not-open-h-0  overflow-hidden">
        <p class="p4">
          Yes! You can use the transition prop to configure the animation.
        </p>
      </div>
    </div>
</div>`},
    'accordion/InitScript': {
        lang: "js",
        name: 'script.js',
        code: `  
`}
}