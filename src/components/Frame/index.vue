<script setup lang='ts'>
// 默认显示所有侧边栏模块，可以指定选择哪些显示
const { modules = [] } = defineProps<{ modules?: string[] }>()

const route = useRoute()
const path = route.path

// 判断是否没有侧边栏
const isSidebar = ref<boolean>(modules.length ? true : false)
</script>

<template>
    {{ isSidebar }}
    <div class="main" style="width: 1200px">
        <div class="left" :style="{ width: path === '/' ? '73%' : '100%' }">
            <!-- 文章列表经典风格 -->
            <slot />
        </div>

        <!-- 有侧边栏就显示，没有就不显示 -->
        <div class="right" v-if="path !== '/' && !isSidebar || path === '/' && isSidebar">
            <div class="sticky">
                <!-- 作者信息 -->
                <Author v-if="modules.includes('Author')" />
                <!-- 推荐文章 -->
                <HotArticle v-if="modules.includes('HotArticle')" />
                <!-- 随机文章 -->
                <!-- <RandomArticle v-if="modules.includes('RandomArticle')" /> -->
                <!-- 最新评论 -->
                <NewComments v-if="modules.includes('NewComments')" />
                <!-- 文章目录 -->
                <Directory />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/global.scss";

.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    margin: 0 auto;

    .left {
        margin: 0 auto;
        transition: width $move;
    }

    .right {
        width: 24%;
        border-radius: $round;
        transition: width $move;

        // 粘性定位
        .sticky {
            position: sticky;
            top: 70px;
        }
    }
}
</style>