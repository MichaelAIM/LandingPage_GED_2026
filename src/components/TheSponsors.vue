<template>
  <section class="py-32 md:py-40 bg-[#F7F3EC] border-t border-[#C96B35]/10 relative">
    <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
      <span
        class="inline-block py-1.5 px-5 rounded-full bg-[#0B0F1A]/10 border border-[#0B0F1A]/40 text-[#0B0F1A] font-mono text-xs uppercase tracking-widest mb-12 font-bold">
        Aliados del Ecosistema
      </span>
      <div class="flex flex-wrap justify-center items-center gap-12 md-gap-24 transition-opacity duration-500">
        <div v-for="(sponsor, index) in sponsors" :key="index"
          class="group cursor-pointer transition-all duration-500 hover:scale-110">
          <img :src="sponsor.img" :alt="sponsor.name" class="w-36 h-36 object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Waki from "../assets/waki.png";
import CORFO from "../assets/CORFO.png";
import GORE from "../assets/GORE.png";
import codesser from "../assets/codesser.png";
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

const sponsors = [
  {
    name: "WakiLabs",
    color: "text-[#FF6B00]",
    img: Waki,
  },
  {
    name: "Consorcio del Desierto",
    color: "text-[#FFC857]",
    img: consorcio,
  },
  {
    name: "CORFO",
    color: "text-[#00F5D4]",
    img: CORFO,
  },
  {
    name: "Gobierno Regional de Arica y Parinacota",
    color: "text-[#3B82F6]",
    img: GORE,
  },
  {
    name: "codesser",
    color: "text-[#3B82F6]",
    img: codesser,
  },
  {
    name: "NASA",
    color: "text-white",
    img: NASA,
  },
  {
    name: "IP CFT Santo Tomás",
    color: "text-[#8B5CF6]",
    img: IP,
  },
  {
    name: "UNAP",
    color: "text-[#10B981]",
    img: UNAP,
  },
  {
    name: "mikrolab",
    color: "text-[#EF4444]",
    img: mikrolab,
  },
  {
    name: "Ancestral Technologies",
    color: "text-[#EF4444]",
    img: ancestral,
  },
  {
    name: "Zofri",
    color: "text-[#EF4444]",
    img: zofri,
  },
  {
    name: "Arid",
    color: "text-[#EF4444]",
    img: arid,
  },
  {
    name: "solartrust",
    color: "text-[#EF4444]",
    img: solartrust,
  },
  {
    name: "emiratos",
    color: "text-[#EF4444]",
    img: emiratos,
  },
  {
    name: "prochile",
    color: "text-[#EF4444]",
    img: prochile,
  },
  {
    name: "comiteArica",
    color: "text-[#EF4444]",
    img: comiteArica,
  },
  {
    name: "comiteTarapaca",
    color: "text-[#EF4444]",
    img: comiteTarapaca,
  },
  {
    name: "nutrandes",
    color: "text-[#EF4444]",
    img: nutrandes,
  },
  {
    name: "sitrans",
    color: "text-[#EF4444]",
    img: sitrans,
  },
  {
    name: "ultraport",
    color: "text-[#EF4444]",
    img: ultraport,
  },
  {
    name: "epa",
    color: "text-[#EF4444]",
    img: epa,
  },
  {
    name: "sqm",
    color: "text-[#EF4444]",
    img: sqm,
  },
  {
    name: "minciencias",
    color: "text-[#EF4444]",
    img: minciencias,
  },
  {
    name: "aldahara",
    color: "text-[#EF4444]",
    img: aldahara,
  },
];
</script>
<style scoped>
.md-gap-24 {
  gap: 1rem 6rem !important;
}
</style>
