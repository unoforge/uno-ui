import { createCssVariablesTheme } from "shiki"

export const cssVariables = createCssVariablesTheme({
  variablePrefix: '--astro-code-',
  variableDefaults: {},
})