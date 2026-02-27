<template>
  <section id="speakers" class="py-24 bg-[#121A2F] relative overflow-hidden">
    <div
      class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B00]/5 to-transparent pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <h2
            class="font-orbitron text-4xl md:text-5xl font-bold text-white mb-2"
          >
            VISIONARIOS <span class="text-[#FF6B00]">DEL DESIERTO</span>
          </h2>
          <p class="font-inter text-[#E6EAF0]/60 max-w-xl">
            Conoce a las mentes brillantes que están redefiniendo lo posible en
            entornos extremos.
          </p>
        </div>
        <button
          class="flex items-center gap-2 text-[#00F5D4] font-orbitron text-sm uppercase tracking-widest hover:underline decoration-[#00F5D4] underline-offset-4 transition-all"
        >
          Ver todos los speakers <ArrowRight :size="16" />
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(speaker, index) in speakers"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            transition: { duration: 500, delay: index * 100 },
          }"
          class="group relative bg-[#0B0F1A]/50 backdrop-blur-sm border border-white/5 p-6 rounded-3xl hover:border-[#FF6B00]/50 transition-colors duration-300"
        >
          <div class="relative mb-4 mx-auto w-48 h-48">
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6B00] to-[#FFC857] blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            />
            <img
              :src="speaker.image"
              :alt="speaker.name"
              class="relative w-full h-full object-cover rounded-full border-4 border-[#121A2F] group-hover:border-[#FF6B00] transition-colors duration-300 z-10"
            />
          </div>
          <div class="text-center">
            <h3
              class="font-orbitron text-xl font-bold text-white mb-1 group-hover:text-[#FFC857] transition-colors"
            >
              {{ speaker.name }}
            </h3>
            <p class="font-inter text-[#00F5D4] text-sm font-medium mb-2">
              {{ speaker.role }}
            </p>
            <p
              class="font-inter text-[#E6EAF0]/50 text-xs uppercase tracking-wider mb-6"
            >
              {{ speaker.institution }}
            </p>
            <div class="flex justify-center gap-4 mb-6">
              <a
                href="#"
                class="text-[#E6EAF0]/40 hover:text-white transition-colors"
                ><Linkedin :size="18"
              /></a>
              <a
                href="#"
                class="text-[#E6EAF0]/40 hover:text-white transition-colors"
                ><Twitter :size="18"
              /></a>
            </div>
            <button
              class="w-full py-2 rounded-lg border border-white/10 bg-white/5 text-white font-inter text-sm hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300"
            >
              Ver Charla
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Linkedin, Twitter } from "lucide-vue-next";

const speakers = [
  {
    name: "Bruce M. Link, Doctor",
    role: "Director Científico FILMSS 2",
    institution: "Cultivos espaciales y agricultura espacial NASA",
    image: "../assets/Bruce.png",
  },
  {
    name: "Stuart J. Donald, BSc.",
    role: "Vicepresidente Ejecutivo - Director Global de Agricultura.",
    institution: "Grupo Al Dahra.",
    image: "../assets/Stuart.png",
  },
  {
    name: "Sigfredo Fuentes, PhD.",
    role: "Profesor de Agricultura Digital y Ciencias de la Alimentación. ",
    institution:
      "Centro de Excelencia en Plantas para el Espacio del Consejo Australiano de Investigación - Universidad de Melbourne.",
    image: "../assets/Sigfredo.png",
  },
  {
    name: "Pablo Zamora, PhD.",
    role: "Co-founder Not-Co. - Presidente Fundación Chile.",
    institution: "Consejero Banco Estado, Emprendedor Serial.",
    image: "../assets/Pablo.png",
  },
];
</script>
