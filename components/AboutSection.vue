<template>
  <section class="AboutSection">
    <h1 class="text-h4">
      Измеритель скорости печати
    </h1>

    <p>
      На этом сайте вы сможете измерить свою скорость печати
    </p>

    <div class="buttons">
      <VBtn
        :color="props.error ? undefined : `primary`"
        @click="emit(`next`)"
        :disabled="props.error"
      >
        Измерить скорость печати

        <VTooltip
          v-if="props.error"
          :modelValue="props.error"
          location="bottom"
          activator="parent"
        >
          Произошла ошибка... Попробуйте измерить скорость печати через
          <strong v-text="leftSeconds"/> {{ leftSecondsSuffix }}
        </VTooltip>
      </VBtn>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  error: boolean,
}>()

const emit = defineEmits<{
  (type: `next`): void,
  (type: `exit`): void,
}>()

const [leftSeconds] = useCountdown(computed(() => props.error), MINUTE, () => {
  emit(`exit`)
})
const leftSecondsSuffix = computed(() => formatSuffix(leftSeconds.value, [`секунду`, `секунды`, `секунд`]))
</script>

<style lang="scss">
.AboutSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 50px;
}
</style>
