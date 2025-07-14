import type { ComponentCode } from "@/types/index";

export const codeInputs: ComponentCode = {
    'input/Leading':{
        lang:"html",
        name:"index.html", 
        code:`
<form class="space-y-4 w-full text-fg">
    <div class="relative">
        <input type="text" placeholder="Your email here" class="ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg text-fg ps9 rd-md">
        <span aria-hidden="true" class="absolute left-3 h-full flex items-center top-0 text-fg pointer-events-none">
            <span class="flex text-lg i-ph-user"></span>
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg text-fg ps11 rd-md">
        <span aria-hidden="true" class="absolute text-sm left-3 h-full flex items-center top-0 text-fg pointer-events-none">
            CDF
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg text-fg ps16 rd-md">
        <span aria-hidden="true" class="absolute text-sm left-3 h-full flex items-center top-0 text-fg pointer-events-none">
            https://
        </span>
    </div>
    <div class="flex">
        <span aria-hidden="true" class="px3 flex items-center text-fg form-input-gray rd-l-md b-y b-l b-border-strong/90 pointer-events-none">
            <span class="flex text-lg i-ph-user"></span>
        </span>
        <input type="text" placeholder="Your email here" class="ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg text-fg rd-r-md">
    </div>
</form>`
    },
    'input/Trailing':{
        lang:"html",
        name:"index.html", 
        code:`
<form action="" class="space-y-4 w-full text-fg">
    <div class="relative">
        <input type="search" placeholder="Start tapping..." class="ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg rd-lg text-fg">
        <span aria-hidden="true" class="absolute right-3 hfull flex items-center top-0 text-fg pointer-events-none">
            <span aria-hidden="true" class="flex i-ph-magnifying-glass text-lg"></span>                                                  
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="pe11 ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg rd-lg text-fg">
        <span aria-hidden="true" class="absolute text-sm right-3 hfull flex items-center top-0 text-fg pointer-events-none">
            CDF                         
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="pe24 ui-form-base ui-form-input ui-form-input-md b b-border-strong/90 bg-bg rd-lg text-fg">
        <span aria-hidden="true" class="absolute text-sm right-3 hfull flex items-center top-0 text-fg pointer-events-none">
            @gmail.com                         
        </span>
    </div>
    <div class="flex">
        <input type="text" placeholder="Your email here" class="ui-form-base ui-form-input ui-form-input-md bg-bg b b-border-strong/90 rd-l-lg text-fg">
        <span aria-hidden="true" class="p3 flex items-center text-fg bg-bg-surface rd-r-md b-y b-r b-border-strong/90 pointer-events-none">
            <span aria-hidden="true" class="flex i-ph-envelope-open text-lg"></span>                        
        </span>
    </div>
</form>`
    },
}