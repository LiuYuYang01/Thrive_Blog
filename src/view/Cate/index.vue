<script setup lang="ts">
import { getCateListAPI } from '@/api/Cate';
import { getArticleListAPI } from '@/api/Article';
import { Cate } from '@/types/Cate';
import { Article } from '@/types/Article';

const r = useRoute()

// 当前分类
const CateName = ref<string>("")
// 当前分类下的文章
const ArticleData = ref<Article[]>([])

watch(r, async () => {
  // 拿到当前分类别名
  const mark = r.path.split("/")[r.path.split("/").length - 1]

  const Cate = await getCateListAPI()

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

  // 筛选当前分类下的文章
  const Article = await getArticleListAPI()
  Article.data.forEach(item => {
    if (item.cate === CateName.value) {
      ArticleData.value.push(item)
    }
  })

  console.log(ArticleData.value,333);
  
}, { immediate: true, deep: true })
</script>

<template>
  <Swiper src="https://blog.isww.cn/usr/uploads/2021/02/944672060.jpg" :Typing="true">
    <div class="title">{{ CateName }} ~ 共 10 篇文章</div>
  </Swiper>

  <div class="main">
    <Classics :data="ArticleData"/>
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
}
</style>
