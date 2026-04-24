<template>
  <section
    id="about"
    class="relative w-full py-32 md:py-48 px-6 md:px-12 bg-[#0D1535] overflow-hidden"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1600&q=80"
        alt="Background"
        class="w-full h-full object-cover opacity-20"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#0D1535] via-[#0D1535]/90 to-[#0D1535]/50"
      />
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Top Section: Manifesto -->
      <div
        class="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- Left Side: Text content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="max-w-xl"
        >
          <!-- Logo nuevo GED -->
          <div class="flex items-center gap-4 mb-6">
            <img
              src="../assets/propuestas-logo-n2-03.png"
              alt="GED 2026"
              class="w-14 h-14 rounded-full drop-shadow-[0_0_12px_rgba(201,107,53,0.4)]"
            />
            <span
              class="inline-block py-1.5 px-5 rounded-full bg-[#FFD447]/10 border border-[#FFD447]/40 text-[#FFD447] font-mono font-bold text-xs uppercase tracking-widest"
            >
              // El Manifiesto del GED
            </span>
          </div>
          <h2
            class="font-orbitron text-4xl lg:text-5xl font-black text-white leading-tight mb-6 uppercase"
          >
            Del desierto <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#C96B35] to-[#4E8FCC]"
              >a la oportunidad:</span
            >
          </h2>
          <p
            class="font-inter text-base md:text-lg font-light text-[#F0EAD6]/80 leading-relaxed mb-6"
          >
            El Gran Encuentro del Desierto nace desde una convicción profunda:
            el desierto chileno no es un límite, sino una oportunidad. Es un
            territorio que inspira soluciones para los grandes desafíos del
            presente y del futuro, desde la producción sostenible hasta la
            logística, la innovación y la exploración de nuevos modelos de
            desarrollo.
          </p>
          <p
            class="font-inter text-base md:text-lg font-light text-[#F0EAD6]/80 leading-relaxed"
          >
            En esta segunda edición, GED amplía su mirada más allá de la
            agricultura del desierto e incorpora nuevas perspectivas que
            conectan ciencia, industria, emprendimiento y visión de futuro.
          </p>
        </div>

        <!-- Right Side: Video -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 200 },
          }"
          class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
        >
          <!-- Decorative ambient glow -->
          <div
            class="absolute -inset-4 bg-gradient-to-tr from-[#C96B35]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none z-0"
          ></div>

          <video
            ref="videoRef"
            src="../assets/presentacion2.mp4"
            class="relative w-full h-full object-cover z-10 rounded-2xl outline-none"
            controls
            playsinline
          ></video>

          <!-- Inner border overlay -->
          <div
            class="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none z-20"
          ></div>
        </div>
      </div>

      <!-- Bottom Section: Pillars Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C96B35]/8 rounded-full blur-[100px] pointer-events-none"
        />

        <div
          v-for="(pillar, index) in pillars"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: index * 100 },
          }"
          class="group p-8 rounded-2xl bg-[#121A2F]/60 border border-white/5 backdrop-blur-md hover:border-[#C96B35]/50 transition-all duration-300 hover:bg-[#121A2F]/80 flex flex-col h-full"
        >
          <div class="mb-6 flex items-center justify-between">
            <div
              class="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-[#C96B35]/30 transition-colors shadow-inner"
            >
              <component
                :is="pillar.icon"
                class="text-[#F0EAD6]/70 group-hover:text-[#C96B35] transition-colors"
                :size="28"
              />
            </div>
            <span
              class="font-mono text-xs text-white/20 uppercase font-bold group-hover:text-[#FFD447]/50 transition-colors"
              >0{{ index + 1 }}</span
            >
          </div>
          <h3
            class="font-orbitron text-xl font-bold text-[#F0EAD6] mb-3 group-hover:text-[#E8A067] transition-colors"
          >
            {{ pillar.title }}
          </h3>
          <p
            class="font-inter text-sm text-[#8A9BB8] leading-relaxed flex-grow"
          >
            {{ pillar.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import {
  Globe,
  Briefcase,
  Sparkles,
  Rocket,
  Palette,
  Link,
} from "lucide-vue-next";

const videoRef = ref<HTMLVideoElement | null>(null);

// Play video when it enters the viewport, pause when it leaves
useIntersectionObserver(
  videoRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && videoRef.value) {
      // Try to play with sound. If browser blocks it (autoplay policy), mute and play
      videoRef.value.play().catch(() => {
        if (videoRef.value) {
          videoRef.value.muted = true;
          videoRef.value
            .play()
            .catch((e) => console.warn("Autoplay prevented:", e));
        }
      });
    } else if (videoRef.value) {
      videoRef.value.pause();
    }
  },
  { threshold: 0.5 },
);

const pillars = [
  {
    title: "Agricultura de próxima generación",
    desc: "Biotecnología, resiliencia hídrica y tecnología AgTech enfocada en el desarrollo sostenible en condiciones extremas.",
    icon: Sparkles,
  },
  {
    title: "Logística del desierto",
    desc: "El rol estratégico y la infraestructura de conexión transcontinental que potencia el comercio mundial.",
    icon: Globe,
  },
  {
    title: "Negocios del desierto",
    desc: "Nuevos modelos de inversión corporativa, emprendimiento global y comercio en la macrozona.",
    icon: Briefcase,
  },
  {
    title: "Innovación del desierto",
    desc: "Exploración de la tecnología de defensa, telecomunicaciones, energía y herramientas espaciales.",
    icon: Rocket,
  },
  {
    title: "Arte y cultura del desierto",
    desc: "En un espacio cargado de historia, el arte y la cultura se encuentran para dar vida a las tradiciones, relatos y expresiones que definen la identidad del desierto.",
    icon: Palette,
  },
  {
    title: "Ecosistema del desierto",
    desc: "Plataforma de conexión sinérgica entre la academia, el sector público, industria privada y sociedad civil.",
    icon: Link,
  },
];
</script>
