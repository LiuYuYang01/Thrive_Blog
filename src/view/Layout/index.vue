<script setup lang='ts'>
import { useWebStore } from '@/stores'
import { getWebDataAPI } from '@/api/Project';

// 引入五彩纸屑
import Fireworks from './hooks/confetti'

import Header from './Header.vue'
import Footer from './Footer.vue'

const store = useWebStore()
const { webConfig } = storeToRefs(store)

const route = useRoute()

// 礼花弹出效果
Fireworks()

// 设置不显示星空颗粒背景的页面
const StarrySkyList = ["/chat", "/diary"]

// 动态更改标题
const updateTitle = (r: any) => {
  // 如果是首页就显示副标题
  if (r.path === "/") {
    document.title = `${webConfig.value.title} - ${webConfig.value.subhead}`
  } else {
    let title = `${webConfig.value.title} - ` + (r.meta.title as string)

    if (r.query.name) title = `${(r.meta.title as string)} - ${r.query.name}下的文章`

    document.title = title
  }
}

// 默认加载页面时获取页面title
onMounted(async () => {
  // 判断是否显示星空颗粒背景
  const StarrySky: HTMLStyleElement = document.querySelector(".StarrySky")!
  StarrySkyList.includes(route.path) ? StarrySky.style.display = "none" : StarrySky.style.display = "block"

  if (route.query.name) return

  await store.getWebData()

  updateTitle(route)
})

// 每次切换页面时重新获取页面title
onBeforeRouteUpdate(to => {
  Fireworks()

  updateTitle(to)

  // 判断是否显示星空颗粒背景
  const StarrySky: HTMLStyleElement = document.querySelector(".StarrySky")!
  StarrySkyList.includes(route.path) ? StarrySky.style.display = "none" : StarrySky.style.display = "block"
})
</script>

<template>
  <!-- 进度条组件 -->
  <Nprogress />

  <Header />

  <RouterView />

  <!-- <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView> -->

  <!-- <Footer /> -->
</template>

<style scoped></style>./hooks/confetti