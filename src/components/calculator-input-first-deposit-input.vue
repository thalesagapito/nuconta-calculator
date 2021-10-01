<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    firstDepositAmount: number
  }>(),
  {
    firstDepositAmount: 0,
  },
)

const emit = defineEmits<{
  (e: 'update:firstDepositAmount', value: number): void
}>()

</script>

<template>
  <p>
    first deposit input
  </p>
</template>

<style lang="postcss" scoped>
</style>
