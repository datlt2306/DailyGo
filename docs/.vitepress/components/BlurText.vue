<template>
  <span ref="elementRef" class="blur-text-wrapper" :class="[inView ? 'in-view' : '', direction]">
    <span
      v-for="(item, index) in elements"
      :key="index"
      class="blur-item"
      :style="{
        animationDelay: `${(index * delay)}ms`,
        animationDuration: `${duration}s`,
        display: item === ' ' ? 'inline' : 'inline-block'
      }"
    >
      {{ item === ' ' ? '\u00A0' : item }}
    </span>
  </span>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  delay: { type: Number, default: 35 }, // Delay per item in ms
  duration: { type: Number, default: 0.4 }, // Duration of fade-in in seconds
  animateBy: { type: String, default: 'letters' }, // 'words' or 'letters'
  direction: { type: String, default: 'top' } // 'top' or 'bottom'
})

const inView = ref(false)
const elementRef = ref(null)

const elements = computed(() => {
  if (props.animateBy === 'words') {
    return props.text.split(' ').flatMap((w, i, arr) => i < arr.length - 1 ? [w, ' '] : [w])
  } else {
    return props.text.split('')
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      inView.value = true
    }, 50)
  }
})
</script>

<style scoped>
.blur-text-wrapper {
  display: inline-block;
}

.blur-item {
  opacity: 0;
  filter: blur(12px);
}

:deep(.gradient-title) .blur-item,
.gradient-title .blur-item {
  background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.top .blur-item {
  transform: translateY(-30px);
}

.bottom .blur-item {
  transform: translateY(30px);
}

.in-view.top .blur-item {
  animation-name: blurInTop;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.in-view.bottom .blur-item {
  animation-name: blurInBottom;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes blurInTop {
  0% {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
}

@keyframes blurInBottom {
  0% {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
}
</style>
