export const useModal = () => {
  onMounted(() => {
    document.body.classList.add(`page-body--modal`);
  });
  onUnmounted(() => {
    document.body.classList.remove(`page-body--modal`);
  })
};
