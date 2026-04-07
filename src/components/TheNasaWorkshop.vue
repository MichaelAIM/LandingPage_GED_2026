<template>
  <section
    id="nasa-workshop"
    class="relative w-full py-32 bg-[#050810] overflow-hidden flex items-center border-y border-[#22C55E]/20"
  >
    <!-- Huge background text -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center overflow-hidden pointer-events-none select-none opacity-[0.03] z-0"
    >
      <h2
        class="font-orbitron font-black text-[25vw] leading-none whitespace-nowrap text-white"
      >
        NASA<span
          class="text-transparent stroke-white"
          style="-webkit-text-stroke: 4px white"
          >IQUIQUE</span
        >
      </h2>
    </div>

    <!-- Animated Radar/Grid Background -->
    <div
      class="absolute inset-0 z-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_10%,transparent_100%)]"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
      >
        <!-- Left: Text content -->
        <div class="lg:col-span-7 flex flex-col items-start relative">
          <!-- Desert/Soil Glow -->
          <div
            class="absolute -left-12 -top-12 w-32 h-32 bg-[#FF6B00]/10 blur-[80px] rounded-full pointer-events-none"
          ></div>

          <!-- Urgent Badge -->
          <div
            class="flex items-center space-x-3 bg-red-500/10 border border-red-500/50 px-6 py-2.5 rounded mb-8 backdrop-blur-sm self-start shadow-[0_0_20px_rgba(239,68,68,0.15)] ring-1 ring-red-500/20"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_#ef4444]"
              ></span>
            </span>
            <span
              class="text-[#FC3D21] font-mono text-xs md:text-sm tracking-[0.25em] uppercase font-black"
              >ACCESO CLASIFICADO: CUPOS CRÍTICAMENTE LIMITADOS</span
            >
          </div>

          <p
            class="font-mono text-[#22C55E] tracking-widest uppercase mb-4 text-sm md:text-base font-bold flex items-center"
          >
            <span class="w-8 h-[2px] bg-[#22C55E] mr-4 inline-block"></span>
            Misión Operativa / Solo Con Postulación
          </p>

          <h2
            class="font-orbitron font-black text-5xl md:text-6xl lg:text-[4.5rem] text-white mb-8 leading-[1.05] uppercase drop-shadow-2xl"
          >
            Taller <br class="hidden sm:block" />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#E6EAF0]"
              >Agro-Espacial</span
            >
            <br class="hidden sm:block" />
            con
            <span class="text-[#FC3D21] relative inline-block">
              NASA
              <span
                class="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FC3D21] shadow-[0_0_20px_#FC3D21]"
              ></span>
            </span>
          </h2>

          <div
            class="space-y-6 text-[#E6EAF0]/90 font-inter text-lg md:text-xl leading-relaxed max-w-2xl border-l-[4px] border-[#22C55E] pl-6 relative bg-gradient-to-r from-[#22C55E]/5 to-transparent py-4"
          >
            <p>
              <strong class="text-white text-xl"
                >Solo unos pocos serán parte de la historia.</strong
              >
              Esta es una convocatoria
              <strong class="text-white text-2xl"
                >única, exclusiva y sin precedentes.</strong
              >
              Tendrás la oportunidad de sentarte junto a ingenieros de la NASA y
              empujar los límites de la
              <strong
                class="text-[#22C55E] drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] font-bold"
                >agricultura en condiciones extremas.</strong
              >.
            </p>
            <p>
              Estas listo para
              <strong
                >hackear el futuro, y vivir una experiencia única junto a
                ingenieros de la NASA, donde trabajarás en soluciones reales
                para la agricultura del futuro… incluso fuera de este
                planeta.</strong
              >. Cupos extremadamente limitados.
              <span
                class="text-white border-b border-[#22C55E] mt-2 block pb-1 w-fit font-bold tracking-wide"
                >¿Estás listo para el desafío?</span
              >
            </p>
          </div>

          <div
            class="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <!-- Countdown Registry Area -->
            <div class="relative group w-full sm:w-auto overflow-hidden">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-[#FF6B00]/40 to-[#22C55E]/40 rounded blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"
              ></div>
              <div
                class="relative w-full sm:w-auto flex flex-col items-center justify-center px-10 py-5 bg-[#050810] border border-[#22C55E]/50 text-white font-orbitron uppercase tracking-widest cursor-default"
              >
                <span
                  class="text-[#22C55E] text-xs font-bold tracking-[0.25em] mb-4 text-center"
                  >EL REGISTRO COMIENZA EN</span
                >

                <div class="flex items-start space-x-3 md:space-x-4 font-black">
                  <div class="flex flex-col items-center leading-none">
                    <span class="text-3xl md:text-4xl text-white">{{
                      days
                    }}</span>
                    <span
                      class="text-[10px] text-white/50 font-mono mt-2 uppercase font-medium"
                      >Días</span
                    >
                  </div>
                  <span
                    class="text-[#22C55E] text-2xl pt-1 opacity-50 block animate-pulse"
                    >:</span
                  >

                  <div class="flex flex-col items-center leading-none">
                    <span class="text-3xl md:text-4xl text-white">{{
                      hours
                    }}</span>
                    <span
                      class="text-[10px] text-white/50 font-mono mt-2 uppercase font-medium"
                      >Hrs</span
                    >
                  </div>
                  <span
                    class="text-[#22C55E] text-2xl pt-1 opacity-50 block animate-pulse"
                    >:</span
                  >

                  <div class="flex flex-col items-center leading-none">
                    <span class="text-3xl md:text-4xl text-white">{{
                      minutes
                    }}</span>
                    <span
                      class="text-[10px] text-white/50 font-mono mt-2 uppercase font-medium"
                      >Min</span
                    >
                  </div>
                  <span
                    class="text-[#22C55E] text-2xl pt-1 opacity-50 block animate-pulse"
                    >:</span
                  >

                  <div class="flex flex-col items-center leading-none">
                    <span
                      class="text-3xl md:text-4xl text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]"
                      >{{ seconds }}</span
                    >
                    <span
                      class="text-[10px] text-[#FF6B00]/60 font-mono mt-2 uppercase font-medium"
                      >Seg</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-center text-[#E6EAF0]/80 text-sm font-mono uppercase bg-black/60 px-6 py-4 rounded border border-white/10 whitespace-nowrap w-full sm:w-auto backdrop-blur-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3 text-red-500 animate-pulse"
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
              <strong>Inscripción sujeta a selección.</strong>
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
  const targetDate = new Date("2026-05-17T00:00:00");
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
