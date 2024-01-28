<script setup lang='ts'>
import { getArticleListAPI } from '@/api/Article'

// 全屏加载效果
const isLoading = ref<boolean>(false)

// 文章列表
const list = ref<Article[]>([])

// 文章总数
const total = ref<number>(0)

// 获取文章列表
const getArticleList = async (params: Page) => {
  isLoading.value = true

  // @ts-ignore
  const { data } = await getArticleListAPI(params)
  total.value = data.total
  list.value = data.result

  isLoading.value = false
}
getArticleList({ page: 1, size: 5 })

// 打字机文案
const data = ['print(" 互联网从不缺乏天才, 而努力才是最终的入场券!")', 'console.log("路虽远, 行则将至, 事虽难, 做则必成!")']
</script>

<template>
  <Swiper :data="data" src="https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg"></Swiper>

  <Frame :modules='["Author", "HotArticle", "RandomArticle", "NewComments"]'>
    <Classics :data="list" @getArticleData="getArticleList" :total="total" />
  </Frame>
</template>

<style scoped></style>