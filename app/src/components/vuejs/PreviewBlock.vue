<script setup lang="ts">
import { ref} from "vue";

const props = defineProps<{ url: string }>();

const frameIsLoading = ref(true);


const setFrameIsLoading = (value: boolean) => {
    frameIsLoading.value = value;
};
</script>

<template>
    <iframe loading="lazy" :src="props.url" @load="setFrameIsLoading(false)" 
        :class="[
            'w-full h-full preview-block bg-bg duration-300 ease-linear lg-group-data-[size=tablet]-w-[778px] lg-group-data-[size=mobile]-w-96 lg-group-data-[screen=maximized]-!wfull',
            frameIsLoading ? 'invisible opacity-0' : 'visible opacity-100'
        ]" />
</template>
