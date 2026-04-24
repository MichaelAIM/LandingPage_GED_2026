<template>
  <section
    class="relative py-24 px-6 md:px-12 bg-[#0D1535] border-t border-white/5 overflow-hidden"
  >
    <div
      class="max-w-7xl mx-auto my-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12"
    >
      <!-- Left: Zone List -->
      <div class="lg:col-span-1 space-y-6">
        <div
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500 } }"
          class="mb-8"
        >
          <span
            class="text-[#FFD447] font-mono text-xs uppercase tracking-widest block mb-2"
            >// Mapa Táctico</span
          >
          <h2 class="font-orbitron text-4xl font-bold text-white mb-4">
            ZONAS DEL <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#C96B35] to-[#4E8FCC]"
              >ENCUENTRO</span
            >
          </h2>
          <p class="font-inter text-[#8A9BB8] text-sm leading-relaxed">
            Navega por las áreas estratégicas diseñadas para maximizar la
            interacción y el aprendizaje.
          </p>
        </div>

        <div class="space-y-4">
          <button
            v-for="zone in zones"
            :key="zone.id"
            @click="activeZone = zone"
            class="w-full text-left p-4 rounded-lg flex items-center gap-4 transition-all duration-300 border hover:translate-x-1"
            :class="
              activeZone.id === zone.id
                ? `bg-[#121A2F] ${zone.border} shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
            "
          >
            <div
              class="p-2 rounded"
              :class="activeZone.id === zone.id ? zone.bg : 'bg-white/5'"
            >
              <component
                :is="zone.icon"
                :size="18"
                :class="
                  activeZone.id === zone.id ? zone.color : 'text-white/40'
                "
              />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4
                  class="font-orbitron text-sm font-bold"
                  :class="
                    activeZone.id === zone.id ? 'text-white' : 'text-white/60'
                  "
                >
                  {{ zone.name }}
                </h4>
                <span
                  v-if="activeZone.id === zone.id"
                  :class="`text-[10px] font-mono ${zone.color} animate-pulse`"
                  >ACTIVE</span
                >
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Right: Map Visualizer -->
      <div
        class="lg:col-span-2 relative h-[500px] rounded-2xl overflow-hidden bg-img"
      >
        <!-- Grid -->
        <div
          class="absolute inset-0 bg-[linear-gradient(rgba(201,107,53,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,107,53,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
        />
        <!-- Radar sweep -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD447]/5 to-transparent animate-scan pointer-events-none"
        />

        <!-- Active Zone Detail -->
        <Transition name="zone-fade" mode="out-in">
          <div
            :key="activeZone.id"
            class="absolute inset-0 flex items-center justify-center p-8 pointer-events-none"
            :class="activeZone.id === '01' ? '-z-10 ' : 'z-20'"
          >
            <div
              class="relative p-8 max-w-md w-full bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl"
            >
              <div
                class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"
              />
              <div
                class="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"
              />
              <div
                class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"
              />
              <div
                class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"
              />

              <div class="flex items-center gap-4 mb-4">
                <div
                  class="p-3 rounded-full border"
                  :class="[activeZone.bg, activeZone.border]"
                >
                  <component
                    :is="activeZone.icon"
                    :size="24"
                    :class="activeZone.color"
                  />
                </div>
                <div>
                  <h3
                    class="font-orbitron text-2xl font-bold text-white tracking-wide"
                  >
                    {{ activeZone.name }}
                  </h3>
                  <span
                    class="font-mono text-xs text-white/40 uppercase tracking-widest"
                    >Sector {{ activeZone.id }}</span
                  >
                </div>
              </div>

              <p class="font-inter text-white/80 text-sm leading-relaxed mb-6">
                {{ activeZone.desc }}
              </p>

              <div
                class="flex items-center gap-4 pt-4 border-t border-white/10"
              >
                <div class="flex items-center gap-2">
                  <Zap :size="14" class="text-[#F59E0B]" />
                  <span class="text-[10px] uppercase text-white/60"
                    >Energía: 100%</span
                  >
                </div>
                <div class="flex items-center gap-2">
                  <Shield :size="14" class="text-[#00F5D4]" />
                  <span class="text-[10px] uppercase text-white/60"
                    >Seguridad: Activa</span
                  >
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Maximize,
  Star,
  Lightbulb,
  Clapperboard,
  Zap,
  Shield,
} from "lucide-vue-next";

const zones = [
  {
    id: "01",
    name: "EVENT LAYOUT",
    desc: "Recorrido inmersivo por las áreas clave del encuentro, desde el Main Stage hasta el Bio-Café.",
    icon: Maximize,
    color: "text-[#C96B35]",
    bg: "bg-[#C96B35]/10",
    border: "border-[#C96B35]",
  },
  {
    id: "02",
    name: "MAIN STAGE",
    desc: "El corazón del encuentro, donde se desarrollarán las charlas magistrales y paneles de discusión.",
    icon: Star,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]",
  },
  {
    id: "03",
    name: "STARTUP STAGE",
    desc: "Espacio dedicado a la innovación y el emprendimiento, con presentaciones de startups y proyectos disruptivos.",
    icon: Lightbulb,
    color: "text-[#FFD447]",
    bg: "bg-[#FFD447]/10",
    border: "border-[#FFD447]",
  },
  {
    id: "04",
    name: "PODCAST STUDIO",
    desc: "Espacio de grabación en vivo para entrevistas y contenido exclusivo.",
    icon: Clapperboard,
    color: "text-[#A855F7]",
    bg: "bg-[#A855F7]/10",
    border: "border-[#A855F7]",
  },
];

const activeZone = ref(zones[0]);
</script>

<style scoped>
.bg-img {
  background-image: url("/src/assets/layoutEvento.png");
  background-size: 100% 100%;
}
.zone-fade-enter-active,
.zone-fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.zone-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.zone-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
