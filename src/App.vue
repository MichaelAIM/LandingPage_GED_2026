<template>
  <main
    class="relative min-h-screen bg-[#0B0F1A] text-[#E6EAF0] overflow-x-hidden selection:bg-[#EC4899] selection:text-white"
  >
    <!-- Noise Texture -->
    <div
      class="fixed inset-0 z-50 pointer-events-none opacity-[0.04]"
      :style="noiseStyle"
    />

    <TheNavbar />
    <TheHero />
    <TheAbout />
    <TheTerritory />
    <TheAgenda />
    <TheSpeakers />
    <TheImpact />
    <TheGallery />
    <TheSponsors />
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
const noiseStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
  transform: "translateZ(0)",
};

import TheNavbar from "./components/TheNavbar.vue";
import TheHero from "./components/TheHero.vue";
import TheAbout from "./components/TheAbout.vue";
import TheTerritory from "./components/TheTerritory.vue";
import TheSpeakers from "./components/TheSpeakers.vue";
import TheAgenda from "./components/TheAgenda.vue";
import TheImpact from "./components/TheImpact.vue";
import TheGallery from "./components/TheGallery.vue";
import TheSponsors from "./components/TheSponsors.vue";
import TheFooter from "./components/TheFooter.vue";
</script>
