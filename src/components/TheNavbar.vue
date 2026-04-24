<template>
  <div
    class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto px-4 max-w-full overflow-x-auto no-scrollbar"
  >
    <nav
      v-motion
      :initial="{ y: 100, opacity: 0 }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: { delay: 1000, duration: 800, type: 'spring' },
      }"
      class="flex items-center gap-2 p-2 rounded-full bg-[#0D1535]/85 backdrop-blur-xl border border-[#F0EAD6]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]"
    >
      <!-- Logo GED -->
      <a
        href="/"
        class="flex items-center justify-center p-1 rounded-full hover:ring-2 hover:ring-[#C96B35]/50 transition-all duration-300"
        title="Gran Encuentro del Desierto 2026"
      >
        <img
          src="../assets/propuestas-logo-n2-03.png"
          alt="GED 2026"
          class="w-10 h-10 rounded-full object-cover"
        />
      </a>
      <div class="w-px h-6 bg-white/10"></div>
      <a
        v-for="(item, index) in navItems"
        :key="index"
        :href="item.href"
        class="relative group flex items-center justify-center p-3 rounded-full transition-all duration-300"
        :class="
          item.primary
            ? 'bg-[#C96B35] text-[#F0EAD6] hover:bg-[#FFD447] hover:text-[#0D1535] shadow-[0_0_15px_rgba(201,107,53,0.5)] transition-all duration-300'
            : 'text-[#F0EAD6]/60 hover:text-[#F0EAD6] hover:bg-white/10'
        "
      >
        <component :is="item.icon" :size="20" />
        <!-- Tooltip -->
        <span
          class="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#0D1535] text-[#F0EAD6] text-[10px] uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-[#F0EAD6]/15"
        >
          {{ item.label }}
        </span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {
  Home,
  Map,
  Calendar,
  Users,
  Image,
  Ticket,
  ExternalLink,
} from "lucide-vue-next";

const navItems = [
  { icon: Home, label: "Inicio", href: "/" },
  { icon: Map, label: "Territorio", href: "/#territory" },
  { icon: Users, label: "Speakers", href: "/#speakers" },
  { icon: Calendar, label: "Agenda", href: "/#agenda" },
  { icon: Image, label: "Galería", href: "/#gallery" },
  { icon: Ticket, label: "Tickets", href: "/#tickets" },
  { icon: ExternalLink, label: "Registro", href: "/registro", primary: true },
];
</script>
