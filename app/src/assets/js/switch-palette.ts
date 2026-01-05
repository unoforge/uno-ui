import { $, $$, dispatchCustomEvent } from "@flexilla/utilities"


export const initSwitchPalette = () => {
    const paletteContainer = $('[data-palette-container]')

    if (paletteContainer instanceof HTMLElement) {
        const palettes = $$("[data-palette-color]", paletteContainer)


        const initPalette = () => {
            const activeItem = $('[aria-checked="true"]', paletteContainer)
            if (activeItem instanceof HTMLElement) {
                activeItem.setAttribute('tabindex', '-1')
                activeItem.setAttribute("aria-checked", "false")
            }

            const currentPalette = document.documentElement.getAttribute("data-palette")
            const current = $(`[data-palette-color][id=${currentPalette}]`, paletteContainer)
            if (current) {
                current.setAttribute('aria-checked', 'true');
                current.setAttribute('tabindex', '0');
            }

        }


        initPalette()
        for (const paletteBtn of palettes) {
            paletteBtn.addEventListener("click", e => {
                e.preventDefault()
                const name = paletteBtn.getAttribute("id")
                document.documentElement.setAttribute("data-palette", `${name}`)
                const activeItem = $('[aria-checked="true"]', paletteContainer)

                if (activeItem instanceof HTMLElement) {
                    activeItem.setAttribute('tabindex', '-1')
                    activeItem.setAttribute("aria-checked", "false")
                }
                paletteBtn.setAttribute('aria-checked', 'true');
                paletteBtn.setAttribute('tabindex', '0');
                localStorage.setItem("palette", `${name}`);

                dispatchCustomEvent(document.documentElement, "palette-changed", {
                    palette: name
                })

            })
        }

    }
}