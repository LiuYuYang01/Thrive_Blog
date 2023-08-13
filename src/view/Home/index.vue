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

// 打字机文案
const data = ['print(" 互联网从不缺乏天才, 而努力才是最终的入场券!")', 'console.log("路虽远, 行则将至, 事虽难, 做则必成!")' ]
</script>

<template>
  <Swiper :data="data" src="http://static.liuyuyang.net/images/t01d6f5fd3610da0a08.jpg"></Swiper>

  <Frame :modules='["Author", "HotArticle", "RandomArticle", "NewComments"]'>
    <loading :loading="isLoading"/>
    
    <Classics :data="articleList" />
  </Frame>
</template>

<style scoped></style>