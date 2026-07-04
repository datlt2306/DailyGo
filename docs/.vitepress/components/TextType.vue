<template>
  <span class="text-type-wrapper" :class="className">
    <span class="typed-text" :style="{ color: currentTextColor }">
      {{ displayedText }}
    </span>
    <span v-if="showCursor" class="type-cursor" :class="[shouldHideCursor ? 'hidden' : '', cursorClassName]">
      {{ cursorCharacter }}
    </span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  text: { type: [String, Array], required: true },
  typingSpeed: { type: Number, default: 75 },
  initialDelay: { type: Number, default: 200 },
  pauseDuration: { type: Number, default: 1500 },
  deletingSpeed: { type: Number, default: 35 },
  loop: { type: Boolean, default: true },
  className: { type: String, default: '' },
  showCursor: { type: Boolean, default: true },
  hideCursorWhileTyping: { type: Boolean, default: false },
  cursorCharacter: { type: String, default: '|' },
  cursorClassName: { type: String, default: '' },
  textColors: { type: Array, default: () => [] }
})

const displayedText = ref('')
const currentCharIndex = ref(0)
const isDeleting = ref(false)
const currentTextIndex = ref(0)

const textArray = computed(() => {
  return Array.isArray(props.text) ? props.text : [props.text]
})

const currentTextColor = computed(() => {
  if (props.textColors.length === 0) return 'inherit'
  return props.textColors[currentTextIndex.value % props.textColors.length]
})

const shouldHideCursor = computed(() => {
  if (!props.hideCursorWhileTyping) return false
  const currentText = textArray.value[currentTextIndex.value]
  return currentCharIndex.value < currentText.length || isDeleting.value
})

let timer = null

function startTyping() {
  const currentText = textArray.value[currentTextIndex.value]

  if (isDeleting.value) {
    if (displayedText.value === '') {
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % textArray.value.length
      currentCharIndex.value = 0
      timer = setTimeout(startTyping, props.initialDelay + 200)
    } else {
      displayedText.value = displayedText.value.slice(0, -1)
      currentCharIndex.value--
      timer = setTimeout(startTyping, props.deletingSpeed)
    }
  } else {
    if (currentCharIndex.value < currentText.length) {
      displayedText.value += currentText[currentCharIndex.value]
      currentCharIndex.value++
      timer = setTimeout(startTyping, props.typingSpeed)
    } else {
      if (props.loop || currentTextIndex.value < textArray.value.length - 1) {
        timer = setTimeout(() => {
          isDeleting.value = true
          startTyping()
        }, props.pauseDuration)
      }
    }
  }
}

onMounted(() => {
  timer = setTimeout(startTyping, props.initialDelay)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.text-type-wrapper {
  display: inline-block;
  white-space: nowrap;
}

.type-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 0.75s step-end infinite;
  color: #06b6d4; /* Color of the blinking cursor */
}

@keyframes blink {
  from, to { color: transparent }
  50% { color: inherit }
}

.hidden {
  display: none !important;
}
</style>
