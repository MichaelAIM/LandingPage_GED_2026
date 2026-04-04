<template>
  <section id="about" class="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#0B0F1A] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1600&q=80" alt="Background"
        class="w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-[#0B0F1A]/50" />
    </div>

    <div class="max-w-7xl mx-auto relative z-10">

      <!-- Top Section: Manifesto -->
      <div class="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Side: Text content -->
        <div v-motion :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }" class="max-w-xl">
          <span
            class="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-[#FF6B00] font-mono text-xs uppercase tracking-widest mb-4">
            // El Manifiesto del GED
          </span>
          <h2 class="font-orbitron text-3xl md:text-5xl font-bold text-white leading-tight mb-6 uppercase">
            Del desierto <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#00F5D4]">a la
              oportunidad:</span>
          </h2>
          <p class="font-inter text-[#E6EAF0]/80 text-lg leading-relaxed mb-6">
            El Gran Encuentro del Desierto nace desde una convicción profunda: el desierto chileno no es un límite, sino
            una oportunidad. Es un territorio que inspira soluciones para los grandes desafíos del presente y del
            futuro, desde la producción sostenible hasta la logística, la innovación y la exploración de nuevos modelos
            de desarrollo.
          </p>
          <p class="font-inter text-[#E6EAF0]/80 text-lg leading-relaxed">
            En esta segunda edición, GED amplía su mirada más allá de la agricultura del desierto e incorpora nuevas
            perspectivas que conectan ciencia, industria, emprendimiento y visión de futuro.
          </p>
        </div>

        <!-- Right Side: Video -->
        <div v-motion :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }" 
          class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <!-- Decorative ambient glow -->
          <div class="absolute -inset-4 bg-gradient-to-tr from-[#FF6B00]/30 to-[#00F5D4]/30 blur-2xl opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none z-0"></div>
          
          <video ref="videoRef" src="../assets/presentacion.mp4" 
            class="relative w-full h-full object-cover z-10 rounded-2xl outline-none" 
            controls playsinline>
          </video>
          
          <!-- Inner border overlay -->
          <div class="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none z-20"></div>
        </div>
      </div>

      <!-- Bottom Section: Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F5D4]/5 rounded-full blur-[100px] pointer-events-none" />

        <div v-for="(pillar, index) in pillars" :key="index" v-motion :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="group p-8 rounded-2xl bg-[#121A2F]/60 border border-white/5 backdrop-blur-md hover:border-[#00F5D4]/50 transition-all duration-300 hover:bg-[#121A2F]/80 flex flex-col h-full">
          <div class="mb-6 flex items-center justify-between">
            <div
              class="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-[#00F5D4]/30 transition-colors shadow-inner">
              <component :is="pillar.icon" class="text-white group-hover:text-[#00F5D4] transition-colors" :size="28" />
            </div>
            <span
              class="font-mono text-xs text-white/20 uppercase font-bold group-hover:text-[#00F5D4]/50 transition-colors">0{{
                index + 1 }}</span>
          </div>
          <h3 class="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-[#00F5D4] transition-colors">
            {{ pillar.title }}
          </h3>
          <p class="font-inter text-sm text-[#E6EAF0]/60 leading-relaxed flex-grow">
            {{ pillar.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Globe, Briefcase, Sparkles, Rocket, Palette, Link } from 'lucide-vue-next'

const videoRef = ref<HTMLVideoElement | null>(null)

// Play video when it enters the viewport, pause when it leaves
useIntersectionObserver(
  videoRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && videoRef.value) {
      // Try to play with sound. If browser blocks it (autoplay policy), mute and play
      videoRef.value.play().catch(() => {
        if (videoRef.value) {
          videoRef.value.muted = true;
          videoRef.value.play().catch(e => console.warn("Autoplay prevented:", e));
        }
      });
    } else if (videoRef.value) {
      videoRef.value.pause();
    }
  },
  { threshold: 0.5 }
)

const pillars = [
  {
    title: 'Agricultura de próxima generación',
    desc: 'Biotecnología, resiliencia hídrica y tecnología AgTech enfocada en el desarrollo sostenible en condiciones extremas.',
    icon: Sparkles
  },
  {
    title: 'Logística del desierto',
    desc: 'El rol estratégico y la infraestructura de conexión transcontinental que potencia el comercio mundial.',
    icon: Globe
  },
  {
    title: 'Negocios del desierto',
    desc: 'Nuevos modelos de inversión corporativa, emprendimiento global y comercio en la macrozona.',
    icon: Briefcase
  },
  {
    title: 'Innovación del desierto',
    desc: 'Exploración de la tecnología de defensa, telecomunicaciones y herramientas espaciales.',
    icon: Rocket
  },
  {
    title: 'Arte y cultura del desierto',
    desc: 'Expresiones artísticas y patrimoniales inspiradas en la vastedad y riqueza cultural de la macrorregión.',
    icon: Palette
  },
  {
    title: 'Ecosistema del desierto',
    desc: 'Plataforma de conexión sinérgica entre la academia, el sector público, industria privada y sociedad civil.',
    icon: Link
  },
]
</script>
