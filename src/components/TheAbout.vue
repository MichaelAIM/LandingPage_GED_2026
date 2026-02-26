<template>
  <section id="about" class="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#0B0F1A] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1600&q=80"
        alt="Background"
        class="w-full h-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-[#0B0F1A]/50" />
    </div>

    <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Left Column -->
      <div>
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="mb-6"
        >
          <span class="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-[#EC4899] font-mono text-xs uppercase tracking-widest mb-4">
            // Nuestra Misión
          </span>
          <h2 class="font-orbitron text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            SOMOS EL
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#A855F7]">NEXO</span>
            DEL FUTURO
          </h2>
          <p class="font-inter text-[#E6EAF0]/70 text-lg leading-relaxed mb-8">
            El Gran Encuentro del Desierto es la plataforma líder en innovación agrotecnológica del hemisferio sur. Nacimos bajo el sol más intenso del mundo para demostrar que la vida puede florecer en cualquier lugar.
          </p>
          <p class="font-inter text-[#E6EAF0]/70 text-lg leading-relaxed">
            Unimos a mentes brillantes de todo el planeta para resolver los desafíos de la agricultura del mañana, hoy.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: 200 + index * 100 } }"
          >
            <component :is="stat.icon" class="mb-2 w-5 h-5" :class="stat.color" />
            <div class="font-orbitron text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
            <div class="font-mono text-[10px] text-white/40 uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Pillars -->
      <div class="relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A855F7]/10 rounded-full blur-3xl pointer-events-none" />
        <div class="relative z-10 space-y-4">
          <div
            v-for="(pillar, index) in pillars"
            :key="index"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500, delay: 400 + index * 100 } }"
            class="group p-6 rounded-xl bg-[#121A2F]/60 border border-white/5 backdrop-blur-sm hover:border-[#EC4899]/50 transition-all duration-300 hover:bg-[#121A2F]/80"
          >
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-[#EC4899]/30 transition-colors">
                <component :is="pillar.icon" class="text-white group-hover:text-[#EC4899] transition-colors" :size="24" />
              </div>
              <div>
                <h3 class="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-[#EC4899] transition-colors">
                  {{ pillar.title }}
                </h3>
                <p class="font-inter text-sm text-[#E6EAF0]/60">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Users, Globe, Zap, Target, Sparkles } from 'lucide-vue-next'

const stats = [
  { label: 'ASISTENTES', value: '5.000+', icon: Users, color: 'text-[#EC4899]' },
  { label: 'PAÍSES', value: '24', icon: Globe, color: 'text-[#A855F7]' },
  { label: 'SPEAKERS', value: '50+', icon: Zap, color: 'text-[#F59E0B]' },
]

const pillars = [
  { title: 'VANGUARDIA', desc: 'Tecnología de punta aplicada a la agricultura en condiciones extremas.', icon: Sparkles },
  { title: 'SOSTENIBILIDAD', desc: 'Soluciones reales para la crisis hídrica y el cambio climático global.', icon: Globe },
  { title: 'CONEXIÓN', desc: 'El punto de encuentro entre startups, inversores y científicos.', icon: Target },
]
</script>
