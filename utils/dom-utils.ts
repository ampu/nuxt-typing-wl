export const scrollIntoViewIfNeeded = (element?: Element) => {
  if (!element) {
    return false
  }
  const clientRect = element.getBoundingClientRect()
  if (clientRect.top < 0 || clientRect.bottom >= window.innerHeight) {
    const centerDifference = {
      left: window.innerWidth > clientRect.width ? ((window.innerWidth - clientRect.width) / 2) : 0,
      top: window.innerHeight > clientRect.height ? ((window.innerHeight - clientRect.height) / 2) : 0,
    }
    window.scroll({
      left: window.scrollX + clientRect.left - centerDifference.left,
      top: window.scrollY + clientRect.top - centerDifference.top,
    })
  }
  return true
}

export const scrollIntoViewByNavigationId = (id: string) => {
  const selector = `[data-navigation-id="${id.replace(/"/g, `\\"`)}"]`
  const element = document.querySelector(selector) ?? undefined
  return scrollIntoViewIfNeeded(element)
}
