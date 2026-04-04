<template>
  <footer class="bg-[#0B0F1A] border-t border-white/10 pt-20 pb-8 text-[#E6EAF0]">

    <!-- Frase de Cierre -->
    <div class="max-w-5xl mx-auto px-6 mb-20 text-center">
      <h2 class="font-orbitron text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed">
        GED 2026 reúne a quienes están construyendo el <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#00F5D4]">futuro desde el
          desierto</span>.
      </h2>
      <p class="font-inter text-[#E6EAF0]/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Más días, más territorios, más conexiones y una visión más amplia de lo que Arica e Iquique pueden aportar al
        mundo.
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-t border-white/10 pt-16">
      <div class="col-span-1 md:col-span-2">
        <h2 class="font-orbitron text-2xl font-bold text-white mb-4">
          EL GRAN ENCUENTRO <br /> DEL DESIERTO
        </h2>
        <p class="text-[#E6EAF0]/60 max-w-sm mb-6">
          Donde la innovación y la sostenibilidad se encuentran en el extremo norte de Chile. Organizado por
          WakiLabs.
        </p>
        <div class="flex gap-4">
          <a v-for="(social, i) in socials" :key="i" href="#"
            class="p-2 bg-white/5 rounded-full hover:bg-[#FF6B00] hover:text-white transition-colors">
            <component :is="social.icon" :size="20" />
          </a>
        </div>
      </div>

      <div>
        <h3 class="font-orbitron text-lg font-bold text-white mb-6">Enlaces Rápidos</h3>
        <ul class="space-y-4 text-[#E6EAF0]/60">
          <li v-for="link in quickLinks" :key="link">
            <a href="#" class="hover:text-[#00F5D4] transition-colors">{{ link }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-orbitron text-lg font-bold text-white mb-6">Contacto</h3>
        <ul class="space-y-4 text-[#E6EAF0]/60">
          <li class="flex items-center gap-2">
            <Mail :size="16" /> contacto@wakilabs.cl
          </li>
          <li>Si quieres saber más, visita nuestro sitio web</li>
        </ul>
        <button
          class="mt-6 px-6 py-3 bg-[#FF6B00] text-white font-orbitron font-bold text-sm rounded hover:bg-[#FFC857] hover:text-black transition-colors">
          <a href="https://wakilabs.cl" target="_blank">Ir al sitio web</a>
        </button>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#E6EAF0]/40">
      <p>&copy; 2026 WakiLabs. Todos los derechos reservados.</p>
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-white transition-colors">Privacidad</a>
        <a href="#" class="hover:text-white transition-colors">Términos</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-vue-next'

const socials = [
  { icon: Facebook },
  { icon: Twitter },
  { icon: Instagram },
  { icon: Linkedin },
]

const quickLinks = ['Inicio', 'Agenda', 'Speakers', 'Galería', 'Tickets']
</script>
