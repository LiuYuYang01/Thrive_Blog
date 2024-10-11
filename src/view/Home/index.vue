<script setup lang='ts'>
import { svg } from "@/utils"

import { getArticleListAPI } from '@/api/Article'

import { useConfigStore } from '@/stores/Config'
const store = useConfigStore()
store.getLayoutData()

const { layout } = storeToRefs(store)

const swiperText = ref<string[]>([])
watch(() => store.layout.swiperText, data => swiperText.value = data)

// 全屏加载效果
const loading = ref<boolean>(false)

// 分页查询
const article = ref<Paginate<Article[]>>()

// 获取文章列表
const getArticleList = async (params: Page) => {
  loading.value = true

  const { data } = await getArticleListAPI(params)

  // 如果是瀑布流布局就设置为懒加载模式，否则为分页模式
  if (article.value && store.layout.isArticleLayout === "waterfall") {
    if (article.value && article.value.page > article.value.pages) return

    article.value.result = [...article.value.result, ...data.result]
  } else {
    article.value = data
  }

  // 跳转到顶部
  //你说得第三章都
  window.scrollTo(0, 0);

  loading.value = false
}

layout.value.isArticleLayout !== 'waterfall' ? getArticleList({ page: 1, size: 5 }) : getArticleList({ page: 1, size: 4 })
</script>

<template>
  <Swiper :data="swiperText" :src="layout.swiperImage" v-if="swiperText.length"></Swiper>

  <Frame :modules='layout.rightSidebar' v-loading="loading" :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50">
    <Classics :data="article!" @get="getArticleList" v-if="layout.isArticleLayout === 'classics'" />
    <Card :data="article!" @get="getArticleList" v-if="layout.isArticleLayout === 'card'" />
    <Waterfall :data="article!" @get="getArticleList" v-if="layout.isArticleLayout === 'waterfall'" />
  </Frame>
</template>

<style scoped></style>