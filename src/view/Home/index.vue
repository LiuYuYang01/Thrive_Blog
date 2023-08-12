<script setup lang='ts'>
import { Article } from '@/types/Article'
import { getArticleListAPI } from '@/api/Article'

// 全屏加载效果
const isLoading = ref<boolean>(false)

const articleList = ref<Article[]>([])

// 获取文章列表
const getArticleData = async () => {
  isLoading.value = true

  const { data } = await getArticleListAPI()
  articleList.value = data

  isLoading.value = false
}
getArticleData()
</script>

<template>
  <Swiper src="http://static.liuyuyang.net/images/t01d6f5fd3610da0a08.jpg"></Swiper>

  <Frame :modules='["Author", "HotArticle", "RandomArticle", "NewComments"]'>
    <loading :loading="isLoading"/>
    
    <Classics :data="articleList" />
  </Frame>
</template>

<style scoped></style>