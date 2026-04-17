<template>
  <section
    id="nasa-workshop"
    class="relative w-full py-32 md:py-48 bg-[#050810] overflow-hidden flex items-center border-y border-[#22C55E]/20 nasa-workshop-bg"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        class="absolute left-[-5%] top-1/3 w-72 h-72 rounded-full bg-[#22C55E]/10 blur-[120px]"
      ></div>
      <div
        class="absolute right-[-10%] bottom-10 w-72 h-72 rounded-full bg-[#38BDF8]/10 blur-[140px]"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,31,0.75),transparent_30%)]"
      ></div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden pointer-events-none select-none opacity-5 z-0"
    >
      <h2
        class="font-orbitron font-black text-[18vw] leading-none whitespace-nowrap text-white/10"
      >
        NASA IQUIQUE
      </h2>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
      >
        <!-- Left: Text content -->
        <div class="lg:col-span-7 flex flex-col items-start relative space-y-8">
          <div
            class="absolute -left-12 -top-12 w-28 h-28 bg-[#22C55E]/10 blur-[80px] rounded-full pointer-events-none"
          ></div>

          <div
            class="flex items-center gap-3 bg-[#071316]/95 border border-[#22C55E]/20 px-5 py-2.5 rounded-full shadow-[0_0_28px_rgba(34,197,94,0.12)]"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E]/40 opacity-60"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.35)]"
              ></span>
            </span>
            <span
              class="text-[#A5F3FC] font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase font-black"
            >
              ACCESO CLASIFICADO: CUPOS CRÍTICAMENTE LIMITADOS
            </span>
          </div>

          <p
            class="font-mono text-[#22C55E] tracking-widest uppercase text-xs md:text-sm font-bold flex items-center"
          >
            <span class="w-8 h-[2px] bg-[#22C55E] mr-4 inline-block"></span>
            Misión Operativa / Solo Con Postulación
          </p>

          <h2
            class="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[0.95] uppercase tracking-[-0.03em]"
          >
            Taller <br class="hidden sm:block" />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] via-[#38BDF8] to-[#E6EAF0]"
            >
              Agro-Espacial
            </span>
            <br class="hidden sm:block" />
            con
            <span class="text-[#38BDF8] relative inline-block">
              NASA
              <span
                class="absolute -bottom-1 left-0 w-full h-[4px] bg-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              ></span>
            </span>
          </h2>

          <div
            class="space-y-5 text-[#E6EAF0]/85 font-inter text-base md:text-lg leading-relaxed max-w-2xl border-l-4 border-[#22C55E]/50 pl-6 pr-6 py-8 bg-[#071419]/85 rounded-[28px] border border-white/5 shadow-[0_30px_60px_-30px_rgba(0,255,166,0.15)]"
          >
            <p>
              <strong class="text-white text-xl"
                >Solo unos pocos serán parte de la historia.</strong
              >
              Esta convocatoria es
              <strong class="text-white text-xl"
                >única, selecta y sin precedentes.</strong
              >
              Tendrás la oportunidad de sentarte con ingenieros de la NASA y
              empujar los límites de la
              <strong class="text-[#22C55E] font-bold"
                >agricultura en condiciones extremas.</strong
              >
            </p>
            <p>
              ¿Estás listo para
              <strong class="text-white"
                >hackear el futuro y vivir una experiencia única junto a
                NASA</strong
              >? Trabajarás en soluciones reales para la agricultura del futuro,
              incluso fuera de este planeta.
              <span class="text-[#A5F3FC] block mt-3 font-bold tracking-wide"
                >Cupos extremadamente limitados.</span
              >
            </p>
          </div>

          <div class="mt-12 grid gap-6 w-full">
            <div
              class="relative group overflow-hidden rounded-[28px] bg-[#071719]/95 border border-[#22C55E]/10 shadow-[0_30px_80px_-35px_rgba(34,197,94,0.2)]"
            >
              <div
                class="absolute -inset-1 bg-gradient-to-r from-[#22C55E]/20 via-transparent to-[#38BDF8]/20 blur-2xl opacity-70 pointer-events-none"
              ></div>
              <div class="relative px-8 py-6">
                <span
                  class="text-[#22C55E] text-[10px] font-mono uppercase tracking-[0.35em] mb-4 inline-block"
                >
                  EL REGISTRO COMIENZA EN
                </span>

                <div
                  class="flex flex-wrap items-start justify-between gap-3 font-black text-white tracking-widest tabular-nums"
                >
                  <div
                    class="flex min-w-[70px] flex-col items-center leading-none"
                  >
                    <span class="text-4xl md:text-5xl">{{ days }}</span>
                    <span
                      class="text-[10px] text-white/50 font-mono mt-2 uppercase"
                      >Días</span
                    >
                  </div>
                  <span
                    class="self-center text-[#22C55E] text-3xl md:text-4xl pt-1 opacity-90"
                    >:</span
                  >
                  <div
                    class="flex min-w-[70px] flex-col items-center leading-none"
                  >
                    <span class="text-4xl md:text-5xl">{{ hours }}</span>
                    <span
                      class="text-[10px] text-white/50 font-mono mt-2 uppercase"
                      >Hrs</span
                    >
                  </div>
                  <span
                    class="self-center text-[#22C55E] text-3xl md:text-4xl pt-1 opacity-90"
                    >:</span
                  >
                  <div
                    class="flex min-w-[70px] flex-col items-center leading-none"
                  >
                    <span class="text-4xl md:text-5xl">{{ minutes }}</span>
                    <span
                      class="text-[10px] text-white/50 font-mono mt-2 uppercase"
                      >Min</span
                    >
                  </div>
                  <span
                    class="self-center text-[#22C55E] text-3xl md:text-4xl pt-1 opacity-90"
                    >:</span
                  >
                  <div
                    class="flex min-w-[70px] flex-col items-center leading-none"
                  >
                    <span class="text-4xl md:text-5xl text-[#38BDF8]">{{
                      seconds
                    }}</span>
                    <span
                      class="text-[10px] text-[#A5F3FC]/80 font-mono mt-2 uppercase"
                      >Seg</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-center rounded-[28px] border border-white/10 bg-[#071719]/90 px-6 py-5 text-center text-[#E6EAF0]/70 text-sm font-mono uppercase tracking-[0.22em]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-3 text-[#38BDF8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <strong class="text-white"
                >Inscripción sujeta a selección.</strong
              >
            </div>
          </div>
        </div>

        <!-- Right: "Ticket" / Data Panel Graphic -->
        <div class="lg:col-span-5 relative lg:pl-10 mt-10 lg:mt-0">
          <div
            class="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#22C55E]/10 blur-[100px] rounded-full pointer-events-none z-0"
          ></div>

          <!-- Rotating / tilted technical pass -->
          <div
            class="relative w-full max-w-sm mx-auto bg-[#0A0D14]/80 border border-white/10 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),_0_0_40px_rgba(34,197,94,0.1)] transition-transform duration-700 ease-out flex flex-col group md:[transform:perspective(2000px)_rotateY(-10deg)_rotateX(10deg)] hover:![transform:perspective(2000px)_rotateY(0deg)_rotateX(0deg)] z-10"
          >
            <!-- Scanning line background wrapper so it clips but we don't clip the border corners -->
            <div
              class="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
            >
              <!-- Scanning Line Animation -->
              <div
                class="absolute inset-x-0 h-[2px] bg-[#22C55E] shadow-[0_0_20px_#22C55E] top-0 animate-[scan_4s_ease-in-out_infinite] opacity-60"
              ></div>
            </div>

            <!-- Tech borders corners - inset so they are visible -->
            <div
              class="absolute top-2 left-2 w-8 h-8 border-t-[2px] border-l-[2px] rounded-tl-lg border-[#22C55E]/80 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
            ></div>
            <div
              class="absolute top-2 right-2 w-8 h-8 border-t-[2px] border-r-[2px] rounded-tr-lg border-[#22C55E]/80 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            ></div>
            <div
              class="absolute bottom-2 left-2 w-8 h-8 border-b-[2px] border-l-[2px] rounded-bl-lg border-[#22C55E]/80 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
            ></div>
            <div
              class="absolute bottom-2 right-2 w-8 h-8 border-b-[2px] border-r-[2px] rounded-br-lg border-[#22C55E]/80 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
            ></div>

            <div
              class="p-8 sm:p-10 flex-1 flex flex-col justify-between relative z-10 w-full h-full min-h-[500px]"
            >
              <!-- Header -->
              <div
                class="flex justify-between items-start border-b border-white/10 pb-6"
              >
                <div>
                  <h3 class="font-orbitron flex flex-col">
                    <span
                      class="text-3xl text-white font-black tracking-widest drop-shadow-md"
                      >BOARDING</span
                    >
                    <span
                      class="text-2xl text-white/90 font-bold tracking-[0.2em] -mt-1"
                      >PASS</span
                    >
                  </h3>
                  <p
                    class="font-mono text-[#22C55E] text-xs mt-2 tracking-widest font-semibold flex items-center"
                  >
                    <span
                      class="w-1.5 h-1.5 bg-[#22C55E] mr-2 rounded-full shadow-[0_0_5px_#22C55E]"
                    ></span>
                    PROGRAMA ESPACIAL
                  </p>
                </div>
                <!-- NASA/Space icon -->
                <div
                  class="p-3 bg-white/5 rounded-lg border border-white/10 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-[#22C55E]/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <!-- Sprout leaf icon to better represent agriculture -->
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 21v-8m0 0a4 4 0 004-4c0-2-1.5-3-3-3s-3 1.5-3 3v2m0 2a4 4 0 01-4-4c0-2 1.5-3 3-3s3 1.5 3 3v2"
                    />
                    <!-- Minimal orbit loop around the leaf -->
                    <ellipse
                      cx="12"
                      cy="13"
                      rx="9"
                      ry="3"
                      transform="rotate(-15 12 13)"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </div>

              <!-- Body info -->
              <div class="py-8 space-y-7 flex-1 flex flex-col justify-center">
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <p
                      class="text-[10px] text-white/40 font-mono uppercase mb-1.5 tracking-wider"
                    >
                      Pasajero
                    </p>
                    <p class="text-white font-inter font-bold tracking-wide">
                      TALENTO LOCAL
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[10px] text-white/40 font-mono uppercase mb-1.5 tracking-wider"
                    >
                      Destino
                    </p>
                    <p class="text-white font-inter font-bold tracking-wide">
                      FUTURO AGRICOLA
                    </p>
                  </div>
                </div>

                <div
                  class="bg-white/5 p-4 rounded border border-white/5 border-l-2 border-l-[#22C55E]"
                >
                  <p
                    class="text-[10px] text-white/40 font-mono uppercase mb-1 tracking-wider"
                  >
                    Misión Designada
                  </p>
                  <p
                    class="text-[#22C55E] font-orbitron font-bold text-lg tracking-wider"
                  >
                    OFF-EARTH CHALLENGE
                  </p>
                </div>

                <div
                  class="grid grid-cols-3 gap-3 border-t border-white/10 pt-5"
                >
                  <div>
                    <p
                      class="text-[10px] text-white/40 font-mono uppercase mb-1"
                    >
                      Fecha
                    </p>
                    <p
                      class="text-white/90 font-mono text-sm tracking-widest font-bold"
                    >
                      17 JUN
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[10px] text-white/40 font-mono uppercase mb-1"
                    >
                      Sector
                    </p>
                    <p
                      class="text-white/90 font-mono text-sm tracking-widest font-bold"
                    >
                      IQUIQUE
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[10px] text-white/40 font-mono uppercase mb-1"
                    >
                      Acceso
                    </p>
                    <p
                      class="text-red-400 font-mono text-sm font-bold tracking-widest animate-pulse"
                    >
                      RESTRINGIDO
                    </p>
                  </div>
                </div>
              </div>

              <!-- Footer Barcode -->
              <div
                class="pt-6 border-t border-white/10 flex flex-col items-center"
              >
                <div
                  class="w-full h-12 flex justify-between gap-1 opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  <!-- Barcode generated with shrink-0 so it doesn't break flex layout -->
                  <div
                    class="h-full w-2 bg-white rounded-sm shrink-0 basis-2"
                  ></div>
                  <div
                    class="h-full w-1 bg-white rounded-sm shrink-0 basis-1"
                  ></div>
                  <div
                    class="h-full w-4 bg-white rounded-sm shrink-0 basis-4"
                  ></div>
                  <div
                    class="h-full w-1 bg-white rounded-sm shrink-0 basis-1"
                  ></div>
                  <div
                    class="h-full w-2 bg-white rounded-sm shrink-0 basis-2"
                  ></div>
                  <div
                    class="h-full w-5 bg-white rounded-sm shrink-0 basis-5"
                  ></div>
                  <div
                    class="h-full w-1 bg-white rounded-sm shrink-0 basis-1"
                  ></div>
                  <div
                    class="h-full w-2 bg-white rounded-sm shrink-0 basis-2"
                  ></div>
                  <div
                    class="h-full w-1 bg-white rounded-sm shrink-0 basis-1"
                  ></div>
                  <div
                    class="h-full w-4 bg-white rounded-sm shrink-0 basis-4"
                  ></div>
                  <div
                    class="h-full w-1 bg-white rounded-sm shrink-0 basis-1"
                  ></div>
                  <div
                    class="h-full w-3 bg-white rounded-sm shrink-0 basis-3"
                  ></div>
                  <div
                    class="h-full w-2 bg-white rounded-sm shrink-0 basis-2 ml-auto"
                  ></div>
                  <div
                    class="h-full w-1 bg-white rounded-sm shrink-0 basis-1"
                  ></div>
                  <div
                    class="h-full w-4 bg-white rounded-sm shrink-0 basis-4"
                  ></div>
                </div>
                <p
                  class="text-[11px] font-mono text-white/40 mt-3 tracking-[0.4em] font-semibold"
                >
                  NASA-IQQ-2026-X
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0% {
    top: 0;
    opacity: 0;
  }

  10% {
    opacity: 0.8;
  }

  50% {
    opacity: 0.8;
  }

  90% {
    opacity: 0.8;
  }

  100% {
    top: 100%;
    opacity: 0;
  }
}

.nasa-workshop-bg {
  background:
    radial-gradient(
      circle at top right,
      rgba(56, 189, 248, 0.14),
      transparent 24%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(34, 197, 94, 0.12),
      transparent 20%
    );
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let timerInterval: number;

const updateTimer = () => {
  // Configured date for registration opening or event start
  const targetDate = new Date("2026-05-21T00:00:00");
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    days.value = "00";
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
    clearInterval(timerInterval);
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.value = d.toString().padStart(2, "0");
  hours.value = h.toString().padStart(2, "0");
  minutes.value = m.toString().padStart(2, "0");
  seconds.value = s.toString().padStart(2, "0");
};

onMounted(() => {
  updateTimer();
  timerInterval = window.setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>
