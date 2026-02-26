# Landing Page GED — Vue 3 (Composition API)

Conversión completa de React + TypeScript a **Vue 3 con Composition API**.

## Stack

- **Vue 3** + TypeScript + `<script setup>`
- **Vite 5** como bundler
- **Tailwind CSS 3**
- **@vueuse/motion** para animaciones (reemplaza Framer Motion)
- **lucide-vue-next** para iconos (reemplaza lucide-react)
- **IntersectionObserver API** para contadores animados

## Estructura

```
src/
├── components/
│   ├── TheNavbar.vue         # Navbar flotante con tooltips
│   ├── TheHero.vue           # Hero con toggle día/noche y countdown
│   ├── CountdownTimer.vue    # Componente de conteo regresivo
│   ├── TheAbout.vue          # Sección misión y estadísticas
│   ├── InfoSection.vue       # Protocolos del evento
│   ├── EventLayout.vue       # Mapa interactivo de zonas
│   ├── TheSpeakers.vue       # Tarjetas de speakers
│   ├── TheAgenda.vue         # Timeline con tabs Arica/Iquique
│   ├── TheImpact.vue         # Contadores animados
│   ├── TheGallery.vue        # Galería masonry con CSS columns
│   ├── TheSponsors.vue       # Logos de patrocinadores
│   └── TheFooter.vue         # Footer completo
├── composables/
│   └── useCountdown.ts       # Composable para countdown reactivo
├── styles/
│   └── index.css             # Tailwind + utilidades globales
├── App.vue
└── main.ts
```

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Equivalencias React → Vue

| React                        | Vue 3                         |
|------------------------------|-------------------------------|
| `useState`                   | `ref` / `reactive`            |
| `useEffect`                  | `onMounted` + `watch`         |
| `useRef`                     | `ref` / `templateRef`         |
| `useMemo` / `useCallback`    | `computed`                    |
| Custom Hook                  | Composable (`use*.ts`)        |
| `motion/react` (Framer)      | `@vueuse/motion`              |
| `AnimatePresence`            | `<Transition mode="out-in">`  |
| `lucide-react`               | `lucide-vue-next`             |
| `react-responsive-masonry`   | CSS `columns` nativo          |
| `IntersectionObserver hook`  | `IntersectionObserver` manual |
