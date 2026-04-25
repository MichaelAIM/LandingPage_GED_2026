<template>
  <section id="nasa-workshop" class="relative w-full overflow-hidden bg-[#000">
    <!-- ── Ambient glows ── -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-[#C96B35]/6 blur-[160px]"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4E8FCC]/6 blur-[140px]"></div>
    </div>

    <!-- ── Watermark ── -->
    <div
      class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-[0.025]">
      <span class="font-orbitron font-black text-[12vw] leading-none whitespace-nowrap text-white">
        LUNAR CROP
      </span>
    </div>

    <!-- ── SPLIT LAYOUT ── -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-36">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- LEFT: Logo + visual identity -->
        <div v-motion :initial="{ opacity: 0, x: -40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700 } }" class="flex flex-col items-center">
          <!-- WakiLabs presenta -->
          <div class="flex items-center gap-2 mb-8">
            <img src="../assets/propuestas-logo-n2-03.png" alt="GED" class="h-12" />
            <img src="../assets/waki-logo-01-1024x280.png" alt="waki-logo-01-1024x280.png" class="h-8 w-auto" />
          </div>
          <div class="flex items-center gap-2 mb-8">
            <span class="font-mono text-[16px] uppercase tracking-[0.35em] text-[#F0EAD6]/50">Presenta</span>
            <img src="../assets/nasa-blanco.png" alt="waki-logo-01-1024x280.png" class="h-8 w-auto" />

          </div>
          <!-- Logo Lunar Crop -->
          <img src="../assets/propuestas-logo-n2-00.png" alt="Lunar Crop Challenge 2026"
            class="w-full max-w-xs lg:max-w-sm mx-auto lg:mx-0 drop-shadow-[0_20px_60px_rgba(201,107,53,0.3)] mb-10" />

          <!-- Apoyado por -->
          <div class="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <p class="font-mono text-[14px] uppercase tracking-[0.35em] text-[#F0EAD6]/50 mb-4 text-center ">
              Apoyado por</p>
            <div class="flex flex-wrap items-center gap-5 justify-center hover:grayscale-0 transition-all duration-500">
              <img src="../assets/kolonize.png" alt="Ancestral / Kolonize" class="h-12 object-contain" />
              <img src="../assets/codesser-blanco.png" alt="UNAP" class="h-12 object-contain" />
              <img src="../assets/santotomas-blanco.png" alt="Santo Tomás" class="h-12 object-contain" />
              <img src="../assets/ing2030.png" alt="CODESSER" class="h-12 object-contain" />
            </div>
          </div>
        </div>

        <!-- RIGHT: Description + CTA -->
        <div v-motion :initial="{ opacity: 0, x: 40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700, delay: 150 } }" class="flex flex-col gap-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 self-start border border-[#C96B35]/30 bg-[#C96B35]/8 px-4 py-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C96B35] animate-pulse"></span>
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E8A067]">Nuevo Evento — GED ×
              NASA</span>
          </div>

          <!-- Headline -->
          <div>
            <h2
              class="font-orbitron text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.05] mb-4">
              ¿Listos para<br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#C96B35] to-[#FFD447]">
                despegar?
              </span>
            </h2>
          </div>

          <!-- Description -->
          <div
            class="space-y-4 font-inter text-sm md:text-base text-[#F0EAD6]/70 leading-relaxed border-l-2 border-[#C96B35]/30 pl-5">
            <p>
              El <strong class="text-[#F0EAD6]">Gran Encuentro del Desierto®</strong> y
              <strong class="text-[#F0EAD6]">NASA</strong> se unen este 2026 para lanzar
              <em>–de manera inédita en nuestro país–</em> un desafío dirigido para todos los grupos de
              ingeniería y ciencias aplicadas de la Macro Zona Andina y del país.
            </p>
            <p>
              El desafío se orientará a la construcción de sistemas que permitan entender el comportamiento
              de diversos cultivos y su desarrollo en entornos ultra extremos. Con esta información
              <strong class="text-[#F0EAD6]">NASA podrá seleccionar qué cultivos llevar en las siguientes
                misiones a la Luna</strong> y cómo hacerlos crecer efectivamente, alimentando a nuestras
              primeras colonias espaciales.
            </p>
          </div>

          <!-- Benefits -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 p-4 border border-white/6 bg-white/2">
              <div
                class="flex-shrink-0 w-8 h-8 bg-[#FFD447]/10 border border-[#FFD447]/20 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#FFD447]" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p class="font-inter text-xs text-[#F0EAD6]/65 leading-relaxed">
                Conocerás en persona y trabajarás con el equipo detrás de alimentar a los futuros astronautas y colonos
                espaciales.
              </p>
            </div>
            <div class="flex items-start gap-3 p-4 border border-white/6 bg-white/2">
              <div
                class="flex-shrink-0 w-8 h-8 bg-[#C96B35]/10 border border-[#C96B35]/20 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#E8A067]" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="font-inter text-xs text-[#F0EAD6]/65 leading-relaxed">
                Proyectos seleccionados obtendrán financiamiento para continuar su desarrollo y colaboración
                directamente con NASA.
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <a href="https://encuentrodeldesierto.cl/lcc" target="_blank" rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 px-7 py-4 bg-[#C96B35] text-[#F0EAD6] font-orbitron text-xs font-black uppercase tracking-wider hover:bg-[#FFD447] hover:text-[#0B0F1A] transition-all duration-300 shadow-[0_0_30px_rgba(201,107,53,0.3)] hover:shadow-[0_0_40px_rgba(255,212,71,0.4)]">
              <span>Más información</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p class="font-mono text-[10px] text-[#F0EAD6]/30 uppercase tracking-widest">
              encuentrodeldesierto.cl/lcc
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Bottom decorative line -->
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C96B35]/30 to-transparent">
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive state needed — static teaser section
</script>
