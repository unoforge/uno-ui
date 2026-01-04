export const demo_home_code = {
    html: `<div class="bg-bg b b-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before-absolute before-content-empty before-inset-1 before-bg-bg-surface/40 before-inner-radius ui-card cp-1 c-rd-2xl pb-8 space-y-6 wfull max-w-sm">
  <div class="p6 md-p7 inner-radius bg-bg b b-border-light shadow-lg shadow-bg-muted/20 relative">
    <div class="relative">
      <span class="rd-xl flex size-10 d-flex-place-center ui-subtle ui-subtle-gray">
        <span class="flex i-ph-briefcase"></span>
      </span>
    </div>
    <h3 class="font-medium text-fg-title text-lg mt2">
      Premium
      <span class="ui-subtle ui-subtle-primary badge-md rd-xl ml1">Most Popular</span>
    </h3>
    <p class="text-fg-muted text-sm mt1">
      Advanced features for growing teams and businesses that need more power.
    </p>
    <div class="flex items-end gap-x1 mt3">
      <span class="flex items-end text-3xl sm-text-4xl lg-text-5xl font-semibold text-fg-title">
        $79
        <span class="pl2 flex text-xl">/mo</span>
      </span>
    </div>
  </div>
  <div class="flex items-center flex-col gap-3 text-center px6 md-px7 relative">
    <button class="btn btn-lg inner-radius wfull justify-center btn-solid btn-solid-primary text-white">
      Choose this plan
    </button>
    <div class="text-fg-muted text-center flex gap-x2 items-center">
      <span class="flex i-ph-arrow-right"></span>
      <a href="#" class="underline underline-offset-2 underline-dashed">
        Or contact sales
      </a>
    </div>
  </div>
  <div class="px6 md-px7 relative">
    <ul class="space-y-2 text-fg">
      <li class="flex items-start gap-x4 rd-3xl">
        <span class="flex min-wmax mt0.5">
          <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
        </span>
        <h3 class="flex-1">Up to 10 team members</h3>
      </li>
      <li class="flex items-start gap-x4 rd-3xl">
        <span class="flex min-wmax mt0.5">
          <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
        </span>
        <h3 class="flex-1">10,000 contacts</h3>
      </li>
      <li class="flex items-start gap-x4 rd-3xl">
        <span class="flex min-wmax mt0.5">
          <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
        </span>
        <h3 class="flex-1">Advanced reporting & analytics</h3>
      </li>
      <li class="flex items-start gap-x4 rd-3xl">
        <span class="flex min-wmax mt0.5">
          <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
        </span>
        <h3 class="flex-1">Automations & workflows</h3>
      </li>
      <li class="flex items-start gap-x4 rd-3xl">
        <span class="flex min-wmax mt0.5">
          <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
        </span>
        <h3 class="flex-1">API access</h3>
      </li>
      <li class="flex items-start gap-x4 rd-3xl">
        <span class="flex min-wmax mt0.5">
          <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
        </span>
        <h3 class="flex-1">Priority support</h3>
      </li>
    </ul>
  </div>
</div>`,
    vue: `<template>
  <div class="bg-bg b b-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before-absolute before-content-empty before-inset-1 before-bg-bg-surface/40 before-inner-radius ui-card cp-1 c-rd-2xl pb-8 space-y-6 wfull max-w-sm">
    <div class="p6 md-p7 inner-radius bg-bg b b-border-light shadow-lg shadow-bg-muted/20 relative">
      <div class="relative">
        <span class="rd-xl flex size-10 d-flex-place-center ui-subtle ui-subtle-gray">
          <span class="flex i-ph-briefcase"></span>
        </span>
      </div>
      <h3 class="font-medium text-fg-title text-lg mt2">
        Premium
        <span class="ui-subtle ui-subtle-primary badge-md rd-xl ml1">Most Popular</span>
      </h3>
      <p class="text-fg-muted text-sm mt1">
        Advanced features for growing teams and businesses that need more power.
      </p>
      <div class="flex items-end gap-x1 mt3">
        <span class="flex items-end text-3xl sm-text-4xl lg-text-5xl font-semibold text-fg-title">
          $79
          <span class="pl2 flex text-xl">/mo</span>
        </span>
      </div>
    </div>
    <div class="flex items-center flex-col gap-3 text-center px6 md-px7 relative">
      <button class="btn btn-lg inner-radius wfull justify-center btn-solid btn-solid-primary text-white">
        Choose this plan
      </button>
      <div class="text-fg-muted text-center flex gap-x2 items-center">
        <span class="flex i-ph-arrow-right"></span>
        <a href="#" class="underline underline-offset-2 underline-dashed">
          Or contact sales
        </a>
      </div>
    </div>
    <div class="px6 md-px7 relative">
      <ul class="space-y-2 text-fg">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-x4 rd-3xl"
        >
          <span class="flex min-wmax mt0.5">
            <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
          </span>
          <h3 class="flex-1">{{ feature }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const features = [
  'Up to 10 team members',
  '10,000 contacts',
  'Advanced reporting & analytics',
  'Automations & workflows',
  'API access',
  'Priority support',
];
</script>`,
    svelte: `<script>
  const features = [
    'Up to 10 team members',
    '10,000 contacts',
    'Advanced reporting & analytics',
    'Automations & workflows',
    'API access',
    'Priority support'
  ];
</script>

<div class="bg-bg b b-border-strong/40 shadow-lg shadow-bg-subtle/50 relative before-absolute before-content-empty before-inset-1 before-bg-bg-surface/40 before-inner-radius ui-card cp-1 c-rd-2xl pb-8 space-y-6 wfull max-w-sm">
  <div class="p6 md-p7 inner-radius bg-bg b b-border-light shadow-lg shadow-bg-muted/20 relative">
    <div class="relative">
      <span class="rd-xl flex size-10 d-flex-place-center ui-subtle ui-subtle-gray">
        <span class="flex i-ph-briefcase"></span>
      </span>
    </div>

    <h3 class="font-medium text-fg-title text-lg mt2">
      Premium
      <span class="ui-subtle ui-subtle-primary badge-md rd-xl ml1">
        Most Popular
      </span>
    </h3>

    <p class="text-fg-muted text-sm mt1">
      Advanced features for growing teams and businesses that need more power.
    </p>

    <div class="flex items-end gap-x1 mt3">
      <span class="flex items-end text-3xl sm-text-4xl lg-text-5xl font-semibold text-fg-title">
        $79
        <span class="pl2 flex text-xl">/mo</span>
      </span>
    </div>
  </div>

  <div class="flex items-center flex-col gap-3 text-center px6 md-px7 relative">
    <button class="btn btn-lg inner-radius wfull justify-center btn-solid btn-solid-primary text-white">
      Choose this plan
    </button>
    <div class="text-fg-muted text-center flex gap-x2 items-center">
      <span class="flex i-ph-arrow-right"></span>
      <a href="#" class="underline underline-offset-2 underline-dashed">
        Or contact sales
      </a>
    </div>
  </div>

  <div class="px6 md-px7 relative">
    <ul class="space-y-2 text-fg">
      {#each features as feature}
        <li class="flex items-start gap-x4 rd-3xl">
          <span class="flex min-wmax mt0.5">
            <span aria-hidden="true" class="flex i-ph-check text-sm"></span>
          </span>
          <h3 class="flex-1">{feature}</h3>
        </li>
      {/each}
    </ul>
  </div>
</div>`
}