import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDate: string) {
  const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  let timer: ReturnType<typeof setInterval>

  const calculate = () => {
    const difference = +new Date(targetDate) - +new Date()
    if (difference > 0) {
      timeLeft.value = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  onMounted(() => {
    calculate()
    timer = setInterval(calculate, 1000)
  })

  onUnmounted(() => clearInterval(timer))

  return { timeLeft }
}
