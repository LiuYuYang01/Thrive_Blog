<script setup lang='ts'>
import { getArticleListAPI } from '@/api/Article'

import { useConfigStore } from '@/stores/Config'
const store = useConfigStore()
const isArticleLayout = store.isArticleLayout
const rightSidebarList = store.rightSidebarList
const swiperText = store.swiperText

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
</script>

<template>
  <Swiper :data="swiperText" src="https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg"></Swiper>

  <Frame :modules='rightSidebarList'>
    <Classics :data="article!" @get="getArticleList" v-if="isArticleLayout === 'classics'" />
    <Card :data="article!" @get="getArticleList" v-if="isArticleLayout === 'card'" />

    <Loading v-model="loading"></Loading>
  </Frame>
</template>

<style scoped></style>