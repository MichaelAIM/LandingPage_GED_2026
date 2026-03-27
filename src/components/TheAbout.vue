<template>
  <section id="about" class="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#0B0F1A] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1600&q=80"
        alt="Background"
        class="w-full h-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-[#0B0F1A]/50" />
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Top Section: Manifesto -->
      <div class="mb-20 max-w-3xl">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <span class="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-[#FF6B00] font-mono text-xs uppercase tracking-widest mb-4">
            // El Manifiesto
          </span>
          <h2 class="font-orbitron text-3xl md:text-5xl font-bold text-white leading-tight mb-6 uppercase">
            Más allá de la aridez: <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#00F5D4]">Un laboratorio a cielo abierto</span>
          </h2>
          <p class="font-inter text-[#E6EAF0]/80 text-lg leading-relaxed mb-6">
            El Gran Encuentro del Desierto (GED) evoluciona. Ya no hablamos solo de lo que brota de la tierra, sino de la red infinita de oportunidades que florecen sobre ella.
          </p>
          <p class="font-inter text-[#E6EAF0]/80 text-lg leading-relaxed">
            Conectamos la ciencia, la industria, la logística y el emprendimiento en una plataforma de innovación de escala global, demostrando que en el desierto se cultiva el futuro.
          </p>
        </div>
      </div>

      <!-- Bottom Section: Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F5D4]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div
          v-for="(pillar, index) in pillars"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="group p-8 rounded-2xl bg-[#121A2F]/60 border border-white/5 backdrop-blur-md hover:border-[#00F5D4]/50 transition-all duration-300 hover:bg-[#121A2F]/80 flex flex-col h-full"
        >
          <div class="mb-6 flex items-center justify-between">
            <div class="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-[#00F5D4]/30 transition-colors shadow-inner">
              <component :is="pillar.icon" class="text-white group-hover:text-[#00F5D4] transition-colors" :size="28" />
            </div>
            <span class="font-mono text-xs text-white/20 uppercase font-bold group-hover:text-[#00F5D4]/50 transition-colors">0{{ index + 1 }}</span>
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
import { Globe, Briefcase, Sparkles, Rocket, Palette } from 'lucide-vue-next'

const pillars = [
  { 
    title: 'Logística del Desierto', 
    desc: 'Rutas de alcance global, infraestructura portuaria de última generación y la posición geopolítica estratégica del extremo norte.', 
    icon: Globe 
  },
  { 
    title: 'Negocios y Conexión', 
    desc: 'Oportunidades de inversión B2B, macrozona franca y el ecosistema económico dinámico de la región.', 
    icon: Briefcase 
  },
  { 
    title: 'Agricultura de Vanguardia', 
    desc: 'Biotecnología, resiliencia hídrica, tecnología AgTech y sustentabilidad alimentaria extrema.', 
    icon: Sparkles 
  },
  { 
    title: 'Innovación y Defensa', 
    desc: 'Exploración espacial, robótica, tecnologías de defensa y adaptación humana a estresores ambientales.', 
    icon: Rocket 
  },
  { 
    title: 'Arte y Patrimonio', 
    desc: 'Expresiones culturales milenarias e identidad visual contemporánea inspirada en la inmensidad del territorio.', 
    icon: Palette 
  },
]
</script>
