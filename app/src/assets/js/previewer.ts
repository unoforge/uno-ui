import { $, setAttributes } from "@flexilla/utilities"

export const uiPreviewer = () => {

    const previewSettingBox = $("[data-box-preview-settings]")
    if (previewSettingBox) {
        let leaveTimeout: number | null = null;
        const trigger = $("[data-theme-setting-preview]");
        const settingBox = $("[data-box-setting-preview]");

        previewSettingBox.addEventListener('mouseenter', () => {
            if (leaveTimeout !== null) {
                clearTimeout(leaveTimeout);
                leaveTimeout = null;
            }
            previewSettingBox.dataset.hovered = 'true';
        });

        previewSettingBox.addEventListener('mouseleave', () => {
            leaveTimeout = window.setTimeout(() => {
                setAttributes(settingBox!, {
                    "data-state": "close"
                });
                previewSettingBox.dataset.hovered = 'false';
                leaveTimeout = null;
            }, 3000);
        });


        if (trigger && settingBox) {
            const toggleBox = () => {
                const isOpened = settingBox.getAttribute("data-state") === "open";
                setAttributes(settingBox, {
                    "data-state": isOpened ? "close" : "open",
                });
            };
            trigger.addEventListener("click", toggleBox);
        }
    }
}