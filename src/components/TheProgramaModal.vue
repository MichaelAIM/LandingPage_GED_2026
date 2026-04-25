<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="fixed inset-0 z-[9000] flex items-start justify-center p-4 pt-10 md:pt-16 overflow-y-auto" @click.self="close">

        <!-- Backdrop -->
        <div class="fixed inset-0 bg-[#0B0F1A]/50 backdrop-blur-sm" @click="close"></div>

        <!-- Modal card — LIGHT design -->
        <div class="relative z-10 w-full max-w-xl bg-[#FFFDF8] shadow-[0_30px_80px_rgba(0,0,0,0.25)] mb-10" @click.stop>

          <!-- Colored top bar based on sede -->
          <div class="h-1 w-full" :class="sede === 'arica' ? 'bg-gradient-to-r from-[#C96B35] via-[#FFD447] to-[#C96B35]' : 'bg-gradient-to-r from-[#4E8FCC] via-[#7DB8E8] to-[#4E8FCC]'"></div>

          <!-- ── HEADER ── -->
          <div class="flex items-start justify-between px-8 pt-7 pb-6 border-b border-black/6">
            <div>
              <p class="font-mono text-[9px] uppercase tracking-[0.35em] mb-1"
                :class="sede === 'arica' ? 'text-[#C96B35]' : 'text-[#4E8FCC]'">
                Sede {{ sede === 'arica' ? 'Arica' : 'Iquique' }} — Programa Oficial GED 2026
              </p>
              <h2 class="font-orbitron text-xl md:text-2xl font-black uppercase text-[#0D1535] leading-tight">
                {{ sede === 'arica' ? '12 de Junio' : '16 de Junio' }},
                <span :class="sede === 'arica' ? 'text-[#C96B35]' : 'text-[#4E8FCC]'">2026</span>
              </h2>
              <p class="font-inter text-xs text-slate-400 mt-1">
                {{ sede === 'arica' ? 'Central de Ferrocarriles, Arica y Parinacota' : 'ZOFRI + Universidad Santo Tomás, Iquique' }}
              </p>
            </div>
            <button @click="close"
              class="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 border border-black/10 text-slate-400 hover:text-slate-700 hover:border-black/25 transition-all duration-150 cursor-pointer bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- ── CONTENT ── -->
          <div class="px-8 py-7 space-y-5">

            <!-- ════ ARICA ════ -->
            <template v-if="sede === 'arica'">

              <!-- Block 1: Charlas magistrales -->
              <div class="border-l-2 border-[#C96B35] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-[#C96B35] font-bold">Charlas Magistrales</span>
                <h3 class="font-orbitron text-sm font-black uppercase text-[#0D1535] leading-snug mt-1 mb-3">
                  Agricultura de próxima generación<br/>desde el desierto al espacio
                </h3>
                <ul class="space-y-2">
                  <li v-for="s in aricaSpeakers" :key="s.name" class="flex items-start gap-2">
                    <span class="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#C96B35]"></span>
                    <p class="text-xs text-slate-700 leading-snug">
                      <span class="font-semibold text-[#0D1535]">{{ s.name }}</span>
                      <span class="text-slate-400 font-mono text-[10px] ml-1">— {{ s.org }}</span>
                    </p>
                  </li>
                </ul>
              </div>

              <div class="h-px bg-black/5"></div>

              <!-- Block 2: Panel 1 -->
              <div class="border-l-2 border-[#FFD447] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-amber-500 font-bold">Panel Experto 1</span>
                <h3 class="font-orbitron text-sm font-black uppercase text-[#0D1535] leading-snug mt-1 mb-1">
                  El futuro de la logística<br/>Arica como Hub de la Macrozona Andina
                </h3>
                <p class="font-mono text-[10px] text-amber-600 mb-3">
                  Modera: Diego Paco — Gobernador Regional Arica y Parinacota
                </p>
                <ul class="space-y-2">
                  <li v-for="p in aricaPanel1" :key="p" class="flex items-start gap-2">
                    <span class="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-400"></span>
                    <span class="text-xs text-slate-600">{{ p }}</span>
                  </li>
                </ul>
              </div>

              <div class="h-px bg-black/5"></div>

              <!-- Block 3: Panel 2 -->
              <div class="border-l-2 border-[#FFD447] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-amber-500 font-bold">Panel Experto 2</span>
                <h3 class="font-orbitron text-sm font-black uppercase text-[#0D1535] leading-snug mt-1 mb-1">
                  Uniendo a Arica con el<br/>ecosistema innovador Chileno
                </h3>
                <p class="font-mono text-[10px] text-amber-600 mb-3">
                  Modera: Marcela Aravena — Ejecutiva Innovación ProChile
                </p>
                <ul class="space-y-2">
                  <li v-for="p in aricaPanel2" :key="p" class="flex items-start gap-2">
                    <span class="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-400"></span>
                    <span class="text-xs text-slate-600">{{ p }}</span>
                  </li>
                </ul>
              </div>

              <div class="h-px bg-black/5"></div>

              <!-- Block 4: Startup Stage -->
              <div class="border-l-2 border-[#4E8FCC] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-[#4E8FCC] font-bold">Startup Stage</span>
                <div class="flex flex-wrap gap-1.5 mt-3">
                  <span v-for="t in startupTags" :key="t"
                    class="font-mono text-[9px] text-slate-500 border border-black/10 bg-white px-2 py-0.5">{{ t }}</span>
                </div>
              </div>
            </template>

            <!-- ════ IQUIQUE ════ -->
            <template v-if="sede === 'iquique'">

              <!-- AM -->
              <div class="flex items-center gap-2 mb-2">
                <div class="w-5 h-5 flex items-center justify-center bg-[#4E8FCC]/10 border border-[#4E8FCC]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-[#4E8FCC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                </div>
                <p class="font-mono text-[9px] uppercase tracking-widest text-slate-400">Mañana — Centro de Convenciones ZOFRI</p>
              </div>

              <div class="border-l-2 border-[#4E8FCC] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-[#4E8FCC] font-bold">Charlas Magistrales</span>
                <h3 class="font-orbitron text-sm font-black uppercase text-[#0D1535] leading-snug mt-1 mb-3">
                  Espacio, Minería y Ecosistemas del futuro
                </h3>
                <ul class="space-y-2">
                  <li v-for="s in iquiqueSpeakers" :key="s.name" class="flex items-start gap-2">
                    <span class="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#4E8FCC]"></span>
                    <p class="text-xs text-slate-700 leading-snug">
                      <span class="font-semibold text-[#0D1535]">{{ s.name }}</span>
                      <span class="text-slate-400 font-mono text-[10px] ml-1">— {{ s.org }}</span>
                    </p>
                  </li>
                </ul>
              </div>

              <div class="border-l-2 border-[#FFD447] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-amber-500 font-bold">Panel Experto</span>
                <h3 class="font-orbitron text-sm font-black uppercase text-[#0D1535] leading-snug mt-1 mb-3">En definición</h3>
                <ul class="space-y-2">
                  <li v-for="p in iquiquePanel" :key="p" class="flex items-start gap-2">
                    <span class="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-amber-400"></span>
                    <span class="text-xs text-slate-600">{{ p }}</span>
                  </li>
                </ul>
              </div>

              <div class="h-px bg-black/5"></div>

              <!-- PM -->
              <div class="flex items-center gap-2 mb-2">
                <div class="w-5 h-5 flex items-center justify-center bg-[#C96B35]/10 border border-[#C96B35]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-[#C96B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                </div>
                <p class="font-mono text-[9px] uppercase tracking-widest text-slate-400">Tarde — Universidad Santo Tomás</p>
              </div>

              <div class="border-l-2 border-[#C96B35] pl-5">
                <span class="font-mono text-[9px] uppercase tracking-widest text-[#C96B35] font-bold">Taller Universitario</span>
                <h3 class="font-orbitron text-sm font-black uppercase text-[#0D1535] leading-snug mt-1 mb-1">
                  NASA × WAKI Labs<br/>Lunar Crop Challenge 2026
                </h3>
                <p class="font-mono text-[10px] text-amber-600 mb-2">
                  Dr. Bruce Link — NASA / MSc. Trent Smith — NASA
                </p>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Grupos universitarios "Profesor + Estudiantes" de las Universidades de Tarapacá y Arica.
                </p>
              </div>
            </template>

          </div>

          <!-- ── FOOTER ── -->
          <div class="flex items-center justify-between px-8 py-4 bg-[#F7F3EC] border-t border-black/6">
            <p class="font-mono text-[9px] uppercase tracking-widest text-slate-400">Sujeto a cambios</p>
            <button @click="close"
              class="font-mono text-[9px] uppercase tracking-widest text-slate-400 hover:text-[#C96B35] transition-colors cursor-pointer bg-transparent border-0">
              Cerrar ✕
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  sede?: "arica" | "iquique";
}>();

const emit = defineEmits<{ (e: "update:modelValue", v: boolean): void }>();
function close() { emit("update:modelValue", false); }

const aricaSpeakers = [
  { name: "Dr. Bruce Link", org: "NASA, USA" },
  { name: "Stuart Donald", org: "Al Dahra, UAE" },
  { name: "Dr. Sigfredo Fuentes, PhD", org: "Plant4Space, Australia" },
];
const aricaPanel1 = [
  "Jorge Cáceres — Gerente Empresas Portuarias Arica (Chile)",
  "Pamela Villarreal — CEO OTIF (México)",
  "+ Expertos en definición.",
];
const aricaPanel2 = [
  "Dr. Pablo Zamora — CoFounder Not-Co (Chile)",
  "Julio Brintrup — Director Innovación Los Lagos (Chile)",
  "+ Expertos en definición.",
];
const startupTags = [
  "Batalla de Robots del Desierto",
  "Santander X & UTA — Final Pitch",
  "Empresas locales",
  "Ayllu Solar",
  "Actividades en definición",
];
const iquiqueSpeakers = [
  { name: "Dr. Trent Smith", org: "NASA, USA" },
  { name: "Pamela Villarreal", org: "CEO OTIF, México" },
  { name: "Dr. Sigfredo Fuentes", org: "Plant4Space, Australia" },
];
const iquiquePanel = [
  "Marcia Echenique — Secretaria General CODESSER (Chile)",
  "+ Expertos en definición.",
];
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.25s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to { opacity: 0; }
</style>
