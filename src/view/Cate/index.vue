<script setup lang="ts">
// import { getCateListAPI } from '@/api/Cate';
import { getArticleCateListAPI, getArticleListAPI } from '@/api/Article';

// 随机预览图
import { randomImage } from '@/util/RandomImage'

const route = useRoute()

onMounted(() => {
  document.title = "分类 - " + (route.query.name as string) + "下的文章"
})

onBeforeRouteUpdate(to => {
  document.title = "分类 - " + (to.query.name as string) + "下的文章"
})

// 全屏加载效果
const loading = ref<boolean>(false)

// 当前分类
const cateName = ref<string>("")
// 当前分类下的文章
const article = ref<Paginate<Article[]>>()

// 获取指定分类下的所有文章
const getArticleCateList = async (mark: string) => {
  const { data } = await getArticleCateListAPI(mark)
  article.value = data
}

watch(() => route.params, r => {
  cateName.value = route.query.name as string
  
  !r.two ? getArticleCateList(r.one as string) : getArticleCateList(r.two as string)
}, { immediate: true })
</script>

<template>
  <Swiper :src="randomImage()">
    <div class="title" v-if="article?.result">{{ cateName }} ~ 共 {{ article!.result.length }} 篇文章</div>
  </Swiper>

  <div class="main">
    <Classics :data="article!" v-if="article?.result" />
  </div>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  color: #fff;
  font-size: 40px;
  text-shadow: 0 0.1875rem 0.5rem #1c1f21;
}

.main {
  width: 850px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>
