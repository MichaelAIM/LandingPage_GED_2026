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
const sponsors = [
  {
    name: "WakiLabs",
    color: "text-[#FF6B00]",
    img: "/src/assets/waki.png",
  },
  {
    name: "Consorcio del Desierto",
    color: "text-[#FFC857]",
    img: "/src/assets/CONSORCIO.png",
  },
  {
    name: "CORFO",
    color: "text-[#00F5D4]",
    img: "/src/assets/CORFO.png",
  },
  {
    name: "Gobierno Regional de Arica y Parinacota",
    color: "text-[#3B82F6]",
    img: "/src/assets/GORE.png",
  },
  {
    name: "codesser",
    color: "text-[#3B82F6]",
    img: "/src/assets/codesser.jpg",
  },
  {
    name: "NASA",
    color: "text-white",
    img: "/src/assets/NASA.png",
  },
  {
    name: "IP CFT Santo Tomás",
    color: "text-[#8B5CF6]",
    img: "/src/assets/logo-IP-Santo-tomas.webp",
  },
  {
    name: "UNAP",
    color: "text-[#10B981]",
    img: "/src/assets/UNAP.png",
  },
  {
    name: "mikrolab",
    color: "text-[#EF4444]",
    img: "/src/assets/mikrolab.webp",
  },
  {
    name: "Ancestral Technologies",
    color: "text-[#EF4444]",
    img: "/src/assets/ancestral.png",
  },
  {
    name: "Arid",
    color: "text-[#EF4444]",
    img: "/src/assets/Arid.png",
  },
];
</script>
<style scoped>
.md-gap-24 {
  gap: 1rem 6rem !important;
}
</style>
