<template>
  <div class="bg-[#0B0F1A] relative overflow-hidden">
    <section
      id="speakers"
      class="py-32 md:py-48 relative border-t border-white/5"
    >
      <!-- Background Glow -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none"
        ></div>
        <div
          class="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00F5D4]/5 rounded-full blur-[150px] pointer-events-none"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-4 xl:px-0 relative z-10">
        <!-- Header -->
        <div
          class="text-center mb-20 md:mb-24"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <span
            class="inline-block py-1.5 px-5 rounded-full bg-[#f928a9]/10 border border-[#f928a9]/30 text-[#f928a9] font-mono font-bold text-xs tracking-widest uppercase mb-6"
          >
            Líderes de la Industria
          </span>
          <h2
            class="font-orbitron text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Nuestros
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#f928a9] to-[#00F5D4]"
              >Expertos</span
            >
          </h2>
          <p
            class="font-inter text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed"
          >
            Mentes maestras de todo el mundo se reúnen en el desierto para
            proyectar el futuro de la minería, innovación, y exploración
            agro-espacial.
          </p>
        </div>

        <!-- Speakers Grid: Now 5 columns on large screens to fit all in one row -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 w-full"
        >
          <div
            v-for="(speaker, index) in speakers"
            :key="'speaker-' + index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 400, delay: (index % 5) * 100 },
            }"
            class="group relative bg-[#121A2F]/80 border border-white/5 hover:border-[#FF6B00]/40 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col h-full backdrop-blur-sm"
          >
            <!-- Image Header -->
            <div
              class="relative w-full aspect-[4/5] overflow-hidden bg-black/60"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#121A2F] via-[#121A2F]/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60"
              ></div>
              <img
                :src="speaker.img"
                :alt="speaker.name"
                class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                @error="
                  (e) =>
                    ((e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop')
                "
                loading="lazy"
              />
              <!-- Tag -->
              <div class="absolute top-3 left-3 right-3 z-20">
                <span
                  class="inline-flex py-1 px-3 rounded-full text-[9px] font-bold uppercase tracking-widest bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-lg items-center truncate max-w-full"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full mr-2 shrink-0 bg-[#FF6B00] shadow-[0_0_5px_currentColor] text-[#FF6B00]"
                  ></span>
                  <span class="truncate">{{ speaker.tag }}</span>
                </span>
              </div>
            </div>

            <!-- Content -->
            <div
              class="p-5 lg:p-4 xl:p-6 relative flex flex-col flex-grow bg-[#121A2F]"
            >
              <!-- Role & Name -->
              <div class="mb-4">
                <p
                  class="text-[#f928a9] font-mono text-[9.5px] font-bold tracking-widest uppercase mb-2 min-h-[32px] flex items-center leading-snug line-clamp-2"
                >
                  {{ speaker.role }}
                </p>
                <h3
                  class="font-orbitron text-xl md:text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors duration-500 leading-tight"
                >
                  {{ speaker.name }}
                </h3>
              </div>

              <!-- Highlight Quote -->
              <div class="mt-auto pt-4 border-t border-white/5 relative">
                <QuoteIcon
                  class="absolute top-3 left-0 text-white/5 w-8 h-8 -z-0 transition-colors duration-500 group-hover:text-white/10"
                />
                <p
                  class="font-inter text-[12px] xl:text-[13px] text-slate-400 italic relative z-10 leading-relaxed font-light"
                >
                  "{{ speaker.quote }}"
                </p>
              </div>

              <!-- Bottom gradient bar -->
              <div
                class="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Quote as QuoteIcon } from "lucide-vue-next";

import Bruce from "../assets/Bruce.png";
import Stuart from "../assets/Stuart.png";
import Sigfredo from "../assets/Sigfredo.png";
import Pablo from "../assets/Pablo.png";
import Pamela from "../assets/PAMELA-VILLARREAL.jpg";
import Trent from "../assets/trent-nasa.png";

const speakers = [
  {
    img: Bruce,
    name: "Dr. Bruce M. Link.",
    role: "Investigador Principal NASA / Utah State",
    quote:
      "La adaptación biológica a entornos extremos es la clave para la supervivencia humana a largo plazo.",
    tag: "Biotecnología",
  },
  {
    img: Stuart,
    name: "Stuart J. Donald.",
    role: "Director Global de Agricultura. Grupo Al Dahra de Emiratos Árabes.",
    quote:
      "La agricultura del futuro es una sinergia entre tecnología de punta y prácticas sostenibles, impulsando la seguridad alimentaria global.",
    tag: "Agronegocios",
  },
  {
    img: Pamela,
    name: "Pamela Villarreal",
    role: "CEO OTIF (México)",
    quote:
      "Transformando la eficiencia de la logística global y la cadena de suministro mediante IA disruptiva y tecnología sostenible.",
    tag: "Innovación",
  },
  {
    img: Sigfredo,
    name: "Dr. Sigfredo Fuentes",
    role: "Plant4Space Program",
    quote:
      "Impulsa cultivos sostenibles y de cero residuos para mejorar la agricultura en la Tierra.",
    tag: "Ag-Tech",
  },
  {
    img: Trent,
    name: "Dr. Trent Smith",
    role: "Asesor de Investigación para la Producción de Cultivos Espaciales en la NASA",
    quote:
      "Desarrollando tecnologías de cultivo espacial para la exploración humana a largo plazo y la sostenibilidad en la Tierra.",
    tag: "Ing. Espacial",
  },
];
</script>
