import type { ComponentCode } from "@/types/index";

export const slideoverCode: ComponentCode = {
    'slideover/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="flex flex-wrap items-center gap-3">
    <button data-offcanvas-trigger data-target="slide-over-from-left" aria-controls="slide-over-from-left"
        class="btn btn-solid btn-solid-primary rd-lg btn-sm">
        Open from left
    </button>
    <div data-fx-offcanvas data-slideover id="slide-over-from-left" aria-labelledby="slide-over-from-left"
        class="fixed h-dvh w-full max-w-sm -left-full top-0 fx-open:left-0 ease-linear duration-200 p-4 bg-bg-muted flex">
        <div class="size-full border-dashed b bdr-high">

        </div>
    </div>
    <button data-offcanvas-trigger data-target="slide-over-top" aria-controls="slide-over-top"
        class="btn btn-solid btn-solid-primary rd-lg btn-sm">
        Open from top
    </button>
    <div data-fx-offcanvas data-slideover aria-labelledby="slide-over-top" id="slide-over-top"
        class="fixed left-0 w-screen h-64 -top-full ease-linear duration-200 fx-open:top-0 flex p-4 bg-bg-muted">
        <div class="size-full border-dashed b bdr-high">
                
        </div>
    </div>
    <button data-offcanvas-trigger data-target="slide-over-bottom" aria-controls="slide-over-bottom"
        class="btn btn-solid btn-solid-primary rd-lg btn-sm">
        Open from bottom
    </button>
    <div data-fx-offcanvas data-slideover aria-labelledby="slide-over-bottom" id="slide-over-bottom"
        class="fixed left-0 w-screen h-64 -bottom-full ease-linear duration-200 fx-open:bottom-0 flex p-4 bg-bg-muted">
        <div class="size-full border-dashed b bdr-high">

        </div>
    </div>
    <button data-offcanvas-trigger data-target="slide-over-from-right" aria-controls="slide-over-from-right"
        class="btn btn-solid btn-solid-primary rd-lg btn-sm">
        Open from right
    </button>
    <div data-fx-offcanvas data-slideover id="slide-over-from-right" aria-labelledby="slide-over-from-right"
        class="fixed h-dvh w-full max-w-sm -right-full top-0 fx-open:right-0 ease-linear duration-200 p-4 bg-bg-muted flex">
        <div class="size-full border-dashed b bdr-high">

        </div>
    </div>
</div>`},
    'slideover/Overlay':{
        lang:"html",
        name:"index.html", 
        code:`
<div>
    <button data-offcanvas-trigger data-target="slide-over-overlay" aria-controls="slide-over-overlay"
        class="btn btn-solid btn-solid-primary rd-lg  btn-sm">
        Overlay
    </button>
    <div data-fx-offcanvas data-slideover data-offcanvas-backdrop="fixed inset-0 bg-gray-800/80" id="slide-over-overlay" aria-labelledby="slide-over-overlay"
        class="fixed h-dvh w-full max-w-sm -right-full top-0 fx-open:right-0 ease-linear duration-200 p-4 bg-bg-muted flex">
        <div class="size-full border-dashed b bdr-high">

        </div>
    </div>
</div>
<div class="">
    <button data-offcanvas-trigger data-target="slide-over-overlay1" aria-controls="slide-over-overlay1"
        class="btn btn-solid btn-solid-primary rd-lg  btn-sm">
        Overlay with blur
    </button>
    <div data-fx-offcanvas data-slideover data-offcanvas-backdrop="fixed inset-0 backdrop-filter backdrop-blur-xl bg-gray-800/50" id="slide-over-overlay1" aria-labelledby="slide-over-overlay1"
        class="fixed h-dvh w-full max-w-sm -right-full top-0 fx-open:right-0 ease-linear duration-200 p-4 bg-bg-muted flex">
        <div class="size-full border-dashed b bdr-high">
        </div>
    </div>
</div>`},
    
}