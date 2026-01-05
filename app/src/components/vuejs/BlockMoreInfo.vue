<script setup lang="ts">
import type { AllBlocksItem } from '@/types/index';
import { ref } from 'vue';

const modalShown = ref(false)

const props = defineProps<{
    block: AllBlocksItem
}>()



const showModal = () => {
    modalShown.value = true
}

</script>
<template>
    <button @click="showModal" class="bg-bg-surface shadow b b-border/50 size-8 rd-md flex justify-center items-center">
        <span aria-hidden="true" class="flex i-ph-info text-sm"></span>
    </button>

</template>