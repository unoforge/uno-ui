<script setup lang="ts">
import { copyToClipboard } from "@helper/copy-to-clipboard";
import { ref } from 'vue';

const copiedState = ref('')
const triggerBoxRef = ref<HTMLButtonElement>();
const handleCopy = () => {
  const parentEl = triggerBoxRef.value?.closest("[data-ui-preview-block]")
  const snippet = parentEl?.querySelector("[data-code-snippet] pre")
  if (snippet instanceof HTMLElement) {
    copyToClipboard({
      snippet,
      onCopy: () => {
        copiedState.value = 'copied'
      },
      onCopyCompleted: () => {
        copiedState.value = ''
      }
    });
  }
};
</script>

<template>
    <button @click="handleCopy" ref="triggerBoxRef" data-copy-code class="bg-bg-surface shadow b b-border/50 size-8 rd-md flex justify-center items-center">
        <span aria-hidden="true" class="flex i-ph-clipboard text-sm"></span>
    </button>
</template>
