<template>
  <div class="landing-wrapper">
    <!-- ThreeJS Immersive Background Container -->
    <div id="universe-canvas-container"></div>

    <!-- Cosmic Course Hub Overlay Modal -->
    <Transition name="fade">
      <div v-if="selectedNode" class="node-modal-backdrop" @click="selectedNode = null">
        <div class="node-modal" @click.stopPropagation>
          <button class="close-btn" @click="selectedNode = null">✕</button>
          <div class="modal-glow"></div>
          <div class="modal-content">
            <span class="modal-icon">{{ selectedNode.icon }}</span>
            <div class="modal-header-text">
              <span class="modal-badge">{{ selectedNode.badge || 'KHOÁ HỌC' }}</span>
              <h3 class="modal-title">{{ selectedNode.title }}</h3>
            </div>
            <p class="modal-overview">{{ selectedNode.overview }}</p>
            <div class="modal-divider"></div>
            <div class="modal-curriculum">
              <h4>📋 Nội dung lộ trình chi tiết:</h4>
              <ul>
                <li v-for="(item, idx) in selectedNode.curriculum" :key="idx">{{ item }}</li>
              </ul>
            </div>
            <div class="modal-benefits">
              <h4>🎯 Kỹ năng đạt được sau khóa học:</h4>
              <p>{{ selectedNode.benefits }}</p>
            </div>
            <a :href="selectedNode.link" class="modal-cta">Bắt đầu học ngay 🚀</a>
          </div>
        </div>
      </div>
    </Transition>

    <!-- SECTION 1: HERO (Original Terminal Window Style) -->
    <section class="section-hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="badge-dev">const me = { role: "Teacher & Developer", loves: "Clean Code" };</div>
        <!-- Terminal Window Wrapper -->
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="dot close"></span>
              <span class="dot minimize"></span>
              <span class="dot expand"></span>
            </div>
            <div class="terminal-title">letrongdat.vercel.app — node</div>
          </div>
          <div class="terminal-body">
            <div class="terminal-line"><span class="cmd-prompt">></span>
              Học lập trình
              <TextType :text="[
                'JavaScript toàn diện ⚡',
                'ReactJS hiện đại ⚛️',
                'VueJS tối ưu 🟢',
                'Node.js chuẩn REST API 🚀',
                'WordPress & WooCommerce 🐘',
                'C cơ bản & giải thuật 💻',
                'Dự án 1 chuẩn doanh nghiệp 📦'
              ]" :typingSpeed="70" :pauseDuration="2000" :deletingSpeed="30" class="terminal-typed" />
            </div>

            <div class="terminal-line comment">// Môi trường học tập tương tác chuẩn PBL (Project-Based Learning)</div>

            <div class="terminal-line output">
              <span class="keyword">console</span>.<span class="method">log</span>(<span class="string">"Sẵn sàng bứt phá sự nghiệp lập trình của bạn!"</span>);
            </div>

            <div class="terminal-line result">
              <span class="system-output">"Sẵn sàng bứt phá sự nghiệp lập trình của bạn!"</span>
            </div>
          </div>
        </div>

        <div class="hero-ctas">
          <a href="#knowledge-hub" class="btn-primary-glow">Khám phá Khóa học 🚀</a>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollTo('#knowledge-hub')">
        <span class="mouse">
          <span class="wheel"></span>
        </span>
        <span class="text">Xem danh sách khóa học</span>
      </div>
    </section>

    <!-- SECTION 2: KNOWLEDGE HUB (Featured Courses - Moved Up) -->
    <section id="knowledge-hub" class="section-knowledge">
      <div class="container">
        <h2 class="section-heading"><span class="number">01.</span> Lộ Trình Bài Giảng Chuyên Môn</h2>
        <p class="section-subtext">Hệ thống khóa học từ cơ bản đến nâng cao được thiết kế bài bản theo mô hình Project-Based Learning.</p>
        <div class="knowledge-grid">
          <div 
            v-for="node in knowledgeNodes" 
            :key="node.title" 
            class="knowledge-card" 
            @click="selectedNode = node"
          >
            <div class="card-glow" :style="{ '--glow-color': node.color }"></div>
            <div class="knowledge-card-inner">
              <span class="node-icon">{{ node.icon }}</span>
              <h3 class="node-title">{{ node.title }}</h3>
              <span class="node-badge" :style="{ borderColor: node.color, color: node.color }">{{ node.badge }}</span>
              <p class="node-desc">{{ node.desc }}</p>
              <span class="node-action">Khám phá lộ trình chi tiết ➜</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PBL METHODOLOGY (Learning benefits) -->
    <section class="section-methodology">
      <div class="container">
        <h2 class="section-heading"><span class="number">02.</span> Phương Pháp Đào Tạo PBL</h2>
        <div class="methodology-grid">
          <div class="method-card">
            <div class="method-icon">🧩</div>
            <h3>Học qua dự án thực tế</h3>
            <p>80% thời lượng là thực hành xây dựng các ứng dụng hoàn chỉnh như To-Do App, CRM, ERP và Website thương mại điện tử.</p>
          </div>
          <div class="method-card">
            <div class="method-icon">🧠</div>
            <h3>Tư duy State-driven UI</h3>
            <p>Không chỉ học cú pháp, bạn sẽ được rèn luyện tư duy quản lý trạng thái ứng dụng hiện đại giống như tại các doanh nghiệp lớn.</p>
          </div>
          <div class="method-card">
            <div class="method-icon">🤖</div>
            <h3>Tích hợp Kỷ nguyên AI</h3>
            <p>Học cách sử dụng và tích hợp các công cụ AI (Gemini, ChatGPT) vào luồng công việc để tăng gấp 3 năng suất lập trình.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: TECHNOLOGY UNIVERSE (Orbiting tech stack of courses) -->
    <section class="section-tech-universe">
      <div class="container tech-uni-layout">
        <div class="tech-uni-info">
          <h2 class="section-heading"><span class="number">03.</span> Hệ Sinh Thái Công Nghệ</h2>
          <p class="tech-uni-desc">
            Toàn bộ các khóa học bao phủ trọn vẹn những công nghệ thiết yếu nhất trong phát triển phần mềm hiện đại.
          </p>
          <div class="tech-indicator-list">
            <div class="tech-indicator-item"><span class="dot-color vue"></span> VueJS & ReactJS (Frontend Frameworks)</div>
            <div class="tech-indicator-item"><span class="dot-color backend"></span> NodeJS & Laravel (Backend APIs)</div>
            <div class="tech-indicator-item"><span class="dot-color devops"></span> Docker & Database Systems (DevOps)</div>
            <div class="tech-indicator-item"><span class="dot-color ai"></span> AI & Gemini API Integration (AI Era)</div>
          </div>
        </div>
        <div class="tech-uni-canvas-wrapper">
          <div id="tech-orbit-canvas"></div>
          <div class="orbit-center-glow">⚡</div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TextType from './TextType.vue'

const selectedNode = ref(null)

const knowledgeNodes = [
  { icon: '⚡', title: 'JavaScript cơ bản', badge: 'WEB1043', desc: 'Làm quen với DOM Selection, Event Handling và tư duy State-driven UI qua dự án Todo App.', color: '#2563EB', link: '/javascript/', overview: 'Khóa học nền tảng giúp bạn hiểu sâu về cách hoạt động của JavaScript Engine và tương tác mạnh mẽ với DOM.', curriculum: ['Biến, kiểu dữ liệu & Toán tử', 'Câu điều kiện & Rẽ nhánh', 'Vòng lặp & Xử lý mảng nâng cao', 'DOM Selection & Manipulation'], benefits: 'Nắm vững tư duy lập trình cốt lõi để tiếp cận mọi framework như React, Vue dễ dàng.' },
  { icon: '🔥', title: 'JavaScript nâng cao', badge: 'WEB2064', desc: 'Xử lý bất đồng bộ Async/Await, ES6 Modules, và tối ưu hóa hiệu năng ứng dụng.', color: '#60A5FA', link: '/javascript-nangcao/', overview: 'Đón nhận kiến thức nâng cao bậc nhất của Javascript để xử lý dữ liệu phức tạp.', curriculum: ['Lập trình bất đồng bộ (Promise, Async/Await)', 'HTTP Methods (GET, POST, PUT, DELETE)', 'ES6 Modules & Tách lớp cấu trúc code', 'Web Storage API & Security Rules'], benefits: 'Có khả năng tự xây dựng các thư viện JS nhỏ và tối ưu hóa giao diện người dùng.' },
  { icon: '⚛️', title: 'ReactJS', badge: 'WEB209', desc: 'Xây dựng ứng dụng SPA hiện đại với Hooks, Context API và State Management.', color: '#3b82f6', link: '/react/', overview: 'Học ReactJS theo chuẩn công nghiệp, tập trung vào kiến trúc component tái sử dụng.', curriculum: ['JSX & Component Lifecycle', 'React Hooks (useState, useEffect, useMemo)', 'Context API & Custom Hooks', 'React Router & API Integration'], benefits: 'Sẵn sàng ứng tuyển vào các vị trí Frontend Developer tại các công ty công nghệ.' },
  { icon: '🟢', title: 'VueJS', badge: 'WEB2072', desc: 'Reactivity cơ bản với Composition API, Pinia State Management và TailwindCSS.', color: '#10b981', link: '/vuejs/', overview: 'Framework gọn nhẹ nhưng cực kỳ mạnh mẽ cho phát triển ứng dụng Single Page.', curriculum: ['Composition API & Setup syntax', 'Pinia State Store', 'Vue Router', 'Vite & Custom Components'], benefits: 'Xây dựng sản phẩm nhanh chóng với hiệu năng render tối ưu.' },
  { icon: '🚀', title: 'Node.js & MongoDB', badge: 'WEB209', desc: 'Xây dựng REST API bán hàng hoàn chỉnh với Express, Mongoose, JWT và RBAC.', color: '#f59e0b', link: '/nodejs/api/lesson-1', overview: 'Chinh phục backend toàn diện với Node.js và cơ sở dữ liệu NoSQL MongoDB.', curriculum: ['Express.js Routing & Middleware', 'Mongoose Schema & Aggregation', 'Authentication (JWT) & Authorization (RBAC)', 'Deploy API to Production'], benefits: 'Tự tin thiết kế hệ thống API bảo mật, chịu tải tốt cho mọi loại ứng dụng Client.' },
  { icon: '🤖', title: 'AI for Developers', badge: 'SPECIAL', desc: 'Tích hợp mô hình Gemini AI, thiết kế prompt engineering và xây dựng chatbot.', color: '#8b5cf6', link: '/javascript-nangcao/lesson-9', overview: 'Bứt phá năng suất làm việc bằng cách ứng dụng Generative AI vào công việc hàng ngày.', curriculum: ['Gemini API & SDK Integration', 'Prompt Engineering cho Lập trình viên', 'Xây dựng AI RAG Chatbot', 'Tối ưu hóa quy trình viết code'], benefits: 'Đi đầu xu thế phát triển phần mềm thế hệ mới kết hợp trí tuệ nhân tạo.' }
]



// Three.js instances for cleanup
let mainScene, mainCamera, mainRenderer, mainPoints, mainMeshNodes = []
let techScene, techCamera, techRenderer, techGroup, techSpheres = []

function initHeroUniverse() {
  const container = document.getElementById('universe-canvas-container')
  if (!container || typeof window === 'undefined') return

  const THREE = window.THREE
  if (!THREE) return

  mainScene = new THREE.Scene()
  mainCamera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000)
  mainCamera.position.z = 8

  mainRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  mainRenderer.setSize(container.clientWidth, container.clientHeight)
  mainRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(mainRenderer.domElement)

  // Floating Starfield Particles
  const particleCount = 400
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 16
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const material = new THREE.PointsMaterial({
    size: 0.06,
    color: 0x60a5fa,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  })

  mainPoints = new THREE.Points(geometry, material)
  mainScene.add(mainPoints)

  // Database / API Nodes Network representation
  const nodeCount = 6
  const nodeGeometry = new THREE.SphereGeometry(0.12, 12, 12)
  const nodeMaterial = new THREE.MeshBasicMaterial({
    color: 0x2563eb,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  })

  for (let i = 0; i < nodeCount; i++) {
    const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial)
    nodeMesh.position.set(
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 3
    )
    mainScene.add(nodeMesh)
    mainMeshNodes.push(nodeMesh)
  }

  let mouseX = 0
  let mouseY = 0

  const onMouseMove = (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5
  }

  window.addEventListener('mousemove', onMouseMove)

  let animationFrameId
  function animate() {
    animationFrameId = requestAnimationFrame(animate)

    mainPoints.rotation.y += 0.0006
    mainPoints.rotation.x += 0.0003

    mainMeshNodes.forEach((node, idx) => {
      node.rotation.y += 0.005
      node.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.002
    })

    mainCamera.position.x += (mouseX - mainCamera.position.x) * 0.05
    mainCamera.position.y += (-mouseY - mainCamera.position.y) * 0.05
    mainCamera.lookAt(mainScene.position)

    mainRenderer.render(mainScene, mainCamera)
  }
  animate()

  const onResize = () => {
    if (!container) return
    mainCamera.aspect = container.clientWidth / container.clientHeight
    mainCamera.updateProjectionMatrix()
    mainRenderer.setSize(container.clientWidth, container.clientHeight)
  }

  window.addEventListener('resize', onResize)

  return () => {
    cancelAnimationFrame(animationFrameId)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    if (mainRenderer && mainRenderer.domElement) {
      container.removeChild(mainRenderer.domElement)
    }
  }
}

function initTechUniverse() {
  const container = document.getElementById('tech-orbit-canvas')
  if (!container || typeof window === 'undefined') return

  const THREE = window.THREE
  if (!THREE) return

  techScene = new THREE.Scene()
  techCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
  techCamera.position.z = 10

  techRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  techRenderer.setSize(container.clientWidth, container.clientHeight)
  techRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(techRenderer.domElement)

  techGroup = new THREE.Group()
  techScene.add(techGroup)

  const sphereGeom = new THREE.SphereGeometry(0.3, 16, 16)
  const colors = [0x2563eb, 0x10b981, 0x60a5fa, 0xef4444, 0xf59e0b, 0x8b5cf6]

  for (let i = 0; i < 6; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: colors[i % colors.length],
      wireframe: true,
      transparent: true,
      opacity: 0.8
    })
    const mesh = new THREE.Mesh(sphereGeom, mat)
    
    // Position on an orbit
    const angle = (i / 6) * Math.PI * 2
    const radius = 3.5
    mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
    techGroup.add(mesh)
    techSpheres.push({
      mesh,
      angle,
      radius,
      speed: 0.005 + (i * 0.002)
    })
  }

  // Draw simple orbit lines
  const orbitGeometry = new THREE.RingGeometry(3.48, 3.52, 64)
  const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.05, side: THREE.DoubleSide })
  const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial)
  orbitMesh.rotation.x = Math.PI / 2
  techScene.add(orbitMesh)

  let animationFrameId
  function animate() {
    animationFrameId = requestAnimationFrame(animate)

    techGroup.rotation.y += 0.002
    techGroup.rotation.x = 0.3

    techSpheres.forEach(item => {
      item.angle += item.speed
      item.mesh.position.x = Math.cos(item.angle) * item.radius
      item.mesh.position.y = Math.sin(item.angle) * item.radius
      item.mesh.rotation.y += 0.01
    })

    techRenderer.render(techScene, techCamera)
  }
  animate()

  const onResize = () => {
    if (!container) return
    techCamera.aspect = container.clientWidth / container.clientHeight
    techCamera.updateProjectionMatrix()
    techRenderer.setSize(container.clientWidth, container.clientHeight)
  }

  window.addEventListener('resize', onResize)

  return () => {
    cancelAnimationFrame(animationFrameId)
    window.removeEventListener('resize', onResize)
    if (techRenderer && techRenderer.domElement) {
      container.removeChild(techRenderer.domElement)
    }
  }
}



const scrollTo = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

let destroyHero, destroyTech

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Dynamic load Three.js if not available
    if (!window.THREE) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
      script.onload = () => {
        destroyHero = initHeroUniverse()
        destroyTech = initTechUniverse()
      }
      document.head.appendChild(script)
    } else {
      destroyHero = initHeroUniverse()
      destroyTech = initTechUniverse()
    }


  }
})

onUnmounted(() => {
  if (destroyHero) destroyHero()
  if (destroyTech) destroyTech()
})
</script>

<style scoped>
.landing-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #030712;
  color: #f3f4f6;
  font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
  overflow-x: hidden;
}

#universe-canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  opacity: 0.75;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

/* Modal details */
.node-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 7, 18, 0.85);
  backdrop-filter: blur(12px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.node-modal {
  background: rgba(17, 24, 39, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 24px;
  width: 100%;
  max-width: 580px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(37, 99, 235, 0.25);
}

.modal-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 150px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}

.modal-content {
  padding: 40px;
  position: relative;
  z-index: 2;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 3;
}

.close-btn:hover {
  color: #ffffff;
}

.modal-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 16px;
}

.modal-badge {
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.3);
  color: #60a5fa;
  padding: 4px 10px;
  border-radius: 12px;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin: 12px 0 16px 0;
}

.modal-overview {
  color: #d1d5db;
  line-height: 1.6;
}

.modal-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 24px 0;
}

.modal-curriculum h4, .modal-benefits h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #9ca3af;
  margin-bottom: 12px;
}

.modal-curriculum ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.modal-curriculum li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
  color: #e5e7eb;
}

.modal-curriculum li::before {
  content: '⚡';
  position: absolute;
  left: 0;
  color: #60a5fa;
  font-size: 0.8rem;
}

.modal-benefits p {
  color: #e5e7eb;
  line-height: 1.6;
  margin-bottom: 28px;
}

.modal-cta {
  display: block;
  text-align: center;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: #ffffff;
  padding: 14px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
}

.modal-cta:hover {
  opacity: 0.9;
}

/* SECTION 1: HERO */
.section-hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
}

.hero-glow {
  position: absolute;
  width: 600px;
  height: 300px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(60px);
  pointer-events: none;
}

.hero-content {
  max-width: 900px;
}

.badge-dev {
  display: inline-block;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(129, 140, 248, 0.4);
  color: #a5b4fc;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.2), inset 0 0 10px rgba(99, 102, 241, 0.1);
  text-shadow: 0 0 8px rgba(165, 180, 252, 0.4);
}

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

.hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary-glow {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.35);
  transition: all 0.3s;
  text-decoration: none;
}

.btn-primary-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(37, 99, 235, 0.5);
}

.btn-secondary-border {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f3f4f6;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
  backdrop-filter: blur(10px);
}

.btn-secondary-border:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.scroll-indicator:hover {
  opacity: 1;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #ffffff;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-indicator .text {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* GENERAL SECTION STYLING */
.section-knowledge, .section-methodology, .section-tech-universe, .section-contact {
  padding: 100px 0;
  position: relative;
}

.section-heading {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
}

.section-heading .number {
  color: #2563eb;
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  margin-right: 8px;
}

/* SECTION 2: KNOWLEDGE HUB */
.section-subtext {
  color: #9ca3af;
  margin-top: -36px;
  margin-bottom: 48px;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.knowledge-card {
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 10%, var(--glow-color, rgba(37, 99, 235, 0.1)) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0.3;
  transition: opacity 0.3s;
}

.knowledge-card-inner {
  background: rgba(17, 24, 39, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(12px);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.knowledge-card:hover {
  transform: translateY(-5px);
}

.knowledge-card:hover .card-glow {
  opacity: 0.8;
}

.node-icon {
  font-size: 2.2rem;
  margin-bottom: 16px;
}

.node-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.knowledge-card-inner .node-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid;
  padding: 2px 8px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.knowledge-card-inner .node-desc {
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.5;
  margin-bottom: 24px;
  flex-grow: 1;
}

.node-action {
  font-size: 0.85rem;
  font-weight: 600;
  color: #60a5fa;
}

/* SECTION 3: METHODOLOGY */
.methodology-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.method-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 36px 24px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
}

.method-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.method-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.method-card p {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* SECTION 4: TECH UNIVERSE */
.tech-uni-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.tech-uni-desc {
  color: #9ca3af;
  line-height: 1.6;
  font-size: 1.05rem;
  margin-bottom: 30px;
}

.tech-indicator-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tech-indicator-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
}

.dot-color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-color.vue { background-color: #10b981; }
.dot-color.backend { background-color: #2563eb; }
.dot-color.devops { background-color: #60a5fa; }
.dot-color.ai { background-color: #8b5cf6; }

.tech-uni-canvas-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#tech-orbit-canvas {
  width: 100%;
  height: 100%;
}

.orbit-center-glow {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(96, 165, 250, 0.4);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 2;
}

/* SECTION 5: STATS */
.section-stats {
  background: rgba(17, 24, 39, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
  padding: 60px 0;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-number-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
}

.stat-plus {
  font-size: 2rem;
  color: #2563eb;
  font-weight: 800;
}

.stat-label {
  font-size: 0.95rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* SECTION 6: CONTACT */
.section-contact {
  text-align: center;
  background: radial-gradient(circle at 50% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 60%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-content {
  max-width: 800px;
}

.contact-title {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.2;
}

.contact-subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: #9ca3af;
  margin: 20px 0 40px 0;
  line-height: 1.6;
}

.contact-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* RESPONSIVE DESIGN */
@media (max-width: 968px) {
  .tech-uni-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .hero-ctas, .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
