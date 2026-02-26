<template>
  <div class="flex gap-2 md:gap-4 mt-2">
    <div v-for="(value, unit) in timeLeft" :key="unit" class="flex flex-col items-center">
      <span
        class="text-xl md:text-2xl font-orbitron font-bold text-white tracking-tighter tabular-nums drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
      >
        {{ String(value).padStart(2, '0') }}
      </span>
      <span class="text-[8px] uppercase tracking-widest opacity-70" :style="{ color }">
        {{ unit.charAt(0) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown'

const props = defineProps<{
  targetDate: string
  color: string
}>()

const { timeLeft } = useCountdown(props.targetDate)
</script>
