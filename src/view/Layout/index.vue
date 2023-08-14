<script setup lang='ts'>
// 引入五彩纸屑
// import './confetti'

import Header from './Header.vue'
import Footer from './Footer.vue'

// 简化写法
const $css = document.documentElement.style

import { useRoute } from 'vue-router'
const route = useRoute()

// 如果路由在该数组中，那么就将css的变量$bgColor设置为#fff否则为#f9f9f9
const pages = ["/diary","/article"]

// 监听整个route对象的变化
watch(() => route, r => {
  const c = "/" + r.fullPath.split("/")[1]

  // 查询pages数组中是否包含对应路由的信息
  const is = pages.includes(c)

  is ? $css.setProperty("--bgColor", "#fff") : $css.setProperty("--bgColor", "#f9f9f9")
}, { immediate: true, deep: true })
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>