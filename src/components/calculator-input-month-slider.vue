<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    months: number
  }>(),
  {
    months: 12,
  },
)

const emit = defineEmits<{
  (e: 'update:months', value: number): void
}>()

</script>

<template>
  <p>
    month slider
  </p>
</template>

<style lang="postcss" scoped>
</style>
