import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(createVuetify({
    ssr: true,
    components,
    directives,
  }))
})
