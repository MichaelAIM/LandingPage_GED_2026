<template>
  <section class="py-24 bg-[#121A2F] relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] to-transparent pointer-events-none" />
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      :style="{
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }"
    />

    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
        class="mb-16"
      >
        <h2 class="font-orbitron text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">
          Impacto <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFC857]">Real</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group"
          :ref="(el) => setRef(el as HTMLElement, index)"
        >
          <span
            class="font-orbitron text-5xl md:text-6xl font-black mb-2 drop-shadow-lg tabular-nums"
            :class="stat.color"
          >
            {{ stat.prefix }}{{ displayValues[index] }}
          </span>
          <span class="font-inter text-[#E6EAF0]/70 text-sm uppercase tracking-wider font-medium group-hover:text-white transition-colors">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { value: 650, prefix: '+', label: 'Asistentes', color: 'text-[#00F5D4]' },
  { value: 10, prefix: '+', label: 'Días de Actividad', color: 'text-[#FF6B00]' },
  { value: 40, prefix: '', label: 'Expertos Globales', color: 'text-[#FFC857]' },
  { value: 50, prefix: '', label: 'Proyectos Lanzados', color: 'text-[#3B82F6]' },
]

const displayValues = ref(stats.map(() => 0))
const animated = ref(stats.map(() => false))
const els = ref<(HTMLElement | null)[]>(stats.map(() => null))

const setRef = (el: HTMLElement | null, index: number) => {
  els.value[index] = el
}

const animateCounter = (index: number) => {
  if (animated.value[index]) return
  animated.value[index] = true
  const target = stats[index].value
  const duration = 2000
  const start = performance.now()

  const update = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues.value[index] = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = els.value.indexOf(entry.target as HTMLElement)
          if (index !== -1) animateCounter(index)
        }
      })
    },
    { threshold: 0.3 }
  )
  els.value.forEach((el) => el && observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>
