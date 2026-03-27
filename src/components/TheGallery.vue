<template>
  <section id="gallery" class="py-24 bg-[#0B0F1A] relative">
    <div class="max-w-7xl mx-auto px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <span class="inline-block py-1 px-4 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/20 text-[#00F5D4] font-orbitron font-bold text-[10px] tracking-widest uppercase mb-4">
          Versiones Anteriores
        </span>
        <h2 class="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          1º GRAN ENCUENTRO <br class="md:hidden"/> <span class="text-[#00F5D4]">DEL DESIERTO</span>
        </h2>
        <p class="font-inter text-[#E6EAF0]/80 max-w-xl mx-auto text-base">
          Estación Experimental de Canchones, UNAP, Tarapacá. Agosto 2024.
        </p>
      </div>

      <!-- Masonry Grid (CSS columns) -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div
          v-for="(image, i) in images"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 100 } }"
          class="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-6"
        >
          <div class="absolute inset-0 bg-black/40 group-hover:bg-[#FF6B00]/40 transition-colors duration-500 z-10" />
          <img
            :src="image"
            alt="Gallery Item"
            class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <ZoomIn class="text-white w-10 h-10 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ZoomIn } from 'lucide-vue-next'

const images = [
  'https://images.unsplash.com/photo-1645219333264-fb402ac3baa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEZXNlcnQlMjBsYW5kc2NhcGUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3MTU0Mzk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1643711038299-3a4588e2264f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIeWRyb3BvbmljJTIwZmFybSUyMHZlcnRpY2FsfGVufDF8fHx8MTc3MTU0Mzk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1722231518525-d47ef643c410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJzJTIwcm92ZXIlMjBjb25jZXB0fGVufDF8fHx8MTc3MTU0Mzk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1770936994282-8811fb7129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzcxNTQzOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1653910102221-dd399e659aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGdXR1cmlzdGljJTIwZ3JlZW5ob3VzZSUyMGluc2lkZXxlbnwxfHx8fDE3NzE1NDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1682589444348-81617997b52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb2xhciUyMHBhbmVscyUyMGRlc2VydCUyMHN1bnNldHxlbnwxfHx8fDE3NzE1NDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
]
</script>
