import { Dropdown, Tabs } from "@flexilla/flexilla";
import { $, $$ } from "@flexilla/utilities";


const setupBlock = (block: HTMLElement) => {
    const responsiveBoxToggler = $("[data-responsive-toggler]", block);
    
    new Tabs(block, {
        onChangeTab({ currentPanel }) {
            const value = currentPanel?.getAttribute("id");
            if (value === "codebox") {
                responsiveBoxToggler?.setAttribute("data-state", "hidden");
            }
            else {
                responsiveBoxToggler?.setAttribute("data-state", "visible");
            }
        },
    });
    const previewBox = $("[data-tab-panel][id=previewbox]", block);
    const codeBox = $("[data-tab-panel][id=codebox]", block)
    const sizePreviewTriggers = $$("[data-preview-size-trigger]", responsiveBoxToggler!);
    


    const updateSizeTriggerState = (currentTarget: string) => {
        for (const sizeTrigger of sizePreviewTriggers) {
            if (sizeTrigger.getAttribute("data-target") === currentTarget) sizeTrigger.setAttribute("data-state", "active");
            else sizeTrigger.setAttribute("data-state", "inactive");
        }
    };
    for (const sizeTrigger of sizePreviewTriggers) {
        sizeTrigger.addEventListener("click", () => {
            const id = `${sizeTrigger.getAttribute("data-target")}`;
            updateSizeTriggerState(id);
            previewBox?.setAttribute("data-size", id);
        });
    }

    const triggerSnippet = $("[data-dropdown-trigger][data-dropdown-id]", block)

    const snipetDrop = $(`[data-techno-snippet-drop][id="${triggerSnippet?.getAttribute("data-dropdown-id")}"]`)

    if (snipetDrop instanceof HTMLElement) {
        const techTriggers = $$("[data-trigger-tech]", snipetDrop)
        const panelCodes = $$("[data-code-block]", codeBox!)
        const hideAllCodePanel = (panel: string) => {
            for (const panelCode of panelCodes) {
                if (panelCode.getAttribute("id") === panel) {
                    panelCode.setAttribute("data-state", "active")
                    panelCode.hidden = false
                }
                else {
                    panelCode.setAttribute("data-state", "hidden")
                    panelCode.hidden = true
                }
            }
        }

        const setIcon = (src: string) => {
            const img = $("[data-img]", triggerSnippet!) as HTMLImageElement
            img.src = src
        }
        for (const trigger of techTriggers) {
            trigger.addEventListener("click", () => {
                const id = trigger.getAttribute("data-target")
                hideAllCodePanel(id!)
                const src = ($("[data-src-image]", trigger) as HTMLImageElement).src
                setIcon(src)
            })
        }
    }
}

export const initBlockCode = () => {
    Dropdown.autoInit("[data-techno-snippet-drop]")
    const blocks = $$("[data-ui-preview-block]");
    for (const block of blocks) {
        setupBlock(block)
    }
};
