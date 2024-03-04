<script setup lang='ts'>
import { getArticleListAPI } from '@/api/Article'

import { useConfigStore } from '@/stores/Config'
const store = useConfigStore()
const isArticleLayout = store.isArticleLayout

// 全屏加载效果
const loading = ref<boolean>(false)

// 分页查询
const article = ref<Paginate<Article[]>>()

// 获取文章列表
const getArticleList = async (params: Page) => {
  loading.value = true

  // @ts-ignore
  const { data } = await getArticleListAPI(params)
  article.value = data

  loading.value = false
}
getArticleList({ page: 1, size: 5 })

// 打字机文案
const data = ['print(" 互联网从不缺乏天才, 而努力才是最终的入场券!")', 'console.log("路虽远, 行则将至, 事虽难, 做则必成!")']
</script>

<template>
  <Swiper :data="data" src="https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg"></Swiper>

  <Frame :modules='["Author", "HotArticle", "RandomArticle", "NewComments"]'>
    <Classics :data="article!" @get="getArticleList" v-if="isArticleLayout === 'classics'" />
    <Card :data="article!" @get="getArticleList" v-if="isArticleLayout === 'card'" />
    
    <Loading v-model="loading"></Loading>
  </Frame>
</template>

<style scoped></style>