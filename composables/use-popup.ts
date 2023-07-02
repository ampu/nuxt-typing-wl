import {Ref} from 'vue'

import {useModal} from '~/composables/use-modal'
import {useKeyDownStack} from '~/composables/use-key-down-stack'
import {MouseButton} from '~/utils/mouse-helpers'

export const usePopup = (onClose: VoidFunction): [Ref<HTMLElement>, (evt: MouseEvent) => void, VoidFunction] => {
  const popupRef = ref()

  const onContainerMouseDown = (evt: MouseEvent) => {
    if (evt.button === MouseButton.PRIMARY) {
      if (!popupRef.value.contains(evt.target)) {
        onClose()
      }
    }
  }

  const onDocumentKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.ESCAPE) {
      evt.preventDefault()
      evt.stopPropagation()
      onClose()
    }
  }

  useModal()
  useKeyDownStack(onDocumentKeyDown)

  return [
    popupRef,
    onContainerMouseDown,
    onClose,
  ]
}
