<template>
  <section
    class="relative py-24 px-6 md:px-12 bg-img border-t border-white/5 overflow-hidden"
  >
    <div
      class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#EC4899]/5 to-transparent pointer-events-none"
    />

    <div class="max-w-7xl mx-auto relative z-10 my-16">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
      >
        <div
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <div class="flex items-center gap-2 mb-2">
            <AlertCircle :size="16" class="text-[#EC4899]" />
            <span
              class="text-[#EC4899] font-mono text-xs uppercase tracking-widest"
              >Información Táctica</span
            >
          </div>
          <h2
            class="font-orbitron text-4xl md:text-5xl font-bold text-black leading-tight"
          >
            PROTOCOLOS <br />
            DEL
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#F59E0B]"
              >ENCUENTRO</span
            >
          </h2>
        </div>
        <p
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 500, delay: 200 },
          }"
          class="font-mono text-xs text-black/60 max-w-md text-right hidden md:block bg-gradient-to-br from-transparent to-[#fff]/60 pe-4 ps-44 py-2 rounded-lg"
        >
          // DATOS CRÍTICOS PARA LA SUPERVIVENCIA Y CONFORT DE LOS ASISTENTES.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(card, index) in infoCards"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 400, delay: index * 100 },
          }"
          class="relative p-6 bg-[#121A2F]/60 backdrop-blur-sm border-l-4 rounded-r-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.01]"
          :class="card.border"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="p-3 rounded-lg bg-[#0B0F1A] border border-black/50 group-hover:border-white/70 transition-colors"
            >
              <component :is="card.icon" :class="card.color" :size="24" />
            </div>
            <div>
              <h3
                class="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-[#EC4899] transition-colors"
              >
                {{ card.title }}
              </h3>
              <p class="font-inter text-sm text-[#E6EAF0] leading-relaxed">
                {{ card.desc }}
              </p>
            </div>
          </div>
          <div class="absolute top-0 right-0 p-2">
            <div class="w-2 h-2 bg-black/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  AlertCircle,
  Thermometer,
  Briefcase,
  Bus,
  ShieldCheck,
} from "lucide-vue-next";

const infoCards = [
  {
    icon: Thermometer,
    title: "CLIMA & VESTIMENTA",
    desc: "Temperatura desértica: 28°C día / 12°C noche. Se recomienda capas ligeras, protección solar UV50+ y calzado cerrado para terreno irregular.",
    color: "text-[#F59E0B]",
    border: "border-[#F59E0B]",
  },
  {
    icon: Briefcase,
    title: "KIT DE BIENVENIDA",
    desc: "Recibe tu Smart-Badge NFC y Mochila Táctica en el punto de registro. Acceso digital a presentaciones y networking app.",
    color: "text-[#EC4899]",
    border: "border-[#EC4899]",
  },
  {
    icon: Bus,
    title: "TRANSPORTE OFICIAL",
    desc: "Shuttles gratuitos desde puntos estratégicos de la ciudad cada 30 minutos. Estacionamiento limitado con reserva previa.",
    color: "text-[#00F5D4]",
    border: "border-[#00F5D4]",
  },
  {
    icon: ShieldCheck,
    title: "PROTOCOLOS",
    desc: "Zona libre de plásticos de un solo uso. Estrictos protocolos de bioseguridad y puntos de hidratación inteligente.",
    color: "text-[#A855F7]",
    border: "border-[#A855F7]",
  },
];
</script>

<style scoped>
.bg-img {
  background-image: url("/src/assets/Arica-Central-6-768x512.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 👈 EFECTO PARALLAX */
}
</style>
