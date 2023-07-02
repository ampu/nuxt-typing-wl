import {vFocus} from '~/directives/v-focus'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive(vFocus.name, vFocus.hooks)
})
