import { $, setAttributes } from "@flexilla/utilities";

export function initializeScrollableContainers(scrollableContainerSelector: string) {
    const scrollContainer = $(scrollableContainerSelector)
    if (scrollContainer instanceof HTMLElement) {
        const btnScrollToLeft = $("[data-scroll-to-left]", scrollContainer)
        const btnScrollToRight = $("[data-scroll-to-right]", scrollContainer)
        const scrollBox = $("[data-scrollable]", scrollContainer)

        if (!btnScrollToLeft || !btnScrollToRight || !scrollBox) {
            throw new Error("Unable to initialize scrollable container, missing elements");
        }
        const scrollTo = (direction: "left" | "right") => {
            const scrollAmount = scrollBox.clientWidth;
            scrollBox.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        };

        const updateScrollButtons = () => {
            const hideLeftBtn = scrollBox.scrollLeft <= 0
            const hideRightBtn = scrollBox.scrollLeft >= scrollBox.scrollWidth - scrollBox.clientWidth - 1
            setAttributes(btnScrollToLeft, { 'aria-hidden': `${hideLeftBtn}`, 'data-state': `${hideLeftBtn ? 'invisible' : 'visible'}` })
            setAttributes(btnScrollToRight, { 'aria-hidden': `${hideRightBtn}`, 'data-state': `${hideRightBtn ? 'invisible' : 'visible'}` })
        };

        btnScrollToLeft.addEventListener("click", () => scrollTo("left"));
        btnScrollToRight.addEventListener("click", () => scrollTo("right"));
        scrollBox.addEventListener("scroll", updateScrollButtons);
        window.addEventListener("load", updateScrollButtons);
        updateScrollButtons();
    }
}

