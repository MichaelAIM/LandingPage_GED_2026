<template>
  <div class="bg-[#0B0F1A] relative overflow-hidden">
    <!-- ARICA SECTION -->
    <section id="speakers-arica" class="py-24 relative border-t border-white/5">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Header Arica -->
        <div class="text-center mb-20" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <span
            class="inline-block py-1 px-4 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] font-orbitron font-bold text-sm tracking-widest uppercase mb-4">
            SEDE ARICA
          </span>
          <h2 class="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            VOCES DEL DESIERTO <span class="text-[#FF6B00] block md:inline">| ARICA</span>
          </h2>
          <p class="font-inter text-[#E6EAF0]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Innovación, conexión internacional y apertura. Los líderes que darán inicio al encuentro proyectando
            soluciones globales desde la frontera norte.
          </p>
        </div>

        <!-- Arica Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="(speaker, index) in aricaSpeakers" :key="'arica-' + index" v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: index * 100 } }"
            class="group relative bg-[#121A2F]/60 border border-white/5 hover:border-[#FF6B00]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,107,0,0.15)] flex flex-col h-full">
            <!-- Image Header -->
            <div class="relative w-full aspect-[4/5] overflow-hidden bg-black/40">
              <div class="absolute inset-0 bg-gradient-to-t from-[#121A2F] via-transparent to-transparent z-10" />
              <img :src="speaker.img" :alt="speaker.name"
                class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                @error="(e) => ((e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop')" />
              <!-- Tag -->
              <div class="absolute top-4 left-4 z-20">
                <span
                  class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  {{ speaker.tag }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 relative flex flex-col flex-grow bg-[#121A2F]">
              <!-- Role & Name -->
              <div class="mb-6">
                <p class="text-[#FF6B00] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">{{ speaker.role
                  }}</p>
                <h3 class="font-orbitron text-xl font-bold text-white">{{ speaker.name }}</h3>
              </div>

              <!-- Highlight Quote -->
              <div class="mt-auto pt-6 border-t border-white/5 relative">
                <QuoteIcon class="absolute top-4 left-0 text-white/5 w-8 h-8 -z-0" />
                <p class="font-inter text-sm text-[#E6EAF0]/80 italic relative z-10 leading-relaxed font-light">
                  "{{ speaker.quote }}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IQUIQUE SECTION -->
    <section id="speakers-iquique" class="py-24 relative border-t border-white/5">
      <div class="absolute inset-0 bg-gradient-to-tl from-[#00F5D4]/5 to-transparent pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Header Iquique -->
        <div class="text-center mb-20" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <span
            class="inline-block py-1 px-4 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-orbitron font-bold text-sm tracking-widest uppercase mb-4">
            SEDE IQUIQUE
          </span>
          <h2 class="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            VOCES DEL DESIERTO <span class="text-[#00F5D4] block md:inline">| IQUIQUE</span>
          </h2>
          <p class="font-inter text-[#E6EAF0]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Territorio, exploración e industria. Las mentes maestras detrás de los desarrollos en minería sustentable,
            espacio y macro logistica.
          </p>
        </div>

        <!-- Iquique Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="(speaker, index) in iquiqueSpeakers" :key="'iquique-' + index" v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: index * 100 } }"
            class="group relative bg-[#121A2F]/60 border border-white/5 hover:border-[#00F5D4]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,245,212,0.15)] flex flex-col h-full">
            <!-- Image Header -->
            <div class="relative w-full aspect-[4/5] overflow-hidden bg-black/40">
              <div class="absolute inset-0 bg-gradient-to-t from-[#121A2F] via-transparent to-transparent z-10" />
              <img :src="speaker.img" :alt="speaker.name"
                class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                @error="(e) => ((e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop')" />
              <!-- Tag -->
              <div class="absolute top-4 left-4 z-20">
                <span
                  class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  {{ speaker.tag }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 relative flex flex-col flex-grow bg-[#121A2F]">
              <!-- Role & Name -->
              <div class="mb-6">
                <p class="text-[#00F5D4] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">{{ speaker.role
                  }}</p>
                <h3 class="font-orbitron text-xl font-bold text-white">{{ speaker.name }}</h3>
              </div>

              <!-- Highlight Quote -->
              <div class="mt-auto pt-6 border-t border-white/5 relative">
                <QuoteIcon class="absolute top-4 left-0 text-white/5 w-8 h-8 -z-0" />
                <p class="font-inter text-sm text-[#E6EAF0]/80 italic relative z-10 leading-relaxed font-light">
                  "{{ speaker.quote }}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Quote as QuoteIcon } from 'lucide-vue-next'

// We try to import existing local assets if available
import Bruce from '../assets/Bruce.png'
import Stuart from '../assets/Stuart.png'
import Sigfredo from '../assets/Sigfredo.png'
import Pablo from '../assets/Pablo.png'

// ARICA SPEAKERS
const aricaSpeakers = [
  {
    img: Bruce,
    name: 'Bruce Bugbee',
    role: 'Investigador Principal NASA / Utah State',
    quote: 'La adaptación biológica a entornos extremos es la clave para la supervivencia humana a largo plazo.',
    tag: 'Biotecnología'
  },
  {
    img: Pablo,
    name: 'Pablo Zamora',
    role: 'Presidente Fundación Chile',
    quote: 'El modelo de inversión corporativa debe evolucionar hacia un ecosistema integrado transfronterizo.',
    tag: 'Innovación Corporativa'
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    name: 'Pamela Villarreal',
    role: 'CEO OTIF (México)',
    quote: 'La integración de cadenas de suministro globales requiere una visión de futuro y una apuesta por la innovación.',
    tag: 'Innovación'
  },
  {
    img: Sigfredo,
    name: 'Dr. Sigfredo Fuentes',
    role: 'Plant4Space Program (Australia)',
    quote: 'Impulsa cultivos sostenibles y de cero residuos para alimentar misiones espaciales y mejorar la agricultura en la Tierra.',
    tag: 'Ag-Tech'
  },
]

// IQUIQUE SPEAKERS
const iquiqueSpeakers = [
  {
    img: Stuart,
    name: 'Dr. Trent Smith ',
    role: 'CEO Alesca Life Technologies',
    quote: 'La automatización de ecosistemas controlados revolucionará la matriz productiva del norte chileno.',
    tag: 'Ingeniería Espacial'
  },
  {
    img: Sigfredo,
    name: 'Sigfredo Fuentes',
    role: 'NASA (United States of America)',
    quote: 'La inteligencia artificial nos permite anticipar las necesidades fisiológicas complejas en tiempo real.',
    tag: 'IA & Datos'
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    name: 'Pamela Villarreal',
    role: 'CEO OTIF (México)',
    quote: 'La integración de cadenas de suministro globales requiere una visión de futuro y una apuesta por la innovación.',
    tag: 'Innovación'
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    name: 'Marcia Echenique',
    role: 'Secretaria General CODESSER (Chile)',
    quote: 'Impulsa la colaboración público-privada para el desarrollo económico y social de la región.',
    tag: 'Innovación'
  },
]
</script>
