<template>
  <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto px-4 max-w-full overflow-x-auto no-scrollbar">
    <nav
      v-motion
      :initial="{ y: 100, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { delay: 1000, duration: 800, type: 'spring' } }"
      class="flex items-center gap-2 p-2 rounded-full bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
    >
      <a
        v-for="(item, index) in navItems"
        :key="index"
        :href="item.href"
        class="relative group flex items-center justify-center p-3 rounded-full transition-all duration-300"
        :class="item.primary
          ? 'bg-[#FF6B00] text-white hover:bg-[#FFC857] hover:text-black shadow-[0_0_15px_rgba(255,107,0,0.4)]'
          : 'text-[#E6EAF0]/60 hover:text-white hover:bg-white/10'"
      >
        <component :is="item.icon" :size="20" />
        <!-- Tooltip -->
        <span class="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0B0F1A] text-white text-[10px] uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
          {{ item.label }}
        </span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Home, Map, Calendar, Users, Image, Ticket } from 'lucide-vue-next'

const navItems = [
  { icon: Home, label: 'Inicio', href: '#hero' },
  { icon: Map, label: 'Territorio', href: '#territory' },
  { icon: Users, label: 'Speakers', href: '#speakers' },
  { icon: Calendar, label: 'Agenda', href: '#agenda' },
  { icon: Image, label: 'Galería', href: '#gallery' },
  { icon: Ticket, label: 'Tickets', href: '#tickets', primary: true },
]
</script>
