import { $$ } from "@flexilla/utilities"
import "./tab-content-menu"
import { Collapse, Tabs, Accordion, Dropdown, Tooltip, CustomRange, OffCanvas, AutoResizeTextArea, Popover } from "@flexilla/flexilla"


export const initdDocsScript = () => {
    OffCanvas.autoInit("[data-ui-offcanvas]")

    const collaspses = $$("[data-fx-collapse]")

    for (const collaspe of collaspses) {
        new Collapse(collaspe, {
            defaultState: "open"
        })
    }

    
    OffCanvas.autoInit()
    Tabs.autoInit('[data-tab-fx-site]')

    Accordion.autoInit('[data-accordion]')
    Dropdown.autoInit('[data-drop-down]')

    Tooltip.autoInit("[data-tooltip]")
    Popover.autoInit("[data-popover]")
    CustomRange.autoInit("[data-custom-range-wrapper]")
    AutoResizeTextArea.autoInit()
}
