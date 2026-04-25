<template>
  <div class="relative min-h-screen bg-[#0B0F1A] font-sans overflow-x-hidden">

    <!-- ░░ HERO SPLIT — imagen izquierda, contenido derecha ░░ -->
    <div class="relative min-h-screen flex flex-col lg:flex-row">

      <!-- PANEL IZQUIERDO: Imagen + overlay dramático -->
      <div class="relative lg:w-[45%] min-h-[40vh] lg:min-h-screen overflow-hidden">
        <img
          src="../assets/Arica-Central-6-768x512.jpg"
          alt="Central de Ferrocarriles Arica"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- Gradiente oscuro para legibilidad -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F1A]/30 via-[#0B0F1A]/10 to-[#0B0F1A]"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/60 via-transparent to-[#0B0F1A]/80"></div>

        <!-- Contenido superpuesto en la imagen -->
        <div class="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10">
          <!-- Volver -->
          <button @click="goBack"
            class="self-start flex items-center gap-2 text-[#F0EAD6]/60 hover:text-[#F0EAD6] transition-colors duration-300 group cursor-pointer bg-transparent border-0 p-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="font-mono text-[11px] uppercase tracking-widest">Volver al inicio</span>
          </button>

          <!-- Info del evento sobre la foto -->
          <div class="hidden lg:block">
            <div class="mb-3">
              <span class="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#E8A067] bg-[#C96B35]/20 border border-[#C96B35]/30 px-3 py-1 rounded-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C96B35] animate-pulse inline-block"></span>
                Sede Arica
              </span>
            </div>
            <p class="font-orbitron text-[#F0EAD6]/40 text-xs uppercase tracking-widest mb-1">Central de Ferrocarriles</p>
            <p class="font-orbitron text-[#F0EAD6]/40 text-xs uppercase tracking-widest">Arica y Parinacota, Chile</p>
          </div>
        </div>
      </div>

      <!-- PANEL DERECHO: Logo + formulario -->
      <div class="relative lg:w-[55%] flex flex-col min-h-screen overflow-y-auto">
        <!-- Ruido de fondo sutil -->
        <div class="pointer-events-none absolute inset-0 opacity-[0.025]"
          :style="{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 opacity=%221%22%3E%3Cpath d=%22M30 0v60M0 30h60%22 stroke=%22%23F0EAD6%22 stroke-width=%22.5%22/%3E%3C/g%3E%3C/svg%3E\')' }">
        </div>

        <!-- Glow ambiental naranja -->
        <div class="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C96B35]/8 blur-[120px]"></div>

        <div class="relative z-10 flex flex-col flex-1 px-8 md:px-14 lg:px-16 py-10 pb-28">

          <!-- Logo GED -->
          <div class="flex items-center gap-4 mb-12">
            <img src="../assets/propuestas-logo-n2-09.png" alt="GED 2026"
              class="h-16 w-auto drop-shadow-[0_0_24px_rgba(201,107,53,0.6)]" />
            <div class="h-8 w-px bg-[#F0EAD6]/10"></div>
            <span class="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F0EAD6]/40 leading-tight">
              Gran Encuentro<br/>del Desierto
            </span>
          </div>

          <!-- Headline -->
          <div class="mb-8">
            <h1 class="font-orbitron text-3xl md:text-4xl xl:text-5xl font-black uppercase text-white leading-[1.1] mb-4">
              Registro<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#C96B35] to-[#FFD447]">Arica 2026</span>
            </h1>
            <div class="flex flex-wrap gap-4 items-center mt-5">
              <div class="flex items-center gap-2 text-[#F0EAD6]/50">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#C96B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span class="font-mono text-[11px] uppercase tracking-widest">11 – 13 Junio 2026</span>
              </div>
              <div class="flex items-center gap-2 text-[#F0EAD6]/50">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#C96B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                <span class="font-mono text-[11px] uppercase tracking-widest">Central de Ferrocarriles</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-mono text-[11px] uppercase tracking-widest text-[#C96B35] border border-[#C96B35]/40 px-2 py-0.5">
                  Entrada Gratuita
                </span>
              </div>
            </div>
          </div>

          <!-- Separador -->
          <div class="w-full h-px bg-gradient-to-r from-[#C96B35]/40 via-[#F0EAD6]/10 to-transparent mb-8"></div>

          <!-- Formulario Welcu -->
          <div class="flex-1">
            <p class="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F0EAD6]/40 mb-5">
              // Formulario de inscripción oficial
            </p>

            <div class="rounded-none border border-[#C96B35]/15 bg-[#080D1A]/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
              <!-- Barra superior naranja -->
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C96B35] via-[#FFD447] to-transparent"></div>

              <div id="welcu_embed_sale_7410574333" class="welcu_embed">
                <div class="flex flex-col items-center justify-center py-16 gap-3">
                  <img src="https://assets.welcu.com/images/loading.gif" width="36" height="36" alt="Cargando..." />
                  <span class="font-mono text-[10px] uppercase tracking-widest text-[#F0EAD6]/30">Cargando formulario Welcu...</span>
                </div>
              </div>
            </div>

            <p class="mt-4 font-inter text-[11px] text-[#F0EAD6]/30 leading-relaxed">
              <span class="text-[#E8A067] font-mono">Nota —</span>
              Si el formulario no carga, actualiza la página. El script se inyecta automáticamente al montar.
            </p>
          </div>

          <!-- Footer del panel -->
          <div class="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
            <p class="font-mono text-[10px] uppercase tracking-widest text-[#F0EAD6]/20">© 2026 WakiLabs</p>
            <button @click="goIquique"
              class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#F0EAD6]/30 hover:text-[#4E8FCC] transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0">
              Ver Registro Iquique
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ░░ BARRA SPONSORS — fija al fondo ░░ -->
    <div class="hidden sm:flex fixed inset-x-0 bottom-0 z-50 w-full overflow-hidden bg-[#080D1A]/98 border-t border-[#C96B35]/10 backdrop-blur-xl px-0 py-2.5">
      <div class="marquee overflow-hidden w-full">
        <div class="marquee-track flex items-center gap-8">
          <div v-for="(logo, index) in logos" :key="index"
            class="flex h-12 w-32 flex-shrink-0 items-center justify-center opacity-40 transition duration-300 hover:opacity-80">
            <img :src="logo" alt="logo" class="max-h-8 object-contain filter brightness-0 invert" />
          </div>
          <div v-for="(logo, index) in logos" :key="'c-' + index"
            class="flex h-12 w-32 flex-shrink-0 items-center justify-center opacity-40">
            <img :src="logo" alt="logo" class="max-h-8 object-contain filter brightness-0 invert" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import Waki from "../assets/waki.png";
import CORFO from "../assets/CORFO.png";
import GORE from "../assets/GORE.png";
import codesser from "../assets/codesser.jpg";
import NASA from "../assets/NASA.png";
import IP from "../assets/logo-IP-Santo-tomas.webp";
import UNAP from "../assets/UNAP.png";
import mikrolab from "../assets/mikrolab.webp";
import ancestral from "../assets/ancestral.png";
import arid from "../assets/Arid.png";
import consorcio from "../assets/CONSORCIO.png";
import zofri from "../assets/zofri.png";
import solartrust from "../assets/solartrust.webp";
import emiratos from "../assets/emiratos.webp";
import nutrandes from "../assets/nutrandes.png";
import prochile from "../assets/prochile.png";
import comiteArica from "../assets/comiteArica.webp";
import comiteTarapaca from "../assets/comiteTarapaca.webp";
import sitrans from "../assets/SITRANS.webp";
import ultraport from "../assets/ultraport.webp";
import epa from "../assets/EPA.webp";
import sqm from "../assets/sqm.png";
import minciencias from "../assets/minciencias.png";
import aldahara from "../assets/aldahara.webp";

const router = useRouter();

const logos = [
  Waki, CORFO, GORE, codesser, NASA, IP, UNAP, mikrolab,
  ancestral, arid, consorcio, zofri, solartrust, emiratos,
  nutrandes, prochile, comiteArica, comiteTarapaca, sitrans,
  ultraport, epa, sqm, minciencias, aldahara,
];

function goBack() { router.push("/"); }
function goIquique() { router.push("/registro-iquique"); }

onMounted(() => {
  const src = "https://welcu.com/waki/el-gran-encuentro-del-desierto-2026/sales/1a4094ca4b.embed?currency_id=clp&locale=es";
  if (!document.querySelector(`script[src="${src}"]`)) {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.charset = "utf-8";
    s.async = true;
    s.src = src;
    document.body.appendChild(s);
  }
});
</script>

<style scoped>
/* ── Marquee ── */
.marquee { overflow: hidden; }
.marquee-track {
  display: flex;
  gap: 2rem;
  animation: marquee 55s linear infinite;
  will-change: transform;
}
.marquee-track > * { flex: 0 0 auto; }

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Welcu embed overrides ── */
:deep(.welcu_embed),
:deep(.welcu_embed *) {
  color: #F0EAD6 !important;
  background-color: transparent !important;
  border-color: rgba(240, 234, 214, 0.08) !important;
  font-family: 'Inter', sans-serif !important;
}

:deep(.welcu_embed input),
:deep(.welcu_embed select),
:deep(.welcu_embed textarea) {
  background-color: rgba(8, 13, 26, 0.8) !important;
  color: #F0EAD6 !important;
  border: 1px solid rgba(240, 234, 214, 0.12) !important;
  border-radius: 0 !important;
}

:deep(.welcu_embed input::placeholder) {
  color: rgba(240, 234, 214, 0.25) !important;
}

:deep(.welcu_embed button),
:deep(.welcu_embed input[type="submit"]),
:deep(.welcu_embed .wlc-button),
:deep(.welcu_embed .button),
:deep(.welcu_embed a.wlc-button) {
  background-color: #C96B35 !important;
  color: #F0EAD6 !important;
  border: none !important;
  border-radius: 0 !important;
  font-family: 'Orbitron', sans-serif !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  box-shadow: 0 0 30px rgba(201, 107, 53, 0.3) !important;
  transition: background-color 0.25s ease !important;
}

:deep(.welcu_embed button:hover),
:deep(.welcu_embed input[type="submit"]:hover),
:deep(.welcu_embed .wlc-button:hover),
:deep(.welcu_embed a.wlc-button:hover) {
  background-color: #FFD447 !important;
  color: #0B0F1A !important;
}

:deep(.welcu_embed table),
:deep(.welcu_embed table th),
:deep(.welcu_embed table td) {
  border-color: rgba(240, 234, 214, 0.08) !important;
}

:deep(.welcu_embed h2),
:deep(.welcu_embed h3),
:deep(.welcu_embed label) {
  color: #F0EAD6 !important;
  font-family: 'Orbitron', sans-serif !important;
}

:deep(.welcu_embed a) {
  color: #E8A067 !important;
}
</style>
