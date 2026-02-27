<template>
  <section class="py-20 bg-[#fff] border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h3
        class="font-orbitron text-sm uppercase tracking-widest text-black/80 mb-12"
      >
        Organiza & Patrocina
      </h3>
      <div
        class="flex flex-wrap justify-center items-center gap-12 md-gap-24 transition-opacity duration-500"
      >
        <div
          v-for="(sponsor, index) in sponsors"
          :key="index"
          class="group cursor-pointer grayscale-0 hover:grayscale transition-all duration-300 hover:scale-110"
        >
          <img
            :src="sponsor.img"
            :alt="sponsor.name"
            class="w-36 h-36 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Waki from "../assets/waki.png";
import CORFO from "../assets/CORFO.png";
import GORE from "../assets/GORE.png";
import codesser from "../assets/codesser.jpg";
import NASA from "../assets/NASA.png";
import IP from "../assets/logo-IP-Santo-tomas.webp";
import UNAP from "../assets/UNAP.png";
import mikrolab from "../assets/mikrolab.webp";
import ancestral from "../assets/ancestral.png";
import arid from "../assets/Arid.png";
import consorcio from "../assets/CONSORCIO.png";

const sponsors = [
  {
    name: "WakiLabs",
    color: "text-[#FF6B00]",
    img: Waki,
  },
  {
    name: "Consorcio del Desierto",
    color: "text-[#FFC857]",
    img: consorcio,
  },
  {
    name: "CORFO",
    color: "text-[#00F5D4]",
    img: CORFO,
  },
  {
    name: "Gobierno Regional de Arica y Parinacota",
    color: "text-[#3B82F6]",
    img: GORE,
  },
  {
    name: "codesser",
    color: "text-[#3B82F6]",
    img: codesser,
  },
  {
    name: "NASA",
    color: "text-white",
    img: NASA,
  },
  {
    name: "IP CFT Santo Tomás",
    color: "text-[#8B5CF6]",
    img: IP,
  },
  {
    name: "UNAP",
    color: "text-[#10B981]",
    img: UNAP,
  },
  {
    name: "mikrolab",
    color: "text-[#EF4444]",
    img: mikrolab,
  },
  {
    name: "Ancestral Technologies",
    color: "text-[#EF4444]",
    img: ancestral,
  },
  {
    name: "Arid",
    color: "text-[#EF4444]",
    img: arid,
  },
];
</script>
<style scoped>
.md-gap-24 {
  gap: 1rem 6rem !important;
}
</style>
