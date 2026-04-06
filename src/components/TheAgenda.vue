<template>
  <div class="bg-slate-50 relative overflow-hidden">
    <!-- ==================== AGENDA ARICA ==================== -->
    <section
      id="agenda-arica"
      class="py-32 md:py-48 relative border-t border-black/5"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent pointer-events-none"
      />

      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <!-- Header Arica -->
        <div class="text-center mb-20">
          <div
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="mb-4"
          >
            <span
              class="inline-block py-1.5 px-5 rounded-full bg-[#f928a9]/10 border border-[#f928a9]/30 text-[#f928a9] font-mono font-bold text-xs tracking-widest uppercase mb-6"
            >
              11 al 13 de junio
            </span>
            <h2
              class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-slate-900"
            >
              AGENDA <span class="text-[#f928a9]">ARICA</span>
            </h2>
          </div>
          <div
            class="flex justify-center gap-6 text-slate-500 font-mono text-sm mt-4"
          >
            <span class="flex items-center gap-2">
              <MapPin :size="14" /> Arica y Parinacota
            </span>
          </div>
        </div>

        <!-- Timeline Arica -->
        <div class="relative">
          <div
            class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#f928a9]/40 to-transparent md:-translate-x-1/2"
          />

          <div class="space-y-8">
            <div
              v-for="(item, index) in aricaAgenda"
              :key="'arica-' + index"
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
                  class="group relative p-6 xl:p-8 bg-white rounded-2xl border border-black/5 hover:border-[#f928a9]/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1"
                  :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'"
                >
                  <div
                    class="flex items-center gap-2 mb-4"
                    :class="
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    "
                  >
                    <span
                      class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border bg-white/50"
                      :style="{
                        color: getCategoryColor(item.type),
                        borderColor: getCategoryColor(item.type) + '40',
                      }"
                    >
                      {{ getCategoryLabel(item.type) }}
                    </span>
                  </div>
                  <h3
                    class="font-orbitron text-xl font-bold text-slate-900 mb-3 group-hover:text-[#f928a9] transition-colors leading-tight"
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="font-inter text-sm md:text-base font-light text-slate-600 leading-relaxed"
                  >
                    {{ item.desc }}
                  </p>
                </div>
              </div>

              <!-- Center Dot -->
              <div
                class="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white border-2 border-[#f928a9]/30 z-10 shadow-[0_0_10px_rgba(255,107,0,0.2)]"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-[#f928a9]" />
              </div>

              <!-- Time -->
              <div
                class="flex-1 hidden md:block"
                :class="
                  index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                "
              >
                <span class="font-mono text-2xl font-bold text-[#f928a9]/80">{{
                  item.time
                }}</span>
              </div>
              <div class="absolute left-14 -top-1 md:hidden">
                <span class="font-mono text-sm font-bold text-[#f928a9]/80">{{
                  item.time
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheSpeakers />

    <!-- ==================== AGENDA IQUIQUE ==================== -->
    <section
      id="agenda-iquique"
      class="py-32 md:py-48 relative border-t border-black/5"
    >
      <div
        class="absolute inset-0 bg-gradient-to-tl from-[#00F5D4]/5 to-transparent pointer-events-none"
      />

      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <!-- Header Iquique -->
        <div class="text-center mb-20">
          <div
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="mb-4"
          >
            <span
              class="inline-block py-1.5 px-5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-mono font-bold text-xs tracking-widest uppercase mb-6"
            >
              16 al 17 de junio
            </span>
            <h2
              class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-slate-900"
            >
              AGENDA <span class="text-[#00F5D4]">IQUIQUE</span>
            </h2>
          </div>
          <div
            class="flex justify-center gap-6 text-slate-500 font-mono text-sm mt-4"
          >
            <span class="flex items-center gap-2">
              <MapPin :size="14" /> Tarapacá
            </span>
          </div>
        </div>

        <!-- Timeline Iquique -->
        <div class="relative">
          <div
            class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00F5D4]/40 to-transparent md:-translate-x-1/2"
          />

          <div class="space-y-8">
            <div
              v-for="(item, index) in iquiqueAgenda"
              :key="'iquique-' + index"
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
                  class="group relative p-6 xl:p-8 bg-white rounded-2xl border border-black/5 hover:border-[#00F5D4]/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1"
                  :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'"
                >
                  <div
                    class="flex items-center gap-2 mb-4"
                    :class="
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    "
                  >
                    <span
                      class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border bg-white/50"
                      :style="{
                        color: getCategoryColor(item.type),
                        borderColor: getCategoryColor(item.type) + '40',
                      }"
                    >
                      {{ getCategoryLabel(item.type) }}
                    </span>
                  </div>
                  <h3
                    class="font-orbitron text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00F5D4] transition-colors leading-tight"
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="font-inter text-sm md:text-base font-light text-slate-600 leading-relaxed"
                  >
                    {{ item.desc }}
                  </p>
                </div>
              </div>

              <!-- Center Dot -->
              <div
                class="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white border-2 border-[#00F5D4]/40 z-10 shadow-[0_0_10px_rgba(255,107,0,0.2)]"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
              </div>

              <!-- Time -->
              <div
                class="flex-1 hidden md:block"
                :class="
                  index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                "
              >
                <span class="font-mono text-2xl font-bold text-[#00F5D4]">{{
                  item.time
                }}</span>
              </div>
              <div class="absolute left-14 -top-1 md:hidden">
                <span class="font-mono text-sm font-bold text-[#00F5D4]">{{
                  item.time
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Calendar, MapPin } from "lucide-vue-next";
import TheSpeakers from "./TheSpeakers.vue";

const categories: Record<string, { color: string; label: string }> = {
  agro: { color: "#22C55E", label: "AGRO-LIFE" },
  logistics: { color: "#00F5D4", label: "LOGISTICS" },
  business: { color: "#F87171", label: "BUSINESS" },
  tech: { color: "#f928a9", label: "TECH/DEFENSE" },
  social: { color: "#F7CB02", label: "NETWORKING" },
};

const getCategoryColor = (type: string) => categories[type]?.color ?? "#000";
const getCategoryLabel = (type: string) => categories[type]?.label ?? type;

const aricaAgenda = [
  {
    time: "11 JUN",
    title: "Encuentro privado UAE – Arica y Parinacota",
    desc: "Una instancia de vinculación estratégica para abrir oportunidades de colaboración internacional.",
    type: "business",
  },
  {
    time: "12 JUN",
    title: "El Gran Encuentro del Desierto 2026",
    desc: "Charlas magistrales y paneles sobre agricultura de próxima generación, logística del desierto y ecosistemas de innovación.",
    type: "agro",
  },
  {
    time: "13 JUN AM",
    title: "Workshop: El futuro desde el desierto",
    desc: "Un espacio de trabajo con líderes y expertos para proyectar acciones concretas para el territorio.",
    type: "tech",
  },
  {
    time: "13 JUN PM",
    title: "Fiesta oficial GED",
    desc: "Cierre social y celebración del encuentro.",
    type: "social",
  },
];

const iquiqueAgenda = [
  {
    time: "16 JUN AM",
    title: "Charlas magistrales: espacio, minería y ecosistemas",
    desc: "Una jornada de visión global y conversación estratégica.",
    type: "tech",
  },
  {
    time: "16 JUN PM",
    title: "Taller universitario NASA",
    desc: "Una experiencia formativa para universidades y emprendedores.",
    type: "tech",
  },
  {
    time: "17 JUN",
    title: "Visitas en terreno",
    desc: "Recorridos por el desierto para conocer desarrollos sostenibles y agrícolas de nueva generación.",
    type: "agro",
  },
];
</script>
