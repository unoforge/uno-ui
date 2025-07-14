import { OffCanvas, Popover, Tabs, Modal } from "@flexilla/flexilla"

export const initCommonScript = () => {
    Tabs.autoInit("[data-ui-tabs]")
    Modal.autoInit()
    Tabs.autoInit('[data-tabs]')
    OffCanvas.autoInit('[data-ui-offcanvas]')
    Popover.autoInit("[data-app-popover]")
}