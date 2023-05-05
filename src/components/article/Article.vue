<script setup lang='ts'>
// 引入五彩纸屑
// import confetti from 'canvas-confetti';
</script>

<template>
    <div class="main">
        <div class="left">
            <!-- 文章列表经典风格 -->
            <Classics></Classics>
        </div>

        <div class="right">
            <div class="sticky">
                <!-- 作者信息 -->
                <Author />
                <!-- 热门文章 -->
                <HotArticle />
                <!-- 随机文章 -->
                <RandomArticle />
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
        width: 75%;
    }

    .right {
        width: 23%;
        border-radius: $round;

        // 粘性定位
        .sticky {
            position: sticky;
            top: 70px;
        }
    }
}
</style>