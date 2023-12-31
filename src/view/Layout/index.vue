<script setup lang='ts'>
// 引入五彩纸屑
import { Fireworks } from './confetti'

import Header from './Header.vue'
import Footer from './Footer.vue'

Fireworks()

// @ts-ignore
import updateTitle from '@/util/updateTitle'

onBeforeRouteUpdate(to => {
  Fireworks()

  document.title = "博客名称 - " + (to.meta.title as string)
})
</script>

<template>
  <!-- 进度条组件 -->
  <Nprogress />

  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>