import type { ComponentCode } from "@/types/index";

export const popoverCode: ComponentCode = {
    'popover/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<button data-popover-trigger data-popover-id="popover-example" aria-controls="popper"
    class="btn btn-md rd-md btn-white ui-btn-white text-fg-subtitle">
    Show Content
</button>
<div aria-labelledby="popper" data-popover id="popover-example" aria-hidden="true"
    class="u-fx-popper invisible op0 fx-open-visible fx-open-op100 w60 p4 bg-bg-surface rd-md">
    <div class="flex h40 rd bg-bg-muted">

    </div>
</div>`
    },
    
}