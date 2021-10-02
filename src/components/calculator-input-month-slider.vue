<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { computed } from 'vue-demi'
import { useI18n } from 'vue-i18n'

const MAX_MONTHS = 60

const props = withDefaults(
  defineProps<{
    months: number
  }>(),
  {
    months: 0,
  },
)

const emit = defineEmits<{
  (e: 'update:months', value: number): void
}>()

const { t } = useI18n()

const writableMonths = useVModel(props, 'months', emit)
const sliderPercentage = computed(() => `${Math.floor(props.months / MAX_MONTHS * 100)}%`)
</script>

<template>
  <div class="month-slider-wrapper">
    <span class="for">
      {{ t('for') }}
    </span>

    <span class="n-months">
      {{ t('nMonths', { n: months }) }}
    </span>

    <input
      v-model.number="writableMonths"
      min="1"
      :max="MAX_MONTHS"
      type="range"
      class="slider"
    >
  </div>
</template>

<style lang="postcss" scoped>
.month-slider-wrapper {
  @apply flex flex-col;

  .for {
    @apply text-lg text-gray-300;
  }

  .n-months {
    @apply text-lg text-brand-purple mt-1.5;
  }

  .slider {
    @apply appearance-none mt-8 w-full h-0.5 overflow-visible rounded-sm;
    background: linear-gradient(
      to right,
      theme('colors.brand-purple') 0%,
      theme('colors.brand-purple') v-bind(sliderPercentage),
      theme('colors.gray.200') v-bind(sliderPercentage),
      theme('colors.gray.200') 100%
    );

    &:focus {
      @apply outline-none ring ring-offset-8 ring-offset-gray-100;
    }

    &:active {
      @apply ring-0;
    }

    &::range-lower {
      @apply bg-brand-purple;
    }

    &::range-thumb {
      @apply block appearance-none bg-brand-purple w-4 h-4 border-none rounded-full transition-all duration-150;
      cursor: grab;
    }

    &:active::range-thumb {
      @apply w-6 h-6 ring ring-offset-0;
      cursor: grabbing;
    }
  }
}
</style>
