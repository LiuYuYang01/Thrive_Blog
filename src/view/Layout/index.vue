<script setup lang='ts'>
import { getWebDataAPI } from '@/api/Project';

// 引入五彩纸屑
import Fireworks from './hooks/confetti'

import Header from './Header.vue'
import Footer from './Footer.vue'

Fireworks()

const route = useRoute()

// 网站配置信息
const webConfig = ref<WebConfig>({
  description: "",
  keyword: "",
  logo: "",
  subhead: "",
  title: ""
})

// 获取网站配置信息
const getWebData = async () => {
  const { data } = await getWebDataAPI()
  webConfig.value = data
}

// 动态更改标题
const updateTitle = () => {
  // 如果是首页就显示副标题
  if (route.path === "/") {
    document.title = `${webConfig.value.title} - ${webConfig.value.subhead}`
  } else {
    document.title = `${webConfig.value.title} - ` + (route.meta.title as string)
  }
}

// 默认加载页面时获取页面title
onMounted(async () => {
  if (route.query.name) return

  await getWebData()

  updateTitle()
})

// 每次切换页面时重新获取页面title
onBeforeRouteUpdate(to => {
  Fireworks()

  updateTitle()
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

  <Footer />
</template>

<style scoped></style>./hooks/confetti