<template>
  <div
    ref="containerRef"
    class="electric-border-wrapper"
    :style="{ borderRadius: `${borderRadius}px` }"
  >
    <div class="canvas-container">
      <canvas ref="canvasRef" class="electric-canvas" />
    </div>
    <div class="glow-container">
      <div
        class="glow-line-1"
        :style="{ borderColor: hexToRgba(color, 0.6), borderRadius: `${borderRadius}px` }"
      />
      <div
        class="glow-line-2"
        :style="{ borderColor: color, borderRadius: `${borderRadius}px` }"
      />
      <div
        class="glow-bg"
        :style="{
          background: `linear-gradient(-30deg, ${color}, transparent, ${color})`,
          borderRadius: `${borderRadius}px`
        }"
      />
    </div>
    <div class="content-container" :style="{ borderRadius: `${borderRadius}px` }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  color: { type: String, default: '#5227FF' },
  speed: { type: Number, default: 1 },
  chaos: { type: Number, default: 0.12 },
  borderRadius: { type: Number, default: 24 }
})

const canvasRef = ref(null)
const containerRef = ref(null)
let animationId = null
let time = 0
let lastFrameTime = 0

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`
  let h = hex.replace('#', '')
  if (h.length === 3) {
    h = h.split('').map(c => c + c).join('')
  }
  const int = parseInt(h, 16)
  const r = (int >> 16) & 255
  const g = (int >> 8) & 255
  const b = int & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function random(x) {
  return (Math.sin(x * 12.9898) * 43758.5453) % 1
}

function noise2D(x, y) {
  const i = Math.floor(x)
  const j = Math.floor(y)
  const fx = x - i
  const fy = y - j

  const a = random(i + j * 57)
  const b = random(i + 1 + j * 57)
  const c = random(i + (j + 1) * 57)
  const d = random(i + 1 + (j + 1) * 57)

  const ux = fx * fx * (3.0 - 2.0 * fx)
  const uy = fy * fy * (3.0 - 2.0 * fy)

  return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy
}

function octavedNoise(x, octaves, lacunarity, gain, baseAmplitude, baseFrequency, time, seed, baseFlatness) {
  let y = 0
  let amplitude = baseAmplitude
  let frequency = baseFrequency

  for (let i = 0; i < octaves; i++) {
    let octaveAmplitude = amplitude
    if (i === 0) {
      octaveAmplitude *= baseFlatness
    }
    y += octaveAmplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3)
    frequency *= lacunarity
    amplitude *= gain
  }

  return y
}

function getCornerPoint(centerX, centerY, radius, startAngle, arcLength, progress) {
  const angle = startAngle + progress * arcLength
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  }
}

function getRoundedRectPoint(t, left, top, width, height, radius) {
  const straightWidth = width - 2 * radius
  const straightHeight = height - 2 * radius
  const cornerArc = (Math.PI * radius) / 2
  const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc
  const distance = t * totalPerimeter

  let accumulated = 0

  if (distance <= accumulated + straightWidth) {
    const progress = (distance - accumulated) / straightWidth
    return { x: left + radius + progress * straightWidth, y: top }
  }
  accumulated += straightWidth

  if (distance <= accumulated + cornerArc) {
    const progress = (distance - accumulated) / cornerArc
    return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress)
  }
  accumulated += cornerArc

  if (distance <= accumulated + straightHeight) {
    const progress = (distance - accumulated) / straightHeight
    return { x: left + width, y: top + radius + progress * straightHeight }
  }
  accumulated += straightHeight

  if (distance <= accumulated + cornerArc) {
    const progress = (distance - accumulated) / cornerArc
    return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, progress)
  }
  accumulated += cornerArc

  if (distance <= accumulated + straightWidth) {
    const progress = (distance - accumulated) / straightWidth
    return { x: left + width - radius - progress * straightWidth, y: top + height }
  }
  accumulated += straightWidth

  if (distance <= accumulated + cornerArc) {
    const progress = (distance - accumulated) / cornerArc
    return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, progress)
  }
  accumulated += cornerArc

  if (distance <= accumulated + straightHeight) {
    const progress = (distance - accumulated) / straightHeight
    return { x: left, y: top + height - radius - progress * straightHeight }
  }
  accumulated += straightHeight

  const progress = (distance - accumulated) / cornerArc
  return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress)
}

onMounted(() => {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const octaves = 10
  const lacunarity = 1.6
  const gain = 0.7
  const amplitude = props.chaos
  const frequency = 10
  const baseFlatness = 0
  const displacement = 60
  const borderOffset = 60

  const updateSize = () => {
    const rect = container.getBoundingClientRect()
    const width = rect.width + borderOffset * 2
    const height = rect.height + borderOffset * 2

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    return { width, height }
  }

  let { width, height } = updateSize()
  let lastDpr = Math.min(window.devicePixelRatio || 1, 2)

  const drawElectricBorder = (currentTime) => {
    if (!canvas || !ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    if (dpr !== lastDpr) {
      lastDpr = dpr
      const newSize = updateSize()
      width = newSize.width
      height = newSize.height
    }

    const deltaTime = (currentTime - lastFrameTime) / 1000
    time += deltaTime * props.speed
    lastFrameTime = currentTime

    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(dpr, dpr)

    ctx.strokeStyle = props.color
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const scale = displacement
    const left = borderOffset
    const top = borderOffset
    const borderWidth = width - 2 * borderOffset
    const borderHeight = height - 2 * borderOffset
    const maxRadius = Math.min(borderWidth, borderHeight) / 2
    const radius = Math.min(props.borderRadius, maxRadius)

    const approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius
    const sampleCount = Math.floor(approximatePerimeter / 2)

    ctx.beginPath()

    for (let i = 0; i <= sampleCount; i++) {
      const progress = i / sampleCount

      const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius)

      const xNoise = octavedNoise(
        progress * 8,
        octaves,
        lacunarity,
        gain,
        amplitude,
        frequency,
        time,
        0,
        baseFlatness
      )
      const yNoise = octavedNoise(
        progress * 8,
        octaves,
        lacunarity,
        gain,
        amplitude,
        frequency,
        time,
        1,
        baseFlatness
      )

      const displacedX = point.x + xNoise * scale
      const displacedY = point.y + yNoise * scale

      if (i === 0) {
        ctx.moveTo(displacedX, displacedY)
      } else {
        ctx.lineTo(displacedX, displacedY)
      }
    }

    ctx.closePath()
    ctx.stroke()

    animationId = requestAnimationFrame(drawElectricBorder)
  }

  const resizeObserver = new ResizeObserver(() => {
    const newSize = updateSize()
    width = newSize.width
    height = newSize.height
  })
  resizeObserver.observe(container)

  animationId = requestAnimationFrame(drawElectricBorder)

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    resizeObserver.disconnect()
  })
})
</script>

<style scoped>
.electric-border-wrapper {
  position: relative;
  overflow: visible;
  isolation: isolate;
  height: 100%;
}

.canvas-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.electric-canvas {
  display: block;
}

.glow-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.electric-border-wrapper:hover .canvas-container,
.electric-border-wrapper:hover .glow-container {
  opacity: 1;
}

.glow-line-1 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border: 2px solid transparent;
  filter: blur(1px);
}

.glow-line-2 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border: 2px solid transparent;
  filter: blur(4px);
}

.glow-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  transform: scale(1.05);
  opacity: 0.15;
  filter: blur(28px);
}

.content-container {
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: hidden;
}
</style>
