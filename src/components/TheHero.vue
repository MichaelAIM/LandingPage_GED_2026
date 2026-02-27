<template>
  <div
    id="hero"
    class="relative min-h-screen w-full overflow-hidden font-sans flex flex-col justify-center py-20"
  >
    <!-- Background with transition -->
    <Transition name="bg-fade" mode="out-in">
      <div
        :key="currentBg"
        class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        :style="bgStyle"
      >
        <div
          :class="[
            'absolute inset-0',
            isNight ? 'bg-black/10' : 'bg-orange-900/20 mix-blend-overlay',
          ]"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0B0F1A]"
        />
      </div>
    </Transition>

    <!-- Day/Night Toggle -->
    <div class="absolute top-8 right-8 z-50 flex items-center gap-4">
      <span
        class="text-xs uppercase tracking-widest text-[#E6EAF0]/70 font-orbitron"
      >
        {{ isNight ? "Modo Nocturno" : "Modo Solar" }}
      </span>
      <button
        @click="handleManualToggle"
        class="relative flex h-8 w-14 items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-1 shadow-lg transition-all hover:bg-white/20"
      >
        <div
          class="flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all duration-300"
          :class="isNight ? 'bg-[#0B0F1A]' : 'bg-[#FFC857]'"
          :style="toggleStyle"
        >
          <Moon v-if="isNight" :size="14" class="text-[#A855F7]" />
          <Sun v-else :size="14" class="text-orange-600" />
        </div>
      </button>
    </div>

    <!-- Content -->
    <div
      class="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        class="mb-8"
      >
        <img
          src="../assets//LOGO_GED-BLANCO-2048x955.png"
          alt="Gran Encuentro del Desierto"
          class="w-full max-w-lg mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          @error="
            (e) => ((e.target as HTMLImageElement).style.display = 'none')
          "
        />
        <!-- Fallback logo text -->
        <h1
          class="font-orbitron text-xl md:text-xl font-black text-white tracking-tight leading-tight"
        >
          Donde la agricultura del futuro
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#A855F7]"
            >florece bajo las estrellas más brillantes del mundo</span
          >
        </h1>
      </div>

      <!-- Destination Selector -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 800, delay: 400 },
        }"
        class="flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto mt-0 mb-12 relative z-30"
      >
        <!-- ARICA Card -->
        <div
          class="flex-1 relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
        >
          <div
            class="absolute inset-0 bg-[#EC4899]/10 backdrop-blur-md border border-[#EC4899]/30 rounded-xl transition-all duration-300 group-hover:bg-[#EC4899]/20 group-hover:border-[#EC4899] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
          />
          <div
            class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#EC4899] rounded-tl-xl"
          />
          <div
            class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#EC4899] rounded-br-xl"
          />
          <div
            class="relative p-6 flex flex-col items-center md:items-start text-center md:text-left h-full"
          >
            <div class="flex items-center gap-2 mb-2">
              <span
                class="bg-[#EC4899] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                >Sede Central</span
              >
            </div>
            <h3
              class="font-orbitron text-3xl font-bold text-white mb-1 group-hover:text-[#EC4899] transition-colors"
            >
              ARICA
            </h3>
            <div
              class="flex items-center gap-2 text-white/60 text-xs mb-4 font-mono"
            >
              <Calendar :size="12" /> JUN 12, 2026 <MapPin :size="12" /> Central
              de Ferrocarriles
            </div>
            <div
              class="mt-auto w-full border-t border-white/10 pt-4 flex flex-col items-center md:items-start"
            >
              <span
                class="text-[10px] text-white/40 uppercase tracking-widest mb-1"
                >Tiempo para despegue</span
              >
              <CountdownTimer
                target-date="2026-06-12T09:00:00"
                color="#EC4899"
              />
            </div>
            <div
              class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
            >
              <ArrowRight class="text-[#EC4899]" :size="32" />
            </div>
          </div>
        </div>

        <!-- IQUIQUE Card -->
        <div
          class="flex-1 relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
        >
          <div
            class="absolute inset-0 bg-[#A855F7]/10 backdrop-blur-md border border-[#A855F7]/30 rounded-xl transition-all duration-300 group-hover:bg-[#A855F7]/20 group-hover:border-[#A855F7] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          />
          <div
            class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#A855F7] rounded-tl-xl"
          />
          <div
            class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#A855F7] rounded-br-xl"
          />
          <div
            class="relative p-6 flex flex-col items-center md:items-start text-center md:text-left h-full"
          >
            <div class="flex items-center gap-2 mb-2">
              <span
                class="bg-[#A855F7] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                >Expansión</span
              >
            </div>
            <h3
              class="font-orbitron text-3xl font-bold text-white mb-1 group-hover:text-[#A855F7] transition-colors"
            >
              IQUIQUE
            </h3>
            <div
              class="flex items-center gap-2 text-white/60 text-xs mb-4 font-mono"
            >
              <Calendar :size="12" /> JUN 16, 2026 <MapPin :size="12" /> Playa
              Brava
            </div>
            <div
              class="mt-auto w-full border-t border-white/10 pt-4 flex flex-col items-center md:items-start"
            >
              <span
                class="text-[10px] text-white/40 uppercase tracking-widest mb-1"
                >Tiempo para despegue</span
              >
              <CountdownTimer
                target-date="2026-06-16T09:00:00"
                color="#A855F7"
              />
            </div>
            <div
              class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
            >
              <ArrowRight class="text-[#A855F7]" :size="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
        class="flex flex-col md:flex-row gap-6"
      >
        <button
          class="group relative px-8 py-4 bg-[#EC4899] text-white font-orbitron font-bold tracking-wider uppercase overflow-hidden rounded-sm"
        >
          <span class="relative z-10 transition-colors duration-300"
            >Inscríbete Ahora</span
          >
          <div
            class="absolute inset-0 bg-[#A855F7] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"
          />
          <div
            class="absolute inset-0 shadow-[0_0_20px_#EC4899] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          />
        </button>
        <button
          class="group px-8 py-4 border border-[#A855F7] text-[#A855F7] font-orbitron font-bold tracking-wider uppercase hover:bg-[#A855F7]/10 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] rounded-sm"
        >
          Conoce los Speakers
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1000, duration: 1000 } }"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#E6EAF0]/50"
    >
      <span class="text-[10px] uppercase tracking-[0.2em] font-orbitron"
        >Explora</span
      >
      <ArrowDown :size="20" class="animate-bounce" />
    </div>

    <!-- Bottom decorative line -->
    <div
      class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EC4899]/50 to-transparent z-30"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  Moon,
  Sun,
  ArrowDown,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-vue-next";
import CountdownTimer from "./CountdownTimer.vue";

// --- Imágenes por modo ---
// Agrega o cambia las URLs aquí según tus necesidades
import tutelares from "../assets/tutelares.jpg";
import central from "../assets/central.webp";
const nightImages = [tutelares, central];

const dayImages = [
  "https://images.unsplash.com/photo-1623097048793-d37273f167a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdGFjYW1hJTIwZGVzZXJ0JTIwc3VubnklMjBkdW5lc3xlbnwxfHx8fDE3NzE1NDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
];

// --- Estado ---
const isNight = ref(true);
const nightIndex = ref(0);
const dayIndex = ref(0);

// Clave única → dispara la <Transition> tanto al cambiar modo como al cambiar imagen
const currentBg = computed(() =>
  isNight.value ? "night-" + nightIndex.value : "day-" + dayIndex.value,
);

const bgStyle = computed(() => {
  const url = isNight.value
    ? nightImages[nightIndex.value]
    : dayImages[dayIndex.value];
  return { backgroundImage: "url(" + url + ")" };
});

const toggleStyle = computed(() => ({
  transform: "translateX(" + (isNight.value ? "0px" : "24px") + ")",
}));

// --- Intervalos ---
let modeInterval: ReturnType<typeof setInterval> | null = null;
let slideInterval: ReturnType<typeof setInterval> | null = null;

const stopAll = () => {
  if (modeInterval) {
    clearInterval(modeInterval);
    modeInterval = null;
  }
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
};

// Avanza la imagen dentro del modo activo
const nextSlide = () => {
  if (isNight.value) {
    nightIndex.value = (nightIndex.value + 1) % nightImages.length;
  } else {
    dayIndex.value = (dayIndex.value + 1) % dayImages.length;
  }
};

const startSlideshow = () => {
  slideInterval = setInterval(nextSlide, 7000);
};

const startModeToggle = () => {
  modeInterval = setInterval(() => {
    isNight.value = !isNight.value;
  }, 7000);
};

// Click manual: congela el modo, sigue rotando imágenes del modo elegido
const handleManualToggle = () => {
  stopAll();
  isNight.value = !isNight.value;
  startSlideshow();
};

onMounted(() => {
  startModeToggle();
  startSlideshow();
});

onUnmounted(() => stopAll());
</script>

<style scoped>
.bg-fade-enter-active,
.bg-fade-leave-active {
  transition: opacity 1.5s ease;
}
.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0;
}
</style>
