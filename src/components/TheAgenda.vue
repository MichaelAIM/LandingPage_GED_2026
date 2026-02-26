<template>
  <section
    id="agenda"
    class="py-24 bg-[#fff] relative overflow-hidden min-h-screen"
  >
    <!-- Background Gradients -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#EC4899]/5 to-transparent pointer-events-none transition-opacity duration-1000"
      :style="{ opacity: activeTab === 'arica' ? 1 : 0 }"
    />
    <div
      class="absolute inset-0 bg-gradient-to-bl from-[#A855F7]/5 to-transparent pointer-events-none transition-opacity duration-1000"
      :style="{ opacity: activeTab === 'iquique' ? 1 : 0 }"
    />

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <!-- Header & Tabs -->
      <div class="text-center mb-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="flex justify-center mb-8"
        >
          <div
            class="p-1 rounded-full bg-black/5 border border-black/10 flex relative"
          >
            <!-- Sliding indicator -->
            <div
              class="absolute top-1 bottom-1 rounded-full bg-[#121A2F] transition-all duration-500"
              :style="{
                left: activeTab === 'arica' ? '4px' : '50%',
                width: 'calc(50% - 4px)',
              }"
            />
            <button
              @click="activeTab = 'arica'"
              class="relative z-10 px-8 py-3 rounded-full font-orbitron font-bold text-sm tracking-widest transition-colors duration-300"
              :class="
                activeTab === 'arica'
                  ? 'text-[#EC4899]'
                  : 'text-black/60 hover:text-[#EC4899]'
              "
            >
              ARICA
            </button>
            <button
              @click="activeTab = 'iquique'"
              class="relative z-10 px-8 py-3 rounded-full font-orbitron font-bold text-sm tracking-widest transition-colors duration-300"
              :class="
                activeTab === 'iquique'
                  ? 'text-[#A855F7]'
                  : 'text-black/60 hover:text-[#A855F7]'
              "
            >
              IQUIQUE
            </button>
          </div>
        </div>

        <h2
          class="font-orbitron text-4xl md:text-5xl font-bold text-black/80 mb-4"
        >
          AGENDA
          <span
            class="text-transparent bg-clip-text"
            :style="{
              backgroundImage:
                'linear-gradient(to right, ' + themeColor + ', #F59E0B)',
            }"
          >
            {{ location }}
          </span>
        </h2>

        <div class="flex justify-center gap-6 text-black/80 font-mono text-sm">
          <span class="flex items-center gap-2"
            ><Calendar :size="14" /> {{ date }}</span
          >
          <span class="flex items-center gap-2"
            ><MapPin :size="14" /> {{ venue }}</span
          >
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/60 to-transparent md:-translate-x-1/2"
        />

        <Transition name="agenda-fade" mode="out-in">
          <div :key="activeTab" class="space-y-8">
            <div
              v-for="(item, index) in currentAgenda"
              :key="index"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: { duration: 400, delay: index * 100 },
              }"
              class="flex flex-col md:flex-row gap-8 items-start md:items-center relative"
              :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
            >
              <!-- Content Card -->
              <div class="flex-1 w-full pl-16 md:pl-0">
                <div
                  class="group relative p-6 bg-[#121A2F]/60 backdrop-blur-md rounded-xl border border-black/5 hover:border-black/20 transition-all duration-300 hover:scale-[1.02]"
                  :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'"
                >
                  <div
                    class="absolute top-0 w-1 h-full opacity-50 rounded-l"
                    :class="
                      index % 2 === 0
                        ? 'left-0 md:left-auto md:right-0'
                        : 'left-0'
                    "
                    :style="{
                      background:
                        'linear-gradient(to bottom, transparent, ' +
                        getCategoryColor(item.type) +
                        ', transparent)',
                    }"
                  />
                  <div
                    class="flex items-center gap-2 mb-2"
                    :class="
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    "
                  >
                    <span
                      class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border"
                      :style="{
                        color: getCategoryColor(item.type),
                        borderColor: getCategoryColor(item.type) + '40',
                        backgroundColor: getCategoryColor(item.type) + '10',
                      }"
                    >
                      {{ getCategoryLabel(item.type) }}
                    </span>
                  </div>
                  <h3
                    class="font-orbitron text-xl font-bold text-white/80 mb-2"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="font-inter text-sm text-[#E6EAF0]/60">
                    {{ item.desc }}
                  </p>
                </div>
              </div>

              <!-- Center Dot -->
              <div
                class="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0B0F1A] border-2 border-black/20 z-10 shadow-[0_0_10px_rgba(0,0,0,1)]"
              >
                <div
                  class="w-1.5 h-1.5 rounded-full"
                  :style="{ backgroundColor: themeColor }"
                />
              </div>

              <!-- Time Label Desktop -->
              <div
                class="flex-1 hidden md:block"
                :class="
                  index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                "
              >
                <span class="font-mono text-2xl font-bold text-black/60">{{
                  item.time
                }}</span>
              </div>

              <!-- Time Label Mobile -->
              <div class="absolute left-14 -top-1 md:hidden">
                <span class="font-mono text-sm font-bold text-black/60">{{
                  item.time
                }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Calendar, MapPin } from "lucide-vue-next";

const activeTab = ref<"arica" | "iquique">("arica");

const categories: Record<string, { color: string; label: string }> = {
  agro: { color: "#A3E635", label: "AGRO-LIFE" },
  water: { color: "#06B6D4", label: "HYDRO-TECH" },
  solar: { color: "#F97316", label: "SOLAR-PUNK" },
  terra: { color: "#EF4444", label: "TERRA-FORM" },
  social: { color: "#E6EAF0", label: "COMMUNITY" },
};

const getCategoryColor = (type: string) => categories[type]?.color ?? "#fff";
const getCategoryLabel = (type: string) => categories[type]?.label ?? type;

const aricaAgenda = [
  {
    time: "08:30",
    title: "Registro Sede Central",
    desc: "Acreditación y entrega de kit táctico.",
    type: "social",
  },
  {
    time: "09:30",
    title: "Keynote: Desierto Vivo",
    desc: "Inauguración oficial con autoridades regionales.",
    type: "agro",
  },
  {
    time: "11:00",
    title: "Panel: Agricultura Salina",
    desc: "Adaptación de cultivos a suelos con alta salinidad.",
    type: "water",
  },
  {
    time: "13:00",
    title: "Networking Lunch",
    desc: "Zona gastronómica con productos locales.",
    type: "social",
  },
  {
    time: "15:00",
    title: "Tech-Showcase: Arica",
    desc: "Demostración de startups locales.",
    type: "solar",
  },
];

const iquiqueAgenda = [
  {
    time: "09:00",
    title: "Registro Expansión",
    desc: "Check-in digital y networking inicial.",
    type: "social",
  },
  {
    time: "10:30",
    title: "Keynote: Energía Infinita",
    desc: "El potencial solar del norte grande.",
    type: "solar",
  },
  {
    time: "12:00",
    title: "Workshop: Terraforming",
    desc: "Simulación de condiciones extremas.",
    type: "terra",
  },
  {
    time: "13:30",
    title: "Almuerzo Corporativo",
    desc: "Espacio de conexión con inversores.",
    type: "social",
  },
  {
    time: "15:30",
    title: "Panel: Agua del Aire",
    desc: "Tecnologías de atrapanieblas 2.0.",
    type: "water",
  },
];

const currentAgenda = computed(() =>
  activeTab.value === "arica" ? aricaAgenda : iquiqueAgenda,
);
const themeColor = computed(() =>
  activeTab.value === "arica" ? "#EC4899" : "#A855F7",
);
const location = computed(() =>
  activeTab.value === "arica" ? "ARICA" : "IQUIQUE",
);
const date = computed(() =>
  activeTab.value === "arica" ? "JUN 12, 2026" : "JUN 16, 2026",
);
const venue = computed(() =>
  activeTab.value === "arica" ? "Central de Ferrocarriles" : "Playa Brava",
);
</script>

<style scoped>
.agenda-fade-enter-active,
.agenda-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.agenda-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.agenda-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
