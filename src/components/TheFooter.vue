<template>
  <footer class="bg-[#0D1535] border-t border-[#F0EAD6]/10 pt-32 md:pt-48 pb-16 text-[#F0EAD6]">
    <!-- Frase de Cierre -->
    <div class="max-w-5xl mx-auto px-6 mb-20 text-center">
      <h2 class="font-orbitron text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
        GED 2026 reúne a quienes están construyendo el
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#C96B35] to-[#4E8FCC]">futuro desde el
          desierto</span>.
      </h2>
      <p class="font-inter font-light text-[#F0EAD6]/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        Más días, más territorios, más conexiones y una visión más amplia de lo
        que Arica e Iquique pueden aportar al mundo.
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-t border-white/10 pt-16">
      <div class="col-span-1 md:col-span-2">
        <!-- Logo nuevo GED 2026 -->
        <img src="../assets/propuestas-logo-n2-04.png" alt="Gran Encuentro del Desierto 2026"
          class="w-20 h-20 mb-4 opacity-90" />
        <h2 class="font-orbitron text-2xl font-bold text-[#F0EAD6] mb-4">
          EL GRAN ENCUENTRO <br />
          DEL DESIERTO
        </h2>
        <p class="font-inter text-[#E6EAF0]/60 max-w-sm mb-6 font-light text-sm md:text-base">
          Donde la innovación y la sostenibilidad se encuentran en el extremo
          norte de Chile. Organizado por WakiLabs.
        </p>
        <div class="flex gap-4">
          <a v-for="(social, i) in socials" :key="i" href="#"
            class="p-2 bg-white/5 rounded-full hover:bg-[#C96B35] hover:text-[#F0EAD6] transition-colors">
            <component :is="social.icon" :size="20" />
          </a>
        </div>
      </div>

      <div>
        <h3 class="font-orbitron text-lg font-bold text-[#F0EAD6] mb-6">
          Enlaces Rápidos
        </h3>
        <ul class="space-y-4 text-[#F0EAD6]/60">
          <li v-for="link in quickLinks" :key="link">
            <a href="#" class="hover:text-[#E8A067] transition-colors">{{
              link
              }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-orbitron text-lg font-bold text-white mb-6">
          Contacto
        </h3>
        <ul class="space-y-4 text-[#F0EAD6]/60 font-inter font-light text-sm hover:[&_a]:text-[#E8A067]">
          <li class="flex items-center gap-2">
            <Mail :size="16" />
            <a href="mailto:contacto@wakilabs.cl" class="transition-colors">contacto@wakilabs.cl</a>
          </li>
          <li>Si quieres saber más, visita nuestro sitio web</li>
        </ul>
        <button
          class="mt-6 px-6 py-3 bg-[#C96B35] text-[#F0EAD6] font-orbitron font-bold text-sm rounded hover:bg-[#FFD447] hover:text-[#0D1535] transition-colors">
          <a href="https://wakilabs.cl" target="_blank">Ir al sitio web</a>
        </button>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#E6EAF0]/40">
      <p>&copy; 2026 WakiLabs. Todos los derechos reservados.</p>
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-[#F0EAD6] transition-colors">Privacidad</a>
        <a href="#" class="hover:text-[#F0EAD6] transition-colors">Términos</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-vue-next";

const socials = [
  { icon: Facebook, url: "https://www.facebook.com/granencuentrodeldesierto" },
  { icon: Twitter, url: "https://twitter.com/granencuentrodeldesierto" },
  {
    icon: Instagram,
    url: "https://www.instagram.com/granencuentrodeldesierto/",
  },
  { icon: Linkedin, url: "https://www.linkedin.com/company/wakilabs" },
];

const quickLinks = ["Inicio", "Agenda", "Speakers", "Galería", "Tickets"];
</script>
