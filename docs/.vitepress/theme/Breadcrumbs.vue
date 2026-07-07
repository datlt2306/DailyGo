<template>
  <nav v-if="breadcrumbs.length > 0" class="breadcrumbs-container" aria-label="Breadcrumb">
    <ol class="breadcrumbs-list">
      <li v-for="(item, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <span v-if="index > 0" class="breadcrumb-separator">/</span>
        <a v-if="item.link" :href="item.link" class="breadcrumb-link">{{ item.label }}</a>
        <span v-else class="breadcrumb-current">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { useRoute, useData } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const { page } = useData()

const breadcrumbs = computed(() => {
  const path = route.path
  // Don't show breadcrumbs on the homepage
  if (path === '/' || path === '/index.html' || !path) {
    return []
  }

  const segments = path.split('/').filter(Boolean)
  const list = [{ label: 'Trang chủ', link: '/' }]

  let currentLink = ''
  
  // Filter out empty segment cases
  segments.forEach((segment, index) => {
    // If it's index.html, skip adding it as a separate segment
    if (segment === 'index.html' && index === segments.length - 1) {
      return
    }

    currentLink += `/${segment}`
    const isLast = index === segments.length - 1
    
    let label = segment.replace('.html', '')
    let link = currentLink

    // Map segments to beautiful Vietnamese labels matching navigation
    if (segment === 'javascript') {
      label = 'JavaScript'
      link = '/javascript/'
    } else if (segment === 'react') {
      label = 'ReactJS'
      link = '/react/'
    } else if (segment === 'vuejs') {
      label = 'VueJS'
      link = '/vuejs/'
    } else if (segment === 'nodejs') {
      label = 'NodeJS & MongoDB'
      link = '/nodejs/api/lesson-1'
    } else if (segment === 'api') {
      label = 'REST API'
      link = '/nodejs/api/lesson-1'
    } else if (segment === 'wordpress') {
      label = 'WordPress Theme & Plugin'
      link = '/wordpress/'
    } else if (segment === 'laptrinhcanban') {
      label = 'Lập trình C'
      link = '/laptrinhcanban/'
    } else if (segment === 'pro1014') {
      label = 'Dự án 1'
      link = '/pro1014/'
    } else if (segment === 'git') {
      label = 'Git & GitHub'
      link = '/git/'
    } else if (segment === 'blog') {
      label = 'Blog'
      link = '/blog/'
    }

    if (isLast) {
      // Use the actual lesson title for the last segment
      label = page.value.title || label
      list.push({ label, link: null })
    } else {
      list.push({ label, link })
    }
  })

  // Prevent single "Trang chủ" breadcrumb
  if (list.length <= 1) {
    return []
  }

  return list
})
</script>

<style scoped>
.breadcrumbs-container {
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 0.85rem;
}

.breadcrumbs-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  color: var(--vp-c-text-2);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-separator {
  margin: 0 8px;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  user-select: none;
}

.breadcrumb-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 500;
}

.breadcrumb-link:hover {
  color: var(--vp-c-brand-1);
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: 600;
}
</style>
