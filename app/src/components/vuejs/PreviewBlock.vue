<script setup lang="ts">
import { ref, onMounted, onUnmounted, } from "vue";

const props = defineProps<{ url: string }>();


const frameIsLoading = ref(true);
const iframeRef = ref<HTMLIFrameElement | null>(null)

const setFrameIsLoading = (value: boolean) => {
    frameIsLoading.value = value;
};

const changeTheme = (e: Event) => {
    const isDark = (e as CustomEvent).detail.theme === "dark"
   iframeRef.value?.contentWindow?.postMessage(
            { type: "theme", dark: isDark },
            "*"
        )
}

const changePalette = (e: Event) => {
    iframeRef.value?.contentWindow?.postMessage(
        { type: "palette", palette: (e as CustomEvent).detail.palette },
        "*"
    )
}

const handleIframeLoading = () => {
    setFrameIsLoading(false)
}

onMounted(() => {
    document.documentElement.addEventListener("theme-changed", changeTheme)
    document.documentElement.addEventListener("palette-changed", changePalette)
})

onUnmounted(() => {
    document.documentElement.removeEventListener("theme-changed", changeTheme)
    document.documentElement.removeEventListener("palette-changed", changePalette)
})
</script>

<template>
    <div class="w-full h-full duration-300 ease-linear 
    flex items-center justify-center
    ">
        <iframe loading="lazy" ref="iframeRef" :src="props.url" @load="handleIframeLoading" :class="[
            'size-full preview-block lg-group-data-[size=tablet]-w-[778px] lg-group-data-[size=mobile]-w-96',
            'ui-preview-card',
            frameIsLoading ? 'invisible opacity-0' : 'visible opacity-100'
        ]" />
    </div>
</template>
