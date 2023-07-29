<script setup lang='ts'>
// 引入五彩纸屑
// import confetti from 'canvas-confetti';

// 默认显示所有侧边栏模块，可以指定选择哪些显示
const { modules = ["Author", "HotArticle", "RandomArticle", "NewComments"]} = defineProps<{ modules?: string[] }>()
</script>

<template>
    <div class="main">
        <div class="left">
            <!-- 文章列表经典风格 -->
            <slot />
        </div>

        <div class="right">
            <div class="sticky">
                <!-- 作者信息 -->
                <Author v-if="modules.includes('Author')" />
                <!-- 热门文章 -->
                <HotArticle v-if="modules.includes('HotArticle')" />
                <!-- 随机文章 -->
                <RandomArticle v-if="modules.includes('RandomArticle')" />
                <!-- 最新评论 -->
                <NewComments v-if="modules.includes('NewComments')" />
                <!-- 文章目录 -->
                <Directory v-if="modules.includes('Directory')"/>
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
    width: $w;
    padding: 20px;
    margin: 0 auto;

    .left {
        // width: 75%;
        width: 100%;
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