import type { ComponentCode } from "@/types/index";

export const alertCode: ComponentCode = {
    'alert/Default': {
        lang: "html",
        name: "index.html",
        code: `
<div class="bg-bg-surface rd-md p4">
  <p class="text-fg">
    You can add components to your app using the ou CLI.
  </p>
</div>
<div class="bg-bg-surface rd-md p4 flex items-center gap-4">
  <span class="min-w-max i-ph-info text-fg text-lg"></span>
  <div class="flex flex-1">
    <p class="text-fg">
      You can add components to your app using the ou CLI.
    </p>
  </div>
</div>
<div class="ui-outline ui-outline-gray rd-md p4 flex items-center gap-x4 text-fg">
    <span aria-hidden="true" class="flex i-ph-info text-xl"></span>
    <div class="flex-1 flex">
        <p>
            You can add components to your app using the ou CLI.
        </p>
    </div>
</div>`},
    'alert/WithTitle': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-solid ui-solid-gray rd-md p4">
    <h3 class="font-semibold text-fg-title">
      Alert with title : default
    </h3>
    <p>
      You can add components to your app using the ou CLI.
    </p>
</div>
<div class="ui-solid ui-solid-gray rd-md p4 flex items-start gap-x4">
    <div class="wmax">
      <span aria-hidden="true" class="flex i-ph-info text-xl"></span>
    </div>
    <div class="flex-1">
      <h3 class="font-semibold text-fg-title">
        Alert with title & Icon : default Reverse
      </h3>
      <p>
        You can add components to your app using the ou CLI.
      </p>
    </div>
</div>
<div class="ui-outline ui-outline-gray rd-md p4 flex items-start gap-x4 text-fg">
    <span aria-hidden="true" class="flex i-ph-info text-xl"></span>
    <div class="flex-1 flex flex-col">
      <h3 class="font-semibold text-fg-title">
        Alert with title & Icon : default Reverse
      </h3>
      <p>
        You can add components to your app using the ou CLI.
      </p>
    </div>
</div>`},
    'alert/Soft': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-soft ui-soft-gray rd-md p4">
  <p>You can add components to your app using the ou CLI.</p>
</div>
<div class="ui-soft ui-soft-primary rd-md p4">
  <p>You can add components to your app using the ou CLI.</p>
</div>
<div class="ui-soft ui-soft-primary rd-md p4">
  <h3>With Border</h3>
  <p class="text-fg-primary-light">
    You can add components to your app using the ou CLI.
  </p>
</div>
<div class="ui-soft ui-soft-danger rd-md p4">
  <p class="text-fg-danger-light">
    You can add components to your app using the ou CLI.
  </p>
</div>`
    },
    'alert/Subtle': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-subtle ui-subtle-gray rd-md p4">
  <p>You can add components to your app using the ou CLI.</p>
</div>
<div class="ui-subtle ui-subtle-primary rd-md p4">
  <p>You can add components to your app using the ou CLI.</p>
</div>
<div class="ui-subtle ui-subtle-secondary rd-md p4">
  <p>You can add components to your app using the ou CLI.</p>
</div>
<div class="ui-subtle ui-subtle-danger rd-md p4">
  <p class="text-fg-danger-light">
    You can add components to your app using the ou CLI.
  </p>
</div>`
    },
    'alert/CustomExample1': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-soft ui-soft-gray rd-md p-4 flex items-start gap-x-4 wfull">
  <div class="w-max">
    <span class="flex text-lg i-carbon-warning"></span>
  </div>
  <div class="flex-1 space-y-3">
    <p>The data export you requested is ready!</p>
    <div>
      <button
        class="btn btn-sm btn-flexi btn-flexi-white text-fg-subtitle rd-md"
        aria-label="Trigger Modal Show Data"
      >
        View the Data
      </button>
    </div>
  </div>
</div>`
    },
}