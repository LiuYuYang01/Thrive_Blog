<script setup lang="ts">
import { getCateListAPI } from '@/api/Cate';
import { getArticleListAPI } from '@/api/Article';
import { Cate } from '@/types/Cate';
import { Article } from '@/types/Article';

// 随机预览图
import { randomImage } from '@/util/randomImage'

const r = useRoute()

// 全屏加载效果
const isLoading = ref<boolean>(false)

// 当前分类
const CateName = ref<string>("")
// 当前分类下的文章
const ArticleData = ref<Article[]>([])

watch(r, async () => {
  // 拿到当前分类别名
  const mark = r.path.split("/")[r.path.split("/").length - 1]

  isLoading.value = true
  const Cate = await getCateListAPI()
  isLoading.value = false

  // 通过分类别名拿到分类名称
  Cate.data.forEach((one: Cate) => {
    if (one.mark === mark) {
      CateName.value = one.name
    } else {
      one.children.forEach((two: Cate) => {
        if (two.mark === mark) {
          CateName.value = two.name
        }
      })
    }
  })

  // 先清除之前的文章数据
  ArticleData.value = []

  // 筛选当前分类下的文章
  const Article = await getArticleListAPI()
  Article.data.forEach(item => {
    if (item.cate === CateName.value) {
      ArticleData.value.push(item)
    }
  })
}, { immediate: true, deep: true })
</script>

<template>
  <Swiper :src="randomImage()">
    <div class="title">{{ CateName }} ~ 共 {{ ArticleData.length }} 篇文章</div>
  </Swiper>

  <div class="main">
    <loading :loading="isLoading"/>
    
    <Classics :data="ArticleData" />
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
