<template>
  <div class="bg-[#F7F3EC] relative overflow-hidden">
    <!-- ==================== AGENDA ARICA ==================== -->
    <section
      id="agenda-arica"
      class="py-32 md:py-48 relative border-t border-[#C96B35]/10"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#C96B35]/8 to-transparent pointer-events-none"
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
              class="inline-block py-1.5 px-5 rounded-full bg-[#C96B35]/12 border border-[#C96B35]/40 text-[#C96B35] font-mono font-bold text-xs tracking-widest uppercase mb-6"
            >
              11 al 13 de junio
            </span>
            <h2
              class="font-orbitron text-2xl md:text-4xl lg:text-5xl font-black text-[#0D1535]"
            >
              AGENDA <span class="text-[#C96B35]">ARICA</span>
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
            class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C96B35]/50 to-transparent md:-translate-x-1/2"
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
                  class="group relative p-6 xl:p-8 bg-white rounded-2xl border border-[#C96B35]/10 hover:border-[#C96B35]/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(201,107,53,0.08)] hover:-translate-y-1"
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
                    class="font-orbitron text-xl font-bold text-[#0D1535] mb-3 group-hover:text-[#C96B35] transition-colors leading-tight"
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="font-inter text-sm md:text-base font-light text-slate-600 leading-relaxed"
                  >
                    {{ item.desc }}
                  </p>
                  <router-link
                    v-if="item.button.label"
                    :to="item.button.href"
                    rel="noreferrer"
                    class="mt-4 inline-block px-4 py-2 bg-[#C96B35] text-white font-bold rounded hover:bg-[#E8A067] hover:text-[#0D1535] transition-colors"
                  >
                    {{ item.button.label }}
                  </router-link>
                </div>
              </div>

              <!-- Center Dot -->
              <div
                class="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white border-2 border-[#C96B35]/40 z-10 shadow-[0_0_10px_rgba(201,107,53,0.3)]"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-[#C96B35]" />
              </div>

              <!-- Time -->
              <div
                class="flex-1 hidden md:block"
                :class="
                  index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                "
              >
                <span class="font-mono text-2xl font-bold text-[#C96B35]">{{
                  item.time
                }}</span>
              </div>
              <div class="absolute left-14 -top-1 md:hidden">
                <span class="font-mono text-sm font-bold text-[#C96B35]">{{
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
        class="absolute inset-0 bg-gradient-to-tl from-[#4E8FCC]/8 to-transparent pointer-events-none"
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
              class="inline-block py-1.5 px-5 rounded-full bg-[#0B0F1A]/50 border border-[#38BDF8]/30 text-[#38BDF8] font-mono font-bold text-xs tracking-widest uppercase mb-6"
            >
              16 al 17 de junio
            </span>
            <h2
              class="font-orbitron text-2xl md:text-4xl lg:text-5xl font-black text-[#0D1535]"
            >
              AGENDA <span class="text-[#4E8FCC]">IQUIQUE</span>
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
            class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4E8FCC]/50 to-transparent md:-translate-x-1/2"
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
                  class="group relative p-6 xl:p-8 bg-white rounded-2xl border border-[#4E8FCC]/10 hover:border-[#4E8FCC]/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(78,143,204,0.08)] hover:-translate-y-1"
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
                    class="font-orbitron text-xl font-bold text-[#0D1535] mb-3 group-hover:text-[#4E8FCC] transition-colors leading-tight"
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="font-inter text-sm md:text-base font-light text-slate-600 leading-relaxed"
                  >
                    {{ item.desc }}
                  </p>
                  <router-link
                    v-if="item.button.label"
                    :to="item.button.href"
                    class="mt-4 inline-block px-4 py-2 bg-[#4E8FCC] text-white font-bold pointer-events-auto rounded hover:bg-[#4E8FCC]/80 transition-colors"
                  >
                    {{ item.button.label }}
                  </router-link>
                </div>
              </div>

              <!-- Center Dot -->
              <div
                class="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white border-2 border-[#4E8FCC]/40 z-10 shadow-[0_0_10px_rgba(78,143,204,0.3)]"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              </div>

              <!-- Time -->
              <div
                class="flex-1 hidden md:block"
                :class="
                  index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                "
              >
                <span class="font-mono text-2xl font-bold text-[#38BDF8]">{{
                  item.time
                }}</span>
              </div>
              <div class="absolute left-14 -top-1 md:hidden">
                <span class="font-mono text-sm font-bold text-[#38BDF8]">{{
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
    button: { label: "", href: "" },
  },
  {
    time: "12 JUN",
    title: "El Gran Encuentro del Desierto 2026",
    desc: "Charlas magistrales y paneles sobre agricultura de próxima generación, logística del desierto y ecosistemas de innovación.",
    type: "agro",
    button: { label: "Reserva ahora", href: "/registro-arica" },
  },
  {
    time: "13 JUN AM",
    title: "Workshop: El futuro desde el desierto",
    desc: "Un espacio de trabajo con líderes y expertos para proyectar acciones concretas para el territorio.",
    type: "tech",
    button: { label: "", href: "" },
  },
  {
    time: "13 JUN PM",
    title: "Fiesta oficial GED",
    desc: "Cierre social y celebración del encuentro.",
    type: "social",
    button: { label: "", href: "" },
  },
];

const iquiqueAgenda = [
  {
    time: "16 JUN AM",
    title: "Charlas magistrales: espacio, minería y ecosistemas",
    desc: "Una jornada de visión global y conversación estratégica.",
    type: "tech",
    button: { label: "Reserva ahora", href: "/registro-iquique" },
  },
  {
    time: "16 JUN PM",
    title: "Taller universitario NASA",
    desc: "Una experiencia formativa para universidades y emprendedores.",
    type: "tech",
    button: { label: "", href: "" },
  },
  {
    time: "17 JUN",
    title: "Visitas en terreno",
    desc: "Recorridos por el desierto para conocer desarrollos sostenibles y agrícolas de nueva generación.",
    type: "agro",
    button: { label: "", href: "" },
  },
];
</script>
