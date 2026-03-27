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
            isNight ? 'bg-black/40' : 'bg-[#0B0F1A]/50',
          ]"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0B0F1A]"
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
          <Moon v-if="isNight" :size="14" class="text-[#00F5D4]" />
          <Sun v-else :size="14" class="text-[#FF6B00]" />
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
        class="mb-8 max-w-4xl"
      >
        <span class="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#00F5D4] font-mono text-xs uppercase tracking-widest mb-6">
          EL EPICENTRO DE LA INNOVACIÓN EXTREMA
        </span>
        
        <img
          src="../assets/LOGO_GED-BLANCO-2048x955.png"
          alt="Gran Encuentro del Desierto"
          class="w-full max-w-lg mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] mb-8"
          @error="(e) => ((e.target as HTMLImageElement).style.display = 'none')"
        />
        
        <h1 class="font-orbitron text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          El Gran Encuentro del Desierto II
        </h1>
        
        <p class="font-inter text-lg md:text-xl text-[#E6EAF0]/80 max-w-2xl mx-auto leading-relaxed">
          Descubre cómo el territorio más árido del mundo está impulsando el futuro tecnológico, logístico y sostenible. Dos ciudades, infinitas posibilidades.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        class="flex flex-col md:flex-row gap-6 mt-8"
      >
        <a
          href="#agenda"
          class="group relative px-8 py-4 bg-[#FF6B00] text-white font-orbitron font-bold tracking-wider uppercase overflow-hidden rounded-sm"
        >
          <span class="relative z-10 transition-colors duration-300">Ver Agendas</span>
          <div
            class="absolute inset-0 bg-[#00F5D4] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"
          />
          <div
            class="absolute inset-0 shadow-[0_0_20px_#FF6B00] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
        <a
          href="#tickets"
          class="group px-8 py-4 border border-[#00F5D4] text-[#00F5D4] font-orbitron font-bold tracking-wider uppercase hover:bg-[#00F5D4]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,245,212,0.2)] hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] rounded-sm"
        >
          Asegura tu entrada
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 800, duration: 1000 } }"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#E6EAF0]/50"
    >
      <span class="text-[10px] uppercase tracking-[0.2em] font-orbitron"
        >Explora el Ecosistema</span
      >
      <ArrowDown :size="20" class="animate-bounce" />
    </div>

    <!-- Bottom decorative line -->
    <div
      class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent z-30"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Moon, Sun, ArrowDown } from "lucide-vue-next";

// --- Imágenes por modo ---
import tutelares from "../assets/tutelares.jpg";
import central from "../assets/central.webp";
const nightImages = [tutelares, central];

const dayImages = [
  "https://images.unsplash.com/photo-1623097048793-d37273f167a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdGFjYW1hJTIwZGVzZXJ0JTIwc3VubnklMjBkdW5lc3xlbnwxfHx8fDE3NzE1NDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
];

const isNight = ref(true);
const nightIndex = ref(0);
const dayIndex = ref(0);

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
