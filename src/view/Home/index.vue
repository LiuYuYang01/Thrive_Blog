<script setup lang='ts'>
import { getArticleListAPI } from '@/api/Article'

// 全屏加载效果
const isLoading = ref<boolean>(false)

const articleList = ref<Article[]>([])

// 文章总数
const total = ref<number>(0)

// 获取文章列表
const getArticleData = async (params: Page) => {
  isLoading.value = true

  // @ts-ignore
  const { data, paginate } = await getArticleListAPI(params)
  total.value = paginate.total
  articleList.value = data

  isLoading.value = false
}
// getArticleData()

// 打字机文案
const data = ['print(" 互联网从不缺乏天才, 而努力才是最终的入场券!")', 'console.log("路虽远, 行则将至, 事虽难, 做则必成!")']
</script>

<template>
  <!-- <Swiper :data="data" src="http://static.liuyuyang.net/images/t01d6f5fd3610da0a08.jpg"></Swiper> -->
  <Swiper :data="data" src="https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg"></Swiper>

  <Frame :modules='["Author", "HotArticle", "RandomArticle", "NewComments"]'>
    <!-- <loading :loading="isLoading" /> -->

    <Classics :data="articleList" @getArticleData="getArticleData" :total="total" />
  </Frame>
</template>

<style scoped></style>