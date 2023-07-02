import {Ref} from 'vue'

export const useInterval = (
  isActive: Ref<boolean>,
  callback: VoidFunction,
  timeout: number,
) => {
  watchEffect((onCleanup) => {
    if (!isActive.value) {
      return
    }
    const timer = setInterval(callback, timeout)

    onCleanup(() => {
      clearInterval(timer)
    })
  })
}
