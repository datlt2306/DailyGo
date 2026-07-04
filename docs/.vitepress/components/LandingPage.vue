<template>
  <div class="landing-wrapper">
    <!-- ThreeJS Background Container -->
    <div id="three-bg"></div>

    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-content">
        <div class="badge-dev">const user = "developer";</div>
        <div>
          <BlurText text="Thầy Đạtlt34 FPoly" :delay="60" animateBy="letters" direction="top" class="gradient-title" />
        </div>
        <!-- Terminal Window Wrapper -->
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="dot close"></span>
              <span class="dot minimize"></span>
              <span class="dot expand"></span>
            </div>
            <div class="terminal-title">poly-tuts.js — node</div>
          </div>
          <div class="terminal-body">
            <div class="terminal-line"><span class="cmd-prompt">></span>
              <TextType
                :text="['Học lập trình JavaScript cơ bản thực chiến', 'Học lập trình JavaScript nâng cao thực chiến', 'Học lập trình ReactJS thực chiến', 'Học lập trình VueJS thực chiến', 'Học lập trình Node.js & MongoDB thực chiến', 'Học lập trình WordPress thực chiến', 'Học lập trình C thực chiến', 'Học làm Dự án 1 thực chiến']"
                :typingSpeed="70" :pauseDuration="2000" :deletingSpeed="30" class="terminal-typed" />
            </div>

            <div class="terminal-line comment">// Môi trường học tập tương tác chuẩn PBL (Project-Based Learning)</div>

            <div class="terminal-line output">
              <span class="keyword">console</span>.<span class="method">log</span>(<span class="string">"Sẵn sàng bứt
                phá sự nghiệp lập trình của bạn!"</span>);
            </div>

            <div class="terminal-line result">
              <span class="system-output">"Sẵn sàng bứt phá sự nghiệp lập trình của bạn!"</span>
            </div>
          </div>
        </div>

        <div class="cta-group">
          <a href="/javascript/" class="btn-primary">Bắt đầu học ngay 🚀</a>
          <a href="https://github.com/datlt2306" target="_blank" class="btn-secondary">GitHub của thầy</a>
        </div>
      </div>
    </div>

    <!-- Main Section: Course Grid -->
    <div class="section-container">
      <h3 class="section-title">Lộ trình bài giảng chuyên môn</h3>
      <div class="course-grid">
        <ElectricBorder v-for="course in courses" :key="course.title" color="#6366f1" :speed="0.8" :chaos="0.02"
          :borderRadius="16" class="course-card">
          <div class="card-glass"></div>
          <div class="card-content">
            <div class="card-header">
              <span class="course-icon">{{ course.icon }}</span>
              <span class="course-badge">{{ course.badge }}</span>
            </div>
            <h4 class="course-title">{{ course.title }}</h4>
            <p class="course-desc">{{ course.desc }}</p>
            <a :href="course.link" class="course-link">Khám phá lộ trình ➜</a>
          </div>
        </ElectricBorder>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import BlurText from './BlurText.vue'
import TextType from './TextType.vue'
import ElectricBorder from './ElectricBorder.vue'

const courses = [
  { icon: '⚡', title: 'JavaScript cơ bản', desc: 'Thao tác DOM, xử lý sự kiện, và tư duy State-driven UI qua ứng dụng ZenTask.', link: '/javascript/', badge: 'WEB1043' },
  { icon: '🔥', title: 'JavaScript nâng cao', desc: 'Xử lý bất đồng bộ Async/Await, ES6 Modules, và tối ưu hóa hiệu năng ứng dụng.', link: '/javascript/lesson-9', badge: 'WEB2064' },
  { icon: '⚛️', title: 'ReactJS', desc: 'Xây dựng ứng dụng SPA hiện đại với React Hooks, Context API và Single Page Application.', link: '/react/', badge: 'WEB209' },
  { icon: '🟢', title: 'VueJS', desc: 'Reactivity cơ bản với Composition API, Pinia State Management và TailwindCSS.', link: '/vuejs/', badge: 'WEB2072' },
  { icon: '🚀', title: 'Node.js & MongoDB', desc: 'Xây dựng REST API bán hàng hoàn chỉnh với Express, Mongoose, JWT và RBAC.', link: '/nodejs/api/lesson-1', badge: 'WEB209' },
  { icon: '🐘', title: 'WordPress Theme & Plugin', desc: 'Lập trình giao diện Theme và Plugin WooCommerce code thuần chuẩn chuyên nghiệp.', link: '/wordpress/', badge: 'Khác' },
  { icon: '💻', title: 'Lập trình C', desc: 'Luyện tư duy logic giải thuật cơ bản thông qua cú pháp chuẩn ngôn ngữ C.', link: '/laptrinhcanban/', badge: 'COM1012' },
  { icon: '📦', title: 'Dự án 1', desc: 'Hiện thực hóa toàn bộ kỹ năng chuyên môn vào xây dựng sản phẩm chất lượng thực tế.', link: '/pro1014/', badge: 'PRO1014' }
]

onMounted(() => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = () => {
      initThree()
    }
    document.head.appendChild(script)
  }
})

function initThree() {
  const container = document.getElementById('three-bg')
  if (!container || !window.THREE) return

  const THREE = window.THREE
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
  camera.position.z = 6

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  const count = 300
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    size: 0.08,
    color: 0x4f46e5,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)

  const sphereGeom = new THREE.SphereGeometry(2, 16, 16)
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  })
  const sphere = new THREE.Mesh(sphereGeom, sphereMat)
  scene.add(sphere)

  let mouseX = 0
  let mouseY = 0

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2
  })

  function animate() {
    requestAnimationFrame(animate)

    points.rotation.y += 0.001
    points.rotation.x += 0.0005
    sphere.rotation.y -= 0.002
    sphere.rotation.x -= 0.001

    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', () => {
    if (!container) return
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  })
}
</script>

<style scoped>
.landing-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #0b0f19;
  color: #f3f4f6;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  padding-bottom: 80px;
}

#three-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  opacity: 0.8;
}

.hero-container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding: 0 24px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin-top: -40px;
}

.badge-dev {
  display: inline-block;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #818cf8;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  letter-spacing: 0.05em;
}

.gradient-title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
}

.sub-title {
  font-size: min(2.2rem, 5.2vw);
  font-weight: 700;
  color: #e5e7eb;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* Terminal Window Styles */
.terminal-window {
  background: rgba(13, 17, 23, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  margin: 32px auto 40px auto;
  max-width: 680px;
  width: 100%;
  text-align: left;
  overflow: hidden;
}

.terminal-header {
  background: rgba(22, 27, 34, 0.95);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close {
  background: #ff5f56;
}

.minimize {
  background: #ffbd2e;
}

.expand {
  background: #27c93f;
}

.terminal-title {
  color: #8b949e;
  font-size: 0.8rem;
  font-family: 'Courier New', Courier, monospace;
  margin: 0 auto;
  transform: translateX(-18px);
  /* Centers title offset by buttons */
}

.terminal-body {
  padding: 18px 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #c9d1d9;
}

.terminal-line {
  margin-bottom: 10px;
}

.cmd-prompt {
  color: #58a6ff;
  margin-right: 8px;
  font-weight: bold;
}

.terminal-typed {
  color: #58a6ff;
  font-weight: bold;
}

.comment {
  color: #8b949e;
  font-style: italic;
}

.output {
  color: #c9d1d9;
}

.keyword {
  color: #ff7b72;
}

.method {
  color: #d2a8ff;
}

.string {
  color: #a5d6ff;
}

.result {
  margin-top: 4px;
}

.system-output {
  color: #7ee787;
}

.cta-group {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(79, 70, 229, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e5e7eb;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.section-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: #f3f4f6;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #6366f1;
  margin: 12px auto 0 auto;
  border-radius: 2px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.course-card {
  position: relative;
  border-radius: 16px;
  overflow: visible;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  z-index: 1;
}

.course-card:hover {
  transform: translateY(-6px);
  border-color: transparent;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.course-icon {
  font-size: 1.8rem;
}

.course-badge {
  font-size: 0.75rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #22d3ee;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.course-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
}

.course-desc {
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.5;
  margin-bottom: 24px;
  flex-grow: 1;
}

.course-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: #818cf8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.course-card:hover .course-link {
  color: #a5b4fc;
}

@media (max-width: 768px) {
  .gradient-title {
    font-size: 2.8rem;
  }

  .sub-title {
    font-size: 1.6rem;
  }

  .cta-group {
    flex-direction: column;
  }
}
</style>
