import type { ComponentCode } from "@/types/index"
import { acCodes } from "./accordion/ac_codes"
import { alertCode } from "./alert/alert_code"
import { codeCards } from "./card/codeCard"
import { codeDropdowns } from "./dropdown/code_Dropdown"
import { radioCode } from "./radio/radioCode"
import { popoverCode } from "./popover/popoverCode"
import { tableCode } from "./table/tableCode"
import { tabsCode } from "./tabs/tabsCode"
import { alertDialogCode } from "./alert-dialog/code_AlertDialog"
import { breadcrumbsCode } from "./breadcrumbs/breadc_Code"
import { codeInputs } from "./input/inputCode"
import { slideoverCode } from "./slideover/slideoverCode"

export const allComponentCode: ComponentCode = {
    ...acCodes,
    ...alertCode,
    ...codeCards,
    ...codeDropdowns,
    ...radioCode,
    ...popoverCode,
    ...tableCode,
    ...tabsCode,
    ...alertDialogCode,
    ...breadcrumbsCode,
    ...codeInputs,
    ...slideoverCode
}