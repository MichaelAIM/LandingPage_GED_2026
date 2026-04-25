<template>
  <div class="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
    <!-- Botón toggle -->
    <button @click="isCollapsed = !isCollapsed"
      class="flex items-center justify-center w-6 h-12 rounded-l-xl bg-[#0D1535]/85 backdrop-blur-xl border border-r-0 border-[#F0EAD6]/10 text-[#F0EAD6]/60 hover:text-[#F0EAD6] hover:bg-[#C96B35]/30 transition-all duration-300 cursor-pointer shadow-[-4px_0_20px_-5px_rgba(0,0,0,0.5)]"
      :title="isCollapsed ? 'Mostrar menú' : 'Ocultar menú'">
      <ChevronLeft :size="14" class="transition-transform duration-300" :class="isCollapsed ? 'rotate-180' : ''" />
    </button>

    <!-- Nav panel -->
    <div class="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      :class="isCollapsed ? 'w-0 opacity-0' : 'w-16 opacity-100 mr-6'">
      <nav v-motion :initial="{ x: 60, opacity: 0 }" :enter="{
        x: 0,
        opacity: 1,
        transition: { delay: 1000, duration: 800, type: 'spring' },
      }"
        class="flex flex-col items-center gap-2 p-2 rounded-2xl bg-[#0D1535]/85 backdrop-blur-xl border border-[#F0EAD6]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]">
        <!-- Logo GED -->
        <button @click="goHome"
          class="flex items-center justify-center p-1 rounded-full hover:ring-2 hover:ring-[#C96B35]/50 transition-all duration-300 cursor-pointer bg-transparent border-0"
          title="Gran Encuentro del Desierto 2026">
          <img src="../assets/propuestas-logo-n2-08.png" alt="GED 2026" class="w-10 h-10 rounded-full object-cover" />
        </button>

        <!-- Separador horizontal -->
        <div class="h-px w-6 bg-white/10"></div>

        <button v-for="(item, index) in navItems" :key="index" @click="handleNav(item)"
          class="relative group flex items-center justify-center p-3 rounded-full transition-all duration-300 cursor-pointer border-0"
          :class="item.primary
              ? 'bg-[#C96B35] text-[#F0EAD6] hover:bg-[#FFD447] hover:text-[#0D1535] shadow-[0_0_15px_rgba(201,107,53,0.5)]'
              : item.secondary
                ? 'bg-[#4E8FCC] text-[#FFF] flip-horizontal hover:bg-[#4E8FCC]/40 hover:text-[#F0EAD6] border border-[#4E8FCC]/30'
                : 'text-[#FFF] hover:text-[#F0EAD6] hover:bg-white/10'
            ">
          <component :is="item.icon" :size="20" />
          <span
            class="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#0D1535] text-[#F0EAD6] text-[10px] uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-[#F0EAD6]/15">
            {{ item.label }}
          </span>
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.flip-horizontal {
  transform: scaleX(-1);
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Home,
  Map,
  Calendar,
  Users,
  Image,
  ExternalLink,
  ChevronLeft,
} from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();
const isCollapsed = ref(false);
const userToggled = ref(false); // rastrea si el usuario tocó el botón manualmente

const SCROLL_THRESHOLD = 300;

function handleScroll() {
  if (userToggled.value) return; // el usuario manda, no interferir
  isCollapsed.value = window.scrollY >= SCROLL_THRESHOLD;
}

function handleToggleClick() {
  isCollapsed.value = !isCollapsed.value;
  userToggled.value = true; // el usuario tomó control manual
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

interface NavItem {
  icon: unknown;
  label: string;
  sectionId?: string;
  route?: string;
  primary?: boolean;
  secondary?: boolean;
}

const navItems: NavItem[] = [
  { icon: Map, label: "Territorio", sectionId: "territory" },
  { icon: Users, label: "Speakers", sectionId: "speakers" },
  { icon: Calendar, label: "Agenda", sectionId: "agenda-arica" },
  { icon: Image, label: "Galería", sectionId: "gallery" },
  {
    icon: ExternalLink,
    label: "Registro Iquique",
    route: "/registro-iquique",
    secondary: true,
  },
  {
    icon: ExternalLink,
    label: "Registro Arica",
    route: "/registro-arica",
    primary: true,
  },
];

function goHome() {
  handleNav({ icon: Home, label: "Inicio", sectionId: "hero" });
}

function handleNav(item: NavItem) {
  if (item.route) {
    router.push(item.route);
    return;
  }
  if (item.sectionId) {
    if (router.currentRoute.value.path !== "/") {
      router.push("/").then(() => {
        setTimeout(() => scrollToSection(item.sectionId!), 300);
      });
    } else {
      scrollToSection(item.sectionId);
    }
  }
}

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>