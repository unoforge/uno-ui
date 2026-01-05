import { $, $$ } from "@flexilla/utilities"
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



    const sidebarTrigger = $("[data-sidebar-trigger]")
    const sidebar = $("[data-app-sidebar]")
    const overlay = $("[data-sidebar-overlay]")
    const closeBtn = $("[data-close-sidebar]")

    if (sidebarTrigger && sidebar) {

        const toggleSidebar = (action: "open" | "close") => {
            const isOpen = action !== "open"
            sidebar.setAttribute("data-state", isOpen ? "close" : "open")
            overlay?.setAttribute("data-state", isOpen ? "close" : "open")
        }

        const openSidebar = () => {
            toggleSidebar("open")
        }
        const closeSidebar = () => {
            toggleSidebar("close")
        }
        sidebarTrigger.addEventListener("click", openSidebar)

        closeBtn?.addEventListener("click", closeSidebar)
        overlay?.addEventListener("click", closeSidebar)
    }
}
