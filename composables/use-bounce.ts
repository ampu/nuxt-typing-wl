const BOUNCE_ANIMATION_TIMEOUT = 600

export const useBounce = () => {
  const [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ] = useActive(true)

  watchEffect((onCleanup) => {
    const timeoutId = setTimeout(deactivate, BOUNCE_ANIMATION_TIMEOUT)
    onCleanup(() => {
      clearTimeout(timeoutId)
    })
  })

  return [
    isActive,
    activate,
    deactivate,
    toggleActive,
  ]
}
