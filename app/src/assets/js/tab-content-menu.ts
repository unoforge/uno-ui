import { $ } from "@flexilla/utilities";

export const initTabOfContent = () => {
  const tabOfContentMob = $("[data-table-of-content]");
  const trigger = $("[data-trigger-tab-content]");
  if (tabOfContentMob && trigger) {
    const toggleTabOfContent = () => {
      const isOpened = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", `${!isOpened}`);
      tabOfContentMob.setAttribute(
        "data-state",
        `${isOpened ? "close" : "open"}`
      );

      tabOfContentMob.setAttribute("aria-hidden", `${isOpened}`);
      tabOfContentMob.hidden = isOpened;
      document.body.classList[isOpened ? "remove" : "add"]("hidden-scrollbar")
      if (!isOpened) {
        document.addEventListener("click", hideOnClickOutSide);
      } else {
        document.removeEventListener("click", hideOnClickOutSide);
      }
    };
    const hideTabOfContent = () => {
      trigger.setAttribute("aria-expanded", "false");
      tabOfContentMob.setAttribute("data-state", "close");
      tabOfContentMob.setAttribute("aria-hidden", "true");
      tabOfContentMob.hidden = true;
      document.body.classList.remove("hidden-scrollbar")
      document.removeEventListener("click", hideOnClickOutSide);
    };
    const hideOnClickOutSide = (ev: MouseEvent) => {
      if (!trigger.contains(ev.target as Node)) {
        hideTabOfContent();
      }
    };
    trigger.addEventListener("click", toggleTabOfContent);
    tabOfContentMob.addEventListener("click", hideTabOfContent);
  }
}