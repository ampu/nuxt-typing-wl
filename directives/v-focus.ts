export const vFocus = {
  name: `focus`,
  hooks: {
    mounted(el: HTMLElement) {
      el.focus()
    },
  },
}
