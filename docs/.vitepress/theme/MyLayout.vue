<script setup>
import DefaultTheme from 'vitepress/theme'
import {ref} from 'vue'

const { Layout } = DefaultTheme

const isBannerVisible = ref(true)

function closeBanner() {
  isBannerVisible.value = false
}
</script>

<template>
  <Layout>
    <template #home-features-after>
      <section v-if="isBannerVisible" class="endof10">
        <div class="banner-wrapper">
          <a class="banner-link" href="https://endof10.org/pt-br">
            <svg class="banner-icon" viewBox="0 0 688.235 754">
              <rect width="260.474" height="260.474" x="-36.543" y="129.876" opacity=".4" rx="43.06" style="stroke-width:.920077" transform="rotate(-15.111)"></rect>
              <rect width="260.474" height="260.474" x="407.612" y="96.465" opacity=".4" rx="43.06" style="stroke-width:.920077"></rect>
              <rect width="260.474" height="260.474" x="117.716" y="386.36" opacity=".4" rx="43.06" style="stroke-width:.920077"></rect>
              <rect width="260.474" height="260.474" x="486.185" y="332.836" opacity=".4" rx="43.06" style="stroke-width:.920077" transform="rotate(7.911)"></rect>
            </svg>
            <span class="banner-text">
              Continue usando seu PC após o término do suporte do Windows 10 agora em outubro.
              <strong>Visite endof10.org/pt-br</strong>
            </span>
          </a>
        </div>
        <button @click="closeBanner" class="close-banner" aria-label="Fechar Banner" title="Fechar Banner">×</button>
      </section>
    </template>
  </Layout>
</template>