<template>
  <section
    id="gallery"
    class="py-32 md:py-48 bg-[#050810] relative overflow-hidden"
  >
    <!-- Abstract Tech Background -->
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00F5D4]/10 rounded-full blur-[120px] pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[150px] pointer-events-none"
      ></div>
      <div
        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- HEADER: Versiones Anteriores -->
      <div
        class="flex flex-col items-center text-center mb-16 md:mb-24"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <div
          class="inline-flex items-center space-x-3 bg-gradient-to-r from-transparent via-[#00F5D4]/10 to-transparent border-y border-[#00F5D4]/20 px-8 py-2.5 mb-8"
        >
          <span
            class="w-1.5 h-1.5 bg-[#00F5D4] rounded-full animate-pulse shadow-[0_0_10px_#00F5D4]"
          ></span>
          <span
            class="text-[#00F5D4] font-orbitron font-bold text-xs tracking-[0.25em] uppercase"
            >Memoria y Legado</span
          >
          <span
            class="w-1.5 h-1.5 bg-[#00F5D4] rounded-full animate-pulse shadow-[0_0_10px_#00F5D4]"
          ></span>
        </div>

        <h2
          class="font-orbitron font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 uppercase tracking-tight drop-shadow-xl"
        >
          1º Gran Encuentro <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#3B82F6] drop-shadow-sm"
            >Del Desierto</span
          >
        </h2>

        <p
          class="font-inter text-[#E6EAF0]/70 max-w-2xl text-lg md:text-xl font-light"
        >
          Revive los momentos más destacados de nuestra edición pasada en la
          Estación Experimental Canchones, UNAP, Tarapacá. Agosto 2024.
        </p>
      </div>

      <!-- MASONRY GALLERY -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-32">
        <div
          v-for="(image, i) in images"
          :key="i"
          @click="openLightbox(i)"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            transition: { duration: 600, delay: (i % 6) * 100 },
          }"
          class="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid border border-white/5 bg-white/5 shadow-2xl hover:shadow-[0_0_40px_rgba(0,245,212,0.2)] transition-all duration-500"
        >
          <img
            :src="image"
            :alt="`Gallery Edition 2024 - ${i + 1}`"
            class="w-full h-auto object-cover transform scale-[1.03] group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <!-- Premium Hover Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/95 via-[#0B0F1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"
          >
            <div
              class="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-between"
            >
              <span
                class="font-orbitron text-white text-sm tracking-widest font-bold"
                >VER CAPTURA</span
              >
              <div
                class="w-12 h-12 rounded-full bg-[#00F5D4] flex items-center justify-center shadow-[0_0_20px_#00F5D4]"
              >
                <ZoomIn class="text-[#050810] w-6 h-6" />
              </div>
            </div>
          </div>

          <!-- Subtle Glass reflection -->
          <div
            class="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          ></div>
        </div>
      </div>

      <!-- HEADER: Impacto Real -->
      <div
        class="flex flex-col items-center text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      >
        <h2
          class="font-orbitron text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter"
        >
          Con un <br class="md:hidden" />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8C00] to-[#FFC857]"
            >Impacto Real</span
          >
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent mt-8"
        ></div>
      </div>

      <!-- STATS GRID -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative perspective-[1000px]"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 150 },
          }"
          :ref="(el) => setRef(el as HTMLElement, index)"
          class="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 flex flex-col items-center justify-center hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl backdrop-blur-xl"
        >
          <!-- Background Glow Effect on Hover -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-screen pointer-events-none blur-[40px]"
            :class="stat.glowClass"
          ></div>

          <div class="relative z-10 flex flex-col items-center">
            <div
              class="font-orbitron text-6xl md:text-7xl font-black mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] tabular-nums flex items-baseline justify-center whitespace-nowrap"
              :class="stat.color"
            >
              <span v-if="stat.prefix" class="text-4xl md:text-5xl mr-1">{{
                stat.prefix
              }}</span>
              {{ displayValues[index] }}
            </div>
            <span
              class="font-inter text-[#E6EAF0]/60 text-sm md:text-[15px] uppercase tracking-[0.2em] font-medium group-hover:text-white transition-colors text-center mt-2"
            >
              {{ stat.label }}
            </span>
          </div>

          <!-- Decorative corner lines -->
          <div
            class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
      </div>
    </div>

    <!-- LIGHTBOX -->
    <Teleport to="body">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedImageIndex !== null"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-[#050810]/95 backdrop-blur-xl"
          @click="closeLightbox"
        >
          <!-- Close button -->
          <button
            @click="closeLightbox"
            class="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-[#00F5D4] transition-colors z-[110] p-2 hover:bg-white/5 rounded-full"
          >
            <X class="w-10 h-10" />
          </button>

          <!-- Prev button -->
          <button
            @click.stop="prevImage"
            class="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#00F5D4] transition-colors z-[110] p-4 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md border border-white/10 hidden md:block"
          >
            <ChevronLeft class="w-10 h-10" />
          </button>

          <!-- Image container -->
          <div
            class="relative max-w-[95vw] lg:max-w-6xl max-h-[90vh] w-full px-4 flex justify-center items-center"
            @click.stop
          >
            <img
              :src="images[selectedImageIndex]"
              class="max-h-[85vh] max-w-full object-contain drop-shadow-[0_0_50px_rgba(0,245,212,0.15)] rounded-lg pointer-events-auto"
              alt="Preview"
            />
          </div>

          <!-- Next button -->
          <button
            @click.stop="nextImage"
            class="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#00F5D4] transition-colors z-[110] p-4 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md border border-white/10 hidden md:block"
          >
            <ChevronRight class="w-10 h-10" />
          </button>

          <!-- Counter indicator -->
          <div
            class="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
          >
            <span class="text-white font-mono tracking-widest text-sm">
              {{ selectedImageIndex + 1 }} / {{ images.length }}
            </span>
          </div>

          <!-- Mobile invisible hitboxes for easy swiping/tapping on sides -->
          <div
            class="absolute top-0 bottom-0 left-0 w-1/4 z-[105] md:hidden"
            @click.stop="prevImage"
          ></div>
          <div
            class="absolute top-0 bottom-0 right-0 w-1/4 z-[105] md:hidden"
            @click.stop="nextImage"
          ></div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

import img1 from "../assets/Ged2024/1.jpg";
import img2 from "../assets/Ged2024/2.jpg";
import img3 from "../assets/Ged2024/3.jpg";
import img4 from "../assets/Ged2024/12.jpg";
import img5 from "../assets/Ged2024/5.jpg";
import img6 from "../assets/Ged2024/6.jpg";
import img7 from "../assets/Ged2024/7.jpg";
import img8 from "../assets/Ged2024/13.jpg";
import img9 from "../assets/Ged2024/9.jpg";
import img10 from "../assets/Ged2024/14.jpg";
import img11 from "../assets/Ged2024/4.jpg";
import img12 from "../assets/encuentro2024.jpg";
import img13 from "../assets/Ged2024/4.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

// Lightbox logic
const selectedImageIndex = ref<number | null>(null);

const openLightbox = (index: number) => {
  selectedImageIndex.value = index;
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

const closeLightbox = () => {
  selectedImageIndex.value = null;
  document.body.style.overflow = "";
};

const prevImage = () => {
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value =
      (selectedImageIndex.value - 1 + images.length) % images.length;
  }
};

const nextImage = () => {
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % images.length;
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedImageIndex.value === null) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
};

const stats = [
  {
    value: 100,
    prefix: "",
    label: "Cupos Reales Disponibles",
    color: "text-[#3B82F6]",
    glowClass: "bg-[#3B82F6]",
  },
  {
    value: 1000,
    prefix: "+",
    label: "Asistentes",
    color: "text-[#00F5D4]",
    glowClass: "bg-[#00F5D4]",
  },
  {
    value: 4,
    prefix: "",
    label: "Expertos Internacionales",
    color: "text-[#FFC857]",
    glowClass: "bg-[#FFC857]",
  },
  {
    value: 18,
    prefix: "+",
    label: "Sponsors involucradas",
    color: "text-[#FF6B00]",
    glowClass: "bg-[#FF6B00]",
  },
];

const displayValues = ref(stats.map(() => 0));
const animated = ref(stats.map(() => false));
const els = ref<(HTMLElement | null)[]>(stats.map(() => null));

const setRef = (el: HTMLElement | null, index: number) => {
  if (els.value) {
    els.value[index] = el;
  }
};

const animateCounter = (index: number) => {
  if (animated.value[index]) return;
  animated.value[index] = true;
  const target = stats[index].value;
  const duration = 2000;
  const start = performance.now();

  const update = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    displayValues.value[index] = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

let observer: IntersectionObserver;

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = els.value.indexOf(entry.target as HTMLElement);
          if (index !== -1) animateCounter(index);
        }
      });
    },
    { threshold: 0.3 },
  );
  els.value.forEach((el) => el && observer.observe(el));
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  observer?.disconnect();
  // Clean up any stray overflow locks
  document.body.style.overflow = "";
});
</script>
