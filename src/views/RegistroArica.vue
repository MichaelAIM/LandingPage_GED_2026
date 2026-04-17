<template>
  <section
    class="relative min-h-screen overflow-hidden bg-[#050810] text-white"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),transparent_18%)]"
    ></div>
    <div
      class="pointer-events-none absolute inset-0 opacity-20"
      :style="{
        backgroundImage:
          'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 opacity=%22.08%22%3E%3Cpath d=%22M30 0v60M0 30h60%22 stroke=%22%23fff%22 stroke-width=%22.5%22/%3E%3C/g%3E%3C/svg%3E\')',
      }"
    ></div>
    <img
      src="../assets/LOGO_GED.png"
      class="mx-auto h-24 w-auto pt-5 pl-5 sm:ml-0 sm:mr-0"
      alt=""
    />
    <div
      class="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-36 sm:px-6 lg:px-12"
    >
      <div class="mt-10 grid gap-10 lg:grid-cols-[1.9fr_1fr] items-start">
        <div class="space-y-6">
          <article
            class="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071018]/95 p-6 sm:p-8 lg:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div
              class="absolute -right-24 top-8 h-40 w-40 rounded-full bg-[#38bdf8]/10 blur-3xl"
            ></div>
            <div
              class="absolute -left-24 bottom-10 h-40 w-40 rounded-full bg-[#22c55e]/10 blur-3xl"
            ></div>
            <div class="flex items-center justify-between gap-6">
              <span
                class="inline-flex items-center gap-3 rounded-full border border-[#f928a9]/20 bg-[#0f172a]/80 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#f928a9]"
              >
                <span class="h-2 w-2 rounded-full bg-[#f928a9]"></span>
                Registro Arica
              </span>
            </div>

            <div class="mt-8 max-w-3xl space-y-6">
              <div>
                <p
                  class="text-xl font-orbitron uppercase tracking-[0.25em] text-[#38BDF8] font-black"
                >
                  Evento: El Gran Encuentro del Desierto 2026 - Arica
                </p>
              </div>

              <div
                class="bg-[#071116]/95 p-6 sm:p-8 shadow-[0_30px_80px_-30px_rgba(56,189,248,0.18)]"
              >
                <div
                  id="welcu_embed_sale_7410574333"
                  class="welcu_embed rounded-[28px] border border-white/10 bg-[#050a11]/95 p-6"
                >
                  <div class="flex items-center justify-center py-12">
                    <img
                      src="https://assets.welcu.com/images/loading.gif"
                      width="50"
                      height="50"
                      alt="Cargando formulario"
                    />
                  </div>
                </div>
              </div>

              <p class="text-sm leading-6 text-slate-400">
                <i
                  class="font-mono text-xs uppercase tracking-widest text-[#f928a9]"
                  >Nota importante:</i
                >
                Si el formulario no aparece de inmediato, actualiza la página.
              </p>
            </div>
          </article>
        </div>

        <aside class="space-y-6">
          <div
            class="rounded-[32px] border border-white/10 bg-[#071116]/95 p-8 shadow-[0_30px_80px_-30px_rgba(34,197,94,0.18)]"
          >
            <h2 class="text-xl sm:text-3xl font-orbitron font-black text-white">
              Completa tu inscripción oficial aquí y ahora
            </h2>
            <p class="mt-4 text-sm sm:text-base text-slate-300 leading-7">
              Welcu es la forma oficial y más directa para reservar tu cupo de
              Iquique.
            </p>

            <h3
              class="font-orbitron text-xl font-black tracking-[-0.04em] text-white mt-4"
            >
              Detalles clave
            </h3>
            <div class="mt-5 space-y-4 text-slate-300">
              <div>
                <span
                  class="block text-xs uppercase tracking-[0.3em] text-[#7dd3fc]"
                  >Lugar del Evento</span
                >
                Central de Ferrocarriles - Arica Y Parinacota, Chile.
              </div>
              <div>
                <span
                  class="block text-xs uppercase tracking-[0.3em] text-[#7dd3fc]"
                  >Fecha del Evento</span
                >
                12 de junio de 2026.
              </div>
              <div>
                <span
                  class="block text-xs uppercase tracking-[0.3em] text-[#7dd3fc]"
                  >Modalidad</span
                >
                Presencial, con transmisión en vivo de las conferencias
                principales.
              </div>
              <div>
                <span
                  class="block text-xs uppercase tracking-[0.3em] text-[#7dd3fc]"
                  >Asistencia</span
                >
                Confirmación por email
              </div>
            </div>
            <ul class="mt-6 space-y-3 text-slate-300">
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#38bdf8]"
                ></span>
                Costo 0 CLP seguro con Welcu
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]"
                ></span>
                Cupos limitados y confirmación rápida
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#f928a9]"
                ></span>
                Experiencia alineada con la identidad GED
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div
    class="hidden sm:flex fixed inset-x-0 bottom-0 z-50 mx-auto flex w-full justify-center overflow-hidden bg-white/90 px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur-xl"
  >
    <div class="marquee overflow-hidden w-full">
      <div class="marquee-track flex items-center gap-10">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          class="flex h-16 w-40 items-center justify-center opacity-80 transition duration-300 hover:opacity-100"
        >
          <img :src="logo" alt="logo" class="max-h-12 object-contain" />
        </div>
        <div
          v-for="(logo, index) in logos"
          :key="'clone-' + index"
          class="flex h-16 w-40 items-center justify-center opacity-80"
        >
          <img :src="logo" alt="logo" class="max-h-12 object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
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

const logos = [
  Waki,
  CORFO,
  GORE,
  codesser,
  NASA,
  IP,
  UNAP,
  mikrolab,
  ancestral,
  arid,
  consorcio,
  zofri,
  solartrust,
  emiratos,
  nutrandes,
  prochile,
  comiteArica,
  comiteTarapaca,
  sitrans,
  ultraport,
  epa,
  sqm,
  minciencias,
  aldahara,
];

onMounted(() => {
  if (
    !document.querySelector(
      'script[src="https://welcu.com/waki/el-gran-encuentro-del-desierto-2026/sales/1a4094ca4b.embed?currency_id=clp&locale=es"]',
    )
  ) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.src =
      "https://welcu.com/waki/el-gran-encuentro-del-desierto-2026/sales/1a4094ca4b.embed?currency_id=clp&locale=es";
    document.body.appendChild(script);
  }
});
</script>

<style scoped>
.marquee {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  gap: 2.5rem;
  animation: marquee 50s linear infinite;
  will-change: transform;
}

.marquee-track > * {
  flex: 0 0 auto;
}

:deep(.welcu_embed),
:deep(.welcu_embed *) {
  color: #ffffff !important;
  background-color: transparent !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
}

:deep(.welcu_embed a),
:deep(.welcu_embed a *),
:deep(.welcu_embed input),
:deep(.welcu_embed select) {
  color: #ffffff !important;
}

:deep(.welcu_embed button),
:deep(.welcu_embed input[type="submit"]),
:deep(.welcu_embed .wlc-button),
:deep(.welcu_embed .button),
:deep(.welcu_embed a.wlc-button) {
  background-color: #4f46e5 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 9999px !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  box-shadow: 0 12px 28px rgba(79, 70, 229, 0.18) !important;
  transition:
    background-color 0.3s ease,
    color 0.3s ease !important;
}

:deep(.welcu_embed button:hover),
:deep(.welcu_embed input[type="submit"]:hover),
:deep(.welcu_embed .wlc-button:hover),
:deep(.welcu_embed .button:hover),
:deep(.welcu_embed a.wlc-button:hover) {
  background-color: #4338ca !important;
}

:deep(.welcu_embed table),
:deep(.welcu_embed table th),
:deep(.welcu_embed table td) {
  border-color: rgba(255, 255, 255, 0.12) !important;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
