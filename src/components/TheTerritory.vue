<template>
  <section
    id="territory"
    class="relative w-full bg-[#0B0F1A] overflow-hidden flex flex-col"
  >
    <!-- Header Context -->
    <div
      class="pt-24 md:pt-16 pb-16 px-6 max-w-5xl mx-auto text-center relative z-20"
    >
      <h2 class="font-orbitron text-2xl lg:text-5xl font-black text-white mb-8">
        DOS CIUDADES,
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#f928a9] to-[#00F5D4]"
          >UN ECOSISTEMA</span
        >
      </h2>
    </div>

    <div class="max-w-5xl mx-auto px-6 text-center relative z-20">
      <p
        class="font-inter text-base md:text-lg font-light text-slate-300 leading-relaxed"
      >
        Desde el corazón del desierto, al Gran Encuentro del Desierto, junto a
        WakiLabs, Codesser y el Consorcio del Desierto, están encendiendo el
        motor de la innovación en el norte de Chile.
        <br />
        Este año Arica marca el inicio con una agenda orientada a la
        articulación estratégica, el diálogo internacional y actividades de alto
        impacto. E Iquique toma la posta con foco en espacio, minería y
        sostenibilidad, conectando con el territorio, la industria y la
        academia.
      </p>
    </div>
    <!-- Seccion staff -->
    <div class="w-full relative z-30 py-8 overflow-hidden">
      <!-- Escritorio: estático centrado -->
      <div
        class="hidden md:flex max-w-7xl mx-auto px-6 overflow-x-auto hide-scrollbar"
      >
        <div
          class="flex flex-row flex-nowrap justify-center items-center gap-24 min-w-max w-full"
        >
          <div
            v-for="(staff, index) in staffs"
            :key="'desk-' + index"
            class="group cursor-pointer transition-all duration-300 hover:scale-110 flex-shrink-0"
          >
            <img
              :src="staff.img"
              :alt="staff.name"
              :class="['object-contain', staff.customClass || 'w-36 h-36']"
            />
          </div>
        </div>
      </div>

      <!-- Móvil: carrusel infinito animado -->
      <div class="flex md:hidden w-full relative">
        <div
          class="flex flex-row items-center gap-12 animate-marquee shrink-0 px-6"
        >
          <div
            v-for="(staff, index) in staffs"
            :key="'mob1-' + index"
            class="flex-shrink-0"
          >
            <img
              :src="staff.img"
              :alt="staff.name"
              :class="['object-contain', staff.customClass || 'w-24 h-24']"
            />
          </div>
        </div>
        <div
          class="flex flex-row items-center gap-12 animate-marquee shrink-0 px-6"
          aria-hidden="true"
        >
          <div
            v-for="(staff, index) in staffs"
            :key="'mob2-' + index"
            class="flex-shrink-0"
          >
            <img
              :src="staff.img"
              :alt="staff.name"
              :class="['object-contain', staff.customClass || 'w-24 h-24']"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Seccion territorio -->
    <!-- Split Screen Container -->
    <div
      class="relative w-full h-auto min-h-screen md:h-[70vh] md:min-h-[500px] flex flex-col md:flex-row"
    >
      <!-- ARICA (Left Side) -->
      <div
        ref="aricaRef"
        class="relative flex-1 min-h-[50vh] md:min-h-0 flex flex-col justify-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
        :class="
          hoveredSide === 'iquique'
            ? 'md:flex-[0.3] grayscale-[50%]'
            : hoveredSide === 'arica'
              ? 'md:flex-[1.7]'
              : 'md:flex-1'
        "
        @mouseenter="hoveredSide = 'arica'"
        @mouseleave="hoveredSide = null"
      >
        <!-- Background Image -->
        <div class="absolute inset-0 z-0 overflow-hidden">
          <img
            src="../assets/Arica-Central-6-768x512.jpg"
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Arica"
          />
          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-[#f928a9]/20 mix-blend-multiply"
          />
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"
          />
        </div>

        <div
          class="relative z-10 w-full max-w-lg"
          :class="hoveredSide === 'iquique' ? 'opacity-30' : 'opacity-100'"
        >
          <span
            class="inline-block py-1 px-3 rounded bg-[#0B0F1A]/80 border border-[#f928a9]/50 text-[#f928a9] font-mono text-[10px] uppercase tracking-widest mb-4 backdrop-blur-md"
          >
            Arica: el punto de partida del encuentro
          </span>
          <h2
            class="font-orbitron text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg"
          >
            ARICA
          </h2>
          <div
            class="h-1 w-12 bg-[#f928a9] mb-6 transition-all duration-500 group-hover:w-32"
          />

          <p
            class="font-inter text-white/90 text-lg leading-relaxed mb-2 transform transition-all duration-700 ease-out"
            :class="[
              hoveredSide === 'arica'
                ? 'md:block md:opacity-100 md:translate-y-0'
                : 'md:hidden md:opacity-0 md:translate-y-4',
              scrolledArica
                ? 'max-md:opacity-100 max-md:translate-y-0'
                : 'max-md:opacity-0 max-md:translate-y-8',
            ]"
          >
            Del 11 al 13 de junio, Arica será el corazón de las actividades
            iniciales. Aquí se desarrollarán instancias privadas de vinculación
            internacional, el evento central GED, el workshop “El futuro desde
            el desierto”, el startup stage y el cierre oficial con la Fiesta
            Desierto Espacial. Arica conecta liderazgo, innovación y proyección
            regional en una agenda pensada para abrir conversaciones y activar
            alianzas.
          </p>

          <div
            class="flex flex-wrap gap-2 transform mb-8 transition-all duration-700 delay-100 ease-out"
            :class="[
              hoveredSide === 'arica'
                ? 'md:flex md:opacity-100 md:translate-y-0'
                : 'md:hidden md:opacity-0 md:translate-y-4',
              scrolledArica
                ? 'max-md:opacity-100 max-md:translate-y-0'
                : 'max-md:opacity-0 max-md:translate-y-8',
            ]"
          >
            <span
              class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white"
              >#AgTech</span
            >
            <span
              class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white"
              >#Patrimonio</span
            >
            <span
              class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white"
              >#Frontera</span
            >
          </div>

          <p
            class="font-inter text-slate-300 text-lg leading-relaxed transform transition-all duration-700 delay-200 ease-out"
            :class="[
              hoveredSide === 'arica'
                ? 'md:block md:opacity-100 md:translate-y-0'
                : 'md:hidden md:opacity-0 md:translate-y-4',
              scrolledArica
                ? 'max-md:opacity-100 max-md:translate-y-0'
                : 'max-md:opacity-0 max-md:translate-y-8',
            ]"
          >
            No dejes pasar esta oportunidad: acceso solo con registro y cupos
            limitados.
          </p>

          <div class="flex mt-4">
            <a
              href="#agenda"
              class="px-8 py-4 bg-[#f928a9] text-white font-orbitron font-bold tracking-wider uppercase rounded-sm hover:ring-2 hover:ring-[#f928a9] hover:ring-offset-2"
            >
              Reserva tu cupo ya.
            </a>
          </div>
        </div>
      </div>

      <!-- IQUIQUE (Right Side) -->
      <div
        ref="iquiqueRef"
        class="relative flex-1 min-h-[50vh] md:min-h-0 flex flex-col justify-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
        :class="
          hoveredSide === 'arica'
            ? 'md:flex-[0.3] grayscale-[50%]'
            : hoveredSide === 'iquique'
              ? 'md:flex-[1.7]'
              : 'md:flex-1'
        "
        @mouseenter="hoveredSide = 'iquique'"
        @mouseleave="hoveredSide = null"
      >
        <!-- Background Image -->
        <div class="absolute inset-0 z-0 overflow-hidden">
          <img
            src="../assets/iquique-desierto.webp"
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Iquique Port"
          />
          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/20 to-[#00F5D4]/80 mix-blend-multiply"
          />
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"
          />
        </div>

        <div
          class="relative z-10 w-full max-w-lg md:ml-auto md:text-right"
          :class="hoveredSide === 'arica' ? 'opacity-30' : 'opacity-100'"
        >
          <div class="flex md:justify-end mb-4">
            <span
              class="inline-block py-1 px-3 rounded bg-[#0B0F1A]/20 border border-[#00F5D4]/50 text-[#00F5D4] font-mono text-[10px] uppercase tracking-widest backdrop-blur-md"
            >
              Iquique: territorio, exploración y futuro
            </span>
          </div>
          <h2
            class="font-orbitron text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg"
          >
            IQUIQUE
          </h2>
          <div
            class="h-1 w-12 bg-[#00F5D4] mb-6 transition-all duration-500 group-hover:w-32 md:ml-auto"
          />

          <p
            class="font-inter text-slate-300 text-lg leading-relaxed bg-[#0C362F]/20 mb-2 transform transition-all duration-700 ease-out"
            :class="[
              hoveredSide === 'iquique'
                ? 'md:block md:opacity-100 md:translate-y-0'
                : 'md:hidden md:opacity-0 md:translate-y-4',
              scrolledIquique
                ? 'max-md:opacity-100 max-md:translate-y-0'
                : 'max-md:opacity-0 max-md:translate-y-8',
            ]"
          >
            Los días 16 y 17 de junio, Iquique/Tarapacá concentrará una agenda
            enfocada en charlas magistrales sobre espacio, minería y ecosistemas
            del futuro, un taller universitario con NASA y visitas en terreno
            para conocer desarrollos agrícolas y sostenibles en condiciones
            extremas. Iquique aporta una mirada más experimental, académica y
            territorial al encuentro.
          </p>

          <div
            class="flex flex-wrap gap-2 md:justify-end mb-8 transform transition-all duration-700 delay-100 ease-out"
            :class="[
              hoveredSide === 'iquique'
                ? 'md:flex md:opacity-100 md:translate-y-0'
                : 'md:hidden md:opacity-0 md:translate-y-4',
              scrolledIquique
                ? 'max-md:opacity-100 max-md:translate-y-0'
                : 'max-md:opacity-0 max-md:translate-y-8',
            ]"
          >
            <span
              class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white"
              >#Logística</span
            >
            <span
              class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white"
              >#ZOFRI</span
            >
            <span
              class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white"
              >#Negocios</span
            >
          </div>

          <p
            class="font-inter text-slate-300 bg-[#0C362F]/20 text-lg leading-relaxed transform transition-all duration-700 delay-200 ease-out"
            :class="[
              hoveredSide === 'iquique'
                ? 'md:block md:opacity-100 md:translate-y-0'
                : 'md:hidden md:opacity-0 md:translate-y-4',
              scrolledIquique
                ? 'max-md:opacity-100 max-md:translate-y-0'
                : 'max-md:opacity-0 max-md:translate-y-8',
            ]"
          >
            Los cupos gratuitos están volando. Regístrate ahora o quédate fuera.
          </p>

          <div class="flex md:justify-end mt-4">
            <a
              href="#tickets"
              class="group px-8 py-4 border border-[#00F5D4] text-[#00F5D4] font-orbitron font-bold tracking-wider uppercase hover:bg-[#00F5D4]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,245,212,0.2)] hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] rounded-sm"
            >
              Asegura tu entrada
            </a>
          </div>
        </div>
      </div>

      <!-- Central Divider -->
      <div
        class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block z-20 pointer-events-none"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hoveredSide = ref<"arica" | "iquique" | null>(null);

const scrolledArica = ref(false);
const scrolledIquique = ref(false);
const aricaRef = ref<HTMLElement | null>(null);
const iquiqueRef = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aricaRef.value) scrolledArica.value = true;
          if (entry.target === iquiqueRef.value) scrolledIquique.value = true;
        }
      });
    },
    { threshold: 0.3 },
  );

  if (aricaRef.value) observer.observe(aricaRef.value);
  if (iquiqueRef.value) observer.observe(iquiqueRef.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

import Waki from "../assets/waki-logo-01-1024x280.png";
import CORFO from "../assets/CORFO.png";
import GED from "../assets/LOGO_GED.png";
import codesser from "../assets/logo-codesser.png";
import consorcio from "../assets/LOGOCONSORCIO-VERDE.png";

interface Staff {
  name: string;
  color: string;
  img: string;
  customClass?: string;
}

const staffs: Staff[] = [
  {
    name: "WakiLabs",
    color: "text-[#00F5D4]",
    img: Waki,
  },
  {
    name: "Consorcio del Desierto",
    color: "text-[#FFC857]",
    img: consorcio,
  },
  {
    name: "Gran Encuentro del desierto",
    color: "text-[#3B82F6]",
    img: GED,
    customClass: "w-40 h-40 md:w-44 md:h-44",
  },
  {
    name: "CORFO",
    color: "text-[#00F5D4]",
    img: CORFO,
  },
  {
    name: "codesser",
    color: "text-[#3B82F6]",
    img: codesser,
    customClass: "w-20 h-20 md:w-24 md:h-24",
  },
];
</script>

<style scoped>
.animate-marquee {
  animation: marquee 20s linear infinite;
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
