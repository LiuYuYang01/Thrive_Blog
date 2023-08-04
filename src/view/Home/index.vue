<script setup lang='ts'>
import { Article } from '@/types/Article'
import { getArticleListAPI } from '@/api/Article'

const articleList = ref<Article[]>([])

// 获取文章列表
const getArticleData = async () => {
  const { data } = await getArticleListAPI()
  articleList.value = data
}
getArticleData()
</script>

<template>
  <Swiper src="http://static.liuyuyang.net/images/t01d6f5fd3610da0a08.jpg"></Swiper>

  <Frame :modules='["Author", "HotArticle", "RandomArticle", "NewComments"]'>
    <Classics :data="articleList" />
  </Frame>
</template>

<style scoped></style>