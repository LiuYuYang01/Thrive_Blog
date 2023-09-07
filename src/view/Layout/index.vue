<script setup lang='ts'>
// 引入五彩纸屑
import { Fireworks } from './confetti'

import Header from './Header.vue'
import Footer from './Footer.vue'

Fireworks()

onBeforeRouteUpdate(to => {
  Fireworks()
})
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>