import type { ComponentCode } from "@/types/index";

export const codeDropdowns: ComponentCode = {
    'dropdown/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<button
  data-dropdown-trigger
  data-dropdown-id="dropdown-1"
  class="btn btn-sm rd-md btn-soft btn-soft-gray b b-border-light gap-x2 group"
>
  User Setting
  <span
    aria-hidden="true"
    class="flex i-ph-caret-down ease-linear duration-200 group-aria-expanded-rotate-180"
  ></span>
</button>
<div
  role="list"
  id="dropdown-1"
  data-drop-down
  class="ui-popper z-20 op0 invisible translate-y-3 fx-open-op100 fx-open-visible fx-open-translate-y-0 w-54 text-sm bg-bg-subtle b b-border/50 flex flex-col overflow-hidden text-fg ease-linear transition-transform 
  [--dropdown-padding:var(--padding-1)] [--dropdown-radius:var(--global-main-radius)] rounded-[--dropdown-radius]"
>
  <div
    class="dropdown-content p-[--dropdown-padding] text-left gap-0.5"
  >
    <a
      href="#link"
      aria-label="some alt text for link"
      class="[--mr-icon:0.25rem] group relative select-none dropdown-item-base dropdown-item-grid items-center text-left dropdown-item-slot dropdown-item-icon dropdown-item-label dropdown-item-force-color cursor-default text-base/6 sm:text-sm/6 text-fg focus:outline-primary hover-text-fg-title focus-bg-bg-muted fx-focus-active-bg-bg-muted hover-bg-bg-muted"
    >
      <span slot="icon" data-slot="icon" class="size-5 flex items-center mr-[--mr-icon]">
        <span aria-hidden="true" class="text-lg flex i-ph-user"></span>
      </span>
      <span class="col-start-2 text-left">Edit Profile</span>
    </a>
    <a
      href="#link"
      aria-label="some alt text for link"
      class="[--mr-icon:0.25rem] group relative select-none dropdown-item-base dropdown-item-grid items-center text-left dropdown-item-slot dropdown-item-icon dropdown-item-label dropdown-item-force-color cursor-default text-base/6 sm:text-sm/6 text-fg focus:outline-primary hover-text-fg-title focus-bg-bg-muted fx-focus-active-bg-bg-muted hover-bg-bg-muted"
    >
      <span slot="icon" data-slot="icon" class="size-5 flex items-center mr-[--mr-icon]">
        <span aria-hidden="true" class="text-lg flex i-ph-gear"></span>
      </span>
      <span class="col-start-2 text-left">Setting</span>
    </a>
    <a
      href="#link"
      aria-label="some alt text for link"
      class="[--mr-icon:0.25rem] group relative select-none dropdown-item-base dropdown-item-grid items-center text-left dropdown-item-slot dropdown-item-icon dropdown-item-label dropdown-item-force-color cursor-default text-base/6 sm:text-sm/6 text-fg focus:outline-primary hover-text-fg-title focus-bg-bg-muted fx-focus-active-bg-bg-muted hover-bg-bg-muted"
    >
      <span slot="icon" data-slot="icon" class="size-5 flex items-center mr-[--mr-icon]">
        <span aria-hidden="true" class="text-lg flex i-ph-invoice"></span>
      </span>
      <span class="col-start-2 text-left">Billing</span>
    </a>
  </div>
</div>`
    },
}