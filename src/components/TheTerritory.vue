<template>
  <section id="territory"
    class="relative w-full h-[80vh] min-h-[600px] flex flex-col md:flex-row bg-[#0B0F1A] overflow-hidden">

    <!-- ARICA (Left Side) -->
    <div
      class="relative flex-1 h-full flex flex-col justify-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
      :class="hoveredSide === 'iquique' ? 'md:flex-[0.3] grayscale-[50%]' : hoveredSide === 'arica' ? 'md:flex-[1.7]' : 'md:flex-1'"
      @mouseenter="hoveredSide = 'arica'" @mouseleave="hoveredSide = null">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img src="../assets/tutelares.jpg"
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Arica">
        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-[#FF6B00]/20 mix-blend-multiply" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div class="relative z-10 w-full max-w-lg" :class="hoveredSide === 'iquique' ? 'opacity-30' : 'opacity-100'">
        <span
          class="inline-block py-1 px-3 rounded bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] font-mono text-[10px] uppercase tracking-widest mb-4 backdrop-blur-md">
          La Frontera del Conocimiento
        </span>
        <h2 class="font-orbitron text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg">ARICA</h2>
        <div class="h-1 w-12 bg-[#FF6B00] mb-6 transition-all duration-500 group-hover:w-32" />

        <p class="font-inter text-white/90 text-lg leading-relaxed mb-8 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:hidden group-hover:block"
          :class="hoveredSide === 'arica' ? 'md:block md:opacity-100 md:translate-y-0' : 'md:hidden'">
          Agricultura resiliente, biotecnología aplicada a condiciones extremas, conexión fronteriza ecosistémica y
          patrimonio milenario integral.
        </p>

        <div
          class="flex flex-wrap gap-2 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:hidden group-hover:flex"
          :class="hoveredSide === 'arica' ? 'md:flex md:opacity-100 md:translate-y-0' : 'md:hidden'">
          <span
            class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">#AgTech</span>
          <span
            class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">#Patrimonio</span>
          <span
            class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">#Frontera</span>
        </div>
      </div>
    </div>

    <!-- IQUIQUE (Right Side) -->
    <div
      class="relative flex-1 h-full flex flex-col justify-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
      :class="hoveredSide === 'arica' ? 'md:flex-[0.3] grayscale-[50%]' : hoveredSide === 'iquique' ? 'md:flex-[1.7]' : 'md:flex-1'"
      @mouseenter="hoveredSide = 'iquique'" @mouseleave="hoveredSide = null">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img src="../assets/iquique-desierto.webp"
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          alt="Iquique Port">
        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-[#00F5D4]/20 mix-blend-multiply" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div class="relative z-10 w-full max-w-lg md:ml-auto md:text-right"
        :class="hoveredSide === 'arica' ? 'opacity-30' : 'opacity-100'">
        <div class="flex md:justify-end mb-4">
          <span
            class="inline-block py-1 px-3 rounded bg-[#00F5D4]/20 border border-[#00F5D4]/50 text-[#00F5D4] font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">
            El Nodo Global
          </span>
        </div>
        <h2 class="font-orbitron text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg">IQUIQUE</h2>
        <div class="h-1 w-12 bg-[#00F5D4] mb-6 transition-all duration-500 group-hover:w-32 md:ml-auto" />

        <p class="font-inter text-white/90 text-lg leading-relaxed mb-8 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:hidden group-hover:block"
          :class="hoveredSide === 'iquique' ? 'md:block md:opacity-100 md:translate-y-0' : 'md:hidden'">
          Logística internacional, plataforma de negocios B2B, innovación portuaria, defensa y macrozona franca
          conectada con Asia y el mundo.
        </p>

        <div
          class="flex flex-wrap gap-2 md:justify-end transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 md:hidden group-hover:flex"
          :class="hoveredSide === 'iquique' ? 'md:flex md:opacity-100 md:translate-y-0' : 'md:hidden'">
          <span
            class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">#Logística</span>
          <span
            class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">#ZOFRI</span>
          <span
            class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">#Negocios</span>
        </div>
      </div>
    </div>

    <!-- Central Divider -->
    <div
      class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block z-20 pointer-events-none" />

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredSide = ref<'arica' | 'iquique' | null>(null)
</script>
