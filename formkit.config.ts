import "@formkit/themes/genesis"
import { genesisIcons } from "@formkit/icons"
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import '@formkit/pro/genesis'

const pro = createProPlugin('fk-117594c3756', inputs)

export default defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons }
})
