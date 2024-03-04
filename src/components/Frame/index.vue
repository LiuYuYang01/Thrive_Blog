<script setup lang='ts'>
// 默认显示所有侧边栏模块，可以指定选择哪些显示
const { modules = [] } = defineProps<{ modules?: string[] }>()

const mainWidth = ref<string>("1200px")

const route = useRoute()
const path = route.path

// 根据是文章页还是首页来决定main模块的宽度
watch(route, r => {
    const c = "/" + r.fullPath.split("/")[1]

    if (c === '/article') {
        mainWidth.value = "950px"
    } else {
        mainWidth.value = "1200px"
    }
}, { immediate: true, deep: true })

// 判断是否没有侧边栏
const isSidebar = ref<boolean>(modules.length ? true : false)
</script>

<template>
    <div class="main" :style="{ width: mainWidth }">
        <!-- 如果是首页并且没有侧边栏就 -->
        <div class="left" :style="{ width: path === '/' && isSidebar ? '75%' : '85%' }">
            <!-- 文章列表经典风格 -->
            <slot />
        </div>

        <!-- 如果有侧边栏就让他显示，否则就隐藏 -->
        <div class="right" :style="{ display: isSidebar ? 'block' : 'none' }">
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
        width: 23%;
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